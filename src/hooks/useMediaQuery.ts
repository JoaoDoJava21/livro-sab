import { useEffect, useState } from 'react'

export function useMediaQuery(query: string, inicial = false): boolean {
  const [combina, setCombina] = useState(() =>
    typeof window === 'undefined' ? inicial : window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setCombina(e.matches)
    setCombina(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return combina
}

/** Livro de uma página só (celular e telas estreitas / baixas). */
export function usePaginaUnica(): boolean {
  return useMediaQuery('(max-width: 860px), (max-height: 520px)')
}

export function usePrefereMenosMovimento(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
