"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { keralaBoardData } from "@/data/kerala-board-data";
import { useMedium } from "@/contexts/MediumContext";
import {
  BookOpen,
  ChevronRight,
  ArrowLeft,
  Clock,
  FileText,
} from "lucide-react";

export default function SubjectPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const { medium } = useMedium();
  const isMl = medium === "ml";

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);

  if (!classData || !subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Subject Not Found
          </h1>
          <Link
            href={`/classes/${classId}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Class {classId}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/classes" className="hover:text-blue-600">
            {isMl ? "ക്ലാസുകൾ" : "Classes"}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}`} className="hover:text-blue-600">
            {isMl ? `ക്ലാസ് ${classId}` : `Class ${classId}`}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">
            {isMl ? subject.nameMl : subject.name}
          </span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-7 h-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              {isMl ? subject.nameMl : subject.name}
            </h1>
          </div>
          {isMl ? (
            <p className="text-lg text-gray-500 ml-10">{subject.name}</p>
          ) : (
            subject.nameMl && (
              <p className="text-lg text-gray-500 ml-10">{subject.nameMl}</p>
            )
          )}
        </div>

        {/* Parts */}
        {subject.parts.map((part) => (
          <div key={part.partNumber} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-sm">
                  {part.partNumber}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isMl ? part.titleMl : part.title}
                </h2>
                {isMl ? (
                  <p className="text-sm text-gray-500">{part.title}</p>
                ) : (
                  part.titleMl && (
                    <p className="text-sm text-gray-500">{part.titleMl}</p>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              {part.chapters.map((chapter) => (
                <div
                  key={chapter.chapterNumber}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {isMl ? `അധ്യായം ${chapter.chapterNumber}` : `Chapter ${chapter.chapterNumber}`}
                        </span>
                        {chapter.pageStart && chapter.pageEnd && (
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {isMl ? `പേജുകൾ ${chapter.pageStart}-${chapter.pageEnd}` : `Pages ${chapter.pageStart}-${chapter.pageEnd}`}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">
                        {isMl ? chapter.titleMl : chapter.title}
                      </h3>
                      {isMl ? (
                        <p className="text-sm text-gray-500 mt-0.5">
                          {chapter.title}
                        </p>
                      ) : (
                        chapter.titleMl && (
                          <p className="text-sm text-gray-500 mt-0.5">
                            {chapter.titleMl}
                          </p>
                        )
                      )}
                      {chapter.headings.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {chapter.headings.map((heading, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                            >
                              {heading}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href={`/classes/${classId}/subjects/${subjectCode}/parts/${part.partNumber}/chapters/${chapter.chapterNumber}`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      {isMl ? "അധ്യായം വായിക്കുക" : "Read Chapter"}
                    </Link>
                    <Link
                      href={`/classes/${classId}/subjects/${subjectCode}/parts/${part.partNumber}/chapters/${chapter.chapterNumber}/learn`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                    >
                      🧠 {isMl ? "AI യോടൊപ്പം പഠിക്കുക" : "Learn with AI"}
                    </Link>
                    <Link
                      href={`/classes/${classId}/subjects/${subjectCode}/parts/${part.partNumber}/chapters/${chapter.chapterNumber}/quiz`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      🎯 {isMl ? "പ്രാക്ടീസ് ക്വിസ്" : "Practice Quiz"}
                    </Link>
                    <Link
                      href={`/classes/${classId}/subjects/${subjectCode}/parts/${part.partNumber}/chapters/${chapter.chapterNumber}/questions`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors"
                    >
                      📝 {isMl ? "ചോദ്യങ്ങൾ" : "Questions"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
