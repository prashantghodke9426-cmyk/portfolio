"use client";
import { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const generateResponse = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("skills")) {
      return "Prashanth specializes in Machine Learning, Generative AI, Next.js, and scalable full-stack systems.";
    } else if (q.includes("projects")) {
      return "He has built a Student Prediction ML system, a secure Password Strength Checker, and this AI-powered Portfolio.";
    } else if (q.includes("experience")) {
      return "He focuses on building production-ready AI systems with clean architecture and real-world deployment experience.";
    } else if (q.includes("ai")) {
      return "His core interest lies in Generative AI, multi-agent systems, and LLM-based applications.";
    } else {
      return "I’m an AI assistant trained to answer questions about Prashanth’s portfolio. Try asking about skills, projects, or experience.";
    }
  };

  const handleAsk = () => {
    if (!input.trim()) return;

    const botReply = generateResponse(input);

    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: botReply },
    ]);

    setInput("");
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ask My AI About Me 🤖
      </h2>

      <div className="max-w-xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10">

        <div className="h-64 overflow-y-auto mb-4 space-y-4 text-left">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl ${
                msg.role === "user"
                  ? "bg-purple-500/20 text-right"
                  : "bg-blue-500/20 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20"
          />

          <button
            onClick={handleAsk}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            Ask
          </button>
        </div>
      </div>
    </section>
  );
}