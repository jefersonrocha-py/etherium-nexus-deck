import { useEffect, useState } from "react";
import { Cable, Wifi, Smartphone, TrendingUp, Users, Clock, CheckCircle2, Zap, BarChart3, Activity } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";
import governoBg from "@/assets/governo-digital-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

const proposals = [
  {
    icon: Cable,
    title: "Fibra Óptica Municipal",
    items: [
      "Backbone neutro e seguro, interligando escolas, secretarias e equipamentos públicos",
      "Reduz custos de telecomunicação e garante base para expansão de projetos futuros (URBAN.AI, câmeras, IoT, etc.)",
    ],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Público Gratuito",
    items: [
      "Internet em praças, escolas e unidades de atendimento",
      "Controle por portal de autenticação e dashboards de acesso",
      "Inclusão digital e acesso universal à informação",
    ],
  },
  {
    icon: Smartphone,
    title: 'Aplicativo Municipal — "A Cidade na Palma da Mão"',
    items: [
      "O cidadão acessa todos os serviços municipais em um único app:",
      "IPTU, ISS, alvarás, NFS-e, requerimentos, agendamentos e boletos",
      "Educação (boletim escolar, transporte, matrícula online)",
      "Saúde (consultas, medicamentos, exames, agendamentos)",
      "Ouvidoria e solicitações urbanas (iluminação, buracos, limpeza)",
      "O gestor municipal acessa painéis de dados e indicadores de serviços públicos em tempo real",
    ],
  },
];

export default function Slide3Proposal({ direction }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [stats] = useState({ 
    availability: 99.7, 
    activeUsers: 15000,
    responseTime: 0.8,
    satisfaction: 94,
    monthlyGrowth: 12
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0">
        <img 
          src={governoBg}
          alt="Governo Digital"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/85 via-[hsl(var(--background))]/75 to-[hsl(var(--background))]/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-1 sm:mb-2 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Proposta Integrada
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Conectividade + Governo Digital + Experiência do Cidadão
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-3 sm:pb-4">
            {proposals.map((proposal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--dark-700))] rounded-xl p-4 sm:p-5 md:p-6 border border-[hsl(var(--border))]/30 hover:border-[hsl(var(--primary))]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-[hsl(var(--border))]/20">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[hsl(var(--primary))]/20 flex items-center justify-center">
                    <proposal.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))]" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[hsl(var(--primary))] leading-tight">
                    {proposal.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2 sm:space-y-3">
                  {proposal.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-[hsl(var(--text-secondary))] leading-relaxed"
                    >
                      <span className="text-[hsl(var(--primary))] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced Dashboard for third card */}
                {index === 2 && (
                  <div
                    className={`mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-[hsl(var(--border))]/20 space-y-2 sm:space-y-3 transition-all duration-700 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    {/* First Row - 2 columns */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-lg p-2 sm:p-3 border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/50 transition-all group">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                          <span className="text-[10px] sm:text-xs text-[hsl(var(--text-secondary))]">Disponibilidade</span>
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[hsl(var(--primary))] group-hover:scale-105 transition-transform">
                          {stats.availability}%
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-lg p-2 sm:p-3 border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/50 transition-all group">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                          <span className="text-[10px] sm:text-xs text-[hsl(var(--text-secondary))]">Usuários Ativos</span>
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[hsl(var(--primary))] group-hover:scale-105 transition-transform">
                          {(stats.activeUsers / 1000).toFixed(0)}k+
                        </div>
                      </div>
                    </div>
                    
                    {/* Second Row - 3 columns */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-lg p-2 sm:p-3 border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/50 transition-all group text-center">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--primary))] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] group-hover:scale-105 transition-transform">
                          {stats.responseTime}s
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-[hsl(var(--text-secondary))] mt-0.5">Resposta</div>
                      </div>
                      <div className="bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-lg p-2 sm:p-3 border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/50 transition-all group text-center">
                        <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--primary))] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] group-hover:scale-105 transition-transform">
                          {stats.satisfaction}%
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-[hsl(var(--text-secondary))] mt-0.5">Satisfação</div>
                      </div>
                      <div className="bg-gradient-to-br from-[hsl(var(--dark-800))] to-[hsl(var(--dark-700))] rounded-lg p-2 sm:p-3 border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/50 transition-all group text-center">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--primary))] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-base sm:text-lg md:text-xl font-bold text-[hsl(var(--primary))] group-hover:scale-105 transition-transform">
                          +{stats.monthlyGrowth}%
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-[hsl(var(--text-secondary))] mt-0.5">Crescimento</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-3 sm:mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
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
