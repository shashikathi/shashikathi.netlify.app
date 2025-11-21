"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Financial Fraud Detection System",
        category: "Machine Learning · Dashboard",
        description: "End-to-end ML pipeline with interactive dashboard to detect financial fraud in real-time. Trained on real transaction data with LightGBM, featuring explainable AI and production-ready Streamlit deployment.",
        gradient: "bg-gradient-to-br from-emerald-50 to-teal-100",
        image: "/project-fraud.png",
        tech: ["Python", "LightGBM", "Plotly", "Streamlit"],
        metrics: [
            { label: "Accuracy", value: "98.4%" },
            { label: "Recall", value: "94.7%" },
            { label: "ROC-AUC", value: "0.992" },
        ],
        highlights: [
            "High recall focus — missing fraud costs millions",
            "Interactive animated Plotly dashboards",
            "Explainable AI with feature importance insights",
        ],
        link: "https://github.com/shashikathi/financial-fraud-detection-ml"
    },
    {
        id: 2,
        title: "Customer Churn Prediction",
        category: "Predictive Analytics · XGBoost",
        description: "ML pipeline predicting telecom customer churn with class balancing using SMOTE. Features live deployment on Hugging Face Spaces for real-world business action.",
        gradient: "bg-gradient-to-br from-purple-50 to-indigo-100",
        image: "/project-churn.png",
        tech: ["Python", "XGBoost", "SMOTE", "Hugging Face"],
        metrics: [
            { label: "Accuracy", value: "85%+" },
            { label: "Model", value: "XGBoost" },
            { label: "Status", value: "Live Demo" },
        ],
        highlights: [
            "Live deployment on Hugging Face Spaces",
            "Class balancing with SMOTE technique",
            "Comprehensive visualizations for business insights",
        ],
        link: "https://github.com/shashikathi/Customer-Churn-Analysis-Prediction",
        liveDemo: "https://huggingface.co/spaces/shashikathi56/customer-churn-predictor"
    },
    {
        id: 3,
        title: "Wine Quality Prediction",
        category: "Classification · Feature Engineering",
        description: "Predicts wine quality based on physicochemical properties using Random Forest and Gradient Boosting. Identifies key factors affecting quality with comprehensive statistical analysis.",
        gradient: "bg-gradient-to-br from-rose-50 to-orange-100",
        image: "/project-wine.png",
        tech: ["Python", "Random Forest", "Scikit-learn", "Seaborn"],
        metrics: [
            { label: "Accuracy", value: "77.1%" },
            { label: "Model", value: "Random Forest" },
            { label: "Features", value: "11 Chemical" },
        ],
        highlights: [
            "Alcohol content & volatile acidity as key predictors",
            "Best performance on medium-quality wines (5-6)",
            "Statistical correlation analysis with visualizations",
        ],
        link: "https://github.com/shashikathi/Wine-Quality-Prediction"
    },
];

export default function Projects() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase text-dark-gray mb-4">
                        Selected Work
                    </h2>
                    <p className="text-lg text-light-gray">Real-world projects with measurable impact</p>
                </motion.div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                                {/* Left side - Visual with actual project image */}
                                <div className="relative">
                                    <Link href={project.link} target="_blank">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full aspect-[4/3] rounded-2xl relative shadow-md group-hover:shadow-xl transition-shadow duration-500 overflow-hidden bg-gray-100"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />

                                            {/* Metrics overlay */}
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/20 to-transparent">
                                                <div className="grid grid-cols-3 gap-3">
                                                    {project.metrics.map((metric, i) => (
                                                        <motion.div
                                                            key={metric.label}
                                                            initial={{ y: 20, opacity: 0 }}
                                                            whileInView={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: index * 0.2 + i * 0.1 }}
                                                            className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center"
                                                        >
                                                            <div className="text-lg md:text-xl font-bold text-dark-gray">{metric.value}</div>
                                                            <div className="text-xs text-light-gray">{metric.label}</div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Arrow icon */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileHover={{ opacity: 1, scale: 1, rotate: 45 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full"
                                            >
                                                <ArrowUpRight className="w-5 h-5 text-dark-gray" />
                                            </motion.div>
                                        </motion.div>
                                    </Link>
                                </div>

                                {/* Right side - Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.2 }}
                                        >
                                            <span className="text-sm font-medium text-accent uppercase tracking-wide">{project.category}</span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-gray mt-2 mb-4 group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-base text-light-gray leading-relaxed mb-6">
                                                {project.description}
                                            </p>
                                        </motion.div>

                                        {/* Highlights */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.3 }}
                                            className="space-y-2 mb-6"
                                        >
                                            {project.highlights.map((highlight, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-accent mt-1">✓</span>
                                                    <span className="text-sm text-dark-gray">{highlight}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Tech stack and links */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-dark-gray rounded-full hover:bg-accent hover:text-white transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm font-medium text-dark-gray hover:text-accent transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                View Code
                                            </Link>
                                            {project.liveDemo && (
                                                <Link
                                                    href={project.liveDemo}
                                                    target="_blank"
                                                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-dark-gray transition-colors"
                                                >
                                                    <ArrowUpRight className="w-4 h-4" />
                                                    Live Demo
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
