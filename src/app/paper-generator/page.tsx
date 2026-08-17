"use client";

import { useState } from "react";
import { keralaBoardData } from "@/data/kerala-board-data";
import {
  FileText,
  Send,
  Loader2,
  Download,
  Printer,
  CheckCircle,
} from "lucide-react";

interface PaperSection {
  section: string;
  title: string;
  questions: {
    question: string;
    marks: number;
    answer?: string;
  }[];
}

interface GeneratedPaper {
  title: string;
  totalMarks: number;
  duration: number;
  sections: PaperSection[];
  answerKey?: { question: string; answer: string }[];
}

export default function PaperGeneratorPage() {
  const [selectedClass, setSelectedClass] = useState(10);
  const [selectedSubject, setSelectedSubject] = useState("SCI");
  const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
  const [totalMarks, setTotalMarks] = useState(80);
  const [duration, setDuration] = useState(150);
  const [language, setLanguage] = useState<"en" | "ml">("en");
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paper, setPaper] = useState<GeneratedPaper | null>(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const classData = keralaBoardData.find((c) => c.number === selectedClass);
  const subject = classData?.subjects.find((s) => s.code === selectedSubject);
  const allChapters = subject?.parts.flatMap((p) => p.chapters) || [];

  const toggleChapter = (chapterNum: number) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterNum)
        ? prev.filter((c) => c !== chapterNum)
        : [...prev, chapterNum]
    );
  };

  const selectAllChapters = () => {
    setSelectedChapters(allChapters.map((c) => c.chapterNumber));
  };

  const generatePaper = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/papers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classId: selectedClass,
          subject: subject?.name || "",
          subjectCode: selectedSubject,
          chapters: selectedChapters.length > 0
            ? allChapters.filter((c) => selectedChapters.includes(c.chapterNumber)).map((c) => c.title)
            : allChapters.map((c) => c.title),
          chapterMls: selectedChapters.length > 0
            ? allChapters.filter((c) => selectedChapters.includes(c.chapterNumber)).map((c) => c.titleMl)
            : allChapters.map((c) => c.titleMl),
          topics: allChapters.flatMap((c) => c.headings),
          totalMarks,
          duration,
          language,
          includeAnswerKey,
        }),
      });
      const data = await res.json();
      setPaper(data.paper);
    } catch {
      alert("Error generating paper. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-orange-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Question Paper Generator
            </h1>
            <p className="text-sm text-gray-500">
              Generate Kerala State Board-style question papers
            </p>
          </div>
        </div>

        {/* Configuration */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Class */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(Number(e.target.value));
                  setSelectedSubject("");
                  setSelectedChapters([]);
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm"
              >
                {keralaBoardData.map((c) => (
                  <option key={c.number} value={c.number}>
                    Class {c.number}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapters([]);
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm"
              >
                {classData?.subjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Marks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Marks</label>
              <div className="flex gap-2">
                {[40, 60, 80, 100].map((m) => (
                  <button
                    key={m}
                    onClick={() => setTotalMarks(m)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      totalMarks === m
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <div className="flex gap-2">
                {[
                  { val: 60, label: "1 hr" },
                  { val: 90, label: "1.5 hr" },
                  { val: 120, label: "2 hr" },
                  { val: 150, label: "2.5 hr" },
                ].map((d) => (
                  <button
                    key={d.val}
                    onClick={() => setDuration(d.val)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      duration === d.val
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    language === "en" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ml")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    language === "ml" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  മലയാളം
                </button>
              </div>
            </div>

            {/* Answer Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAnswerKey}
                  onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <span className="text-sm text-gray-700">Include Answer Key</span>
              </label>
            </div>
          </div>

          {/* Chapter Selection */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">
                Select Chapters
              </label>
              <button
                onClick={selectAllChapters}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Select All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {allChapters.map((ch) => (
                <button
                  key={ch.chapterNumber}
                  onClick={() => toggleChapter(ch.chapterNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedChapters.includes(ch.chapterNumber)
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Ch {ch.chapterNumber}: {ch.title}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {selectedChapters.length === 0
                ? "All chapters selected"
                : `${selectedChapters.length} chapters selected`}
            </p>
          </div>

          <button
            onClick={generatePaper}
            disabled={loading}
            className="mt-6 w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {loading ? "Generating Paper..." : "Generate Question Paper"}
          </button>
        </div>

        {/* Generated Paper */}
        {paper && (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Paper Header */}
            <div className="p-8 border-b border-gray-200 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{paper.title}</h2>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
                <span>Time: {Math.floor(paper.duration / 60)} {paper.duration % 60 > 0 ? `hr ${paper.duration % 60} min` : "hr"}</span>
                <span>Total Marks: {paper.totalMarks}</span>
              </div>
              <div className="w-32 h-0.5 bg-gray-900 mx-auto mt-4" />
            </div>

            {/* Sections */}
            <div className="p-8">
              {paper.sections.map((section, si) => (
                <div key={si} className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.questions.map((q, qi) => (
                      <div key={qi} className="flex gap-3">
                        <span className="text-sm font-medium text-gray-500 mt-0.5 whitespace-nowrap">
                          {qi + 1}.
                        </span>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{q.question}</p>
                          <span className="text-xs text-gray-400">[{q.marks} mark{q.marks > 1 ? "s" : ""}]</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Answer Key */}
            {includeAnswerKey && paper.answerKey && (
              <div className="border-t border-gray-200">
                <button
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                  className="w-full px-8 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {showAnswerKey ? "Hide" : "Show"} Answer Key
                </button>
                {showAnswerKey && (
                  <div className="px-8 pb-8 space-y-3">
                    {paper.answerKey.map((ak, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="font-medium text-gray-500">{i + 1}.</span>
                        <div>
                          <p className="text-gray-900 font-medium">{ak.question}</p>
                          <p className="text-green-700 mt-0.5">Answer: {ak.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="px-8 py-4 border-t border-gray-200 bg-gray-50 flex gap-4">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
