import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Check, QrCode, CreditCard, Barcode, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, total, clearCart } = useCart();

  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: 'São Paulo',
    state: 'SP',
  });

  if (!isOpen) return null;

  const pixTotal = paymentMethod === 'pix' ? total * 0.95 : total;
  const pixKey = "00020126580014br.gov.bcb.pix0136cia4w-pay-gateway-9831420265204000053039865802BR5905CIA4W6009SAO PAULO62070503***6304E8A9";

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleFinalizeOrder = () => {
    const randomId = `CIA4W-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
    setStep('success');
    clearCart();
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 text-white shadow-2xl p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl font-bold tracking-wider">cia4w</span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Checkout
            </span>
          </div>
          {step !== 'success' && (
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
              aria-label="Fechar checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* STEP 1: CUSTOMER & ADDRESS INFO */}
        {step === 'info' && (
          <form onSubmit={handleInfoSubmit} className="space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 pb-1 border-b border-white/10">
                1. Dados Pessoais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">E-mail para Rastreio *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">CPF *</label>
                  <input
                    type="text"
                    required
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    placeholder="000.000.000-00"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 90000-0000"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 pb-1 border-b border-white/10">
                2. Endereço de Entrega
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 mb-1">CEP *</label>
                  <input
                    type="text"
                    required
                    value={formData.cep}
                    onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                    placeholder="00000-000"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-zinc-400 mb-1">Rua / Logradouro *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Av. Paulista, etc."
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Número *</label>
                  <input
                    type="text"
                    required
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    placeholder="123"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Bairro *</label>
                  <input
                    type="text"
                    required
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    placeholder="Centro"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Complemento</label>
                  <input
                    type="text"
                    value={formData.complement}
                    onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                    placeholder="Apto 42"
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </div>

            {/* Order summary small banner */}
            <div className="bg-black border border-white/10 p-3 flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-400">{items.length} itens no pedido</span>
              <span className="text-white font-bold">
                Total: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-mono uppercase text-zinc-400 hover:text-white"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="px-7 py-3 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <span>Ir para Pagamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PAYMENT METHOD */}
        {step === 'payment' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 pb-1 border-b border-white/10">
                Selecione o Meio de Pagamento
              </h3>

              {/* Payment selector buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3.5 border text-center transition-all flex flex-col items-center gap-2 ${
                    paymentMethod === 'pix'
                      ? 'border-white bg-white text-black font-bold'
                      : 'border-white/15 bg-black text-zinc-300 hover:border-white/40'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase">PIX</span>
                  <span className="text-[10px] font-mono tracking-wider opacity-80">5% OFF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-3.5 border text-center transition-all flex flex-col items-center gap-2 ${
                    paymentMethod === 'credit'
                      ? 'border-white bg-white text-black font-bold'
                      : 'border-white/15 bg-black text-zinc-300 hover:border-white/40'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase">Cartão</span>
                  <span className="text-[10px] font-mono tracking-wider opacity-80">Até 3x s/ juros</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3.5 border text-center transition-all flex flex-col items-center gap-2 ${
                    paymentMethod === 'boleto'
                      ? 'border-white bg-white text-black font-bold'
                      : 'border-white/15 bg-black text-zinc-300 hover:border-white/40'
                  }`}
                >
                  <Barcode className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase">Boleto</span>
                  <span className="text-[10px] font-mono tracking-wider opacity-80">Banco Central</span>
                </button>
              </div>
            </div>

            {/* Payment Details Box */}
            <div className="border border-white/15 p-5 bg-black">
              {paymentMethod === 'pix' && (
                <div className="space-y-4 text-center">
                  <div className="flex flex-col items-center justify-center p-4 bg-zinc-950 border border-white/10 max-w-xs mx-auto">
                    {/* Simulated Pix QR Code Box */}
                    <div className="w-44 h-44 bg-white p-2 flex items-center justify-center mb-3">
                      <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-white text-[10px] font-mono p-2 text-center">
                        <QrCode className="w-16 h-16 text-white mb-2" />
                        <span>PIX INSTANTÂNEO</span>
                        <span className="text-[9px] text-zinc-400">cia4w pay gateway</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      Valor com 5% de desconto: R$ {pixTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <p className="text-xs font-mono text-zinc-400">
                      Ou utilize o código Pix Copia e Cola:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={pixKey}
                        className="flex-1 bg-zinc-900 border border-white/20 px-3 py-1.5 text-[11px] font-mono text-zinc-300 truncate"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'credit' && (
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <label className="block text-zinc-400 mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-zinc-950 border border-white/20 px-3 py-2 text-white focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        className="w-full bg-zinc-950 border border-white/20 px-3 py-2 text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-zinc-950 border border-white/20 px-3 py-2 text-white focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Parcelamento</label>
                    <select className="w-full bg-zinc-950 border border-white/20 px-3 py-2 text-white focus:outline-none">
                      <option>1x de R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                      <option>2x de R$ {(total / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                      <option>3x de R$ {(total / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                    </select>
                  </div>
                </div>
              )}

              {paymentMethod === 'boleto' && (
                <div className="space-y-3 text-center py-4 text-xs font-mono">
                  <Barcode className="w-12 h-12 text-zinc-400 mx-auto" />
                  <p className="text-zinc-300">
                    O boleto bancário será gerado após a confirmação. Vencimento em 3 dias úteis.
                  </p>
                  <p className="text-zinc-400 text-[11px]">
                    Total a pagar: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('info')}
                className="px-4 py-2 text-xs font-mono uppercase text-zinc-400 hover:text-white"
              >
                Voltar aos dados
              </button>

              <button
                onClick={handleFinalizeOrder}
                className="px-8 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-xl"
              >
                <span>Confirmar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS CONFIRMATION */}
        {step === 'success' && (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Pedido Realizado com Sucesso
              </span>
              <h2 className="text-2xl font-heading text-white">
                Obrigado pela sua compra!
              </h2>
              <p className="font-mono text-sm text-zinc-400">
                Número do pedido: <strong className="text-white font-mono">{orderId}</strong>
              </p>
            </div>

            <div className="bg-black border border-white/15 p-4 max-w-md mx-auto text-xs font-mono text-zinc-400 text-left space-y-2">
              <p>• Um e-mail de confirmação foi enviado para <strong>{formData.email || 'seu e-mail'}</strong>.</p>
              <p>• Você receberá as atualizações de produção e o código de rastreamento dos Correios.</p>
              <p>• Prazo de produção: 15 a 20 dias úteis conforme especificado.</p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
            >
              <span>Voltar à Loja</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
