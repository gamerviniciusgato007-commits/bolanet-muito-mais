import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import telemedicinaAsset from "@/assets/bolanet-telemedicina.png.asset.json";
import internetAsset from "@/assets/bolanet-internet.png.asset.json";
import tvAsset from "@/assets/bolanet-tv.png.asset.json";
import monitoramentoAsset from "@/assets/bolanet-monitoramento.png.asset.json";

const slides = [
  { src: telemedicinaAsset.url, alt: "Telemedicina Bolanet: atendimento médico sem sair de casa" },
  { src: internetAsset.url, alt: "Internet Bolanet sem limite de velocidade" },
  { src: tvAsset.url, alt: "Bolanet com 150 canais de TV para toda a família" },
  { src: monitoramentoAsset.url, alt: "Monitoramento Bolanet 24 horas com gravação na nuvem" },
];

export function HighlightsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % slides.length), 4000);
    return () => window.clearInterval(timer);
  }, []);

  function select(index: number) {
    setCurrent((index + slides.length) % slides.length);
  }

  return (
    <section id="inicio" aria-label="Destaques Bolanet" className="relative mt-18 overflow-hidden bg-primary lg:mt-20">
      <div className="relative aspect-[16/9] w-full">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary/70 to-transparent px-3 pb-3 pt-14 sm:px-7 sm:pb-6">
          <Button variant="carousel" size="iconLg" aria-label="Destaque anterior" onClick={() => select(current - 1)}>
            <ChevronLeft />
          </Button>
          <div className="flex gap-2" aria-label="Escolher destaque">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Mostrar destaque ${index + 1}`}
                aria-current={index === current}
                onClick={() => select(index)}
                className={`h-2.5 rounded-full transition-all ${index === current ? "w-8 bg-highlight shadow-glow" : "w-2.5 bg-primary-foreground/70 hover:bg-primary-foreground"}`}
              />
            ))}
          </div>
          <Button variant="carousel" size="iconLg" aria-label="Próximo destaque" onClick={() => select(current + 1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="bg-highlight px-4 py-4 text-center text-highlight-foreground shadow-glow-yellow sm:py-5">
        <p className="font-display text-lg font-black uppercase sm:text-2xl">NOSSA MELHOR CONEXÃO É VOCÊ</p>
      </div>
    </section>
  );
}