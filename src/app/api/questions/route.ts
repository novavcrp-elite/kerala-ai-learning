import { NextRequest, NextResponse } from "next/server";

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
}

function generateTemplateQuestions(params: QuestionRequest) {
  const { classId, subject, chapter, chapterMl, topics, count, difficulty, types } = params;
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

  // Generate MCQ questions
  if (types.includes("mcq")) {
    const mcqCount = Math.min(
      count,
      Math.ceil(count * 0.4),
      topics.length * 3
    );
    for (let i = 0; i < mcqCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["easy", "medium", "hard"][i % 3] : difficulty;
      questions.push({
        question: `Which of the following is related to "${topic}" in ${chapter}?`,
        options: [
          `Key concept of ${topic}`,
          `Unrelated concept A`,
          `Unrelated concept B`,
          `Unrelated concept C`,
        ],
        correctAnswer: 0,
        answer: `The correct answer is related to the key concept of ${topic} as covered in Chapter ${chapter}.`,
        type: "mcq",
        marks: 1,
        difficulty: d,
        explanation: `This tests your understanding of ${topic} from Chapter ${chapter}.`,
      });
    }
  }

  // Generate short answer questions
  if (types.includes("short_answer")) {
    const shortCount = Math.min(
      count - questions.length,
      Math.ceil(count * 0.3)
    );
    for (let i = 0; i < shortCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["easy", "medium"][i % 2] : difficulty;
      questions.push({
        question: `Define and explain "${topic}" as studied in Chapter ${chapter}.`,
        answer: `"${topic}" is an important concept covered in Chapter ${chapter} of ${subject} for Class ${classId}. It involves understanding the fundamental principles and their applications. Key aspects include the definition, characteristics, and significance of this topic in the context of the Kerala State Board curriculum.`,
        type: "short_answer",
        marks: 2,
        difficulty: d,
        explanation: `This is a 2-mark question focusing on ${topic}.`,
      });
    }
  }

  // Generate long answer questions
  if (types.includes("long_answer")) {
    const longCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < longCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      const d = difficulty === "mixed" ? ["medium", "hard"][i % 2] : difficulty;
      questions.push({
        question: `Explain in detail the concept of "${topic}" from Chapter ${chapter}. Include definitions, examples, and diagrams where applicable.`,
        answer: `"${topic}" is a comprehensive topic in Chapter ${chapter} of ${subject} for Class ${classId}.\n\n1. Definition: The fundamental concept of ${topic} involves...\n2. Key Principles: The main principles include...\n3. Examples: Real-world examples include...\n4. Applications: The practical applications are...\n5. Significance: This is important for Kerala Board exams because...\n\n[Include diagram description if applicable]`,
        type: "long_answer",
        marks: 5,
        difficulty: d,
        explanation: `This is a 5-mark question requiring detailed explanation with examples.`,
      });
    }
  }

  // Generate true/false questions
  if (types.includes("true_false")) {
    const tfCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < tfCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: `True or False: "${topic}" is an important concept in Chapter ${chapter}.`,
        options: ["True", "False"],
        correctAnswer: 0,
        answer: "True. This is an important concept covered in the chapter.",
        type: "true_false",
        marks: 1,
        difficulty: "easy",
      });
    }
  }

  // Generate fill in blank questions
  if (types.includes("fill_blank")) {
    const fbCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < fbCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: `Fill in the blank: _________ is a key concept in the study of ${topic} (${chapter}).`,
        answer: topic,
        type: "fill_blank",
        marks: 1,
        difficulty: "easy",
      });
    }
  }

  // Generate one word questions
  if (types.includes("one_word")) {
    const owCount = Math.min(count - questions.length, 5);
    for (let i = 0; i < owCount; i++) {
      const topic = topics[i % topics.length] || chapter;
      questions.push({
        question: `Name the concept related to "${topic}" studied in Chapter ${chapter}.`,
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
      question: `What are the main topics covered in Chapter ${chapter} of ${subject}?`,
      answer: `Chapter ${chapter} covers the following main topics: ${topics.join(", ")}. Each of these topics is important for the Kerala State Board examination.`,
      type: "short_answer",
      marks: 2,
      difficulty: "medium",
    });
  }

  return questions.slice(0, count);
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

    const questions = generateTemplateQuestions({
      classId,
      subject,
      chapter,
      chapterMl: body.chapterMl,
      topics,
      count,
      difficulty,
      types,
      language,
    });

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Questions API error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
