import { useEffect, useState } from "react";
import { MapPin, Wifi, Network, CheckCircle2, Shield, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
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

const cases = [
  {
    city: "Mogi Mirim - SP",
    description: "Portal cativo completo com serviços integrados ao cidadão",
    badges: [
      { text: "15+ serviços digitais", icon: BarChart3 },
      { text: "LGPD compliant", icon: Shield },
      { text: "Portal da Transparência", icon: CheckCircle2 },
    ],
  },
  {
    city: "Inclusão Digital",
    description: "Wi-Fi público em praças, escolas e unidades de saúde",
    badges: [
      { text: "85% satisfação", icon: CheckCircle2 },
      { text: "120k+ conexões/mês", icon: Wifi },
      { text: "Cobertura ampliada", icon: MapPin },
    ],
  },
  {
    city: "Rede Metropolitana",
    description: "Backbone de fibra conectando prédios públicos",
    badges: [
      { text: "99.7% uptime", icon: CheckCircle2 },
      { text: "200+ pontos", icon: Network },
      { text: "Latência <5ms", icon: BarChart3 },
    ],
  },
];

const kpis = [
  { label: "Adoção", value: "85%" },
  { label: "Usuários/mês", value: "120k+" },
  { label: "Serviços", value: "15+" },
];

export default function Slide5Cases({ direction }: SlideProps) {
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
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Cases de Sucesso
          </h1>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 overflow-hidden pb-2 sm:pb-3">
          {/* Left Column - Carousel (3 cols) */}
          <div
            className={`lg:col-span-3 relative rounded-xl overflow-hidden backdrop-blur-md bg-[hsl(var(--card))]/20 border-2 border-[hsl(var(--primary))]/40 transition-all duration-700 min-h-[300px] sm:min-h-[400px] ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Carousel Container */}
            <div className="relative h-full w-full">
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
                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col">
                    <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Caption at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/90 to-transparent backdrop-blur-sm p-3 sm:p-4 md:p-5 border-t border-[hsl(var(--primary))]/30">
                    <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[hsl(var(--primary))] mb-1 sm:mb-2 transition-all duration-500 ${
                      index === currentImage ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}>
                      {image.title}
                    </h3>
                    <p className={`text-xs sm:text-sm text-[hsl(var(--foreground))] transition-all duration-500 delay-100 ${
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
                className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--background))]/90 backdrop-blur-md border border-[hsl(var(--primary))]/50 flex items-center justify-center hover:bg-[hsl(var(--primary))]/90 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[hsl(var(--primary))] hover:text-white" strokeWidth={2.5} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--background))]/90 backdrop-blur-md border border-[hsl(var(--primary))]/50 flex items-center justify-center hover:bg-[hsl(var(--primary))]/90 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[hsl(var(--primary))] hover:text-white" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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

          {/* Right Column - Case Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-2 sm:space-y-3 overflow-y-auto pr-1">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-[hsl(var(--card))]/90 to-[hsl(var(--dark-700))]/90 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-5 border border-[hsl(var(--border))]/40 hover:border-[hsl(var(--primary))]/70 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${450 + index * 120}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[hsl(var(--border))]/20 transition-all duration-300 group-hover:border-[hsl(var(--primary))]/40">
                  <MapPin className="w-4 h-4 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[hsl(var(--primary))] transition-colors">
                    {caseItem.city}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-2 sm:mb-3 group-hover:text-[hsl(var(--foreground))] transition-colors leading-tight">
                  {caseItem.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {caseItem.badges.map((badge, badgeIndex) => (
                    <div
                      key={badgeIndex}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 rounded-full bg-[hsl(var(--primary))]/15 border border-[hsl(var(--primary))]/40 group-hover:bg-[hsl(var(--primary))]/25 group-hover:border-[hsl(var(--primary))]/60 transition-all duration-300 hover:scale-105"
                    >
                      <badge.icon className="w-3 h-3 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-[hsl(var(--text-primary))] font-medium whitespace-nowrap">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - KPIs and Closing */}
        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          {/* KPI Cards */}
          <div
            className={`grid grid-cols-3 gap-2 sm:gap-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/25 to-[hsl(var(--dark-800))]/90 rounded-lg p-2 sm:p-3 text-center border border-[hsl(var(--primary))]/40 hover:scale-105 transition-transform"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--primary))]">
                  {kpi.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[hsl(var(--text-secondary))] mt-0.5">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Message */}
          <div
            className={`backdrop-blur-md bg-gradient-to-r from-[hsl(var(--primary))]/15 via-[hsl(var(--dark-800))]/90 to-[hsl(var(--primary))]/15 rounded-lg p-3 sm:p-4 md:p-5 border border-[hsl(var(--primary))]/40 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-[hsl(var(--primary))] mb-2 text-center">
              Cidades inteligentes nascem da conexão entre pessoas e propósito.
            </h2>
            
            <p className="text-xs sm:text-sm text-[hsl(var(--text-primary))] leading-relaxed text-center">
              Prefeito, não estamos falando de tecnologia — estamos falando de legado. 
              Uma cidade que se conecta, se transforma. Uma gestão que digitaliza, deixa sua marca. 
              E um cidadão que acessa, acredita novamente em seu governo.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-3 sm:mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1300ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-5 sm:h-6 md:h-7 lg:h-9 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
