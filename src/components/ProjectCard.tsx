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
      className="group block rounded-2xl bg-white p-8 transition-all hover:shadow-xl"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <h3 className="font-serif text-2xl font-bold text-neutral-dark group-hover:text-secondary">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="mb-6 leading-relaxed text-gray-500">
        {project.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-secondary transition-colors group-hover:text-primary">
        Read more &rarr;
      </span>
    </Link>
  );
}
