"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md text-white py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between px-6">
        <h1 className="font-bold text-lg">Prashanth.dev</h1>

        <div className="space-x-6">
          <a href="#tech" className="hover:text-blue-400 transition">
            Tech
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}