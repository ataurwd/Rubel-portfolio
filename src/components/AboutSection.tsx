"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { designerInfo } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 02 — ABOUT ME ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              From Concept to Visual Reality
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            EST. 2024 — DHAKA
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bento Cell 1: Large Image Block (col-span 5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 h-[350px] lg:h-auto min-h-[400px] border border-border p-2 bg-card relative group overflow-hidden"
          >
            <ImageWithFallback
              src="/images/rubel_suit_portrait.jpg"
              alt="Rubel Mia Portrait"
              fallbackText="Rubel Mia"
              category="Lead Design Architect"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Minimal overlays */}
            <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 text-[9px] uppercase tracking-wider font-mono">
              [ REF: RM_PORTRAIT ]
            </div>
          </motion.div>

          {/* Bento Cell 2: Bio Text Block (col-span 7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 border border-border bg-card p-8 md:p-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1 text-[9px] uppercase tracking-wider text-accent font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Studio Morphogenesis
              </div>
              
              <h3 className="text-xl sm:text-2xl font-light leading-relaxed text-foreground">
                I bridge the gap between technical architectural accuracy and immersive visual storytelling.
              </h3>
              
              <div className="space-y-4 text-sm font-light text-muted-foreground leading-relaxed">
                <p>
                  With a background in interior design, architectural visualization, and 3D modeling, I transform ideas, drawings, and concepts into realistic digital environments. My approach combines thoughtful space planning, refined materials, natural lighting, and detailed visualization to create spaces that feel both functional and emotionally engaging.
                </p>
                <p>
                  From the first concept to the final render, I focus on understanding the design intent and translating it into visuals that communicate the atmosphere, character, and experience of a space.
                </p>
              </div>
            </div>

            <div className="border-t border-border/60 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-xs">
                <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-wider mb-1">
                  [ Design Philosophy ]
                </p>
                <p className="font-medium uppercase tracking-wider">
                  FUNCTIONAL DESIGN. ATMOSPHERIC VISUALIZATION
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs uppercase tracking-widest text-foreground hover:text-accent font-bold inline-flex items-center gap-1 group"
              >
                <span>Read Design Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Bento Cell 3: Statistics Blocks (col-span 12) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {designerInfo.statistics.map((stat, idx) => (
              <div
                key={idx}
                className="border border-border bg-card p-6 md:p-8 flex flex-col justify-between group hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <span className="text-3xl md:text-4xl font-light text-foreground font-sans tracking-tight block mb-2">
                  {stat.value}
                </span>
                <div className="border-t border-border/60 pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground block font-sans">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
