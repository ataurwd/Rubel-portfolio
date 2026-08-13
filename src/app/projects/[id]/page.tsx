import React from "react";
import projectsData from "@/data/projects.json";
import ProjectDetailView from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find(
    (p) =>
      p.id === id ||
      p.id === id.toLowerCase() ||
      `proj-${parseInt(p.number, 10)}` === id
  );

  if (!project) {
    notFound();
  }

  // Find next & previous projects for navigation footer
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
