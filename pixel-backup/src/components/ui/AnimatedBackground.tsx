"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .gradient-animate {
        animation: gradient-shift 20s ease infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[rgba_0%2C_0%2C_0%2C_0.6] via-[rgba_0%2C_0%2C_0%2C_0.4] to-[rgba_0%2C_0%2C_0%2C_0.5]"
      />
      <div
        className="absolute inset-0 w-full h-full opacity-30 gradient-animate"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, var(--color-accent) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--color-accent-bright) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  );
}
