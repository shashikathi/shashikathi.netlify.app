"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
    useEffect(() => {
        const initBadge = () => {
            if (typeof window !== 'undefined' && window.IN && typeof window.IN.parse === 'function') {
                window.IN.parse(document);
                const badgeContainer = document.querySelector('.LI-profile-badge');
                if (badgeContainer) window.IN.parse(badgeContainer);
            }
        };

        const checkAndInit = () => {
            if (typeof window !== 'undefined' && window.IN && typeof window.IN.parse === 'function') {
                initBadge();
            } else {
                setTimeout(checkAndInit, 100);
            }
        };

        setTimeout(checkAndInit, 500);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setTimeout(checkAndInit, 200);
            });
        }, { threshold: 0.1 });

        const badgeElement = document.querySelector('.LI-profile-badge');
        if (badgeElement) observer.observe(badgeElement);

        return () => {
            if (badgeElement) observer.unobserve(badgeElement);
        };
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

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-1 flex justify-center md:justify-end w-full md:w-auto will-change-transform"
                >
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="shashikathi" data-version="v1" style={{ display: 'block' }}>
                        <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shashikathi?trk=profile-badge">
                            Shashi Kathi
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
