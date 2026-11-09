import Header from "@/components/pixel/Header";
import Footer from "@/components/pixel/Footer";
import Hero from "@/components/pixel/Hero";
import About from "@/components/pixel/About";
import Stats from "@/components/pixel/Stats";
import ToolsMarquee from "@/components/pixel/ToolsMarquee";
import Experience from "@/components/pixel/Experience";
import Projects from "@/components/pixel/Projects";
import Services from "@/components/pixel/Services";
import Contact from "@/components/pixel/Contact";
import AnimatedBackground from "@/components/pixel/AnimatedBackground";
import "./pixel.css";

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
