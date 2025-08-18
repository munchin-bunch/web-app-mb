"use client";

import Link from "next/link";

//TODO: Adjust it
export const HomeFab = ({ href = "/" }: { href?: string }) => {
  return (
    <Link
      href={href}
      aria-label="Go to home"
      className="
        fixed z-50
        bottom-[calc(16px+env(safe-area-inset-bottom))] right-[calc(16px+env(safe-area-inset-right))]
        md:bottom-[calc(24px+env(safe-area-inset-bottom))] md:right-[calc(24px+env(safe-area-inset-right))]
        inline-flex h-12 w-12 items-center justify-center rounded-full
        bg-white/70 dark:bg-neutral-900/70 backdrop-blur
        text-slate-700 dark:text-slate-200
        ring-1 ring-black/10 dark:ring-white/10 shadow-lg
        transition hover:bg-white/90 dark:hover:bg-neutral-900/90 active:scale-95
      "
    >
      <span className="sr-only">Home</span>
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    </Link>
  );
};
