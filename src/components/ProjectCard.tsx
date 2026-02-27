import Link from "next/link";
import type { Project } from "@/data/projects";

const statusColors: Record<Project["status"], string> = {
  Shipped: "bg-primary/10 text-primary",
  WIP: "bg-accent/20 text-gray-700",
  Prototype: "bg-gray-100 text-gray-600",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-bold text-neutral-dark group-hover:text-secondary">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="mb-4 leading-relaxed text-gray-600">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
