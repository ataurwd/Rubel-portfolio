"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
  category?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackText = "Architectural Render",
  category = "Detail Study",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-secondary/35 group", className)}>
      {error ? (
        <div className="absolute inset-0 flex flex-col justify-between p-6 select-none editorial-grid bg-secondary/15">
          {/* Top border decor */}
          <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
            <span>[ Studio Draft ]</span>
            <span>Ref: {alt.toLowerCase().replace(/\s+/g, "-")}</span>
          </div>

          {/* Central drafting crosshair */}
          <div className="relative flex flex-col items-center justify-center flex-grow">
            {/* Fine intersecting lines */}
            <div className="absolute w-8 h-[1px] bg-accent/25"></div>
            <div className="absolute h-8 w-[1px] bg-accent/25"></div>
            
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-widest text-accent font-medium mb-1">
                {fallbackText}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {category}
              </p>
            </div>
          </div>

          {/* Bottom structural indicator */}
          <div className="flex justify-between items-end text-[9px] text-muted-foreground/80 font-mono">
            <span>SCALE: N.T.S.</span>
            <span>© AR_STUDIO</span>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          className={cn("object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105", className)}
          onError={() => setError(true)}
          {...props}
        />
      )}
    </div>
  );
}
