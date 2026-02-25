"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md text-white py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between px-6">
        <h1 className="font-bold text-lg">Prashanth Ghodke</h1>

        <div className="space-x-6">
          <a href="#tech" className="hover:text-blue-400 transition">
            Tech
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="https://github.com/prashantghodke9426-cmyk" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/prashant-ghodke-513857297/" target="_blank">LinkedIn</a>
          <a href="/resume.pdf"download className="hover:text-purple-400 transition"> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}