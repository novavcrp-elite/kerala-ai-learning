"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Brain,
  FileText,
  Target,
  MessageCircle,
  Sparkles,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Languages,
  Shield,
} from "lucide-react";

interface ClassInfo {
  number: number;
  name: string;
  subjectCount: number;
}

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

const classSubjects: Record<number, string[]> = {
  1: ["English", "Malayalam", "Mathematics"],
  2: ["English", "Malayalam", "Mathematics"],
  3: ["English", "Malayalam", "Mathematics", "Environmental Studies"],
  4: ["English", "Malayalam", "Mathematics", "Environmental Studies"],
  5: ["English", "Malayalam", "Mathematics", "Environmental Studies"],
  6: ["English", "Malayalam", "Mathematics", "Science", "Social Science"],
  7: ["English", "Malayalam", "Mathematics", "Science", "Social Science"],
  8: ["English", "Malayalam", "Mathematics", "Science", "Social Science"],
  9: ["English", "Malayalam", "Mathematics", "Science", "Social Science"],
  10: ["English", "Malayalam", "Mathematics", "Science", "Social Science"],
};

export default function HomePage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Complete Textbook Library",
      description:
        "Browse all Kerala State Board textbooks from Class 1 to Class 10 with chapters and content.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Learning",
      description:
        "Get explanations, summaries, and study materials generated from actual textbook content.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Question Paper Generator",
      description:
        "Generate realistic Kerala Board-style question papers with answer keys and model answers.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practice Quizzes",
      description:
        "Test your knowledge with MCQs, short answers, and long answers from each chapter.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Ask AI Anything",
      description:
        "Ask questions about any chapter and get textbook-aware answers with proper explanations.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "English & Malayalam",
      description:
        "Study in both English and Malayalam. AI explanations available in both languages.",
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="kerala-gradient">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-white">
                  AI-Powered Kerala Board Study Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn Smarter with{" "}
                <span className="text-yellow-300">AI</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
                Complete Kerala State Board study platform for Classes 1 to 10.
                Get textbook-aware AI explanations, generate practice questions,
                and prepare for exams with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/classes"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/ask-ai"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Ask AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Select Your Class
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your class to explore textbooks, chapters, and study materials
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <Link
                key={num}
                href={`/classes/${num}`}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedClass === num
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
                onMouseEnter={() => setSelectedClass(num)}
                onMouseLeave={() => setSelectedClass(null)}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${classColors[num]} flex items-center justify-center mb-3 mx-auto`}
                >
                  <span className="text-white font-bold text-lg">{num}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center">
                  Class {num}
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  {classSubjects[num]?.length || 3} subjects
                </p>
                <ChevronRight className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Everything You Need to Study
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed specifically for Kerala State Board students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How Would You Like to Study?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple learning modes to suit your study style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "📖",
                title: "Read Chapter",
                desc: "Read the complete chapter content from Kerala Board textbooks",
              },
              {
                icon: "🧠",
                title: "Learn with AI",
                desc: "Get AI-powered summaries, explanations, and key points",
              },
              {
                icon: "📝",
                title: "Generate Questions",
                desc: "Create chapter-wise questions with difficulty levels",
              },
              {
                icon: "🎯",
                title: "Practice Quiz",
                desc: "Test yourself with MCQs, short answers, and long answers",
              },
              {
                icon: "📄",
                title: "Generate Paper",
                desc: "Create full exam papers in Kerala Board format",
              },
              {
                icon: "💡",
                title: "Ask AI",
                desc: "Ask any question and get textbook-aware answers",
              },
            ].map((mode, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-3xl mb-3 block">{mode.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{mode.title}</h3>
                <p className="text-sm text-gray-600">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Choose your class and start exploring Kerala State Board textbooks
              with AI-powered learning tools.
            </p>
            <Link
              href="/classes"
              className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Browse All Classes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
