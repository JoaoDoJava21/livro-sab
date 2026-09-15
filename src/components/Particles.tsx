import { useEffect, useRef } from 'react'
import { useExperiencia } from '../state/ExperienceContext'

/**
 * Poeira no ar: partículas pequeníssimas atravessando a luz.
 * Poucas, lentas, quase imperceptíveis — e nenhuma se o usuário pediu
 * menos movimento.
 */
export function Particles({ densidade = 1 }: { densidade?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { movimentoReduzido } = useExperiencia()

  useEffect(() => {
    if (movimentoReduzido) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let largura = 0
    let altura = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Menos partículas em aparelhos modestos.
    const nucleos = navigator.hardwareConcurrency ?? 4
    const base = nucleos <= 4 ? 16 : 30

    interface Particula {
      x: number
      y: number
      r: number
      vx: number
      vy: number
      a: number
      fase: number
    }
    let particulas: Particula[] = []

    const medir = () => {
      const rect = canvas.getBoundingClientRect()
      largura = rect.width
      altura = rect.height
      canvas.width = Math.floor(largura * dpr)
      canvas.height = Math.floor(altura * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const total = Math.round(base * densidade)
      particulas = Array.from({ length: total }, () => ({
        x: Math.random() * largura,
        y: Math.random() * altura,
        r: 0.5 + Math.random() * 1.3,
        vx: (Math.random() - 0.5) * 0.09,
        vy: -0.045 - Math.random() * 0.08,
        a: 0.08 + Math.random() * 0.22,
        fase: Math.random() * Math.PI * 2,
      }))
    }

    medir()
    const ro = new ResizeObserver(medir)
    ro.observe(canvas)

    let t = 0
    const laco = () => {
      t += 0.006
      ctx.clearRect(0, 0, largura, altura)
      for (const p of particulas) {
        p.x += p.vx + Math.sin(t + p.fase) * 0.06
        p.y += p.vy
        if (p.y < -6) {
          p.y = altura + 6
          p.x = Math.random() * largura
        }
        if (p.x < -6) p.x = largura + 6
        if (p.x > largura + 6) p.x = -6
        const brilho = p.a * (0.6 + 0.4 * Math.sin(t * 2 + p.fase))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 232, 202, ${brilho})`
        ctx.fill()
      }
      raf = requestAnimationFrame(laco)
    }
    raf = requestAnimationFrame(laco)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [densidade, movimentoReduzido])

  if (movimentoReduzido) return null
  return <canvas ref={canvasRef} className="poeira" aria-hidden="true" />
}
