"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { designerInfo } from "@/data/portfolio";

// Custom line-art Behance icon styled to match Lucide-react icons
const Behance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M13 9h7" />
    <path d="M3 6h4a2.5 2.5 0 0 1 0 5H3" />
    <path d="M3 11h4.5a2.5 2.5 0 0 1 0 5H3" />
    <path d="M3 6v12h5" />
    <path d="M20 14.5a3 3 0 0 1-5.4 0" />
    <path d="M14 12h6.5a3 3 0 0 0-6-3v3z" />
  </svg>
);

export default function ContactSection() {
  const emailAddress = designerInfo.email || "rubel450000@gmail.com";
  const phoneNumber = designerInfo.phone || "+880 1567-993310";

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary/15 relative border-t border-border/40">
      {/* Drafting background overlay */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-[0.07] editorial-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Major CTA (col-span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-6 font-mono">
            [ 10 — INITIATE ]
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-foreground mb-6">
            Have a space <br className="hidden sm:inline" />
            in mind?
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-lg mb-10">
            Let's turn your initial ideas into a thoughtful architectural experience. Reach out to start a collaborative conversation.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href={`mailto:${emailAddress}`}>
              <Button className="bg-primary text-background hover:bg-accent hover:text-white text-xs uppercase tracking-widest py-6 px-8 rounded-none cursor-pointer">
                <span>Start a Conversation</span>
                <Mail className="ml-1 w-4 h-4" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-border hover:bg-secondary text-xs uppercase tracking-widest py-6 px-8 rounded-none cursor-pointer"
              onClick={handleScrollToProjects}
            >
              <span>View Selected Projects</span>
            </Button>
          </div>
        </div>

        {/* Right Side: Contact Info Block (col-span 5) */}
        <div className="lg:col-span-5 flex items-center">
          <div className="w-full border border-border bg-card p-8 md:p-10 space-y-8 relative">
            {/* Top border graphics */}
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-background border border-border px-3 py-1 text-[9px] font-mono tracking-widest uppercase">
              [ Connect ]
            </div>

            <h3 className="text-xs uppercase tracking-widest font-bold border-b border-border/40 pb-3 font-mono">
              [ Studio Coordinates ]
            </h3>

            <div className="space-y-6">
              {/* Email block */}
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 border border-border flex items-center justify-center bg-background shrink-0 group-hover:border-accent transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] tracking-wider mb-1">
                    Send an Inquiry
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* Phone block */}
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 border border-border flex items-center justify-center bg-background shrink-0 group-hover:border-accent transition-colors">
                  <Phone className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] tracking-wider mb-1">
                    Call Studio
                  </p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Office/Location block */}
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 border border-border flex items-center justify-center bg-background shrink-0 group-hover:border-accent transition-colors">
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] tracking-wider mb-1">
                    Office Location
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {designerInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="border-t border-border/40 pt-6">
              <p className="text-muted-foreground uppercase font-mono text-[9px] tracking-wider mb-4">
                Digital Presence
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href="https://www.linkedin.com/in/rubel-mia-58a7873a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.behance.net/rubelmia6060"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Behance className="w-4 h-4" />
                  <span>Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.facebook.com/share/1HgGBPPcPf/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
