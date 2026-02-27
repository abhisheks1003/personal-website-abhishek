export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
          Contact
        </p>
        <h2 className="mb-6 font-serif text-4xl font-bold text-neutral-dark md:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-gray-500">
          Interested in working together or just want to say hello? Reach out
          anytime.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-dark transition-colors hover:bg-neutral-dark hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-dark transition-colors hover:bg-neutral-dark hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-neutral-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-dark transition-colors hover:bg-neutral-dark hover:text-white"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}
