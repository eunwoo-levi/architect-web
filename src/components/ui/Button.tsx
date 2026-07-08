import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "solid-dark" | "solid-accent" | "outline-dark" | "outline-light";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  "solid-dark": "bg-stone-900 text-white hover:bg-accent",
  "solid-accent": "bg-accent text-white hover:bg-accent-dark",
  "outline-dark": "text-white border border-stone-600 hover:border-accent hover:text-accent-light",
  "outline-light": "text-stone-600 border border-stone-300 hover:border-accent hover:text-accent",
};

const sizeClass: Record<"md" | "lg", string> = {
  md: "px-6 py-3",
  lg: "px-10 py-4",
};

export default function Button({
  href,
  variant = "solid-dark",
  size = "lg",
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-3 text-sm tracking-widest font-medium transition-colors duration-300 ${variantClass[variant]} ${sizeClass[size]} ${className}`;

  const isExternalScheme = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("fax:");

  if (isExternalScheme) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
