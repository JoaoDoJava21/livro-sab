import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { chapters, flatPages, totalCapitulosEscritos } from '../data/chapters'
import { construirSpreads, indiceDaFolha, paginaPrincipal, type Spread } from '../lib/spreads'
import { score } from '../audio/ScoreEngine'
import { narracaoDisponivel, narrator } from '../audio/narration'
import { usePaginaUnica, usePrefereMenosMovimento } from '../hooks/useMediaQuery'
import type { MusicCue } from '../types/book'

export type Palco = 'capa' | 'abrindo' | 'lendo'
export type Direcao = 'frente' | 'tras'

interface Experiencia {
  palco: Palco
  spreads: Spread[]
  folha: number
  direcao: Direcao
  virando: boolean
  paginaUnica: boolean
  movimentoReduzido: boolean

  capituloAtual: (typeof chapters)[number]
  totalCapitulos: number
  progresso: number

  somDestravado: boolean
  precisaDeGesto: boolean
  musicaLigada: boolean
  narracaoLigada: boolean
  narracaoSuportada: boolean
  narrando: boolean
  volume: number

  abrirLivro: () => void
  entrarNaHistoria: () => void
  proxima: () => void
  anterior: () => void
  irParaFolha: (i: number) => void
  alternarMusica: () => void
  alternarNarracao: () => void
  repetirNarracao: () => void
  pausarNarracao: () => void
  ajustarVolume: (v: number) => void
  destravarSom: () => Promise<void>
  definirMovimentoReduzido: (v: boolean) => void
}

const Ctx = createContext<Experiencia | null>(null)

const DURACAO_VIRADA = 1150

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const paginaUnicaMedia = usePaginaUnica()
  const prefereMenos = usePrefereMenosMovimento()

  const [palco, setPalco] = useState<Palco>('capa')
  const [movimentoReduzido, setMovimentoReduzido] = useState(prefereMenos)
  const [indicePagina, setIndicePagina] = useState(0)
  const [direcao, setDirecao] = useState<Direcao>('frente')
  const [virando, setVirando] = useState(false)

  const [somDestravado, setSomDestravado] = useState(false)
  const [precisaDeGesto, setPrecisaDeGesto] = useState(false)
  const [musicaLigada, setMusicaLigada] = useState(true)
  const [narracaoLigada, setNarracaoLigada] = useState(false)
  const [narrando, setNarrando] = useState(false)
  const [volume, setVolume] = useState(0.13)

  const timer = useRef<number | null>(null)
  const ultimoCue = useRef<MusicCue | null>(null)

  useEffect(() => setMovimentoReduzido(prefereMenos), [prefereMenos])

  useEffect(() => {
    document.documentElement.dataset.movimento = movimentoReduzido ? 'reduzido' : 'normal'
  }, [movimentoReduzido])

  const spreads = useMemo(() => construirSpreads(flatPages, paginaUnicaMedia), [paginaUnicaMedia])
  const folha = useMemo(() => indiceDaFolha(spreads, indicePagina), [spreads, indicePagina])

  const principal = paginaPrincipal(spreads[folha])
  const capituloAtual = principal?.chapter ?? chapters[0]

  // ——— Áudio: a trilha segue a página, sem nunca se anunciar ———
  useEffect(() => {
    if (palco !== 'lendo') return
    const cue = principal?.page.music
    if (!cue) return
    if (cue === ultimoCue.current) return
    ultimoCue.current = cue
    if (musicaLigada && somDestravado) score.play(cue)
  }, [palco, principal, musicaLigada, somDestravado])

  useEffect(() => {
    score.setMuted(!musicaLigada)
  }, [musicaLigada])

  useEffect(() => {
    score.setVolume(volume)
  }, [volume])

  // ——— Narração ———
  useEffect(() => {
    narrator.onSpeakingChange = (falando) => {
      setNarrando(falando)
      // A voz sempre fica acima da trilha.
      score.duck(falando ? 0.42 : 1, falando ? 1.1 : 2.2)
    }
    return () => {
      narrator.onSpeakingChange = null
    }
  }, [])

  useEffect(() => {
    if (palco !== 'lendo' || !narracaoLigada || !principal) {
      return
    }
    const id = window.setTimeout(() => narrator.falarPagina(principal.page), 620)
    return () => window.clearTimeout(id)
  }, [palco, narracaoLigada, principal])

  useEffect(() => {
    return () => {
      narrator.stop()
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  const destravarSom = useCallback(async () => {
    const ok = await score.unlock()
    setSomDestravado(ok)
    setPrecisaDeGesto(!ok)
    if (ok && musicaLigada && ultimoCue.current) score.play(ultimoCue.current)
    return
  }, [musicaLigada])

  // Se o navegador bloquear o autoplay, mostramos o convite discreto.
  useEffect(() => {
    if (palco === 'lendo' && !somDestravado) {
      const id = window.setTimeout(() => setPrecisaDeGesto(true), 2400)
      return () => window.clearTimeout(id)
    }
  }, [palco, somDestravado])

  const virar = useCallback(
    (destino: number, dir: Direcao) => {
      if (virando) return
      if (destino < 0 || destino >= spreads.length) return
      narrator.stop()
      setDirecao(dir)
      setVirando(true)
      const alvo = paginaPrincipal(spreads[destino])
      const atraso = movimentoReduzido ? 120 : DURACAO_VIRADA
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setIndicePagina(alvo?.index ?? 0)
        setVirando(false)
      }, atraso)
    },
    [virando, spreads, movimentoReduzido],
  )

  const proxima = useCallback(() => virar(folha + 1, 'frente'), [virar, folha])
  const anterior = useCallback(() => virar(folha - 1, 'tras'), [virar, folha])
  const irParaFolha = useCallback(
    (i: number) => virar(i, i > folha ? 'frente' : 'tras'),
    [virar, folha],
  )

  const abrirLivro = useCallback(() => {
    setPalco('abrindo')
    void destravarSom()
  }, [destravarSom])

  const entrarNaHistoria = useCallback(() => {
    setPalco('lendo')
    ultimoCue.current = flatPages[0].page.music ?? 'descoberta'
    if (musicaLigada) score.play(ultimoCue.current, 8)
  }, [musicaLigada])

  const alternarMusica = useCallback(() => {
    const ligar = !musicaLigada
    setMusicaLigada(ligar)
    if (!ligar) return
    void score.unlock().then((ok) => {
      setSomDestravado(ok)
      if (ok) score.play(ultimoCue.current ?? 'descoberta')
    })
  }, [musicaLigada])

  const alternarNarracao = useCallback(() => {
    if (narracaoLigada) narrator.stop()
    setNarracaoLigada(!narracaoLigada)
  }, [narracaoLigada])

  const repetirNarracao = useCallback(() => {
    if (principal) narrator.falarPagina(principal.page)
  }, [principal])

  const pausarNarracao = useCallback(() => {
    if (narrator.state === 'falando') narrator.pause()
    else if (narrator.state === 'pausada') narrator.resume()
    else if (principal) narrator.falarPagina(principal.page)
  }, [principal])

  // ——— Teclado ———
  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (palco !== 'lendo') {
        if (palco === 'capa' && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          abrirLivro()
        }
        return
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        proxima()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        anterior()
      } else if (e.key === 'Home') {
        e.preventDefault()
        irParaFolha(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        irParaFolha(spreads.length - 1)
      }
    }
    window.addEventListener('keydown', tecla)
    return () => window.removeEventListener('keydown', tecla)
  }, [palco, proxima, anterior, irParaFolha, spreads.length, abrirLivro])

  const valor: Experiencia = {
    palco,
    spreads,
    folha,
    direcao,
    virando,
    paginaUnica: paginaUnicaMedia,
    movimentoReduzido,
    capituloAtual,
    totalCapitulos: totalCapitulosEscritos,
    progresso: spreads.length > 1 ? folha / (spreads.length - 1) : 0,
    somDestravado,
    precisaDeGesto: precisaDeGesto && !somDestravado,
    musicaLigada,
    narracaoLigada,
    narracaoSuportada: narracaoDisponivel(),
    narrando,
    volume,
    abrirLivro,
    entrarNaHistoria,
    proxima,
    anterior,
    irParaFolha,
    alternarMusica,
    alternarNarracao,
    repetirNarracao,
    pausarNarracao,
    ajustarVolume: setVolume,
    destravarSom,
    definirMovimentoReduzido: setMovimentoReduzido,
  }

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>
}

export function useExperiencia(): Experiencia {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useExperiencia precisa estar dentro de <ExperienceProvider>')
  return ctx
}
