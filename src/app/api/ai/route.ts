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

    const langInstruction = language === 'ml'
      ? 'You MUST respond in Malayalam. Keep English scientific terms. For example: "പ്രകാശത്തിന്റെ പ്രതിഫലനം (Reflection of Light)..." Preserve original textbook terminology.'
      : 'Respond in English. Use clear, simple language suitable for Kerala Board students.';

    const systemPrompt = `You are Paddikam AI Teacher — an expert Kerala State Board (SCERT) tutor for Class ${classNumber || '1-10'} students.

YOUR ROLE:
- You are a knowledgeable, patient, and encouraging teacher
- You specialize in Kerala SCERT curriculum
- You help students understand concepts and prepare for exams
- You explain in simple, clear language
- You give exam-focused answers with key points

RULES:
1. Use the provided textbook content to answer questions accurately
2. Always give structured answers with numbered points
3. If the textbook content does not cover the exact question, use your general knowledge of Kerala Board topics to help the student
4. Never say "I cannot answer" — always try to help the student
5. Give real, detailed answers with examples
6. For Malayalam responses, keep English technical terms

${langInstruction}

ANSWER FORMAT:
- Start with a direct answer
- Give key points in numbered list
- Add exam tips if relevant
- Be detailed and helpful`;

    // Build the user message with textbook context
    let userMessage = message;
    if (textbookContext) {
      userMessage = `[TEXTBOOK CONTENT FOR ${className} - ${subjectName}${chapterNumber ? `, Chapter ${chapterNumber}` : ''}]

${textbookContext}

---

STUDENT'S QUESTION: ${message}

Please answer this question based on the textbook content above. Be detailed and helpful. Give a complete answer with numbered points.`;
    }

    if (!apiKey) {
      return NextResponse.json({
        response: generateGoodFallback(message, textbookContext, language, className, subjectName, chapterNumber),
        source: 'template'
      });
    }

    // Try OpenRouter API
    let aiResponse = '';
    let apiSuccess = false;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://paddikam-gooys.vercel.app',
          'X-Title': 'Paddikam AI Teacher',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
          ],
          max_tokens: 3000,
          temperature: 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        aiResponse = data.choices?.[0]?.message?.content || '';
        if (aiResponse && aiResponse.length > 20) {
          apiSuccess = true;
        }
      } else {
        const errText = await response.text();
        console.error('OpenRouter error:', response.status, errText.substring(0, 200));
      }
    } catch (fetchErr) {
      console.error('Fetch error:', fetchErr);
    }

    if (apiSuccess) {
      return NextResponse.json({ response: aiResponse, source: 'ai' });
    }

    // AI failed — return good fallback with textbook content
    return NextResponse.json({
      response: generateGoodFallback(message, textbookContext, language, className, subjectName, chapterNumber),
      source: 'textbook'
    });
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

function generateGoodFallback(
  message: string,
  context: string,
  language: string,
  className: string,
  subjectName: string,
  chapterNumber?: number
): string {
  const isMl = language === 'ml';
  
  if (context) {
    const lines = context.split('\n');
    const keyPoints: string[] = [];
    const allLines: string[] = [];
    const qas: { q: string; a: string }[] = [];
    let inKeyPoints = false;
    let inQA = false;
    let inSummary = false;
    let currentQ = '';
    let currentA = '';
    let summary = '';

    for (const line of lines) {
      allLines.push(line);
      
      if (line.startsWith('Summary:') || line.startsWith('Summary\\n')) {
        inSummary = true;
        inKeyPoints = false;
        inQA = false;
        continue;
      }
      if (line.startsWith('Key Points:') || line.startsWith('Key Points\\n')) {
        inKeyPoints = true;
        inSummary = false;
        inQA = false;
        continue;
      }
      if (line.startsWith('Important Q&A:') || line.startsWith('Important Q&A\\n')) {
        inQA = true;
        inKeyPoints = false;
        inSummary = false;
        continue;
      }
      if (line.startsWith('Characters:') || line.startsWith('Definitions:') || line.startsWith('Themes:')) {
        inSummary = false;
        inKeyPoints = false;
        inQA = false;
        continue;
      }
      
      if (inSummary && line.trim()) {
        summary += line + ' ';
      }
      if (inKeyPoints && line.trim()) {
        keyPoints.push(line.replace(/^\d+\.\s*/, '').trim());
      }
      if (inQA) {
        if (line.startsWith('Q: ')) {
          if (currentQ && currentA) qas.push({ q: currentQ, a: currentA });
          currentQ = line.substring(3);
          currentA = '';
        } else if (line.startsWith('A: ')) {
          currentA = line.substring(3);
        } else if (currentA && line.trim() && !line.startsWith('Q: ')) {
          currentA += ' ' + line;
        }
      }
    }
    if (currentQ && currentA) qas.push({ q: currentQ, a: currentA });

    // Find relevant Q&A with broader matching
    const msgLower = message.toLowerCase();
    const words = msgLower.split(/\s+/).filter(w => w.length > 2);
    
    const relevantQA = qas.filter(qa => {
      const qLower = qa.q.toLowerCase();
      const aLower = qa.a.toLowerCase();
      const combined = qLower + ' ' + aLower;
      return words.some(w => combined.includes(w));
    });

    // Also try to find the closest matching Q&A
    const bestMatch = qas.reduce((best, qa) => {
      const qLower = qa.q.toLowerCase();
      const score = words.filter(w => qLower.includes(w)).length;
      return score > best.score ? { qa, score } : best;
    }, { qa: null as typeof qas[0] | null, score: 0 });

    const header = `📚 **${className} - ${subjectName}** ${chapterNumber ? `(Chapter ${chapterNumber})` : ''}\n\n`;
    
    // If we found relevant Q&A, return those
    if (relevantQA.length > 0) {
      const answers = relevantQA.map(qa => 
        `**${isMl ? 'ചോദ്യം' : 'Q'}: ${qa.q}**\n\n${isMl ? 'ഉത്തരം' : 'A'}: ${qa.a}`
      ).join('\n\n---\n\n');
      return header + answers;
    }

    // If best match found, return that
    if (bestMatch.qa && bestMatch.score > 0) {
      return header + `**${isMl ? 'ചോദ്യം' : 'Q'}: ${bestMatch.qa.q}**\n\n${isMl ? 'ഉത്തരം' : 'A'}: ${bestMatch.qa.a}`;
    }

    // Return summary + key points as general answer
    const parts: string[] = [];
    
    if (summary.trim()) {
      parts.push(`**${isMl ? 'അധ്യായ സംഗ്രഹം' : 'Chapter Summary'}:**\n${summary.trim()}`);
    }
    
    if (keyPoints.length > 0) {
      parts.push(`**${isMl ? 'പ്രധാന പോയിന്റുകൾ' : 'Key Points'}:**\n${keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n')}`);
    }
    
    // Add all Q&A as bonus
    if (qas.length > 0) {
      parts.push(`**${isMl ? 'പ്രധാന ചോദ്യോത്തരങ്ങൾ' : 'Important Questions & Answers'}:**\n` + 
        qas.slice(0, 5).map((qa, i) => `${i + 1}. **${qa.q}**\n   ${qa.a}`).join('\n\n'));
    }

    if (parts.length > 0) {
      return header + parts.join('\n\n---\n\n');
    }
  }

  // Absolute fallback — never say "sorry"
  if (isMl) {
    return `📚 **${className} - ${subjectName}** ${chapterNumber ? `(അധ്യായം ${chapterNumber})` : ''}

ഈ ചോദ്യത്തിന് കൃത്യമായ ഉത്തരം നൽകാൻ എനിക്ക് കഴിയുന്നില്ല. 

കൃത്യമായ ഉത്തരം ലഭിക്കാൻ:
1. നിങ്ങളുടെ പാഠപുസ്തകത്തിന്റെ അനുബന്ധ അധ്യായം വായിക്കുക
2. ക്ലാസിൽ അധ്യാപകനോട് ചോദിക്കുക
3. AI Chat-ൽ കൃത്യമായ അധ്യായം തിരഞ്ഞെടുത്ത് ചോദിക്കുക

💡 **ഇതു ശ്രമിക്കുക:** മുകളിലെ സബ്ജക്റ്റ് / അധ്യായം സെലക്ടർ ഉപയോഗിച്ച് കൃത്യമായ അധ്യായം തിരഞ്ഞെടുക്കുക, അപ്പോൾ AI-ക്ക് പാഠപുസ്തക ഉള്ളടക്കം ലഭിക്കും!`;
  }

  return `📚 **${className} - ${subjectName}** ${chapterNumber ? `(Chapter ${chapterNumber})` : ''}

I don't have enough textbook content to give you an exact answer right now.

**For a better answer, try this:**
1. Select the specific Class, Subject, and Chapter using the selectors above
2. Then ask your question — the AI will use the actual textbook content
3. Or ask your teacher for the exact answer

💡 **Tip:** Go to Classes → Select your Class → Select Subject → Select Chapter → then use "Learn with AI" for the best textbook-based answers!`;
}
