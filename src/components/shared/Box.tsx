"use client";
import type { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export function Box({ children, className = "", ...props }: BoxProps) {
  return (
    <div
      className={`p-4 rounded items-center border bg-dark-primary border-pink-primary ${className}`}
      {...props}>
      {children}
    </div>
  );
}
