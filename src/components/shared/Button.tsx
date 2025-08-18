"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  loading?: boolean | false
}

export function Button({ children, loading, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-2 py-2 rounded  transition items-center ${className}`}
      {...props}
      >
      { loading && <Spinner /> }
      {children}
    </button>
  );
}
