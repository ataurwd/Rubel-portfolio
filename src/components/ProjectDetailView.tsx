"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  MapPin,
  Calendar,
  User,
  Compass,
  Maximize
} from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import Footer from "./Footer";
import { designerInfo } from "@/data/portfolio";

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  type: string;
  client?: string;
  role?: string;
  area?: string;
  image: string;
  description?: string;
  images: string[];
}

interface ProjectDetailViewProps {
  project: ProjectDetail;
  prevProject: ProjectDetail;
  nextProject: ProjectDetail;
}

export default function ProjectDetailView({
  project,
  prevProject,
  nextProject,
}: ProjectDetailViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const imagesList = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex(
          (prev) =>
            prev === null
              ? 0
              : (prev - 1 + imagesList.length) % imagesList.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex(
          (prev) => (prev === null ? 0 : (prev + 1) % imagesList.length)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, imagesList.length]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-muted-foreground hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-accent group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-border flex items-center justify-center font-mono font-bold text-xs tracking-widest bg-card text-foreground group-hover:border-accent group-hover:text-accent transition-colors">
              {designerInfo.monogram}
            </div>
            <span className="text-xs uppercase tracking-widest font-bold hidden sm:inline-block">
              {designerInfo.name}
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Project Title Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-accent" />
              <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent font-mono">
                [ PROJECT {project.number} ]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-sm md:text-base font-light text-muted-foreground max-w-2xl">
              {project.category}
            </p>
          </div>

          {/* Project Meta Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 border-y border-border py-8 mb-16 bg-card/40 p-6 rounded-none">
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-accent" /> Location
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.location}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-accent" /> Year
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.year}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <Compass className="w-3 h-3 text-accent" /> Type
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.type}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <User className="w-3 h-3 text-accent" /> Client
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.client || "Private Client"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-accent" /> Role
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.role || "3D Visualizer"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest flex items-center gap-1.5">
                <Maximize className="w-3 h-3 text-accent" /> Area
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{project.area || "N/A"}</p>
            </div>
          </div>

          {/* Project Overview / Description */}
          {project.description && (
            <div className="mb-16 max-w-3xl border-l-2 border-accent pl-6 py-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-3">
                Project Overview
              </h3>
              <p className="text-base md:text-lg font-light text-foreground/90 leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* 3-Column Image Gallery Section */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
              <div>
                <p className="text-[10px] font-mono uppercase text-accent tracking-[0.35em] mb-1">
                  [ VISUAL GALLERY ]
                </p>
                <h2 className="text-xl md:text-2xl font-light tracking-tight">
                  High-Resolution Renders & Views
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {imagesList.length} Renders
              </span>
            </div>

            {/* 3-COLUMN GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {imagesList.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative cursor-pointer border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/30">
                    <ImageWithFallback
                      src={imgSrc}
                      alt={`${project.title} Render ${idx + 1}`}
                      fallbackText={`${project.title} #${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white z-10">
                      <div className="w-10 h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-200">
                        View Full Screen
                      </span>
                    </div>

                    {/* Image Index Tag */}
                    <div className="absolute bottom-3 right-3 z-10 bg-background/85 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono tracking-widest border border-border text-foreground">
                      0{idx + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Pagination Navigation */}
          <div className="border-t border-border pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/projects/${prevProject.id}`}
              className="group border border-border bg-card p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-muted-foreground group-hover:text-accent mb-2">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-accent" />
                <span>Previous Project</span>
              </div>
              <p className="text-lg font-light group-hover:text-accent transition-colors">
                {prevProject.title}
              </p>
              <p className="text-xs font-light text-muted-foreground mt-1">
                {prevProject.category}
              </p>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group border border-border bg-card p-6 flex flex-col items-end text-right justify-between hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-muted-foreground group-hover:text-accent mb-2">
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-accent" />
              </div>
              <p className="text-lg font-light group-hover:text-accent transition-colors">
                {nextProject.title}
              </p>
              <p className="text-xs font-light text-muted-foreground mt-1">
                {nextProject.category}
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Top Modal Controls */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-xs font-mono uppercase tracking-widest text-white/80">
                {project.title} &mdash; Render {selectedImageIndex + 1} / {imagesList.length}
              </div>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Main Image */}
            <div
              className="relative flex-grow flex items-center justify-center my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
                <ImageWithFallback
                  src={imagesList[selectedImageIndex]}
                  alt={`${project.title} Render ${selectedImageIndex + 1}`}
                  fallbackText={`${project.title} #${selectedImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Buttons */}
              {imagesList.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImageIndex(
                        (selectedImageIndex - 1 + imagesList.length) %
                          imagesList.length
                      )
                    }
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/50 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer z-20"
                    aria-label="Previous render"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() =>
                      setSelectedImageIndex(
                        (selectedImageIndex + 1) % imagesList.length
                      )
                    }
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/50 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer z-20"
                    aria-label="Next render"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption / Thumbnail Selector */}
            <div
              className="flex items-center justify-center gap-3 overflow-x-auto py-2 z-10 max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {imagesList.map((thumbSrc, thumbIdx) => (
                <button
                  key={thumbIdx}
                  onClick={() => setSelectedImageIndex(thumbIdx)}
                  className={`relative w-16 h-12 border overflow-hidden transition-all cursor-pointer flex-shrink-0 ${
                    selectedImageIndex === thumbIdx
                      ? "border-accent scale-105 ring-2 ring-accent/50"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <ImageWithFallback
                    src={thumbSrc}
                    alt={`Thumbnail ${thumbIdx + 1}`}
                    fallbackText={`#${thumbIdx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
