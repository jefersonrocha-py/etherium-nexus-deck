
# Capturar Cards Expandidos no Export PPTX

## Problema
O Slide4Impact tem cards que expandem ao hover (`expandedCard` state), mas durante a exportacao PPTX, o componente renderiza com `expandedCard = null`, perdendo completamente o conteudo expandido.

Alem disso, o card expandido usa `fixed inset-0 z-50`, que nao funciona corretamente dentro do container off-screen usado pelo `html2canvas`.

## Solucao
Adicionar uma prop opcional `forceExpandedCard` ao `Slide4Impact` que forca um card especifico a ficar expandido. Durante a exportacao, apos capturar o slide principal (sem card expandido), renderizar 5 slides adicionais -- um para cada card de impacto expandido.

O card expandido tambem precisa ser ajustado para usar `absolute` em vez de `fixed` quando renderizado via prop, para funcionar dentro do container off-screen.

## Alteracoes

### 1. `src/components/slides/Slide4Impact.tsx`
- Adicionar prop opcional `forceExpandedCard?: number | null`
- Usar `forceExpandedCard` quando fornecido (ignorando o estado interno)
- Quando `forceExpandedCard` estiver definido, trocar `fixed inset-0` por `absolute inset-0` para compatibilidade com `html2canvas`
- Remover animacoes (fade-in, scale-in) quando forceExpandedCard esta ativo, para captura limpa

### 2. `src/hooks/use-pptx-export.ts`
- Atualizar a interface `SlideConfig` para aceitar `extraSlides` opcionais (array de props extras para gerar slides adicionais do mesmo componente)
- Apos renderizar o Slide4Impact normalmente, renderizar 5 versoes extras, cada uma com `forceExpandedCard` setado para 0, 1, 2, 3 e 4
- Cada versao expandida sera capturada como um slide separado no PPTX

### 3. `src/components/Presentation.tsx`
- Atualizar a config do slide 4 para incluir os `extraSlides` com as props de cada card expandido

## Resultado Final
O PPTX tera:
1. Slide 1 - Cover
2. Slide 2 - Diagnosis
3. Slide 3 - Proposal
4. Slide 4 - Impact (visao geral dos cards)
5. Slide 4a - Impact Card "Financeira" expandido
6. Slide 4b - Impact Card "Administrativa" expandido
7. Slide 4c - Impact Card "Social" expandido
8. Slide 4d - Impact Card "Politica" expandido
9. Slide 4e - Impact Card "Tecnologica" expandido
10. Slide 5 - Connection
11. Slide 6 - Cases
