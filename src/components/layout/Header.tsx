"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const headerY = useTransform(scrollY, [0, 100], [0, -5]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{
                y: headerY,
                top: `calc(1rem + env(safe-area-inset-top, 0px))`,
                left: `calc(1rem + env(safe-area-inset-left, 0px))`,
                right: `calc(1rem + env(safe-area-inset-right, 0px))`,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-50 flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ${isScrolled
                    ? "bg-white/70 backdrop-blur-xl shadow-2xl border border-gray-100"
                    : "bg-white/50 backdrop-blur-md shadow-lg"
                }`}
        >
            <Link href="/" className="text-xl font-bold tracking-tight uppercase font-heading">
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-dark-gray to-accent bg-clip-text text-transparent"
                >
                    Shashi
                </motion.span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-dark-gray">
                {[
                    { href: "#work", label: "Work" },
                    { href: "#about", label: "About" },
                    { href: "https://www.linkedin.com/in/shashikathi/", label: "LinkedIn", external: true },
                    { href: "https://github.com/shashikathi", label: "GitHub", external: true },
                    { href: "#contact", label: "Contact" },
                ].map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        className="relative group"
                    >
                        <motion.span
                            whileHover={{ y: -2 }}
                            className="hover:text-accent transition-colors"
                        >
                            {link.label}
                        </motion.span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                ))}
            </nav>

            <Link
                href="#contact"
                className="group relative flex items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-dark-gray to-accent text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-dark-gray"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="relative z-10 hidden sm:inline">Available for work</span>
                <span className="relative z-10 sm:hidden">Hire me</span>
            </Link>
        </motion.header>
    );
}
