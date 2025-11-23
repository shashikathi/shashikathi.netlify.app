"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: number; duration: number }>>([]);

    useEffect(() => {
        // Generate particles only on client side to avoid hydration mismatch
        const generatedParticles = [...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2,
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl md:blur-3xl will-change-transform"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-dark-gray/10 to-transparent rounded-full blur-xl md:blur-3xl will-change-transform"
            />

            {/* Floating particles - only render after client mount */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                    className="absolute w-1 h-1 bg-accent/40 rounded-full will-change-transform"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                />
            ))}
        </div>
    );
}
