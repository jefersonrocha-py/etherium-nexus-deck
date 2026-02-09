

# Exportar Apresentacao em PPTX

## Objetivo
Substituir a exportacao em PDF por uma exportacao em PPTX (PowerPoint), permitindo que o usuario baixe a apresentacao em formato editavel.

## Abordagem
Usar a biblioteca `pptxgenjs` para gerar o arquivo PPTX. Cada slide sera capturado como imagem (usando `html2canvas`, que ja esta instalado) e inserido como slide no PowerPoint em formato widescreen 16:9.

## Como vai funcionar
1. O usuario clica no botao de download no footer
2. Loading aparece enquanto o PPTX e gerado
3. Cada slide e renderizado off-screen, capturado como imagem via `html2canvas`
4. Cada imagem e adicionada como slide no PPTX
5. O arquivo `etheriumtech-apresentacao.pptx` e baixado automaticamente

## Alteracoes

### 1. Instalar dependencia
- `pptxgenjs` - biblioteca para gerar arquivos PowerPoint no browser

### 2. Atualizar hook `src/hooks/use-pdf-export.ts`
- Renomear para `src/hooks/use-pptx-export.ts` (ou manter o arquivo e trocar a logica)
- Substituir `jsPDF` por `pptxgenjs`
- Manter a mesma estrategia de captura de slides com `html2canvas`
- Cada imagem capturada sera adicionada como background de um slide PPTX
- Layout widescreen 16:9 (10" x 5.625")
- Remover dependencia `jspdf` (nao sera mais usada)

### 3. Atualizar `src/components/Presentation.tsx`
- Atualizar import do hook (novo nome/funcao)
- Trocar `exportPdf` por `exportPptx` e `isExporting` permanece igual

## Detalhes Tecnicos

- O PPTX sera gerado em formato widescreen 16:9
- `pptxgenjs` aceita imagens base64 diretamente como background de slide
- A captura dos slides continua em 1920x1080 com `html2canvas`
- O `html2canvas` sera mantido como dependencia; `jspdf` sera removido
- As imagens serao inseridas como JPEG com qualidade 0.95

