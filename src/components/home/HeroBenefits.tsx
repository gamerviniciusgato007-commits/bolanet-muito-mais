import { ArrowRight, BadgePercent, BookOpen, Check, HeartPulse, MonitorPlay, ShieldCheck, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { label: "Internet sem limites", icon: Wifi },
  { label: "Médicos online", icon: HeartPulse },
  { label: "+150 canais", icon: MonitorPlay },
  { label: "Cursos online", icon: BookOpen },
  { label: "Clube de descontos", icon: BadgePercent },
  { label: "Câmera + gravação na nuvem", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img src="/hero.png" alt="Família reunida na sala usando internet, TV, notebook e celular" className="absolute inset-0 h-full w-full object-cover object-center opacity-20" />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="section-shell relative z-10 grid items-center gap-7 py-10 lg:min-h-[650px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:py-14">
        <div className="reveal text-primary-foreground">
          <p className="mb-3 text-xs font-black uppercase text-highlight sm:text-sm">VOCÊ AINDA TEM A INTERNET COMUM? </p>
          <h1 className="display-title max-w-xl text-4xl sm:text-5xl lg:text-6xl">VEJA A INTERNET DO FUTURO</h1>
          <p className="mt-4 max-w-lg text-base font-extrabold leading-snug sm:text-xl">Não vendemos só internet. Entregamos soluções para cuidar de tudo o que importa.</p>
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2" aria-label="Soluções incluídas nos planos">
            <li className="flex items-center gap-3 border-b border-primary-foreground/20 py-2.5 text-sm font-bold"><Wifi className="h-5 w-5 shrink-0 text-highlight" />Internet sem limite de velocidade</li>
            <li className="flex items-center gap-3 border-b border-primary-foreground/20 py-2.5 text-sm font-bold"><HeartPulse className="h-5 w-5 shrink-0 text-highlight" />Atendimento médico sem sair de casa</li>
            <li className="flex items-center gap-3 border-b border-primary-foreground/20 py-2.5 text-sm font-bold"><MonitorPlay className="h-5 w-5 shrink-0 text-highlight" />Mais de 150 canais de TV</li>
            <li className="flex items-center gap-3 border-b border-primary-foreground/20 py-2.5 text-sm font-bold"><BookOpen className="h-5 w-5 shrink-0 text-highlight" />Plataforma de cursos de plantas</li>
            <li className="flex items-center gap-3 border-b border-primary-foreground/20 py-2.5 text-sm font-bold sm:col-span-2"><ShieldCheck className="h-5 w-5 shrink-0 text-highlight" />Sua casa vigiada 24h por dia</li>
          </ul>
          <Button asChild size="lg" variant="heroOutline" className="mt-6 hidden lg:inline-flex"><a href="#cobertura">Consultar cobertura <ArrowRight /></a></Button>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-5" aria-label="Planos em destaque">
          <article className="flex min-w-0 flex-col rounded-lg border border-primary-foreground/30 bg-background p-3 text-foreground shadow-brand sm:p-6">
            <p className="text-xs font-black uppercase text-primary">Plano</p>
            <h2 className="mt-1 text-xl font-black text-primary sm:text-3xl">Infinity</h2>
            <div className="mt-3 flex min-w-0 flex-wrap items-end gap-x-1 text-primary sm:mt-5 sm:flex-nowrap">
              <span className="font-display text-3xl font-black sm:text-5xl">R$ 119</span>
              <span className="pb-1 text-[10px] font-bold sm:text-xs">/mês</span>
            </div>
            <ul className="my-4 space-y-2 text-[11px] font-bold leading-snug sm:my-5 sm:text-sm">
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Internet sem limites de velocidade</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Médicos Online</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Mais de 150 canais</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Cursos online de plantas</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Clube Bolanet com descontos</li>
            </ul>
            <Button asChild size="lg" className="mt-auto w-full px-2 text-xs sm:text-sm"><a href="#cobertura">Escolher Infinity</a></Button>
          </article>

          <article className="relative flex min-w-0 flex-col rounded-lg border-2 border-highlight bg-background p-3 text-foreground shadow-brand sm:p-6">
            <span className="mb-2 w-fit rounded-full bg-highlight px-2 py-1 text-[8px] font-black uppercase text-highlight-foreground sm:text-[9px]">Mais completo</span>
            <p className="text-xs font-black uppercase text-primary">Plano</p>
            <h2 className="mt-1 text-xl font-black leading-tight text-primary sm:text-3xl">Infinity Turbo</h2>
            <div className="mt-3 flex min-w-0 flex-wrap items-end gap-x-1 text-primary sm:mt-5 sm:flex-nowrap">
              <span className="font-display text-3xl font-black sm:text-5xl">R$ 139</span>
              <span className="pb-1 text-[10px] font-bold sm:text-xs">/mês</span>
            </div>
            <ul className="my-4 space-y-2 text-[11px] font-bold leading-snug sm:my-5 sm:text-sm">
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Internet sem limites de velocidade</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Médicos Online</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Mais de 150 canais</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Cursos online de plantas</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Clube Bolanet com descontos</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Câmera para vigiar sua casa 24h por dia</li>
              <li className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-primary" />Gravação das imagens na nuvem</li>
            </ul>
            <Button asChild size="lg" variant="sunshine" className="mt-auto w-full px-2 text-xs sm:text-sm"><a href="#cobertura">Quero o Turbo</a></Button>
          </article>
        </div>
      </div>
    </section>
  );
}

export function BenefitsBar() {
  return <section aria-label="Benefícios incluídos" className="bg-primary py-6 text-primary-foreground"><div className="section-shell grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">{benefits.map(({label, icon: Icon}) => <div key={label} className="flex min-w-0 items-center gap-3"><Icon className="h-6 w-6 shrink-0 text-highlight"/><span className="text-xs font-extrabold leading-tight">{label}</span></div>)}</div></section>;
}

export function BenefitsMosaic() {
  const items = [
    { title: "Internet", text: "Sem limites", image: "/hero.png", cls: "md:col-span-2 md:row-span-2" },
    { title: "Saúde", text: "Médicos online", image: "/medicos.png", cls: "md:col-span-1" },
    { title: "Entretenimento", text: "+150 canais", image: "/tv.png", cls: "md:col-span-1" },
    { title: "Conhecimento", text: "Cursos online", image: "/cursos.png", cls: "md:col-span-1" },
    { title: "Economia", text: "Clube Bolanet", image: "/clube.png", cls: "md:col-span-1" },
    { title: "Segurança", text: "Câmera com gravação na nuvem", image: "/monitoramento.png", cls: "md:col-span-2" },
  ];
  return (
    <section id="beneficios" className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-extrabold uppercase text-primary">Uma assinatura. Muitas possibilidades.</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">Veja tudo o que a Bolanet entrega</h2><p className="mt-4 text-muted-foreground">Mais do que navegar. Viva uma nova experiência dentro e fora de casa.</p></div>
        <div className="grid auto-rows-[220px] gap-3 md:grid-cols-4 md:auto-rows-[210px]">
          {items.map(item => <article key={item.title} className={`group relative overflow-hidden rounded-lg bg-primary ${item.cls}`}><img loading="lazy" src={item.image} alt={`${item.title}: ${item.text}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground"><p className="text-xs font-extrabold uppercase text-highlight">{item.title}</p><h3 className="mt-1 text-2xl font-black">{item.text}</h3></div></article>)}
        </div>
      </div>
    </section>
  );
}