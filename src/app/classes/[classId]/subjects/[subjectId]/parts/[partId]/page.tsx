"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { keralaBoardData } from "@/data/kerala-board-data";
import {
  ChevronRight,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

export default function PartPage() {
  const params = useParams();
  const classId = Number(params.classId);
  const subjectCode = String(params.subjectId);
  const partId = Number(params.partId);

  const classData = keralaBoardData.find((c) => c.number === classId);
  const subject = classData?.subjects.find((s) => s.code === subjectCode);
  const part = subject?.parts.find((p) => p.partNumber === partId);

  if (!classData || !subject || !part) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Part Not Found</h1>
          <Link href={`/classes/${classId}/subjects/${subjectCode}`} className="text-blue-600 font-medium">
            ← Back to {subject?.name || "Subject"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/classes" className="hover:text-blue-600">Classes</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}`} className="hover:text-blue-600">Class {classId}</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/classes/${classId}/subjects/${subjectCode}`} className="hover:text-blue-600">
            {subject.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{part.title}</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {subject.name} - {part.title}
        </h1>
        <p className="text-gray-500 mb-8">{part.titleMl}</p>

        <div className="space-y-3">
          {part.chapters.map((chapter) => (
            <Link
              key={chapter.chapterNumber}
              href={`/classes/${classId}/subjects/${subjectCode}/parts/${partId}/chapters/${chapter.chapterNumber}`}
              className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-sm">
                  {chapter.chapterNumber}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{chapter.title}</h3>
                {chapter.titleMl && (
                  <p className="text-sm text-gray-500">{chapter.titleMl}</p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {chapter.headings.slice(0, 3).map((h, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {h}
                    </span>
                  ))}
                  {chapter.headings.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{chapter.headings.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
