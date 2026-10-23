import { useState, type FormEvent } from "react";
import { BadgePercent, Check, Dumbbell, Eye, HeartPulse, Pill, Scissors, ShieldCheck, ShoppingBag, Sparkles, Stethoscope, Utensils, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WA_NUMBER = "5561998076886";

function CampaignImage({ src, alt, side = "left" }: { src: string; alt: string; side?: "left" | "right" }) {
  return <div className={`relative min-h-[380px] overflow-hidden ${side === "right" ? "lg:order-2" : ""}`}><img loading="lazy" src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-[5rem] bg-highlight"/></div>;
}

export function Medicos() {
  return <section id="medicos" className="bg-brand-soft"><div className="grid lg:grid-cols-2"><CampaignImage src="/medicos.png" alt="Cliente Bolanet conversando com uma médica por videochamada"/><div className="flex items-center px-6 py-14 sm:px-12 lg:px-16"><div className="max-w-xl"><HeartPulse className="h-10 w-10 text-primary"/><h2 className="display-title mt-5 text-4xl sm:text-5xl">Um médico mais perto da sua família.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Clientes Bolanet podem contar com atendimento médico online, trazendo mais praticidade para cuidar da saúde sem precisar sair de casa.</p><div className="mt-7 flex flex-wrap gap-2">{["Atendimento online","Praticidade","Cuidado para a família"].map(x=><span key={x} className="rounded-full bg-primary px-3 py-2 text-[11px] font-extrabold uppercase text-primary-foreground">{x}</span>)}</div><div className="mt-6 border-t border-primary/15 pt-5"><p className="mb-3 text-xs font-extrabold uppercase text-muted-foreground">Acesse como cliente</p><div className="flex flex-wrap gap-2"><a href="https://esaude.videoconsultas.app/paciente/autogestion" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/25 bg-background px-4 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary/5">Acessar online</a><a href="https://play.google.com/store/apps/details?id=br.yc.youcast.telemedicina" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/25 bg-background px-4 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary/5">Android</a><a href="https://apps.apple.com/br/app/telemedicina-e-saude/id6448754403" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/25 bg-background px-4 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary/5">iOS</a></div></div></div></div></div></section>;
}

export function TV() {
  return <section id="tv" className="relative min-h-[580px] overflow-hidden"><img loading="lazy" src="/tv.png" alt="Família reunida assistindo televisão na sala" className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-transparent"/><div className="section-shell relative flex min-h-[580px] items-end pb-12 pt-16 sm:items-center"><div className="max-w-2xl text-primary-foreground"><p className="font-extrabold uppercase text-highlight">Entretenimento para todos</p><h2 className="display-title mt-3 text-4xl sm:text-6xl">Sua internet também virou entretenimento.</h2><div className="mt-7 border-l-4 border-highlight pl-5"><strong className="font-display text-6xl font-black text-highlight sm:text-8xl">+150</strong><span className="block text-2xl font-black uppercase">canais</span></div></div></div></section>;
}

export function Cursos() {
  return <section id="cursos" className="bg-background py-18 sm:py-24"><div className="section-shell grid overflow-hidden rounded-lg bg-primary lg:grid-cols-[0.9fr_1.1fr]"><div className="flex items-center p-7 text-primary-foreground sm:p-12"><div><p className="font-extrabold uppercase text-highlight">Aprenda no seu ritmo</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">Conhecimento também vem no seu plano.</h2><p className="mt-5 leading-relaxed text-primary-foreground/80">Tenha acesso a uma plataforma de cursos online de plantas e cultivo para aprender no seu ritmo pelo celular, computador ou tablet.</p></div></div><CampaignImage side="right" src="/cursos.png" alt="Mulher fazendo curso online de plantas e cultivo pelo tablet"/></div></section>;
}

const categories = [[Utensils,"Restaurantes"],[Pill,"Farmácias"],[Dumbbell,"Academias"],[HeartPulse,"Pet shops"],[Eye,"Óticas"],[Sparkles,"Salões"],[Scissors,"Barbearias"],[Wrench,"Oficinas"],[Stethoscope,"Clínicas"],[ShoppingBag,"Comércio local"]] as const;

function DigitalCard() {
  const dots = Array.from({length: 64}, (_, i) => ((i * 17 + Math.floor(i / 8) * 7) % 5) < 2);
  return <div className="relative mx-auto aspect-[1.58/1] w-full max-w-md overflow-hidden rounded-lg bg-primary p-6 text-primary-foreground shadow-brand"><div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border-[22px] border-highlight"/><img src="/logo.png" alt="Bolanet" className="relative h-auto w-32 brightness-0 invert"/><p className="mt-5 text-xs font-extrabold uppercase text-highlight">Clube Bolanet</p><p className="mt-1 text-xl font-black">MARIA EXEMPLO</p><span className="mt-3 inline-flex items-center gap-1 rounded-full bg-highlight px-3 py-1 text-[10px] font-black uppercase text-highlight-foreground"><Check className="h-3 w-3"/> Cliente ativo</span><div aria-label="QR code decorativo" className="absolute bottom-5 right-5 grid h-18 w-18 grid-cols-8 gap-px bg-background p-1">{dots.map((on,i)=><span key={i} className={on ? "bg-primary" : "bg-background"}/>)}</div></div>;
}

function ClubeModal({ onClose }: { onClose: () => void }) {
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
      `Olá! Me chamo ${name.trim()} e tenho interesse no Clube Bolanet. Meu CEP é ${cep.trim()}.${msg.trim() ? ` ${msg.trim()}` : " Quero saber mais sobre os estabelecimentos parceiros!"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-black uppercase text-primary">Clube Bolanet</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">Ver estabelecimentos parceiros</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">Preencha abaixo e nossa equipe te envia a lista de parceiros na sua região pelo WhatsApp.</p>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div>
            <label htmlFor="clube-name" className="mb-1 block text-xs font-extrabold">Seu nome</label>
            <Input id="clube-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos te chamar?" />
          </div>
          <div>
            <label htmlFor="clube-cep" className="mb-1 block text-xs font-extrabold">Seu CEP</label>
            <Input id="clube-cep" value={cep} onChange={e => setCep(e.target.value)} placeholder="00000-000" inputMode="numeric" />
          </div>
          <div>
            <label htmlFor="clube-msg" className="mb-1 block text-xs font-extrabold">Mensagem (opcional)</label>
            <Input id="clube-msg" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Alguma dúvida?" />
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

export function Clube() {
  const [open, setOpen] = useState(false);
  return (
    <section id="clube" className="overflow-hidden bg-highlight py-18 sm:py-24">
      {open && <ClubeModal onClose={() => setOpen(false)} />}
      <div className="section-shell"><div className="grid items-center gap-10 lg:grid-cols-2"><div><p className="font-extrabold uppercase text-primary">Economia no seu bairro</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">Ser cliente Bolanet dá desconto até fora de casa.</h2><p className="mt-5 max-w-xl leading-relaxed">Você recebe uma carteirinha física e digital, apresenta no comércio parceiro e aproveita o desconto definido por cada estabelecimento.</p><div className="mt-7"><DigitalCard/></div></div><div><div className="relative overflow-hidden rounded-lg"><img loading="lazy" src="/clube.png" alt="Cliente apresentando a carteirinha Bolanet em um comércio local" className="aspect-[4/3] w-full object-cover"/><div className="absolute left-0 top-0 flex items-center gap-2 bg-primary px-4 py-3 text-sm font-extrabold text-primary-foreground"><BadgePercent className="text-highlight"/> Benefícios perto de você</div></div><div className="mt-5 flex flex-wrap gap-2">{categories.map(([Icon,label])=><span key={label} className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-xs font-bold text-primary"><Icon className="h-4 w-4"/>{label}</span>)}</div><Button size="xl" className="mt-6" onClick={() => setOpen(true)}>Ver estabelecimentos parceiros</Button></div></div></div>
    </section>
  );
}

export function Monitoramento() {
  return <section id="monitoramento" className="relative min-h-[620px] overflow-hidden"><img loading="lazy" src="/monitoramento.png" alt="Casa monitorada por câmera com visualização ao vivo pelo celular" className="absolute inset-0 h-full w-full object-cover object-[68%_center]"/><div className="image-shade absolute inset-0"/><div className="section-shell relative flex min-h-[620px] items-center py-16"><div className="max-w-2xl text-primary-foreground"><ShieldCheck className="h-12 w-12 text-highlight"/><p className="mt-5 text-sm font-extrabold uppercase text-highlight">Adicional disponível em qualquer plano</p><h2 className="display-title mt-3 text-4xl sm:text-6xl">Uma câmera para vigiar sua casa 24h por dia.</h2><p className="mt-6 max-w-xl text-lg font-bold leading-relaxed">O cliente recebe a câmera e ainda conta com a gravação das imagens na nuvem.</p><a href="https://cloud.fullcam.me/#/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-extrabold text-highlight-foreground transition-opacity hover:opacity-90">Acessar minhas câmeras</a></div></div></section>;
}
