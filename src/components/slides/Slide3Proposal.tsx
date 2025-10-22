import { useEffect, useState } from "react";
import { Cable, Wifi, Smartphone, ArrowRight } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import fibraOpticaBg from "@/assets/fibra-optica-bg.png";
import wifiPublicoBg from "@/assets/wifi-publico-bg.png";
import appMunicipalBg from "@/assets/app-municipal-bg.png";
import solucoesIntegradas from "@/assets/solucoes-integradas-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

const products = [
  {
    icon: Cable,
    title: "Fibra Óptica Municipal",
    subtitle: "Infraestrutura própria de conectividade",
    description: "Rede de fibra óptica municipal interligando todas as secretarias e prédios públicos com velocidade, segurança e economia.",
    benefits: [
      "Redução de até 40% em custos de telecom",
      "Velocidades de até 10 Gbps",
      "Infraestrutura 100% municipal"
    ],
    bgImage: fibraOpticaBg
  },
  {
    icon: Wifi,
    title: "Wi-Fi Público Gratuito",
    subtitle: "Internet para todos",
    description: "Pontos de acesso Wi-Fi gratuito em praças, parques e áreas públicas, promovendo inclusão digital e conectividade universal.",
    benefits: [
      "Cobertura em pontos estratégicos",
      "Acesso gratuito e democrático",
      "Gestão centralizada e segura"
    ],
    bgImage: wifiPublicoBg
  },
  {
    icon: Smartphone,
    title: "Aplicativo Municipal",
    subtitle: "A Cidade na Palma da Mão",
    description: "Plataforma digital que centraliza serviços públicos, informações e comunicação direta entre cidadão e prefeitura.",
    benefits: [
      "Serviços digitais 24/7",
      "Atendimento simplificado",
      "Transparência e agilidade"
    ],
    bgImage: appMunicipalBg
  }
];

export default function Slide3Proposal({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={solucoesIntegradas}
          alt="Soluções Integradas Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay bem suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/60 via-[hsl(var(--background))]/70 to-[hsl(var(--background))]/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-2 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Soluções Integradas
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Tecnologia que transforma a gestão municipal
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.bgImage})` }}
                />
                
                {/* Overlay mais suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/20 via-[hsl(var(--background))]/30 to-[hsl(var(--background))]/50" />

                {/* Glass Card Content */}
                <div className="relative backdrop-blur-sm bg-[hsl(var(--card))]/10 border border-[hsl(var(--border))]/20 p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-[hsl(var(--card))]/20 group-hover:border-[hsl(var(--primary))]/40">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/40 to-[hsl(var(--primary))]/20 backdrop-blur-sm border border-[hsl(var(--primary))]/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)]">
                    <product.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[hsl(var(--primary))]" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[hsl(var(--foreground))] mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-[hsl(var(--primary))] drop-shadow-md">
                    {product.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[10px] sm:text-xs md:text-sm text-[hsl(var(--primary))] mb-2 sm:mb-3 font-semibold drop-shadow">
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[10px] sm:text-xs md:text-sm text-[hsl(var(--foreground))] mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-relaxed drop-shadow">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-[hsl(var(--foreground))] transition-all duration-300 group-hover:translate-x-1 drop-shadow"
                      >
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-4 sm:mt-5 md:mt-6 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
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
