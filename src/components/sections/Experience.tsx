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
                            <h3 className="text-2xl font-bold text-dark-gray">Operations Associate Analyst</h3>
                            <p className="text-lg text-accent font-medium mb-2">Bhanzu (EdTech)</p>
                            <p className="text-sm text-light-gray mb-4">Apr 2026 – Present</p>
                            <ul className="list-disc list-inside space-y-2 text-dark-gray/80">
                                <li>Prepare recurring and ad hoc Excel reports for KPIs, case status, pending actions, and execution priorities.</li>
                                <li>Built a Salesforce Lightning view for turnaround targets, case ownership, resolution time, and open workload.</li>
                                <li>Automated a trainer-capacity and hiring-planning report, reducing preparation from 45–60 minutes to about 15.</li>
                                <li>Support staffing decisions with availability and utilization analysis, and document workflows through SOPs.</li>
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
                                <li>Contributed to data workflows for transaction analysis and recurring operational reporting.</li>
                                <li>Standardized KPI definitions and added structured data-quality checks.</li>
                                <li>Developed a customer-churn workflow and translated findings into stakeholder-facing dashboards.</li>
                                <li>Built fraud-monitoring visualizations to support anomaly review and operational decisions.</li>
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
                                <li>Coordinated a 15-member team across 10+ initiatives using delegated tasks and milestone tracking.</li>
                                <li>Managed event logistics, vendor coordination, and protocols for large student programs.</li>
                                <li>Introduced SOPs and resource-allocation practices that contributed to a reported 25% improvement in team efficiency.</li>
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
                            <p className="text-sm text-light-gray mb-4">2021 – 2025</p>
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
                            "AI Fluency Framework & Foundations | Anthropic | 2026",
                            "McKinsey Forward Program | McKinsey & Company | 2025",
                            "Introduction to Data Science | Cisco | 2025",
                            "Oracle Cloud Infrastructure Data Science Professional | 2025",
                            "Introduction to Data Analytics | Google Cloud | 2025",
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
