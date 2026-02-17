import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "warm" | "bright" | "neutral";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-primary/10 text-primary border border-primary/20",
    warm:
      "bg-accent-warm/10 text-accent-warm border border-accent-warm/20",
    bright:
      "bg-accent-bright/15 text-accent-bright-dark border border-accent-bright/20",
    neutral:
      "bg-slate-100 text-slate-600 border border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
