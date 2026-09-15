import type { Chapter } from '../types/book'

/** CAPÍTULO 2 — Quando a gente começou a ser “nós”. */
export const chapter2: Chapter = {
  id: 2,
  rotulo: 'Quando a gente virou nós',
  titulo: 'Quando a gente começou a ser “nós”',
  pages: [
    {
      id: 'c2-intro',
      type: 'capitulo',
      titulo: 'Capítulo 2',
      subtitulo: 'Quando a gente começou a ser “nós”',
      mood: 'escuro',
      music: 'memoria',
      folhaInteira: true,
      narracao: 'Capítulo dois. Quando a gente começou a ser nós.',
    },

    {
      id: 'c2-depois',
      type: 'texto',
      heading: 'Depois daquele dia',
      mood: 'quente',
      music: 'memoria',
      lines: [
        { t: 'Depois do primeiro beijo, tudo ficou diferente.', s: 'abertura' },
        { t: 'A gente começou a conversar muito mais no Instagram.' },
        { t: 'Começou a sair mais.', pausa: 800 },
      ],
    },

    {
      id: 'c2-sala-vazia',
      type: 'memoria',
      heading: 'A sala depois da aula',
      mood: 'quente',
      lines: [
        { t: 'Na Costa e Silva, às vezes a gente esperava todo mundo sair da sala.' },
        { t: 'E ficava.', s: 'sussurro', pausa: 1000 },
        { t: 'Não precisava falar muita coisa.' },
        { t: 'Todo mundo ia embora.' },
        { t: 'E a gente simplesmente ficava ali. Junto.', pausa: 1000 },
        { t: 'E pra mim aquilo era suficiente.', s: 'destaque' },
      ],
      gato: { kind: 'dormindo', spot: 'inferior-direito', opacity: 0.12, size: 78 },
    },

    {
      id: 'c2-conexao',
      type: 'texto',
      heading: 'A conexão',
      mood: 'quente',
      lines: [
        { t: 'Eu sentia uma conexão muito forte.' },
        { t: 'Não conseguia pensar em outra coisa.' },
        { t: 'Eu só queria te ver.' },
        { t: 'Só queria estar com você.', pausa: 900 },
        { t: 'Era diferente de tudo que eu já tinha vivido.', s: 'destaque' },
      ],
    },

    {
      id: 'c2-vergonha',
      type: 'texto',
      heading: 'A vergonha',
      mood: 'claro',
      lines: [
        { t: 'Às vezes as pessoas faziam brincadeira.' },
        { t: 'Faziam a gente olhar um pro outro na frente de todo mundo.' },
        { t: 'Como se já soubessem de alguma coisa antes da gente.', pausa: 800 },
        { t: 'E eu ficava extremamente sem graça.', s: 'sussurro' },
      ],
    },

    {
      id: 'c2-inseguranca',
      type: 'carta',
      heading: 'Uma confissão',
      mood: 'neutro',
      lines: [
        { t: 'Eu nunca me achei um cara tão bonito.' },
        { t: 'Eu sabia disso.', s: 'sussurro' },
        { t: 'E muito menos achava que estava à sua altura.', pausa: 1000 },
        { t: 'Por isso estar perto de você parecia quase inacreditável.' },
        { t: '“Como é que eu estou aqui?”', s: 'destaque', pausa: 1200 },
        { t: 'Mas eu estava.' },
        { t: 'E aquilo era lindo.', s: 'sussurro' },
      ],
      gato: { kind: 'patinha', spot: 'inferior-esquerdo', opacity: 0.1, size: 48 },
    },

    {
      id: 'c2-fase-boa',
      type: 'memoria',
      heading: 'A fase boa',
      mood: 'claro',
      lines: [
        { t: 'Quanto mais tempo a gente passava junto, mais bonito ficava.' },
      ],
      itens: ['Leve', 'Saudável', 'Calmo', 'Cheio de piada', 'Cheio de risada', 'Sem peso'],
      fotos: [{ style: 'polaroid', legenda: 'sem precisar forçar nada', tilt: 3 }],
    },

    {
      id: 'c2-aniversario',
      type: 'texto',
      heading: 'O aniversário',
      mood: 'claro',
      music: 'memoria',
      lines: [
        { t: 'No seu aniversário aconteceu uma coisa que virou uma das nossas piadas.' },
        { t: 'Vinícius — o Babão — derrubou um copo de vidro na sua casa.', pausa: 900 },
        { t: 'Vinícius namorava Adriele.' },
        { t: 'E aquilo virou piada recorrente entre a gente.', pausa: 700 },
        { t: 'Toda vez que lembrava:', s: 'sussurro' },
        { t: 'risada.', s: 'manuscrito' },
      ],
    },

    {
      id: 'c2-rede',
      type: 'memoria',
      heading: 'A rede',
      mood: 'quente',
      music: 'memoria',
      lines: [
        { t: 'A gente passava muito tempo na rede da sua casa.' },
        { t: 'Às vezes só ficava ali.', s: 'sussurro', pausa: 900 },
        { t: 'Eu levava meu Xbox.' },
        { t: 'Isaac, seu irmão, também estava por perto.' },
        { t: 'E a gente vivia tentando aproveitar cada segundo junto.' },
      ],
      fotos: [{ style: 'inclinada', legenda: 'a rede', tilt: -5 }],
      gato: { kind: 'dormindo', spot: 'inferior-esquerdo', opacity: 0.16, size: 84 },
    },

    {
      id: 'c2-cinco-minutos',
      type: 'texto',
      mood: 'quente',
      lines: [
        { t: 'Às vezes a gente até passava um pouco dos limites das regras do seu pai e da tia Márcia.' },
        { t: 'Nada grandioso.', s: 'sussurro', pausa: 700 },
        { t: 'Só aquela sensação de adolescente:' },
        { t: '“A gente sabe que não deveria… mas vamos ficar mais cinco minutos.”', s: 'destaque' },
      ],
    },

    {
      id: 'c2-planos',
      type: 'texto',
      heading: 'Os planos',
      mood: 'claro',
      lines: [
        { t: 'A gente fez muito plano.' },
        { t: 'Assistiu filme.' },
        { t: 'Passou muito tempo na sua casa.', pausa: 800 },
        { t: 'Eu queria te levar pra sair mais.' },
        { t: 'Queria conseguir te proporcionar mais coisas.' },
        { t: 'Mas eu não tinha dinheiro.', s: 'sussurro', pausa: 900 },
        { t: 'E mesmo assim a gente encontrava um jeito de aproveitar.' },
      ],
    },

    {
      id: 'c2-vida-pesada',
      type: 'texto',
      heading: 'E então a vida pesou',
      mood: 'frio',
      music: 'tempo',
      lines: [
        { t: 'Até que a vida ficou pesada.', s: 'abertura', pausa: 900 },
        { t: 'Aconteceram algumas coisas muito ruins.' },
        { t: 'Minha vida ficou muito pesada.' },
        { t: 'Eu não sabia direito o que eu estava fazendo.' },
        { t: 'Eu estava desesperado.', pausa: 1100 },
        { t: 'Foi uma fase que mudou a minha vida.' },
        { t: 'Foi algo muito sério.', s: 'sussurro', pausa: 1200 },
        { t: 'Mas essa parte ainda não é pra contar aqui.' },
        { t: 'Ela pertence a outro capítulo.', s: 'sussurro' },
      ],
    },

    {
      id: 'c2-separacao',
      type: 'cena',
      cena: 'apagar',
      mood: 'escuro',
      music: 'tempo',
      folhaInteira: true,
      titulo: 'A gente se separou.',
      lines: [
        { t: 'E naquele momento parecia impossível entender tudo que estava acontecendo.', s: 'sussurro' },
      ],
      narracao: 'O importante aqui é: a gente se separou. E naquele momento parecia impossível entender tudo que estava acontecendo.',
    },

    {
      id: 'c2-nao-terminam',
      type: 'citacao',
      mood: 'escuro',
      music: 'silencio',
      folhaInteira: true,
      lines: [
        { t: '“Algumas histórias não terminam quando acabam.”', s: 'destaque', pausa: 2200 },
        { t: '“Às vezes, elas só mudam de capítulo.”', s: 'destaque' },
      ],
    },

    {
      id: 'c2-fim',
      type: 'fim-capitulo',
      mood: 'escuro',
      music: 'silencio',
      folhaInteira: true,
      titulo: 'Fim do capítulo 2',
      narracao: 'Fim do capítulo dois.',
    },
  ],
}
