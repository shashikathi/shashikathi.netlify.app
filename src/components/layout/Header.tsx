"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const headerY = useTransform(scrollY, [0, 100], [0, -5]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#work", label: "Work" },
        { href: "#about", label: "About" },
        { href: "https://www.linkedin.com/in/shashikathi/", label: "LinkedIn", external: true },
        { href: "https://github.com/shashikathi", label: "GitHub", external: true },
        { href: "/pixel", label: "Pixel theme" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
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
                        ? "bg-white/80 backdrop-blur-[20px] shadow-sm border border-gray-100/50"
                        : "bg-white/60 backdrop-blur-[12px] shadow-sm border border-transparent"
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

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark-gray">
                    {navLinks.map((link) => (
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

                <div className="flex items-center gap-4">
                    {/* Desktop CTA Button */}
                    <Link
                        href="#contact"
                        className="hidden lg:flex group relative items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-gradient-to-b from-[#3a4a5a] to-dark-gray text-white rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-black/5"
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation menu"
                        className="lg:hidden p-2 text-dark-gray hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-xl transition-colors duration-200"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-x-4 top-24 z-40 lg:hidden bg-white/95 backdrop-blur-[20px] rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-4 text-center"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={`mobile-${link.href}`}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="py-3 text-lg font-semibold text-dark-gray hover:text-accent transition-colors duration-200 border-b border-gray-50 last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
