"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { experienceTimeline, designerInfo } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Heading (col-span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 07 — HISTORIC ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Professional Journey
            </h2>
            <p className="text-sm font-light text-muted-foreground mt-4 max-w-sm leading-relaxed">
              An overview of active and past studio tenures, design responsibilities, and key architectural contributions.
            </p>
          </div>
          <div className="hidden lg:block text-xs font-mono text-muted-foreground/60 border-t border-border/40 pt-6 mt-8">
            <a
              href={designerInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors group"
            >
              <span>CURRICULUM VITAE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right Column: Timeline (col-span 8) */}
        <motion.div
          className="lg:col-span-8 flex flex-col gap-12 relative pl-6 md:pl-8 before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[1px] before:bg-border/80"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceTimeline.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline connector dot */}
                <div
                  className={`absolute left-[-30px] md:left-[-38px] top-2 w-3.5 h-3.5 border flex items-center justify-center rounded-none transition-colors duration-300 ${
                    isCurrent
                      ? "bg-primary border-primary scale-110"
                      : "bg-background border-border group-hover:border-accent"
                  }`}
                >
                  {isCurrent && <span className="w-1.5 h-1.5 bg-background" />}
                </div>

                {/* Main Card */}
                <div
                  className={`border p-6 md:p-8 transition-all duration-300 ${
                    isCurrent
                      ? "border-accent/40 bg-card shadow-sm"
                      : "border-border bg-card/60 hover:border-border-foreground"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-border/40">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-accent font-medium mb-1 block">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold uppercase tracking-wider text-foreground">
                        {item.role}
                      </h3>
                    </div>
                    
                    <div className="text-left md:text-right">
                      {isCurrent && (
                        <span className="inline-block bg-accent/15 border border-accent/25 text-[9px] uppercase tracking-wider text-accent font-mono px-2 py-0.5 mb-1.5">
                          Current Tenure
                        </span>
                      )}
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs font-light text-muted-foreground leading-relaxed flex items-start gap-2.5">
                        <span className="w-1 h-1 bg-accent/60 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
