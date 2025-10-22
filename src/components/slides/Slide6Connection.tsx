import { useState, useEffect } from "react";
import { Wifi, Network, Smartphone, Heart } from "lucide-react";
import conexaoBg from "@/assets/conexao-cidadania-bg.png";
import logo from "@/assets/logo-etheriumtech-white.png";

interface SlideProps {
  direction: "next" | "prev";
}

export default function Slide6Connection({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={conexaoBg}
          alt="Conexão e Cidadania"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-900))]/90 via-[hsl(var(--dark-900))]/80 to-[hsl(var(--dark-900))]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
        {/* Animated Icons */}
        <div className="absolute top-20 left-20 animate-pulse">
          <Wifi className="w-12 h-12 text-[hsl(var(--primary))] opacity-40" />
        </div>
        <div className="absolute top-32 right-24 animate-pulse delay-300">
          <Network className="w-10 h-10 text-[hsl(var(--primary))] opacity-30" />
        </div>
        <div className="absolute bottom-32 left-32 animate-pulse delay-500">
          <Smartphone className="w-10 h-10 text-[hsl(var(--primary))] opacity-35" />
        </div>

        {/* Main Quote */}
        <div
          className={`max-w-5xl text-center space-y-8 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Opening Quote with Heart */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[hsl(var(--primary))]" />
            <Heart className="w-8 h-8 text-[hsl(var(--primary))] animate-pulse" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--text-primary))]">
              "Conexão é cidadania."
            </h2>
            <Heart className="w-8 h-8 text-[hsl(var(--primary))] animate-pulse" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[hsl(var(--primary))]" />
          </div>

          {/* Main Message */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-[hsl(var(--text-secondary))] leading-relaxed font-light mb-6">
              "Prefeito, o futuro de uma cidade começa com um gesto simples:{" "}
              <span className="text-[hsl(var(--primary))] font-semibold">
                conectar pessoas
              </span>
              .
            </p>
          </div>

          {/* Supporting Text */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(var(--text-secondary))] leading-relaxed font-light">
              Quando o senhor oferece{" "}
              <span className="text-[hsl(var(--primary))] font-medium">
                Wi-Fi gratuito
              </span>{" "}
              em uma praça,{" "}
              <span className="text-[hsl(var(--primary))] font-medium">
                fibra óptica
              </span>{" "}
              em uma escola e um{" "}
              <span className="text-[hsl(var(--primary))] font-medium">
                aplicativo
              </span>{" "}
              que coloca todos os serviços municipais na palma da mão do cidadão
              — o senhor está{" "}
              <span className="text-[hsl(var(--primary))] font-semibold">
                transformando
              </span>{" "}
              a forma de governar.
            </p>
          </div>

          {/* Closing Statement */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-[hsl(var(--text-primary))] font-semibold mt-8">
              Isso não é apenas tecnologia.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--primary))] font-bold mt-4">
              É inclusão, eficiência e legado.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Logo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <img
          src={logo}
          alt="Etheriumtech"
          className="h-8 opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}
