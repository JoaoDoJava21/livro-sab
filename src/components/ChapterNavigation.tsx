import { useExperiencia } from '../state/ExperienceContext'
import { ProgressIndicator } from './ProgressIndicator'

/** Navegação discreta: parte do livro, não uma barra de site. */
export function ChapterNavigation() {
  const { anterior, proxima, folha, spreads, virando } = useExperiencia()

  return (
    <nav className="nav" aria-label="Navegação do livro">
      <button
        className="nav-botao"
        onClick={anterior}
        disabled={folha === 0 || virando}
        aria-label="Página anterior"
      >
        ← anterior
      </button>

      <ProgressIndicator />

      <button
        className="nav-botao"
        onClick={proxima}
        disabled={folha >= spreads.length - 1 || virando}
        aria-label="Próxima página"
      >
        próxima →
      </button>
    </nav>
  )
}
