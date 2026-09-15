import type { Chapter } from '../types/book'

/** CAPÍTULO 4 — Dois anos. Quando o tempo nos separou e, sem querer, nos fez crescer. */
export const chapter4: Chapter = {
  id: 4,
  rotulo: 'Dois anos',
  titulo: 'Dois anos',
  subtitulo: 'Quando o tempo nos separou — e, sem querer, nos fez crescer',
  pages: [
    {
      id: 'c4-intro',
      type: 'capitulo',
      titulo: 'Capítulo 4',
      subtitulo: 'Dois anos — quando o tempo nos separou e, sem querer, nos fez crescer',
      mood: 'escuro',
      music: 'tempo',
      folhaInteira: true,
      narracao: 'Capítulo quatro. Dois anos. Quando o tempo nos separou e, sem querer, nos fez crescer.',
    },

    {
      id: 'c4-muito-tempo',
      type: 'texto',
      heading: 'Dois anos',
      mood: 'frio',
      music: 'tempo',
      lines: [
        { t: 'Dois anos.', s: 'abertura', pausa: 1200 },
        { t: 'É muito tempo.', s: 'sussurro', pausa: 1000 },
        { t: 'Nesse período, as nossas vidas mudaram completamente.' },
      ],
    },

    {
      id: 'c4-caminhos',
      type: 'memoria',
      heading: 'O que aconteceu enquanto isso',
      mood: 'neutro',
      lines: [
        { t: 'Você entrou na faculdade.' },
        { t: 'Encontrou um propósito.' },
        { t: 'Construiu caminhos novos.', pausa: 1000 },
        { t: 'Eu também entrei na faculdade.' },
        { t: 'Comecei a construir uma carreira.' },
        { t: 'Consegui oportunidades. Conheci pessoas. Fui entrando no mercado.', pausa: 800 },
        { t: 'E hoje eu tenho possibilidades profissionais que um dia eu nem imaginava.' },
      ],
      gato: { kind: 'pegadas', spot: 'margem', opacity: 0.08, size: 130 },
    },

    {
      id: 'c4-e-se',
      type: 'texto',
      heading: 'O que poderia ter sido',
      mood: 'neutro',
      lines: [
        { t: 'Às vezes eu penso:' },
        { t: '“Se a gente não tivesse terminado, será que eu teria seguido exatamente esse caminho?”', s: 'destaque', pausa: 1300 },
        { t: 'Talvez não.' },
        { t: 'Talvez eu nunca tivesse feito aquele curso.' },
        { t: 'Talvez nunca tivesse conhecido certas pessoas.' },
        { t: 'Talvez algumas oportunidades nunca tivessem aparecido.', pausa: 1000 },
      ],
    },

    {
      id: 'c4-dor-ensina',
      type: 'texto',
      mood: 'neutro',
      lines: [
        { t: 'Mas isso não quer dizer que a separação tenha sido “boa”.', s: 'abertura' },
        { t: 'Foi dolorosa.' },
        { t: 'Foi difícil.', pausa: 1100 },
        { t: 'Só que até a dor ensina.', s: 'destaque', pausa: 900 },
        { t: 'E hoje eu consigo olhar pra aqueles dois anos de um jeito diferente.' },
      ],
    },

    {
      id: 'c4-eu-mudei',
      type: 'carta',
      heading: 'Eu mudei',
      mood: 'neutro',
      lines: [
        { t: 'Eu não mudei completamente.' },
        { t: 'Por dentro, eu continuo sendo eu.', pausa: 900 },
        { t: 'Ainda sou intenso.' },
        { t: 'Ainda sinto demais.' },
        { t: 'Ainda quero você perto de mim de um jeito absurdo.' },
        { t: 'Ainda existe dentro de mim aquela vontade de lutar por nós.', pausa: 1100 },
        { t: 'Mas eu mudei em outras coisas.' },
        { t: 'Minha carreira mudou. Meus estudos mudaram. Meu foco mudou. Minha vida mudou.', pausa: 900 },
        { t: 'E principalmente: eu aprendi a lidar melhor com aquilo que eu sinto.', s: 'destaque' },
      ],
    },

    {
      id: 'c4-aprendi',
      type: 'memoria',
      heading: 'O que eu aprendi',
      mood: 'claro',
      lines: [{ t: 'Aprendi a controlar melhor:', s: 'sussurro' }],
      itens: ['ciúme', 'insegurança', 'medo', 'ansiedade', 'impulsividade'],
    },

    {
      id: 'c4-licoes',
      type: 'texto',
      mood: 'claro',
      lines: [
        { t: 'Aprendi que amar alguém não é tentar controlar tudo.' },
        { t: 'Aprendi que pessoas diferentes demonstram amor de formas diferentes.' },
        { t: 'Aprendi que nem todo silêncio é falta de amor.', pausa: 900 },
        { t: 'Aprendi que nem toda diferença precisa virar briga.' },
        { t: 'Aprendi que conversar é mais importante do que ganhar uma discussão.', s: 'destaque' },
      ],
      gato: { kind: 'sentado', spot: 'inferior-direito', opacity: 0.11, size: 68 },
    },

    {
      id: 'c4-outras-experiencias',
      type: 'texto',
      heading: 'Nesse meio-tempo',
      mood: 'neutro',
      lines: [
        { t: 'Durante esses dois anos, as nossas vidas seguiram caminhos diferentes.' },
        { t: 'Você se relacionou.' },
        { t: 'Eu também tive as minhas experiências.', pausa: 1000 },
        { t: 'Não tem vilão nessa parte da história.', s: 'sussurro' },
        { t: 'Não tem comparação.', s: 'sussurro', pausa: 800 },
        { t: 'Aquilo tudo serviu principalmente pra amadurecer.' },
        { t: 'Pra entender sentimento.' },
        { t: 'Pra entender como é estar do outro lado.' },
        { t: 'Pra enxergar coisas que antes eu não conseguia enxergar.' },
      ],
    },

    {
      id: 'c4-nao-mudou',
      type: 'citacao',
      mood: 'quente',
      music: 'reencontro',
      folhaInteira: true,
      lines: [
        { t: 'Mas existe uma coisa que o tempo não conseguiu apagar.', s: 'sussurro', pausa: 1400 },
        { t: 'O sentimento.', s: 'destaque' },
      ],
    },

    {
      id: 'c4-e-ela',
      type: 'texto',
      mood: 'quente',
      music: 'reencontro',
      lines: [
        { t: 'Porque eu posso aprender.' },
        { t: 'Posso crescer. Posso mudar. Posso amadurecer.' },
        { t: 'Posso construir uma carreira. Posso viver experiências novas.', pausa: 1100 },
        { t: 'Mas quando eu penso no amor que eu realmente conheci…', s: 'sussurro', pausa: 1300 },
        { t: 'é você.', s: 'destaque' },
      ],
    },

    {
      id: 'c4-reencontro',
      type: 'texto',
      heading: 'O reencontro',
      mood: 'quente',
      music: 'reencontro',
      lines: [
        { t: 'Depois de dois anos… a gente começou a sair de novo.', s: 'abertura', pausa: 1000 },
        { t: 'E não foi simplesmente voltar pra onde a gente parou.' },
        { t: 'Porque a gente já não era exatamente as mesmas pessoas.', pausa: 900 },
        { t: 'Havia uma vida inteira entre aquele passado e esse presente.' },
        { t: 'Duas pessoas diferentes.', s: 'item' },
        { t: 'Mais maduras.', s: 'item' },
        { t: 'Mais conscientes.', s: 'item' },
        { t: 'Mais preparadas.', s: 'item' },
      ],
      gato: { kind: 'andando', spot: 'inferior-esquerdo', opacity: 0.13, size: 60 },
    },

    {
      id: 'c4-salvador',
      type: 'memoria',
      heading: 'Salvador',
      mood: 'quente',
      music: 'reencontro',
      lines: [
        { t: 'A gente teve jantares em lugares lindos de Salvador.' },
        { t: 'Alguns eram lugares que você sempre sonhou conhecer.', pausa: 900 },
        { t: 'Lugares que você já tinha comentado comigo naquelas ligações em que você estava no quarto.', pausa: 1000 },
        { t: 'E agora a gente estava lá. Junto.', s: 'sussurro' },
      ],
      fotos: [
        { style: 'polaroid', legenda: 'Salvador', tilt: -4 },
        { style: 'fita', legenda: 'um daqueles jantares', tilt: 3 },
      ],
    },

    {
      id: 'c4-um-dia',
      type: 'citacao',
      mood: 'quente',
      lines: [
        { t: 'O que antes era:', s: 'sussurro' },
        { t: '“Um dia a gente vai…”', s: 'destaque', pausa: 1600 },
        { t: 'agora era:', s: 'sussurro' },
        { t: '“A gente está aqui.”', s: 'destaque' },
      ],
    },

    {
      id: 'c4-nao-e-voltar',
      type: 'citacao',
      mood: 'esperanca',
      music: 'reencontro',
      folhaInteira: true,
      lines: [
        { t: '“A gente não voltou a ser quem era.”', s: 'destaque', pausa: 2200 },
        { t: '“A gente voltou sendo quem se tornou.”', s: 'destaque' },
      ],
    },

    {
      id: 'c4-novo-comeco',
      type: 'texto',
      heading: 'O novo começo',
      mood: 'esperanca',
      lines: [
        { t: 'Agora a gente está tentando de novo.' },
        { t: 'Devagar.', s: 'item' },
        { t: 'Com leveza.', s: 'item' },
        { t: 'Com maturidade.', s: 'item', pausa: 1000 },
        { t: 'Cada um tem seus objetivos. Cada um tem seus sonhos.' },
        { t: 'A gente tem planos. Tem viagem que quer fazer. Tem coisa que quer construir.' },
      ],
    },

    {
      id: 'c4-diferenca',
      type: 'citacao',
      mood: 'esperanca',
      lines: [
        { t: 'E tem uma sensação diferente dessa vez.', s: 'sussurro', pausa: 1200 },
        { t: 'Não é só “eu quero você”.', s: 'destaque', pausa: 1500 },
        { t: 'É “eu quero construir uma vida com você”.', s: 'destaque' },
      ],
    },

    {
      id: 'c4-sentimento-voltou',
      type: 'texto',
      mood: 'quente',
      music: 'reencontro',
      lines: [
        { t: 'E quando a gente voltou a se aproximar, todos os sentimentos voltaram.' },
        { t: 'Não voltaram aos poucos.', s: 'sussurro', pausa: 1000 },
        { t: 'Foi como se eles estivessem esperando.', s: 'destaque', pausa: 1200 },
        { t: 'E eu entendi de novo: era você.' },
        { t: 'Sempre foi você que fez o meu coração entender esse tipo de amor.' },
      ],
      gato: { kind: 'dormindo', spot: 'inferior-direito', opacity: 0.14, size: 80 },
    },
  ],
}
