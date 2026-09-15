# Narração

Por padrão o livro usa a voz de síntese do próprio sistema (Web Speech API),
em pt-BR, preferindo uma voz feminina. Ela funciona em qualquer navegador e
não precisa de nenhum download — mas **ainda soa como uma voz de computador.**

O roteiro pede outra coisa: alguém lendo uma carta muito pessoal. Isso só se
consegue com uma gravação de verdade.

## Como colocar uma voz real

1. Grave (ou gere com um serviço de TTS licenciado) um arquivo por página.
2. Salve nesta pasta usando o `id` da página, por exemplo
   `public/narracao/c1-escola.mp3`.
3. Aponte na página, em `src/data/`:

```ts
{
  id: 'c1-escola',
  type: 'texto',
  narracaoAudio: '/narracao/c1-escola.mp3',
  // ...
}
```

Pronto. A gravação toca no lugar da voz sintética, e a trilha abaixa sozinha
enquanto ela fala. Se o arquivo faltar, o livro volta para a voz do sistema
em vez de ficar mudo.

## Dicas de gravação

- Perto do microfone, volume baixo, sem "locução". Respirando.
- Respeite os silêncios: onde a página tem `pausa: 1800`, fique quieta quase
  dois segundos. O silêncio é parte do texto.
- MP3 ou M4A, mono, 96–128 kbps já basta — a voz fica acima da trilha.
- Não precisa gravar todas as páginas de uma vez. As que tiverem arquivo usam
  a gravação; as outras seguem com a voz do sistema.

O texto exato de cada página está em `narracao:` (quando existe) ou é montado
a partir das linhas — veja `textoNarrado()` em `src/audio/narration.ts`.
