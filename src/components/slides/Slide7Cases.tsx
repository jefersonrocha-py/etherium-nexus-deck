import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Wifi, Network, CheckCircle2, Shield, BarChart3 } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import caseWifiPortal from "@/assets/case-wifi-portal.jpeg";
import caseServicos1 from "@/assets/case-servicos-1.jpeg";
import caseServicos2 from "@/assets/case-servicos-2.jpeg";
import caseServicos3 from "@/assets/case-servicos-3.jpeg";
import casesSucessoBg from "@/assets/cases-sucesso-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

const carouselImages = [
  {
    src: caseWifiPortal,
    title: "Portal Wi-Fi Cativo",
    description: "Autenticação inteligente e experiência personalizada"
  },
  {
    src: caseServicos1,
    title: "Serviços Digitais Integrados",
    description: "Portal da Transparência, Agendamentos e Tributos"
  },
  {
    src: caseServicos2,
    title: "Plataforma Completa",
    description: "Geoportal, Assistência Farmacêutica e Saneamento"
  },
  {
    src: caseServicos3,
    title: "Gestão Municipal Digital",
    description: "Nota Fiscal, Multas, ICMS e Portal do Servidor"
  }
];

const portalCativo = {
  city: "Portal Cativo",
  description: "Solução completa para autenticação de usuários em redes Wi-Fi públicas com integração de serviços digitais municipais",
  badges: [
    { text: "15+ serviços digitais", icon: BarChart3 },
    { text: "LGPD compliant", icon: Shield },
    { text: "Portal da Transparência", icon: CheckCircle2 },
  ],
};

const kpis = [
  { label: "Adoção", value: "85%" },
  { label: "Usuários/mês", value: "120k+" },
  { label: "Serviços", value: "15+" },
];

export default function Slide7Cases({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={casesSucessoBg}
          alt="Cases de Sucesso Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay suave para efeito glass */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/70 via-[hsl(var(--background))]/80 to-[hsl(var(--background))]/85" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-5 md:p-8 lg:p-12">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Cases de Sucesso
          </h1>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 overflow-hidden">
          {/* Left Column - Carousel (maior destaque) */}
          <div className="flex items-center justify-center lg:col-span-3">
            <div
              className={`w-full relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[hsl(var(--card))]/30 to-[hsl(var(--dark-700))]/40 border-2 border-[hsl(var(--primary))]/60 shadow-[0_10px_40px_rgba(166,255,217,0.3)] transition-all duration-700 hover:shadow-[0_15px_50px_rgba(166,255,217,0.5)] hover:scale-[1.02] ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {/* Carousel Container */}
              <div className="relative aspect-video">
                {/* Images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImage 
                        ? "opacity-100 z-10" 
                        : "opacity-0 z-0"
                    }`}
                  >
                    {/* Image with proper sizing */}
                    <div className="absolute inset-0 p-3 sm:p-4 flex flex-col">
                      <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                        <img 
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Caption at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/90 to-transparent backdrop-blur-sm p-3 sm:p-4 border-t border-[hsl(var(--primary))]/30">
                      <h3 className={`text-xs sm:text-sm md:text-base font-bold text-[hsl(var(--primary))] mb-1 transition-all duration-500 ${
                        index === currentImage ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}>
                        {image.title}
                      </h3>
                      <p className={`text-xs text-[hsl(var(--foreground))] transition-all duration-500 delay-100 ${
                        index === currentImage ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}>
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--background))]/90 backdrop-blur-md border border-[hsl(var(--primary))]/50 flex items-center justify-center hover:bg-[hsl(var(--primary))]/90 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))] hover:text-white" strokeWidth={2.5} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--background))]/90 backdrop-blur-md border border-[hsl(var(--primary))]/50 flex items-center justify-center hover:bg-[hsl(var(--primary))]/90 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))] hover:text-white" strokeWidth={2.5} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? "bg-[hsl(var(--primary))] w-8 shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]" 
                          : "bg-[hsl(var(--muted-foreground))]/40 w-2 hover:bg-[hsl(var(--muted-foreground))]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Portal Cativo Card */}
          <div className="space-y-3 overflow-y-auto pr-1 lg:col-span-2 flex flex-col">
            {/* Portal Cativo Card com efeito glass */}
            <div
              className={`group backdrop-blur-xl bg-gradient-to-br from-[hsl(var(--card))]/40 via-[hsl(var(--dark-700))]/30 to-[hsl(var(--dark-800))]/40 rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/70 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(166,255,217,0.4)] transition-all duration-500 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[hsl(var(--primary))]/20 transition-all duration-300 group-hover:border-[hsl(var(--primary))]/50">
                <Wifi className="w-6 h-6 sm:w-7 sm:h-7 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] transition-colors">
                  {portalCativo.city}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] mb-4 group-hover:text-[hsl(var(--foreground))] transition-colors leading-relaxed">
                {portalCativo.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {portalCativo.badges.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-md bg-[hsl(var(--primary))]/20 border border-[hsl(var(--primary))]/50 group-hover:bg-[hsl(var(--primary))]/30 group-hover:border-[hsl(var(--primary))]/70 transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm text-[hsl(var(--text-primary))] font-medium whitespace-nowrap">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Cards com efeito glass suavizado */}
            <div
              className={`grid grid-cols-3 gap-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              {kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-gradient-to-br from-[hsl(var(--primary))]/20 via-[hsl(var(--card))]/30 to-[hsl(var(--dark-800))]/40 rounded-xl p-3 sm:p-4 text-center border-2 border-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/60 hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--primary))]">
                    {kpi.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mt-1">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-2 sm:mt-3 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-5 sm:h-6 md:h-7 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
