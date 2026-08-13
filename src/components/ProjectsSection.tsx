"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { selectedProjects } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 04 — SELECTED WORKS ]
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground">
              Selected Projects
            </h2>
            <p className="text-sm font-light text-muted-foreground mt-2 max-w-md">
              A selection of architectural, interior design and photorealistic visualization projects.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            PORTFOLIO GRID
          </p>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {selectedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={`/projects/${project.id}`}
                className="group border border-border bg-card p-3 flex flex-col justify-between overflow-hidden hover:border-accent/40 transition-all duration-300 h-full"
              >
                {/* Aspect Ratio Wrapper */}
                <div className="relative w-full overflow-hidden aspect-[4/3] bg-secondary/20">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    fallbackText={project.title}
                    category={project.category}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Corner Project Number */}
                  <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-widest border border-border">
                    {project.number}
                  </div>

                  {/* Hover Link Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-background border border-border px-5 py-2.5 text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 scale-90 group-hover:scale-100 transition-all duration-300 text-foreground">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                    </span>
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="pt-4 pb-1 flex flex-col justify-end mt-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-light text-muted-foreground mt-0.5">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] uppercase font-mono text-muted-foreground/80 border-t border-border/40 pt-3 mt-1">
                    <span>Loc: {project.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span>Type: {project.type}</span>
                    <span className="ml-auto">Year: {project.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
