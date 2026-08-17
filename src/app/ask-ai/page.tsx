"use client";

import { useState } from "react";
import { keralaBoardData } from "@/data/kerala-board-data";
import { Brain, Send, Loader2, BookOpen } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AskAIPage() {
  const [selectedClass, setSelectedClass] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("SCI");
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState<"en" | "ml">("en");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const classData = keralaBoardData.find((c) => c.number === selectedClass);
  const subject = classData?.subjects.find((s) => s.code === selectedSubject);
  const allChapters = subject?.parts.flatMap((p) => p.chapters) || [];

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMsg = message.trim();
    setMessage("");
    setLoading(true);
    setChatHistory((prev) => [...prev, { role: "user", content: userMsg }]);

    const context: Record<string, unknown> = {
      classId: selectedClass,
      subject: subject?.name || "",
      language,
    };

    if (selectedChapter) {
      const ch = allChapters.find((c) => String(c.chapterNumber) === selectedChapter);
      if (ch) {
        context.chapter = ch.title;
        context.chapterMl = ch.titleMl;
        context.topics = ch.headings;
      }
    }

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, context }),
      });
      const data = await res.json();
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: data.response || "No response generated." },
      ]);
    } catch {
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Error generating response. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Ask AI</h1>
            <p className="text-sm text-gray-500">
              Ask any question about Kerala State Board textbooks
            </p>
          </div>
        </div>

        {/* Context Selection */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            📚 Select Chapter Context (Optional)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(Number(e.target.value));
                  setSelectedSubject("");
                  setSelectedChapter("");
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {keralaBoardData.map((c) => (
                  <option key={c.number} value={c.number}>
                    Class {c.number}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapter("");
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Subject</option>
                {classData?.subjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Chapter</label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All / General</option>
                {allChapters.map((ch) => (
                  <option key={ch.chapterNumber} value={ch.chapterNumber}>
                    Ch {ch.chapterNumber}: {ch.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-gray-500">Language:</span>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                language === "en"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("ml")}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                language === "ml"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              മലയാളം
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Messages */}
          <div className="p-6 space-y-4 min-h-[400px] max-h-[600px] overflow-y-auto">
            {chatHistory.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Ask anything about your textbooks
                </h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  Select your class, subject, and chapter for context-aware answers.
                  Try questions like:
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    "Explain this chapter",
                    "Give me 5-mark answers",
                    "Important questions for exams",
                    "Explain in Malayalam",
                    "Quiz me",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => setMessage(q)}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-100 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "assistant" ? "" : "justify-end"}`}
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
                      : "bg-purple-600 text-white"
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

          {/* Input */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !message.trim()}
                className="px-5 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
