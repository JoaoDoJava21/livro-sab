import { motion } from 'framer-motion'
import type { Page } from '../types/book'
import { Linhas } from './BookPage'

/**
 * As páginas que ainda não foram vividas.
 *
 * Elas ficam em branco de propósito — não há nada inventado aqui. Só a
 * pauta esperando, e o título do que ainda vai acontecer.
 */
export function FuturePage({ page }: { page: Page }) {
  return (
    <div className="pagina-futuro">
      {page.titulo && (
        <motion.h2
          className="pagina-futuro-titulo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.6, ease: [0.22, 0.61, 0.24, 1] }}
        >
          {page.titulo}
        </motion.h2>
      )}

      <motion.div
        className="pauta"
        aria-hidden="true"
        initial="oculto"
        animate="visivel"
        variants={{ visivel: { transition: { staggerChildren: 0.22, delayChildren: 0.8 } } }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            variants={{ oculto: { opacity: 0, scaleX: 0.6 }, visivel: { opacity: 1, scaleX: 1 } }}
            transition={{ duration: 1.6, ease: [0.22, 0.61, 0.24, 1] }}
          />
        ))}
      </motion.div>

      <Linhas lines={page.lines} atrasoBase={1.8} />
    </div>
  )
}
