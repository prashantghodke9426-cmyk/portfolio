"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning (PyTorch)", level: 80 },
  { name: "Generative AI / LLMs", level: 75 },
  { name: "Full Stack Development", level: 85 },
];

export default function Skills() {
  return (
    <section className="py-24 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-12">AI Skills</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}