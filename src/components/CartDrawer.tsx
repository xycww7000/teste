import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, Tag, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    total,
    coupon,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    itemCount,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ text: string; success: boolean } | null>(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ text: res.message, success: res.success });
    if (res.success) setCouponInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-white/15 text-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-white stroke-[1.5]" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-white">
                Carrinho ({itemCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-zinc-500 space-y-4">
                <ShoppingBag className="w-12 h-12 stroke-[1] text-zinc-600" />
                <div className="space-y-1">
                  <p className="font-mono text-sm text-zinc-300">Seu carrinho está vazio</p>
                  <p className="text-xs font-mono text-zinc-500">
                    Explore os produtos disponíveis no drop atual.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="mt-4 px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors"
                >
                  Ver Produtos
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 bg-black p-3 border border-white/10 group transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-mono font-medium text-white truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-500 hover:text-rose-400 transition-colors"
                          aria-label="Remover item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-zinc-400">
                        {item.fit && <span>{item.fit}</span>}
                        {item.fit && item.size && <span>•</span>}
                        {item.size && (
                          <span className="bg-zinc-800 text-zinc-200 px-1.5 py-0.2 rounded text-[10px]">
                            {item.size}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-white/20 bg-zinc-950">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 text-zinc-400 hover:text-white"
                          aria-label="Diminuir"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 text-zinc-400 hover:text-white"
                          aria-label="Aumentar"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono text-xs font-semibold text-white">
                        R${(item.price * item.quantity).toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-zinc-950 space-y-4">
              {/* Coupon Form */}
              <div>
                {coupon ? (
                  <div className="flex items-center justify-between bg-zinc-900 border border-white/20 px-3 py-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{coupon} (-{couponDiscount * 100}%)</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-zinc-400 hover:text-white underline text-[10px]"
                    >
                      Remover
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Cupom (ex: CIA4W10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-black border border-white/20 px-3 py-1.5 text-xs font-mono uppercase text-white focus:outline-none focus:border-white placeholder:text-zinc-600"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-white hover:text-black text-white text-xs font-mono uppercase tracking-wider border border-white/20 transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                )}

                {couponMessage && (
                  <p
                    className={`text-[10px] font-mono mt-1 ${
                      couponMessage.success ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}
              </div>

              {/* Price Calculations */}
              <div className="space-y-1.5 font-mono text-xs pt-2 border-t border-white/10">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto ({couponDiscount * 100}%)</span>
                    <span>
                      - R${' '}
                      {(subtotal * couponDiscount).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <p className="text-[10px] text-zinc-400 text-right">
                  ou em até 3x de R${' '}
                  {(total / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                </p>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => {
                  closeCart();
                  onOpenCheckout();
                }}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-widest border border-white transition-all active:scale-98 flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Finalizar Compra</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] font-mono text-zinc-500 pt-1">
                Pagamento via PIX, cartão ou boleto.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
