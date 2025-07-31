import { useEffect, DependencyList } from "react"

// @typescript-eslint/no-unsafe-function-type
export const useDebounceEffect = (fn: () => void, duration: number, deps: DependencyList) => {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, [])
    }, duration)
    return () => {
      clearTimeout(t)
    }
  }, [...deps])
}