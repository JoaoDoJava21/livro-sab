import type { Chapter, Page } from '../types/book'

/**
 * Sequência final do CAPÍTULO 4: a retrospectiva, a declaração, as pequenas
 * coisas, o medo, o pedido — e as páginas que ainda estão em branco.
 */
export const finalePages: Page[] = [
  {
    id: 'f-retrospectiva',
    type: 'montagem',
    cena: 'retrospectiva',
    mood: 'quente',
    music: 'reencontro',
    folhaInteira: true,
    titulo: 'Tudo isso aconteceu.',
    itens: [
      'Costa e Silva',
      'a porta da sala',
      'o controle de Xbox',
      'Davi',
      'Adriele',
      'Bonfim',
      'a caixa de chocolate',
      'o primeiro beijo',
      'a ladeira',
      'a rede',
      'as risadas',
      'a separação',
      'as páginas vazias',
      'dois anos',
      'a faculdade',
      'o trabalho',
      'o crescimento',
      'Salvador',
      'os jantares',
      'o reencontro',
    ],
    narracao: 'Tudo isso aconteceu. Tudo isso é nosso.',
  },

  {
    id: 'f-silencio',
    type: 'vazia',
    mood: 'claro',
    music: 'silencio',
    folhaInteira: true,
    lines: [{ t: 'E então, silêncio.', s: 'sussurro' }],
  },

  {
    id: 'f-declaracao-1',
    type: 'carta',
    heading: 'Uma carta',
    mood: 'claro',
    music: 'reencontro',
    lines: [
      { t: '“Eu sei o que eu posso fazer agora.”', s: 'destaque', pausa: 1800 },
      { t: '“Me desculpa por tudo que aconteceu.”', s: 'destaque', pausa: 1800 },
      { t: '“Mas eu estou preparado.”', s: 'destaque' },
    ],
  },

  {
    id: 'f-declaracao-2',
    type: 'carta',
    mood: 'claro',
    lines: [
      { t: 'Depois de tudo que eu vivi, depois de tudo que eu aprendi, eu finalmente entendi que não basta amar alguém.', s: 'abertura', pausa: 1200 },
      { t: 'É preciso saber cuidar.', s: 'fala' },
      { t: 'É preciso saber conversar.', s: 'fala' },
      { t: 'É preciso saber ficar.', s: 'fala' },
      { t: 'É preciso saber construir.', s: 'fala', pausa: 1200 },
      { t: 'E eu quero fazer isso com você.', s: 'destaque' },
    ],
    gato: { kind: 'patinha', spot: 'inferior-direito', opacity: 0.12, size: 50 },
  },

  {
    id: 'f-deve-ser-voce',
    type: 'citacao',
    mood: 'esperanca',
    folhaInteira: true,
    lines: [
      { t: 'Eu tenho certeza de uma coisa.', s: 'sussurro', pausa: 2000 },
      { t: 'Deve ser você.', s: 'destaque' },
    ],
  },

  {
    id: 'f-deve-ser-voce-2',
    type: 'carta',
    mood: 'esperanca',
    lines: [
      { t: 'É você que eu quero do meu lado.', s: 'fala' },
      { t: 'É com você que eu quero construir alguma coisa boa.', s: 'fala' },
      { t: 'Alguma coisa nossa.', s: 'fala', pausa: 900 },
      { t: 'Alguma coisa que não precise ser perfeita pra ser bonita.', s: 'fala' },
      { t: 'Mas que seja verdadeira.', s: 'destaque' },
    ],
  },

  {
    id: 'f-casal-foda',
    type: 'citacao',
    mood: 'esperanca',
    music: 'reencontro',
    folhaInteira: true,
    lines: [
      { t: 'Então vamos lá.', s: 'sussurro', pausa: 1600 },
      { t: 'Vamos ser um casal foda.', s: 'destaque' },
    ],
    gato: { kind: 'novelo', spot: 'inferior-esquerdo', opacity: 0.16, size: 64 },
  },

  {
    id: 'f-vamos',
    type: 'memoria',
    mood: 'esperanca',
    lines: [{ t: 'Vamos fazer dar certo.', s: 'abertura' }],
    itens: [
      'cuidar um do outro',
      'aprender',
      'mudar o que precisar',
      'crescer',
      'trabalhar',
      'estudar',
      'viajar',
      'construir nossos planos',
      'viver',
    ],
  },

  {
    id: 'f-pelo',
    type: 'carta',
    heading: 'Pelô',
    mood: 'quente',
    lines: [
      { t: 'Lembra do que aquele cara falou pra gente no Pelourinho?', s: 'destaque', pausa: 1800 },
      { t: 'Lembra de tudo?', s: 'destaque', pausa: 1500 },
      { t: 'Então não vamos deixar aquilo pra trás.', s: 'fala' },
      { t: 'Vamos guardar aquilo.', s: 'fala' },
      { t: 'Vamos aprender com aquilo.', s: 'fala' },
      { t: 'Vamos levar aquilo pra frente.', s: 'fala' },
    ],
  },

  {
    id: 'f-fe',
    type: 'texto',
    heading: 'Fé e construção',
    mood: 'claro',
    lines: [
      { t: 'Vamos na igreja.', s: 'fala' },
      { t: 'Vamos consertar o que precisar ser consertado.', s: 'fala' },
      { t: 'Vamos trabalhar. Vamos crescer.', s: 'fala', pausa: 900 },
      { t: 'Vamos fazer de tudo, dentro do que estiver ao nosso alcance, pra construir alguma coisa bonita.', s: 'fala', pausa: 1000 },
      { t: 'Não porque a gente é perfeito.', s: 'sussurro' },
      { t: 'Mas porque agora a gente sabe que amar também é aprender.', s: 'destaque' },
    ],
  },

  {
    id: 'f-te-amo',
    type: 'carta',
    heading: 'O que eu sinto por você',
    mood: 'quente',
    music: 'reencontro',
    lines: [
      { t: 'Porque eu te amo mais do que eu consigo explicar.', s: 'destaque', pausa: 1600 },
      { t: 'E eu juro que não consigo imaginar uma vida lá na frente em que você simplesmente não esteja.', s: 'fala', pausa: 1200 },
      { t: 'Quando eu penso no futuro, eu quero olhar pro lado e encontrar você.', s: 'fala' },
    ],
  },

  {
    id: 'f-quero-ver',
    type: 'memoria',
    heading: 'Quero ver',
    mood: 'quente',
    lines: [],
    itens: [
      'ouvir a sua voz',
      'ouvir a sua risada',
      'ver você se arrumando',
      'ver você penteando o cabelo',
      'ver seu cabelo brilhando na luz',
      'ver você passando gloss toda hora',
      'ver você cantando',
      'ver você querendo dançar',
      'ver você sorrindo por alguma coisa completamente boba',
    ],
    narracao:
      'Quero ouvir sua voz. Quero ouvir sua risada. Quero ver você se arrumando. Quero ver você penteando o cabelo. Quero ver seu cabelo brilhando na luz. Quero ver você passando gloss toda hora. Quero ver você cantando. Quero ver você querendo dançar. Quero ver você sorrindo por alguma coisa completamente boba.',
    gato: { kind: 'espreitando', spot: 'superior-direito', opacity: 0.12, size: 56 },
  },

  {
    id: 'f-detalhes',
    type: 'citacao',
    mood: 'quente',
    lines: [
      { t: 'Quero estar perto dos pequenos detalhes.', s: 'destaque', pausa: 1400 },
      { t: 'Porque são justamente os pequenos detalhes que ficam gigantes quando você ama alguém.', s: 'sussurro' },
    ],
  },

  {
    id: 'f-pequenas-coisas',
    type: 'montagem',
    heading: 'As pequenas coisas',
    mood: 'claro',
    music: 'memoria',
    folhaInteira: true,
    itens: [
      'um pente',
      'um espelho',
      'um gloss',
      'uma fotografia',
      'uma sombra',
      'uma cadeira',
      'uma rede',
      'uma janela',
      'uma mensagem',
      'um sorriso desenhado',
      'uma pequena silhueta de gato',
    ],
    lines: [
      { t: 'Eu não amo só os grandes momentos.', s: 'destaque', pausa: 1300 },
      { t: 'Eu amo os detalhes.', s: 'sussurro' },
      { t: 'Os detalhes que talvez ninguém mais perceba.', s: 'sussurro' },
      { t: 'E é justamente isso que eu não quero perder.', s: 'sussurro' },
    ],
    narracao:
      'Eu não amo apenas os grandes momentos. Eu amo os detalhes. Os detalhes que talvez ninguém mais perceba. E é justamente isso que eu não quero perder.',
  },

  {
    id: 'f-medo',
    type: 'carta',
    heading: 'O medo',
    mood: 'frio',
    music: 'tempo',
    lines: [
      { t: 'Então, por favor…', s: 'sussurro', pausa: 1800 },
      { t: 'não me faz viver aquele pesadelo de novo.', s: 'destaque', pausa: 1500 },
      { t: 'Eu não quero voltar pra aqueles dias.', s: 'fala' },
      { t: 'Não quero acordar com a sensação de que perdi o meu amor.', s: 'fala' },
      { t: 'Não quero passar de novo por aquele vazio.', s: 'fala' },
    ],
  },

  {
    id: 'f-quero',
    type: 'texto',
    mood: 'neutro',
    lines: [
      { t: 'Eu quero fazer diferente.', s: 'abertura', pausa: 900 },
      { t: 'Quero ficar.', s: 'item' },
      { t: 'Quero conversar.', s: 'item' },
      { t: 'Quero resolver.', s: 'item' },
      { t: 'Quero crescer.', s: 'item' },
      { t: 'Quero construir.', s: 'item' },
    ],
  },

  {
    id: 'f-acredita',
    type: 'carta',
    heading: 'Acredita em mim',
    mood: 'esperanca',
    music: 'reencontro',
    lines: [
      { t: 'Por favor, acredita em mim.', s: 'destaque', pausa: 1600 },
      { t: 'Eu não estou prometendo que a gente nunca vai ter problema.', s: 'fala', pausa: 900 },
      { t: 'Eu estou prometendo que, quando eles aparecerem, eu quero aprender a enfrentar com você.', s: 'fala', pausa: 1100 },
      { t: 'Eu não quero fugir.', s: 'fala' },
      { t: 'Eu não quero ir embora.', s: 'fala' },
      { t: 'Eu quero ficar.', s: 'destaque' },
    ],
  },

  {
    id: 'f-digno',
    type: 'citacao',
    mood: 'esperanca',
    lines: [
      { t: 'Quero que você possa depositar o seu amor em mim sem sentir que precisa ter medo de perdê-lo.', s: 'destaque', pausa: 1600 },
      { t: 'E eu quero aprender, todos os dias, a ser alguém digno desse amor.', s: 'sussurro' },
    ],
  },

  {
    id: 'f-escolha',
    type: 'citacao',
    mood: 'esperanca',
    folhaInteira: true,
    lines: [
      { t: 'Eu tenho a minha vida.', s: 'sussurro' },
      { t: 'Minha família, meus sonhos, minha fé, meu trabalho, meus objetivos.', s: 'sussurro', pausa: 1400 },
      { t: 'E é justamente por isso que isso aqui significa tanto:', s: 'sussurro', pausa: 1200 },
      { t: 'eu escolho você pra dividir tudo isso.', s: 'destaque' },
    ],
  },

  // ——— As páginas do futuro ———————————————————————————————————

  {
    id: 'f-futuro-1',
    type: 'vazia',
    mood: 'claro',
    music: 'reencontro',
    titulo: 'Nossa próxima viagem.',
    lines: [{ t: 'Esta página está esperando.', s: 'manuscrito' }],
  },
  {
    id: 'f-futuro-2',
    type: 'vazia',
    mood: 'claro',
    titulo: 'Nossos próximos planos.',
  },
  {
    id: 'f-futuro-3',
    type: 'vazia',
    mood: 'claro',
    titulo: 'As coisas que a gente ainda vai viver.',
    gato: { kind: 'andando', spot: 'inferior-direito', opacity: 0.1, size: 54 },
  },
  {
    id: 'f-futuro-4',
    type: 'vazia',
    mood: 'claro',
    titulo: 'Os lugares que a gente ainda vai conhecer.',
  },
  {
    id: 'f-futuro-5',
    type: 'vazia',
    mood: 'claro',
    titulo: 'As histórias que a gente ainda vai contar.',
  },

  {
    id: 'f-faltam-paginas',
    type: 'citacao',
    mood: 'esperanca',
    music: 'reencontro',
    folhaInteira: true,
    lines: [
      { t: 'Ainda faltam muitas páginas.', s: 'destaque', pausa: 2000 },
      { t: 'Mas dessa vez…', s: 'destaque', pausa: 1800 },
      { t: 'a gente vai escrever junto.', s: 'destaque' },
    ],
  },

  {
    id: 'f-nao-acabou',
    type: 'citacao',
    mood: 'esperanca',
    lines: [
      { t: 'A nossa história não acabou.', s: 'destaque', pausa: 1600 },
      { t: 'Na verdade, talvez ela esteja finalmente começando do jeito que deveria.', s: 'sussurro' },
    ],
  },

  {
    id: 'f-maos',
    type: 'cena',
    cena: 'maos',
    mood: 'quente',
    music: 'reencontro',
    folhaInteira: true,
    titulo: 'Duas mãos, o mesmo livro.',
    lines: [
      { t: 'Uma escreve uma palavra.', s: 'sussurro' },
      { t: 'A outra continua.', s: 'sussurro' },
      { t: 'Depois as duas escrevem juntas.', s: 'sussurro' },
    ],
    narracao: 'Duas mãos escrevendo no mesmo livro. Uma escreve uma palavra. A outra continua. Depois as duas escrevem juntas.',
  },

  {
    id: 'f-ainda-temos',
    type: 'citacao',
    mood: 'esperanca',
    folhaInteira: true,
    lines: [
      { t: 'A gente ainda tem páginas pra escrever.', s: 'destaque', pausa: 1900 },
      { t: 'Só que agora…', s: 'destaque', pausa: 1700 },
      { t: 'juntos.', s: 'destaque' },
    ],
  },

  {
    id: 'f-ultima-frase',
    type: 'citacao',
    mood: 'esperanca',
    folhaInteira: true,
    lines: [
      { t: 'Dessa vez, a gente não vai escrever sobre o fim.', s: 'destaque', pausa: 1800 },
      { t: 'A gente vai escrever sobre tudo que vem depois.', s: 'destaque', pausa: 2000 },
      { t: 'Sem fugir.', s: 'sussurro' },
      { t: 'Sem desistir.', s: 'sussurro' },
      { t: 'Sem deixar o amor pra trás.', s: 'sussurro', pausa: 1400 },
      { t: 'Juntos.', s: 'destaque' },
    ],
  },
]

/** O capítulo que ainda não existe. */
export const epilogo: Chapter = {
  id: 5,
  rotulo: 'Em branco',
  titulo: 'Capítulo 5',
  subtitulo: 'Essa página ainda está esperando por nós',
  pages: [
    {
      id: 'e-branco-1',
      type: 'vazia',
      mood: 'claro',
      music: 'reencontro',
      titulo: 'Capítulo 5',
      lines: [{ t: 'Essa página ainda está esperando por nós.', s: 'manuscrito' }],
    },
    { id: 'e-branco-2', type: 'vazia', mood: 'claro' },
    { id: 'e-branco-3', type: 'vazia', mood: 'claro', gato: { kind: 'patinha', spot: 'inferior-direito', opacity: 0.08, size: 44 } },
    { id: 'e-branco-4', type: 'vazia', mood: 'claro' },
    {
      id: 'e-continua',
      type: 'continua',
      cena: 'gato-final',
      mood: 'claro',
      music: 'reencontro',
      folhaInteira: true,
      titulo: 'Continua…',
      narracao: 'Continua.',
    },
  ],
}
