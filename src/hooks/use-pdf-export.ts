import { useState, useCallback } from "react";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface SlideConfig {
  id: number;
  component: React.ComponentType<{ direction: "next" | "prev" }>;
}

export function usePdfExport(slides: SlideConfig[]) {
  const [isExporting, setIsExporting] = useState(false);

  const exportPdf = useCallback(async () => {
    if (isExporting) return;
    setIsExporting(true);

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080],
      });

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

        // Wait for render and images to load
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

        if (i > 0) {
          pdf.addPage([1920, 1080], "landscape");
        }

        pdf.addImage(imgData, "JPEG", 0, 0, 1920, 1080);

        root.unmount();
        container.removeChild(slideWrapper);
      }

      document.body.removeChild(container);
      pdf.save("etheriumtech-apresentacao.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      setIsExporting(false);
    }
  }, [slides, isExporting]);

  return { exportPdf, isExporting };
}
