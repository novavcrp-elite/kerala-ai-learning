"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { keralaBoardData } from "@/data/kerala-board-data";
import {
  Shield,
  Upload,
  Plus,
  Edit3,
  ChevronRight,
  Search,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";

interface TextbookRecord {
  id: number;
  className: string;
  classNumber: number;
  subject: string;
  subjectCode: string;
  partNumber: number;
  title: string;
  sourceUrl: string;
  isImported: boolean;
  isActive: boolean;
  chapterCount: number;
}

export default function AdminTextbooksPage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showImportModal, setShowImportModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Generate textbook records from our data
  const textbooks: TextbookRecord[] = keralaBoardData.flatMap((cls) =>
    cls.subjects.flatMap((subject) =>
      subject.parts.map((part) => ({
        id: cls.number * 1000 + subject.code.charCodeAt(0) * 100 + part.partNumber,
        className: cls.name,
        classNumber: cls.number,
        subject: subject.name,
        subjectCode: subject.code,
        partNumber: part.partNumber,
        title: `${subject.name} - Part ${part.partNumber}`,
        sourceUrl: `https://samagra.kite.kerala.gov.in/`,
        isImported: false,
        isActive: true,
        chapterCount: part.chapters.length,
      }))
    )
  );

  const filteredTextbooks = textbooks.filter((tb) => {
    if (selectedClass && tb.classNumber !== selectedClass) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        tb.className.toLowerCase().includes(query) ||
        tb.subject.toLowerCase().includes(query) ||
        tb.title.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/admin" className="hover:text-blue-600">
            Admin
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Textbook Manager</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-gray-700" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Textbook Manager
              </h1>
              <p className="text-sm text-gray-500">
                Manage all Kerala State Board textbooks
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowImportModal(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Import from Samagra
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Textbook
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search textbooks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedClass(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  selectedClass === null
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                All
              </button>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() =>
                    setSelectedClass(selectedClass === num ? null : num)
                  }
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    selectedClass === num
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Textbook Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Class
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Subject
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Part
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Chapters
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Source
                </th>
                <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTextbooks.map((tb) => (
                <tr key={tb.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">
                      {tb.className}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{tb.subject}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">Part {tb.partNumber}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{tb.chapterCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tb.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {tb.isActive ? "Active" : "Disabled"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={tb.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Samagra
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-orange-600 rounded-lg hover:bg-orange-50">
                        <Upload className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTextbooks.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No textbooks found matching your criteria.
            </div>
          )}
        </div>

        {/* Import Modal */}
        {showImportModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Import from Samagra
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Import textbooks from the official Kerala Samagra textbook resources.
                Note: Only publicly accessible textbooks can be imported automatically.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    {keralaBoardData.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Select subject...</option>
                  </select>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ <strong>Important:</strong> We respect Samagra&apos;s access
                    rules and copyright requirements. If direct automated importing
                    is not permitted, you can manually upload the legally obtained
                    textbook PDF instead.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Add Textbook
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    {keralaBoardData.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Mathematics"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Part Number
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value={1}>Part 1</option>
                    <option value={2}>Part 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload PDF
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF files only (max 50MB)
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Source URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://samagra.kite.kerala.gov.in/..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  Add Textbook
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
