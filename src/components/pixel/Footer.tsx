"use client";

import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a href="#hero" className="footer-brand"><span className="brand-monogram">SK</span><span>Shashi Kathi</span></a>
        <p>Operations, analytics & thoughtful process improvement.</p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/shashikathi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="https://github.com/shashikathi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="#hero" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Shashi Kathi</span>
      </div>
    </footer>
  );
}
