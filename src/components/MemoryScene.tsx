import { motion } from 'framer-motion'
import type { Page } from '../types/book'
import { Linhas } from './BookPage'
import { FinalSequence } from './FinalSequence'

/**
 * As cenas: os momentos em que a página deixa de ser texto e vira imagem.
 * Nenhuma delas conta nada que não tenha sido contado — elas só mudam a luz.
 */
export function MemoryScene({ page }: { page: Page }) {
  switch (page.cena) {
    case 'entrada-dela':
      return <EntradaDela page={page} />
    case 'primeiro-beijo':
      return <PrimeiroBeijo page={page} />
    case 'apagar':
      return <Apagando page={page} />
    case 'dois-anos':
      return <DoisAnos />
    case 'retrospectiva':
    case 'maos':
    case 'gato-final':
      return <FinalSequence page={page} />
    default:
      return (
        <div className="cena">
          {page.titulo && <h2 className="cena-titulo">{page.titulo}</h2>}
          <Linhas lines={page.lines} />
        </div>
      )
  }
}

function EntradaDela({ page }: { page: Page }) {
  return (
    <div className="cena">
      <div className="porta" aria-hidden="true">
        <motion.div
          className="porta-feixe"
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: [0, 0.9, 0.62], scaleY: 1 }}
          transition={{ duration: 5.2, ease: [0.22, 0.61, 0.24, 1] }}
        />
        <motion.div
          className="porta-moldura"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.4 }}
        />
      </div>

      <motion.h2
        className="cena-titulo"
        initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 3.4, delay: 0.8, ease: [0.22, 0.61, 0.24, 1] }}
      >
        {page.titulo}
      </motion.h2>

      <Linhas lines={page.lines} atrasoBase={1.6} />
    </div>
  )
}

function PrimeiroBeijo({ page }: { page: Page }) {
  return (
    <div className="cena">
      <motion.div
        className="clarao"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: [0, 0.85, 0.3], scale: [0.7, 1.12, 1] }}
        transition={{ duration: 5.5, times: [0, 0.35, 1], ease: 'easeOut' }}
      />
      <motion.div
        className="borda-acesa"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.45] }}
        transition={{ duration: 6, times: [0, 0.3, 1] }}
      />

      {page.heading && <div className="pagina-cabecalho">{page.heading}</div>}

      <motion.h2
        className="cena-titulo"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 0.61, 0.24, 1] }}
      >
        {page.titulo}
      </motion.h2>

      <Linhas lines={page.lines} atrasoBase={1.2} />
    </div>
  )
}

function Apagando({ page }: { page: Page }) {
  return (
    <div className="cena">
      <motion.div
        className="apagando"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: 'easeIn' }}
      />
      <motion.h2
        className="cena-titulo"
        style={{ position: 'relative', zIndex: 2, color: 'var(--papel-300)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.6 }}
      >
        {page.titulo}
      </motion.h2>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Linhas lines={page.lines} atrasoBase={1.8} />
      </div>
    </div>
  )
}

function DoisAnos() {
  const meses = Array.from({ length: 24 })

  return (
    <div className="dois-anos">
      <div className="chuva" aria-hidden="true" />

      <motion.div
        className="dois-anos-numero"
        initial={{ opacity: 0, letterSpacing: '0.3em' }}
        animate={{ opacity: 1, letterSpacing: '0.02em' }}
        transition={{ duration: 6, ease: [0.22, 0.61, 0.24, 1] }}
      >
        2 anos
      </motion.div>

      <motion.div
        className="calendario"
        aria-hidden="true"
        initial="oculto"
        animate="visivel"
        variants={{ visivel: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }}
      >
        {meses.map((_, i) => (
          <motion.span
            key={i}
            variants={{ oculto: { opacity: 0 }, visivel: { opacity: 0.55 } }}
            transition={{ duration: 0.9 }}
          />
        ))}
      </motion.div>

      <div className="relogio" aria-hidden="true" />

      <motion.div
        className="estacoes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2.4 }}
      >
        <span>chuva</span>
        <span>sol</span>
        <span>noite</span>
        <span>dia</span>
      </motion.div>

      <motion.p
        className="linha sussurro"
        style={{ textAlign: 'center', marginTop: '1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3.6 }}
      >
        O tempo passou. Mas algumas coisas não passaram.
      </motion.p>
    </div>
  )
}
