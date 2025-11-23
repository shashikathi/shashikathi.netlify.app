"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tools = [
    { name: "Python", category: "Language", color: "from-blue-400 to-blue-600" },
    { name: "SQL", category: "Database", color: "from-orange-400 to-orange-600" },
    { name: "Power BI", category: "Visualization", color: "from-yellow-400 to-yellow-600" },
    { name: "Tableau", category: "Visualization", color: "from-blue-400 to-cyan-500" },
    { name: "Pandas", category: "Library", color: "from-purple-400 to-purple-600" },
    { name: "NumPy", category: "Library", color: "from-indigo-400 to-indigo-600" },
    { name: "Scikit-learn", category: "ML", color: "from-orange-500 to-red-500" },
    { name: "Azure AI", category: "Cloud", color: "from-blue-500 to-blue-700" },
    { name: "GCP", category: "Cloud", color: "from-red-400 to-yellow-400" },
    { name: "Oracle Cloud", category: "Cloud", color: "from-red-500 to-red-700" },
];

export default function ToolsMarquee() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-16 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto mb-8">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold font-heading uppercase text-center text-dark-gray mb-2"
                >
                    Tools & Technologies
                </motion.h3>
                <p className="text-center text-light-gray">Hover to pause</p>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex gap-6 overflow-hidden">
                    <motion.div
                        animate={{
                            x: isPaused ? 0 : [0, -1920],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                        className="flex gap-6 flex-shrink-0 will-change-transform"
                    >
                        {[...tools, ...tools, ...tools].map((tool, index) => (
                            <motion.div
                                key={`${tool.name}-${index}`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`flex-shrink-0 px-6 py-4 rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg cursor-pointer`}
                            >
                                <div className="text-white font-bold text-lg whitespace-nowrap">
                                    {tool.name}
                                </div>
                                <div className="text-white/80 text-sm">{tool.category}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
