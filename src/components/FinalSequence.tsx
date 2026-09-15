import { motion } from 'framer-motion'
import type { Page } from '../types/book'
import { GatoAndando, Patinha } from './CatDecoration'
import { Linhas } from './BookPage'

/**
 * A sequência final: a retrospectiva, as duas mãos escrevendo no mesmo
 * livro e o gato que atravessa a última página — para, olha para trás,
 * e continua andando.
 */
export function FinalSequence({ page }: { page: Page }) {
  switch (page.cena) {
    case 'retrospectiva':
      return <Retrospectiva page={page} />
    case 'maos':
      return <Maos page={page} />
    case 'gato-final':
      return <GatoFinal page={page} />
    default:
      return null
  }
}

function Retrospectiva({ page }: { page: Page }) {
  const itens = page.itens ?? []
  const trilha = [...itens, ...itens]

  return (
    <div className="cena">
      <motion.h2
        className="cena-titulo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.6 }}
      >
        {page.titulo}
      </motion.h2>

      <div className="retrospectiva">
        <motion.div
          className="retrospectiva-trilha"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 52, ease: 'linear', repeat: Infinity }}
        >
          {trilha.map((item, i) => (
            <span className="retrospectiva-item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="filete"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 3, delay: 1.2 }}
      />
    </div>
  )
}

function Maos({ page }: { page: Page }) {
  return (
    <div className="cena">
      <div className="janela-luz" aria-hidden="true" />
      <div className="janela-grade" aria-hidden="true" />

      <motion.h2
        className="cena-titulo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4 }}
      >
        {page.titulo}
      </motion.h2>

      <div className="manuscrito-cena">
        <motion.p
          className="manuscrito-linha"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 1 }}
        >
          nós
        </motion.p>
        <motion.p
          className="manuscrito-linha segunda"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 2.4 }}
        >
          dois
        </motion.p>
        <motion.div
          className="linha-tinta"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, delay: 3.4 }}
        />
        <motion.p
          className="manuscrito-linha juntas"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 4 }}
        >
          juntos
        </motion.p>
        <motion.span
          aria-hidden="true"
          style={{ color: 'var(--rosa-queimado)', display: 'inline-block' }}
          initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
          animate={{ opacity: 0.45, scale: 1, rotate: -8 }}
          transition={{ duration: 1.4, delay: 5.2 }}
        >
          <Patinha size={34} />
        </motion.span>
      </div>

      <Linhas lines={page.lines} atrasoBase={6} />
    </div>
  )
}

function GatoFinal({ page }: { page: Page }) {
  return (
    <div className="cena">
      <motion.p
        className="continua"
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, letterSpacing: '0.24em' }}
        transition={{ duration: 3.6, ease: [0.22, 0.61, 0.24, 1] }}
      >
        Continua…
      </motion.p>

      <motion.p
        className="continua-nota"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 6.4 }}
      >
        Próxima página: nós dois escrevendo juntos.
      </motion.p>

      {/* Ele atravessa, para, olha para trás — e segue. */}
      <motion.div
        className="gato-caminhada"
        aria-hidden="true"
        animate={{ x: ['-14%', '40%', '40%', '116%'] }}
        transition={{ duration: 16, times: [0, 0.4, 0.62, 1], delay: 1.4, ease: 'linear' }}
      >
        <motion.div
          style={{ display: 'inline-block' }}
          animate={{ scaleX: [1, 1, -1, -1, 1, 1] }}
          transition={{ duration: 16, times: [0, 0.42, 0.46, 0.58, 0.62, 1], delay: 1.4 }}
        >
          <GatoAndando size={62} />
        </motion.div>
      </motion.div>

      <span className="visualmente-oculto">{page.titulo}</span>
    </div>
  )
}
