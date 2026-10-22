import React, { useState, type FormEvent } from "react";
import { Check, Minus, MapPin, Radio, Sparkles, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WA_NUMBER = "5561998076886";

// Modal de captura: coleta nome + CEP + mensagem e redireciona pro WhatsApp com mensagem pronta
function PlanModal({ planName, onClose }: { planName: string; onClose: () => void }) {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Por favor, informe seu nome."); return; }
    const digits = cep.replace(/\D/g, "");
    if (digits.length !== 8) { setError("Digite um CEP válido com 8 números."); return; }
    const negativa = /^\s*(n[aã]o|nao|n|nenhum[a]?|nada|ok|oks?|nope)\s*$/i;
    const extra = msg.trim() && !negativa.test(msg) ? ` ${msg.trim()}` : "";
    const text = encodeURIComponent(
      `Olá! Me chamo ${name.trim()} e tenho interesse no plano ${planName} da Bolanet. Meu CEP é ${cep.trim()}.${extra}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-black uppercase text-primary">Plano selecionado</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">{planName}</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">Preencha abaixo e entraremos em contato pelo WhatsApp para confirmar a disponibilidade na sua região.</p>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div>
            <label htmlFor="modal-name" className="mb-1 block text-xs font-extrabold">Seu nome</label>
            <Input id="modal-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos te chamar?" />
          </div>
          <div>
            <label htmlFor="modal-cep" className="mb-1 block text-xs font-extrabold">Seu CEP</label>
            <Input id="modal-cep" value={cep} onChange={e => setCep(e.target.value)} placeholder="00000-000" inputMode="numeric" />
          </div>
          <div>
            <label htmlFor="modal-msg" className="mb-1 block text-xs font-extrabold">Mensagem (opcional)</label>
            <Input id="modal-msg" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Alguma dúvida ou observação?" />
          </div>
          {error && <p role="alert" className="text-sm font-bold text-destructive">{error}</p>}
          <Button type="submit" size="xl" variant="sunshine" className="mt-2 w-full">
            Falar com a Bolanet pelo WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}

type PlanDef = {
  name: string;
  speed: string;
  price: string;
  tag?: string;
  highlight?: boolean;
  features: string[];
};

const plans: PlanDef[] = [
  {
    name: "Bolanet Essencial",
    speed: "500",
    price: "R$99,90",
    tag: "Mais popular",
    highlight: true,
    features: [
      "Internet até 500 Mbps",
      "Instalação incluída",
      "Telemedicina — Médicos Online",
      "+150 canais de TV",
      "Clube Bolanet — Carteirinha física e digital",
      "Cursos online de plantas",
      "Atendimento via WhatsApp",
      "Câmera 24h de vigilância (adicional R$20/mês)",
    ],
  },
  {
    name: "Bolanet Premium",
    speed: "750",
    price: "R$119,90",
    tag: "Recomendado",
    highlight: true,
    features: [
      "Internet até 750 Mbps",
      "Instalação incluída",
      "Telemedicina — Médicos Online",
      "+150 canais de TV",
      "Clube Bolanet — Carteirinha física e digital",
      "Cursos online de plantas",
      "Atendimento via WhatsApp",
      "Câmera 24h de vigilância (adicional R$20/mês)",
    ],
  },
];
function PlanCard({ plan }: { plan: PlanDef }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <PlanModal planName={plan.name} onClose={() => setOpen(false)} />}
      <article className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg bg-background shadow-brand ${plan.highlight ? "border-2 border-highlight lg:scale-[1.03] z-10" : "border border-primary/40"}`}>
        {/* Topo — faixa visual de velocidade */}
        <div className="relative flex flex-col gap-1 overflow-hidden bg-white px-6 py-5">
          {/* Número fantasma */}
          <div
            className="pointer-events-none absolute -bottom-2 -right-1 select-none font-display text-[88px] font-black leading-none"
            style={{ color: 'oklch(0.245 0.125 314)', opacity: 0.07 }}
            aria-hidden="true"
          >
            {plan.speed}
          </div>
          {plan.tag && (
            <span
              className="w-fit rounded-full px-3 py-1 text-[9px] font-black uppercase"
              style={{ background: 'oklch(0.82 0.17 89)', color: 'oklch(0.2 0.055 314)' }}
            >
              {plan.tag}
            </span>
          )}
          <p
            className="font-display text-[28px] font-black leading-none"
            style={{ color: 'oklch(0.245 0.125 314)', letterSpacing: '-0.5px' }}
          >
            {plan.speed} <span className="text-sm font-semibold opacity-65">Mbps</span>
          </p>
        </div>
        {/* Corpo do card */}
        <div className="flex flex-1 flex-col p-5 sm:p-8">
          <p className="text-center text-xs font-black uppercase text-primary sm:text-sm">{plan.name}</p>
          <div className="mt-3 flex items-baseline justify-center gap-1">
            <span className="text-3xl font-black text-foreground sm:text-4xl">{plan.price}</span>
            <span className="text-sm text-muted-foreground">/mês</span>
          </div>
          <div className="my-5 h-px bg-border" />
          <ul className="space-y-2.5 sm:space-y-3">
            {plan.features.map(item => (
              <li key={item} className={`flex items-start gap-2 text-sm font-semibold leading-snug sm:text-base ${item.includes("adicional") ? "font-black text-primary" : ""}`}>
                <Check className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                {item}
              </li>
            ))}
          </ul>
          <Button
            size="xl"
            variant={plan.highlight ? "sunshine" : "default"}
            className="mt-6 w-full text-sm font-extrabold sm:text-base"
            onClick={() => setOpen(true)}
          >
            Assinar agora
          </Button>
        </div>
      </article>
    </>
  );
}

export function Planos() {
  return (
    <section id="planos" className="bg-surface py-18 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-extrabold uppercase text-primary">Escolha sua experiência</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">Muito mais dentro do seu plano</h2>
          <p className="mt-4 text-muted-foreground">Selecione o plano ideal e nossa equipe confirma a disponibilidade e o valor para a sua região pelo WhatsApp.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {plans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
        </div>
      </div>
    </section>
  );
}

// fi = feature index, pi = plan index
function cellContent(fi: number, pi: number): React.ReactNode {
  if (fi === 0) return <span className="text-xs font-black text-primary sm:text-sm">{pi === 0 ? "500 Mbps" : "750 Mbps"}</span>;
  if (fi === 7) return <span className="text-[10px] font-black text-primary sm:text-xs">+R$20</span>;
  return <Check className="text-primary" />;
}

const allFeatures = [
  "Velocidade",
  "Telemedicina",
  "+150 canais de TV",
  "Clube Bolanet — Carteirinha",
  "Cursos de plantas",
  "Instalação incluída",
  "Atendimento via WhatsApp",
  "Câmera 24h de vigilância",
];

export function Comparador() {
  const planNames = ["Bolanet Essencial\nR$99,90", "Bolanet Premium\nR$119,90"];

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl">
          <h2 className="display-title text-center text-3xl sm:text-5xl">Compare e escolha</h2>
          <div className="mt-9 overflow-x-auto">
            <div className="min-w-[560px] overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(2,1fr)] bg-primary p-4 text-xs font-black text-primary-foreground sm:text-sm">
                <span>Benefício</span>
                {planNames.map((name, i) => (
                  <span key={name} className={`text-center ${i >= 1 && i <= 2 ? "text-highlight" : ""}`}>{name}</span>
                ))}
              </div>
              {allFeatures.map((feature, fi) => (
                <div key={feature} className="grid grid-cols-[minmax(0,1.4fr)_repeat(2,1fr)] items-center border-t border-border p-4 text-xs sm:text-sm">
                  <strong className="min-w-0 pr-2">{feature}</strong>
                  {planNames.map((^_, pi) => (
                    <span key={pi} className="flex justify-center">
                      {cellContent(fi, pi)}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">* A câmera de vigilância é um adicional de R$20/mês disponível em qualquer plano.</p>
          <p className="mt-3 text-center text-sm font-bold text-muted-foreground">Consulte valores e disponibilidade pelo WhatsApp — nossa equipe responde rápido.</p>
        </div>
      </div>
    </section>
  );
}

function simulateCoverageLookup(_query: string) {
  return "Recebemos sua consulta. Um especialista Bolanet confirmará a disponibilidade para este endereço.";
}

export function Cobertura() {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Por favor, informe seu nome."); return; }
    const digits = cep.replace(/\D/g, "");
    if (digits.length !== 8) { setError("Digite um CEP válido com 8 números."); return; }
    setError("");
    const negativa = /^\s*(n[aã]o|nao|n|nenhum[a]?|nada|ok|oks?|nope)\s*$/i;
    const extra = msg.trim() && !negativa.test(msg) ? ` ${msg.trim()}` : "";
    const text = encodeURIComponent(
      `Olá! Me chamo ${name.trim()} e quero verificar se a Bolanet atende meu endereço. Meu CEP é ${cep.trim()}.${extra}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section id="cobertura" className="bg-primary py-18 text-primary-foreground sm:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <MapPin className="h-11 w-11 text-highlight" />
          <h2 className="display-title mt-5 text-4xl sm:text-5xl">Veja se a Bolanet já chegou até você.</h2>
        </div>
        <form onSubmit={submit} className="rounded-lg bg-background p-5 text-foreground sm:p-8">
          <p className="mb-4 text-sm font-extrabold">Informe seus dados e verificamos a cobertura pelo WhatsApp</p>
          <div className="grid gap-3">
            <div>
              <label htmlFor="cov-name" className="mb-1 block text-xs font-extrabold">Seu nome</label>
              <Input id="cov-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos te chamar?" className="h-12 text-base" />
            </div>
            <div>
              <label htmlFor="cov-cep" className="mb-1 block text-xs font-extrabold">Seu CEP</label>
              <Input id="cov-cep" value={cep} onChange={e => setCep(e.target.value)} placeholder="00000-000" inputMode="numeric" className="h-12 text-base" />
            </div>
            <div>
              <label htmlFor="cov-msg" className="mb-1 block text-xs font-extrabold">Mensagem (opcional)</label>
              <Input id="cov-msg" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Alguma dúvida?" className="h-12 text-base" />
            </div>
            {error && <p role="alert" className="text-sm font-bold text-destructive">{error}</p>}
            <Button size="xl" variant="sunshine" className="w-full">Verificar cobertura pelo WhatsApp</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function ProvaSocial() {
  return (
    <section className="bg-surface py-18 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="font-extrabold uppercase text-primary">Quem vive a experiência Bolanet</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">Histórias de quem está conectado</h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            {
              text: "Bola Net é uma ótima provedora. Estão sempre dispostos a ajudar com respostas instantâneas e atendimento humanizado. Eu trabalho com internet e eles nunca me deixaram na mão. ÓTIMO SERVIÇO.",
              author: "Cliente Bolanet",
              via: "Comentário de cliente",
            },
            {
              text: "Gostaria de agradecer o serviço de vocês. Muita qualidade em todo o processo. Agradecimento especial ao Marcos e ao Cleber, técnicos que instalaram e arrumaram minha conexão quando deu problema. Vocês estão de parabéns!",
              author: "Cliente via WhatsApp",
              via: "WhatsApp",
            },
            {
              text: "Eu queroo! É boom de mais ser cliente — ter uma ótima internet e ainda participar de sorteio! 😍",
              author: "@marcely_cardoso09",
              via: "Instagram",
            },
          ].map((t, i) => (
            <div key={i} className="flex min-h-48 flex-col justify-between rounded-lg border border-primary/20 bg-background p-6">
              <Radio className="text-primary" />
              <div className="mt-4">
                <p className="font-bold leading-relaxed text-foreground">"{t.text}"</p>
                <p className="mt-4 text-sm font-extrabold text-primary">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.via}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Quais planos a Bolanet oferece?", "A Bolanet tem dois planos: Bolanet Essencial (até 500 Mbps por R$99,90/mês) e Bolanet Premium (até 750 Mbps por R$119,90/mês). Os dois incluem os mesmos benefícios — a diferença é só a velocidade. Fale com a gente pelo WhatsApp e indicamos o melhor para você."],
  ["Qual a diferença entre o Bolanet Essencial e o Bolanet Premium?", "A diferença é a velocidade: 500 Mbps no Essencial ou 750 Mbps no Premium. Os benefícios incluídos são idênticos nos dois planos — Telemedicina, +150 canais de TV, Clube Bolanet com carteirinha, cursos online e câmera de vigilância disponível como adicional."],
  ["O que está incluído nos dois planos?", "Ambos os planos incluem: instalação, Telemedicina (Médicos Online), +150 canais de TV, Clube Bolanet com carteirinha física e digital, cursos online de plantas e atendimento via WhatsApp. A câmera 24h de vigilância está disponível como adicional por R$20/mês."],
  ["Como funciona a Telemedicina?", "Com a Telemedicina Bolanet você tem acesso a consultas médicas online sem sair de casa. Está incluída nos dois planos, sem custo adicional."],
  ["Como acesso os mais de 150 canais de TV?", "Os detalhes de acesso são informados pela equipe Bolanet no momento da instalação. O benefício está incluso nos dois planos, sem custo adicional."],
  ["Como funciona o Clube Bolanet?", "Você recebe uma carteirinha física e digital, apresenta em estabelecimentos parceiros e garante descontos exclusivos. Incluso nos dois planos."],
  ["Como funciona a câmera de vigilância?", "A câmera é um adicional opcional por R$20/mês, disponível para qualquer plano. Com ela você monitora sua casa 24 horas por dia, com imagens gravadas e acessíveis na nuvem."],
  ["Como verifico se a Bolanet atende meu endereço?", "Informe seu nome e CEP nesta página — nossa equipe confirma a disponibilidade pelo WhatsApp em minutos."],
  ["Como é feita a instalação?", "A instalação é inclusa nos dois planos, sem custo. Nossa equipe ténica agenda o horário mais conveniente para você."],
];

export function FAQ() {
  return (
    <section id="faq" className="py-18 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <Sparkles className="text-highlight" />
          <h2 className="display-title mt-4 text-4xl sm:text-5xl">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-base font-extrabold no-underline hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
