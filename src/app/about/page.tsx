import type { Metadata } from "next";
import SkillBadge from "@/components/SkillBadge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Abhishek — full-stack engineer, builder, and lifelong learner.",
};

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Postgres",
  "Tailwind CSS",
  "Vercel",
  "Docker",
  "AWS",
  "LLMs / AI",
  "Data Visualization",
];

export default function AboutPage() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
          About
        </p>
        <h1 className="mb-12 font-serif text-4xl font-bold text-neutral-dark md:text-5xl">
          About Me
        </h1>

        <div className="md:grid md:grid-cols-5 md:gap-16">
          {/* Bio — left column */}
          <div className="mb-12 space-y-5 text-lg leading-relaxed text-gray-600 md:col-span-3 md:mb-0">
            <p>
              I&apos;m a full-stack engineer who loves building products that
              solve real problems. My work spans AI-powered tools, data platforms,
              and polished web applications.
            </p>
            <p>
              I believe in shipping fast, iterating based on feedback, and never
              sacrificing craft for speed. Every project is an opportunity to learn
              something new and push what&apos;s possible.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, reading about systems thinking, or debating the
              finer points of developer experience.
            </p>
          </div>

          {/* Skills — right column */}
          <div className="md:col-span-2">
            <h2 className="mb-6 font-serif text-2xl font-bold text-neutral-dark">
              Skills &amp; Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
