import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kerala AI Learning Helper - Kerala State Board Study Platform",
  description:
    "AI-powered learning platform for Kerala State Board students from Class 1 to Class 10. Study with AI, generate questions, practice quizzes, and prepare for exams.",
  keywords: [
    "Kerala State Board",
    "AI Learning",
    "Study Helper",
    "Kerala Board",
    "Class 1-10",
    "Exam Preparation",
    "Samagra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
