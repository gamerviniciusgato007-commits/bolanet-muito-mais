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
    const text = encodeURIComponent(
      `Olá! Me chamo ${name.trim()} e tenho interesse no plano ${planName} da Bolanet. Meu CEP é ${cep.trim()}.${msg.trim() ? ` ${msg.trim()}` : " Pode me passar mais informações?"}`
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
  tag?: string;
  highlight?: boolean;
  features: string[];
};

const plans: PlanDef[] = [
  {
    name: "Bolanet Start",
    features: [
      "Internet sem limites de velocidade",
      "Instalação incluída",
      "Cursos online de plantas",
      "Atendimento via WhatsApp",
      "Câmera 24h de vigilância (adicional R$20/mês)",
    ],
  },
  {
    name: "Bolanet Plus",
    tag: "Mais popular",
    highlight: true,
    features: [
      "Internet sem limites de velocidade",
      "Instalação incluída",
      "Cursos online de plantas",
      "Médicos Online OU +150 canais (você escolhe 1)",
      "Atendimento via WhatsApp",
      "Câmera 24h de vigilância (adicional R$20/mês)",
    ],
  },
  {
    name: "Bolanet Pro",
    tag: "Recomendado",
    highlight: true,
    features: [
      "Internet sem limites de velocidade",
      "Instalação incluída",
      "Cursos online de plantas",
      "Médicos Online",
      "+150 canais",
      "Atendimento via WhatsApp",
      "Câmera 24h de vigilância (adicional R$20/mês)",
    ],
  },
  {
    name: "Bolanet Ultra",
    features: [
      "Internet sem limites de velocidade",
      "Instalação incluída",
      "Cursos online de plantas",
      "Médicos Online",
      "+150 canais",
      "Clube Bolanet — Carteirinha física e digital",
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
      <article className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg bg-background p-5 shadow-brand sm:p-8 ${plan.highlight ? "border-2 border-highlight lg:scale-[1.03] z-10" : "border border-primary/40"}`}>
        {plan.tag && (
          <span className="mb-3 w-fit rounded-full bg-highlight px-3 py-1 text-[9px] font-black uppercase text-highlight-foreground sm:text-xs">
            {plan.tag}
          </span>
        )}
        <p className="text-xs font-black uppercase text-primary sm:text-sm">{plan.name}</p>
        <div className="my-5 h-px bg-border" />
        <ul className="space-y-2.5 sm:space-y-3">
          {plan.features.map(item => (
            <li key={item} className={`flex gap-2 text-[11px] font-semibold leading-snug sm:text-sm ${plan.features.indexOf(item) >= 5 ? "font-black text-primary" : ""}`}>
              <Check className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
              {item}
            </li>
          ))}
        </ul>
        <Button
          size="xl"
          variant={plan.highlight ? "sunshine" : "default"}
          className="mt-auto w-full px-2 pt-6 text-xs sm:mt-8 sm:text-sm"
          onClick={() => setOpen(true)}
        >
          Quero o {plan.name}
        </Button>
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
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:items-end">
          {plans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
        </div>
      </div>
    </section>
  );
}

// fi = feature index, pi = plan index
function cellContent(fi: number, pi: number): React.ReactNode {
  if (fi === 5) return <span className="text-[10px] font-black text-primary sm:text-xs">+R$20</span>;
  if ((fi === 1 || fi === 2) && pi === 1)
    return <span className="text-[9px] font-black text-highlight sm:text-[11px]">escolha 1</span>;
  if (pi === 0 && (fi === 1 || fi === 2 || fi === 4)) return <Minus className="text-muted-foreground" />;
  if (pi === 1 && fi === 4) return <Minus className="text-muted-foreground" />;
  if (pi === 2 && fi === 4) return <Minus className="text-muted-foreground" />;
  return <Check className="text-primary" />;
}

const allFeatures = [
  "Internet sem limites",
  "Médicos Online",
  "+150 canais",
  "Cursos de plantas",
  "Clube Bolanet — Carteirinha",
  "Câmera 24h de vigilância",
  "Instalação incluída",
  "Atendimento via WhatsApp",
];

export function Comparador() {
  const planNames = ["Start", "Plus", "Pro", "Ultra"];

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl">
          <h2 className="display-title text-center text-3xl sm:text-5xl">Compare e escolha</h2>
          <div className="mt-9 overflow-x-auto">
            <div className="min-w-[560px] overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(4,1fr)] bg-primary p-4 text-xs font-black text-primary-foreground sm:text-sm">
                <span>Benefício</span>
                {planNames.map((name, i) => (
                  <span key={name} className={`text-center ${i >= 1 && i <= 2 ? "text-highlight" : ""}`}>{name}</span>
                ))}
              </div>
              {allFeatures.map((feature, fi) => (
                <div key={feature} className="grid grid-cols-[minmax(0,1.4fr)_repeat(4,1fr)] items-center border-t border-border p-4 text-xs sm:text-sm">
                  <strong className="min-w-0 pr-2">{feature}</strong>
                  {planNames.map((_, pi) => (
                    <span key={pi} className="flex justify-center">
                      {cellContent(fi, pi)}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">* No Plus, você escolhe entre Médicos Online ou +150 canais. A câmera é um adicional de R$20/mês disponível em qualquer plano.</p>
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
    const text = encodeURIComponent(
      `Olá! Me chamo ${name.trim()} e quero verificar se a Bolanet atende meu endereço. Meu CEP é ${cep.trim()}.${msg.trim() ? ` ${msg.trim()}` : ""}`
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
          {[1, 2, 3].map(n => (
            <div key={n} className="flex min-h-48 flex-col justify-between rounded-lg border-2 border-dashed border-primary/30 bg-background p-6">
              <Radio className="text-primary" />
              <p className="font-bold text-muted-foreground">[DEPOIMENTO DE CLIENTE — SUBSTITUIR]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Quais planos a Bolanet oferece?", "Temos quatro opções: Start, Plus, Pro e Ultra. Os planos Plus e Pro são os mais escolhidos pelos nossos clientes. Fale com nossa equipe pelo WhatsApp para saber qual se encaixa melhor na sua realidade."],
  ["Como sei qual plano é ideal pra mim?", "Nossa equipe te orienta pelo WhatsApp. Informe seu CEP e em minutos você sabe a disponibilidade e o plano certo para sua região."],
  ["O que está incluído em todos os planos?", "Todos os planos incluem internet sem limites de velocidade e cursos online de plantas. A partir do Plus, você acrescenta Médicos Online ou +150 canais. Do Pro em diante, você tem os dois. O Clube Bolanet com Carteirinha é exclusivo do plano Ultra."],
  ["O que o plano Plus tem a mais que o Start?", "No Plus você escolhe entre Médicos Online (telemedicina) ou +150 canais de IPTV — um benefício extra de acordo com o que faz mais sentido pra você."],
  ["O que os planos Pro e Ultra têm a mais?", "Pro e Ultra incluem os dois benefícios juntos: Médicos Online e +150 canais. O Ultra acrescenta ainda o Clube Bolanet com Carteirinha física e digital."],
  ["Como funciona Médicos Online?", "Clientes Bolanet contam com atendimento médico online para cuidar da saúde sem sair de casa. Disponível a partir do Bolanet Plus."],
  ["Como acesso os mais de 150 canais?", "Os detalhes de acesso são informados pela equipe Bolanet durante a contratação. Disponível a partir do Bolanet Plus."],
  ["Como funciona o Clube Bolanet?", "Você recebe uma carteirinha física e digital, apresenta em um parceiro e garante o desconto definido por cada estabelecimento. Benefício exclusivo do plano Ultra."],
  ["Como funciona a câmera de vigilância?", "A câmera é um adicional disponível em qualquer plano por apenas R$20/mês. O cliente recebe uma câmera para vigiar a casa 24 horas por dia, com imagens gravadas e acessíveis na nuvem."],
  ["Como verifico se a Bolanet atende meu endereço?", "Informe seu nome e CEP nesta página — nossa equipe confirma a disponibilidade pelo WhatsApp rapidamente."],
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
