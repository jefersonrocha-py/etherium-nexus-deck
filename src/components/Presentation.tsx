import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slide1Cover from "./slides/Slide1Cover";
import Slide2Diagnosis from "./slides/Slide2Diagnosis";
import Slide3Proposal from "./slides/Slide3Proposal";
import Slide4Impact from "./slides/Slide4Impact";
import Slide5Cases from "./slides/Slide5Cases";

const slides = [
  { id: 1, component: Slide1Cover },
  { id: 2, component: Slide2Diagnosis },
  { id: 3, component: Slide3Proposal },
  { id: 4, component: Slide4Impact },
  { id: 5, component: Slide5Cases },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen bg-[hsl(var(--dark-900))] overflow-hidden">
      {/* Slide Container */}
      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1920px] aspect-video bg-[hsl(var(--background))] rounded-lg shadow-2xl overflow-hidden relative">
          <CurrentSlideComponent key={currentSlide} direction={direction} />
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="absolute bottom-0 left-0 right-0 h-16 bg-[hsl(var(--dark-800))]/95 backdrop-blur-sm border-t border-[hsl(var(--border))]/30 flex items-center justify-between px-8 z-50">
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
