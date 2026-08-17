"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Menu, X, Brain, FileText, Shield } from "lucide-react";
import { MediumSelector } from "./MediumSelector";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Paddikam" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-lg font-bold text-gray-900">
                Paddikam<span className="text-blue-600">.gg</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/classes"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-1.5" />
              Browse Classes
            </Link>
            <Link
              href="/ask-ai"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Brain className="w-4 h-4 mr-1.5" />
              Ask AI
            </Link>
            <Link
              href="/paper-generator"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Paper Generator
            </Link>
            <Link
              href="/admin"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Shield className="w-4 h-4 mr-1.5" />
              Admin
            </Link>
            <div className="ml-2">
              <MediumSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <MediumSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/classes"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Classes
            </Link>
            <Link
              href="/ask-ai"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <Brain className="w-5 h-5 mr-2" />
              Ask AI
            </Link>
            <Link
              href="/paper-generator"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 rounded-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Paper Generator
            </Link>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
