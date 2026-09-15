import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface Opcoes {
  onAnterior: () => void
  onProxima: () => void
  ativo?: boolean
}

/** Swipe no celular e arrasto curto no desktop. */
export function useSwipe<T extends HTMLElement>(ref: RefObject<T>, { onAnterior, onProxima, ativo = true }: Opcoes) {
  const inicio = useRef<{ x: number; y: number; t: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !ativo) return

    const comecar = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      inicio.current = { x: e.clientX, y: e.clientY, t: performance.now() }
    }

    const terminar = (e: PointerEvent) => {
      const i = inicio.current
      inicio.current = null
      if (!i) return
      const dx = e.clientX - i.x
      const dy = e.clientY - i.y
      const dt = performance.now() - i.t
      if (Math.abs(dx) < 46 || Math.abs(dx) < Math.abs(dy) * 1.4 || dt > 900) return
      if (dx < 0) onProxima()
      else onAnterior()
    }

    el.addEventListener('pointerdown', comecar, { passive: true })
    el.addEventListener('pointerup', terminar, { passive: true })
    el.addEventListener('pointercancel', () => (inicio.current = null), { passive: true })
    return () => {
      el.removeEventListener('pointerdown', comecar)
      el.removeEventListener('pointerup', terminar)
    }
  }, [ref, onAnterior, onProxima, ativo])
}

/** Inclinação levíssima do livro seguindo o mouse — só no desktop. */
export function useParallaxMouse(ativo: boolean) {
  const alvo = useRef({ x: 0, y: 0 })
  const atual = useRef({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ativo) {
      const el = ref.current
      if (el) el.style.transform = ''
      return
    }
    let raf = 0

    const mover = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      alvo.current = { x: nx, y: ny }
    }

    const laco = () => {
      atual.current.x += (alvo.current.x - atual.current.x) * 0.045
      atual.current.y += (alvo.current.y - atual.current.y) * 0.045
      const el = ref.current
      if (el) {
        el.style.transform = `rotateY(${atual.current.x * 2.6}deg) rotateX(${-atual.current.y * 1.8}deg) translateZ(0)`
      }
      raf = requestAnimationFrame(laco)
    }

    window.addEventListener('mousemove', mover, { passive: true })
    raf = requestAnimationFrame(laco)
    return () => {
      window.removeEventListener('mousemove', mover)
      cancelAnimationFrame(raf)
    }
  }, [ativo])

  return ref
}
