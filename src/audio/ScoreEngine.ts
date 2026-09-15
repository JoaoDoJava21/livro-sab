import type { MusicCue } from '../types/book'

/**
 * Trilha sonora original, sintetizada no navegador (Web Audio API).
 *
 * Por que sintetizada, e não as músicas de referência:
 * as quatro faixas citadas no roteiro são obras protegidas por direitos
 * autorais e não podem ser reproduzidas nem recriadas melodicamente aqui.
 * O que existe abaixo são quatro peças instrumentais originais — harmonias,
 * timbres e andamentos próprios — escritas para cumprir a mesma função
 * emocional: descoberta, memória, tempo e reencontro.
 *
 * Se você licenciar áudio real, veja `MusicController` e
 * `public/audio/README.md`: basta soltar os arquivos lá que eles assumem
 * o lugar da síntese, sem mudar mais nada.
 */

type ThemeId = Exclude<MusicCue, 'silencio'>

interface ThemeSpec {
  /** Progressão harmônica, em notas MIDI. */
  chords: number[][]
  /** Duração de cada acorde, em segundos. */
  chordDur: number
  /** Timbre do colchão harmônico. */
  padWave: OscillatorType
  /** Corte do filtro do colchão, em Hz. */
  padCutoff: number
  /** Ganho relativo do tema (equaliza as peças entre si). */
  gain: number
  /** Notas da melodia esparsa, relativas à tônica. */
  melody: number[]
  /** Probabilidade de soar uma nota de melodia a cada tempo. */
  melodyChance: number
  /** Timbre da melodia. */
  bellWave: OscillatorType
  /** Ruído de fundo (respiração da sala), 0–1. */
  air: number
  /** Leve desafinação entre as vozes, em cents. */
  detune: number
}

const THEMES: Record<ThemeId, ThemeSpec> = {
  // “Eu ainda não sabia o que estava acontecendo comigo.”
  descoberta: {
    chords: [
      [45, 57, 64, 69, 76],
      [42, 54, 61, 66, 73],
      [38, 50, 57, 62, 69],
      [40, 52, 59, 64, 71],
    ],
    chordDur: 9,
    padWave: 'triangle',
    padCutoff: 900,
    gain: 1,
    melody: [76, 81, 83, 88, 81, 76, 73],
    melodyChance: 0.42,
    bellWave: 'sine',
    air: 0.1,
    detune: 5,
  },

  // A lembrança: casa dela, a rede, as risadas.
  memoria: {
    chords: [
      [41, 53, 60, 65, 72],
      [46, 58, 65, 70, 77],
      [43, 55, 62, 67, 74],
      [36, 48, 55, 60, 67],
    ],
    chordDur: 10,
    padWave: 'sine',
    padCutoff: 780,
    gain: 0.95,
    melody: [72, 77, 79, 84, 79, 72, 70],
    melodyChance: 0.34,
    bellWave: 'triangle',
    air: 0.08,
    detune: 7,
  },

  // Os dois anos. Quase só ar e uma nota longa.
  tempo: {
    chords: [
      [38, 50, 57, 62],
      [36, 48, 55, 60],
      [41, 53, 60, 65],
      [33, 45, 52, 57],
    ],
    chordDur: 14,
    padWave: 'sine',
    padCutoff: 520,
    gain: 0.8,
    melody: [69, 74, 76, 69, 65],
    melodyChance: 0.16,
    bellWave: 'sine',
    air: 0.16,
    detune: 9,
  },

  // “Depois de tudo… ainda era você.”
  reencontro: {
    chords: [
      [36, 48, 55, 60, 67],
      [43, 55, 62, 67, 74],
      [45, 57, 64, 69, 76],
      [41, 53, 60, 65, 72],
    ],
    chordDur: 8,
    padWave: 'triangle',
    padCutoff: 1150,
    gain: 1.05,
    melody: [72, 76, 79, 84, 88, 84, 79, 76],
    melodyChance: 0.5,
    bellWave: 'sine',
    air: 0.07,
    detune: 4,
  },
}

const midiToHz = (m: number) => 440 * Math.pow(2, (m - 69) / 12)

/** Impulso sintético: uma sala grande, escura e macia. */
function makeImpulse(ctx: AudioContext, seconds = 3.6, decay = 2.6): AudioBuffer {
  const rate = ctx.sampleRate
  const len = Math.floor(rate * seconds)
  const buffer = ctx.createBuffer(2, len, rate)
  for (let ch = 0; ch < 2; ch++) {
    const data = buffer.getChannelData(ch)
    for (let i = 0; i < len; i++) {
      const t = i / len
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay)
    }
  }
  return buffer
}

interface ActiveTheme {
  id: ThemeId
  gain: GainNode
  chordIndex: number
  nextTime: number
  beat: number
  stopped: boolean
}

export class ScoreEngine {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private wet: GainNode | null = null
  private dry: GainNode | null = null
  private timer: number | null = null
  private themes: ActiveTheme[] = []
  private current: ThemeId | null = null

  /** Volume alvo pedido pelo roteiro: trilha bem abaixo da voz. */
  private baseVolume = 0.13
  private duckAmount = 1
  private muted = false

  get isRunning() {
    return this.ctx !== null && this.ctx.state === 'running'
  }

  get playingCue(): MusicCue {
    return this.current ?? 'silencio'
  }

  /** Cria (ou destrava) o contexto. Deve ser chamado dentro de um gesto do usuário. */
  async unlock(): Promise<boolean> {
    if (!this.ctx) {
      const Ctor: typeof AudioContext | undefined =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Ctor) return false
      try {
        this.ctx = new Ctor()
      } catch {
        return false
      }
      this.buildGraph()
    }
    try {
      await this.ctx.resume()
    } catch {
      /* silêncio: a experiência continua sem áudio */
    }
    return this.ctx.state === 'running'
  }

  private buildGraph() {
    const ctx = this.ctx!
    this.master = ctx.createGain()
    this.master.gain.value = 0
    this.master.connect(ctx.destination)

    const convolver = ctx.createConvolver()
    convolver.buffer = makeImpulse(ctx)

    this.wet = ctx.createGain()
    this.wet.gain.value = 0.55
    this.dry = ctx.createGain()
    this.dry.gain.value = 0.75

    convolver.connect(this.wet)
    this.wet.connect(this.master)
    this.dry.connect(this.master)

    // O convolver é o destino "molhado"; guardamos a entrada nele.
    this.reverbIn = convolver
  }

  private reverbIn: ConvolverNode | null = null

  /** Alvo final de volume, considerando mute e ducking da narração. */
  private targetVolume() {
    if (this.muted || this.current === null) return 0
    return this.baseVolume * this.duckAmount
  }

  private rampMaster(seconds: number) {
    if (!this.ctx || !this.master) return
    const now = this.ctx.currentTime
    const g = this.master.gain
    g.cancelScheduledValues(now)
    g.setValueAtTime(Math.max(g.value, 0.0001), now)
    g.linearRampToValueAtTime(this.targetVolume(), now + seconds)
  }

  setMuted(muted: boolean) {
    this.muted = muted
    this.rampMaster(1.2)
  }

  setVolume(v: number) {
    this.baseVolume = Math.max(0, Math.min(0.35, v))
    this.rampMaster(0.6)
  }

  get volume() {
    return this.baseVolume
  }

  /** Abaixa a trilha enquanto a narração fala (ou em frases importantes). */
  duck(amount: number, seconds = 1.4) {
    this.duckAmount = Math.max(0, Math.min(1, amount))
    this.rampMaster(seconds)
  }

  /**
   * Muda de peça com crossfade longo. A entrada nunca é abrupta.
   * `silencio` apaga a trilha por completo.
   */
  play(cue: MusicCue, fade = 6) {
    if (!this.ctx || !this.master) return
    if (cue === this.current) return

    // Apaga o que estava tocando.
    for (const theme of this.themes) {
      if (theme.stopped) continue
      theme.stopped = true
      const now = this.ctx.currentTime
      theme.gain.gain.cancelScheduledValues(now)
      theme.gain.gain.setValueAtTime(theme.gain.gain.value, now)
      theme.gain.gain.linearRampToValueAtTime(0, now + fade * 0.7)
      const node = theme.gain
      window.setTimeout(() => {
        try {
          node.disconnect()
        } catch {
          /* já desconectado */
        }
      }, fade * 900)
    }
    this.themes = this.themes.filter((t) => !t.stopped)

    if (cue === 'silencio') {
      this.current = null
      this.rampMaster(fade * 0.6)
      this.stopScheduler()
      return
    }

    const gain = this.ctx.createGain()
    gain.gain.value = 0.0001
    gain.connect(this.dry!)
    gain.connect(this.reverbIn!)
    gain.gain.linearRampToValueAtTime(THEMES[cue].gain, this.ctx.currentTime + fade)

    this.themes.push({
      id: cue,
      gain,
      chordIndex: 0,
      nextTime: this.ctx.currentTime + 0.12,
      beat: 0,
      stopped: false,
    })

    this.current = cue
    this.rampMaster(fade)
    this.startScheduler()
  }

  private startScheduler() {
    if (this.timer !== null) return
    this.timer = window.setInterval(() => this.tick(), 120)
  }

  private stopScheduler() {
    if (this.timer === null) return
    window.clearInterval(this.timer)
    this.timer = null
  }

  private tick() {
    if (!this.ctx) return
    const horizon = this.ctx.currentTime + 1.2
    for (const theme of this.themes) {
      if (theme.stopped) continue
      const spec = THEMES[theme.id]
      while (theme.nextTime < horizon) {
        this.scheduleChord(theme, spec, theme.nextTime)
        theme.nextTime += spec.chordDur
        theme.chordIndex = (theme.chordIndex + 1) % spec.chords.length
      }
    }
  }

  private scheduleChord(theme: ActiveTheme, spec: ThemeSpec, at: number) {
    const ctx = this.ctx!
    const chord = spec.chords[theme.chordIndex]
    const dur = spec.chordDur

    chord.forEach((note, i) => {
      const osc = ctx.createOscillator()
      osc.type = spec.padWave
      osc.frequency.value = midiToHz(note)
      osc.detune.value = (i % 2 === 0 ? 1 : -1) * spec.detune

      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(spec.padCutoff * 0.6, at)
      filter.frequency.linearRampToValueAtTime(spec.padCutoff, at + dur * 0.45)
      filter.frequency.linearRampToValueAtTime(spec.padCutoff * 0.65, at + dur)
      filter.Q.value = 0.4

      const env = ctx.createGain()
      const peak = (i === 0 ? 0.22 : 0.13) / Math.sqrt(chord.length)
      env.gain.setValueAtTime(0.0001, at)
      env.gain.linearRampToValueAtTime(peak, at + dur * 0.38)
      env.gain.linearRampToValueAtTime(0.0001, at + dur * 1.02)

      osc.connect(filter)
      filter.connect(env)
      env.connect(theme.gain)
      osc.start(at)
      osc.stop(at + dur * 1.08)
    })

    // Sopro de sala: um pouco de ar por cima do acorde.
    if (spec.air > 0.01) {
      const noise = ctx.createBufferSource()
      const len = Math.ceil(ctx.sampleRate * dur)
      const buf = ctx.createBuffer(1, len, ctx.sampleRate)
      const data = buf.getChannelData(0)
      let last = 0
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1
        last = (last + 0.02 * white) / 1.02
        data[i] = last * 3
      }
      noise.buffer = buf
      const nf = ctx.createBiquadFilter()
      nf.type = 'bandpass'
      nf.frequency.value = 620
      nf.Q.value = 0.6
      const ng = ctx.createGain()
      ng.gain.setValueAtTime(0.0001, at)
      ng.gain.linearRampToValueAtTime(spec.air * 0.1, at + dur * 0.5)
      ng.gain.linearRampToValueAtTime(0.0001, at + dur)
      noise.connect(nf)
      nf.connect(ng)
      ng.connect(theme.gain)
      noise.start(at)
      noise.stop(at + dur)
    }

    // Melodia esparsa — nunca no mesmo lugar, para não virar "loop".
    const beats = 4
    for (let b = 0; b < beats; b++) {
      if (Math.random() > spec.melodyChance) continue
      const t = at + (dur / beats) * b + Math.random() * 0.8
      const note = spec.melody[Math.floor(Math.random() * spec.melody.length)]
      this.scheduleBell(theme, spec, note, t)
    }
  }

  private scheduleBell(theme: ActiveTheme, spec: ThemeSpec, note: number, at: number) {
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    osc.type = spec.bellWave
    osc.frequency.value = midiToHz(note)

    const env = ctx.createGain()
    const life = 3.2 + Math.random() * 1.6
    env.gain.setValueAtTime(0.0001, at)
    env.gain.linearRampToValueAtTime(0.055 + Math.random() * 0.02, at + 0.12)
    env.gain.exponentialRampToValueAtTime(0.0001, at + life)

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 2400

    osc.connect(filter)
    filter.connect(env)
    env.connect(theme.gain)
    osc.start(at)
    osc.stop(at + life + 0.1)
  }

  suspend() {
    this.ctx?.suspend().catch(() => undefined)
  }

  resume() {
    this.ctx?.resume().catch(() => undefined)
  }

  dispose() {
    this.stopScheduler()
    this.themes = []
    this.current = null
    this.ctx?.close().catch(() => undefined)
    this.ctx = null
  }
}

export const score = new ScoreEngine()
