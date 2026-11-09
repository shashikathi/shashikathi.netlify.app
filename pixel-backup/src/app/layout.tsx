import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preetham | Operations & Analytics",
  description: "Operations, analytics, reporting, and process improvement by Shashi Kathi, known as Preetham.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
