"use client";

import { ReactNode, useCallback, useState } from "react";
import { Toast as RadixToast } from "radix-ui";
import { ToastContext, ToastMessage } from "@/types";
import { Toast } from "@/components/shared";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36);
    setToasts((prev) => [...prev, { id, ...toast }]);

    const duration = toast.duration ?? 3000;
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration + 200);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}

        {toasts.map((toast) => (
          <Toast {...toast} key={toast.id} />
        ))}
        <RadixToast.Viewport className="ToastViewport" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};
