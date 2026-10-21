import { useState, type FormEvent } from "react";
import { Check, Minus, MapPin, Radio, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const common = ["Internet sem limites de velocidade", "Médicos Online", "+150 canais", "Cursos online de plantas", "Clube Bolanet"];

function Plan({ turbo = false }: { turbo?: boolean }) {
  return <article className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg bg-background p-3 shadow-brand sm:p-9 ${turbo ? "border-2 border-highlight lg:scale-[1.03]" : "border border-primary/40"}`}>{turbo && <span className="mb-3 w-fit rounded-full bg-highlight px-2 py-1 text-[8px] font-black uppercase text-highlight-foreground sm:px-4 sm:py-2 sm:text-xs">Mais completo</span>}<p className="text-xs font-black uppercase text-primary sm:text-sm">Infinity {turbo && "Turbo"}</p><div className="mt-3 flex flex-wrap items-end gap-x-1 sm:mt-5 sm:flex-nowrap sm:gap-2"><span className="font-display text-3xl font-black text-primary sm:text-5xl">R$ {turbo ? "139" : "119"}</span><span className="pb-1 text-[10px] font-bold sm:text-base">/mês</span></div><div className="my-4 h-px bg-border sm:my-7"/><ul className="space-y-2 sm:space-y-4">{common.map(item=><li key={item} className="flex gap-1.5 text-[11px] font-semibold leading-snug sm:gap-3 sm:text-sm"><Check className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5"/>{item}</li>)}{turbo&&<><li className="flex gap-1.5 text-[11px] font-black leading-snug text-primary sm:gap-3 sm:text-sm"><Check className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"/>Câmera para vigiar sua casa 24h por dia</li><li className="flex gap-1.5 text-[11px] font-black leading-snug text-primary sm:gap-3 sm:text-sm"><Check className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"/>Gravação das imagens na nuvem</li></>}</ul><Button asChild size="xl" variant={turbo ? "sunshine" : "default"} className="mt-auto w-full px-2 pt-6 text-xs sm:mt-8 sm:text-sm"><a href="#cobertura">Quero o Infinity {turbo && "Turbo"}</a></Button></article>;
}

export function Planos() {
  return <section id="planos" className="bg-surface py-18 sm:py-24"><div className="section-shell"><div className="mx-auto max-w-2xl text-center"><p className="font-extrabold uppercase text-primary">Escolha sua experiência</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">Muito mais dentro do seu plano</h2></div><div className="relative mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-2.5 sm:gap-6 lg:gap-10"><Plan/><div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-3 text-center text-[10px] font-black uppercase text-primary-foreground lg:block">Só R$ 20<br/>a mais</div><Plan turbo/></div></div></section>;
}

export function Comparador() {
  const rows = [...common, "Câmera para vigiar sua casa 24h", "Gravação das imagens na nuvem"];
  return <section className="py-18 sm:py-24"><div className="section-shell"><div className="mx-auto max-w-4xl"><h2 className="display-title text-center text-3xl sm:text-5xl">Compare e escolha</h2><div className="mt-9 overflow-hidden rounded-lg border border-border"><div className="grid grid-cols-[minmax(0,1fr)_82px_82px] bg-primary p-4 text-xs font-black text-primary-foreground sm:grid-cols-[minmax(0,1fr)_160px_160px] sm:text-sm"><span>Benefício</span><span className="text-center">Infinity<br/>R$ 119</span><span className="text-center text-highlight">Turbo<br/>R$ 139</span></div>{rows.map((row,i)=><div key={row} className="grid grid-cols-[minmax(0,1fr)_82px_82px] items-center border-t border-border p-4 text-xs sm:grid-cols-[minmax(0,1fr)_160px_160px] sm:text-sm"><strong className="min-w-0 pr-2">{row}</strong><span className="flex justify-center">{i >= common.length?<Minus className="text-muted-foreground"/>:<Check className="text-primary"/>}</span><span className="flex justify-center"><Check className="text-primary"/></span></div>)}</div><p className="mt-6 text-center font-display text-xl font-black uppercase text-primary">Apenas R$ 20 de diferença.</p></div></div></section>;
}

function simulateCoverageLookup(_query: string) {
  // Integração futura: substituir esta simulação pela consulta real de cobertura.
  return "Recebemos sua consulta. Um especialista Bolanet confirmará a disponibilidade para este endereço.";
}

export function Cobertura() {
  const [query,setQuery]=useState(""); const [error,setError]=useState(""); const [result,setResult]=useState("");
  function submit(e:FormEvent){e.preventDefault(); const digits=query.replace(/\D/g,""); if(digits.length!==8){setError("Digite um CEP válido com 8 números.");setResult("");return;} setError("");setResult(simulateCoverageLookup(query));}
  return <section id="cobertura" className="bg-primary py-18 text-primary-foreground sm:py-24"><div className="section-shell grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><MapPin className="h-11 w-11 text-highlight"/><h2 className="display-title mt-5 text-4xl sm:text-5xl">Veja se a Bolanet já chegou até você.</h2></div><form onSubmit={submit} className="rounded-lg bg-background p-5 text-foreground sm:p-8"><label htmlFor="cep" className="text-sm font-extrabold">Digite seu CEP ou endereço</label><div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]"><Input id="cep" value={query} onChange={e=>setQuery(e.target.value)} placeholder="00000-000" inputMode="numeric" className="h-13 text-base"/><Button size="xl" variant="sunshine">Verificar cobertura</Button></div>{error&&<p role="alert" className="mt-3 text-sm font-bold text-destructive">{error}</p>}{result&&<p role="status" className="mt-4 rounded-md bg-brand-soft p-4 text-sm font-semibold text-primary">{result}</p>}</form></div></section>;
}

export function ProvaSocial() {
  return <section className="bg-surface py-18 sm:py-24"><div className="section-shell"><div className="max-w-2xl"><p className="font-extrabold uppercase text-primary">Quem vive a experiência Bolanet</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">Histórias de quem está conectado</h2></div><div className="mt-9 grid gap-4 md:grid-cols-3">{[1,2,3].map(n=><div key={n} className="flex min-h-48 flex-col justify-between rounded-lg border-2 border-dashed border-primary/30 bg-background p-6"><Radio className="text-primary"/><p className="font-bold text-muted-foreground">[DEPOIMENTO DE CLIENTE — SUBSTITUIR]</p></div>)}</div></div></section>;
}

const faqs = [
  ["O que está incluído no Infinity?","Internet sem limites de velocidade, Médicos Online, mais de 150 canais, cursos online de plantas e Clube Bolanet."],
  ["O que está incluído no Infinity Turbo?","Tudo do Infinity, mais uma câmera para vigiar sua casa 24 horas por dia e gravação das imagens na nuvem."],
  ["Qual a diferença entre Infinity e Infinity Turbo?","Por R$ 20 a mais por mês, o Turbo inclui uma câmera para sua casa e gravação das imagens na nuvem."],
  ["Como funciona Médicos Online?","Clientes Bolanet contam com atendimento médico online para cuidar da saúde sem sair de casa."],
  ["Como acesso os mais de 150 canais?","Os detalhes de acesso são informados pela equipe Bolanet durante a contratação."],
  ["Como acesso os cursos online?","O acesso à plataforma de cursos de plantas e cultivo é orientado pela equipe Bolanet."],
  ["Como funciona o Clube Bolanet?","Apresente sua carteirinha física ou digital em um parceiro e receba o desconto definido por ele."],
  ["Onde encontro os estabelecimentos parceiros?","A relação de estabelecimentos estará disponível na página do Clube Bolanet."],
  ["Como funciona a câmera do plano Infinity Turbo?","O cliente recebe uma câmera para vigiar sua casa 24 horas por dia, com a vantagem de ter as imagens gravadas na nuvem."],
  ["Como verifico se a Bolanet atende meu endereço?","Informe seu CEP nesta página e a equipe Bolanet confirmará a disponibilidade."],
];
export function FAQ(){return <section id="faq" className="py-18 sm:py-24"><div className="section-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><Sparkles className="text-highlight"/><h2 className="display-title mt-4 text-4xl sm:text-5xl">Perguntas frequentes</h2></div><Accordion type="single" collapsible>{faqs.map(([q,a],i)=><AccordionItem key={q} value={`faq-${i}`}><AccordionTrigger className="py-5 text-base font-extrabold no-underline hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>}