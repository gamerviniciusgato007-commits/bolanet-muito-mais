import { Header, WhatsAppFloat } from "./Header";
import { BenefitsBar, BenefitsMosaic, Hero } from "./HeroBenefits";
import { Clube, Cursos, Medicos, Monitoramento, TV } from "./Campaigns";
import { Cobertura, Comparador, FAQ, Planos, ProvaSocial } from "./PlansSupport";
import { Indicacao } from "./Indicacao";
import { Footer } from "./Footer";
import { HighlightsCarousel } from "./HighlightsCarousel";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HighlightsCarousel />
        <Hero />
        <BenefitsBar />
        <BenefitsMosaic />
        <Medicos />
        <TV />
        <Cursos />
        <Clube />
        <Monitoramento />
        <Planos />
        <Comparador />
        <Cobertura />
        <ProvaSocial />
        <Indicacao />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}