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
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-neutral-dark">About Me</h1>

        <div className="mb-12 space-y-4 text-lg leading-relaxed text-gray-600">
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

        <h2 className="mb-6 text-2xl font-bold text-neutral-dark">
          Skills &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
