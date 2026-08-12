import type { Metadata, Viewport } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio" });

export const metadata: Metadata = {
  title: "Shashi Kathi | Operations & Analytics",
  description: "Portfolio of Shashi Kathi, specializing in Operations, People Analytics, and AI-Driven Process Optimization.",
  metadataBase: new URL("https://shashikathi.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shashi Kathi | Operations & Analytics",
    description: "Portfolio of Shashi Kathi, specializing in Operations, People Analytics, and AI-Driven Process Optimization.",
    url: "https://shashikathi.netlify.app",
    siteName: "Shashi Kathi Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Shashi Kathi Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashi Kathi | Operations & Analytics",
    description: "Portfolio of Shashi Kathi, specializing in Operations, People Analytics, and AI-Driven Process Optimization.",
    images: ["/profile.png"],
  },
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
    <html lang="en" className={`${inter.variable} ${antonio.variable}`}>
      <body className="font-sans antialiased bg-white text-[#2a3a4a]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

