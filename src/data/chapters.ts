import type { BookMeta, Chapter, Page } from '../types/book'
import { chapter1 } from './chapter1'
import { chapter2 } from './chapter2'
import { chapter3 } from './chapter3'
import { chapter4 } from './chapter4'
import { epilogo, finalePages } from './finale'

export const bookMeta: BookMeta = {
  titulo: 'Nossa História',
  subtitulo: 'Eu, você e todas as páginas que ainda faltam escrever.',
  rodape: 'Uma história de amor em capítulos.',
  dedicatoria: [
    'para Sabrina',
    'que entrou por uma porta de sala de aula',
    'e nunca mais saiu de dentro de mim',
  ],
}

/**
 * Para acrescentar o CAPÍTULO 6: crie `chapter6.ts` no mesmo formato e
 * insira-o nesta lista, antes de `epilogo`. Nada mais precisa mudar.
 */
export const chapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  { ...chapter4, pages: [...chapter4.pages, ...finalePages] },
  epilogo,
]

/** Total de capítulos "escritos" (o epílogo em branco não conta). */
export const totalCapitulosEscritos = chapters.filter((c) => c.id <= 4).length

export interface FlatPage {
  page: Page
  chapter: Chapter
  /** Índice global da página dentro do livro inteiro. */
  index: number
}

export const flatPages: FlatPage[] = chapters.flatMap((chapter) =>
  chapter.pages.map((page) => ({ page, chapter, index: 0 })),
).map((entry, index) => ({ ...entry, index }))

if (import.meta.env.DEV) {
  const ids = new Set<string>()
  for (const { page } of flatPages) {
    if (ids.has(page.id)) console.warn(`[nossa-historia] id de página duplicado: ${page.id}`)
    ids.add(page.id)
  }
}
