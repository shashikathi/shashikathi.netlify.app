"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-off-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-heading uppercase mb-8 text-dark-gray"
                    >
                        Let's work
                        <br />
                        together
                    </motion.h2>
                    <a
                        href="mailto:shashikathi56@gmail.com"
                        className="text-xl md:text-2xl font-medium text-light-gray hover:text-accent transition-colors"
                    >
                        shashikathi56@gmail.com
                    </a>
                </div>

                <div className="flex gap-8 text-sm font-medium text-dark-gray">
                    <Link href="https://www.linkedin.com/in/shashikathi/" target="_blank" className="hover:text-accent transition-colors">LinkedIn</Link>
                    <Link href="https://github.com/shashikathi" target="_blank" className="hover:text-accent transition-colors">GitHub</Link>
                    <Link href="https://infopreetham.netlify.app" target="_blank" className="hover:text-accent transition-colors">Portfolio</Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-200 flex justify-between text-xs text-light-gray">
                <p>&copy; 2024 Shashi Kathi. All rights reserved.</p>
            </div>
        </footer>
    );
}
