"use client";

import { useMedium } from "@/contexts/MediumContext";
import { Globe } from "lucide-react";

export function MediumSelector() {
  const { medium, setMedium } = useMedium();

  return (
    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg p-0.5">
      <Globe className="w-3.5 h-3.5 text-gray-500 ml-1.5" />
      <button
        onClick={() => setMedium("en")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          medium === "en"
            ? "bg-white text-blue-700 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setMedium("ml")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          medium === "ml"
            ? "bg-white text-green-700 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        ML
      </button>
    </div>
  );
}
