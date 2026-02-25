export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">
            Student-Performance-system-ML
          </h3>
          <p>
            Built a Machine Learning model to predict student academic performance using supervised learning techniques. Implemented data preprocessing, model evaluation, and hyperparameter tuning to optimize prediction accuracy and support early academic intervention strategies.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">
            Password-Checker
          </h3>
          <p>
            Developed a secure password strength evaluation system with real-time feedback, entropy-based scoring, and SHA-256 hashing for enhanced data protection. Focused on cybersecurity best practices and user security awareness.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">
            portfolio
          </h3>
          <p>
            A modern AI Engineer portfolio built with Next.js, showcasing Machine Learning projects, Generative AI systems, and full-stack applications. Designed with smooth animations, clean architecture, and recruiter-focused presentation.
          </p>
        </div>

      </div>
    </section>
  );
}