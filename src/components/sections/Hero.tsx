"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    const cursorSpringX = useSpring(cursorX, { damping: 30, stiffness: 200 });
    const cursorSpringY = useSpring(cursorY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                cursorX.set(e.touches[0].clientX);
                cursorY.set(e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [cursorX, cursorY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) * 0.1);
        mouseY.set((e.clientY - centerY) * 0.1);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set((e.touches[0].clientX - centerX) * 0.1);
            mouseY.set((e.touches[0].clientY - centerY) * 0.1);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const letterVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden" style={{ minHeight: '-webkit-fill-available' }}>
            {/* Custom cursor follower */}
            <motion.div
                className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 hidden md:block"
                style={{
                    x: cursorSpringX,
                    y: cursorSpringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="order-2 lg:order-1 relative z-10"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseLeave={() => {
                        mouseX.set(0);
                        mouseY.set(0);
                    }}
                    onTouchEnd={() => {
                        mouseX.set(0);
                        mouseY.set(0);
                    }}
                >
                    <motion.div
                        style={{ x, y }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="overflow-hidden"
                    >
                        <motion.h1 className="text-[12vw] lg:text-[8vw] leading-[0.9] font-bold uppercase font-heading tracking-tighter text-dark-gray">
                            {["S", "h", "a", "s", "h", "i"].map((letter, i) => (
                                <motion.span
                                    key={`first-${i}`}
                                    variants={letterVariants}
                                    className="inline-block hover:text-accent transition-colors cursor-default"
                                    whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <br />
                            {["K", "a", "t", "h", "i"].map((letter, i) => (
                                <motion.span
                                    key={`second-${i}`}
                                    variants={letterVariants}
                                    className="inline-block hover:text-accent transition-colors cursor-default"
                                    whileHover={{ scale: 1.1, rotate: [5, -5, 0] }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </motion.div>

                    <div className="overflow-hidden mt-4 flex items-center gap-6">
                        <motion.p
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                            className="text-xl md:text-2xl font-medium text-light-gray"
                        >
                            Data Analyst
                        </motion.p>
                        <motion.a
                            href="https://drive.google.com/drive/folders/1YvHlx6K3aNXhGODY2etrAIk6FUIamzpd"
                            target="_blank"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            className="group relative px-6 py-2 bg-dark-gray text-white text-sm font-medium rounded-full overflow-hidden"
                        >
                            <motion.span
                                className="absolute inset-0 bg-accent"
                                initial={{ x: "-100%" }}
                                animate={{ x: isHovered ? 0 : "-100%" }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">Download Resume</span>
                        </motion.a>
                    </div>
                </motion.div>

                <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="relative h-full w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xl"
                    >
                        <Image
                            src="/profile.png"
                            alt="Shashi Kathi"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-dark-gray/20 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
