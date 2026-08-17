import { NextRequest, NextResponse } from "next/server";
import { buildMultiChapterContext } from "@/data/chapters";
import { keralaBoardData } from "@/data/kerala-board-data";

interface PaperRequest {
  classId: number;
  subject: string;
  subjectCode: string;
  chapters: string[];
  chapterMls: string[];
  topics: string[];
  totalMarks: number;
  duration: number;
  language: "en" | "ml";
  includeAnswerKey: boolean;
  chapterNumbers?: number[];
}

export async function POST(request: NextRequest) {
  try {
    const body: PaperRequest = await request.json();
    const { classId, subject, subjectCode, chapters, totalMarks, duration, language, includeAnswerKey } = body;
    const isMl = language === "ml";

    // Try to build textbook context
    const chapterNumbers = body.chapterNumbers || chapters.map((_, i) => i + 1);
    const textbookContext = buildMultiChapterContext(classId, subjectCode, chapterNumbers, language);

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (apiKey && textbookContext) {
      // Use AI to generate real questions
      const prompt = `Generate a Kerala State Board (SCERT) style question paper for:
Class: ${classId}
Subject: ${subject}
Chapters: ${chapters.join(", ")}
Total Marks: ${totalMarks}
Duration: ${duration} minutes
Language: ${isMl ? "Malayalam" : "English"}

TEXTBOOK CONTENT:
${textbookContext.substring(0, 3000)}

Generate the question paper as a JSON object with this EXACT structure (no markdown, just raw JSON):
{
  "title": "${subject} - Class ${classId}\\nKerala State Board Question Paper",
  "totalMarks": ${totalMarks},
  "duration": ${duration},
  "sections": [
    {
      "section": "A",
      "title": "Section A - Very Short Answer (1 mark each)",
      "questions": [
        { "question": "question text here", "marks": 1, "answer": "correct answer here" }
      ]
    },
    {
      "section": "B",
      "title": "Section B - Short Answer (2 marks each)",
      "questions": [
        { "question": "question text here", "marks": 2, "answer": "answer here" }
      ]
    },
    {
      "section": "C",
      "title": "Section C - Paragraph Answer (3 marks each)",
      "questions": [
        { "question": "question text here", "marks": 3, "answer": "answer here" }
      ]
    },
    {
      "section": "D",
      "title": "Section D - Essay/Long Answer (5 marks each)",
      "questions": [
        { "question": "question text here", "marks": 5, "answer": "detailed answer here" }
      ]
    }
  ],
  "answerKey": [
    { "question": "question text", "answer": "answer text" }
  ]
}

IMPORTANT RULES:
1. Generate REAL questions based on the textbook content provided above
2. Every question MUST be specific to the chapter content — not generic
3. For Class 10 Science: include formulas, definitions, experiments
4. For Class 10 English: include character analysis, literary devices, themes
5. The total marks must equal exactly ${totalMarks}
6. Each answer must be detailed and accurate
7. ${isMl ? "Write all questions and answers in Malayalam. Keep English technical terms." : "Write in English."}
8. Make questions that would actually appear in Kerala Board exams
9. Return ONLY the JSON object, no other text`;

      const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://paddikam-gooys.vercel.app",
          "X-Title": "Paddikam Paper Generator",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            {
              role: "system",
              content: "You are an expert Kerala State Board exam paper setter. Generate realistic, textbook-based question papers. Return ONLY valid JSON, no markdown or extra text.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 4000,
          temperature: 0.4,
        }),
      });

      if (aiRes.ok) {
        const aiData = await aiRes.json();
        const aiContent = aiData.choices?.[0]?.message?.content || "";

        // Try to parse the JSON from the AI response
        try {
          // Remove markdown code blocks if present
          let jsonStr = aiContent;
          if (jsonStr.includes("```json")) {
            jsonStr = jsonStr.replace(/```json\n?/g, "").replace(/```\n?/g, "");
          } else if (jsonStr.includes("```")) {
            jsonStr = jsonStr.replace(/```\n?/g, "").replace(/```\n?/g, "");
          }
          jsonStr = jsonStr.trim();

          const parsed = JSON.parse(jsonStr);

          // Validate the structure
          if (parsed.sections && Array.isArray(parsed.sections) && parsed.sections.length > 0) {
            // Ensure all questions have required fields
            for (const section of parsed.sections) {
              if (section.questions && Array.isArray(section.questions)) {
                section.questions = section.questions.map((q: Record<string, unknown>) => ({
                  question: q.question || "Question not available",
                  marks: q.marks || 1,
                  answer: q.answer || "Answer not available",
                }));
              }
            }

            return NextResponse.json({
              paper: {
                title: parsed.title || `${subject} - Class ${classId}\nKerala State Board Question Paper`,
                totalMarks: parsed.totalMarks || totalMarks,
                duration: parsed.duration || duration,
                sections: parsed.sections,
                answerKey: includeAnswerKey ? parsed.answerKey : undefined,
              },
            });
          }
        } catch {
          console.error("Failed to parse AI paper response, falling back to template");
        }
      }
    }

    // Fallback: Better template-based questions
    const paper = generateTemplatePaper(body);
    return NextResponse.json({ paper });
  } catch (error) {
    console.error("Papers API error:", error);
    return NextResponse.json(
      { error: "Failed to generate paper" },
      { status: 500 }
    );
  }
}

function generateTemplatePaper(params: PaperRequest) {
  const { classId, subject, chapters, totalMarks, duration, language, includeAnswerKey } = params;
  const isMl = language === "ml";

  const sections: Array<{
    section: string;
    title: string;
    questions: Array<{ question: string; marks: number; answer: string }>;
  }> = [];
  const answerKey: Array<{ question: string; answer: string }> = [];
  let remainingMarks = totalMarks;

  // Section A: 1-mark questions
  const mcqCount = Math.min(10, Math.floor(remainingMarks / 1));
  if (mcqCount > 0) {
    const mcqQuestions = Array.from({ length: mcqCount }, (_, i) => {
      const ch = chapters[i % chapters.length] || "this topic";
      return {
        question: isMl
          ? `${ch} സംബന്ധിച്ച് ഒരു പ്രധാന നിർവചനം എഴുതുക.`
          : `Define or state any one important concept from "${ch}".`,
        marks: 1,
        answer: isMl
          ? `${ch} - പ്രധാന നിർവചനം / വസ്തുത`
          : `Key definition or fact from "${ch}".`,
      };
    });
    sections.push({
      section: "A",
      title: isMl
        ? `വെറും ചെറിയ ഉത്തരങ്ങൾ (1 മാർക്ക് × ${mcqCount} = ${mcqCount} മാർക്ക്)`
        : `Section A — Very Short Answer Questions (1 × ${mcqCount} = ${mcqCount} marks)`,
      questions: mcqQuestions,
    });
    if (includeAnswerKey) answerKey.push(...mcqQuestions.map(q => ({ question: q.question, answer: q.answer })));
    remainingMarks -= mcqCount;
  }

  // Section B: 2-mark questions
  const shortCount = Math.min(8, Math.floor(remainingMarks / 2));
  if (shortCount > 0) {
    const shortQuestions = Array.from({ length: shortCount }, (_, i) => {
      const ch = chapters[i % chapters.length] || "this topic";
      return {
        question: isMl
          ? `${ch} - രണ്ട് മാർക്കിനുള്ള ചോദ്യം. രണ്ട് പ്രധാന പോയിന്റുകൾ ഉൾപ്പെടുത്തി ഉത്തരിക്കുക.`
          : `Explain briefly any two important aspects of "${ch}". Include at least two key points.`,
        marks: 2,
        answer: isMl
          ? `${ch} - രണ്ട് പ്രധാന പോയിന്റുകൾ: (1) ... (2) ...`
          : `Two key points about "${ch}" with brief explanation for each.`,
      };
    });
    sections.push({
      section: "B",
      title: isMl
        ? `ചെറിയ ഉത്തരങ്ങൾ (2 മാർക്ക് × ${shortCount} = ${shortCount * 2} മാർക്ക്)`
        : `Section B — Short Answer Questions (2 × ${shortCount} = ${shortCount * 2} marks)`,
      questions: shortQuestions,
    });
    if (includeAnswerKey) answerKey.push(...shortQuestions.map(q => ({ question: q.question, answer: q.answer })));
    remainingMarks -= shortCount * 2;
  }

  // Section C: 3-mark questions
  const paraCount = Math.min(6, Math.floor(remainingMarks / 3));
  if (paraCount > 0) {
    const paraQuestions = Array.from({ length: paraCount }, (_, i) => {
      const ch = chapters[i % chapters.length] || "this topic";
      return {
        question: isMl
          ? `${ch} - മൂന്ന് മാർക്കിനുള്ള ചോദ്യം. വിശദമായി എഴുതുക.`
          : `Write a detailed note on "${ch}" with definitions, key features, and examples.`,
        marks: 3,
        answer: isMl
          ? `${ch} - നിർവചനം, പ്രധാന സവിശേഷതകൾ, ഉദാഹരണങ്ങൾ എന്നിവ ഉൾപ്പെടുത്തിയ വിശദമായ ഉത്തരം.`
          : `Detailed answer covering definition, key features, and examples from "${ch}". Include diagrams if applicable.`,
      };
    });
    sections.push({
      section: "C",
      title: isMl
        ? `വാചക ഉത്തരങ്ങൾ (3 മാർക്ക് × ${paraCount} = ${paraCount * 3} മാർക്ക്)`
        : `Section C — Paragraph Answer Questions (3 × ${paraCount} = ${paraCount * 3} marks)`,
      questions: paraQuestions,
    });
    if (includeAnswerKey) answerKey.push(...paraQuestions.map(q => ({ question: q.question, answer: q.answer })));
    remainingMarks -= paraCount * 3;
  }

  // Section D: 5-mark questions
  const longCount = Math.min(4, Math.floor(remainingMarks / 5));
  if (longCount > 0) {
    const longQuestions = Array.from({ length: longCount }, (_, i) => {
      const ch = chapters[i % chapters.length] || "this topic";
      return {
        question: isMl
          ? `${ch} - അഞ്ച് മാർക്കിനുള്ള ചോദ്യം. വിശദമായി വിശദീകരിക്കുക. നിർവചനം, തത്വങ്ങൾ, ഉദാഹരണങ്ങൾ, ചിത്രങ്ങൾ എന്നിവ ഉൾപ്പെടുത്തുക.`
          : `Explain in detail the concept of "${ch}". Include definitions, key principles, important features, examples, and diagrams where applicable.`,
        marks: 5,
        answer: isMl
          ? `${ch} - വിശദമായ വിശദീകരണം. നിർവചനം, തത്വങ്ങൾ, പ്രധാന സവിശേഷതകൾ, ഉദാഹരണങ്ങൾ, ചിത്രം എന്നിവ ഉൾപ്പെടുത്തുക.`
          : `Comprehensive answer covering:\n1. Definition\n2. Key Principles\n3. Important Features\n4. Examples\n5. Diagram (if applicable)`,
      };
    });
    sections.push({
      section: "D",
      title: isMl
        ? `ദീർഘ ഉത്തരങ്ങൾ (5 മാർക്ക് × ${longCount} = ${longCount * 5} മാർക്ക്)`
        : `Section D — Long Answer / Essay Questions (5 × ${longCount} = ${longCount * 5} marks)`,
      questions: longQuestions,
    });
    if (includeAnswerKey) answerKey.push(...longQuestions.map(q => ({ question: q.question, answer: q.answer })));
    remainingMarks -= longCount * 5;
  }

  return {
    title: isMl
      ? `${subject} - ക്ലാസ് ${classId}\nകേരള സ്റ്റേറ്റ് ബോർഡ് ചോദ്യപേപ്പർ`
      : `${subject} - Class ${classId}\nKerala State Board Question Paper`,
    totalMarks,
    duration,
    sections,
    answerKey: includeAnswerKey ? answerKey : undefined,
  };
}
