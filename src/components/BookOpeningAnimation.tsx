import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bookMeta } from '../data/chapters'
import { useExperiencia } from '../state/ExperienceContext'
import { BookCover } from './BookCover'
import { GatoAndando } from './CatDecoration'

/**
 * A abertura.
 *
 * O livro respira. A capa se abre sozinha, devagar, como se alguém
 * estivesse abrindo de verdade. As primeiras folhas passam. Tudo escurece
 * por um instante — e então começa o Capítulo 1.
 */

type Fase = 'capa' | 'abrindo' | 'folheando' | 'escuro'

export function BookOpeningAnimation() {
  const { palco, abrirLivro, entrarNaHistoria, movimentoReduzido } = useExperiencia()
  const [fase, setFase] = useState<Fase>('capa')

  useEffect(() => {
    if (palco !== 'abrindo') return
    const r = movimentoReduzido ? 0.25 : 1
    const marcas: [number, Fase][] = [
      [0, 'abrindo'],
      [3400 * r, 'folheando'],
      [6400 * r, 'escuro'],
    ]
    const ids = marcas.map(([t, f]) => window.setTimeout(() => setFase(f), t))
    const fim = window.setTimeout(() => entrarNaHistoria(), 9200 * r)
    return () => {
      ids.forEach(window.clearTimeout)
      window.clearTimeout(fim)
    }
  }, [palco, entrarNaHistoria, movimentoReduzido])

  const aberto = fase !== 'capa'

  return (
    <>
      <BookCover
        aberto={aberto}
        onAbrir={palco === 'capa' ? abrirLivro : undefined}
        movimentoReduzido={movimentoReduzido}
      />

      {/* Um gato atravessa a cena, bem devagar, antes de tudo começar. */}
      {palco === 'capa' && !movimentoReduzido && (
        <motion.div
          aria-hidden="true"
          style={{ position: 'absolute', bottom: '13%', color: 'rgba(201,167,94,0.28)', zIndex: 2 }}
          initial={{ x: '-12vw' }}
          animate={{ x: '112vw' }}
          transition={{ duration: 52, repeat: Infinity, ease: 'linear', delay: 6 }}
        >
          <GatoAndando size={54} />
        </motion.div>
      )}

      {/* As primeiras folhas passando. */}
      <AnimatePresence>
        {fase === 'folheando' && !movimentoReduzido && (
          <div className="folheando" aria-hidden="true">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="folha-abertura"
                initial={{ rotateY: 0, opacity: 1 }}
                animate={{ rotateY: -178, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.85, ease: [0.38, 0.01, 0.2, 1] }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Tudo fica escuro por um instante. */}
      <AnimatePresence>
        {fase === 'escuro' && (
          <motion.div
            className="escuro-total"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            <motion.p
              className="dedicatoria"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 6, times: [0, 0.22, 0.74, 1], delay: 0.8 }}
            >
              {bookMeta.dedicatoria.map((linha) => (
                <span key={linha}>
                  {linha}
                  <br />
                </span>
              ))}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
