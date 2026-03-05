const levels = [
  {
    name: "Iniciante",
    code: "A1 — A2",
    items: [
      "Noções do idioma e paralelos com o português",
      "Alfabetização funcional",
      "Comunicação básica do dia a dia",
      "Construção de confiança para falar",
    ],
  },
  {
    name: "Intermediário",
    code: "B1 — B2",
    items: [
      "Destravar fala e expandir vocabulário",
      "Estruturação de frases mais complexas",
      "Trabalhar medo e ansiedade na conversação",
      "Listening e compreensão auditiva",
    ],
  },
  {
    name: "Avançado",
    code: "C1 — C2",
    items: [
      "Expressão natural e fluida",
      "Refinamento de conceitos gramaticais",
      "Tempos verbais complexos e nuances",
      "Nuances culturais e expressões idiomáticas",
    ],
  },
];

const LevelsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Níveis</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Foco de cada nível</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((l) => (
            <div key={l.name} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-sans">{l.name}</h3>
              <p className="text-primary font-semibold mt-1 mb-6 font-sans">{l.code}</p>
              <ul className="space-y-3">
                {l.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
