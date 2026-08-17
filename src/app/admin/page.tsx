"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Shield,
  BookOpen,
  Upload,
  Settings,
  BarChart3,
  Database,
  ChevronRight,
} from "lucide-react";

interface ClassInfo {
  number: number;
  name: string;
  subjectCount: number;
  totalChapters: number;
}

export default function AdminPage() {
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/textbooks")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data.classes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = {
    totalClasses: classes.length,
    totalSubjects: classes.reduce((a, c) => a + c.subjectCount, 0),
    totalChapters: classes.reduce((a, c) => a + c.totalChapters, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-gray-700" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500">
              Manage textbooks, chapters, and platform settings
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Classes", value: stats.totalClasses, icon: <BookOpen className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
            { label: "Subjects", value: stats.totalSubjects, icon: <Database className="w-5 h-5" />, color: "bg-green-50 text-green-600" },
            { label: "Chapters", value: stats.totalChapters, icon: <BarChart3 className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/admin/textbooks"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Textbook Manager</h3>
              <p className="text-sm text-gray-500">
                Import, add, edit, and manage all textbooks
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>

          <Link
            href="/admin/textbooks"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Import from Samagra</h3>
              <p className="text-sm text-gray-500">
                Import textbooks from official Kerala Samagra resources
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>

          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 opacity-60">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Mark Schemes</h3>
              <p className="text-sm text-gray-500">
                Configure marks and exam patterns (Coming Soon)
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 opacity-60">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Question Banks</h3>
              <p className="text-sm text-gray-500">
                Manage generated questions (Coming Soon)
              </p>
            </div>
          </div>
        </div>

        {/* Textbook Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Textbook Overview</h2>
          </div>

          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading...</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {classes.map((cls) => (
                <Link
                  key={cls.number}
                  href={`/admin/textbooks?class=${cls.number}`}
                  className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700">
                        {cls.number}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{cls.name}</p>
                      <p className="text-xs text-gray-500">
                        {cls.subjectCount} subjects · {cls.totalChapters} chapters
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
