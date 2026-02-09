import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePptxExport } from "@/hooks/use-pptx-export";
import Slide1Cover from "./slides/Slide1Cover";
import Slide2Diagnosis from "./slides/Slide2Diagnosis";
import Slide3Proposal from "./slides/Slide3Proposal";
import Slide4Impact from "./slides/Slide4Impact";
import Slide6Connection from "./slides/Slide6Connection";
import Slide7Cases from "./slides/Slide7Cases";

const slides = [
  { id: 1, component: Slide1Cover },
  { id: 2, component: Slide2Diagnosis },
  { id: 3, component: Slide3Proposal },
  { id: 4, component: Slide4Impact },
  { id: 5, component: Slide6Connection },
  { id: 6, component: Slide7Cases },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { exportPptx, isExporting } = usePptxExport(slides);
  
  // Detecta se é iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator as any).standalone;
  
  // No iOS, fullscreen só funciona em standalone mode (PWA instalado)
  const fullscreenSupported = !isIOS || isInStandaloneMode;

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection("next");
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = async () => {
    try {
      const docElement = document.documentElement as any;
      
      // Verifica se já está em fullscreen
      const isInFullscreen = 
        document.fullscreenElement || 
        docElement.webkitFullscreenElement || 
        docElement.mozFullScreenElement ||
        docElement.msFullscreenElement;

      if (!isInFullscreen) {
        // Tenta entrar em fullscreen com suporte para diferentes navegadores
        if (docElement.requestFullscreen) {
          await docElement.requestFullscreen();
        } else if (docElement.webkitRequestFullscreen) {
          await docElement.webkitRequestFullscreen();
        } else if (docElement.webkitEnterFullscreen) {
          await docElement.webkitEnterFullscreen();
        } else if (docElement.mozRequestFullScreen) {
          await docElement.mozRequestFullScreen();
        } else if (docElement.msRequestFullscreen) {
          await docElement.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        // Tenta sair do fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (docElement.webkitExitFullscreen) {
          await docElement.webkitExitFullscreen();
        } else if (docElement.mozCancelFullScreen) {
          await docElement.mozCancelFullScreen();
        } else if (docElement.msExitFullscreen) {
          await docElement.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };

    const handleFullscreenChange = () => {
      const docElement = document.documentElement as any;
      const isInFullscreen = 
        document.fullscreenElement || 
        docElement.webkitFullscreenElement || 
        docElement.mozFullScreenElement ||
        docElement.msFullscreenElement;
      setIsFullscreen(!!isInFullscreen);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen bg-[hsl(var(--dark-900))] overflow-hidden">
      {/* Slide Container */}
      <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full h-full sm:h-auto sm:max-w-[95vw] sm:aspect-video bg-[hsl(var(--background))] sm:rounded-lg shadow-2xl overflow-hidden relative">
          <CurrentSlideComponent key={currentSlide} direction={direction} />
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="absolute bottom-0 left-0 right-0 h-16 bg-[hsl(var(--dark-800))]/95 backdrop-blur-sm border-t border-[hsl(var(--border))]/30 flex items-center justify-between px-4 sm:px-8 z-50">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-foreground hover:bg-[hsl(var(--primary))]/20 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="text-foreground hover:bg-[hsl(var(--primary))]/20 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          {fullscreenSupported && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-foreground hover:bg-[hsl(var(--primary))]/20"
              aria-label={isFullscreen ? "Sair do modo tela cheia" : "Entrar em tela cheia"}
            >
              {isFullscreen ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={exportPptx}
            disabled={isExporting}
            className="text-foreground hover:bg-[hsl(var(--primary))]/20 disabled:opacity-50"
            aria-label="Baixar PDF"
          >
            {isExporting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Download className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[hsl(var(--primary))] w-8"
                    : "bg-[hsl(var(--muted-foreground))]/40 group-hover:bg-[hsl(var(--muted-foreground))]/70"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-sm text-[hsl(var(--text-secondary))] font-medium min-w-[60px] text-right">
          {currentSlide + 1} / {slides.length}
        </div>
      </footer>
    </div>
  );
}
