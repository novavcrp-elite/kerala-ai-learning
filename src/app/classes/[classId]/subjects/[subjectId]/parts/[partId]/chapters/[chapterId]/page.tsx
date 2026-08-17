"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { keralaBoardData } from "@/data/kerala-board-data";
import { useMedium } from "@/contexts/MediumContext";
import {
  ChevronRight,
  BookOpen,
  Brain,
  Target,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function ChapterPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const partId = Number(params.partId);
  const chapterId = Number(params.chapterId);
  const { medium } = useMedium();
  const isMl = medium === "ml";

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);
  const part = subject?.parts.find((p) => p.partNumber === partId);
  const chapter = part?.chapters.find((c) => c.chapterNumber === chapterId);

  if (!classData || !subject || !part || !chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {isMl ? "അധ്യായം കണ്ടെത്തിയില്ല" : "Chapter Not Found"}
          </h1>
          <Link
            href={`/classes/${classId}/subjects/${subjectCode}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← {isMl ? "തിരികെ" : "Back to"} {isMl ? subject?.nameMl : subject?.name}
          </Link>
        </div>
      </div>
    );
  }

  const basePath = `/classes/${classId}/subjects/${subjectCode}/parts/${partId}/chapters/${chapterId}`;

  const learningModes = [
    {
      icon: "📖",
      title: isMl ? "അധ്യായം വായിക്കുക" : "Read Chapter",
      description: isMl ? `${subject?.nameMl} ${part.titleMl} യിൽ നിന്നുള്ള പൂർണ്ണ അധ്യായ ഉള്ളടക്കം` : `Read the complete chapter content from ${subject?.name} Part ${part.partNumber}`,
      href: basePath,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: "🧠",
      title: isMl ? "AI യോടൊപ്പം പഠിക്കുക" : "Learn with AI",
      description: isMl ? "AI സംഗ്രഹങ്ങൾ, പ്രധാന പോയിന്റുകൾ, വിശദീകരണങ്ങൾ നേടുക" : "Get AI-powered summaries, key points, and explanations",
      href: `${basePath}/learn`,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
    },
    {
      icon: "📝",
      title: isMl ? "ചോദ്യങ്ങൾ സൃഷ്ടിക്കുക" : "Generate Questions",
      description: isMl ? "MCQ, ചെറുത്തുത്തരം, ദീർഘോത്തരം എന്നിവയിൽ അധ്യായ ചോദ്യങ്ങൾ" : "Create chapter-wise questions with MCQ, short & long answers",
      href: `${basePath}/questions`,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      textColor: "text-orange-700",
    },
    {
      icon: "🎯",
      title: isMl ? "പ്രാക്ടീസ് ക്വിസ്" : "Practice Quiz",
      description: isMl ? "ഇന്ററാക്ടീവ് ക്വിസുകളിലൂടെ നിങ്ങളുടെ അറിവ് പരിശോധിക്കുക" : "Test your knowledge with interactive quizzes",
      href: `${basePath}/quiz`,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      textColor: "text-green-700",
    },
    {
      icon: "💡",
      title: isMl ? "AI യോട് ചോദിക്കുക" : "Ask AI",
      description: isMl ? "ഈ അധ്യായത്തെക്കുറിച്ച് ഏതും ചോദിക്കുക" : "Ask any question about this chapter",
      href: `/ask-ai?classId=${classId}&subjectCode=${subjectCode}&chapterId=${chapterId}`,
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      textColor: "text-teal-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/classes" className="hover:text-blue-600">
            {isMl ? "ക്ലാസുകൾ" : "Classes"}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}`} className="hover:text-blue-600">
            {isMl ? `ക്ലാസ് ${classId}` : `Class ${classId}`}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/classes/${classId}/subjects/${subjectCode}`}
            className="hover:text-blue-600"
          >
            {isMl ? subject.nameMl : subject.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/classes/${classId}/subjects/${subjectCode}/parts/${partId}`}
            className="hover:text-blue-600"
          >
            {isMl ? part.titleMl : part.title}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">
            {isMl ? `അധ്യായം ${chapter.chapterNumber}` : `Ch ${chapter.chapterNumber}`}
          </span>
        </div>

        {/* Chapter Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {isMl ? `അധ്യായം ${chapter.chapterNumber}` : `Chapter ${chapter.chapterNumber}`}
            </span>
            <span className="text-xs text-gray-400">
              {isMl ? subject.nameMl : subject.name} · {isMl ? part.titleMl : part.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {isMl ? chapter.titleMl : chapter.title}
          </h1>
          {isMl ? (
            <p className="text-lg text-gray-500">{chapter.title}</p>
          ) : (
            chapter.titleMl && (
              <p className="text-lg text-gray-500">{chapter.titleMl}</p>
            )
          )}
          {chapter.pageStart && chapter.pageEnd && (
            <p className="text-sm text-gray-400 mt-2">
              📄 {isMl ? `പേജുകൾ ${chapter.pageStart} - ${chapter.pageEnd}` : `Pages ${chapter.pageStart} - ${chapter.pageEnd}`}
            </p>
          )}

          {/* Topics/Headings */}
          {chapter.headings.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                {isMl ? "ഉൾക്കൊള്ളുന്ന വിഷയങ്ങൾ" : "Topics Covered"}
              </p>
              <div className="flex flex-wrap gap-2">
                {chapter.headings.map((heading, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {heading}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Learning Modes */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isMl ? "നിങ്ങളുടെ പഠന രീതി തിരഞ്ഞെടുക്കുക" : "Choose Your Learning Mode"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningModes.map((mode, index) => (
              <Link
                key={index}
                href={mode.href}
                className={`p-5 rounded-xl border-2 transition-all hover:shadow-md ${mode.color}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{mode.icon}</span>
                  <div>
                    <h3 className={`font-semibold ${mode.textColor}`}>
                      {mode.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {mode.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Chapter Content Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            📖 {isMl ? "അധ്യായ ഉള്ളടക്കം" : "Chapter Content"}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {isMl
                ? `ഈ അധ്യായം കേരള സ്റ്റേറ്റ് ബോർഡ് ${subject.nameMl} പാഠപുസ്തകത്തിൽ നിന്നുള്ള താഴെ പറയുന്ന പ്രധാന വിഷയങ്ങൾ ഉൾക്കൊള്ളുന്നു:`
                : `This chapter covers the following important topics from the Kerala State Board ${subject.name} textbook for Class ${classId}:`
              }
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              {chapter.headings.map((heading, i) => (
                <li key={i}>{heading}</li>
              ))}
            </ul>
            <p className="text-gray-600 mt-4">
              {isMl
                ? "AI സഹായത്തോടെ ഈ അധ്യായം പഠിക്കാനോ, ക്വിസുകൾ പ്രാക്ടീസ് ചെയ്യാനോ, ചോദ്യപേപ്പറുകൾ സൃഷ്ടിക്കാനോ മുകളിലെ പഠന രീതികൾ ഉപയോഗിക്കുക."
                : "Use the learning modes above to study this chapter with AI assistance, practice quizzes, or generate question papers."
              }
            </p>
          </div>

          {/* Previous/Next Chapter */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
            {chapter.chapterNumber > 1 ? (
              <Link
                href={`${basePath.split("/").slice(0, -1).join("/")}/${chapter.chapterNumber - 1}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                ← {isMl ? `അധ്യായം ${chapter.chapterNumber - 1}` : `Chapter ${chapter.chapterNumber - 1}`}
              </Link>
            ) : (
              <div />
            )}
            {chapter.chapterNumber <
              (part.chapters[part.chapters.length - 1]?.chapterNumber || 0) ? (
              <Link
                href={`${basePath.split("/").slice(0, -1).join("/")}/${chapter.chapterNumber + 1}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {isMl ? `അധ്യായം ${chapter.chapterNumber + 1}` : `Chapter ${chapter.chapterNumber + 1}`} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
