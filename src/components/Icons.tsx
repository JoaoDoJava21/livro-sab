const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const IconeMusica = () => (
  <svg {...base}>
    <path d="M9 18V5l10-2v13" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
  </svg>
)

export const IconeMudo = () => (
  <svg {...base}>
    <path d="M9 18V5l10-2v13" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
    <path d="M3 3l18 18" />
  </svg>
)

export const IconeVoz = () => (
  <svg {...base}>
    <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </svg>
)

export const IconeVozDesligada = () => (
  <svg {...base}>
    <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M3 3l18 18" />
  </svg>
)

export const IconePausa = () => (
  <svg {...base}>
    <path d="M9 5v14M15 5v14" />
  </svg>
)

export const IconePlay = () => (
  <svg {...base}>
    <path d="M7 4.5v15l12-7.5z" />
  </svg>
)

export const IconeRepetir = () => (
  <svg {...base}>
    <path d="M3 11a8 8 0 0 1 13.7-5.6L21 9" />
    <path d="M21 4v5h-5" />
    <path d="M21 13a8 8 0 0 1-13.7 5.6L3 15" />
    <path d="M3 20v-5h5" />
  </svg>
)

export const IconeAjustes = () => (
  <svg {...base}>
    <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </svg>
)
