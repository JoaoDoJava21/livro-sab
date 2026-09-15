import type { Chapter } from '../types/book'

/**
 * CAPÍTULO 1 — Quando eu te vi pela primeira vez.
 * Nada aqui é inventado: os acontecimentos são os que foram contados.
 * O que muda é apenas a forma de dizer.
 */
export const chapter1: Chapter = {
  id: 1,
  rotulo: 'Quando eu te vi',
  titulo: 'Quando eu te vi pela primeira vez',
  pages: [
    {
      id: 'c1-intro',
      type: 'capitulo',
      titulo: 'Capítulo 1',
      subtitulo: 'Quando eu te vi pela primeira vez',
      music: 'descoberta',
      mood: 'escuro',
      folhaInteira: true,
      narracao: 'Capítulo um. Quando eu te vi pela primeira vez.',
    },

    {
      id: 'c1-escola',
      type: 'texto',
      heading: 'O começo',
      mood: 'quente',
      music: 'descoberta',
      lines: [
        { t: 'Tudo começou na Escola Presidente Costa e Silva.', s: 'abertura' },
        { t: 'Costa e Silva.', s: 'sussurro', pausa: 900 },
        { t: 'Nós estudávamos juntos.' },
        { t: 'E foi no primeiro ano do ensino médio que aconteceu.' },
      ],
      gato: { kind: 'patinha', spot: 'inferior-direito', opacity: 0.1, size: 54 },
    },

    {
      id: 'c1-entrada',
      type: 'cena',
      cena: 'entrada-dela',
      mood: 'quente',
      music: 'descoberta',
      folhaInteira: true,
      titulo: 'Ela entrou pela porta da sala.',
      lines: [
        { t: 'E o som daquela sala inteira sumiu.', s: 'corpo', pausa: 1200 },
        { t: 'Não foi bem assim, eu sei.', s: 'sussurro' },
        { t: 'Mas foi assim que eu vi.', s: 'sussurro', pausa: 1400 },
        { t: 'Alguma coisa mudou.', s: 'destaque' },
      ],
      narracao:
        'Sabrina entrou pela porta da sala. E o som daquela sala inteira sumiu. Não foi bem assim, eu sei. Mas foi assim que eu vi. Alguma coisa mudou.',
    },

    {
      id: 'c1-nunca-senti',
      type: 'citacao',
      mood: 'quente',
      music: 'descoberta',
      lines: [
        { t: '“Eu nunca tinha sentido aquilo por ninguém.”', s: 'destaque', pausa: 1600 },
      ],
    },

    {
      id: 'c1-nao-era-so',
      type: 'texto',
      mood: 'quente',
      lines: [
        { t: 'Não era simplesmente achar alguém bonita.' },
        { t: 'Era como se alguma coisa tivesse mudado dentro de mim.', pausa: 800 },
        { t: 'A beleza dela.', s: 'item' },
        { t: 'O sorriso.', s: 'item' },
        { t: 'A risada.', s: 'item' },
        { t: 'A presença.', s: 'item' },
        { t: 'O jeito dela.', s: 'item', pausa: 900 },
      ],
      gato: { kind: 'sentado', spot: 'inferior-direito', opacity: 0.12, size: 70 },
    },

    {
      id: 'c1-xbox',
      type: 'memoria',
      heading: 'A sala de aula',
      mood: 'quente',
      lines: [
        { t: 'Eu ficava sentado com meu controle de Xbox na sala.' },
        { t: 'Mas, sinceramente?', s: 'sussurro', pausa: 900 },
        { t: 'Eu passava boa parte do tempo olhando para você.', s: 'destaque' },
      ],
      fotos: [{ style: 'polaroid', legenda: 'Costa e Silva', tilt: -3 }],
    },

    {
      id: 'c1-davi',
      type: 'texto',
      heading: 'Davi',
      mood: 'claro',
      music: 'memoria',
      lines: [
        { t: 'Depois eu conheci Davi.' },
        { t: 'Ele era seu amigo.' },
        { t: 'E, sendo sincero: talvez eu tenha me aproximado dele também porque queria encontrar uma forma de chegar mais perto de você.', pausa: 900 },
        { t: 'Era uma estratégia meio inocente.', s: 'sussurro' },
        { t: 'Eu só queria conseguir conversar.' },
        { t: 'Ser seu amigo.' },
        { t: 'Estar perto.', pausa: 700 },
      ],
    },

    {
      id: 'c1-adriele',
      type: 'texto',
      heading: 'Adriele',
      mood: 'claro',
      lines: [
        { t: 'Numa prova em dupla com Adriele, eu comecei a perguntar sobre você.' },
        { t: 'Como você era.', s: 'item' },
        { t: 'Do que você gostava.', s: 'item' },
        { t: 'O que você fazia.', s: 'item' },
        { t: 'Qualquer detalhe.', s: 'item', pausa: 800 },
        { t: 'A verdade é que eu nem estava tão interessado na prova.', s: 'sussurro' },
        { t: 'Eu queria saber de você. Tudo. Cada detalhe pequeno.' },
      ],
      gato: { kind: 'pegadas', spot: 'margem', opacity: 0.09, size: 120 },
    },

    {
      id: 'c1-namorava',
      type: 'texto',
      heading: 'O que eu vi no seu rosto',
      mood: 'neutro',
      lines: [
        { t: 'Foi aí que eu descobri que você estava namorando.', s: 'abertura', pausa: 900 },
        { t: 'E percebi que aquilo não parecia estar te fazendo bem.' },
        { t: 'Eu via no seu rosto.', s: 'sussurro', pausa: 1000 },
        { t: 'Naquele momento, mesmo querendo estar com você, eu queria principalmente estar perto.' },
        { t: 'Queria ajudar.' },
        { t: 'Queria ser alguém em quem você pudesse confiar.', pausa: 900 },
        { t: 'E foi aí que eu entendi que já estava gostando de você.', s: 'destaque' },
      ],
    },

    {
      id: 'c1-amizade',
      type: 'memoria',
      heading: 'A amizade',
      mood: 'claro',
      music: 'memoria',
      lines: [
        { t: 'A gente começou a ficar amigo.' },
        { t: 'Começou a sair.', pausa: 600 },
      ],
      itens: ['Altinha', 'Praia', 'Bonfim', 'Conversas', 'Risadas', 'Passeios'],
    },

    {
      id: 'c1-grupo',
      type: 'texto',
      heading: 'Bonfim',
      mood: 'claro',
      lines: [
        { t: 'Em Bonfim a gente começou a andar com Miguel.' },
        { t: 'E o grupo ficou assim:', pausa: 500 },
        { t: 'eu,', s: 'item' },
        { t: 'você,', s: 'item' },
        { t: 'Miguel,', s: 'item' },
        { t: 'Adriele.', s: 'item', pausa: 800 },
        { t: 'A gente caminhava. Brincava. Jogava. Ria de praticamente tudo.' },
      ],
      gato: { kind: 'andando', spot: 'inferior-esquerdo', opacity: 0.14, size: 62 },
    },

    {
      id: 'c1-uno',
      type: 'memoria',
      heading: 'O que bastava',
      mood: 'claro',
      lines: [
        { t: 'Jogava Uno.' },
        { t: 'Às vezes a gente juntava dinheiro pra comprar uma garrafa de refrigerante de um litro.', pausa: 900 },
        { t: 'E parecia que aquilo bastava.', s: 'destaque' },
      ],
      fotos: [
        { style: 'fita', legenda: 'Uno', tilt: 2 },
        { style: 'impressa', legenda: 'um litro pra todo mundo', tilt: -4 },
      ],
    },

    {
      id: 'c1-chocolate',
      type: 'carta',
      heading: 'Os chocolates',
      mood: 'quente',
      music: 'memoria',
      lines: [
        { t: 'Eu tinha um jeito muito específico de demonstrar carinho.' },
        { t: 'Chocolate.', s: 'manuscrito', pausa: 900 },
        { t: 'Eu levava uma caixa de bombons pra você.' },
        { t: 'Quando eu fazia o curso na Saga, minha mãe me dava dinheiro pro transporte.' },
        { t: 'E algumas vezes eu pegava um ônibus só pra ir comprar uma caixa de chocolate pra você na Americanas.', pausa: 1000 },
        { t: 'Eu não tinha muito dinheiro.' },
        { t: 'Não podia dar presente grande.' },
        { t: 'Então eu fazia o que dava.', pausa: 1000 },
        { t: 'E, pra mim, aquilo queria dizer uma coisa só:', s: 'sussurro' },
        { t: '“Eu pensei em você.”', s: 'destaque' },
      ],
      gato: { kind: 'espreitando', spot: 'superior-direito', opacity: 0.11, size: 58 },
    },

    {
      id: 'c1-olhares',
      type: 'texto',
      heading: 'Os olhares',
      mood: 'quente',
      lines: [
        { t: 'Com o tempo, as pessoas começaram a perceber.' },
        { t: 'A gente olhava muito um pro outro.', pausa: 900 },
        { t: 'E eu não sabia.' },
        { t: 'Não sabia se você gostava de mim.' },
        { t: 'Não sabia o que aqueles olhares queriam dizer.', pausa: 900 },
        { t: 'Mas alguma coisa estava acontecendo.', s: 'destaque' },
      ],
    },

    {
      id: 'c1-beijo',
      type: 'cena',
      cena: 'primeiro-beijo',
      mood: 'quente',
      music: 'memoria',
      folhaInteira: true,
      heading: 'Bonfim',
      titulo: 'Ela tocou no meu ombro.',
      lines: [
        { t: 'Eu virei.', s: 'corpo', pausa: 1400 },
        { t: 'E beijei você.', s: 'destaque', pausa: 2000 },
        { t: 'Meu mundo mudou.', s: 'destaque' },
      ],
      narracao:
        'Até que um dia a gente foi ao Bonfim. E aconteceu. Você tocou no meu ombro. Eu virei. E beijei você. Meu mundo mudou.',
    },

    {
      id: 'c1-ladeira',
      type: 'texto',
      mood: 'quente',
      lines: [
        { t: 'Eu tinha esperado muito tempo por aquilo.' },
        { t: 'E de repente tudo parecia mais bonito.', pausa: 800 },
        { t: 'Eu desci a ladeira do Bonfim gritando de felicidade.' },
        { t: 'Gritando mesmo.', s: 'sussurro', pausa: 900 },
        { t: 'E naquela noite eu estava tão feliz que parecia que eu nem ia conseguir dormir.' },
        { t: 'Depois daquele dia, a gente começou a conversar muito mais pelo Instagram.' },
      ],
      gato: { kind: 'sentado', spot: 'inferior-direito', opacity: 0.13, size: 74 },
    },

    {
      id: 'c1-fim',
      type: 'fim-capitulo',
      mood: 'escuro',
      music: 'silencio',
      folhaInteira: true,
      titulo: 'Fim do capítulo 1',
      narracao: 'Fim do capítulo um.',
    },
  ],
}
