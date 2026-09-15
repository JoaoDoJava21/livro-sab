import { useExperiencia } from '../state/ExperienceContext'
import { IconeMudo, IconeMusica } from './Icons'

/**
 * A trilha nunca se anuncia. Este botão só existe para quem quiser
 * desligá-la — e para quem o navegador impediu de ouvi-la.
 */
export function MusicController() {
  const { musicaLigada, alternarMusica } = useExperiencia()

  return (
    <button
      className="controle"
      onClick={alternarMusica}
      aria-pressed={musicaLigada}
      aria-label={musicaLigada ? 'Desligar a música' : 'Ligar a música'}
      title={musicaLigada ? 'Desligar a música' : 'Ligar a música'}
    >
      {musicaLigada ? <IconeMusica /> : <IconeMudo />}
    </button>
  )
}
