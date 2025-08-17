"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { NavigationTabsConfig } from "@/constants";

export function DesktopNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const showNav = !pathname?.startsWith("/game/");

  const navigateTo = (href: string) => router.push(href);

  if (!showNav) return;

  return (
    <nav className="w-full flex justify-between items-center gap-10 py-4 pb-12">
      {NavigationTabsConfig.map((tab) => (
        <button
          key={`navigation-tab-${tab.name}`}
          onClick={() => navigateTo(tab.href)}
          className={clsx(
            "text-xs font-bold uppercase tracking-widest transition",
            "lg:text-xl",
            pathname === tab.href
              ? "text-white"
              : "text-gray-primary hover:text-white"
          )}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
}
