import type { FlatPage } from '../data/chapters'

/**
 * Agrupa as páginas em folhas abertas.
 *
 * No desktop o livro mostra duas páginas por vez. Páginas marcadas como
 * `folhaInteira` atravessam a lombada e ocupam a folha inteira sozinhas —
 * é assim que "2 ANOS" e o primeiro beijo ganham o livro inteiro.
 *
 * No celular cada página vive sozinha.
 */
export interface Spread {
  key: string
  /** Página que ocupa as duas metades. */
  wide?: FlatPage
  left?: FlatPage
  right?: FlatPage
}

export function construirSpreads(pages: FlatPage[], paginaUnica: boolean): Spread[] {
  if (paginaUnica) {
    return pages.map((p) => ({ key: p.page.id, right: p }))
  }

  const spreads: Spread[] = []
  let i = 0
  while (i < pages.length) {
    const atual = pages[i]
    if (atual.page.folhaInteira) {
      spreads.push({ key: atual.page.id, wide: atual })
      i += 1
      continue
    }
    const proxima = pages[i + 1]
    if (proxima && !proxima.page.folhaInteira) {
      spreads.push({ key: `${atual.page.id}+${proxima.page.id}`, left: atual, right: proxima })
      i += 2
    } else {
      spreads.push({ key: atual.page.id, left: atual })
      i += 1
    }
  }
  return spreads
}

/** Qual página manda na atmosfera (música, luz) de uma folha. */
export function paginaPrincipal(spread: Spread | undefined): FlatPage | undefined {
  if (!spread) return undefined
  return spread.wide ?? spread.right ?? spread.left
}

/** Todas as páginas visíveis de uma folha, na ordem de leitura. */
export function paginasDaFolha(spread: Spread | undefined): FlatPage[] {
  if (!spread) return []
  if (spread.wide) return [spread.wide]
  return [spread.left, spread.right].filter((p): p is FlatPage => Boolean(p))
}

/** Índice da folha que contém uma página global. */
export function indiceDaFolha(spreads: Spread[], indicePagina: number): number {
  for (let i = 0; i < spreads.length; i++) {
    if (paginasDaFolha(spreads[i]).some((p) => p.index === indicePagina)) return i
  }
  return 0
}
