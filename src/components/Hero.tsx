"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { designerInfo } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  const images = [
    "/images/hero_living.jpg",
    "/images/hero_bedroom1.jpg",
    "/images/hero_bedroom2.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-zinc-950 text-white">
      {/* Full-bleed Background Slideshow with Cross-Fade */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithFallback
              src={images[currentImageIndex]}
              alt={`Luxury architectural render background ${currentImageIndex + 1}`}
              fallbackText="Modern Interior Space"
              category="Interior Rendering"
              priority
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Subtle vignette and dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 md:from-black/90 md:via-black/70 md:to-transparent z-10" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-10 opacity-10 select-none pointer-events-none editorial-grid" />
      
      {/* Corner crosshairs for architectural drafting feel */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20 z-10 pointer-events-none" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20 z-10 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20 z-10 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Typography Content (taking up 8 columns for visual focus) */}
        <motion.div
          className="lg:col-span-8 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subheading tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-accent" />
            <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent">
              {designerInfo.title}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6 font-sans"
          >
            3D Visualizer & Interior Designer   
            <span className="font-normal italic text-accent font-serif">Architectural Visualization</span>,{" "}
            <span className="font-normal">Photorealistic Interior</span>{" "}
            <span className="font-normal italic text-accent font-serif">and</span>{" "}
            <span className="font-normal italic text-accent font-serif">Exterior</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-light text-zinc-300 leading-relaxed max-w-xl mb-10"
          >
            {designerInfo.bioDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-16">
            <Button
              className="bg-white text-zinc-950 hover:bg-accent hover:text-white text-xs uppercase tracking-widest py-6 px-8 rounded-none cursor-pointer border-none"
              onClick={() => handleScrollTo("#projects")}
            >
              <span>View Projects</span>
              <ArrowDown className="ml-1 w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white! text-xs uppercase tracking-widest py-6 px-8 rounded-none cursor-pointer"
              onClick={() => handleScrollTo("#about")}
            >
              <span>About Me</span>
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Hero Metadata Bento Block */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            <div>
              <p className="text-[9px] uppercase tracking-wider text-zinc-400 mb-1 font-mono">
                [ Based In ]
              </p>
              <p className="text-xs uppercase font-medium tracking-wide text-white">
                {designerInfo.location}
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-zinc-400 mb-1 font-mono">
                [ Currently ]
              </p>
              <p className="text-xs uppercase font-medium tracking-wide text-white">
                {designerInfo.currentCompany}
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-zinc-400 mb-1 font-mono">
                [ Specialization ]
              </p>
              <p className="text-xs uppercase font-medium tracking-wide text-white">
                3D Visualizer
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Left empty on purpose to show the background rendering details */}
        <div className="hidden lg:block lg:col-span-4" />
      </div>
    </section>
  );
}
