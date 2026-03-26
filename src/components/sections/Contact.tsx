"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-br from-dark-gray to-accent relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Contact info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-heading uppercase text-white mb-6"
                        >
                            Let's Work
                            <br />
                            Together
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/80 mb-12"
                        >
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "shashikathi56@gmail.com", href: "mailto:shashikathi56@gmail.com" },
                                { icon: MapPin, label: "Location", value: "India", href: null },
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href || "#"}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Calendar Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 border border-white/20"
                    >
                        <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-white/95 relative shadow-inner">
                            <iframe 
                                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ31-XFOLaGNNnVWSDNfG3ZfeoMPTj4pOwp9V-cmhu4YQEynWtzf9m-e2Ok8EwElzEJjjk0yBhE0?gv=true" 
                                style={{ border: 0 }} 
                                width="100%" 
                                height="100%" 
                                frameBorder="0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
