import { useEffect, useState } from "react";
import { MapPin, Wifi, Network, CheckCircle2, Shield, BarChart3 } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import casesSucessoBg from "@/assets/cases-sucesso-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

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

export default function Slide7References({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
            Casos de Referência
          </h1>
        </div>

        {/* Main Content - Case Cards */}
        <div className="flex-1 overflow-hidden pb-2 sm:pb-3">
          <div className="h-full space-y-3 sm:space-y-4 overflow-y-auto pr-1">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-[hsl(var(--card))]/90 to-[hsl(var(--dark-700))]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-[hsl(var(--border))]/40 hover:border-[hsl(var(--primary))]/70 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[hsl(var(--border))]/20 transition-all duration-300 group-hover:border-[hsl(var(--primary))]/40">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[hsl(var(--primary))] transition-colors">
                    {caseItem.city}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-[hsl(var(--text-secondary))] mb-4 group-hover:text-[hsl(var(--foreground))] transition-colors leading-relaxed">
                  {caseItem.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {caseItem.badges.map((badge, badgeIndex) => (
                    <div
                      key={badgeIndex}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[hsl(var(--primary))]/15 border border-[hsl(var(--primary))]/40 group-hover:bg-[hsl(var(--primary))]/25 group-hover:border-[hsl(var(--primary))]/60 transition-all duration-300 hover:scale-105"
                    >
                      <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                      <span className="text-xs sm:text-sm md:text-base text-[hsl(var(--text-primary))] font-medium whitespace-nowrap">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - KPIs */}
        <div className="mt-3 sm:mt-4">
          {/* KPI Cards */}
          <div
            className={`grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/25 to-[hsl(var(--dark-800))]/90 rounded-lg p-3 sm:p-4 md:p-5 text-center border border-[hsl(var(--primary))]/40 hover:scale-105 transition-transform"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))]">
                  {kpi.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-[hsl(var(--text-secondary))] mt-1">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-3 sm:mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "950ms" }}
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
