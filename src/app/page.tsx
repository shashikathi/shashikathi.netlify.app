import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import ToolsMarquee from "@/components/sections/ToolsMarquee";
import Contact from "@/components/sections/Contact";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Stats />
      <About />
      <ToolsMarquee />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
