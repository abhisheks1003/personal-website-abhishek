import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-24 md:py-36 lg:py-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-5">
        {/* Left column — text */}
        <div className="md:col-span-3">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
            Full-Stack Engineer
          </p>
          <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-neutral-dark md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-secondary">Abhishek</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-500">
            I build products at the intersection of AI, analytics, and great
            user experience. I ship fast, iterate often, and care deeply about
            craft.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border-2 border-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-dark transition-colors hover:bg-neutral-dark hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right column — decorative element */}
        <div className="hidden md:col-span-2 md:flex md:items-center md:justify-center">
          <div className="relative h-80 w-full max-w-xs">
            {/* Large gradient shape */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary via-secondary/80 to-primary opacity-90" />
            {/* Offset accent shape */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border-2 border-accent" />
            {/* Small floating circle */}
            <div className="absolute -top-3 -left-3 h-12 w-12 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
