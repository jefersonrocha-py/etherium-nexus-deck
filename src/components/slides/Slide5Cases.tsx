import { useEffect, useState } from "react";
import { MapPin, Wifi, Network, CheckCircle2, Shield, BarChart3 } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import wifiPortalBg from "@/assets/reference-wifi-portal.jpeg";

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

export default function Slide5Cases({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Content */}
      <div className="relative h-full flex flex-col p-6 md:p-10 lg:p-12">
        {/* Header */}
        <div className="mb-6">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Cases de Sucesso
          </h1>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto pb-4">
          {/* Left Column - Featured Case with Image */}
          <div
            className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] border border-[hsl(var(--primary))]/30 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Case Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={wifiPortalBg}
                alt="Portal Wi-Fi Cativo Mogi Mirim"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background))]/60 to-transparent" />
            </div>

            {/* Caption Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--orange-500))] p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Portal Cativo Inteligente
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Solução completa de autenticação, serviços digitais e conformidade LGPD
              </p>
            </div>
          </div>

          {/* Right Column - Case Cards */}
          <div className="space-y-4">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--dark-700))] rounded-xl p-5 md:p-6 border border-[hsl(var(--border))]/30 hover:border-[hsl(var(--primary))]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${450 + index * 120}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[hsl(var(--border))]/20">
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" strokeWidth={2} />
                  <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--primary))]">
                    {caseItem.city}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-[hsl(var(--text-secondary))] mb-4">
                  {caseItem.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.badges.map((badge, badgeIndex) => (
                    <div
                      key={badgeIndex}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30"
                    >
                      <badge.icon className="w-3.5 h-3.5 text-[hsl(var(--primary))]" strokeWidth={2} />
                      <span className="text-xs md:text-sm text-[hsl(var(--text-primary))]">
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
        <div className="mt-6 space-y-4">
          {/* KPI Cards */}
          <div
            className={`grid grid-cols-3 gap-3 md:gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--dark-800))] rounded-lg p-4 text-center border border-[hsl(var(--primary))]/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))]">
                  {kpi.value}
                </div>
                <div className="text-xs md:text-sm text-[hsl(var(--text-secondary))] mt-1">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Message */}
          <div
            className={`bg-gradient-to-r from-[hsl(var(--primary))]/10 via-[hsl(var(--dark-800))] to-[hsl(var(--primary))]/10 rounded-xl p-4 md:p-6 border border-[hsl(var(--primary))]/30 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--primary))] mb-3 text-center">
              Cidades inteligentes nascem da conexão entre pessoas e propósito.
            </h2>
            
            <p className="text-sm md:text-base text-[hsl(var(--text-primary))] leading-relaxed text-center">
              Prefeito, não estamos falando de tecnologia — estamos falando de legado. 
              Uma cidade que se conecta, se transforma. Uma gestão que digitaliza, deixa sua marca. 
              E um cidadão que acessa, acredita novamente em seu governo.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1300ms" }}
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
