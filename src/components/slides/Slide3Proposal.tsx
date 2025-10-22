import { useEffect, useState } from "react";
import { Cable, Wifi, Smartphone, TrendingUp } from "lucide-react";
import logoEtherium from "@/assets/logo-etheriumtech-white.png";

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
  const [stats] = useState({ availability: 99.7, activeUsers: 15000 });

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
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-2 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Proposta Integrada
          </h1>
          <p
            className={`text-lg md:text-xl text-[hsl(var(--primary))] transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Conectividade + Governo Digital + Experiência do Cidadão
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 pb-4">
            {proposals.map((proposal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--dark-700))] rounded-xl p-5 md:p-6 border border-[hsl(var(--border))]/30 hover:border-[hsl(var(--primary))]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-[hsl(var(--border))]/20">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/20 flex items-center justify-center">
                    <proposal.icon className="w-5 h-5 text-[hsl(var(--primary))]" strokeWidth={2} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[hsl(var(--primary))] leading-tight">
                    {proposal.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {proposal.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm md:text-base text-[hsl(var(--text-secondary))] leading-relaxed"
                    >
                      <span className="text-[hsl(var(--primary))] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Mini Dashboard for third card */}
                {index === 2 && (
                  <div
                    className={`mt-6 pt-6 border-t border-[hsl(var(--border))]/20 grid grid-cols-2 gap-3 transition-all duration-700 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    <div className="bg-[hsl(var(--dark-800))] rounded-lg p-3 text-center">
                      <div className="text-xl md:text-2xl font-bold text-[hsl(var(--primary))]">
                        {stats.availability}%
                      </div>
                      <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">Disponibilidade</div>
                    </div>
                    <div className="bg-[hsl(var(--dark-800))] rounded-lg p-3 text-center">
                      <div className="text-xl md:text-2xl font-bold text-[hsl(var(--primary))]">
                        {(stats.activeUsers / 1000).toFixed(0)}k+
                      </div>
                      <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">Ativos</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex justify-end mt-4 transition-all duration-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
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
