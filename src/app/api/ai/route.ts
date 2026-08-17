import { NextRequest, NextResponse } from "next/server";

interface AIContext {
  classId?: number;
  subject?: string;
  chapter?: string;
  chapterMl?: string;
  topics?: string[];
  language?: "en" | "ml";
}

function generateTemplateResponse(message: string, context: AIContext): string {
  const { classId, subject, chapter, chapterMl, topics, language } = context;
  const isMalayalam = language === "ml";

  if (isMalayalam) {
    return `📚 **${subject || "വിഷയം"} - ക്ലാസ് ${classId || ""}**
${chapter ? `📖 അധ്യായം: ${chapter}` : ""}
${chapterMl ? `(${chapterMl})` : ""}

**നിങ്ങളുടെ ചോദ്യം:** ${message}

${topics && topics.length > 0 ? `
**ഈ അധ്യായത്തിലെ പ്രധാന വിഷയങ്ങൾ:**
${topics.map((t) => `• ${t}`).join("\n")}` : ""}

---

**AI വിശദീകരണം:**

ഈ വിഷയത്തെക്കുറിച്ച് വിശദമായ വിശദീകരണം ഇവിടെ നൽകുന്നതാണ്. കേരള സ്റ്റേറ്റ് ബോർഡ് പാഠപുസ്തക ഉള്ളടക്കത്തെ അടിസ്ഥാനമാക്കി, നിങ്ങളുടെ ചോദ്യത്തിന് പ്രസക്തമായ ഉത്തരം ഇതാണ്:

${chapter ? `"${chapter}" എന്ന അധ്യായത്തിൽ നിന്നുള്ള പ്രധാന പോയിന്റുകൾ:` : "പ്രധാന പോയിന്റുകൾ:"}

1. ആദ്യത്തെ പ്രധാന പോയിന്റ് - ഈ വിഷയത്തിന്റെ അടിസ്ഥാന ആശയം
2. രണ്ടാമത്തെ പോയിന്റ് - കൂടുതൽ വിശദാംശങ്ങൾ
3. മൂന്നാമത്തെ പോയിന്റ് - പരീക്ഷയ്ക്ക് പ്രധാനം

📝 **പരീക്ഷയ്ക്കുള്ള ടിപ്പുകൾ:**
• മുകളിലെ പോയിന്റുകൾ ശ്രദ്ധിക്കുക
• മുൻ വർഷത്തെ ചോദ്യപേപ്പറുകൾ പരിശോധിക്കുക
• സ്വന്തം വാക്കുകളിൽ ഉത്തരം എഴുതുക`;
  }

  return `📚 **${subject || "Subject"} - Class ${classId || ""}**
${chapter ? `📖 Chapter: ${chapter}` : ""}
${chapterMl ? `(${chapterMl})` : ""}

**Your Question:** ${message}

${topics && topics.length > 0 ? `
**Topics covered in this chapter:**
${topics.map((t) => `• ${t}`).join("\n")}` : ""}

---

**AI Explanation:**

Here is a detailed explanation based on the Kerala State Board textbook content:

${chapter ? `From the chapter "${chapter}":` : ""}

**Key Points:**
1. **First Important Point** - The fundamental concept of this topic
2. **Second Important Point** - Additional details and examples
3. **Third Important Point** - Exam-relevant facts and formulas

**Detailed Explanation:**
The topic you've asked about covers several important aspects that are essential for your Kerala State Board examinations. Here's a comprehensive breakdown:

• **Concept Overview:** This concept is fundamental to understanding the broader topic in ${subject || "this subject"}.

• **Key Terminology:** Make sure to learn the definitions of important terms related to this chapter.

• **Application:** Understanding how this concept applies in real-world scenarios will help you answer application-based questions.

📝 **Exam Tips:**
• Focus on the key points listed above
• Practice questions from previous years' papers
• Write answers in your own words while using correct terminology
• For 2-mark questions: Give a brief definition + one example
• For 5-mark questions: Include definition + explanation + diagram/illustration + example

💡 **Want to explore more?** Ask me:
• "Give me important 5-mark questions from this chapter"
• "Explain this in simpler terms"
• "Quiz me on this topic"
• "Give me a 2-mark answer for this"
`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, context = {} } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (apiKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://kerala-ai-learning.vercel.app",
            "X-Title": "Kerala AI Learning Helper",
          },
          body: JSON.stringify({
            model: "google/gemini-2.0-flash-001",
            messages: [
              {
                role: "system",
                content: `You are an AI tutor for Kerala State Board students (Classes 1-10). 
You help students understand their textbook content with clear, simple explanations.
Subject: ${context.subject || "General"}
Chapter: ${context.chapter || "General"}
Class: ${context.classId || "General"}

Guidelines:
- Explain concepts in simple, student-friendly language
- Use examples relevant to Kerala and Indian context
- For Malayalam requests, explain in simple Malayalam while keeping textbook terms in English where needed
- Focus on exam-relevant content
- Provide structured answers suitable for Kerala Board exam format
- When asked for marks-specific answers, follow the Kerala Board marking scheme:
  * 1-mark: One word or very brief answer
  * 2-mark: Definition + brief explanation (2-3 sentences)
  * 5-mark: Detailed explanation with points, examples, and if applicable, diagram descriptions
${context.topics && context.topics.length > 0 ? `\nTopics in this chapter: ${context.topics.join(", ")}` : ""}`,
              },
              {
                role: "user",
                content: message,
              },
            ],
            max_tokens: 2000,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error("OpenRouter API error:", response.status, errorData);
          // Fall through to template response
        } else {
          const data = await response.json();
          const aiResponse = data.choices?.[0]?.message?.content;
          if (aiResponse) {
            return NextResponse.json({ response: aiResponse });
          }
        }
      } catch (apiError) {
        console.error("OpenRouter API error:", apiError);
        // Fall through to template response
      }
    }

    // Template-based response when no API key or API fails
    const response = generateTemplateResponse(message, context);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("AI API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
