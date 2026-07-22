"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

const navLinks = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#proof", label: "Proof" },
  { href: "#platforms", label: "Platforms" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-bg-border"
          : "bg-bg/80 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-display font-semibold text-cream tracking-tight">
              Matai Tech<span className="text-ember">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-ink-soft hover:text-cream text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="https://cal.com/luke-pauga-hlurq5/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-ink-soft hover:text-cream transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg border-t border-bg-border">
          <div className="px-5 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-ink-soft hover:text-cream text-sm py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="https://cal.com/luke-pauga-hlurq5/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
