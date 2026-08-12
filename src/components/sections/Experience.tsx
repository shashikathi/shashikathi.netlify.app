"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Experience */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Experience
                    </motion.h2>
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h3 className="text-2xl font-bold text-dark-gray">Operations Associate</h3>
                            <p className="text-lg text-accent font-medium mb-2">Bhanzu</p>
                            <p className="text-sm text-light-gray mb-4">Apr 2026 – Present</p>
                            <ul className="list-disc list-inside space-y-2 text-dark-gray/80">
                                <li>Spearheading data-driven operational strategies, bridging the gap between business objectives and cross-functional execution pipelines.</li>
                                <li>Monitoring and analyzing key operational metrics to streamline workflows, optimize resource allocation, and enhance reporting efficiency.</li>
                                <li>Collaborating across teams to identify process bottlenecks, implementing automated solutions to maintain high data hygiene and accelerate task delivery.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h3 className="text-2xl font-bold text-dark-gray">Data Science Research Intern</h3>
                            <p className="text-lg text-accent font-medium mb-2">TransOrg Analytics | Remote</p>
                            <p className="text-sm text-light-gray mb-4">Jan 2025 – June 2025</p>
                            <ul className="list-disc list-inside space-y-2 text-dark-gray/80">
                                <li>Built scalable Python/SQL ETL pipelines processing 10,000+ records, accelerating operational reporting speed by 30%.</li>
                                <li>Engineered Machine Learning models for churn prediction and fraud detection, delivering actionable predictive insights.</li>
                                <li>Executed comprehensive Exploratory Data Analysis (EDA) and data cleaning, enhancing data quality for downstream processes.</li>
                                <li>Designed dynamic performance dashboards using Power BI and Looker Studio to visualize KPIs for stakeholder decision-making.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h3 className="text-2xl font-bold text-dark-gray">Senior Coordinator</h3>
                            <p className="text-lg text-accent font-medium mb-2">OASIS Student Organization | Punjab, India</p>
                            <p className="text-sm text-light-gray mb-4">Apr 2023 – Mar 2024</p>
                            <ul className="list-disc list-inside space-y-2 text-dark-gray/80">
                                <li>Directed a cross-functional team of 15 members to successfully execute 10+ events for 500+ participants, achieving 100% on-time delivery.</li>
                                <li>Managed vendor coordination, logistics, and internal protocols, improving overall operational efficiency by 25%.</li>
                                <li>Led team onboarding and induction, accelerating ramp-up time via standardized role assignments and Standard Operating Procedures (SOPs).</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Education
                    </motion.h2>
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h3 className="text-2xl font-bold text-dark-gray">Bachelor of Technology (Honors)</h3>
                            <p className="text-lg text-accent font-medium mb-2">Lovely Professional University, Punjab</p>
                            <p className="text-sm text-light-gray mb-4">Aug 2021 – Aug 2025</p>
                            <p className="text-dark-gray/80">Computer Science, Data Science & Data Engineering</p>
                            <p className="text-sm text-light-gray mt-2">Awarded 50% merit scholarship (AIR under 500)</p>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Certifications
                    </motion.h2>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "McKinsey Forward Program | McKinsey & Company",
                            "Oracle Cloud Infrastructure 2025 Data Science Professional | Oracle",
                            "Looker Studio Certification | Google",
                            "Google Cloud: Introduction to Data Analytics | Google",
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-off-white rounded-xl"
                            >
                                <p className="font-medium text-dark-gray">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
