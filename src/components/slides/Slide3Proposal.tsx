import { useEffect, useState } from "react";
import { Cable, Wifi, Smartphone, ArrowRight } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import fibraOpticaBg from "@/assets/fibra-optica-bg.png";
import wifiPublicoBg from "@/assets/wifi-publico-bg.png";
import appMunicipalBg from "@/assets/app-municipal-bg.png";

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
    <div className="relative w-full h-full bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--dark-800))] overflow-hidden">
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
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.bgImage})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/40 via-[hsl(var(--background))]/60 to-[hsl(var(--background))]/90" />

                {/* Glass Card Content */}
                <div className="relative backdrop-blur-md bg-[hsl(var(--card))]/30 border border-[hsl(var(--border))]/20 p-4 sm:p-5 md:p-6 h-full flex flex-col min-h-[400px] sm:min-h-[450px] transition-all duration-500 group-hover:bg-[hsl(var(--card))]/40 group-hover:border-[hsl(var(--primary))]/40">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/10 backdrop-blur-sm border border-[hsl(var(--primary))]/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]">
                    <product.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[hsl(var(--primary))]" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-2 transition-colors duration-300 group-hover:text-[hsl(var(--primary))]">
                    {product.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-[hsl(var(--primary))] mb-3 sm:mb-4 font-medium">
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] mb-4 sm:mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div className="mt-auto space-y-2 sm:space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[hsl(var(--text-primary))] transition-all duration-300 group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
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
