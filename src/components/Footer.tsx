import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenAuth: () => void;
  onOpenTracking: () => void;
  onSelectCategory: (cat: string) => void;
  setActiveView: (view: 'home' | 'produtos' | 'contato') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAuth,
  onOpenTracking,
  onSelectCategory,
  setActiveView,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Grid: Newsletter & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Logo size="md" className="items-start" />
            <p className="text-zinc-400 text-xs leading-relaxed pt-2">
              Streetwear underground com produção limitada. Peças numeradas e confeccionadas artesanalmente em São Paulo.
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white uppercase tracking-widest text-[11px] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@cia4w</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    onSelectCategory('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('produtos');
                    onSelectCategory('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Todos os Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('produtos');
                    onSelectCategory('Camisetas');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Camisetas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('produtos');
                    onSelectCategory('Moletons');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Moletons
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('produtos');
                    onSelectCategory('Calças');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Calça [StayParanoid]
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Suporte & Conta */}
          <div className="space-y-3">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2">
              Atendimento
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    setActiveView('contato');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-white transition-colors"
                >
                  Rastrear Envio
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAuth}
                  className="hover:text-white transition-colors"
                >
                  Iniciar sessão / Criar conta
                </button>
              </li>
              <li className="pt-2 text-zinc-500 text-[11px]">
                E-mail: contato@cia4w.com.br
              </li>
            </ul>
          </div>

          {/* Col 4: VIP Drop Alerts */}
          <div className="space-y-3">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2">
              VIP Drops
            </h4>
            <p className="text-zinc-400 text-xs">
              Cadastre seu e-mail para receber com antecedência os lançamentos e reposições.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center"
                  aria-label="Inscrever-se"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-emerald-400 text-[11px] flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3" />
                  E-mail cadastrado na lista VIP cia4w!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 mr-2">Formas de pagamento:</span>
            {['PIX', 'VISA', 'MASTERCARD', 'ELO', 'BOLETO', 'HIPERCARD'].map((pay) => (
              <span
                key={pay}
                className="px-2.5 py-1 bg-zinc-950 border border-white/15 text-[10px] text-zinc-300 font-bold uppercase tracking-wider"
              >
                {pay}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400 bg-zinc-950 border border-white/10 px-2.5 py-1">
            <span>Produção limitada e numerada</span>
          </div>
        </div>

        {/* Footer Bottom / Authentic Nuvemshop Copyright format */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAuth}
              className="hover:text-white transition-colors"
            >
              Iniciar sessão
            </button>
            <span>|</span>
            <button
              onClick={onOpenAuth}
              className="hover:text-white transition-colors"
            >
              Criar uma conta
            </button>
          </div>

          <p className="text-center sm:text-right text-zinc-400">
            Copyright cia4w - 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
