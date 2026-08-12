"use client";

import Image from "next/image";
import { Linkedin, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function LinkedInCard() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="w-full max-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden text-center flex flex-col items-center"
        >
            {/* Header Banner */}
            <div className="w-full h-20 bg-gradient-to-r from-accent to-[#1d3d60] relative" />

            {/* Profile Avatar Container */}
            <div className="relative -mt-10 mb-3 z-10">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white bg-white shadow-md">
                    <Image
                        src="/profile.png"
                        alt="Shashi Kathi"
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                    />
                </div>
                {/* Online badge */}
                <span className="absolute bottom-1 right-1 w-4.5 h-4.5 bg-green-500 border-2 border-white rounded-full" />
            </div>

            {/* Profile Information */}
            <div className="px-6 pb-6 w-full flex flex-col items-center">
                <h3 className="text-xl font-bold text-dark-gray leading-tight">Shashi Kathi</h3>
                <p className="text-sm font-semibold text-accent mt-1">Operations Associate</p>
                <p className="text-xs text-light-gray">Bhanzu</p>

                {/* Separation line */}
                <div className="w-full h-[1px] bg-gray-100 my-4" />

                {/* Additional Info Grid */}
                <div className="w-full text-left space-y-2.5 text-xs text-dark-gray/80 mb-6">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-light-gray flex-shrink-0" />
                        <span className="truncate">Lovely Professional University</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-light-gray flex-shrink-0" />
                        <span>India</span>
                    </div>
                </div>

                {/* Call-to-action button */}
                <a
                    href="https://www.linkedin.com/in/shashikathi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0a66c2] hover:bg-[#004182] text-white font-medium text-sm rounded-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                    <Linkedin className="w-4 h-4 fill-white text-transparent" />
                    <span>Connect on LinkedIn</span>
                </a>
            </div>
        </motion.div>
    );
}
