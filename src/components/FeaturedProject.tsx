"use client";

import React from "react";
import { motion } from "framer-motion";
import { featuredProjectDetail } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

export default function FeaturedProject() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
    <section id="featured-project" className="py-24 md:py-32 bg-secondary/10 border-t border-b border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 05 — FEATURED STUDY ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Featured Case Study
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            DEEP DIVE — CASE NO. {featuredProjectDetail.number}
          </p>
        </div>

        {/* Large Immersive Image Banner */}
        <motion.div
          className="relative w-full aspect-[16/9] max-h-[600px] border border-border bg-card p-3 mb-16 overflow-hidden group"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <ImageWithFallback
              src="/images/proj_residence.jpg"
              alt="Immersive featured case study exterior"
              fallbackText="Modern Residence Facade At Dusk"
              category="Exterior Visualization Study"
              fill
              sizes="100vw"
            />
            {/* Dark editorial overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            {/* Immersive overlay text */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-accent-foreground block mb-2">
                PROJECT {featuredProjectDetail.number}
              </span>
              <h3 className="text-2xl md:text-5xl font-light tracking-tight mb-2">
                {featuredProjectDetail.title}
              </h3>
              <p className="text-xs md:text-sm tracking-wider uppercase font-light opacity-90">
                {featuredProjectDetail.category}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Description */}
          <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
              [ Design Objective ]
            </h4>
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              {featuredProjectDetail.description}
            </p>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              The project challenges conventional tropical residential frameworks by pushing concrete slabs outward, casting extensive deep shade that cools the glass boundary walls naturally. Materials were kept completely honest: board-formed exposed concrete, sustainably harvested teak, and locally fabricated brass trim.
            </p>
          </motion.div>

          {/* Right Column: Technical Metadata Spec Card */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <div className="border border-border bg-card p-8 space-y-6">
              <h4 className="text-xs uppercase tracking-widest font-bold border-b border-border/60 pb-3 font-mono">
                [ Technical Specs ]
              </h4>

              <div className="grid grid-cols-2 gap-y-4 text-xs">
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] mb-1">
                    Location
                  </p>
                  <p className="font-medium tracking-wide uppercase">
                    {featuredProjectDetail.location}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] mb-1">
                    Year Completed
                  </p>
                  <p className="font-medium tracking-wide uppercase">
                    {featuredProjectDetail.year}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] mb-1">
                    Gross Built Area
                  </p>
                  <p className="font-medium tracking-wide uppercase">
                    {featuredProjectDetail.area}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-mono text-[9px] mb-1">
                    Studio Services
                  </p>
                  <div className="font-medium tracking-wide space-y-1">
                    {featuredProjectDetail.services.map((service, idx) => (
                      <p key={idx}>{service}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Gallery Grid */}
        <div className="border-t border-border/40 pt-16">
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent font-bold mb-10 font-mono">
            [ Structural Documents & Detail Renders ]
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjectDetail.gallery.map((item, index) => (
              <motion.div
                key={index}
                className="group border border-border bg-card p-2.5 flex flex-col justify-between overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative w-full aspect-square bg-secondary/10 mb-4 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallbackText={item.title}
                    category={item.type.replace("-", " ").toUpperCase()}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-muted-foreground px-1">
                  <span>{item.title}</span>
                  <span className="text-accent">[{item.type}]</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
