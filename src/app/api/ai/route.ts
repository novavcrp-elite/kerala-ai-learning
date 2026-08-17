import { NextRequest, NextResponse } from 'next/server';
import { buildChapterContext, buildMultiChapterContext } from '@/data/chapters';
import { keralaBoardData } from '@/data/kerala-board-data';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, context, language = 'en', classNumber, subjectCode, chapterNumber, chapterNumbers } = body;

    const apiKey = process.env.OPENROUTER_API_KEY;
    
    // Build chapter context from our database
    let textbookContext = '';
    if (classNumber && subjectCode) {
      if (chapterNumbers && chapterNumbers.length > 0) {
        textbookContext = buildMultiChapterContext(classNumber, subjectCode, chapterNumbers, language);
      } else if (chapterNumber) {
        textbookContext = buildChapterContext(classNumber, subjectCode, chapterNumber, language);
      }
    }

    // Get subject and class names
    let subjectName = '';
    let className = '';
    const classData = keralaBoardData.find(c => c.number === classNumber);
    if (classData) {
      className = classData.name;
      const subject = classData.subjects.find(s => s.code === subjectCode);
      if (subject) {
        subjectName = language === 'ml' ? subject.nameMl : subject.name;
      }
    }

    // Build the system prompt
    const langInstruction = language === 'ml'
      ? 'You MUST respond in Malayalam. Use Malayalam script for all explanations while keeping English technical/scientific terms where appropriate. For example: "പ്രകാശത്തിന്റെ പ്രതിഫലനം (Reflection of Light) എന്നത്..." Preserve original textbook terminology in English alongside Malayalam translations.'
      : 'Respond in English. Use clear, simple language suitable for Kerala Board students.';

    const systemPrompt = `You are Paddikam AI Teacher — an expert Kerala State Board (SCERT) tutor for Class ${classNumber || '1-10'} students.

YOUR ROLE:
- You are a knowledgeable, patient, and encouraging teacher
- You specialize in Kerala SCERT (State Council of Educational Research and Training) curriculum
- You help students understand concepts, prepare for exams, and score well in SSLC/HSE exams
- You explain in simple, clear language that students can easily understand
- You give exam-focused answers with key points and marks allocation

CRITICAL RULES:
1. ONLY use information from the provided textbook content. Do NOT make up or guess information.
2. If the textbook content is provided below, base ALL your answers strictly on it.
3. If a student asks about something not in the provided content, say "This topic is not covered in the current textbook chapter. Please check with your teacher for more details."
4. Always give structured, exam-ready answers with numbered points.
5. When explaining, use real examples from the Kerala Board textbook.
6. For Malayalam responses, keep English scientific terms and translate explanations.

${langInstruction}

${context ? `\nAdditional context: ${context}` : ''}

ANSWER FORMAT:
- Start with a direct answer
- Give key points in numbered list
- Add a "Exam Tip" if relevant
- Use the textbook's exact terminology
- For character questions in English: list ALL characters with their descriptions
- For science questions: include formulas, definitions, and examples
- For social science: include dates, names, events, and significance`;

    // Build the user message with textbook context
    let userMessage = message;
    if (textbookContext) {
      userMessage = `[TEXTBOOK CONTENT FOR ${className} - ${subjectName}${chapterNumber ? `, Chapter ${chapterNumber}` : ''}]

${textbookContext}

---

STUDENT'S QUESTION: ${message}

Please answer based on the textbook content above. If the question cannot be answered from the provided content, say so clearly.`;
    }

    if (!apiKey) {
      // Fallback: return template response with textbook context
      return NextResponse.json({
        response: generateFallbackResponse(message, textbookContext, language, className, subjectName, chapterNumber),
        source: 'template'
      });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://paddikam-gooys.vercel.app',
        'X-Title': 'Paddikam AI Teacher',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', response.status, errorText);
      return NextResponse.json({
        response: generateFallbackResponse(message, textbookContext, language, className, subjectName, chapterNumber),
        source: 'fallback'
      });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response. Please try again.';

    return NextResponse.json({ response: aiResponse, source: 'ai' });
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

function generateFallbackResponse(
  message: string,
  context: string,
  language: string,
  className: string,
  subjectName: string,
  chapterNumber?: number
): string {
  const isMl = language === 'ml';
  
  if (context) {
    // Extract relevant info from context
    const lines = context.split('\n');
    const keyPoints: string[] = [];
    const qas: { q: string; a: string }[] = [];
    let inKeyPoints = false;
    let inQA = false;
    let currentQ = '';
    let currentA = '';

    for (const line of lines) {
      if (line.startsWith('Key Points:')) {
        inKeyPoints = true;
        inQA = false;
        continue;
      }
      if (line.startsWith('Important Q&A:')) {
        inQA = true;
        inKeyPoints = false;
        continue;
      }
      if (inKeyPoints && line.match(/^\d+\./)) {
        keyPoints.push(line.replace(/^\d+\.\s*/, ''));
      }
      if (inQA) {
        if (line.startsWith('Q: ')) {
          if (currentQ && currentA) qas.push({ q: currentQ, a: currentA });
          currentQ = line.substring(3);
          currentA = '';
        } else if (line.startsWith('A: ')) {
          currentA = line.substring(3);
        }
      }
    }
    if (currentQ && currentA) qas.push({ q: currentQ, a: currentA });

    // Try to find relevant Q&A
    const msgLower = message.toLowerCase();
    const relevantQA = qas.filter(qa => {
      const qLower = qa.q.toLowerCase();
      return msgLower.split(' ').some(w => w.length > 3 && qLower.includes(w));
    });

    if (relevantQA.length > 0) {
      const answer = relevantQA.map(qa => `**${qa.q}**\n\n${qa.a}`).join('\n\n');
      return answer;
    }

    // Return key points summary
    if (keyPoints.length > 0) {
      const header = isMl
        ? `**${className} - ${subjectName} (Chapter ${chapterNumber})**\n\n`
        : `**${className} - ${subjectName} (Chapter ${chapterNumber})**\n\n`;
      return header + keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n');
    }
  }

  return isMl
    ? `ക്ഷമിക്കണം, ഈ ചോദ്യത്തിന് കൃത്യമായ ഉത്തരം നൽകാൻ എനിക്ക് കഴിയുന്നില്ല. ദയവായി നിങ്ങളുടെ അധ്യാപകനോട് ചോദിക്കുക.`
    : `Sorry, I couldn't provide an exact answer to this question. Please check with your teacher for more details.`;
}
