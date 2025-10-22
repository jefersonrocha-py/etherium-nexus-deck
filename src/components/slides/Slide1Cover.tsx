import { useEffect, useState } from "react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import datacenterBg from "@/assets/reference-datacenter.png";

interface SlideProps {
  direction: "next" | "prev";
}

export default function Slide1Cover({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={datacenterBg}
          alt="Data center infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/85 via-[hsl(var(--background))]/75 to-[hsl(var(--background))]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Title with accent color */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--primary))] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Conexão é cidadania.
            </h1>

            {/* Main Message */}
            <div
              className={`space-y-6 text-[hsl(var(--text-primary))] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                Prefeito, o futuro de uma cidade começa com um gesto simples: conectar pessoas.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
                Quando o senhor oferece Wi-Fi gratuito em uma praça, fibra óptica em uma escola e um 
                aplicativo que coloca todos os serviços municipais na palma da mão do cidadão — o senhor 
                está transformando a forma de governar.
              </p>
              
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-semibold text-[hsl(var(--text-secondary))] mt-8">
                Isso não é apenas tecnologia. É inclusão, eficiência e legado.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-[hsl(var(--text-secondary))] text-sm md:text-base">
            Município de <span className="text-[hsl(var(--primary))]">[NOME_DA_CIDADE]</span> • [MÊS/ANO]
          </div>
          
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
