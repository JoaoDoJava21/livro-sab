# Trilha sonora

## Por que não estão aqui as quatro músicas de referência

As faixas citadas no roteiro — *Futile Devices*, *Je te laisserai des mots*,
*the wisp sings* e *Sparks* — são obras protegidas por direitos autorais.
Não é possível distribuí-las junto com este projeto, nem recriar as melodias
delas: uma recriação também é derivada da obra original.

## O que existe no lugar

Quatro peças **instrumentais originais**, sintetizadas no próprio navegador
(`src/audio/ScoreEngine.ts`). Harmonia, timbre e andamento são próprios, e
foram escritos para cumprir a mesma função emocional de cada trecho:

| Momento da história | Peça | Caráter |
| --- | --- | --- |
| A descoberta, o início | `descoberta` | maior, luminosa, esparsa |
| A amizade, a casa dela, a rede | `memoria` | mais grave, morna, como lembrança |
| A separação e os dois anos | `tempo` | quase só ar e uma nota longa |
| O reencontro e o final | `reencontro` | mais quente, com melodia ascendente |

A trilha entra sozinha, em *fade*, entre 8% e 15% do volume máximo, e abaixa
mais ainda quando a narração fala. Nunca aparece um "tocando agora".

## Se você licenciar áudio real

1. Coloque os arquivos aqui: `descoberta.mp3`, `memoria.mp3`, `tempo.mp3`,
   `reencontro.mp3`.
2. Em `src/audio/ScoreEngine.ts`, troque a síntese por um `<audio>` com
   *crossfade* — a interface pública (`play`, `setVolume`, `duck`, `setMuted`)
   já é a que o resto do projeto usa, então nada mais precisa mudar.

A experiência funciona inteira sem áudio nenhum.
