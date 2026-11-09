"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touchRevealed, setTouchRevealed] = useState(false);
  const showPhoto = isHovered || isFocused || touchRevealed;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-section relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container-max relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <motion.div
          className="hero-copy max-w-2xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-kicker">
            <span className="hero-kicker-mark" aria-hidden="true"><Sparkles size={14} /></span>
            OPERATIONS <span>·</span> ANALYTICS <span>·</span> PROCESS IMPROVEMENT
          </p>

          <h1 id="hero-title" className="hero-title">
            Hi, I&apos;m
            <span className="hero-name">Preetham<span className="hero-period">.</span></span>
          </h1>

          <p className="hero-intro">
            I make business operations smarter with <em>data, automation</em> and analytics.
          </p>
          <p className="hero-supporting-copy">
            Operations Associate Analyst at Bhanzu, building clearer reporting and more reliable workflows.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore my work <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a href="#contact" className="hero-button hero-button-secondary">
              Contact me
            </a>
            <a href="https://drive.google.com/file/d/16w-7QXuVxu5igqtdtB2SeTt_WsK3DOPE/view?usp=sharing" target="_blank" rel="noreferrer" className="hero-button hero-button-secondary">
              Download résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-footnote">
            <span className="hero-status-dot" aria-hidden="true" />
            <span>Based in India</span>
            <span className="hero-footnote-divider" aria-hidden="true">/</span>
            <a href="#contact">Open to opportunities</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait-column"
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-portrait-frame">
            <button
              type="button"
              className="hero-portrait"
              aria-label={touchRevealed ? "Show the pixel-art portrait" : "Reveal the original portrait photo"}
              aria-pressed={touchRevealed}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") setIsHovered(true);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== "touch") setIsHovered(false);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onClick={() => {
                if (window.matchMedia("(hover: none)").matches) {
                  setTouchRevealed((revealed) => !revealed);
                }
              }}
            >
              <Image
                src="/preetham-portrait-graphic.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 50vw"
                className="hero-portrait-image"
              />
              <motion.div
                className="hero-photo-layer"
                animate={{ opacity: showPhoto ? 1 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                <Image
                  src="/preetham-portrait.webp"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1023px) 92vw, 50vw"
                  className="hero-portrait-image"
                />
              </motion.div>

              <span className="portrait-index" aria-hidden="true">PORTRAIT <b>01</b></span>
              <span className="portrait-instruction" aria-hidden="true">
                {showPhoto ? "ORIGINAL PHOTO" : "HOVER OR TAP TO REVEAL"}
              </span>
            </button>
          </div>
          <div className="hero-image-caption" aria-hidden="true">
            <span>Between the work</span>
            <span className="caption-line" />
            <span>and the world outside it</span>
          </div>
        </motion.div>
      </div>

      <a className="hero-scroll-cue" href="#about" aria-label="Scroll to the about section">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </section>
  );
}
