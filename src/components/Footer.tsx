import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Kerala AI Learn
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              AI-powered learning platform for Kerala State Board students. 
              Study with textbook-aware AI, generate practice questions, 
              and prepare for exams with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/classes" className="text-sm hover:text-white transition-colors">
                  Browse Classes
                </Link>
              </li>
              <li>
                <Link href="/ask-ai" className="text-sm hover:text-white transition-colors">
                  Ask AI
                </Link>
              </li>
              <li>
                <Link href="/paper-generator" className="text-sm hover:text-white transition-colors">
                  Paper Generator
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm hover:text-white transition-colors">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Classes
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <Link
                  key={num}
                  href={`/classes/${num}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  Class {num}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kerala AI Learning Helper. 
              Aligned with Kerala State Board (Samagra) curriculum.
            </p>
            <p className="text-xs text-gray-500 mt-2 md:mt-0">
              Textbook content sourced from official Kerala State Board resources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
