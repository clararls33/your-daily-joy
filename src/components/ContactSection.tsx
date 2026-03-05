import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const experienceOptions = [
  "Já entendo muito do inglês, preciso conversar mais e aprender conteúdos mais avançados",
  "Não quero deixar meu inglês enferrujado, preciso de alguém pra conversar e que me dê dicas de melhoria",
  "Sei muitas palavras em inglês mas tenho dificuldade para elaborar frases",
  "Entendo quase tudo que escuto, mas não sinto segurança para falar",
  "Aprendi muito com filmes e séries mas nunca estudei o idioma em si",
  "Conheço apenas alguns números, cores, animais e poucos verbos básicos",
  "Não sei nada ainda, mas tenho interesse em começar o quanto antes",
];

const interestOptions = [
  "Um novo hobby",
  "Desenvolvimento cognitivo",
  "Viagens e experiências culturais",
  "Trabalho, carreira e oportunidades",
  "Inglês acadêmico e artigos científicos",
  "Músicas",
  "Filmes e séries",
  "Relacionamento",
  "Reforço escolar",
  "Networking global",
];

const ContactSection = () => {
  const [previousCourse, setPreviousCourse] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">Vamos começar?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Quero meu plano de estudos personalizado</h2>
        <p className="text-muted-foreground text-center mb-12">
          Preencha o formulário e receba uma proposta sob medida.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="font-sans">Nome</Label>
            <Input placeholder="Seu nome completo" className="mt-2 bg-card border-border" required />
          </div>
          <div>
            <Label className="font-sans">Email</Label>
            <Input type="email" placeholder="seu@email.com" className="mt-2 bg-card border-border" required />
          </div>
          <div>
            <Label className="font-sans">WhatsApp</Label>
            <Input placeholder="(00) 00000-0000" className="mt-2 bg-card border-border" required />
          </div>

          <div>
            <Label className="font-sans mb-3 block">Já fez algum curso de inglês previamente?</Label>
            <RadioGroup value={previousCourse} onValueChange={setPreviousCourse} className="flex gap-6">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sim" id="sim" />
                <Label htmlFor="sim" className="font-sans">Sim</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="nao" id="nao" />
                <Label htmlFor="nao" className="font-sans">Não</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="font-sans mb-3 block">
              Marque a opção que melhor represente sua relação com o idioma:
            </Label>
            <RadioGroup className="space-y-3">
              {experienceOptions.map((opt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <RadioGroupItem value={String(i)} id={`exp-${i}`} className="mt-1" />
                  <Label htmlFor={`exp-${i}`} className="text-sm text-muted-foreground font-normal font-sans leading-relaxed">
                    {opt}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label className="font-sans mb-3 block">Selecione seus interesses no inglês:</Label>
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleInterest(opt)}
                  className={`px-4 py-2 rounded-full text-sm transition-all font-sans ${
                    interests.includes(opt)
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="font-sans">Outras dúvidas ou informações</Label>
            <Textarea placeholder="Escreva aqui..." className="mt-2 bg-card border-border min-h-[100px]" />
          </div>

          <Button
            type="submit"
            className="w-full py-6 text-lg rounded-full bg-primary text-primary-foreground hover:brightness-110 font-sans"
          >
            Enviar e agendar aula experimental
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
