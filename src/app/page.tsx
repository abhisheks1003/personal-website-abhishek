import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-3xl font-bold text-neutral-dark">
            Featured Projects
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            A selection of things I&apos;ve been building.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
