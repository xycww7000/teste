import React, { useState } from 'react';
import { X, Search, Truck, Clock } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [tracked, setTracked] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      setTracked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-zinc-950 border border-white/20 text-white shadow-2xl p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Truck className="w-8 h-8 text-white mx-auto mb-2" />
          <h3 className="text-xl font-heading text-white">Rastrear Pedido</h3>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            Digite o código do pedido ou código de envio Correios
          </p>
        </div>

        <form onSubmit={handleTrack} className="space-y-4 font-mono text-xs">
          <div className="flex gap-2">
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Ex: CIA4W-8291 ou NL123456789BR"
              className="flex-1 bg-black border border-white/20 px-3.5 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              <span>Rastrear</span>
            </button>
          </div>
        </form>

        {tracked && (
          <div className="mt-6 pt-6 border-t border-white/10 font-mono text-xs space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Pedido: <strong className="text-white">{code}</strong></span>
              <span className="text-emerald-400 font-bold">EM TRÂNSITO</span>
            </div>

            <div className="space-y-3 relative pl-6 border-l border-white/20 ml-2">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-black" />
                <h5 className="font-bold text-white text-[11px]">Objeto em rota de entrega</h5>
                <p className="text-[10px] text-zinc-400">São Paulo, SP - CD Leste</p>
                <span className="text-[9px] text-zinc-500">Hoje às 08:34</span>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-black" />
                <h5 className="font-bold text-zinc-300 text-[11px]">Em trânsito para a unidade de distribuição</h5>
                <p className="text-[10px] text-zinc-400">Unidade Operacional, Cajamar - SP</p>
                <span className="text-[9px] text-zinc-500">Ontem às 19:12</span>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-black" />
                <h5 className="font-bold text-zinc-300 text-[11px]">Objeto postado pela cia4w</h5>
                <p className="text-[10px] text-zinc-400">Agência dos Correios, São Paulo - SP</p>
                <span className="text-[9px] text-zinc-500">Há 2 dias às 14:40</span>
              </div>
            </div>

            <div className="p-3 bg-black border border-white/10 text-[10px] text-zinc-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-zinc-300" />
              <span>Previsão de entrega estimada: 1 a 2 dias úteis.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
