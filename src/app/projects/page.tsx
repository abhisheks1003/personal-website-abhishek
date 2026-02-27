import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio of projects spanning AI, analytics, and full-stack development.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-neutral-dark">Projects</h1>
        <p className="mb-10 text-lg text-gray-600">
          Everything I&apos;ve shipped, am working on, or am prototyping.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
