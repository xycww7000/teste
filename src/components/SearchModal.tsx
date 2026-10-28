import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-3xl mx-auto px-4 pt-16 sm:pt-24 pb-12">
        {/* Header with Close */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-6 h-6 text-zinc-400 stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="O que você está buscando?"
              className="w-full bg-transparent text-lg sm:text-2xl font-light text-white placeholder:text-zinc-600 focus:outline-none font-heading"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors ml-4"
            aria-label="Fechar busca"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-400">Sugestões:</span>
          {['GOREgeous', 'DESAJUSTADOS', 'Moletom', 'StayParanoid', 'Pulseiras', 'DEANgore'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-zinc-900 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-8">
          {query.trim() && (
            <div className="mb-4 text-xs font-mono text-zinc-400">
              {results.length} resultado(s) para &quot;{query}&quot;
            </div>
          )}

          {results.length > 0 ? (
            <div className="space-y-3">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/30 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover bg-black border border-white/10"
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                        {product.category}
                      </span>
                      <h4 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white pr-2 transition-colors">
                    <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">
                      Ver produto
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="text-center py-12 text-zinc-500 font-mono text-sm">
              Nenhum produto encontrado para &quot;{query}&quot;. Tente buscar por modelo ou categoria.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
