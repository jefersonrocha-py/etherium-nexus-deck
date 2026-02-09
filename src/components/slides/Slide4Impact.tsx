import { useEffect, useState } from "react";
import { DollarSign, Building2, Users, Award, Cpu } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import financeiroBg from "@/assets/financeiro-bg.png";
import administrativoBg from "@/assets/administrativo-bg.png";
import socialBg from "@/assets/social-bg.png";
import politicaBg from "@/assets/politica-bg.png";
import tecnologiaBg from "@/assets/tecnologia-bg.png";
import impactoTangivelBg from "@/assets/impacto-tangivel-bg.png";

interface SlideProps {
  direction: "next" | "prev";
  forceExpandedCard?: number | null;
}

const impacts = [
  {
    icon: DollarSign,
    dimension: "Financeira",
    benefit: "Redução de 30% a 40% em contratos de telecomunicação",
    bgImage: financeiroBg
  },
  {
    icon: Building2,
    dimension: "Administrativa",
    benefit: "Interligação total das secretarias e padronização digital",
    bgImage: administrativoBg
  },
  {
    icon: Users,
    dimension: "Social",
    benefit: "Inclusão digital e acesso universal a serviços públicos",
    bgImage: socialBg
  },
  {
    icon: Award,
    dimension: "Política",
    benefit: "Legado de gestão moderna, conectada e humana",
    bgImage: politicaBg
  },
  {
    icon: Cpu,
    dimension: "Tecnológica",
    benefit: "Base pronta para Cidades Inteligentes e soluções IoT",
    bgImage: tecnologiaBg
  },
];

export default function Slide4Impact({ direction, forceExpandedCard }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const isForced = forceExpandedCard != null;
  const activeExpanded = isForced ? forceExpandedCard : expandedCard;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={impactoTangivelBg}
          alt="Impacto Tangível Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay bem suave para efeito glass */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/65 via-[hsl(var(--background))]/75 to-[hsl(var(--background))]/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-1 sm:mb-2 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Impacto Tangível
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Resultados visíveis de curto e longo prazo
          </p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-5">
          {/* Impact Cards Grid */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 relative">
            {impacts.map((impact, index) => (
              <>
                {/* Card Normal */}
                <div
                  key={index}
                  onMouseEnter={() => setExpandedCard(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer min-h-[180px] sm:min-h-[200px] md:min-h-[220px] ${
                    activeExpanded === index ? "invisible" : "hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{ backgroundImage: `url(${impact.bgImage})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/20 via-[hsl(var(--background))]/35 to-[hsl(var(--background))]/50 hover:from-[hsl(var(--background))]/30 hover:via-[hsl(var(--background))]/45 hover:to-[hsl(var(--background))]/60 transition-all duration-500" />

                  {/* Glass Card Content */}
                  <div className="relative backdrop-blur-md bg-[hsl(var(--card))]/15 border border-[hsl(var(--border))]/30 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between transition-all duration-500 hover:backdrop-blur-lg hover:bg-[hsl(var(--card))]/25 hover:border-[hsl(var(--primary))]/50 hover:shadow-[0_8px_32px_rgba(var(--primary-rgb),0.2)]">
                    <div>
                      {/* Icon */}
                      <div className="mb-3 sm:mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/40 to-[hsl(var(--primary))]/20 backdrop-blur-sm border border-[hsl(var(--primary))]/40 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.6)]">
                        <impact.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                      </div>

                      {/* Dimension */}
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[hsl(var(--foreground))] mb-2 sm:mb-3 drop-shadow-md transition-colors duration-300 hover:text-[hsl(var(--primary))]">
                        {impact.dimension}
                      </h3>
                    </div>

                    {/* Benefit */}
                    <p className="text-xs sm:text-sm md:text-base text-[hsl(var(--foreground))] leading-relaxed drop-shadow">
                      {impact.benefit}
                    </p>
                  </div>
                </div>

                {/* Card Expandido - Portal centralizado */}
                {activeExpanded === index && (
                  <div
                    className={`${isForced ? "absolute" : "fixed"} inset-0 z-50 flex items-center justify-center p-4 sm:p-8 ${isForced ? "" : "animate-fade-in"}`}
                    onMouseLeave={isForced ? undefined : () => setExpandedCard(null)}
                  >
                    {/* Backdrop */}
                    <div className={`absolute inset-0 bg-black/70 backdrop-blur-md ${isForced ? "" : "animate-fade-in"}`} />

                    {/* Card Expandido */}
                    <div className={`relative w-full max-w-5xl ${isForced ? "" : "animate-scale-in"}`}>
                      <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center scale-110"
                          style={{ backgroundImage: `url(${impact.bgImage})` }}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/50 via-[hsl(var(--background))]/70 to-[hsl(var(--background))]/85" />

                        {/* Content */}
                        <div className="relative backdrop-blur-xl bg-[hsl(var(--card))]/30 border-2 border-[hsl(var(--primary))]/60 p-6 sm:p-8 md:p-12">
                          {/* Header */}
                          <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
                            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/50 to-[hsl(var(--primary))]/30 backdrop-blur-sm border-2 border-[hsl(var(--primary))]/60 shadow-[0_0_40px_rgba(var(--primary-rgb),0.7)] animate-pulse-glow">
                              <impact.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                            </div>
                            
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-2 sm:mb-3 drop-shadow-lg">
                                {impact.dimension}
                              </h2>
                              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[hsl(var(--foreground))] drop-shadow">
                                {impact.benefit}
                              </p>
                            </div>
                          </div>

                          {/* Dashboard Metrics */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
                            <div className="bg-gradient-to-br from-[hsl(var(--dark-800))]/90 to-[hsl(var(--dark-700))]/90 rounded-xl p-4 sm:p-5 border border-[hsl(var(--primary))]/40 backdrop-blur-md hover:scale-105 transition-transform animate-slide-up" style={{ animationDelay: "200ms" }}>
                              <div className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-2">Impacto Direto</div>
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">+{30 + index * 10}%</div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-[hsl(var(--dark-800))]/90 to-[hsl(var(--dark-700))]/90 rounded-xl p-4 sm:p-5 border border-[hsl(var(--primary))]/40 backdrop-blur-md hover:scale-105 transition-transform animate-slide-up" style={{ animationDelay: "300ms" }}>
                              <div className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-2">Prazo de Entrega</div>
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">{6 + index * 2} meses</div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-[hsl(var(--dark-800))]/90 to-[hsl(var(--dark-700))]/90 rounded-xl p-4 sm:p-5 border border-[hsl(var(--primary))]/40 backdrop-blur-md hover:scale-105 transition-transform animate-slide-up" style={{ animationDelay: "400ms" }}>
                              <div className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-2">Beneficiários</div>
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">{50 + index * 20}k+</div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-[hsl(var(--dark-800))]/90 to-[hsl(var(--dark-700))]/90 rounded-xl p-4 sm:p-5 border border-[hsl(var(--primary))]/40 backdrop-blur-md hover:scale-105 transition-transform animate-slide-up" style={{ animationDelay: "500ms" }}>
                              <div className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-2">Status</div>
                              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                                Ativo
                              </div>
                            </div>
                          </div>

                          {/* Additional Info */}
                          <div className="bg-gradient-to-r from-[hsl(var(--primary))]/20 via-[hsl(var(--dark-800))]/80 to-[hsl(var(--primary))]/20 rounded-xl p-4 sm:p-6 border border-[hsl(var(--primary))]/40 backdrop-blur-md animate-slide-up" style={{ animationDelay: "600ms" }}>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] mb-3">Indicadores de Sucesso</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[hsl(var(--foreground))]">
                              <div className="flex items-center gap-2">
                                <span className="text-[hsl(var(--primary))]">✓</span>
                                <span>Redução de custos operacionais</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[hsl(var(--primary))]">✓</span>
                                <span>Aumento na satisfação cidadã</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[hsl(var(--primary))]">✓</span>
                                <span>Modernização da gestão pública</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[hsl(var(--primary))]">✓</span>
                                <span>Legado para futuras gestões</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>

          {/* Legacy Card - Lateral Fixo */}
          <div
            className={`hidden lg:flex w-80 xl:w-96 relative overflow-hidden rounded-xl backdrop-blur-md bg-[hsl(var(--card))]/15 border border-[hsl(var(--primary))]/30 transition-all duration-700 hover:backdrop-blur-lg hover:bg-[hsl(var(--card))]/25 hover:border-[hsl(var(--primary))]/50 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {/* Glass Card Content */}
            <div className="relative p-5 md:p-6 flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--primary))] mb-4 text-center leading-tight">
                De projeto técnico a legado de gestão.
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-[hsl(var(--foreground))] leading-relaxed">
                <p>
                  O senhor pode instituir o <strong className="text-[hsl(var(--primary))]">Programa Municipal de Conectividade e Governo Digital</strong>, 
                  integrando conectividade, Wi-Fi e serviços públicos em um único ecossistema.
                </p>
                
                <p>
                  É uma entrega que fica para a história: <strong className="text-[hsl(var(--primary))]">o prefeito que conectou a cidade, 
                  digitalizou a gestão e simplificou a vida das pessoas.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Card Mobile - Abaixo dos cards principais */}
        <div
          className={`lg:hidden mt-3 sm:mt-4 relative overflow-hidden rounded-xl backdrop-blur-md bg-[hsl(var(--card))]/15 border border-[hsl(var(--primary))]/30 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {/* Glass Card Content */}
          <div className="relative p-4 sm:p-5">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] mb-3 text-center leading-tight">
              De projeto técnico a legado de gestão.
            </h2>
            
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                O senhor pode instituir o <strong className="text-[hsl(var(--primary))]">Programa Municipal de Conectividade e Governo Digital</strong>, 
                integrando conectividade, Wi-Fi e serviços públicos em um único ecossistema.
              </p>
              
              <p>
                É uma entrega que fica para a história: <strong className="text-[hsl(var(--primary))]">o prefeito que conectou a cidade, 
                digitalizou a gestão e simplificou a vida das pessoas.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-3 sm:mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <img 
            src={logoEtherium} 
            alt="Etheriumtech" 
            className="h-5 sm:h-6 md:h-7 lg:h-8 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
