import { NextRequest, NextResponse } from "next/server";
import { buildChapterContext } from "@/data/chapters";

interface QuestionRequest {
  classId: number;
  subject: string;
  chapter: string;
  chapterMl?: string;
  topics: string[];
  count: number;
  difficulty: string;
  types: string[];
  language: "en" | "ml";
  subjectCode?: string;
  chapterNumber?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuestionRequest = await request.json();
    const {
      classId,
      subject,
      chapter,
      topics = [],
      count = 10,
      difficulty = "mixed",
      types = ["mcq"],
      language = "en",
    } = body;

    const isMl = language === "ml";
    const subjectCode = body.subjectCode || "";
    const chapterNumber = body.chapterNumber || 1;

    // Try to get textbook context
    const textbookContext = buildChapterContext(classId, subjectCode, chapterNumber, language);

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (apiKey && textbookContext) {
      // Use AI to generate real questions
      const typeList = types.map((t: string) => {
        switch (t) {
          case "mcq": return "MCQ (multiple choice with 4 options)";
          case "short_answer": return "Short Answer (2 marks)";
          case "long_answer": return "Long Answer/Essay (5 marks)";
          case "true_false": return "True/False";
          case "fill_blank": return "Fill in the Blank";
          case "one_word": return "One Word Answer";
          default: return t;
        }
      }).join(", ");

      const prompt = `Generate ${count} ${difficulty} level questions for:
Class: ${classId}
Subject: ${subject}
Chapter: ${chapter}
Question Types: ${typeList}

TEXTBOOK CONTENT:
${textbookContext.substring(0, 3000)}

Generate questions as a JSON array with this EXACT structure (no markdown, just raw JSON):
[
  {
    "question": "question text",
    "options": ["option1", "option2", "option3", "option4"],
    "correctAnswer": 0,
    "answer": "correct answer",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "explanation": "explanation text"
  }
]

For non-MCQ types, omit options and correctAnswer fields.

IMPORTANT:
1. Generate REAL questions based on the textbook content
2. Every question must be specific to the chapter
3. ${isMl ? "Write in Malayalam. Keep English technical terms." : "Write in English."}
4. Include correct answers for ALL questions
5. For MCQ: exactly 4 options, correctAnswer is the index (0-3)
6. Return ONLY the JSON array, no other text`;

      const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://paddikam-gooys.vercel.app",
          "X-Title": "Paddikam Questions",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            {
              role: "system",
              content: "You are an expert Kerala State Board exam question setter. Generate accurate, textbook-based questions with correct answers. Return ONLY valid JSON, no markdown.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 3000,
          temperature: 0.3,
        }),
      });

      if (aiRes.ok) {
        const aiData = await aiRes.json();
        const aiContent = aiData.choices?.[0]?.message?.content || "";

        try {
          let jsonStr = aiContent;
          if (jsonStr.includes("```json")) {
            jsonStr = jsonStr.replace(/```json\n?/g, "").replace(/```\n?/g, "");
          } else if (jsonStr.includes("```")) {
            jsonStr = jsonStr.replace(/```\n?/g, "").replace(/```\n?/g, "");
          }
          jsonStr = jsonStr.trim();

          const parsed = JSON.parse(jsonStr);

          if (Array.isArray(parsed) && parsed.length > 0) {
            // Validate and sanitize each question
            const questions = parsed.map((q: Record<string, unknown>) => ({
              question: q.question || "Question not available",
              options: Array.isArray(q.options) ? q.options : undefined,
              correctAnswer: typeof q.correctAnswer === "number" ? q.correctAnswer : 0,
              answer: q.answer || "Answer not available",
              type: q.type || "short_answer",
              marks: q.marks || 1,
              difficulty: q.difficulty || difficulty,
              explanation: q.explanation || "",
            }));

            return NextResponse.json({ questions });
          }
        } catch {
          console.error("Failed to parse AI questions, falling back to template");
        }
      }
    }

    // Fallback: Better template questions
    const questions = generateTemplateQuestions(body);
    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Questions API error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}

function generateTemplateQuestions(params: QuestionRequest) {
  const { classId, subject, chapter, topics, count, difficulty, types, language } = params;
  const isMl = language === "ml";
  const questions: Array<{
    question: string;
    questionMl?: string;
    answer: string;
    answerMl?: string;
    options?: string[];
    correctAnswer?: number;
    type: string;
    marks: number;
    difficulty: string;
    explanation?: string;
  }> = [];

  // MCQ
  if (types.includes("mcq")) {
    const mcqCount = Math.min(count, Math.ceil(count * 0.4));
    for (let i = 0; i < mcqCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["easy", "medium", "hard"][i % 3] : difficulty;
      questions.push({
        question: isMl
          ? `${chapter} യിലെ "${topic}" സംബന്ധിച്ച് ശരിയായ പ്രസ്താവന തിരഞ്ഞെടുക്കുക.`
          : `Which statement is correct regarding "${topic}" from Chapter: ${chapter}?`,
        options: [
          isMl ? `${topic} - ശരിയായ വിവരണം` : `Correct description of ${topic}`,
          isMl ? `${topic} - തെറ്റായ വിവരണം 1` : `Incorrect statement A about ${topic}`,
          isMl ? `${topic} - തെറ്റായ വിവരണം 2` : `Incorrect statement B about ${topic}`,
          isMl ? `${topic} - അപ്രസക്തം` : `Unrelated statement about ${topic}`,
        ],
        correctAnswer: 0,
        answer: isMl
          ? `${topic} - ശരിയായ വിവരണം`
          : `The correct answer is the accurate description of ${topic} as covered in the chapter.`,
        type: "mcq",
        marks: 1,
        difficulty: d,
        explanation: isMl
          ? `${chapter} യിലെ ${topic} സംബന്ധിച്ച ചോദ്യം.`
          : `This tests your understanding of ${topic} from Chapter: ${chapter}.`,
      });
    }
  }

  // Short Answer (2 marks)
  if (types.includes("short_answer")) {
    const shortCount = Math.min(count - questions.length, Math.ceil(count * 0.3));
    for (let i = 0; i < shortCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["easy", "medium"][i % 2] : difficulty;
      questions.push({
        question: isMl
          ? `"${topic}" ന് നിർവചനം നൽകുക. രണ്ട് പ്രധാന സവിശേഷതകൾ എഴുതുക. (${chapter})`
          : `Define "${topic}" and state any two important features. (${chapter})`,
        answer: isMl
          ? `നിർവചനം: ${topic} - അടിസ്ഥാന നിർവചനം.\nസവിശേഷതകൾ:\n1. പ്രഥമ സവിശേഷത\n2. ദ്വിതീയ സവിശേഷത`
          : `Definition: ${topic} is the fundamental concept covered in this chapter.\nKey Features:\n1. First important feature with brief explanation\n2. Second important feature with brief explanation`,
        type: "short_answer",
        marks: 2,
        difficulty: d,
        explanation: isMl ? `2 മാർക്ക് ചോദ്യം - ${topic}` : `2-mark question on ${topic}.`,
      });
    }
  }

  // Long Answer (5 marks)
  if (types.includes("long_answer")) {
    const longCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < longCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["medium", "hard"][i % 2] : difficulty;
      questions.push({
        question: isMl
          ? `"${topic}" - അഞ്ച് മാർക്കിനുള്ള ചോദ്യം. വിശദമായി വിശദീകരിക്കുക. നിർവചനം, തത്വങ്ങൾ, ഉദാഹരണങ്ങൾ, ചിത്രങ്ങൾ എന്നിവ ഉൾപ്പെടുത്തുക. (${chapter})`
          : `Explain "${topic}" in detail with definitions, principles, examples, and diagrams. (${chapter})`,
        answer: isMl
          ? `${topic} - വിശദമായ വിശദീകരണം.\n\n1. നിർവചനം: അടിസ്ഥാന നിർവചനം\n2. തത്വങ്ങൾ: പ്രധാന തത്വങ്ങൾ\n3. പ്രധാന സവിശേഷതകൾ\n4. ഉദാഹരണങ്ങൾ: പ്രായോഗിക ഉദാഹരണങ്ങൾ\n5. ചിത്രം: ആവശ്യമെങ്കിൽ ചിത്ര വിവരണം`
          : `Comprehensive answer on "${topic}":\n\n1. Definition: The fundamental concept of ${topic} involves...\n2. Key Principles: The main principles include...\n3. Important Features: The key features are...\n4. Examples: Real-world examples include...\n5. Diagram: Include a labeled diagram if applicable.`,
        type: "long_answer",
        marks: 5,
        difficulty: d,
        explanation: isMl ? `5 മാർക്ക് ചോദ്യം - ${topic}` : `5-mark essay question on ${topic}.`,
      });
    }
  }

  // True/False
  if (types.includes("true_false")) {
    const tfCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < tfCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: isMl
          ? `"${topic}" എന്നത് ${chapter} യിലെ ഒരു പ്രധാന ആശയമാണ്. (ശരി / തെറ്റ്)`
          : `True or False: "${topic}" is an important concept in Chapter: ${chapter}.`,
        options: isMl ? ["ശരി", "തെറ്റ്"] : ["True", "False"],
        correctAnswer: 0,
        answer: isMl ? "ശരി. ഇത് അധ്യായത്തിലെ ഒരു പ്രധാന ആശയമാണ്." : "True. This is an important concept covered in the chapter.",
        type: "true_false",
        marks: 1,
        difficulty: "easy",
      });
    }
  }

  // Fill in the Blank
  if (types.includes("fill_blank")) {
    const fbCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < fbCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: isMl
          ? `ഒഴിഞ്ഞ സ്ഥലം നിറയ്ക്കുക: _________ എന്നത് ${topic} പഠനത്തിലെ ഒരു പ്രധാന ആശയമാണ്. (${chapter})`
          : `Fill in the blank: _________ is a key concept in the study of ${topic} (${chapter}).`,
        answer: topic,
        type: "fill_blank",
        marks: 1,
        difficulty: "easy",
      });
    }
  }

  // One Word
  if (types.includes("one_word")) {
    const owCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < owCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: isMl
          ? `${chapter} യിൽ "${topic}" ഉമായി ബന്ധമുള്ള ആശയത്തിന്റെ പേര് എഴുതുക.`
          : `Name the concept related to "${topic}" from Chapter: ${chapter}.`,
        answer: topic,
        type: "one_word",
        marks: 1,
        difficulty: "easy",
      });
    }
  }

  // Ensure we have at least some questions
  if (questions.length === 0) {
    questions.push({
      question: isMl
        ? `${chapter} യിലെ പ്രധാന വിഷയങ്ങൾ എന്തൊക്കെ?`
        : `What are the main topics covered in Chapter: ${chapter}?`,
      answer: isMl
        ? `പ്രധാന വിഷയങ്ങൾ: ${topics.join(", ")}`
        : `Main topics: ${topics.join(", ")}. Each topic is important for Kerala Board exams.`,
      type: "short_answer",
      marks: 2,
      difficulty: "medium",
    });
  }

  return questions.slice(0, count);
}
