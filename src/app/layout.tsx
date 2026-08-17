import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MediumProvider } from "@/contexts/MediumContext";

export const metadata: Metadata = {
  title: "Paddikam - Kerala State Board AI Learning Platform",
  description:
    "AI-powered learning platform for Kerala State Board students from Class 1 to Class 10. Study with AI, generate questions, practice quizzes, and prepare for exams in English or Malayalam medium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <MediumProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MediumProvider>
      </body>
    </html>
  );
}
