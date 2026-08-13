"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { designerInfo } from "@/data/portfolio";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/40 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top half */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-border/40">
          
          {/* Left: Logo monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary flex items-center justify-center font-mono font-bold text-xs tracking-widest bg-card">
              {designerInfo.monogram}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em]">
              {designerInfo.name}
            </span>
          </div>

          {/* Center: Specialties */}
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Architecture · Interior · Visualization
          </div>

          {/* Right: Scroll to top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleScrollToTop}
            className="rounded-none border border-border bg-card hover:bg-secondary cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom half */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-10 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
          <div>
            © 2026 {designerInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div>
            DESIGNED & DEVELOPED WITH NEXT.JS
          </div>
        </div>
      </div>
    </footer>
  );
}
