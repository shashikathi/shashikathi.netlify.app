"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Data Models Built", value: 30, suffix: "+" },
    { label: "Accuracy Rate", value: 92, suffix: "%" },
    { label: "Hours of Analysis", value: 500, suffix: "+" },
];

export default function Stats() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-accent/5 to-dark-gray/5 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle, #2e5a88 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-dark-gray mb-4">
                        Impact by Numbers
                    </h2>
                    <p className="text-lg text-light-gray">Real results from real projects</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default"
                        >
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-accent"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    scale: hoveredIndex === index ? 1 : 0.8,
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold font-heading text-dark-gray mb-2"
                                    animate={{
                                        scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.value}
                                    {stat.suffix}
                                </motion.div>
                                <p className="text-sm text-light-gray font-medium">{stat.label}</p>
                            </div>

                            {/* Corner decoration */}
                            <motion.div
                                className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full"
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: hoveredIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
