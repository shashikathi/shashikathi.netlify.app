import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${antonio.variable}`}>
      <body className="font-sans antialiased bg-white text-[#2a3a4a]">
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
          async
          defer
        />
        <SmoothScroll />
        {children}

      </body>
    </html>
  );
}
