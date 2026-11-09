"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Operations & process",
    description: "Turning everyday work into clear, trackable workflows.",
    skills: ["KPI tracking", "Root-cause analysis", "SOP development", "Issue investigation", "Resource planning", "Cross-functional coordination"],
  },
  {
    number: "02",
    title: "Reporting & visualization",
    description: "Making useful reporting from structured, reliable data.",
    skills: ["Excel", "PivotTables", "VLOOKUP", "Tableau", "Power BI", "Looker Studio", "Salesforce Lightning", "Plotly"],
  },
  {
    number: "03",
    title: "Programming & analytics",
    description: "Using analysis and modeling to explore operational questions.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "Streamlit"],
  },
  {
    number: "04",
    title: "Platforms & workflow",
    description: "Tools used across collaboration, automation, and cloud exposure.",
    skills: ["Google Sheets", "MS Office", "Git", "AI-assisted automation", "AWS", "Azure", "Oracle Cloud Infrastructure"],
  },
];

export default function ToolsMarquee() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="content-section skills-section">
      <div className="section-shell">
        <div className="skills-intro">
          <div>
            <div className="section-eyebrow"><span>03 / TOOLKIT</span><span className="eyebrow-rule" aria-hidden="true" /></div>
            <h2 className="section-display">Tools with<br /><span>a purpose.</span></h2>
          </div>
          <p className="skills-intro-copy">A practical mix of operations knowledge, data analysis, reporting, and workflow tools — applied to the problem at hand.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.06 }}
            >
              <div className="skill-card-top"><span>{group.number}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
              <h3>{group.title}</h3>
              <p className="skill-card-description">{group.description}</p>
              <ul className="skill-tags">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
        <p className="skills-note">Cloud platforms and some development tools reflect project experience and technical exposure.</p>
      </div>
    </section>
  );
}
