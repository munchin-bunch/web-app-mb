import { useContext } from "react";
import { ToastContext } from "@/types";

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return { addToast: ctx.addToast };
}
