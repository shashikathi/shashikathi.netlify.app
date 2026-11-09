"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import LinkedInBadge from "../ui/LinkedInBadge";

const preview =
    "I'm Shashi Kathi — friends call me Preetham. I work where operations and data meet, making reporting easier to trust, processes easier to follow, and day-to-day work easier to act on.";

const moreContent = [
    "In my current role at Bhanzu, I support operations with KPI reporting, case visibility, process documentation, and practical automation. I enjoy finding the root of a problem and building a simple workflow the team can keep using.",
    "My background spans operations, analytics, and coordination: from a data science internship at TransOrg to leading a 15-person OASIS team across 10+ initiatives. I value accuracy, clear communication, and work that makes the next step easier.",
];

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentId = useId();
    const shouldReduceMotion = useReducedMotion();

    const toggle = () => setIsExpanded((prev) => !prev);

    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading uppercase text-dark-gray md:col-span-1 will-change-transform"
                >
                    About Me
                </motion.h2>

                <div className="md:col-span-1 max-w-[650px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="will-change-transform"
                    >
                        <p className="text-lg md:text-xl text-dark-gray leading-relaxed line-clamp-3">
                            {preview}
                        </p>

                        <motion.div
                            id={contentId}
                            initial={false}
                            animate={{
                                height: isExpanded ? "auto" : 0,
                                opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{
                                height: { duration: shouldReduceMotion ? 0 : 0.35, ease: "easeInOut" },
                                opacity: { duration: shouldReduceMotion ? 0 : 0.25 },
                            }}
                            className="overflow-hidden"
                            aria-hidden={!isExpanded}
                        >
                            <div className="space-y-5 pt-5">
                                {moreContent.map((text, i) => (
                                    <p key={i} className="text-lg md:text-xl text-dark-gray leading-relaxed">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        <motion.button
                            type="button"
                            onClick={toggle}
                            aria-expanded={isExpanded}
                            aria-controls={contentId}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-dark-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-full transition-colors duration-300"
                        >
                            {isExpanded ? "Show Less" : "Read More"}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                aria-hidden="true"
                            />
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-1 flex justify-center md:justify-end w-full md:w-auto will-change-transform"
                >
                    <LinkedInBadge />
                </motion.div>
            </div>
        </section>
    );
}
