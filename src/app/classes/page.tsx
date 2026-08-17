"use client";

import Link from "next/link";
import { keralaBoardData } from "@/data/kerala-board-data";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";

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

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-1.5 mb-4">
            <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">
              Kerala State Board
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Select Your Class
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your class to explore textbooks, chapters, and AI-powered study materials
          </p>
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keralaBoardData.map((cls) => (
            <Link
              key={cls.number}
              href={`/classes/${cls.number}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${classColors[cls.number]}`} />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${classColors[cls.number]} flex items-center justify-center mb-4`}
                    >
                      <span className="text-white font-bold text-xl">
                        {cls.number}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cls.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {cls.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-2" />
                </div>

                {/* Subjects preview */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Subjects
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cls.subjects.map((subject) => (
                      <span
                        key={subject.code}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        <BookOpen className="w-3 h-3 mr-1" />
                        {subject.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Total chapters */}
                <div className="mt-3">
                  <p className="text-xs text-gray-500">
                    {cls.subjects.reduce(
                      (acc, s) =>
                        acc +
                        s.parts.reduce(
                          (pa, p) => pa + p.chapters.length,
                          0
                        ),
                      0
                    )}{" "}
                    chapters across {cls.subjects.length} subjects
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
