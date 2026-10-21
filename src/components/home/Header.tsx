import { useState } from "react";
import { Headphones, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Início", "#inicio"], ["Planos", "#planos"], ["Benefícios", "#beneficios"],
  ["Clube Bolanet", "#clube"], ["Cobertura", "#cobertura"], ["Suporte", "#suporte"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-lg">
      <div className="section-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:h-20 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <a href="#inicio" aria-label="Bolanet — início" className="min-w-0">
          <img src="/logo.png" alt="Bolanet" className="h-auto w-38 sm:w-44" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-5 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-xs font-extrabold text-foreground transition-colors hover:text-primary">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="brandOutline"><a href="#cliente">Área do cliente</a></Button>
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
              <Button asChild variant="brandOutline"><a href="#cliente">Área do cliente</a></Button>
              <Button asChild variant="sunshine"><a href="#planos">Assine agora</a></Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/" aria-label="Falar com a Bolanet pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-highlight text-highlight-foreground shadow-brand transition-transform hover:scale-105">
      <Headphones className="h-6 w-6" />
    </a>
  );
}