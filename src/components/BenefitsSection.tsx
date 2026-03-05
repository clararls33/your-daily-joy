import { Zap, Users, BarChart3, Gift, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Eficiência",
    desc: "Atinja em 6 meses o que levaria 3 anos em turmas regulares. 100% do tempo investido no seu progresso.",
  },
  {
    icon: Users,
    title: "Exclusividade",
    desc: "100% da atenção do professor voltada para a sua evolução individual.",
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    desc: "Acompanhamento de progresso baseado nas suas metas pessoais.",
  },
  {
    icon: Gift,
    title: "Material Gratuito",
    desc: "Sem compras adicionais — todo o material incluso no plano.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro",
    desc: "Espaço livre de julgamentos para sanar todas as suas dúvidas.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="aspect-video w-full bg-card border border-border rounded-2xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Vídeo de apresentação</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground border border-border rounded-full px-6 py-2 inline-block mb-6">
                Por que escolher aulas individuais comigo?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Aulas 100% personalizadas para{" "}
                <span className="text-gradient-lime">destravar seu inglês</span> de uma vez por todas.
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="bg-primary/10 text-primary rounded-lg p-2.5 shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg font-sans">{b.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
