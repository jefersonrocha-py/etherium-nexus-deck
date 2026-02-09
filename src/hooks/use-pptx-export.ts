import { useState, useCallback } from "react";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";

interface SlideConfig {
  id: number;
  component: React.ComponentType<{ direction: "next" | "prev" }>;
}

export function usePptxExport(slides: SlideConfig[]) {
  const [isExporting, setIsExporting] = useState(false);

  const exportPptx = useCallback(async () => {
    if (isExporting) return;
    setIsExporting(true);

    try {
      const pptx = new PptxGenJS();
      pptx.layout = "LAYOUT_WIDE"; // 13.33" x 7.5" (16:9)

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.left = "-9999px";
      container.style.top = "0";
      container.style.width = "1920px";
      container.style.height = "1080px";
      container.style.overflow = "hidden";
      document.body.appendChild(container);

      for (let i = 0; i < slides.length; i++) {
        const slideWrapper = document.createElement("div");
        slideWrapper.style.width = "1920px";
        slideWrapper.style.height = "1080px";
        slideWrapper.style.position = "relative";
        slideWrapper.style.overflow = "hidden";
        container.appendChild(slideWrapper);

        const root = createRoot(slideWrapper);
        root.render(createElement(slides[i].component, { direction: "next" as const }));

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const canvas = await html2canvas(slideWrapper, {
          width: 1920,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);

        const slide = pptx.addSlide();
        slide.background = { data: imgData };

        root.unmount();
        container.removeChild(slideWrapper);
      }

      document.body.removeChild(container);
      await pptx.writeFile({ fileName: "etheriumtech-apresentacao.pptx" });
    } catch (error) {
      console.error("Error exporting PPTX:", error);
    } finally {
      setIsExporting(false);
    }
  }, [slides, isExporting]);

  return { exportPptx, isExporting };
}
