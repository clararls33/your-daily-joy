import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MethodologySection from "@/components/MethodologySection";
import LevelsSection from "@/components/LevelsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BenefitsSection />
      <MethodologySection />
      <LevelsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
