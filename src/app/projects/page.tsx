import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio of projects spanning AI, analytics, and full-stack development.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
          Portfolio
        </p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-neutral-dark md:text-5xl">
          Projects
        </h1>
        <p className="mb-14 text-lg text-gray-500">
          Everything I&apos;ve shipped, am working on, or am prototyping.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
