"use client";

import { motion } from "framer-motion";

// Deterministic particle generation (fixed seed) so SSR + hydration match,
// avoiding Math.random() during render and setState inside effects.
const generateParticles = (count: number, seed: number) => {
    let s = seed;
    const rand = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
    return [...Array(count)].map(() => ({
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        delay: rand() * 2,
        duration: 3 + rand() * 2,
        dx: rand() * 20 - 10,
    }));
};

const particles = generateParticles(20, 42);

export default function AnimatedBackground() {
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
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/60 to-transparent rounded-full blur-3xl will-change-transform"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/40 to-transparent rounded-full blur-3xl will-change-transform"
            />

            {/* Floating particles */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, particle.dx, 0],
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
