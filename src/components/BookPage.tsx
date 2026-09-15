import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Line, Page } from '../types/book'
import { CatDecoration } from './CatDecoration'
import { PhotoGroup } from './PhotoFrame'
import { MemoryScene } from './MemoryScene'
import { LetterElement } from './LetterElement'
import { FuturePage } from './FuturePages'

/** Uma linha de texto entra devagar, nunca "pulando". */
export function Linhas({ lines, atrasoBase = 0 }: { lines?: Line[]; atrasoBase?: number }) {
  if (!lines?.length) return null
  return (
    <>
      {lines.map((linha, i) => (
        <motion.p
          key={i}
          className={`linha ${linha.s ?? 'corpo'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: atrasoBase + i * 0.34,
            ease: [0.22, 0.61, 0.24, 1],
          }}
        >
          {linha.t}
        </motion.p>
      ))}
    </>
  )
}

function Itens({ itens, atrasoBase = 0 }: { itens?: string[]; atrasoBase?: number }) {
  if (!itens?.length) return null
  return (
    <div className="montagem">
      {itens.map((item, i) => (
        <motion.span
          className="montagem-item"
          key={item + i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: atrasoBase + i * 0.22, ease: [0.22, 0.61, 0.24, 1] }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

function AberturaDeCapitulo({ page }: { page: Page }) {
  return (
    <div className="capitulo-abertura">
      <motion.div
        className="capitulo-numero"
        initial={{ opacity: 0, letterSpacing: '0.9em' }}
        animate={{ opacity: 1, letterSpacing: '0.56em' }}
        transition={{ duration: 3, ease: [0.22, 0.61, 0.24, 1] }}
      >
        {page.titulo}
      </motion.div>
      <motion.div
        className="filete"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.7 }}
      />
      {page.subtitulo && (
        <motion.h2
          className="capitulo-titulo"
          initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 3.2, delay: 1, ease: [0.22, 0.61, 0.24, 1] }}
        >
          {page.subtitulo}
        </motion.h2>
      )}
    </div>
  )
}

function FimDeCapitulo({ page }: { page: Page }) {
  return (
    <div className="fim-capitulo">
      <motion.div
        className="filete"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.6 }}
      />
      <motion.p
        className="fim-capitulo-texto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8 }}
      >
        {page.titulo}
      </motion.p>
      <motion.div
        className="filete"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.6, delay: 0.4 }}
      />
    </div>
  )
}

/**
 * O conteúdo de uma página. Tudo vem do dado — nenhum texto mora aqui.
 */
export function PageContent({ page, larguraDupla = false }: { page: Page; larguraDupla?: boolean }) {
  const classes = ['pagina']
  if (larguraDupla) classes.push('largura-dupla')

  let corpo: ReactNode

  switch (page.type) {
    case 'capitulo':
      corpo = <AberturaDeCapitulo page={page} />
      break
    case 'fim-capitulo':
      corpo = <FimDeCapitulo page={page} />
      break
    case 'vazia':
      corpo = <FuturePage page={page} />
      break
    case 'cena':
    case 'continua':
      corpo = <MemoryScene page={page} />
      break
    case 'montagem':
      corpo = (
        <div className="pagina-corpo">
          {page.cena ? (
            <MemoryScene page={page} />
          ) : (
            <>
              {page.titulo && <h2 className="cena-titulo">{page.titulo}</h2>}
              <Linhas lines={page.lines} />
              <Itens itens={page.itens} atrasoBase={(page.lines?.length ?? 0) * 0.34} />
            </>
          )}
        </div>
      )
      break
    case 'carta':
      corpo = (
        <LetterElement>
          <Linhas lines={page.lines} />
          <Itens itens={page.itens} atrasoBase={(page.lines?.length ?? 0) * 0.34} />
        </LetterElement>
      )
      break
    default:
      corpo = (
        <div className="pagina-corpo">
          <Linhas lines={page.lines} />
          <Itens itens={page.itens} atrasoBase={(page.lines?.length ?? 0) * 0.34} />
          {page.fotos && <PhotoGroup fotos={page.fotos} />}
        </div>
      )
  }

  const mostraCabecalho =
    page.heading && page.type !== 'capitulo' && page.type !== 'cena' && page.type !== 'continua'

  return (
    <article className={classes.join(' ')} data-tipo={page.type} data-mood={page.mood ?? 'neutro'}>
      {mostraCabecalho && <div className="pagina-cabecalho">{page.heading}</div>}
      {corpo}
      {page.gato && <CatDecoration {...page.gato} />}
    </article>
  )
}
