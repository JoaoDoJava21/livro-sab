import { AnimatePresence, motion } from 'framer-motion'
import { useExperiencia } from '../state/ExperienceContext'

function Interruptor({ ligado, onChange, rotulo }: { ligado: boolean; onChange: () => void; rotulo: string }) {
  return (
    <button
      className="interruptor"
      role="switch"
      aria-checked={ligado}
      aria-label={rotulo}
      onClick={onChange}
    />
  )
}

export function SettingsPanel({ aberto }: { aberto: boolean }) {
  const {
    musicaLigada,
    alternarMusica,
    narracaoLigada,
    alternarNarracao,
    narracaoSuportada,
    movimentoReduzido,
    definirMovimentoReduzido,
    volume,
    ajustarVolume,
  } = useExperiencia()

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="painel"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.24, 1] }}
          role="dialog"
          aria-label="Ajustes da experiência"
        >
          <h2>Ajustes</h2>

          <div className="painel-linha">
            <span>Música</span>
            <Interruptor ligado={musicaLigada} onChange={alternarMusica} rotulo="Música" />
          </div>

          <div className="painel-linha">
            <span>Volume da trilha</span>
            <input
              type="range"
              min={0}
              max={0.3}
              step={0.01}
              value={volume}
              onChange={(e) => ajustarVolume(Number(e.target.value))}
              aria-label="Volume da trilha sonora"
            />
          </div>

          {narracaoSuportada && (
            <div className="painel-linha">
              <span>Narração</span>
              <Interruptor ligado={narracaoLigada} onChange={alternarNarracao} rotulo="Narração" />
            </div>
          )}

          <div className="painel-linha">
            <span>Animações</span>
            <Interruptor
              ligado={!movimentoReduzido}
              onChange={() => definirMovimentoReduzido(!movimentoReduzido)}
              rotulo="Animações"
            />
          </div>

          <p className="painel-nota">
            Setas ← → viram a página. No celular, deslize para o lado.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
