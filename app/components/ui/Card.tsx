import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
  variant?: "default" | "elevated" | "outlined";
}

export default function Card({
  children,
  className = "",
  hover = false,
  elevated = false,
  variant = "default",
}: CardProps) {
  const base = "rounded-card overflow-hidden";

  const variants = {
    default: "bg-bg-elevated shadow-card",
    elevated: "bg-bg-elevated shadow-float",
    outlined: "bg-bg-elevated border border-slate-200",
  };

  const hoverClass = hover
    ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer"
    : "";

  return (
    <div className={`${base} ${variants[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
