import { useExperiencia } from '../state/ExperienceContext'

/** Indicador pequeno: onde estamos no livro, sem atrapalhar a leitura. */
export function ProgressIndicator() {
  const { capituloAtual, totalCapitulos, progresso, folha, spreads } = useExperiencia()

  const rotulo =
    capituloAtual.id <= totalCapitulos
      ? `Capítulo ${capituloAtual.id} / ${totalCapitulos}`
      : 'Capítulo 5 — em branco'

  return (
    <div className="indicador">
      <span className="indicador-texto">{rotulo}</span>
      <div
        className="indicador-barra"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={spreads.length}
        aria-valuenow={folha + 1}
        aria-label="Progresso da leitura"
      >
        <span className="indicador-progresso" style={{ width: `${Math.round(progresso * 100)}%` }} />
      </div>
    </div>
  )
}
