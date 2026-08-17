"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { keralaBoardData } from "@/data/kerala-board-data";
import { ChevronRight, ArrowLeft, Brain, Send, Loader2, BookOpen } from "lucide-react";

const learningModes = [
  {
    id: "summary",
    icon: "📋",
    title: "Chapter Summary",
    description: "Simple explanation with important points",
  },
  {
    id: "definitions",
    icon: "📖",
    title: "Key Definitions",
    description: "Important definitions and concepts",
  },
  {
    id: "important_questions",
    icon: "❓",
    title: "Important Questions",
    description: "Most likely exam questions",
  },
  {
    id: "exam_notes",
    icon: "📝",
    title: "Exam-Focused Notes",
    description: "Concise notes for exam preparation",
  },
  {
    id: "explain_simple",
    icon: "💡",
    title: "Explain Simply",
    description: "Easy explanation of the chapter",
  },
  {
    id: "explain_malayalam",
    icon: "🇲🇾",
    title: "Explain in Malayalam",
    description: "Malayalam explanation with textbook terms",
  },
];

interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

export default function LearnPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const partId = Number(params.partId);
  const chapterId = Number(params.chapterId);

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);
  const part = subject?.parts.find((p) => p.partNumber === partId);
  const chapter = part?.chapters.find((c) => c.chapterNumber === chapterId);

  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState<AIMessage[]>([]);
  const [customQuestion, setCustomQuestion] = useState("");
  const [language, setLanguage] = useState<"en" | "ml">("en");

  if (!classData || !subject || !part || !chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Chapter Not Found
          </h1>
          <Link href="/classes" className="text-blue-600 font-medium">
            ← Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  const handleModeSelect = async (modeId: string) => {
    setSelectedMode(modeId);
    setLoading(true);
    setResponse("");

    const mode = learningModes.find((m) => m.id === modeId);
    const promptMap: Record<string, string> = {
      summary: `Provide a comprehensive chapter summary for Class ${classId} ${subject.name} - "${chapter.title}" (${chapter.titleMl}). Include key concepts, important points, and main ideas. Chapter topics: ${chapter.headings.join(", ")}.`,
      definitions: `List all important definitions and key terms from Class ${classId} ${subject.name} - "${chapter.title}". Provide clear definitions for each term.`,
      important_questions: `Generate 10 important questions that are most likely to appear in Kerala State Board exams for Class ${classId} ${subject.name} - "${chapter.title}". Include a mix of 1-mark, 2-mark, 3-mark, and 5-mark questions.`,
      exam_notes: `Create concise exam-focused notes for Class ${classId} ${subject.name} - "${chapter.title}". Focus on key facts, formulas, and concepts that are frequently tested.`,
      explain_simple: `Explain the chapter "${chapter.title}" from Class ${classId} ${subject.name} in simple, easy-to-understand language. Use examples where possible.`,
      explain_malayalam: `Explain the chapter "${chapter.title}" (${chapter.titleMl}) from Class ${classId} ${subject.name} in Malayalam. Use simple Malayalam while preserving textbook terminology. Include important terms in both Malayalam and English.`,
    };

    const question = promptMap[modeId] || mode?.title || "";

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          context: {
            classId,
            subject: subject.name,
            chapter: chapter.title,
            chapterMl: chapter.titleMl,
            topics: chapter.headings,
            language,
          },
        }),
      });

      const data = await res.json();
      setResponse(data.response || "No response generated.");
      setChatHistory([
        { role: "user", content: question },
        { role: "assistant", content: data.response || "No response generated." },
      ]);
    } catch {
      setResponse("Error generating response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomQuestion = async () => {
    if (!customQuestion.trim() || loading) return;

    const userMsg = customQuestion.trim();
    setCustomQuestion("");
    setLoading(true);
    setChatHistory((prev) => [...prev, { role: "user", content: userMsg }]);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          context: {
            classId,
            subject: subject.name,
            chapter: chapter.title,
            chapterMl: chapter.titleMl,
            topics: chapter.headings,
            language,
          },
        }),
      });

      const data = await res.json();
      const assistantMsg = data.response || "No response generated.";
      setChatHistory((prev) => [...prev, { role: "assistant", content: assistantMsg }]);
      setResponse(assistantMsg);
    } catch {
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Error generating response. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const basePath = `/classes/${classId}/subjects/${subjectCode}/parts/${partId}/chapters/${chapterId}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/classes" className="hover:text-blue-600">Classes</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}`} className="hover:text-blue-600">
            Class {classId}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}/subjects/${subjectCode}`} className="hover:text-blue-600">
            {subject.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={basePath} className="hover:text-blue-600">
            Ch {chapter.chapterNumber}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Learn with AI</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Learn with AI
            </h1>
            <p className="text-sm text-gray-500">
              {subject.name} · Class {classId} · Ch {chapter.chapterNumber}: {chapter.title}
            </p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-600">Language:</span>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("ml")}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              language === "ml"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            മലയാളം
          </button>
        </div>

        {/* Learning Mode Cards */}
        {!selectedMode && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {learningModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => handleModeSelect(mode.id)}
                className="p-5 bg-white rounded-xl border border-gray-200 text-left hover:shadow-md hover:border-purple-300 transition-all"
              >
                <span className="text-2xl mb-2 block">{mode.icon}</span>
                <h3 className="font-semibold text-gray-900">{mode.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{mode.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* AI Response */}
        {(selectedMode || chatHistory.length > 0) && (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Mode Header */}
            {selectedMode && (
              <div className="px-6 py-4 bg-purple-50 border-b border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {learningModes.find((m) => m.id === selectedMode)?.icon}
                  </span>
                  <span className="font-semibold text-purple-900">
                    {learningModes.find((m) => m.id === selectedMode)?.title}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedMode(null);
                    setResponse("");
                    setChatHistory([]);
                  }}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  ← Choose Another Mode
                </button>
              </div>
            )}

            {/* Chat History */}
            <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${
                    msg.role === "assistant" ? "" : "justify-end"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-xl ${
                      msg.role === "assistant"
                        ? "bg-gray-50 text-gray-900"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Follow-up Input */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 mb-2">
                💡 Ask follow-up questions like: &quot;Give me a 5-mark answer&quot;, &quot;Explain this in simpler terms&quot;, &quot;Quiz me on this&quot;
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCustomQuestion()}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleCustomQuestion}
                  disabled={loading || !customQuestion.trim()}
                  className="px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
