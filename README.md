# Kerala AI Learning Helper

AI-powered learning platform for Kerala State Board students (Class 1–10).

## Features

- **Complete Textbook Library** – All Kerala State Board subjects from Class 1 to 10
- **AI-Powered Learning** – Textbook-aware AI explanations, summaries, and study materials
- **Question Generator** – MCQ, short answer, long answer, and mixed questions
- **Practice Quizzes** – Interactive quizzes with instant feedback
- **Question Paper Generator** – Full Kerala Board-style exam papers with answer keys
- **Ask AI** – Chat with an AI tutor for any chapter
- **Malayalam Support** – Study materials available in both English and Malayalam
- **Admin Panel** – Manage textbooks, import from Samagra, and edit content

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- React 19
- Tailwind CSS v4
- Prisma (SQLite for dev, PostgreSQL for production)
- OpenAI API (optional, falls back to template responses)
- Vercel (deployment target)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env` and configure:

```bash
# Database
DATABASE_URL="file:./dev.db"

# OpenAI (optional – platform works without it)
# OPENAI_API_KEY="sk-your-key-here"

# Admin
ADMIN_SECRET="your-admin-secret"
```

### 3. Set up the database

```bash
npx prisma db push
npx prisma generate
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment to Vercel

1. Push to GitHub
2. Connect the repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `DATABASE_URL` – PostgreSQL connection string (e.g., from Supabase or Neon)
   - `OPENAI_API_KEY` – Your OpenAI API key
   - `ADMIN_SECRET` – Admin panel secret
4. Deploy

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── ai/route.ts          # AI chat endpoint
│   │   ├── questions/route.ts   # Question generation
│   │   ├── papers/route.ts      # Paper generation
│   │   └── textbooks/route.ts   # Textbook data API
│   ├── classes/
│   │   ├── page.tsx             # Browse all classes
│   │   └── [classId]/
│   │       ├── page.tsx         # Class detail
│   │       └── subjects/[subjectId]/
│   │           ├── page.tsx     # Subject detail
│   │           └── parts/[partId]/
│   │               ├── page.tsx # Part detail
│   │               └── chapters/[chapterId]/
│   │                   ├── page.tsx     # Chapter detail
│   │                   ├── learn/page.tsx   # AI learning
│   │                   ├── quiz/page.tsx    # Practice quiz
│   │                   └── questions/page.tsx # Question generator
│   ├── ask-ai/page.tsx          # Global AI chat
│   ├── paper-generator/page.tsx # Paper generator
│   ├── admin/
│   │   ├── page.tsx             # Admin dashboard
│   │   └── textbooks/page.tsx   # Textbook manager
│   └── page.tsx                 # Home page
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/
│   └── kerala-board-data.ts     # Complete textbook data
└── lib/
    └── db.ts                    # Database client
```

## Kerala Board Curriculum Data

The platform includes comprehensive curriculum data for:

| Class | Subjects |
|-------|----------|
| 1-2 | English, Malayalam, Mathematics |
| 3-5 | English, Malayalam, Mathematics, Environmental Studies |
| 6-8 | English, Malayalam, Mathematics, Science, Social Science |
| 9-10 | English, Malayalam, Mathematics, Science, Social Science |

Each subject includes:
- Chapter titles (English and Malayalam)
- Topic headings
- Page references
- Learning mode options

## Samagra Integration

The platform is designed to integrate with official Kerala Samagra textbook resources:
- Automatic PDF import (where permitted)
- Manual PDF upload as fallback
- Chapter auto-detection from imported PDFs
- Source URL tracking for all content

## License

This project uses publicly available Kerala State Board curriculum information for educational purposes. Textbook content should be sourced from official Kerala Samagra resources.
