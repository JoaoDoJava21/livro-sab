import type { Line, Page } from '../types/book'

/**
 * Narração.
 *
 * Usa a síntese de voz do próprio sistema (Web Speech API), preferindo uma
 * voz feminina em português do Brasil. Nenhum arquivo de áudio precisa ser
 * baixado, e a experiência funciona inteira sem ela.
 *
 * As pausas do roteiro são respeitadas: cada frase vira uma fala separada,
 * com silêncio entre elas — o silêncio é parte do texto.
 */

const VOZES_PREFERIDAS = [
  /francisca/i,
  /maria/i,
  /luciana/i,
  /fernanda/i,
  /camila/i,
  /vit[oó]ria/i,
  /female|feminin/i,
]

export function narracaoDisponivel(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function escolherVoz(): SpeechSynthesisVoice | null {
  if (!narracaoDisponivel()) return null
  const vozes = window.speechSynthesis.getVoices()
  if (!vozes.length) return null
  const ptBr = vozes.filter((v) => /^pt[-_]?BR/i.test(v.lang))
  const pt = ptBr.length ? ptBr : vozes.filter((v) => /^pt/i.test(v.lang))
  if (!pt.length) return null
  for (const padrao of VOZES_PREFERIDAS) {
    const achada = pt.find((v) => padrao.test(v.name))
    if (achada) return achada
  }
  return pt[0]
}

/** Monta o texto narrado de uma página a partir das suas linhas. */
export function textoNarrado(page: Page): { frase: string; pausa: number }[] {
  if (page.narracao) {
    return page.narracao
      .split(/(?<=[.!?…])\s+/)
      .map((frase) => frase.trim())
      .filter(Boolean)
      .map((frase) => ({ frase, pausa: 420 }))
  }

  const partes: { frase: string; pausa: number }[] = []
  if (page.titulo) partes.push({ frase: page.titulo, pausa: 900 })
  if (page.subtitulo) partes.push({ frase: page.subtitulo, pausa: 800 })
  if (page.heading && !page.titulo) partes.push({ frase: page.heading, pausa: 600 })

  const linhas: Line[] = page.lines ?? []
  for (const linha of linhas) {
    partes.push({
      frase: limpar(linha.t),
      pausa: linha.pausa ?? (linha.s === 'destaque' ? 900 : 380),
    })
  }
  if (page.itens?.length) {
    for (const item of page.itens) partes.push({ frase: limpar(item), pausa: 340 })
  }
  return partes.filter((p) => p.frase.length > 0)
}

/** Tira as aspas tipográficas para a voz não “ler” a pontuação. */
function limpar(texto: string) {
  return texto.replace(/[“”"]/g, '').replace(/\s+/g, ' ').trim()
}

type Estado = 'parada' | 'falando' | 'pausada'

export class Narrator {
  private fila: { frase: string; pausa: number }[] = []
  private indice = 0
  private timeout: number | null = null
  private estado: Estado = 'parada'
  private voz: SpeechSynthesisVoice | null = null
  private ultimaPagina: Page | null = null
  private audio: HTMLAudioElement | null = null

  volume = 1
  rate = 0.84
  pitch = 1.02

  onStateChange: ((estado: Estado) => void) | null = null
  /** Chamado quando a narração começa e quando termina (para abaixar a trilha). */
  onSpeakingChange: ((falando: boolean) => void) | null = null

  constructor() {
    if (narracaoDisponivel()) {
      const carregar = () => {
        this.voz = escolherVoz()
      }
      carregar()
      window.speechSynthesis.addEventListener?.('voiceschanged', carregar)
    }
  }

  get state() {
    return this.estado
  }

  private setEstado(e: Estado) {
    if (this.estado === e) return
    this.estado = e
    this.onStateChange?.(e)
    this.onSpeakingChange?.(e === 'falando')
  }

  falarPagina(page: Page) {
    this.ultimaPagina = page
    this.stop()

    // Uma gravação real sempre ganha da voz sintética.
    if (page.narracaoAudio) {
      const audio = new Audio(page.narracaoAudio)
      audio.volume = this.volume
      audio.preload = 'auto'
      audio.onended = () => this.setEstado('parada')
      audio.onerror = () => {
        // Se o arquivo faltar, cai na voz do sistema em vez de ficar mudo.
        this.audio = null
        this.falarComOSistema(page)
      }
      this.audio = audio
      this.setEstado('falando')
      void audio.play().catch(() => {
        this.audio = null
        this.falarComOSistema(page)
      })
      return
    }

    this.falarComOSistema(page)
  }

  private falarComOSistema(page: Page) {
    const partes = textoNarrado(page)
    if (!partes.length || !narracaoDisponivel()) return
    this.fila = partes
    this.indice = 0
    this.setEstado('falando')
    this.proxima()
  }

  repetir() {
    if (this.ultimaPagina) this.falarPagina(this.ultimaPagina)
  }

  private proxima() {
    if (!narracaoDisponivel()) return
    if (this.indice >= this.fila.length) {
      this.setEstado('parada')
      return
    }
    const { frase, pausa } = this.fila[this.indice]
    const u = new SpeechSynthesisUtterance(frase)
    u.lang = 'pt-BR'
    if (this.voz) u.voice = this.voz
    u.rate = this.rate
    u.pitch = this.pitch
    u.volume = this.volume
    u.onend = () => {
      this.indice += 1
      this.timeout = window.setTimeout(() => this.proxima(), pausa)
    }
    u.onerror = () => {
      this.indice += 1
      this.timeout = window.setTimeout(() => this.proxima(), 200)
    }
    try {
      window.speechSynthesis.speak(u)
    } catch {
      this.setEstado('parada')
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause()
      this.setEstado('pausada')
      return
    }
    if (!narracaoDisponivel()) return
    window.speechSynthesis.pause()
    if (this.timeout) window.clearTimeout(this.timeout)
    this.setEstado('pausada')
  }

  resume() {
    if (this.audio) {
      void this.audio.play().catch(() => undefined)
      this.setEstado('falando')
      return
    }
    if (!narracaoDisponivel()) return
    window.speechSynthesis.resume()
    this.setEstado('falando')
  }

  stop() {
    if (this.timeout) {
      window.clearTimeout(this.timeout)
      this.timeout = null
    }
    if (this.audio) {
      this.audio.pause()
      this.audio.onended = null
      this.audio.onerror = null
      this.audio = null
    }
    if (narracaoDisponivel()) {
      try {
        window.speechSynthesis.cancel()
      } catch {
        /* nada a fazer */
      }
    }
    this.fila = []
    this.indice = 0
    this.setEstado('parada')
  }
}

export const narrator = new Narrator()
