"use client";

import { motion } from "framer-motion";

const skills = [
    { id: "01.", title: "Languages & Libraries", description: "Python (Pandas, NumPy, Scikit-learn), SQL, R", icon: "💻" },
    { id: "02.", title: "Data Visualization", description: "Power BI, Tableau, Looker Studio, Matplotlib, Seaborn", icon: "📊" },
    { id: "03.", title: "Cloud & AI", description: "Azure AI, GCP Vertex AI, Oracle Cloud, OpenAI APIs", icon: "☁️" },
    { id: "04.", title: "Data Engineering", description: "ETL Pipelines, Data Cleaning, Predictive Modeling", icon: "⚙️" },
];

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #2a3a4a 1px, transparent 1px), linear-gradient(to bottom, #2a3a4a 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold font-heading uppercase mb-16 text-dark-gray"
                >
                    Technical Skills
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative p-6 border border-gray-100 rounded-2xl hover:border-accent hover:shadow-2xl transition-all duration-500 cursor-default bg-white"
                        >
                            {/* Animated gradient on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl mb-4"
                                >
                                    {skill.icon}
                                </motion.div>
                                <span className="block text-sm font-medium text-light-gray mb-4">{skill.id}</span>
                                <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-accent transition-colors">
                                    {skill.title}
                                </h3>
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    whileInView={{ height: "auto", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="text-sm text-light-gray group-hover:text-dark-gray transition-colors duration-300"
                                >
                                    {skill.description}
                                </motion.p>
                            </div>

                            {/* Corner accent */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
