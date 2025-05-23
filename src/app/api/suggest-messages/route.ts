import { createGoogleGenerativeAI, google } from "@ai-sdk/google";
import { generateText } from "ai";

const googleApi = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const runtime = "edge";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const result = await generateText({
      model: google("gemini-1.5-pro-latest"),
      prompt: prompt,
    });

    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing the request",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
