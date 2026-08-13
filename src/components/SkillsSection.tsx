"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, FileText, Globe, Layers } from "lucide-react";
import { skillsCategories } from "@/data/portfolio";

// Helper to return a Lucide icon for each skill category
const getCategoryIcon = (title: string) => {
  if (title.toLowerCase().includes("design")) {
    return <Layers className="w-4 h-4 text-accent" />;
  }
  if (title.toLowerCase().includes("2d")) {
    return <FileText className="w-4 h-4 text-accent" />;
  }
  if (title.toLowerCase().includes("3d")) {
    return <Cpu className="w-4 h-4 text-accent" />;
  }
  return <Globe className="w-4 h-4 text-accent" />;
};

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative border-t border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 08 — TAXONOMY ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Skills & Tools
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            TECHNICAL REPERTOIRE
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="border border-border bg-card p-8 relative overflow-hidden group hover:border-accent/40 transition-all duration-300"
            >
              {/* Subtle background drafting grid */}
              <div className="absolute inset-0 z-0 opacity-10 select-none pointer-events-none editorial-grid" />
              
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-border flex items-center justify-center bg-background">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  [{category.skills.length} Items]
                </span>
              </div>

              {/* Skills Listing (Editorial Layout) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 relative z-10">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 group/skill"
                  >
                    <span className="w-1 h-1 bg-border group-hover/skill:bg-accent rounded-full transition-colors" />
                    <span className="text-xs text-muted-foreground group-hover/skill:text-foreground transition-colors font-light">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
