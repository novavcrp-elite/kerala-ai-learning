import { NextRequest, NextResponse } from "next/server";

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
}

interface PaperSection {
  section: string;
  title: string;
  questions: {
    question: string;
    marks: number;
    answer?: string;
  }[];
}

function generateKeralaBoardPaper(params: PaperRequest) {
  const { classId, subject, chapters, totalMarks, duration, language, includeAnswerKey } = params;
  const isML = language === "ml";
  const chapterText = chapters.join(", ");

  const sections: PaperSection[] = [];
  const answerKey: { question: string; answer: string }[] = [];
  let remainingMarks = totalMarks;

  // Section A: Very Short Answer (1 mark each)
  const mcqCount = Math.min(8, Math.floor(remainingMarks / 1));
  if (mcqCount > 0) {
    const mcqQuestions = Array.from({ length: mcqCount }, (_, i) => ({
      question: isML
        ? `ചോദ്യം ${i + 1}: ${chapters[i % chapters.length]} യെക്കുറിച്ചുള്ള ഒരു ചോദ്യം`
        : `Q${i + 1}: Define or state the important concept from ${chapters[i % chapters.length]}.`,
      marks: 1,
      answer: isML
        ? `ഉത്തരം: ${chapters[i % chapters.length]} - പ്രധാന ആശയം`
        : `Answer: Key concept from ${chapters[i % chapters.length]}.`,
    }));
    sections.push({
      section: "A",
      title: isML
        ? `വെറും ചെറിയ ഉത്തരങ്ങൾ (1 മാർക്ക് × ${mcqCount} = ${mcqCount} മാർക്ക്)`
        : `Very Short Answer Questions (1 mark × ${mcqCount} = ${mcqCount} marks)`,
      questions: mcqQuestions,
    });
    if (includeAnswerKey) answerKey.push(...mcqQuestions.map(q => ({ question: q.question, answer: q.answer || "" })));
    remainingMarks -= mcqCount;
  }

  // Section B: Short Answer (2 marks each)
  const shortCount = Math.min(7, Math.floor(remainingMarks / 2));
  if (shortCount > 0) {
    const shortQuestions = Array.from({ length: shortCount }, (_, i) => ({
      question: isML
        ? `ചോദ്യം ${i + 1}: ${chapters[i % chapters.length]} - രണ്ട് മാർക്കിനുള്ള ചോദ്യം`
        : `Q${i + 1}: Explain briefly any two aspects of "${chapters[i % chapters.length]}".`,
      marks: 2,
      answer: isML
        ? `ഉത്തരം: ${chapters[i % chapters.length]} - സംക്ഷിപ്ത വിശദീകരണം. രണ്ട് പ്രധാന പോയിന്റുകൾ ഉൾപ്പെടുത്തുക.`
        : `Answer: Brief explanation covering key points from ${chapters[i % chapters.length]}. Include at least 2 important points.`,
    }));
    sections.push({
      section: "B",
      title: isML
        ? `ചെറിയ ഉത്തരങ്ങൾ (2 മാർക്ക് × ${shortCount} = ${shortCount * 2} മാർക്ക്)`
        : `Short Answer Questions (2 marks × ${shortCount} = ${shortCount * 2} marks)`,
      questions: shortQuestions,
    });
    if (includeAnswerKey) answerKey.push(...shortQuestions.map(q => ({ question: q.question, answer: q.answer || "" })));
    remainingMarks -= shortCount * 2;
  }

  // Section C: Paragraph Answer (3 marks each)
  const paraCount = Math.min(5, Math.floor(remainingMarks / 3));
  if (paraCount > 0) {
    const paraQuestions = Array.from({ length: paraCount }, (_, i) => ({
      question: isML
        ? `ചോദ്യം ${i + 1}: ${chapters[i % chapters.length]} - മൂന്ന് മാർക്കിനുള്ള ചോദ്യം`
        : `Q${i + 1}: Write a detailed note on "${chapters[i % chapters.length]}" with examples.`,
      marks: 3,
      answer: isML
        ? `ഉത്തരം: ${chapters[i % chapters.length]} - വിശദമായ കുറിപ്പ്. നിർവചനം, പ്രധാന സവിശേഷതകൾ, ഉദാഹരണങ്ങൾ എന്നിവ ഉൾപ്പെടുത്തുക.`
        : `Answer: Detailed note covering definition, key features, and examples from ${chapters[i % chapters.length]}. Include diagrams if applicable.`,
    }));
    sections.push({
      section: "C",
      title: isML
        ? `വാചക ഉത്തരങ്ങൾ (3 മാർക്ക് × ${paraCount} = ${paraCount * 3} മാർക്ക്)`
        : `Paragraph Answer Questions (3 marks × ${paraCount} = ${paraCount * 3} marks)`,
      questions: paraQuestions,
    });
    if (includeAnswerKey) answerKey.push(...paraQuestions.map(q => ({ question: q.question, answer: q.answer || "" })));
    remainingMarks -= paraCount * 3;
  }

  // Section D: Long Answer (5 marks each)
  const longCount = Math.min(4, Math.floor(remainingMarks / 5));
  if (longCount > 0) {
    const longQuestions = Array.from({ length: longCount }, (_, i) => ({
      question: isML
        ? `ചോദ്യം ${i + 1}: ${chapters[i % chapters.length]} - അഞ്ച് മാർക്കിനുള്ള ചോദ്യം. വിശദമായി വിശദീകരിക്കുക.`
        : `Q${i + 1}: Explain in detail the concept of "${chapters[i % chapters.length]}". Include definitions, explanations, examples, and diagrams where applicable.`,
      marks: 5,
      answer: isML
        ? `ഉത്തരം: ${chapters[i % chapters.length]} - വിശദമായ വിശദീകരണം.\n1. നിർവചനം\n2. പ്രധാന സവിശേഷതകൾ\n3. ഉദാഹരണങ്ങൾ\n4. പ്രായോഗിക പ്രയോഗങ്ങൾ\n5. ചിത്രം (ആവശ്യമെങ്കിൽ)`
        : `Answer: Comprehensive explanation of ${chapters[i % chapters.length]}.\n1. Definition\n2. Key Principles\n3. Important Features\n4. Examples and Illustrations\n5. Practical Applications\n6. Diagram (if applicable)`,
    }));
    sections.push({
      section: "D",
      title: isML
        ? `ദീർഘ ഉത്തരങ്ങൾ (5 മാർക്ക് × ${longCount} = ${longCount * 5} മാർക്ക്)`
        : `Long Answer Questions (5 marks × ${longCount} = ${longCount * 5} marks)`,
      questions: longQuestions,
    });
    if (includeAnswerKey) answerKey.push(...longQuestions.map(q => ({ question: q.question, answer: q.answer || "" })));
    remainingMarks -= longCount * 5;
  }

  // Add remaining marks as extra questions
  if (remainingMarks > 0) {
    const extraCount = Math.floor(remainingMarks / 2);
    if (extraCount > 0) {
      const extraQuestions = Array.from({ length: extraCount }, (_, i) => ({
        question: isML
          ? `ചോദ്യം: ${chapters[i % chapters.length]} - അധിക ചോദ്യം`
          : `Extra: Explain any important concept from "${chapters[i % chapters.length]}".`,
        marks: 2,
        answer: `Explanation of key concepts from ${chapters[i % chapters.length]}.`,
      }));
      sections.push({
        section: "E",
        title: isML
          ? `അധിക ചോദ്യങ്ങൾ`
          : `Additional Questions`,
        questions: extraQuestions,
      });
    }
  }

  const paperTitle = isML
    ? `${subject} - ക്ലാസ് ${classId}\nകേരള സ്റ്റേറ്റ് ബോർഡ് ചോദ്യപേപ്പർ`
    : `${subject} - Class ${classId}\nKerala State Board Question Paper`;

  return {
    title: paperTitle,
    totalMarks,
    duration,
    sections,
    answerKey: includeAnswerKey ? answerKey : undefined,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: PaperRequest = await request.json();
    const paper = generateKeralaBoardPaper(body);
    return NextResponse.json({ paper });
  } catch (error) {
    console.error("Papers API error:", error);
    return NextResponse.json(
      { error: "Failed to generate paper" },
      { status: 500 }
    );
  }
}
