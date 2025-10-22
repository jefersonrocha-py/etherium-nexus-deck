import { useEffect, useState } from "react";
import { Network, WifiOff, Users, AlertCircle } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import smartCityBg from "@/assets/smart-city-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

const challenges = [
  {
    icon: Network,
    number: "1",
    emoji: "🔧",
    title: "Infraestrutura fragmentada",
    text: "Cada secretaria tem seu próprio contrato de internet",
  },
  {
    icon: WifiOff,
    number: "2",
    emoji: "📡",
    title: "Baixa conectividade",
    text: "Escolas e unidades de saúde sem rede estável",
  },
  {
    icon: Users,
    number: "3",
    emoji: "⏱️",
    title: "Distância entre governo e cidadão",
    text: "Serviços públicos difíceis de acessar, filas, papel e perda de tempo",
  },
];

export default function Slide2Diagnosis({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={smartCityBg}
          alt="Smart City"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/85 to-[hsl(var(--background))]/95" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-6 md:p-10 lg:p-16">
        {/* Header with Alert Icon */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/10 flex items-center justify-center border-2 border-[hsl(var(--primary))]/50 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
              }`}
            >
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[hsl(var(--primary))] animate-pulse-glow" strokeWidth={2} />
            </div>
            <div>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[hsl(var(--foreground))] transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                Diagnóstico de Realidade
              </h1>
            </div>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            O desafio atual das cidades brasileiras
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-6xl mx-auto">
            {/* Introduction */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[hsl(var(--text-primary))] mb-6 sm:mb-8 md:mb-10 font-medium transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              Hoje, os municípios convivem com três grandes barreiras:
            </p>

            {/* Challenges Cards with Enhanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/40 via-[hsl(var(--primary))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-[hsl(var(--dark-800))]/90 to-[hsl(var(--dark-700))]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-[hsl(var(--border))]/30 group-hover:border-[hsl(var(--primary))]/60 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    {/* Icon Section with Animation */}
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-[hsl(var(--primary))]/20 flex items-center justify-center border border-[hsl(var(--primary))]/40 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-[hsl(var(--primary))]">{challenge.number}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <challenge.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[hsl(var(--primary))]" strokeWidth={2} />
                      </div>

                      {/* Emoji */}
                      <span className="text-2xl sm:text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                        {challenge.emoji}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] mb-2 sm:mb-3 group-hover:text-[hsl(var(--cyan-400))] transition-colors duration-300">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
                      {challenge.text}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[hsl(var(--primary))]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-6 sm:mt-7 md:mt-8 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-5 sm:h-6 md:h-8 lg:h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
