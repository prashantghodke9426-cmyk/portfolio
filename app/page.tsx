import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Achievements from "@/components/Achievements";
import RecruiterCTA from "@/components/RecruiterCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Skills />
      <Learning />
      <Achievements />
      <RecruiterCTA />
    </main>
  );
}