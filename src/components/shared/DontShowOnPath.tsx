"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export const DontShowOnPath = ({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  return pathname === path ? null : <>{children}</>;
};
