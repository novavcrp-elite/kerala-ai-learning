"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { keralaBoardData } from "@/data/kerala-board-data";
import { BookOpen, ChevronRight, ArrowLeft, FileText, Hash } from "lucide-react";

const classColors: Record<number, string> = {
  1: "from-rose-500 to-pink-500",
  2: "from-orange-500 to-amber-500",
  3: "from-yellow-500 to-lime-500",
  4: "from-green-500 to-emerald-500",
  5: "from-teal-500 to-cyan-500",
  6: "from-blue-500 to-indigo-500",
  7: "from-violet-500 to-purple-500",
  8: "from-fuchsia-500 to-pink-500",
  9: "from-red-500 to-rose-500",
  10: "from-indigo-600 to-blue-600",
};

export default function ClassPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const classData = keralaBoardData.find((c) => c.number === classId);

  if (!classData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Class Not Found
          </h1>
          <Link
            href="/classes"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/classes"
            className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All Classes
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${classColors[classId]} flex items-center justify-center`}
            >
              <span className="text-white font-bold text-2xl">{classId}</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {classData.name}
              </h1>
              <p className="text-gray-600 mt-1">{classData.description}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {classData.subjects.length} subjects ·{" "}
            {classData.subjects.reduce(
              (acc, s) =>
                acc + s.parts.reduce((pa, p) => pa + p.chapters.length, 0),
              0
            )}{" "}
            total chapters
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classData.subjects.map((subject) => {
            const totalChapters = subject.parts.reduce(
              (acc, p) => acc + p.chapters.length,
              0
            );
            const totalParts = subject.parts.length;

            return (
              <div
                key={subject.code}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <h2 className="text-xl font-bold text-gray-900">
                          {subject.name}
                        </h2>
                      </div>
                      {subject.nameMl && (
                        <p className="text-sm text-gray-500 ml-7">
                          {subject.nameMl}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-1 ml-7">
                        Code: {subject.code}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {totalParts} {totalParts === 1 ? "Part" : "Parts"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Hash className="w-4 h-4" />
                      {totalChapters} Chapters
                    </span>
                  </div>

                  {/* Parts */}
                  <div className="mt-4 space-y-3">
                    {subject.parts.map((part) => (
                      <div key={part.partNumber}>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          {part.title}{" "}
                          {part.titleMl && (
                            <span className="normal-case">({part.titleMl})</span>
                          )}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {part.chapters.map((chapter) => (
                            <Link
                              key={chapter.chapterNumber}
                              href={`/classes/${classId}/subjects/${subject.code}/parts/${part.partNumber}/chapters/${chapter.chapterNumber}`}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-300 transition-all"
                            >
                              Ch {chapter.chapterNumber}: {chapter.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View all link */}
                <div className="border-t border-gray-100 px-6 py-3">
                  <Link
                    href={`/classes/${classId}/subjects/${subject.code}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    View all {totalChapters} chapters
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
