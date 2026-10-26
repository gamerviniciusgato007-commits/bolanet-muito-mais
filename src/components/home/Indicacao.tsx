import { useState, type FormEvent } from "react";
import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WA_NUMBER = "5561998076886";

function IndicacaoModal({ onClose }: { onClose: () => void }) {
  const [nomeIndicador, setNomeIndicador] = useState("");
  const [nomeIndicado, setNomeIndicado] = useState("");
  const [telefoneIndicado, setTelefoneIndicado] = useState("");
  const [cepIndicado, setCepIndicado] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nomeIndicador.trim()) { setError("Por favor, informe seu nome."); return; }
    if (!nomeIndicado.trim()) { setError("Por favor, informe o nome de quem você está indicando."); return; }
    if (!telefoneIndicado.trim()) { setError("Por favor, informe o telefone de quem você está indicando."); return; }
    const digits = cepIndicado.replace(/\D/g, "");
    if (digits.length !== 8) { setError("Digite um CEP válido com 8 números."); return; }

    const text = encodeURIComponent(
      `Olá! Me chamo ${nomeIndicador.trim()} e quero participar do Programa de Indicação da Bolanet.\n\nEstou indicando: ${nomeIndicado.trim()}\nTelefone: ${telefoneIndicado.trim()}\nCEP: ${cepIndicado.trim()}\n\nAguardo o contato! 🤝`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-black uppercase text-primary">Indique e Ganhe</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">Fazer uma indicação</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">Preencha os dados abaixo. Nossa equipe vai entrar em contato para verificar a viabilidade na região indicada.</p>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div>
            <label htmlFor="ind-nome-indicador" className="mb-1 block text-xs font-extrabold">Seu nome</label>
            <Input id="ind-nome-indicador" value={nomeIndicador} onChange={e => setNomeIndicador(e.target.value)} placeholder="Como podemos te chamar?" />
          </div>
          <div>
            <label htmlFor="ind-nome-indicado" className="mb-1 block text-xs font-extrabold">Nome de quem você está indicando</label>
            <Input id="ind-nome-indicado" value={nomeIndicado} onChange={e => setNomeIndicado(e.target.value)} placeholder="Nome do indicado" />
          </div>
          <div>
            <label htmlFor="ind-telefone" className="mb-1 block text-xs font-extrabold">Telefone do indicado</label>
            <Input id="ind-telefone" value={telefoneIndicado} onChange={e => setTelefoneIndicado(e.target.value)} placeholder="(61) 9 0000-0000" inputMode="tel" />
          </div>
          <div>
            <label htmlFor="ind-cep" className="mb-1 block text-xs font-extrabold">CEP do indicado</label>
            <Input id="ind-cep" value={cepIndicado} onChange={e => setCepIndicado(e.target.value)} placeholder="00000-000" inputMode="numeric" />
          </div>
          {error && <p role="alert" className="text-sm font-bold text-destructive">{error}</p>}
          <Button type="submit" size="xl" variant="sunshine" className="mt-2 w-full">
            Enviar indicação pelo WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}

export function Indicacao() {
  const [open, setOpen] = useState(false);

  return (
    <section id="indicacao" className="bg-brand-soft py-18 sm:py-24">
      {open && <IndicacaoModal onClose={() => setOpen(false)} />}
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Gift className="h-8 w-8 text-primary-foreground" />
          </div>
          <p className="font-extrabold uppercase text-primary">Programa de parceiros</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">Indique e ganhe R$&nbsp;100.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Conhece alguém que quer uma internet boa? Indique a Bolanet. A cada instalação confirmada, você recebe R$&nbsp;100 no Pix — sem limite de indicações.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Sem limite de indicações", "Qualquer plano", "Após instalação confirmada"].map(x => (
              <span key={x} className="rounded-full bg-primary px-3 py-2 text-[11px] font-extrabold uppercase text-primary-foreground">{x}</span>
            ))}
          </div>
          <Button onClick={() => setOpen(true)} size="xl" variant="sunshine" className="mt-8">
            Quero indicar alguém
          </Button>
        </div>
      </div>
    </section>
  );
}
