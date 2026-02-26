"use client";
import { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const question = input.toLowerCase();

    if (question.includes("skills")) {
      setResponse("Prashanth specializes in Machine Learning, Generative AI, Next.js, and scalable full-stack systems.");
    } else if (question.includes("projects")) {
      setResponse("He has built a Student Prediction ML system, a secure Password Strength Checker, and Portfolio.");
    } else if (question.includes("experience")) {
      setResponse("He focuses on building production-ready AI systems with clean architecture and deployment experience.");
    } else {
      setResponse("I’m an AI-powered assistant trained to answer questions about Prashanth's portfolio.");
    }
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ask My AI About Me 🤖
      </h2>

      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 mb-4"
        />

        <button
          onClick={handleAsk}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
        >
          Ask
        </button>

        {response && (
          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/20">
            {response}
          </div>
        )}
      </div>
    </section>
  );
}