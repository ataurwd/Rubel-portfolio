"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Layers, Ruler, Eye, Box, Grid } from "lucide-react";
import { expertiseList } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

// Icon mapping based on index or title
const getIcon = (number: string) => {
  switch (number) {
    case "01":
      return <Home className="w-5 h-5 text-accent" />;
    case "02":
      return <Layers className="w-5 h-5 text-accent" />;
    case "03":
      return <Ruler className="w-5 h-5 text-accent" />;
    case "04":
      return <Eye className="w-5 h-5 text-accent" />;
    case "05":
      return <Box className="w-5 h-5 text-accent" />;
    case "06":
      return <Grid className="w-5 h-5 text-accent" />;
    default:
      return <Home className="w-5 h-5 text-accent" />;
  }
};

export default function ExpertiseGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 03 — EXPERTISE ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Design Disciplines
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            CAPABILITIES & SERVICES
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseList.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="group border border-border bg-card hover:border-accent/40 p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Optional Background Render (Faded & Visible on Hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                {item.image && (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallbackText={item.title}
                    category="Discipline Preview"
                    fill
                    sizes="400px"
                  />
                )}
              </div>

              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start z-10">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-background/80 group-hover:border-accent/40 transition-colors">
                  {getIcon(item.number)}
                </div>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-accent font-medium">
                  {item.number}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="mt-12 z-10">
                <h3 className="text-lg uppercase tracking-wider font-bold mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Corner Accent graphic on hover */}
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
