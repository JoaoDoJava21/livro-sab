import type { Chapter } from '../types/book'

/** CAPÍTULO 3 — Quando ficar longe de você doía mais do que eu sabia. */
export const chapter3: Chapter = {
  id: 3,
  rotulo: 'Quando doeu',
  titulo: 'Quando ficar longe de você doía mais do que eu sabia',
  pages: [
    {
      id: 'c3-intro',
      type: 'capitulo',
      titulo: 'Capítulo 3',
      subtitulo: 'Quando ficar longe de você doía mais do que eu sabia',
      mood: 'escuro',
      music: 'tempo',
      folhaInteira: true,
      narracao: 'Capítulo três. Quando ficar longe de você doía mais do que eu sabia.',
    },

    {
      id: 'c3-primeira-falta',
      type: 'texto',
      heading: 'A primeira separação',
      mood: 'frio',
      music: 'tempo',
      lines: [
        { t: 'A primeira separação foi horrível pra mim.', s: 'abertura' },
        { t: 'Eu gostava muito de você.' },
        { t: 'E estar longe era a pior parte.', pausa: 1000 },
        { t: 'Não era só sentir falta de alguém.', s: 'sussurro' },
        { t: 'Era sentir falta de uma parte da minha rotina.' },
        { t: 'Da pessoa que fazia parte dos meus dias.' },
        { t: 'Da pessoa que eu queria ver.' },
        { t: 'Da pessoa que eu queria perto.', s: 'destaque' },
      ],
    },

    {
      id: 'c3-retorno',
      type: 'texto',
      heading: 'O retorno',
      mood: 'neutro',
      lines: [
        { t: 'Depois de uns três ou quatro meses, a gente voltou.' },
        { t: 'E quando voltou, tentou fazer diferente.', pausa: 800 },
        { t: 'Tentou melhorar.' },
        { t: 'Ainda tinha briga.' },
        { t: 'Mas menos.', s: 'sussurro', pausa: 900 },
        { t: 'A gente realmente tentava.', s: 'destaque' },
      ],
      gato: { kind: 'sentado', spot: 'inferior-direito', opacity: 0.1, size: 66 },
    },

    {
      id: 'c3-tentar-demais',
      type: 'texto',
      heading: 'Quando tentar demais também machuca',
      mood: 'neutro',
      lines: [
        { t: 'A ironia da nossa história:' },
        { t: 'a gente queria tanto fazer dar certo…', s: 'sussurro' },
        { t: 'que qualquer problema pequeno começou a parecer enorme.', pausa: 1000 },
        { t: 'Qualquer coisa podia virar uma discussão.' },
        { t: 'E muitas vezes era eu que transformava coisa pequena em briga.', s: 'destaque' },
      ],
    },

    {
      id: 'c3-nao-sabia',
      type: 'carta',
      mood: 'neutro',
      lines: [
        { t: 'Não porque eu queria te machucar.' },
        { t: 'Mas porque eu não sabia resolver conflito.', pausa: 900 },
        { t: 'Eu sentia tudo demais.' },
        { t: 'E quando você sente tudo demais, às vezes não sabe o que fazer com aquilo.', s: 'destaque' },
      ],
    },

    {
      id: 'c3-ciume',
      type: 'texto',
      heading: 'Ciúme e insegurança',
      mood: 'frio',
      lines: [
        { t: 'Eu era muito ciumento.' },
        { t: 'Muito inseguro.' },
        { t: 'E não confiava em você como eu deveria.', pausa: 1000 },
        { t: 'Ao mesmo tempo, eu sentia falta de reciprocidade.' },
        { t: 'Mas eu não quero transformar isso numa acusação.', s: 'sussurro' },
        { t: 'Você não deixava de gostar de mim por causa disso.' },
        { t: 'Era só o jeito diferente que a gente tinha de demonstrar o que sentia.' },
        { t: 'E eu não entendia.', s: 'sussurro' },
      ],
    },

    {
      id: 'c3-perguntas',
      type: 'citacao',
      mood: 'frio',
      lines: [
        { t: 'Eu precisava sentir que era amado.', s: 'sussurro', pausa: 1100 },
        { t: '“Você gosta mesmo de mim?”', s: 'destaque', pausa: 1300 },
        { t: '“Você quer mesmo estar aqui?”', s: 'destaque', pausa: 1300 },
        { t: '“Eu sou importante pra você?”', s: 'destaque', pausa: 1500 },
        { t: 'Eu precisava dessas respostas. E muitas vezes eu não sabia pedir por elas sem transformar aquilo numa discussão.', s: 'sussurro' },
      ],
    },

    {
      id: 'c3-rede-outra-vez',
      type: 'memoria',
      heading: 'A rede, outra vez',
      mood: 'neutro',
      music: 'memoria',
      lines: [
        { t: 'Principalmente quando a gente estava na sua casa.' },
        { t: 'No quarto.', s: 'item' },
        { t: 'Na rede.', s: 'item' },
        { t: 'Sozinhos.', s: 'item', pausa: 1000 },
        { t: 'Eu sentia a intensidade de tudo.' },
        { t: 'Era como se todo sentimento ficasse maior ali dentro.', pausa: 800 },
        { t: 'E ao mesmo tempo a gente saía. Tentava aproveitar.' },
        { t: 'Mas nem sempre conseguia fazer tudo que queria.' },
        { t: 'E as brigas começaram a pesar.', s: 'sussurro' },
      ],
      gato: { kind: 'espreitando', spot: 'superior-esquerdo', opacity: 0.1, size: 54 },
    },

    {
      id: 'c3-continuava',
      type: 'texto',
      heading: 'Mas havia algo que continuava',
      mood: 'quente',
      music: 'memoria',
      lines: [
        { t: 'Mesmo com tudo isso…' },
        { t: 'a nossa conexão continuava sendo diferente.', pausa: 900 },
        { t: 'A música.', s: 'item' },
        { t: 'O jeito de conversar.', s: 'item' },
        { t: 'O tom.', s: 'item' },
        { t: 'A energia.', s: 'item' },
        { t: 'A presença.', s: 'item', pausa: 1000 },
        { t: 'Era inexplicável.', s: 'sussurro' },
      ],
    },

    {
      id: 'c3-nunca-senti-outra',
      type: 'citacao',
      mood: 'quente',
      folhaInteira: true,
      lines: [
        { t: 'E tem uma coisa que eu preciso deixar muito clara:', s: 'sussurro', pausa: 1400 },
        { t: 'eu nunca senti isso por outra pessoa.', s: 'destaque' },
      ],
    },

    {
      id: 'c3-o-amor',
      type: 'carta',
      heading: 'O amor',
      mood: 'quente',
      music: 'memoria',
      lines: [
        { t: 'Você tinha uma capacidade absurda de mudar o meu dia simplesmente existindo dentro dele.', s: 'abertura', pausa: 1000 },
        { t: 'Ouvir a sua voz.', s: 'item' },
        { t: 'Ver o seu sorriso.', s: 'item' },
        { t: 'Sentir o seu cheiro.', s: 'item' },
        { t: 'Ouvir a sua respiração.', s: 'item' },
        { t: 'Estar perto.', s: 'item', pausa: 1100 },
        { t: 'Tudo isso mudava alguma coisa dentro de mim.' },
        { t: 'Você não precisava fazer nada extraordinário.', s: 'sussurro', pausa: 900 },
        { t: 'A sua presença já era extraordinária pra mim.', s: 'destaque' },
      ],
      gato: { kind: 'dormindo', spot: 'inferior-direito', opacity: 0.13, size: 76 },
    },

    {
      id: 'c3-segunda',
      type: 'texto',
      heading: 'A segunda separação',
      mood: 'frio',
      music: 'tempo',
      lines: [
        { t: 'Depois, a gente terminou de novo.' },
        { t: 'Foi por causa de um mal-entendido.', pausa: 1200 },
        { t: 'E dessa vez a distância seria muito maior.' },
        { t: 'Não seriam meses.', s: 'sussurro' },
      ],
    },

    {
      id: 'c3-dois-anos',
      type: 'cena',
      cena: 'dois-anos',
      mood: 'frio',
      music: 'tempo',
      folhaInteira: true,
      titulo: '2 anos',
      narracao: 'Seriam dois anos.',
    },

    {
      id: 'c3-fim',
      type: 'fim-capitulo',
      mood: 'escuro',
      music: 'silencio',
      folhaInteira: true,
      titulo: 'Fim do capítulo 3',
      narracao: 'Fim do capítulo três.',
    },
  ],
}
