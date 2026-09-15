import type { CSSProperties, ReactElement } from 'react'
import type { CatKind, CatMark } from '../types/book'

/**
 * Os gatos.
 *
 * São silhuetas, não desenhos infantis: aparecem em poucas páginas, sempre
 * com opacidade baixa, como se estivessem impressos no papel ou deitados
 * ali há muito tempo.
 */

interface SvgProps {
  size?: number
  className?: string
  style?: CSSProperties
  'aria-hidden'?: boolean
}

export function GatoSentado({ size = 72, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 104" width={size} height={(size * 104) / 100} fill="currentColor" {...rest}>
      <path d="M50 99c-15.6 0-25.8-7.4-25.8-20.6 0-16.4 9.3-29.8 18.4-35.2h14.8C66.5 48.6 75.8 62 75.8 78.4 75.8 91.6 65.6 99 50 99Z" />
      <circle cx="50" cy="32" r="16.4" />
      <path d="M35.8 23.6 33.4 6.8l14.4 10.4Z" />
      <path d="M64.2 23.6 66.6 6.8 52.2 17.2Z" />
      <path
        d="M73.4 95c17.4.6 23.6-13.6 15-23.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="6.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GatoDormindo({ size = 96, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 124 66" width={size} height={(size * 66) / 124} fill="currentColor" {...rest}>
      <ellipse cx="62" cy="43" rx="45" ry="19" />
      <circle cx="24" cy="34" r="14" />
      <path d="M13.6 25.6 9.4 12.4l13.2 7.6Z" />
      <path d="M33.4 23.4 41 12l-4.6 13.6Z" />
      <path
        d="M104 44c12.4-1.6 11.2-16.6-3.6-14.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M18 40c4.6 0 7 1.6 8.4 3.4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

export function GatoAndando({ size = 84, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 104 62" width={size} height={(size * 62) / 104} fill="currentColor" {...rest}>
      <ellipse cx="44" cy="29" rx="27" ry="13" />
      <circle cx="78" cy="23" r="11" />
      <path d="M69.4 15.6 68.6 4.4l10.2 7.8Z" />
      <path d="M87.4 15.2 89 4.2 78.6 12Z" />
      <rect x="22" y="38" width="6.4" height="18" rx="3.2" />
      <rect x="35" y="39" width="6.4" height="17" rx="3.2" />
      <rect x="54" y="38" width="6.4" height="18" rx="3.2" />
      <rect x="65" y="39" width="6.4" height="17" rx="3.2" />
      <path
        d="M18.6 26C7 24.6 4.6 12.6 12.4 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GatoEspreitando({ size = 64, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 64" width={size} height={(size * 64) / 100} fill="currentColor" {...rest}>
      <circle cx="50" cy="34" r="21" />
      <path d="M31.4 22.2 27.6 2.8l18.8 12.6Z" />
      <path d="M68.6 22.2 72.4 2.8 53.6 15.4Z" />
      <ellipse cx="33" cy="58" rx="9" ry="5.4" />
      <ellipse cx="67" cy="58" rx="9" ry="5.4" />
    </svg>
  )
}

export function Patinha({ size = 48, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="currentColor" {...rest}>
      <path d="M50 93c-14.4 0-24.8-7.4-24.8-17.6C25.2 65.6 35.6 57 50 57s24.8 8.6 24.8 18.4C74.8 85.6 64.4 93 50 93Z" />
      <ellipse cx="21" cy="47" rx="9.2" ry="12.6" transform="rotate(-24 21 47)" />
      <ellipse cx="39.5" cy="30" rx="9" ry="12.8" transform="rotate(-9 39.5 30)" />
      <ellipse cx="60.5" cy="30" rx="9" ry="12.8" transform="rotate(9 60.5 30)" />
      <ellipse cx="79" cy="47" rx="9.2" ry="12.6" transform="rotate(24 79 47)" />
    </svg>
  )
}

export function Pegadas({ size = 130, ...rest }: SvgProps) {
  const passos = [
    { x: 0, y: 14, r: -18, o: 0.35 },
    { x: 26, y: 4, r: -6, o: 0.5 },
    { x: 54, y: 16, r: 8, o: 0.7 },
    { x: 82, y: 6, r: 16, o: 0.9 },
  ]
  return (
    <svg viewBox="0 0 120 34" width={size} height={(size * 34) / 120} fill="currentColor" {...rest}>
      {passos.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(0.155)`} opacity={p.o}>
          <path d="M50 93c-14.4 0-24.8-7.4-24.8-17.6C25.2 65.6 35.6 57 50 57s24.8 8.6 24.8 18.4C74.8 85.6 64.4 93 50 93Z" />
          <ellipse cx="21" cy="47" rx="9.2" ry="12.6" transform="rotate(-24 21 47)" />
          <ellipse cx="39.5" cy="30" rx="9" ry="12.8" transform="rotate(-9 39.5 30)" />
          <ellipse cx="60.5" cy="30" rx="9" ry="12.8" transform="rotate(9 60.5 30)" />
          <ellipse cx="79" cy="47" rx="9.2" ry="12.6" transform="rotate(24 79 47)" />
        </g>
      ))}
    </svg>
  )
}

export function Novelo({ size = 60, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none" stroke="currentColor" {...rest}>
      <circle cx="50" cy="52" r="34" strokeWidth="4" />
      <path d="M22 38c14 16 32 26 54 30" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 58c18 6 36 18 44 32" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 20c6 22 20 40 42 50" strokeWidth="3" strokeLinecap="round" />
      <path d="M84 52c8-8 14-6 16 2" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

const MAPA: Record<CatKind, (p: SvgProps) => ReactElement> = {
  sentado: GatoSentado,
  dormindo: GatoDormindo,
  andando: GatoAndando,
  espreitando: GatoEspreitando,
  patinha: Patinha,
  pegadas: Pegadas,
  novelo: Novelo,
}

export function CatDecoration({ kind, spot = 'inferior-direito', opacity = 0.12, size = 64 }: CatMark) {
  const Desenho = MAPA[kind]
  return (
    <span className="gato" data-spot={spot} style={{ opacity }} aria-hidden="true">
      <Desenho size={size} />
    </span>
  )
}
