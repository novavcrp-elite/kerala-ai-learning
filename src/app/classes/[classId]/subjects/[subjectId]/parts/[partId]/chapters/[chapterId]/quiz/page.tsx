"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { keralaBoardData } from "@/data/kerala-board-data";
import { useMedium } from "@/contexts/MediumContext";
import {
  ChevronRight,
  Target,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
} from "lucide-react";

interface QuizQuestion {
  question: string;
  options?: string[];
  correctAnswer: number | string;
  explanation?: string;
  type: string;
  marks: number;
}

export default function QuizPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const partId = Number(params.partId);
  const chapterId = Number(params.chapterId);
  const { medium } = useMedium();

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);
  const part = subject?.parts.find((p) => p.partNumber === partId);
  const chapter = part?.chapters.find((c) => c.chapterNumber === chapterId);

  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [difficulty, setDifficulty] = useState("mixed");
  const [questionCount, setQuestionCount] = useState(10);

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

  const startQuiz = async () => {
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
          count: questionCount,
          difficulty,
          types: ["mcq"],
          language: "en",
        }),
      });
      const data = await res.json();
      setQuestions(data.questions || []);
      setQuizStarted(true);
      setCurrentQ(0);
      setScore(0);
      setAnswers([]);
      setQuizFinished(false);
    } catch {
      alert("Error generating quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === questions[currentQ].correctAnswer;
    if (isCorrect) setScore((s) => s + 1);

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQ] = answerIndex;
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizFinished(false);
  };

  const basePath = `/classes/${classId}/subjects/${subjectCode}/parts/${partId}/chapters/${chapterId}`;

  // Quiz setup
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Link
            href={basePath}
            className="text-sm text-gray-600 hover:text-blue-600 mb-6 inline-flex items-center"
          >
            <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
            Back to Chapter
          </Link>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Practice Quiz</h1>
                <p className="text-sm text-gray-500">
                  {medium === "ml" ? `അധ്യായം ${chapter.chapterNumber}: ${chapter.titleMl}` : `Ch ${chapter.chapterNumber}: ${chapter.title}`}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <div className="flex gap-2">
                  {["easy", "medium", "hard", "mixed"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                        difficulty === d
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Questions
                </label>
                <div className="flex gap-2">
                  {[5, 10, 15, 20].map((count) => (
                    <button
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        questionCount === count
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={startQuiz}
                disabled={loading}
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {loading ? "Generating Quiz..." : "Start Quiz"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz finished
  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <Trophy className={`w-16 h-16 mx-auto mb-4 ${percentage >= 70 ? "text-yellow-500" : "text-gray-400"}`} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600 mb-6">
              Ch {chapter.chapterNumber}: {chapter.title}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {score}/{questions.length}
              </div>
              <p className="text-lg text-gray-600">{percentage}% Correct</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    percentage >= 70 ? "bg-green-500" : percentage >= 40 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
              <Link
                href={basePath}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Chapter
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const q = questions[currentQ];
  if (!q) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQ + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-green-600">
              Score: {score}/{currentQ + (showResult ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              MCQ · 1 mark
            </span>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {q.question}
          </h2>

          {/* Options */}
          {q.options && (
            <div className="space-y-3">
              {q.options.map((option, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrect = i === q.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showWrong = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-50"
                        : showWrong
                        ? "border-red-500 bg-red-50"
                        : isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          showCorrect
                            ? "bg-green-500 text-white"
                            : showWrong
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {showCorrect ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : showWrong ? (
                          <XCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-medium">
                            {String.fromCharCode(65 + i)}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-900">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation */}
          {showResult && q.explanation && (
            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Explanation:</strong> {q.explanation}
              </p>
            </div>
          )}

          {/* Next button */}
          {showResult && (
            <button
              onClick={nextQuestion}
              className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              {currentQ < questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                "View Results"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
