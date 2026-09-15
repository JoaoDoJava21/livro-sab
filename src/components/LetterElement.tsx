import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Uma carta colada sobre a página: papel um pouco mais claro, levemente
 * torto, com sombra própria. Usado nas páginas em que o narrador fala
 * diretamente com ela.
 */
export function LetterElement({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="carta"
      initial={{ opacity: 0, y: 14, rotate: -0.8 }}
      animate={{ opacity: 1, y: 0, rotate: -0.45 }}
      transition={{ duration: 2.2, ease: [0.22, 0.61, 0.24, 1] }}
    >
      <div className="carta-conteudo">{children}</div>
      <span className="carta-canto" aria-hidden="true" />
    </motion.div>
  )
}
