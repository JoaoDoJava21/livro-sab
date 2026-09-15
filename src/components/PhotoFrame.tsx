import type { PhotoSlot } from '../types/book'

/**
 * Moldura de fotografia.
 *
 * Nenhuma foto foi inventada. Enquanto não houver imagens reais, o espaço
 * fica preparado e visivelmente reservado. Para colocar uma foto de verdade,
 * salve o arquivo em `public/fotos/` e preencha `src` na página:
 *
 *   fotos: [{ src: '/fotos/bonfim.jpg', legenda: 'Bonfim', style: 'polaroid' }]
 */
export function PhotoFrame({ foto, indice = 0 }: { foto: PhotoSlot; indice?: number }) {
  const tilt = foto.tilt ?? (indice % 2 === 0 ? -2.5 : 2.5)
  const estilo = foto.style ?? 'polaroid'

  return (
    <figure className="foto" data-estilo={estilo} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="foto-area">
        {foto.src ? (
          <img src={foto.src} alt={foto.alt ?? foto.legenda ?? 'Uma fotografia nossa'} loading="lazy" decoding="async" />
        ) : (
          <span aria-hidden="true">espaço&nbsp;reservado</span>
        )}
      </div>
      {foto.legenda && <figcaption className="foto-legenda">{foto.legenda}</figcaption>}
      {!foto.src && <span className="visualmente-oculto">Espaço reservado para uma fotografia real.</span>}
    </figure>
  )
}

export function PhotoGroup({ fotos }: { fotos: PhotoSlot[] }) {
  if (!fotos.length) return null
  return (
    <div className="fotos">
      {fotos.map((foto, i) => (
        <PhotoFrame key={i} foto={foto} indice={i} />
      ))}
    </div>
  )
}
