"use client";

import clsx from "clsx";
import { Toast as RadixToast } from "radix-ui";

interface ToastProps {
  id: string;
  duration?: number;
  title: string;
  description?: string;
  //   className?: string;
  //   children: ReactNode;
}

export const Toast = ({ title, description, duration }: ToastProps) => {
  return (
    <RadixToast.Root
      duration={duration}
      className={clsx(
        "ToastRoot",
        "bg-white shadow-lg rounded-xl p-2 lg:p-4 border border-pink-primary flex flex-col gap-1"
      )}
    >
      <RadixToast.Title className="text:xs lg:text-base font-semibold text-gray-900">
        {title}
      </RadixToast.Title>
      {description && (
        <RadixToast.Description className=" text-[10px] lg:text-sm text-gray-primary">
          {description}
        </RadixToast.Description>
      )}
    </RadixToast.Root>
  );
};
