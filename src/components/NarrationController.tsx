import { useExperiencia } from '../state/ExperienceContext'
import { IconePausa, IconePlay, IconeRepetir, IconeVoz, IconeVozDesligada } from './Icons'

/**
 * Narração opcional. Desligada por padrão: quem quiser ouvir, liga.
 * A voz é a do próprio sistema, em português do Brasil.
 */
export function NarrationController() {
  const {
    narracaoLigada,
    narracaoSuportada,
    narrando,
    alternarNarracao,
    pausarNarracao,
    repetirNarracao,
  } = useExperiencia()

  if (!narracaoSuportada) return null

  return (
    <>
      <button
        className="controle"
        onClick={alternarNarracao}
        aria-pressed={narracaoLigada}
        aria-label={narracaoLigada ? 'Desligar a narração' : 'Ligar a narração'}
        title={narracaoLigada ? 'Desligar a narração' : 'Ligar a narração'}
      >
        {narracaoLigada ? <IconeVoz /> : <IconeVozDesligada />}
      </button>

      {narracaoLigada && (
        <>
          <button
            className="controle"
            onClick={pausarNarracao}
            aria-label={narrando ? 'Pausar a narração' : 'Continuar a narração'}
            title={narrando ? 'Pausar' : 'Continuar'}
          >
            {narrando ? <IconePausa /> : <IconePlay />}
          </button>
          <button
            className="controle"
            onClick={repetirNarracao}
            aria-label="Repetir a narração desta página"
            title="Repetir"
          >
            <IconeRepetir />
          </button>
        </>
      )}
    </>
  )
}
