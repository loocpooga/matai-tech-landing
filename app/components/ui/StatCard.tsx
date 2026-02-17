"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  accent?: "primary" | "warm" | "bright";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  delay?: number;
}

export default function StatCard({
  value,
  label,
  accent = "primary",
  size = "md",
  animate = true,
  delay = 0,
}: StatCardProps) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/^[\d.]+/, "");
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 1200;
            const steps = 50;
            const increment = numericValue / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate, hasAnimated, numericValue, delay]);

  const accentColors = {
    primary: "text-primary",
    warm: "text-accent-warm",
    bright: "text-accent-bright-dark",
  };

  const valueSizes = {
    sm: "text-3xl",
    md: "text-4xl",
    lg: "text-5xl",
  };

  return (
    <div
      ref={ref}
      className="bg-bg-elevated rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
    >
      <div
        className={`font-mono font-bold ${valueSizes[size]} ${accentColors[accent]} mb-1`}
      >
        {animate ? count : numericValue}
        {suffix}
      </div>
      <div className="text-slate-500 text-sm font-medium">{label}</div>
    </div>
  );
}
