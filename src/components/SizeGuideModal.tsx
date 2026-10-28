import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'camisetas' | 'moletom' | 'calca'>('camisetas');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 text-white shadow-2xl p-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-zinc-400" />
            <h3 className="text-base font-mono uppercase tracking-widest text-white">
              Tabela de Medidas (cm)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
            aria-label="Fechar tabela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 border-b border-white/10 pt-4 pb-3 text-xs font-mono uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('camisetas')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'camisetas'
                ? 'bg-white text-black font-semibold border-white'
                : 'text-zinc-400 border-white/10 hover:border-white/30'
            }`}
          >
            Camisetas
          </button>
          <button
            onClick={() => setActiveTab('moletom')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'moletom'
                ? 'bg-white text-black font-semibold border-white'
                : 'text-zinc-400 border-white/10 hover:border-white/30'
            }`}
          >
            Moletom Zíper
          </button>
          <button
            onClick={() => setActiveTab('calca')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'calca'
                ? 'bg-white text-black font-semibold border-white'
                : 'text-zinc-400 border-white/10 hover:border-white/30'
            }`}
          >
            Calça Baggy
          </button>
        </div>

        {/* Content */}
        <div className="pt-5 overflow-x-auto">
          {activeTab === 'camisetas' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-white/10 p-3 bg-black">
                  <h4 className="text-xs font-mono font-bold text-white uppercase mb-2">
                    Modelagem Boxy (Caimento Quadrado Curto)
                  </h4>
                  <table className="w-full text-xs font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/20 text-zinc-400">
                        <th className="py-1">Tamanho</th>
                        <th className="py-1">Tórax</th>
                        <th className="py-1">Comprimento</th>
                        <th className="py-1">Manga</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-zinc-300">
                      <tr><td className="py-1.5 font-bold">P</td><td>56 cm</td><td>66 cm</td><td>21 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">M</td><td>58 cm</td><td>68 cm</td><td>22 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">G</td><td>61 cm</td><td>71 cm</td><td>23 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">GG</td><td>64 cm</td><td>74 cm</td><td>24 cm</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-white/10 p-3 bg-black">
                  <h4 className="text-xs font-mono font-bold text-white uppercase mb-2">
                    Modelagem Oversized (Ampla / Solta)
                  </h4>
                  <table className="w-full text-xs font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/20 text-zinc-400">
                        <th className="py-1">Tamanho</th>
                        <th className="py-1">Tórax</th>
                        <th className="py-1">Comprimento</th>
                        <th className="py-1">Manga</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-zinc-300">
                      <tr><td className="py-1.5 font-bold">P</td><td>60 cm</td><td>72 cm</td><td>23 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">M</td><td>63 cm</td><td>75 cm</td><td>24 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">G</td><td>66 cm</td><td>78 cm</td><td>25 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">GG</td><td>69 cm</td><td>81 cm</td><td>26 cm</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-white/10 p-3 bg-black">
                  <h4 className="text-xs font-mono font-bold text-white uppercase mb-2">
                    Baby Tee (Justa / Cropped Style)
                  </h4>
                  <table className="w-full text-xs font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/20 text-zinc-400">
                        <th className="py-1">Tamanho</th>
                        <th className="py-1">Tórax</th>
                        <th className="py-1">Comprimento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-zinc-300">
                      <tr><td className="py-1.5 font-bold">P</td><td>44 cm</td><td>50 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">M</td><td>46 cm</td><td>52 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">G</td><td>48 cm</td><td>54 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">GG</td><td>50 cm</td><td>56 cm</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-white/10 p-3 bg-black">
                  <h4 className="text-xs font-mono font-bold text-white uppercase mb-2">
                    Regular Fit (Corte Tradicional)
                  </h4>
                  <table className="w-full text-xs font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/20 text-zinc-400">
                        <th className="py-1">Tamanho</th>
                        <th className="py-1">Tórax</th>
                        <th className="py-1">Comprimento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-zinc-300">
                      <tr><td className="py-1.5 font-bold">P</td><td>52 cm</td><td>70 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">M</td><td>55 cm</td><td>73 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">G</td><td>58 cm</td><td>76 cm</td></tr>
                      <tr><td className="py-1.5 font-bold">GG</td><td>61 cm</td><td>79 cm</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'moletom' && (
            <div className="border border-white/10 p-4 bg-black">
              <h4 className="text-xs font-mono font-bold text-white uppercase mb-3">
                Moletom Zíper [DESAJUSTADOS] - 300g Heavyweight
              </h4>
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-white/20 text-zinc-400">
                    <th className="py-2">Tamanho</th>
                    <th className="py-2">Largura / Tórax</th>
                    <th className="py-2">Comprimento</th>
                    <th className="py-2">Manga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr><td className="py-2.5 font-bold text-white">P</td><td>62 cm</td><td>68 cm</td><td>64 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">M</td><td>65 cm</td><td>71 cm</td><td>66 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">G</td><td>68 cm</td><td>74 cm</td><td>68 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">GG</td><td>72 cm</td><td>77 cm</td><td>70 cm</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'calca' && (
            <div className="border border-white/10 p-4 bg-black">
              <h4 className="text-xs font-mono font-bold text-white uppercase mb-3">
                Calça [StayParanoid] - Denim 13oz Baggy !EXAGERADA!
              </h4>
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-white/20 text-zinc-400">
                    <th className="py-2">Tamanho</th>
                    <th className="py-2">Cintura</th>
                    <th className="py-2">Gancho</th>
                    <th className="py-2">Comprimento</th>
                    <th className="py-2">Boca (Barra)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr><td className="py-2.5 font-bold text-white">38</td><td>80 cm</td><td>34 cm</td><td>108 cm</td><td>32 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">40</td><td>84 cm</td><td>35 cm</td><td>110 cm</td><td>33 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">42</td><td>88 cm</td><td>36 cm</td><td>112 cm</td><td>34 cm</td></tr>
                  <tr><td className="py-2.5 font-bold text-white">44</td><td>92 cm</td><td>37 cm</td><td>114 cm</td><td>35 cm</td></tr>
                </tbody>
              </table>
              <p className="text-[11px] font-mono text-zinc-400 mt-4 leading-relaxed">
                * As medidas podem ter variação de até 1 a 2 cm devido ao processo manual de confecção e lavagem industrial destroyer.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
