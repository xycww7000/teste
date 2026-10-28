import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, User, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenAuth: () => void;
  onOpenTracking: () => void;
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  activeView: 'home' | 'produtos' | 'contato';
  setActiveView: (view: 'home' | 'produtos' | 'contato') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenMenu,
  onOpenAuth,
  onOpenTracking,
  currentCategory,
  onSelectCategory,
  activeView,
  setActiveView,
}) => {
  const { openCart, itemCount } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { label: 'Todos os produtos', value: 'all' },
    { label: 'Camisetas', value: 'Camisetas' },
    { label: 'Moletons', value: 'Moletons' },
    { label: 'Calças', value: 'Calças' },
    { label: 'Acessórios', value: 'Acessórios' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 transition-colors">
      {/* Top Announcement Bar */}
      <div className="bg-zinc-950 border-b border-white/5 py-1.5 px-4 overflow-hidden text-center text-xs text-zinc-300 font-mono tracking-wider">
        <div className="flex items-center justify-center gap-4 animate-pulse">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-700"></span>
          <span className="uppercase text-[11px] tracking-widest text-zinc-200">
            DROP 01 // CIA4W ONLINE — PEÇAS LIMITADAS
          </span>
          <span className="hidden md:inline text-zinc-500">•</span>
          <span className="hidden md:inline uppercase text-[11px] tracking-widest text-zinc-400">
            PRODUÇÃO ARTESANAL / SÃO PAULO
          </span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left: Search button (desktop) / Menu toggle (mobile) */}
          <div className="flex items-center gap-3 w-1/4">
            <button
              onClick={onOpenMenu}
              className="p-2 -ml-2 text-white/90 hover:text-white md:hidden focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>

            <button
              onClick={onOpenSearch}
              className="hidden md:flex items-center gap-2 text-white/80 hover:text-white group transition-colors px-2 py-1.5 rounded border border-transparent hover:border-white/10"
              aria-label="Barra de pesquisa"
            >
              <Search className="w-5 h-5 stroke-[1.5] group-hover:scale-105 transition-transform" />
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 group-hover:text-white transition-colors">
                Buscar
              </span>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center justify-center flex-1 text-center">
            <button
              onClick={() => {
                setActiveView('home');
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none py-1"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Right: User Login & Cart Bag */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 w-1/4">
            {/* Mobile search icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-white/80 hover:text-white md:hidden focus:outline-none transition-colors"
              aria-label="Buscar produtos"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Desktop Auth / Account link */}
            <button
              onClick={onOpenAuth}
              className="hidden md:flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-zinc-300 hover:text-white transition-colors py-1.5 px-2 rounded border border-transparent hover:border-white/10"
              aria-label="Conta"
            >
              <User className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[11px]">Conta</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-white hover:text-zinc-200 focus:outline-none transition-transform active:scale-95 group"
              aria-label="Carrinho de compras"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.5] group-hover:scale-105 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono shadow-sm animate-in zoom-in-50 duration-200">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Nav Sub-menu */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-2.5 border-t border-white/5 text-xs font-mono uppercase tracking-[0.2em]">
          <button
            onClick={() => {
              setActiveView('home');
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-1 px-2 border-b-2 ${
              activeView === 'home' && currentCategory === 'all'
                ? 'text-white border-white'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            Início
          </button>

          {/* Produtos with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setActiveView('produtos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 transition-colors py-1 px-2 border-b-2 ${
                activeView === 'produtos' || currentCategory !== 'all'
                  ? 'text-white border-white'
                  : 'text-zinc-400 hover:text-white border-transparent'
              }`}
            >
              <span>Produtos</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2] opacity-70" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-zinc-950 border border-white/15 shadow-2xl py-2 mt-1 z-50">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      onSelectCategory(cat.value);
                      setActiveView('produtos');
                      setDropdownOpen(false);
                      const el = document.getElementById('catalogo-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block w-full text-left px-4 py-2 text-[11px] tracking-wider transition-colors ${
                      currentCategory === cat.value
                        ? 'bg-white text-black font-semibold'
                        : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setActiveView('contato');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-1 px-2 border-b-2 ${
              activeView === 'contato'
                ? 'text-white border-white'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            Contato
          </button>

          <button
            onClick={onOpenTracking}
            className="text-zinc-400 hover:text-white transition-colors py-1 px-2 border-b-2 border-transparent"
          >
            Rastrear Pedido
          </button>
        </nav>
      </div>
    </header>
  );
};
