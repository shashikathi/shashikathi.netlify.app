"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, GitBranch, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    eyebrow: "PEOPLE ANALYTICS · DASHBOARD",
    title: "IBM HR Analytics",
    subtitle: "Employee attrition intelligence",
    image: "/project-hr-dashboard.webp",
    imageAlt: "Power BI employee attrition dashboard from the IBM HR analytics project",
    problem: "Understand where attrition is concentrated and what patterns are worth investigating.",
    approach: "An interactive Power BI dashboard examining 1,470 employees across 35 HR variables, with filters for department, age, gender, and job role.",
    outcome: "Surfaced 10 attrition drivers and estimated annual replacement costs to frame retention recommendations.",
    tags: ["Power BI", "Excel", "Workforce analytics"],
    repo: "https://github.com/shashikathi/IBM-HR-Analytics-Employee-Attrition-Dashboard",
  },
  {
    number: "02",
    eyebrow: "PREDICTIVE ANALYTICS · MACHINE LEARNING",
    title: "Customer churn prediction",
    subtitle: "A workflow for earlier intervention",
    image: "/project-churn-feature-importance.webp",
    imageAlt: "Feature importance chart from the customer churn prediction project",
    problem: "Identify telecom customers who may be at risk of leaving.",
    approach: "Cleaned and engineered customer data, applied SMOTE balancing, and trained an XGBoost model with visual analysis.",
    outcome: "The project reports over 85% model accuracy and includes a browser-based demo.",
    tags: ["Python", "XGBoost", "SMOTE", "Plotly"],
    repo: "https://github.com/shashikathi/Customer-Churn-Analysis-Prediction",
    demo: "https://huggingface.co/spaces/shashikathi56/customer-churn-predictor",
  },
  {
    number: "03",
    eyebrow: "FINANCIAL ANALYTICS · EXPLAINABLE ML",
    title: "Financial fraud detection",
    subtitle: "Signals for faster transaction review",
    visual: "fraud",
    imageAlt: "Process diagram showing transaction data flowing through feature engineering and fraud review",
    problem: "Surface suspicious transaction patterns for focused review.",
    approach: "Built a data-cleaning and feature-engineering workflow with a LightGBM classifier tuned for high recall.",
    outcome: "Paired model explainability with interactive Plotly views in a Streamlit dashboard.",
    tags: ["Python", "LightGBM", "Plotly", "Streamlit"],
    repo: "https://github.com/shashikathi/financial-fraud-detection-ml",
    demo: "https://financial-fraud-detection-ml.streamlit.app/",
  },
];

function FraudVisual() {
  return (
    <div className="fraud-visual" role="img" aria-label="Transaction data flows through data preparation, a LightGBM model, and an interactive review dashboard">
      <div className="fraud-visual-heading"><span>TRANSACTION INTELLIGENCE</span><span className="visual-live-dot" /> <span>MODEL WORKFLOW</span></div>
      <div className="fraud-flow">
        <div className="fraud-node"><span className="fraud-node-icon">01</span><b>Transaction<br />data</b><small>Clean & prepare</small></div>
        <span className="fraud-connector" aria-hidden="true" />
        <div className="fraud-node fraud-node-active"><span className="fraud-node-icon">02</span><b>Feature<br />engineering</b><small>Balance · time</small></div>
        <span className="fraud-connector" aria-hidden="true" />
        <div className="fraud-node"><span className="fraud-node-icon">03</span><b>LightGBM<br />classifier</b><small>High-recall focus</small></div>
      </div>
      <div className="fraud-visual-footer"><span><GitBranch size={14} aria-hidden="true" /> Explainable features</span><span><Workflow size={14} aria-hidden="true" /> Plotly dashboard</span></div>
      <div className="fraud-signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

export default function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="content-section projects-section">
      <div className="section-shell">
        <div className="section-eyebrow"><span>05 / SELECTED WORK</span><span className="eyebrow-rule" aria-hidden="true" /><span>ANALYSIS INTO ACTION</span></div>
        <div className="projects-heading">
          <h2 className="section-display">A few things<br /><span>I&apos;ve built.</span></h2>
          <p>Analytics and workflow projects that turn messy questions into something a team can explore, understand, and use.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-feature project-feature-${index + 1}`}
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: reducedMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-visual-wrap">
                <div className="project-visual-topline"><span>{project.eyebrow}</span><span>{project.number} / 03</span></div>
                <div className="project-visual">
                  {project.image ? (
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 767px) 94vw, 52vw" className="project-image" />
                  ) : <FraudVisual />}
                </div>
                <a className="project-open" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>

              <div className="project-details">
                <span className="project-number">{project.number}</span>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <div className="project-story">
                  <div><span>QUESTION</span><p>{project.problem}</p></div>
                  <div><span>APPROACH</span><p>{project.approach}</p></div>
                  <div><span>RESULT</span><p>{project.outcome}</p></div>
                </div>
                <ul className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={15} aria-hidden="true" /> View code</a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} aria-hidden="true" /> Live demo</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
