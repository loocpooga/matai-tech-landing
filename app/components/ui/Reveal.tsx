"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fade-and-rise on scroll that fails open: content is visible by default
 * (SSR, no JS, no IntersectionObserver) and only gets hidden client-side
 * when it's below the fold, then revealed as it scrolls into view.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
      setHidden(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-smooth ${
        hidden ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
