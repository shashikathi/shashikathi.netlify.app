"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-off-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                >
                    About
                    <br />
                    Me
                </motion.h2>

                <div className="space-y-8 text-lg md:text-xl text-dark-gray leading-relaxed md:col-span-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        I am a Data Analyst skilled in Python, SQL, and Power BI with experience in data cleaning, predictive modeling, and dashboard automation.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        I hold a strong foundation in cloud-based ML workflows (Oracle Cloud Certified) with exposure to AI-driven analytics, LLM integration, and GCP/Azure environments.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        My focus is on translating raw datasets into actionable business insights to enhance efficiency, forecasting accuracy, and decision-making.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-1 flex justify-center md:justify-end"
                >
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="shashikathi" data-version="v1">
                        <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shashikathi?trk=profile-badge">Shashi Kathi</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
