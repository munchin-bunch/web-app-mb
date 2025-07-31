import { useEffect, DependencyList } from "react"

export const useDebounceEffect = (fn: Function, duration: number, deps: DependencyList) => {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps)
    }, duration)
    return () => {
      clearTimeout(t)
    }
  }, deps)
}