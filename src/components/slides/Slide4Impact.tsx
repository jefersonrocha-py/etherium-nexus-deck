import { useEffect, useState } from "react";
import { DollarSign, Building2, Users, Award, Cpu } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import financeiroBg from "@/assets/financeiro-bg.png";
import administrativoBg from "@/assets/administrativo-bg.png";
import socialBg from "@/assets/social-bg.png";
import politicaBg from "@/assets/politica-bg.png";
import tecnologiaBg from "@/assets/tecnologia-bg.png";

interface SlideProps {
  direction: "next" | "prev";
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

export default function Slide4Impact({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--dark-800))] overflow-hidden">
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
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.05] hover:z-10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${impact.bgImage})` }}
                />
                
                {/* Overlay suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/30 via-[hsl(var(--background))]/50 to-[hsl(var(--background))]/70" />

                {/* Glass Card Content */}
                <div className="relative backdrop-blur-sm bg-[hsl(var(--card))]/10 border border-[hsl(var(--border))]/20 p-3 sm:p-4 md:p-5 h-full flex flex-col transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-[hsl(var(--card))]/20 group-hover:border-[hsl(var(--primary))]/50 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                  {/* Icon */}
                  <div className="mb-2 sm:mb-3 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/40 to-[hsl(var(--primary))]/20 backdrop-blur-sm border border-[hsl(var(--primary))]/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                    <impact.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                  </div>

                  {/* Dimension */}
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[hsl(var(--foreground))] mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[hsl(var(--primary))] drop-shadow-md">
                    {impact.dimension}
                  </h3>

                  {/* Benefit */}
                  <p className="text-[10px] sm:text-xs md:text-sm text-[hsl(var(--foreground))] leading-tight sm:leading-relaxed drop-shadow">
                    {impact.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Card - Lateral Fixo */}
          <div
            className={`hidden lg:flex w-80 xl:w-96 relative overflow-hidden rounded-xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 via-[hsl(var(--dark-800))] to-[hsl(var(--primary))]/10" />
            
            {/* Glass Card Content */}
            <div className="relative backdrop-blur-sm bg-[hsl(var(--card))]/20 border border-[hsl(var(--primary))]/30 p-5 md:p-6 flex flex-col justify-center">
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
          className={`lg:hidden mt-3 sm:mt-4 relative overflow-hidden rounded-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 via-[hsl(var(--dark-800))] to-[hsl(var(--primary))]/10" />
          
          {/* Glass Card Content */}
          <div className="relative backdrop-blur-sm bg-[hsl(var(--card))]/20 border border-[hsl(var(--primary))]/30 p-4 sm:p-5">
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
