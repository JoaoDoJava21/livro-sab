import { motion } from 'framer-motion'
import type { FlatPage } from '../data/chapters'
import type { Spread } from '../lib/spreads'
import { PageContent } from './BookPage'

export type Lado = 'esquerda' | 'direita'

export interface Face {
  page?: FlatPage
  /** A página atravessa a lombada e ocupa a folha inteira. */
  larga: boolean
}

/** Qual página aparece em cada metade da folha. */
export function faceDe(spread: Spread | undefined, lado: Lado): Face {
  if (!spread) return { larga: false }
  if (spread.wide) return { page: spread.wide, larga: true }
  return { page: lado === 'esquerda' ? spread.left : spread.right, larga: false }
}

/** A superfície de papel: textura, luz, borda e o conteúdo. */
export function PaperSurface({ face, lado }: { face: Face; lado: Lado }) {
  return (
    <>
      <div className="papel-luz" aria-hidden="true" />
      <div className="papel-textura" aria-hidden="true" />
      <div className="folha-borda" aria-hidden="true" />
      {face.page && (
        <PageContent key={face.page.page.id + lado} page={face.page.page} larguraDupla={face.larga} />
      )}
    </>
  )
}

/** Uma folha parada do livro. */
export function Leaf({ face, lado }: { face: Face; lado: Lado }) {
  return (
    <div className={`folha ${lado}`} data-lado={lado} data-mood={face.page?.page.mood ?? 'neutro'}>
      <PaperSurface face={face} lado={lado} />
    </div>
  )
}

interface TurnProps {
  frente: Face
  verso: Face
  direcao: 'frente' | 'tras'
  duracao: number
  /** No celular a folha só tem um lado, então o verso também é "direita". */
  ladoVerso?: Lado
  onFim?: () => void
}

/**
 * A folha que está virando.
 *
 * Para a frente: sai de 0° e vai até -180°, girando em torno da lombada.
 * Para trás: o caminho inverso. A sombra na face acompanha o giro, e a
 * folha ganha uma curvatura levíssima no meio do movimento — papel de
 * verdade não é uma placa rígida.
 */
export function PageTurn({ frente, verso, direcao, duracao, ladoVerso = 'esquerda', onFim }: TurnProps) {
  const paraFrente = direcao === 'frente'

  return (
    <>
      <motion.div
        className="sombra-virada"
        aria-hidden="true"
        initial={{ opacity: paraFrente ? 0 : 0.9 }}
        animate={{ opacity: paraFrente ? [0, 0.9, 0] : [0.9, 0.5, 0] }}
        transition={{ duration: duracao / 1000, ease: 'easeInOut' }}
      />

      <motion.div
        className="folha-virando"
        aria-hidden="true"
        initial={{ rotateY: paraFrente ? 0 : -180 }}
        animate={{ rotateY: paraFrente ? -180 : 0 }}
        transition={{ duration: duracao / 1000, ease: [0.38, 0.01, 0.2, 1] }}
        onAnimationComplete={onFim}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="face frente"
          data-lado="direita"
          data-mood={frente.page?.page.mood ?? 'neutro'}
          animate={{ scaleX: [1, 0.985, 1] }}
          transition={{ duration: duracao / 1000, ease: 'easeInOut' }}
        >
          <PaperSurface face={frente} lado="direita" />
          <motion.div
            className="face-sombra"
            initial={{ opacity: 0 }}
            animate={{ opacity: paraFrente ? [0, 0.85, 1] : [1, 0.6, 0] }}
            transition={{ duration: duracao / 1000 }}
          />
        </motion.div>

        <div className="face verso" data-lado={ladoVerso} data-mood={verso.page?.page.mood ?? 'neutro'}>
          <PaperSurface face={verso} lado={ladoVerso} />
          <motion.div
            className="face-sombra"
            initial={{ opacity: 1 }}
            animate={{ opacity: paraFrente ? [1, 0.5, 0] : [0, 0.6, 1] }}
            transition={{ duration: duracao / 1000 }}
          />
        </div>
      </motion.div>
    </>
  )
}
