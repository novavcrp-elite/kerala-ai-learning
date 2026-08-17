"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { keralaBoardData } from "@/data/kerala-board-data";
import { ChevronRight, FileText, Send, Loader2 } from "lucide-react";

interface Question {
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
}

export default function QuestionsPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const partId = Number(params.partId);
  const chapterId = Number(params.chapterId);

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);
  const part = subject?.parts.find((p) => p.partNumber === partId);
  const chapter = part?.chapters.find((c) => c.chapterNumber === chapterId);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["mcq", "short_answer", "long_answer"]);
  const [difficulty, setDifficulty] = useState("mixed");
  const [count, setCount] = useState(15);
  const [language, setLanguage] = useState<"en" | "ml">("en");
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set());

  if (!classData || !subject || !part || !chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Chapter Not Found</h1>
          <Link href="/classes" className="text-blue-600 font-medium">← Back to Classes</Link>
        </div>
      </div>
    );
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const generateQuestions = async () => {
    if (selectedTypes.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classId,
          subject: subject.name,
          chapter: chapter.title,
          chapterMl: chapter.titleMl,
          topics: chapter.headings,
          count,
          difficulty,
          types: selectedTypes,
          language,
        }),
      });
      const data = await res.json();
      setQuestions(data.questions || []);
    } catch {
      alert("Error generating questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  const basePath = `/classes/${classId}/subjects/${subjectCode}/parts/${partId}/chapters/${chapterId}`;
  const typeLabels: Record<string, string> = {
    mcq: "MCQ",
    short_answer: "Short Answer",
    long_answer: "Long Answer",
    true_false: "True/False",
    fill_blank: "Fill in the Blank",
    one_word: "One Word",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href={basePath}
          className="text-sm text-gray-600 hover:text-blue-600 mb-6 inline-flex items-center"
        >
          <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
          Back to Chapter
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-orange-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Generate Questions</h1>
            <p className="text-sm text-gray-500">
              Ch {chapter.chapterNumber}: {chapter.title}
            </p>
          </div>
        </div>

        {/* Config */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Question Types */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question Types
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(typeLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => toggleType(key)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedTypes.includes(key)
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <div className="flex gap-2">
                {["easy", "medium", "hard", "mixed"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                      difficulty === d
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions
              </label>
              <div className="flex gap-2">
                {[5, 10, 15, 20, 30].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCount(c)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      count === c
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    language === "en"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ml")}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    language === "ml"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  മലയാളം
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={generateQuestions}
            disabled={loading || selectedTypes.length === 0}
            className="mt-6 w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {loading ? "Generating Questions..." : "Generate Questions"}
          </button>
        </div>

        {/* Generated Questions */}
        {questions.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Generated Questions ({questions.length})
              </h2>
              <button
                onClick={() => {
                  if (showAnswers.size === questions.length) {
                    setShowAnswers(new Set());
                  } else {
                    setShowAnswers(new Set(questions.map((_, i) => i)));
                  }
                }}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                {showAnswers.size === questions.length ? "Hide All Answers" : "Show All Answers"}
              </button>
            </div>

            {questions.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Q{i + 1} · {typeLabels[q.type] || q.type} · {q.marks} mark{q.marks > 1 ? "s" : ""}
                  </span>
                </div>

                <p className="text-gray-900 mt-3 font-medium">{q.question}</p>
                {q.questionMl && (
                  <p className="text-gray-600 mt-1 text-sm">{q.questionMl}</p>
                )}

                {/* MCQ Options */}
                {q.type === "mcq" && q.options && (
                  <div className="mt-3 space-y-1.5">
                    {q.options.map((opt, oi) => (
                      <div
                        key={oi}
                        className={`text-sm px-3 py-1.5 rounded-lg ${
                          showAnswers.has(i) && oi === q.correctAnswer
                            ? "bg-green-50 text-green-800 font-medium"
                            : "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {String.fromCharCode(65 + oi)}. {opt}
                      </div>
                    ))}
                  </div>
                )}

                {/* Answer toggle */}
                <button
                  onClick={() => toggleAnswer(i)}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showAnswers.has(i) ? "Hide Answer" : "Show Answer"}
                </button>

                {showAnswers.has(i) && q.type !== "mcq" && (
                  <div className="mt-2 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Answer:</p>
                    <p className="text-sm text-green-900 mt-1">{q.answer}</p>
                    {q.answerMl && (
                      <p className="text-sm text-green-800 mt-1">{q.answerMl}</p>
                    )}
                  </div>
                )}

                {showAnswers.has(i) && q.explanation && (
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
