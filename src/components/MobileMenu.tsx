import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, User, Package, MessageSquare, Home, HelpCircle } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onOpenAuth: () => void;
  onOpenTracking: () => void;
  setActiveView: (view: 'home' | 'produtos' | 'contato') => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenAuth,
  onOpenTracking,
  setActiveView,
}) => {
  const [productsAccordion, setProductsAccordion] = useState(true);

  if (!isOpen) return null;

  const categories = [
    { label: 'Todos os produtos', value: 'all' },
    { label: 'Camisetas', value: 'Camisetas' },
    { label: 'Moletons', value: 'Moletons' },
    { label: 'Calças', value: 'Calças' },
    { label: 'Acessórios', value: 'Acessórios' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs bg-zinc-950 border-r border-white/15 text-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <Logo size="sm" />
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 font-mono text-xs uppercase tracking-widest">
            <div className="space-y-4">
              <button
                onClick={() => {
                  setActiveView('home');
                  onSelectCategory('all');
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 w-full text-left py-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 text-zinc-500" />
                <span>Início</span>
              </button>

              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => setProductsAccordion(!productsAccordion)}
                  className="flex items-center justify-between w-full py-2 text-white font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-zinc-400" />
                    <span>Produtos</span>
                  </div>
                  {productsAccordion ? (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  )}
                </button>

                {productsAccordion && (
                  <div className="pl-7 mt-2 space-y-2.5 border-l border-white/10 ml-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          onSelectCategory(cat.value);
                          setActiveView('produtos');
                          onClose();
                          const el = document.getElementById('catalogo-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="block w-full text-left py-1 text-[11px] text-zinc-400 hover:text-white tracking-wider transition-colors"
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
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 w-full text-left py-2 text-zinc-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-zinc-500" />
                <span>Contato</span>
              </button>

              <button
                onClick={() => {
                  onOpenTracking();
                  onClose();
                }}
                className="flex items-center gap-3 w-full text-left py-2 text-zinc-300 hover:text-white transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-zinc-500" />
                <span>Rastrear Pedido</span>
              </button>
            </div>

            {/* Account Quick Action */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="w-full flex items-center gap-3 py-2.5 px-3 bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-200 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Minha Conta / Entrar</span>
              </button>
            </div>
          </div>

          {/* Footer Socials */}
          <div className="p-5 border-t border-white/10 bg-black text-[11px] font-mono text-zinc-400 flex items-center justify-between">
            <span>© 2026 cia4w</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@cia4w</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
