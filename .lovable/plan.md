
# Exportar Apresentacao em PDF

## Objetivo
Adicionar um botao de download que gera um PDF com todos os slides da apresentacao.

## Abordagem
Usar as bibliotecas `html2canvas` e `jspdf` para capturar cada slide como imagem e montar um PDF em formato paisagem (16:9).

## Como vai funcionar
1. O usuario clica no botao de download (icone de download) no footer da apresentacao
2. Um loading aparece enquanto o PDF e gerado
3. Cada slide e renderizado em um container oculto, capturado como imagem via `html2canvas`, e adicionado como pagina no PDF
4. O PDF e baixado automaticamente com o nome `etheriumtech-apresentacao.pdf`

## Alteracoes

### 1. Instalar dependencias
- `html2canvas` - para capturar os slides como imagens
- `jspdf` - para gerar o arquivo PDF

### 2. Criar hook `usePdfExport`
- Arquivo: `src/hooks/use-pdf-export.ts`
- Responsavel por:
  - Renderizar cada slide em um container temporario off-screen
  - Capturar com `html2canvas`
  - Montar o PDF com `jspdf` em formato paisagem
  - Retornar funcao `exportPdf` e estado `isExporting`

### 3. Atualizar `src/components/Presentation.tsx`
- Importar o hook `usePdfExport`
- Importar icone `Download` do lucide-react
- Adicionar botao de download no footer, ao lado do botao de fullscreen
- Mostrar icone de loading (Loader2 com animacao de spin) enquanto exporta
- Passar a lista de componentes de slides para o hook

## Detalhes Tecnicos

- O PDF sera gerado em formato A4 paisagem com proporcao 16:9
- Cada slide sera renderizado em 1920x1080 para maxima qualidade
- O container temporario sera posicionado off-screen (`position: fixed, left: -9999px`) para nao afetar a UI
- As imagens serao inseridas como JPEG com qualidade 0.95 para equilibrar qualidade e tamanho do arquivo
