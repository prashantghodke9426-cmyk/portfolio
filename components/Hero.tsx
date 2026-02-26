"use client";
import { motion } from "framer-motion";
<motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
>
  Prashanth Ghodke | Generative AI • Machine Learning • Full Stack Development
</motion.h1>
export default function Hero() {
  return (
    <section className="text-center pt-32 pb-32 bg-slate-900 text-white">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
       Prashanth Ghodke | Generative AI • Machine Learning • Scalable Web Systems
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        AI-Powered Solutions | Scalable Architecture | Enterprise Development
      </p>

      <div className="mt-8">
        <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
            Projects
          </a>
        <a
        href="/Prashanth_Ghodke_cv.pdf"download className="ml-4 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"> Download Resume
        </a>
      </div>
    </section>
  );
}