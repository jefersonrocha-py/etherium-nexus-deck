import { useEffect, useState } from "react";
import { DollarSign, Building2, Users, Award, Cpu } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";

interface SlideProps {
  direction: "next" | "prev";
}

const impacts = [
  {
    icon: DollarSign,
    dimension: "Financeira",
    benefit: "Redução de 30% a 40% em contratos de telecomunicação",
  },
  {
    icon: Building2,
    dimension: "Administrativa",
    benefit: "Interligação total das secretarias e padronização digital",
  },
  {
    icon: Users,
    dimension: "Social",
    benefit: "Inclusão digital e acesso universal a serviços públicos",
  },
  {
    icon: Award,
    dimension: "Política",
    benefit: "Legado de gestão moderna, conectada e humana",
  },
  {
    icon: Cpu,
    dimension: "Tecnológica",
    benefit: "Base pronta para Cidades Inteligentes e soluções IoT",
  },
];

export default function Slide4Impact({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-12 lg:p-14">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-3 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Impacto Tangível
          </h1>
          <p
            className={`text-lg md:text-xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Resultados visíveis de curto e longo prazo
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Impact Table */}
          <div className="mb-8 md:mb-12">
            <div className="overflow-hidden rounded-xl border border-[hsl(var(--border))]/30 bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--dark-700))]">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 md:gap-6 p-4 md:p-6 border-b border-[hsl(var(--border))]/20 last:border-b-0 hover:bg-[hsl(var(--primary))]/5 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(var(--primary))]/20 flex items-center justify-center">
                    <impact.icon className="w-6 h-6 text-[hsl(var(--primary))]" strokeWidth={2} />
                  </div>

                  {/* Dimension */}
                  <div className="flex-shrink-0 w-32 md:w-40">
                    <h3 className="text-base md:text-lg font-bold text-[hsl(var(--primary))]">
                      {impact.dimension}
                    </h3>
                  </div>

                  {/* Separator */}
                  <div className="hidden md:block w-px h-8 bg-[hsl(var(--border))]/30" />

                  {/* Benefit */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-[hsl(var(--text-secondary))] leading-relaxed">
                      {impact.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Message */}
          <div
            className={`bg-gradient-to-r from-[hsl(var(--primary))]/10 via-[hsl(var(--dark-800))] to-[hsl(var(--primary))]/10 rounded-xl p-6 md:p-8 border border-[hsl(var(--primary))]/30 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-4 text-center">
              De projeto técnico a legado de gestão.
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-[hsl(var(--text-primary))] leading-relaxed">
              <p>
                O senhor pode instituir o <strong className="text-[hsl(var(--primary))]">Programa Municipal de Conectividade e Governo Digital</strong>, 
                integrando conectividade, Wi-Fi e serviços públicos em um único ecossistema.
              </p>
              
              <p className="text-base md:text-lg">
                É uma entrega que fica para a história: <strong className="text-[hsl(var(--primary))]">o prefeito que conectou a cidade, 
                digitalizou a gestão e simplificou a vida das pessoas.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-6 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-7 md:h-9 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
