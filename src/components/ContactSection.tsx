import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-black py-12 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            Fale com a cia4w
          </span>
          <h1 className="text-3xl md:text-4xl font-heading text-white">
            Contato
          </h1>
          <p className="font-mono text-xs text-zinc-400 max-w-lg mx-auto">
            Dúvidas sobre pedidos, tabela de medidas ou status de produção? Envie uma mensagem diretamente para nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 pr-0 md:pr-6 font-mono text-xs">
            <div className="space-y-2">
              <h3 className="text-white uppercase tracking-wider font-bold">
                Atendimento
              </h3>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Segunda a Sexta, das 10h às 19h (Horário de Brasília).
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-500 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase">E-mail</span>
                  <a href="mailto:contato@cia4w.com.br" className="hover:text-white transition-colors">
                    contato@cia4w.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-zinc-300">
                <Phone className="w-4 h-4 text-zinc-500 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase">WhatsApp</span>
                  <span>(11) 98765-4321</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-500 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase">Origem</span>
                  <span>São Paulo - SP, Brasil</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-zinc-950 border border-white/10 space-y-1.5 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Prazos de Envio</span>
              </div>
              <p>
                As peças são produzidas sob demanda no prazo de 15 a 20 dias úteis, para máxima exclusividade e acabamento.
              </p>
            </div>
          </div>

          {/* Contact Form matching Nuvemshop fields */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-zinc-950 border border-white/20 p-8 text-center space-y-4 animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                <h3 className="text-xl font-heading text-white">Mensagem Enviada!</h3>
                <p className="font-mono text-xs text-zinc-400 max-w-sm mx-auto">
                  Agradecemos o contato. Nossa equipe responderá no e-mail informado em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-zinc-400 uppercase tracking-wider mb-1.5 text-[11px]">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-zinc-950 border border-white/20 px-3.5 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 uppercase tracking-wider mb-1.5 text-[11px]">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-zinc-950 border border-white/20 px-3.5 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 uppercase tracking-wider mb-1.5 text-[11px]">
                      Telefone (opcional)
                    </label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 90000-0000"
                      className="w-full bg-zinc-950 border border-white/20 px-3.5 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase tracking-wider mb-1.5 text-[11px]">
                    Mensagem *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full bg-zinc-950 border border-white/20 px-3.5 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
