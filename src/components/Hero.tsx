import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-secondary px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-lg font-medium text-accent">Hi, I&apos;m</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Abhishek
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          Full-stack engineer building products at the intersection of AI,
          analytics, and great user experience. I ship fast, iterate often, and
          care deeply about craft.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
