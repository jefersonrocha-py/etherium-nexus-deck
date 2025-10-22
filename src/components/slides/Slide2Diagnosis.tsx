import { useEffect, useState } from "react";
import { Network, WifiOff, Users } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";

interface SlideProps {
  direction: "next" | "prev";
}

const challenges = [
  {
    icon: Network,
    number: "1️⃣",
    text: "Infraestrutura fragmentada — cada secretaria tem seu próprio contrato de internet",
  },
  {
    icon: WifiOff,
    number: "2️⃣",
    text: "Baixa conectividade — escolas e unidades de saúde sem rede estável",
  },
  {
    icon: Users,
    number: "3️⃣",
    text: "Distância entre governo e cidadão — serviços públicos difíceis de acessar, filas, papel e perda de tempo",
  },
];

export default function Slide2Diagnosis({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-12 lg:p-16">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--foreground))] mb-4 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Diagnóstico de Realidade
          </h1>
          <p
            className={`text-xl md:text-2xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            O desafio atual das cidades brasileiras.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-6xl mx-auto">
            {/* Introduction */}
            <p
              className={`text-xl md:text-2xl text-[hsl(var(--text-primary))] mb-10 transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Hoje, os municípios convivem com três grandes barreiras:
            </p>

            {/* Challenges Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-xl p-6 md:p-8 border border-[hsl(var(--border))]/30 hover:border-[hsl(var(--primary))]/50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${450 + index * 120}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <challenge.icon className="w-8 h-8 text-[hsl(var(--primary))]" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl">{challenge.number}</span>
                  </div>
                  
                  <p className="text-base md:text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
                    {challenge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-8 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
