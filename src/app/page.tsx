import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Structural lines overlay globally */}
      <div className="pointer-events-none fixed inset-y-0 left-6 md:left-12 w-[1px] bg-border/20 z-40" />
      <div className="pointer-events-none fixed inset-y-0 right-6 md:right-12 w-[1px] bg-border/20 z-40" />

      {/* Main sticky navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Profile / About Section */}
        <AboutSection />

        {/* Service Capabilities Grid */}
        <ExpertiseGrid />

        {/* Selected Works Bento Grid */}
        <ProjectsSection />

        {/* Visual Archive Masonry Gallery */}
        {/* <GallerySection /> */}

        {/* Design Timeline & Methodology */}
        <ProcessSection />

        {/* Work CV Experience Timeline */}
        <ExperienceSection />

        {/* Visual Skills & Software Bento Panel */}
        <SkillsSection />

        {/* Strong Minimal Contact Coordination Panel */}
        <ContactSection />
      </main>

      {/* Footer Branding Details */}
      <Footer />
    </div>
  );
}

