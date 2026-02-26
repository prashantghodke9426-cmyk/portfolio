export default function RecruiterCTA() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Open to AI / ML Internships – 2026
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-gray-400">
        Passionate about building scalable AI systems, multi-agent architectures, 
        and production-ready ML applications. 
        Actively seeking opportunities to contribute to high-impact engineering teams.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:prashantghodke9426@gmail.com"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
        >
          Contact Me
        </a>

        <a
          href="/Prashanth_Ghodke_AI_Engineer_Resume.pdf"
          download
          className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/20 transition"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/prashant-ghodke-513857297/"
          target="_blank"
          className="px-6 py-3 rounded-2xl border border-blue-500 hover:bg-blue-500/20 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}