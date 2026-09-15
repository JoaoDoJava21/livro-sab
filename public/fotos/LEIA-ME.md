# Fotografias

Nenhuma foto foi inventada. Enquanto não houver imagens reais, o livro mostra
espaços claramente reservados — molduras vazias, no lugar certo.

## Como colocar uma foto de verdade

1. Salve o arquivo nesta pasta, por exemplo `public/fotos/bonfim.jpg`.
2. Abra o capítulo correspondente em `src/data/` e preencha o campo `src`:

```ts
{
  id: 'c1-xbox',
  type: 'memoria',
  fotos: [
    {
      src: '/fotos/bonfim.jpg',
      alt: 'A ladeira do Bonfim',
      legenda: 'Bonfim',
      style: 'polaroid',   // polaroid | impressa | fita | envelope | inclinada
      tilt: -3,            // inclinação em graus
    },
  ],
}
```

## Recomendações

- JPG ou WebP, no máximo ~1600px no lado maior — as molduras são pequenas.
- As fotos já carregam em *lazy load*; não é preciso fazer nada.
- `alt` é lido por leitores de tela: descreva a foto em uma frase curta.
