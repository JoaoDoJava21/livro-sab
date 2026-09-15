/**
 * Modelo de dados do livro.
 *
 * Toda a narrativa vive em `src/data/` — nenhum texto é escrito dentro de
 * componentes. Para acrescentar o CAPÍTULO 5 basta criar um novo arquivo de
 * capítulo e registrá-lo em `src/data/chapters.ts`.
 */

/** Trilhas emocionais. Cada uma é uma peça instrumental original (ver src/audio). */
export type MusicCue =
  /** Descoberta — o início, quando ele ainda não sabia o que estava sentindo. */
  | 'descoberta'
  /** Memória — amizade, casa dela, rede, risadas, pequenos gestos. */
  | 'memoria'
  /** Tempo — a separação, os dois anos, as páginas vazias. */
  | 'tempo'
  /** Reencontro — quando os caminhos voltam a se aproximar. */
  | 'reencontro'
  /** Silêncio absoluto: a música sai de cena. */
  | 'silencio'

/** Temperatura visual da página. Controla luz, papel e sombra. */
export type PageMood = 'neutro' | 'quente' | 'claro' | 'frio' | 'escuro' | 'esperanca'

export type PageType =
  | 'capitulo'
  | 'texto'
  | 'memoria'
  | 'foto'
  | 'carta'
  | 'cena'
  | 'citacao'
  | 'vazia'
  | 'montagem'
  | 'fim-capitulo'
  | 'continua'

/** Estilos de linha dentro de uma página. */
export type LineStyle =
  /** Corpo do texto. */
  | 'corpo'
  /** Primeira linha, um pouco maior. */
  | 'abertura'
  /** Frase de impacto, centralizada e grande. */
  | 'destaque'
  /** Sussurro: menor, mais clara, em itálico. */
  | 'sussurro'
  /** Manuscrito — usar com muita parcimônia. */
  | 'manuscrito'
  /** Fala entre aspas, dentro da declaração final. */
  | 'fala'
  /** Item de lista delicada. */
  | 'item'

export interface Line {
  t: string
  s?: LineStyle
  /** Pausa em ms depois desta linha, quando narrada. */
  pausa?: number
}

export type CatKind =
  | 'sentado'
  | 'dormindo'
  | 'andando'
  | 'espreitando'
  | 'patinha'
  | 'pegadas'
  | 'novelo'

export interface CatMark {
  kind: CatKind
  /** Canto da página onde o gato mora. */
  spot?: 'inferior-direito' | 'inferior-esquerdo' | 'superior-direito' | 'superior-esquerdo' | 'margem'
  /** 0–1. Gatos devem ser discretos. */
  opacity?: number
  size?: number
}

export type PhotoStyle = 'polaroid' | 'impressa' | 'fita' | 'envelope' | 'inclinada'

export interface PhotoSlot {
  /** Preencha com um arquivo em /public/fotos para trocar o placeholder por uma foto real. */
  src?: string
  alt?: string
  legenda?: string
  style?: PhotoStyle
  /** Inclinação em graus. */
  tilt?: number
}

export interface Page {
  id: string
  type: PageType
  /** Título pequeno, em versalete, no topo da página. */
  heading?: string
  /** Título grande (usado em páginas de capítulo e cenas). */
  titulo?: string
  subtitulo?: string
  lines?: Line[]
  /** Itens da montagem de memórias (as pequenas coisas, o desfile final). */
  itens?: string[]
  fotos?: PhotoSlot[]
  gato?: CatMark
  music?: MusicCue
  mood?: PageMood
  /** Ocupa a folha inteira (sem página irmã ao lado) no desktop. */
  folhaInteira?: boolean
  /** Texto da narração. Quando ausente, é montado a partir de `lines`. */
  narracao?: string
  /**
   * Gravação real desta página (ex.: '/narracao/c1-escola.mp3').
   * Quando existe, toca no lugar da voz sintética do sistema — é assim que
   * se coloca uma voz de verdade, com as pausas e a respiração certas.
   */
  narracaoAudio?: string
  /** Efeito cinematográfico especial desta página. */
  cena?:
    | 'entrada-dela'
    | 'primeiro-beijo'
    | 'apagar'
    | 'dois-anos'
    | 'retrospectiva'
    | 'maos'
    | 'gato-final'
}

export interface Chapter {
  id: number
  /** Rótulo curto exibido no indicador de progresso. */
  rotulo: string
  titulo: string
  subtitulo?: string
  pages: Page[]
}

export interface BookMeta {
  titulo: string
  subtitulo: string
  rodape: string
  dedicatoria: string[]
}
