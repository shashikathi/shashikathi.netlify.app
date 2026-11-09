"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  {
    date: "APR 2026 — NOW",
    company: "Bhanzu",
    location: "Bengaluru, India · EdTech",
    title: "Operations Associate Analyst",
    points: [
      "Prepare recurring and ad hoc Excel reports for KPIs, case status, pending actions, and execution priorities.",
      "Built a Salesforce Lightning view of turnaround targets, case ownership, resolution time, and open workloads.",
      "Automated a trainer-capacity and hiring-planning report, cutting preparation from 45–60 minutes to about 15.",
      "Support staffing decisions with trainer availability and utilization analysis, and document workflows through SOPs.",
    ],
  },
  {
    date: "JAN 2025 — JUN 2025",
    company: "TransOrg Analytics",
    location: "Remote",
    title: "Data Science Research Intern",
    points: [
      "Contributed to data workflows for transaction analysis and recurring operational reporting.",
      "Standardized KPI definitions and added structured data-quality checks.",
      "Developed a customer-churn prediction workflow and translated model findings into stakeholder-facing dashboards.",
      "Built fraud-monitoring visualizations to support anomaly review and operational decision-making.",
    ],
  },
  {
    date: "APR 2023 — MAR 2024",
    company: "OASIS Student Organization",
    location: "Punjab, India",
    title: "Senior Coordinator",
    points: [
      "Coordinated a 15-member team across 10+ initiatives, using delegated tasks and milestone tracking.",
      "Managed event logistics, vendor coordination, and protocols for large student programs.",
      "Introduced SOPs and resource-allocation practices that contributed to a reported 25% improvement in team efficiency.",
    ],
  },
];

const certifications = [
  "AI Fluency Framework & Foundations · Anthropic · 2026",
  "McKinsey Forward Program · McKinsey & Company · 2025",
  "Introduction to Data Science · Cisco · 2025",
  "Oracle Cloud Infrastructure Data Science Professional · 2025",
  "Introduction to Data Analytics · Google Cloud · 2025",
];

export default function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="content-section experience-section">
      <div className="section-shell">
        <div className="section-eyebrow"><span>04 / EXPERIENCE</span><span className="eyebrow-rule" aria-hidden="true" /><span>THE WORK SO FAR</span></div>
        <div className="experience-heading">
          <h2 className="section-display">Built through<br /><span>doing the work.</span></h2>
          <p>Operations, data, and coordination roles — with a focus on the systems and details that keep teams moving.</p>
        </div>

        <div className="experience-list">
          {roles.map((role, index) => (
            <motion.article
              className="experience-entry"
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.06 }}
            >
              <div className="experience-date"><span className="timeline-dot" />{role.date}</div>
              <div className="experience-card">
                <div className="experience-card-heading">
                  <div>
                    <p className="experience-company">{role.company}</p>
                    <h3>{role.title}</h3>
                    <p className="experience-location">{role.location}</p>
                  </div>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
                <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="education-row">
          <div className="education-main">
            <div className="section-eyebrow"><span>EDUCATION</span></div>
            <h3>Bachelor of Technology (Honors)</h3>
            <p>Computer Science Engineering · Data Science & Data Engineering</p>
            <p>Lovely Professional University, Punjab <span>·</span> 2021–2025</p>
            <span className="education-note">50% merit scholarship</span>
          </div>
          <div className="certifications-block">
            <div className="section-eyebrow"><span>CERTIFICATIONS</span></div>
            <ul>{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
