import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import ToolsMarquee from "@/components/sections/ToolsMarquee";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function PixelPortfolio() {
  return (
    <main className="pixel-theme">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Stats />
      <ToolsMarquee />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
