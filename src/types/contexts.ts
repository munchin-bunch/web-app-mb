import { createContext } from "react";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  duration?: number;
}

export type ToastContextValue = {
  addToast: (toast: Omit<ToastMessage, "id">) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);
