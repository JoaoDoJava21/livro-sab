import { motion } from 'framer-motion'
import { bookMeta } from '../data/chapters'
import { GatoAndando, GatoDormindo, GatoEspreitando, GatoSentado, Patinha } from './CatDecoration'

/**
 * A capa.
 *
 * Um livro de romance encadernado em vinho, com filete dourado e vários
 * gatos integrados ao desenho — sentados, olhando para cima, dormindo,
 * um espiando por cima do filete. Silhuetas, nunca desenhos infantis.
 */

function GatosDaCapa() {
  return (
    <div className="capa-gatos" aria-hidden="true">
      {/* Os dois que ficam juntos, embaixo do título. */}
      <GatoSentado size={58} style={{ left: '20%', bottom: '17%', opacity: 0.5 }} />
      <GatoSentado size={44} style={{ left: '30%', bottom: '17%', opacity: 0.34 }} />

      {/* O que dorme no canto de cima. */}
      <GatoDormindo size={74} style={{ right: '13%', top: '11%', opacity: 0.26 }} />

      {/* O que atravessa, pequeno, perto do rodapé. */}
      <GatoAndando size={48} style={{ right: '19%', bottom: '18%', opacity: 0.38 }} />

      {/* O que espia por cima do filete. */}
      <GatoEspreitando size={40} style={{ left: '50%', top: '7%', transform: 'translateX(-50%)', opacity: 0.3 }} />

      {/* Duas patinhas quase invisíveis. */}
      <Patinha size={22} style={{ left: '14%', top: '26%', opacity: 0.2, transform: 'rotate(-18deg)' }} />
      <Patinha size={16} style={{ right: '26%', bottom: '38%', opacity: 0.16, transform: 'rotate(12deg)' }} />
    </div>
  )
}

function Ornamento() {
  return (
    <svg className="capa-ornamento" viewBox="0 0 240 26" fill="none" aria-hidden="true">
      <path d="M10 13h78" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path d="M152 13h78" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path
        d="M120 5.6c-3.4-4.2-10.6-3.2-10.6 2.2 0 4.4 6.2 8.4 10.6 12.4 4.4-4 10.6-8 10.6-12.4 0-5.4-7.2-6.4-10.6-2.2Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="98" cy="13" r="1.6" fill="currentColor" opacity="0.7" />
      <circle cx="142" cy="13" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

interface Props {
  aberto: boolean
  onAbrir?: () => void
  movimentoReduzido: boolean
}

export function BookCover({ aberto, onAbrir, movimentoReduzido }: Props) {
  return (
    <div className="capa-palco">
      <motion.div
        className="capa-livro"
        initial={{ rotateY: -22, rotateX: 7, scale: 0.94, opacity: 0 }}
        animate={
          aberto
            ? { rotateY: -6, rotateX: 3, scale: 1.06, opacity: 1, y: -10 }
            : { rotateY: -17, rotateX: 6, scale: 1, opacity: 1 }
        }
        transition={{ duration: aberto ? 3.4 : 2.6, ease: [0.22, 0.61, 0.24, 1] }}
      >
        <div className="capa-sombra" aria-hidden="true" />
        <div className="capa-miolo" aria-hidden="true" />

        <motion.div
          className="capa"
          animate={
            aberto
              ? { rotateY: -164 }
              : movimentoReduzido
                ? { rotateY: 0 }
                : { rotateY: [0, -1.4, 0], y: [0, -4, 0] }
          }
          transition={
            aberto
              ? { duration: 3.2, ease: [0.42, 0, 0.18, 1], delay: 0.5 }
              : { duration: 9, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <div className="capa-couro" aria-hidden="true" />
          <div className="capa-uso" aria-hidden="true" />
          <div className="capa-lombada" aria-hidden="true" />
          <div className="capa-filete" aria-hidden="true" />

          {!movimentoReduzido && (
            <motion.div
              className="capa-brilho"
              aria-hidden="true"
              animate={{ x: ['-28%', '28%', '-28%'] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          <GatosDaCapa />

          <div className="capa-conteudo">
            <div />
            <div>
              <motion.h1
                className="capa-titulo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.6, delay: 0.5, ease: [0.22, 0.61, 0.24, 1] }}
              >
                <span>Nossa</span>
                <span>História</span>
              </motion.h1>
              <Ornamento />
              <motion.p
                className="capa-subtitulo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.6, delay: 1.2 }}
              >
                {bookMeta.subtitulo}
              </motion.p>
            </div>
            <motion.div
              className="capa-rodape"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.4, delay: 1.9 }}
            >
              {bookMeta.rodape}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {!aberto && onAbrir && (
        <motion.button
          className="capa-chamada"
          onClick={onAbrir}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.6 }}
        >
          Abrir o livro
        </motion.button>
      )}
    </div>
  )
}
