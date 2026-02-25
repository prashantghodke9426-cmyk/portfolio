"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Student-Performance-system-ML",
    desc: "Autonomous ML system with planning, memory and tool usage.",
    link: "https://github.com/prashantghodke9426-cmyk/Student-Performance-system-ML.git"
  },
  {
    title: "Password-Checker",
    desc: "Secure cloud-based password management system.",
    link: "https://github.com/prashantghodke9426-cmyk/Password-Checker.git"
  },
  {
    title: "portfolio",
    desc: "AI-focused personal portfolio showcasing ML projects, scalable systems, and modern full-stack development. 🚀.",
    link: "https://github.com/prashantghodke9426-cmyk/portfolio.git"
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-800 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400">
              {project.desc}
            </p>
            <a
  href={project.link}
  target="_blank"
  className="inline-block mt-4 text-blue-400 hover:underline"
>
  View on GitHub →
</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}