"use client";

import { Activity, BarChart3, GitBranch, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  { icon: BarChart3, title: "Reporting people can use", description: "KPI views, operational reports, and dashboards that make the next action easier to see." },
  { icon: Activity, title: "Analysis with context", description: "Data checks, trend analysis, and root-cause exploration grounded in the real workflow." },
  { icon: GitBranch, title: "Processes that hold up", description: "Clear SOPs, ownership, and handoffs that help work move consistently between teams." },
  { icon: Workflow, title: "Practical automation", description: "Less repetitive preparation for recurring reports and operational tasks." },
];

export default function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="content-section capability-section">
      <div className="section-shell">
        <div className="capability-heading">
          <div>
            <div className="section-eyebrow"><span>06 / CAPABILITIES</span><span className="eyebrow-rule" aria-hidden="true" /></div>
            <h2 className="section-display">Clarity is<br /><span>the outcome.</span></h2>
          </div>
          <p>From reporting foundations to small workflow fixes, I focus on changes teams can understand and keep using.</p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="capability-card"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : index * 0.07 }}
              >
                <span className="capability-icon"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="capability-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
