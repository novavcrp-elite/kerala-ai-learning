// Index of all chapter content for AI retrieval
// Import all chapter content files and export them in a unified structure

import { class10EnglishChapters } from './class10-english';
import { class10PhysicsChapters } from './class10-physics';
import { class10ChemistryChapters } from './class10-chemistry';
import { class10BiologyChapters } from './class10-biology';

export interface ChapterContent {
  chapterNumber: number;
  title: string;
  titleMl: string;
  author?: string;
  type?: string;
  summary: string;
  summaryMl: string;
  characters?: string[];
  keyPoints: string[];
  keyPointsMl: string[];
  importantQuestions: { q: string; a: string; qMl: string; aMl: string }[];
  definitions?: { term: string; meaning: string; termMl: string; meaningMl: string }[];
  themes?: string[];
}

// Map of class-subject -> chapter content
export const chapterContentMap: Record<string, ChapterContent[]> = {
  '10-ENG': class10EnglishChapters,
  '10-PHY': class10PhysicsChapters,
  '10-CHM': class10ChemistryChapters,
  '10-BIO': class10BiologyChapters,
};

/**
 * Get chapter content for a specific class, subject, and chapter number
 */
export function getChapterContent(
  classNumber: number,
  subjectCode: string,
  chapterNumber: number
): ChapterContent | undefined {
  const key = `${classNumber}-${subjectCode}`;
  const chapters = chapterContentMap[key];
  if (!chapters) return undefined;
  return chapters.find(ch => ch.chapterNumber === chapterNumber);
}

/**
 * Get all chapter content for a subject
 */
export function getSubjectContent(
  classNumber: number,
  subjectCode: string
): ChapterContent[] {
  const key = `${classNumber}-${subjectCode}`;
  return chapterContentMap[key] || [];
}

/**
 * Build AI context for a specific chapter
 */
export function buildChapterContext(
  classNumber: number,
  subjectCode: string,
  chapterNumber: number,
  language: string = 'en'
): string {
  const chapter = getChapterContent(classNumber, subjectCode, chapterNumber);
  if (!chapter) return '';

  const isMl = language === 'ml';
  const parts: string[] = [];

  parts.push(`Chapter ${chapter.chapterNumber}: ${isMl ? chapter.titleMl : chapter.title}`);
  if (chapter.author) parts.push(`Author: ${chapter.author}`);

  parts.push(`\nSummary:\n${isMl ? chapter.summaryMl : chapter.summary}`);

  if (chapter.characters && chapter.characters.length > 0) {
    parts.push(`\nCharacters:\n${chapter.characters.map(c => `- ${c}`).join('\n')}`);
  }

  parts.push(`\nKey Points:\n${(isMl ? chapter.keyPointsMl : chapter.keyPoints).map((kp, i) => `${i + 1}. ${kp}`).join('\n')}`);

  if (chapter.importantQuestions.length > 0) {
    parts.push(`\nImportant Q&A:`);
    for (const qa of chapter.importantQuestions) {
      parts.push(`Q: ${isMl ? qa.qMl : qa.q}`);
      parts.push(`A: ${isMl ? qa.aMl : qa.a}`);
      parts.push('');
    }
  }

  if (chapter.definitions && chapter.definitions.length > 0) {
    parts.push(`\nDefinitions:`);
    for (const def of chapter.definitions) {
      parts.push(`${isMl ? def.termMl : def.term}: ${isMl ? def.meaningMl : def.meaning}`);
    }
  }

  if (chapter.themes && chapter.themes.length > 0) {
    parts.push(`\nThemes: ${chapter.themes.join(', ')}`);
  }

  return parts.join('\n');
}

/**
 * Build context for multiple chapters
 */
export function buildMultiChapterContext(
  classNumber: number,
  subjectCode: string,
  chapterNumbers: number[],
  language: string = 'en'
): string {
  const contexts = chapterNumbers
    .map(cn => buildChapterContext(classNumber, subjectCode, cn, language))
    .filter(c => c.length > 0);
  return contexts.join('\n\n---\n\n');
}
