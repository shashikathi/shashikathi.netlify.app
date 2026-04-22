"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
    useEffect(() => {
        // No strict mount animations needed, fully declarative Framer Motion handles it
    }, []);

    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-off-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading uppercase text-dark-gray md:col-span-1 will-change-transform"
                >
                    About Me
                </motion.h2>

                <div className="space-y-8 text-lg md:text-xl text-dark-gray leading-relaxed md:col-span-1 max-w-[650px]">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="will-change-transform"
                    >
                        I am an Operations & Analytics professional who bridges the gap between raw data, people, and strategic decisions. My passion lies in solving complex operational bottlenecks—whether it's optimizing resource allocation or building AI-driven process automation—to drive measurable efficiency and growth.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="will-change-transform"
                    >
                        Beyond just technical skills in Python, SQL, and Power BI, I bring a focus on clarity, accuracy, and impact. I hold a strong foundation in cloud-based ML workflows and experience with AI-driven analytics.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="will-change-transform"
                    >
                        My goal is not just to analyze data, but to translate it into actionable business insights that enhance forecasting, optimize operations, and empower stakeholders to make confident decisions.
                    </motion.p>
                </div>

                <motion.a
                    href="https://in.linkedin.com/in/shashikathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-1 block w-full max-w-sm mx-auto md:ml-auto p-6 rounded-3xl bg-white/50 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group will-change-transform"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                            <img src="/profile.png" alt="Shashi Kathi" className="w-full h-full object-cover object-top" />
                        </div>
                        <div>
                            <h3 className="font-bold text-dark-gray leading-tight">Shashi Kathi</h3>
                            <p className="text-sm text-light-gray mt-1">Operations & Analytics</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm font-semibold text-accent flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            Connect
                        </span>
                        <svg className="w-5 h-5 text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
