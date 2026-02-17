"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#integrations", label: "Integrations" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 diagonal-accent ${
        scrolled
          ? "bg-bg-paper/95 backdrop-blur-md shadow-card"
          : "bg-bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-display font-semibold text-text-primary tracking-tight">
              Matai<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-slate-500 hover:text-text-primary text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#contact">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-500 hover:text-text-primary transition-colors"
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
        <div className="md:hidden bg-bg-paper border-t border-slate-100 shadow-card">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-500 hover:text-primary text-sm font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
