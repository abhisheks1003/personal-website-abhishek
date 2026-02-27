import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

const statusColors: Record<string, string> = {
  Shipped: "bg-primary/10 text-primary",
  WIP: "bg-accent/20 text-gray-700",
  Prototype: "bg-gray-100 text-gray-600",
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary transition-colors hover:text-secondary/80"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
            Project
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <h1 className="font-serif text-4xl font-bold text-neutral-dark md:text-5xl">
              {project.title}
            </h1>
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mb-14 flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-dark px-6 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-dark transition-colors hover:bg-neutral-dark hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-dark px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>

        <hr className="divider mb-14" />

        {/* Description */}
        <div className="mb-14">
          <h2 className="mb-4 font-serif text-2xl font-bold text-neutral-dark">
            About This Project
          </h2>
          <p className="leading-relaxed text-gray-600">
            {project.longDescription}
          </p>
        </div>

        {/* Screenshots placeholder */}
        {project.screenshots.length > 0 && (
          <div className="mb-14">
            <h2 className="mb-4 font-serif text-2xl font-bold text-neutral-dark">
              Screenshots
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-gray-200"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What I Learned */}
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
          <h2 className="mb-4 font-serif text-2xl font-bold text-neutral-dark">
            What I Learned
          </h2>
          <p className="leading-relaxed text-gray-600">{project.learned}</p>
        </div>
      </div>
    </article>
  );
}
