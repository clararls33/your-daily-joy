const steps = [
  {
    num: "01",
    title: "Diagnóstico de Dificuldades Reais",
    desc: "Não precisamos começar do zero se você já tem uma base. Identificamos juntos suas maiores dificuldades, explorando os paralelos entre o português e o inglês para que as diferenças fiquem claras e fáceis de aplicar.",
    quote: "O foco da aula é o seu problema, não o próximo capítulo de um livro.",
  },
  {
    num: "02",
    title: "Conteúdo Personalizado",
    desc: "O cérebro retém muito mais quando o conteúdo é relevante. Se você trabalha com tecnologia, usaremos artigos da sua área. Se ama viajar, simulamos situações reais. Se precisa de ajuda numa prova, abordamos os temas em questão.",
    quote: "Cada aula é construída em torno da sua vida real.",
  },
  {
    num: "03",
    title: "Abordagem Comunicativa",
    desc: "Nossas aulas são desenhadas para que você fale a maior parte do tempo. Ambiente seguro, livre de julgamentos, com feedback instantâneo e correções personalizadas que você não receberia numa sala com 15 alunos.",
    quote: "Errar faz parte do processo de ajuste da pronúncia e da fluência.",
  },
  {
    num: "04",
    title: "Flexibilidade Total",
    desc: "5 horários diários, incluindo finais de semana. Mudamos o rumo da aula se você tiver uma apresentação importante amanhã, uma viagem iminente ou uma entrevista de última hora.",
    quote: "O inglês se encaixa na sua rotina, não o contrário.",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Metodologia</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Potencializamos o seu ritmo</h2>
        <p className="text-muted-foreground max-w-3xl mb-4 text-lg">
          Quando o assunto é inglês, a maioria das pessoas já tem algo pra falar a respeito — seja a experiência de passar anos em escolas tradicionais seguindo livros genéricos e cansativos, ou a sensação de não sair do lugar por não ter a devida atenção às dúvidas que surgem nas aulas em grupo, ou o simples fato de sentir que não consegue conversar mesmo entendendo muito.
        </p>
        <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground/80 mb-16 max-w-3xl">
          "Minha metodologia é fundamentada na busca por resultados reais, rápidos e eficientes — cada minuto da sua aula é um investimento legítimo e eficaz."
        </blockquote>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-card border border-border rounded-2xl p-8">
              <span className="text-5xl font-bold text-primary/20 font-sans">{s.num}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 font-sans">{s.title}</h3>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <p className="text-primary italic text-sm">"{s.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
