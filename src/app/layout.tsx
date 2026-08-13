import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rubel Mia | Premium Architect & Interior Designer",
  description: "Portfolio of Rubel Mia, a professional architect and interior designer specializing in 2D technical planning, 3D visualization, and luxury space architecture.",
  keywords: ["Architect", "Interior Designer", "3D Rendering", "Space Planning", "Luxury Residential", "AutoCAD Drawings"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}

