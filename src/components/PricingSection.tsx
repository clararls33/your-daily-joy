import { useState } from "react";

const tiers = ["Iniciante", "Intermediário", "Avançado"] as const;

const plans = [
  {
    name: "Standard",
    freq: "1x/semana",
    prices: { Iniciante: "R$370", Intermediário: "R$390", Avançado: "R$410" },
    popular: false,
  },
  {
    name: "Evolution",
    freq: "2x/semana",
    prices: { Iniciante: "R$650", Intermediário: "R$690", Avançado: "R$730" },
    popular: true,
  },
  {
    name: "Expert",
    freq: "3x/semana",
    prices: { Iniciante: "R$930", Intermediário: "R$980", Avançado: "R$1030" },
    popular: false,
  },
];

const features = [
  "Material didático incluso",
  "Aulas 100% personalizadas",
  "Acompanhamento de progresso",
  "Flexibilidade de horários",
  "Suporte via WhatsApp",
];

const PricingSection = () => {
  const [tier, setTier] = useState<(typeof tiers)[number]>("Iniciante");

  return (
    <section id="planos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Planos & Valores</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Quanto mais aulas, menor o valor da hora-aula</h2>
        <p className="text-muted-foreground mb-8">
          Selecione seu nível para ver os valores personalizados. A partir de:
        </p>

        <div className="flex gap-2 mb-12">
          {tiers.map((t) => (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-sans ${
                tier === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-card border rounded-2xl p-8 ${
                p.popular ? "border-primary" : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full font-sans">
                  Mais Popular
                </span>
              )}
              <h3 className="text-2xl font-bold font-sans">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 font-sans">{p.freq}</p>
              <p className="text-xs text-muted-foreground mt-4 font-sans">a partir de</p>
              <p className="text-4xl font-bold text-primary mt-1 font-sans">
                {p.prices[tier]}
                <span className="text-base font-normal text-muted-foreground">/mês</span>
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no plano ${p.name} (${tier})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center mt-8 py-3 rounded-full font-semibold transition-all font-sans ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Escolher Plano
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8 text-center">
          * Também disponível: <strong>Weekend Focus</strong> — aulas concentradas nos finais de semana. Consulte!
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
