"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { galleryItems, GalleryItem } from "@/data/portfolio";
import ImageWithFallback from "./ImageWithFallback";

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3 font-mono">
              [ 09 — ARCHIVE ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Visual Archive
            </h2>
            <p className="text-sm font-light text-muted-foreground mt-2 max-w-md">
              A comprehensive showcase of structural drawings, interior textures, spatial mockups, and exterior models.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
            MASONRY GALLERY
          </p>
        </div>

        {/* Simple 3-Column Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] bg-card border border-border cursor-pointer overflow-hidden"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                fallbackText={item.title}
                category={item.category}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dynamic Hover Dark Overlay */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20">
                <span className="text-[8px] uppercase tracking-wider text-accent font-mono mb-0.5 font-bold">
                  {item.category}
                </span>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  {item.title}
                </h4>
              </div>

              {/* Static Title Tag on top of the image */}
              <div className="absolute top-3 left-3 z-10 bg-background/90 backdrop-blur-sm px-2.5 py-1 text-[8px] font-mono tracking-widest border border-border uppercase font-semibold text-foreground transition-opacity group-hover:opacity-0 duration-300">
                {item.title}
              </div>

              {/* Action Indicator */}
              <div className="absolute top-3 right-3 z-10 bg-background/90 backdrop-blur-sm w-6 h-6 flex items-center justify-center border border-border opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                <Maximize2 className="w-3 h-3 text-foreground" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Dialog component */}
      <Dialog open={activeItem !== null} onOpenChange={(open) => !open && setActiveItem(null)}>
        <DialogContent 
          className="top-0! left-0! translate-x-0! translate-y-0! w-screen h-screen max-w-none! max-h-none! sm:max-w-none! bg-black/98! ring-0! border-none! rounded-none! p-0! flex flex-col items-center justify-center select-none"
          showCloseButton={false}
        >
          <DialogTitle className="hidden">{activeItem?.title}</DialogTitle>
          <DialogDescription className="hidden">{activeItem?.category}</DialogDescription>
          
          {activeItem && (
            <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12">
              
              {/* Custom Close Button */}
              <DialogClose className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors cursor-pointer bg-black/35 hover:bg-black/60 p-3 rounded-full border border-white/10 backdrop-blur-xs">
                <X className="w-5 h-5" />
              </DialogClose>

              {/* Image Frame (Takes up main screen space) */}
              <div className="relative w-full flex-grow flex items-center justify-center min-h-0 mt-8">
                <div className="relative w-full h-full max-h-[78vh] aspect-[16/10]">
                  <ImageWithFallback
                    src={activeItem.image}
                    alt={activeItem.title}
                    fallbackText={activeItem.title}
                    category={activeItem.category}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Minimal Caption Footer Panel at the bottom */}
              <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-white/10 gap-4 mt-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent font-bold mb-1 block">
                    {activeItem.category}
                  </span>
                  <h3 className="text-lg font-light uppercase tracking-wider text-white">
                    {activeItem.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 text-[10px] uppercase font-mono text-zinc-400">
                  <span>REF: {activeItem.id.toUpperCase()}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span>SCALE: FULL SIZE RENDER</span>
                </div>
              </div>
              
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
