"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { designerInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-background/85 backdrop-blur-md border-b border-border/40 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Monogram */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className={`w-10 h-10 border flex items-center justify-center font-mono font-bold text-sm tracking-widest relative overflow-hidden transition-all duration-300 ${scrolled
            ? "border-primary text-foreground group-hover:bg-primary group-hover:text-background"
            : "border-white/40 text-white group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white"
            }`}>
            {designerInfo.monogram}
          </div>
          <span className={`text-xs uppercase font-bold tracking-[0.2em] font-sans transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"
            }`}>
            {designerInfo.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs uppercase tracking-widest transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/75 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1pvjWXl6ci0k7Xcqn9-C_i_OpxbJkM64M/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-widest py-3 px-6 border font-mono transition-all duration-300 ${scrolled
              ? "border-primary text-foreground hover:bg-primary hover:text-background bg-transparent"
              : "border-white/30 text-white hover:bg-white hover:text-zinc-950 bg-transparent"
              }`}
          >
            <span>Download CV</span>
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={`rounded-none cursor-pointer transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"
              }`} />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[320px] bg-background border-l border-border flex flex-col justify-between p-8 rounded-none">
              <div className="flex flex-col gap-8 mt-12">
                <SheetTitle className="text-left text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground border-b border-border/40 pb-4">
                  Navigation
                </SheetTitle>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xl uppercase tracking-widest font-light text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <div className="border-t border-border/40 pt-6">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">
                    Based in
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest">
                    {designerInfo.location}
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1pvjWXl6ci0k7Xcqn9-C_i_OpxbJkM64M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest bg-primary text-background hover:bg-accent/90 py-4 font-mono font-bold transition-colors"
                >
                  <span>Download CV</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
