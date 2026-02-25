"use client";

import { motion } from "framer-motion";

const techs = [
  "Python",
  "Next.js",
  "React",
  "PyTorch",
  "Node.js",
  "Docker",
  "Tailwind",
  "Git",
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-slate-900 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-12">Technology Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
           className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl hover:border-blue-500 transition"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}