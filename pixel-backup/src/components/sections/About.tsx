"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="content-section about-section">
      <div className="section-shell">
        <div className="section-eyebrow">
          <span>01 / ABOUT</span>
          <span className="eyebrow-rule" aria-hidden="true" />
          <span>THE WAY I WORK</span>
        </div>

        <motion.div
          className="about-layout"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-heading-block">
            <h2 className="section-display about-display">
              Make the work
              <span>make sense.</span>
            </h2>
            <a className="text-link" href="https://linkedin.com/in/shashikathi/" target="_blank" rel="noreferrer">
              More about me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="about-copy-block">
            <p className="about-lead">
              I work where operations and data meet: making information easier to trust, processes easier to follow, and reporting easier to act on.
            </p>
            <p className="about-copy">
              In my current role at Bhanzu, I support day-to-day operations through clear KPI reporting, case visibility, process documentation, and practical automation. I enjoy getting to the root of a problem, then building a simple workflow the team can keep using.
            </p>
            <div className="about-context">
              <div>
                <span className="context-label">CURRENTLY</span>
                <span>Operations Associate Analyst <i>·</i> Bhanzu</span>
              </div>
              <div>
                <span className="context-label">BASED IN</span>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="about-principles" aria-label="Professional focus areas">
          <article className="principle-item">
            <span className="principle-index">01</span>
            <div><h3>Make work visible</h3><p>Operational data, KPI views, and reporting people can use.</p></div>
          </article>
          <article className="principle-item">
            <span className="principle-index">02</span>
            <div><h3>Make processes clearer</h3><p>Root-cause analysis, SOPs, and dependable handoffs.</p></div>
          </article>
          <article className="principle-item">
            <span className="principle-index">03</span>
            <div><h3>Make repeat work lighter</h3><p>Thoughtful automation for recurring operational tasks.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
