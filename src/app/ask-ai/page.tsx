"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, GraduationCap, Globe } from "lucide-react";
import { useMedium } from "@/contexts/MediumContext";

interface Message {
  role: "user" | "assistant";
  content: string;
  source?: string;
}

interface ClassOption {
  number: number;
  name: string;
  subjects: { code: string; name: string; nameMl: string }[];
}

const classOptions: ClassOption[] = [
  { number: 10, name: "Class 10", subjects: [
    { code: "ENG", name: "English", nameMl: "ഇംഗ്ലീഷ്" },
    { code: "ML", name: "Malayalam", nameMl: "മലയാളം" },
    { code: "MATH", name: "Mathematics", nameMl: "ഗണിതം" },
    { code: "PHY", name: "Physics", nameMl: "ഭൗതികശാസ്ത്രം" },
    { code: "CHM", name: "Chemistry", nameMl: "രസതന്ത്രം" },
    { code: "BIO", name: "Biology", nameMl: "ജീവശാസ്ത്രം" },
    { code: "SS", name: "Social Science", nameMl: "സാമൂഹ്യശാസ്ത്രം" },
  ]},
  { number: 9, name: "Class 9", subjects: [
    { code: "ENG", name: "English", nameMl: "ഇംഗ്ലീഷ്" },
    { code: "ML", name: "Malayalam", nameMl: "മലയാളം" },
    { code: "MATH", name: "Mathematics", nameMl: "ഗണിതം" },
    { code: "PHY", name: "Physics", nameMl: "ഭൗതികശാസ്ത്രം" },
    { code: "CHM", name: "Chemistry", nameMl: "രസതന്ത്രം" },
    { code: "BIO", name: "Biology", nameMl: "ജീവശാസ്ത്രം" },
    { code: "SS", name: "Social Science", nameMl: "സാമൂഹ്യശാസ്ത്രം" },
  ]},
  { number: 8, name: "Class 8", subjects: [
    { code: "ENG", name: "English", nameMl: "ഇംഗ്ലീഷ്" },
    { code: "ML", name: "Malayalam", nameMl: "മലയാളം" },
    { code: "MATH", name: "Mathematics", nameMl: "ഗണിതം" },
    { code: "BS", name: "Basic Science", nameMl: "ബേസിക് സയൻസ്" },
    { code: "SS", name: "Social Science", nameMl: "സാമൂഹ്യശാസ്ത്രം" },
  ]},
];

export default function AskAIPage() {
  const { medium } = useMedium();
  const isMl = medium === "ml";
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("ENG");
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentClass = classOptions.find(c => c.number === selectedClass);
  const currentSubjects = currentClass?.subjects || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickQuestions = [
    isMl ? "ഈ അധ്യായത്തെക്കുറിച്ച് വിശദീകരിക്കുക" : "Explain this chapter",
    isMl ? "പ്രധാന ചോദ്യങ്ങൾ തരൂ" : "Give important questions",
    isMl ? "2 മാർക്ക് ഉത്തരം തരൂ" : "Give a 2-mark answer",
    isMl ? "5 മാർക്ക് ഉത്തരം തരൂ" : "Give a 5-mark answer",
    isMl ? "മലയാളത്തിൽ വിശദീകരിക്കുക" : "Explain in Malayalam",
    isMl ? "ക്വിസ് ചോദ്യങ്ങൾ തരൂ" : "Give quiz questions",
  ];

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || loading) return;

    const userMessage: Message = { role: "user", content: msg };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          language: medium,
          classNumber: selectedClass,
          subjectCode: selectedSubject,
          chapterNumber: selectedChapter,
        }),
      });

      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.response, source: data.source },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: isMl ? "ക്ഷമിക്കണം, ഒരു പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക." : "Sorry, an error occurred. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="/images/ai-avatar.png" alt="AI Teacher" className="w-16 h-16 rounded-full shadow-lg border-2 border-blue-200" />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">
                {isMl ? "പാഡ്ഡിക്കം AI ടീച്ചർ" : "Paddikam AI Teacher"}
              </h1>
              <p className="text-sm text-gray-500">
                {isMl ? "നിങ്ങളുടെ കേരള ബോർഡ് AI പഠന സഹായി" : "Your Kerala Board AI Study Helper"}
              </p>
            </div>
          </div>
        </div>

        {/* Subject Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                {isMl ? "ക്ലാസ്" : "Class"}
              </label>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(Number(e.target.value));
                  setSelectedChapter(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                {classOptions.map(c => (
                  <option key={c.number} value={c.number}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                {isMl ? "വിഷയം" : "Subject"}
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapter(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                {currentSubjects.map(s => (
                  <option key={s.code} value={s.code}>{isMl ? s.nameMl : s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                {isMl ? "അധ്യായം" : "Chapter"}
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                  <option key={n} value={n}>{isMl ? `അധ്യായം ${n}` : `Chapter ${n}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <img src="/images/ai-avatar.png" alt="AI Teacher" className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg border-3 border-blue-200" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {isMl ? "ഹലോ! ഞാൻ നിങ്ങളുടെ AI ടീച്ചറാണ് 👋" : "Hello! I'm your AI Teacher 👋"}
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  {isMl ? `${currentClass?.name} - ${currentSubjects.find(s => s.code === selectedSubject)?.nameMl} യെക്കുറിച്ച് എന്തും ചോദിക്കുക` : `Ask me anything about ${currentClass?.name} - ${currentSubjects.find(s => s.code === selectedSubject)?.name}`}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "assistant" && (
                  <img src="/images/ai-avatar.png" alt="AI" className="w-9 h-9 rounded-full shadow border border-blue-200 flex-shrink-0 mt-1" />
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-gray-100 text-gray-900 rounded-bl-md"
                }`}>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                  {msg.source && msg.role === "assistant" && (
                    <div className="mt-2 text-xs opacity-60">
                      {msg.source === "ai" ? "🤖 AI" : "📋 Textbook"}
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <img src="/images/ai-avatar.png" alt="AI" className="w-9 h-9 rounded-full shadow border border-blue-200" />
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    {isMl ? "ചിന്തിക്കുന്നു..." : "Thinking..."}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isMl ? "നിങ്ങളുടെ ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യുക..." : "Type your question here..."}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-xl transition-colors"
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
