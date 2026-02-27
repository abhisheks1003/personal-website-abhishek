import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <hr className="divider" />

      {/* Featured Projects */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
            Portfolio
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-neutral-dark md:text-5xl">
            Featured Projects
          </h2>
          <p className="mb-14 text-lg text-gray-500">
            A selection of things I&apos;ve been building.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <ContactSection />
    </>
  );
}
