import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 w-1/2">
        <img
          src={heroBg}
          alt="Abstract green waves background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
      </div>
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transforme o seu inglês em{" "}
            <span className="text-gradient-lime">fluência de verdade.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Inglês sem trauma: metodologia intensiva e simplificada — focada no seu dia a dia.
          </p>
          <a
            href="#planos"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg hover:brightness-110 transition-all"
          >
            Quero meu plano personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
