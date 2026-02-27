"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="border-b border-gray-200 bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo — serif, elegant */}
        <Link href="/" className="font-serif text-2xl font-bold text-neutral-dark">
          Abhishek
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors hover:text-secondary ${
                    pathname === link.href
                      ? "text-secondary"
                      : "text-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="rounded-full bg-neutral-dark px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-neutral-dark transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-dark transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-dark transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm font-semibold uppercase tracking-widest transition-colors hover:text-secondary ${
                    pathname === link.href
                      ? "text-secondary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="mt-4 inline-block rounded-full bg-neutral-dark px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
