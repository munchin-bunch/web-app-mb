"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-2 py-2 rounded  transition items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
