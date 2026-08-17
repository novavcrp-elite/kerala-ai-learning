import { NextRequest, NextResponse } from "next/server";
import { keralaBoardData } from "@/data/kerala-board-data";

// GET /api/textbooks - Get all classes
// GET /api/textbooks?classId=10 - Get subjects for a class
// GET /api/textbooks?classId=10&subjectCode=SCI - Get chapters for a subject
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const classId = searchParams.get("classId");
  const subjectCode = searchParams.get("subjectCode");

  if (!classId) {
    // Return all classes summary
    const classes = keralaBoardData.map((c) => ({
      number: c.number,
      name: c.name,
      description: c.description,
      subjectCount: c.subjects.length,
      totalChapters: c.subjects.reduce(
        (acc, s) => acc + s.parts.reduce((pa, p) => pa + p.chapters.length, 0),
        0
      ),
    }));
    return NextResponse.json({ classes });
  }

  const classData = keralaBoardData.find((c) => c.number === Number(classId));
  if (!classData) {
    return NextResponse.json({ error: "Class not found" }, { status: 404 });
  }

  if (!subjectCode) {
    // Return subjects for this class
    const subjects = classData.subjects.map((s) => ({
      code: s.code,
      name: s.name,
      nameMl: s.nameMl,
      parts: s.parts.map((p) => ({
        partNumber: p.partNumber,
        title: p.title,
        titleMl: p.titleMl,
        chapterCount: p.chapters.length,
      })),
      totalChapters: s.parts.reduce((pa, p) => pa + p.chapters.length, 0),
    }));
    return NextResponse.json({
      class: classData.name,
      subjects,
    });
  }

  const subject = classData.subjects.find((s) => s.code === subjectCode);
  if (!subject) {
    return NextResponse.json({ error: "Subject not found" }, { status: 404 });
  }

  // Return full chapter data for this subject
  return NextResponse.json({
    class: classData.name,
    classNumber: classData.number,
    subject: {
      code: subject.code,
      name: subject.name,
      nameMl: subject.nameMl,
    },
    parts: subject.parts.map((p) => ({
      partNumber: p.partNumber,
      title: p.title,
      titleMl: p.titleMl,
      chapters: p.chapters,
    })),
  });
}
