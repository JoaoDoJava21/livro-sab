import { useRef } from 'react'
import { useExperiencia } from '../state/ExperienceContext'
import { faceDe, Leaf, PageTurn } from './PageTurn'
import { Particles } from './Particles'
import { useParallaxMouse, useSwipe } from '../hooks/useGestos'
import { paginaPrincipal } from '../lib/spreads'

const DURACAO = 1150

/**
 * O livro aberto: duas folhas (ou uma, no celular), a folha que vira,
 * a poeira no ar e as áreas invisíveis de toque nas laterais.
 */
export function ChapterContainer() {
  const {
    spreads,
    folha,
    direcao,
    virando,
    paginaUnica,
    movimentoReduzido,
    proxima,
    anterior,
  } = useExperiencia()

  const palcoRef = useRef<HTMLDivElement>(null)
  const livroRef = useParallaxMouse(!paginaUnica && !movimentoReduzido)

  useSwipe(palcoRef, { onAnterior: anterior, onProxima: proxima })

  const atual = spreads[folha]
  const destino = direcao === 'frente' ? spreads[folha + 1] : spreads[folha - 1]

  // Durante a virada, as folhas paradas já mostram as pontas do destino.
  const faceEsquerda = virando
    ? faceDe(direcao === 'frente' ? atual : destino, 'esquerda')
    : faceDe(atual, 'esquerda')

  const faceDireita = virando
    ? faceDe(direcao === 'frente' ? destino : atual, 'direita')
    : faceDe(atual, 'direita')

  // A folha em movimento: frente e verso.
  // No celular a folha tem um lado só, então o verso também é a "direita".
  const ladoVerso = paginaUnica ? 'direita' : 'esquerda'
  const frente = faceDe(direcao === 'frente' ? atual : destino, 'direita')
  const verso = faceDe(direcao === 'frente' ? destino : atual, ladoVerso)

  const principal = paginaPrincipal(atual)

  return (
    <div className="palco-livro" ref={palcoRef}>
      <div
        className="livro"
        ref={livroRef}
        data-modo={paginaUnica ? 'single' : 'spread'}
        role="group"
        aria-roledescription="livro"
        aria-label={`${principal?.chapter.titulo ?? 'Nossa História'} — página ${folha + 1} de ${spreads.length}`}
      >
        {!paginaUnica && <Leaf face={faceEsquerda} lado="esquerda" />}
        <Leaf face={faceDireita} lado="direita" />

        {virando && !movimentoReduzido && (
          <PageTurn
            frente={frente}
            verso={verso}
            direcao={direcao}
            duracao={DURACAO}
            ladoVerso={ladoVerso}
          />
        )}

        <Particles densidade={principal?.page.mood === 'quente' ? 1.2 : 0.8} />
      </div>

      {/* Toque nas laterais: no celular é o jeito mais natural de virar. */}
      <button
        className="toque esquerda"
        onClick={anterior}
        aria-label="Página anterior"
        tabIndex={-1}
        disabled={folha === 0}
      />
      <button
        className="toque direita"
        onClick={proxima}
        aria-label="Próxima página"
        tabIndex={-1}
        disabled={folha >= spreads.length - 1}
      />
    </div>
  )
}
