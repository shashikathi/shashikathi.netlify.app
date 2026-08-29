"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 bg-off-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <Link href="/" className="text-lg font-bold tracking-tight uppercase font-heading text-dark-gray">
                        Shashi Kathi
                    </Link>
                    <p className="text-xs text-light-gray mt-1">Operations Associate Analyst — Portfolio</p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-dark-gray">
                    <Link
                        href="https://www.linkedin.com/in/shashikathi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/shashikathi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://shashikathi.netlify.app"
                        className="hover:text-accent transition-colors"
                    >
                        Portfolio
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200/50 flex flex-col sm:flex-row justify-between gap-4 text-xs text-light-gray">
                <p>&copy; {new Date().getFullYear()} Shashi Kathi. All rights reserved.</p>
                <p>Designed & Built with Next.js</p>
            </div>
        </footer>
    );
}

