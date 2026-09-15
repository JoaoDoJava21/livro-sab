# Nossa História

*Eu, você e todas as páginas que ainda faltam escrever.*

Um livro cinematográfico interativo. Abre como um livro físico, vira páginas
como papel, tem trilha sonora que entra sozinha e narração opcional — e
termina com **CONTINUA…**, nunca com "fim".

---

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # confere o build
```

## Publicar no Netlify

O `netlify.toml` já está pronto. Basta conectar o repositório, ou:

```bash
npm run build
# arraste a pasta dist/ para app.netlify.com/drop
```

Build command `npm run build`, publish directory `dist`.

---

## Como a história é guardada

Nada de texto dentro de componente. **Toda a narrativa vive em `src/data/`**,
em arquivos de capítulo:

```
src/data/
  chapter1.ts   Quando eu te vi pela primeira vez
  chapter2.ts   Quando a gente começou a ser "nós"
  chapter3.ts   Quando ficar longe de você doía mais do que eu sabia
  chapter4.ts   Dois anos
  finale.ts     A declaração, as páginas do futuro e o capítulo 5 em branco
  chapters.ts   Junta tudo
```

### Acrescentar o CAPÍTULO 5

1. Crie `src/data/chapter5.ts`:

```ts
import type { Chapter } from '../types/book'

export const chapter5: Chapter = {
  id: 5,
  rotulo: 'O que a gente viveu depois',
  titulo: 'O nome do capítulo',
  pages: [
    {
      id: 'c5-intro',
      type: 'capitulo',
      titulo: 'Capítulo 5',
      subtitulo: 'O nome do capítulo',
      folhaInteira: true,
      music: 'reencontro',
      mood: 'esperanca',
    },
    {
      id: 'c5-primeira',
      type: 'texto',
      heading: 'O dia',
      mood: 'quente',
      lines: [
        { t: 'Aconteceu assim.', s: 'abertura' },
        { t: 'E foi bonito.', s: 'destaque', pausa: 1200 },
      ],
      gato: { kind: 'sentado', spot: 'inferior-direito', opacity: 0.12 },
    },
  ],
}
```

2. Registre em `src/data/chapters.ts`, **antes** do epílogo:

```ts
export const chapters: Chapter[] = [
  chapter1, chapter2, chapter3,
  { ...chapter4, pages: [...chapter4.pages, ...finalePages] },
  chapter5,
  epilogo,
]
```

Pronto. Paginação, navegação, indicador, música e narração se ajustam sozinhos.

### Tipos de página

| `type` | O que é |
| --- | --- |
| `capitulo` | Abertura de capítulo, em folha inteira |
| `texto` | Página de texto comum |
| `memoria` | Texto + lista de lembranças + fotos |
| `carta` | Um papel colado na página — o narrador falando direto com ela |
| `citacao` | Uma frase só, grande, no meio da página |
| `cena` | Cena cinematográfica (ver `cena:` abaixo) |
| `montagem` | Desfile de pequenas coisas |
| `vazia` | Página do futuro, em branco de propósito |
| `fim-capitulo` | "Fim do capítulo N" |
| `continua` | A última página |

### Estilos de linha (`s:`)

`abertura` (capitular vermelha) · `corpo` · `destaque` (frase grande,
centralizada) · `sussurro` (itálico, mais claro) · `item` (lista delicada) ·
`fala` (com filete à esquerda) · `manuscrito` (use pouquíssimo)

`pausa: 1200` é o silêncio, em ms, que a narração respeita depois da linha.

### Cenas (`cena:`)

`entrada-dela` · `primeiro-beijo` · `apagar` · `dois-anos` · `retrospectiva`
· `maos` · `gato-final`

### Atmosferas (`mood:`)

`quente` · `claro` · `neutro` · `frio` · `escuro` · `esperanca` — muda a luz
que atravessa o papel, não o papel.

### Trilha (`music:`)

`descoberta` · `memoria` · `tempo` · `reencontro` · `silencio`.
A peça só troca quando a página pede; as outras herdam a que está tocando.

---

## Fotos e áudio

- **Fotos**: `public/fotos/LEIA-ME.md`. Enquanto não houver imagem real, a
  moldura fica visivelmente reservada — nada foi inventado.
- **Trilha**: `public/audio/LEIA-ME.md`. As quatro músicas de referência são
  protegidas por direitos autorais e não podem ser distribuídas; no lugar
  delas há quatro peças instrumentais originais, sintetizadas no navegador,
  com a mesma função emocional.
- **Narração**: `public/narracao/LEIA-ME.md`. Por padrão usa a voz de síntese
  do sistema (pt-BR, preferindo voz feminina) — funciona em todo lugar, mas
  ainda soa como computador. Para a voz que o roteiro pede, basta gravar um
  MP3 por página e apontar em `narracaoAudio`. Vem desligada; quem quiser, liga.

---

## Navegação

| | |
| --- | --- |
| Desktop | `←` `→`, `Espaço`, `Home`, `End`, os botões, ou clicar nas laterais |
| Celular | deslizar para o lado, ou tocar nas bordas |

---

## Acessibilidade

- Navegação completa por teclado, com foco visível.
- `aria-label` nos controles e `role="progressbar"` no indicador.
- Respeita `prefers-reduced-motion` — e há um interruptor de animações nos
  ajustes, junto com música, volume e narração.
- Contraste do texto sobre o papel testado para leitura longa.

## Estrutura

```
src/
  audio/        ScoreEngine (trilha) · narration (voz)
  components/   BookExperience, BookCover, BookOpeningAnimation,
                ChapterContainer, BookPage, PageTurn, MemoryScene,
                PhotoFrame, LetterElement, CatDecoration,
                NarrationController, MusicController, ChapterNavigation,
                ProgressIndicator, FinalSequence, FuturePages, Particles
  data/         a história
  hooks/        gestos, parallax, media queries
  lib/          montagem das folhas abertas
  state/        ExperienceContext
  styles/       tokens, base, book, cover, scenes, ui
  types/        o modelo do livro
```
