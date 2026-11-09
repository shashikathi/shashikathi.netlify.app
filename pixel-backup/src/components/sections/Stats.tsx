"use client";

import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  { value: "45–60 → ~15 min", label: "Recurring report preparation", note: "Automated a trainer-capacity and hiring-planning report." },
  { value: "10,000+", label: "Customer records analyzed", note: "Churn prediction workflow with 85% model accuracy." },
  { value: "15 people", label: "Cross-functional team", note: "Coordinated delivery across 10+ OASIS initiatives." },
];

export default function Stats() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-shell">
        <div className="highlights-heading">
          <div className="section-eyebrow"><span>02 / HIGHLIGHTS</span><span className="eyebrow-rule" aria-hidden="true" /></div>
          <h2 id="highlights-title">Useful work.<br /><em>Measurable change.</em></h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <motion.article
              className="highlight-card"
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.08 }}
            >
              <span className="highlight-number">0{index + 1}</span>
              <p className="highlight-value">{item.value}</p>
              <h3>{item.label}</h3>
              <p className="highlight-note">{item.note}</p>
            </motion.article>
          ))}
        </div>
        <p className="highlight-footnote">Selected examples from my résumé and project work.</p>
      </div>
    </section>
  );
}
