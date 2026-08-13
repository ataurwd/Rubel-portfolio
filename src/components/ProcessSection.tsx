"use client";

import React from "react";
import { motion } from "framer-motion";
import { designProcess } from "@/data/portfolio";

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-background relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 06 — SYSTEM ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Design & Delivery Process
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            METHODOLOGY
          </p>
        </div>

        {/* Process Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {designProcess.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex flex-col group border-t border-border/60 pt-8"
            >
              {/* Massive numbered typography in background */}
              <span className="text-6xl md:text-7xl font-light text-muted-foreground/15 font-serif select-none pointer-events-none absolute top-4 right-0 group-hover:text-accent/20 transition-colors">
                {step.number}
              </span>

              {/* Step Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-medium text-accent">
                  PHASE {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg uppercase tracking-wider font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
