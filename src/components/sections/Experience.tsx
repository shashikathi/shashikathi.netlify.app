"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Experience */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Experience
                    </motion.h3>
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h4 className="text-2xl font-bold text-dark-gray">Data Science Research Intern</h4>
                            <p className="text-lg text-accent font-medium mb-2">TransOrg Analytics | Remote</p>
                            <p className="text-sm text-light-gray mb-4">Jan 2025 – June 2025</p>
                            <ul className="list-disc list-inside space-y-2 text-dark-gray/80">
                                <li>Cleaned and validated over 10,000 customer records.</li>
                                <li>Built automated ETL pipelines using Python & SQL (30% faster reporting).</li>
                                <li>Performed EDA to identify outliers and missing values.</li>
                                <li>Developed reusable Python scripts for automation.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Education
                    </motion.h3>
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-100 pl-8"
                        >
                            <h4 className="text-2xl font-bold text-dark-gray">Bachelor of Technology (Honors)</h4>
                            <p className="text-lg text-accent font-medium mb-2">Lovely Professional University, Punjab</p>
                            <p className="text-sm text-light-gray mb-4">Aug 2021 – Aug 2025</p>
                            <p className="text-dark-gray/80">Computer Science, Data Science & Data Engineering</p>
                            <p className="text-sm text-light-gray mt-2">Awarded 50% merit scholarship (AIR under 500)</p>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading uppercase text-dark-gray md:col-span-1"
                    >
                        Certifications
                    </motion.h3>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Oracle Cloud Infrastructure 2025 Data Science Professional",
                            "Google Cloud: Introduction to Data Analytics",
                            "Google: Looker Studio",
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
