import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useExperiencia } from '../state/ExperienceContext'
import { BookOpeningAnimation } from './BookOpeningAnimation'
import { ChapterContainer } from './ChapterContainer'
import { ChapterNavigation } from './ChapterNavigation'
import { MusicController } from './MusicController'
import { NarrationController } from './NarrationController'
import { SettingsPanel } from './SettingsPanel'
import { IconeAjustes } from './Icons'

/** A experiência inteira: a sala, o livro e a interface quase invisível. */
export function BookExperience() {
  const { palco, precisaDeGesto, destravarSom, folha } = useExperiencia()
  const [ajustes, setAjustes] = useState(false)
  const [mostrarDica, setMostrarDica] = useState(true)

  useEffect(() => {
    if (folha > 0) setMostrarDica(false)
  }, [folha])

  useEffect(() => {
    if (palco !== 'lendo') return
    const id = window.setTimeout(() => setMostrarDica(false), 9000)
    return () => window.clearTimeout(id)
  }, [palco])

  const lendo = palco === 'lendo'

  return (
    <div className="sala" data-palco={lendo ? 'lendo' : 'capa'}>
      <AnimatePresence mode="wait">
        {lendo ? (
          <motion.div
            key="livro"
            style={{ width: '100%', height: '100%' }}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 0.61, 0.24, 1] }}
          >
            <ChapterContainer />
          </motion.div>
        ) : (
          <motion.div
            key="capa"
            style={{ width: '100%', height: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <BookOpeningAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ui">
        {lendo && (
          <>
            <div className="controles">
              <MusicController />
              <NarrationController />
              <button
                className="controle"
                onClick={() => setAjustes((v) => !v)}
                aria-expanded={ajustes}
                aria-label="Ajustes"
                title="Ajustes"
              >
                <IconeAjustes />
              </button>
            </div>

            <SettingsPanel aberto={ajustes} />
            <ChapterNavigation />

            <AnimatePresence>
              {mostrarDica && (
                <motion.p
                  className="dica"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, delay: 2 }}
                >
                  deslize, clique ou use as setas para virar a página
                </motion.p>
              )}
            </AnimatePresence>
          </>
        )}

        <AnimatePresence>
          {lendo && precisaDeGesto && (
            <motion.button
              className="ativar-som"
              onClick={() => void destravarSom()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              Ativar som
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="vinheta" aria-hidden="true" />
      <div className="grao" aria-hidden="true" />
    </div>
  )
}
