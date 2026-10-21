import { useState, type FormEvent } from "react";
import { Headphones, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WA_NUMBER = "5561998076886";

const navItems = [
  ["Início", "#inicio"], ["Planos", "#planos"], ["Benefícios", "#beneficios"],
  ["Clube Bolanet", "#clube"], ["Cobertura", "#cobertura"], ["Suporte", "#suporte"],
];

function ClienteModal({ onClose }: { onClose: () => void }) {
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
      `Olá! Me chamo ${name.trim()} e preciso de atendimento na minha conta Bolanet. Meu CEP é ${cep.trim()}.${msg.trim() ? ` ${msg.trim()}` : ""}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-black uppercase text-primary">Bolanet</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">Área do Cliente</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">Preencha abaixo e nossa equipe te atende pelo WhatsApp.</p>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div>
            <label htmlFor="cl-name" className="mb-1 block text-xs font-extrabold">Seu nome</label>
            <Input id="cl-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos te chamar?" />
          </div>
          <div>
            <label htmlFor="cl-cep" className="mb-1 block text-xs font-extrabold">Seu CEP</label>
            <Input id="cl-cep" value={cep} onChange={e => setCep(e.target.value)} placeholder="00000-000" inputMode="numeric" />
          </div>
          <div>
            <label htmlFor="cl-msg" className="mb-1 block text-xs font-extrabold">O que você precisa? (opcional)</label>
            <Input id="cl-msg" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Descreva brevemente sua solicitação" />
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

export function Header() {
  const [open, setOpen] = useState(false);
  const [clienteOpen, setClienteOpen] = useState(false);
  return (
    <>
      {clienteOpen && <ClienteModal onClose={() => setClienteOpen(false)} />}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-lg">
        <div className="section-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:h-20 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <a href="#inicio" aria-label="Bolanet — início" className="min-w-0">
            <img src="/logo.png" alt="Bolanet" className="h-auto w-38 sm:w-44" />
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-5 lg:flex">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-xs font-extrabold text-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="brandOutline" onClick={() => setClienteOpen(true)}>Área do cliente</Button>
            <Button asChild variant="sunshine"><a href="#planos">Assine agora</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav aria-label="Navegação móvel" className="border-t border-border bg-background px-4 pb-5 pt-3 shadow-brand lg:hidden">
            <div className="mx-auto grid max-w-lg gap-1">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold hover:bg-brand-soft">{label}</a>)}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="brandOutline" onClick={() => { setOpen(false); setClienteOpen(true); }}>Área do cliente</Button>
                <Button asChild variant="sunshine"><a href="#planos">Assine agora</a></Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/5561998076886" aria-label="Falar com a Bolanet pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-highlight text-highlight-foreground shadow-brand transition-transform hover:scale-105">
      <Headphones className="h-6 w-6" />
    </a>
  );
}
