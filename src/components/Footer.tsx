import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-secondary"
            aria-label="GitHub profile"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-secondary"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-secondary"
            aria-label="X profile"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
