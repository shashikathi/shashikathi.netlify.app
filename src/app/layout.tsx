import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio" });

export const metadata: Metadata = {
  title: "Shashi Kathi | Data Analyst",
  description: "Portfolio of Shashi Kathi, a Data Analyst specializing in Python, SQL, and Predictive Modeling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${antonio.variable}`}>
      <body className="font-sans antialiased bg-white text-[#2a3a4a]">
        <SmoothScroll />
        {children}

      </body>
    </html>
  );
}
