import React, { useState } from 'react';
import { Product } from '../data/products';
import { Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || primaryImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Default to first fit and standard size M or open quick view if multiple options
    if (product.fits.length > 1 || product.sizes.length > 1) {
      onOpenQuickView(product);
    } else {
      addItem(product, product.fits[0] || 'Padrão', product.sizes[0] || 'M');
    }
  };

  return (
    <div
      onClick={() => onOpenQuickView(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Image Container with 4:5 ratio (125% padding) */}
      <div className="relative w-full pb-[125%] overflow-hidden bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-colors">
        {/* Neutral dark backdrop while the photo loads */}
        {!imageLoaded && <div className="absolute inset-0 bg-black" />}

        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
            isHovered && secondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary Image (Hover Effect) */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={`${product.name} - Detalhe`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badge && (
            <span className="bg-white text-black text-[10px] uppercase font-mono font-bold px-2 py-0.5 tracking-wider shadow-md">
              {product.badge}
            </span>
          )}
          {product.category === 'Calças' && (
            <span className="bg-zinc-900/90 text-white border border-white/20 text-[9px] uppercase font-mono px-1.5 py-0.5 tracking-wider backdrop-blur-sm">
              Baggy Exagerada
            </span>
          )}
        </div>

        {/* Quick View and Cart Floating Action Buttons on Hover */}
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2 px-3 bg-black/90 hover:bg-white hover:text-black text-white text-[11px] font-mono uppercase tracking-wider border border-white/30 backdrop-blur-md transition-colors flex items-center justify-center gap-1.5"
            title="Escolher Opções / Comprar"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Comprar</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuickView(product);
            }}
            className="p-2 bg-black/90 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur-md transition-colors"
            title="Ver detalhes da peça"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3 pb-2 flex flex-col items-center text-center">
        {/* Title in original stylized bracket format */}
        <h3 className="text-sm md:text-base font-normal tracking-wide text-zinc-100 group-hover:text-white transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Color / Fit hint if applicable */}
        {product.color && product.color !== 'Preta' && (
          <span className="text-[11px] text-zinc-400 font-mono tracking-wider mt-0.5">
            {product.color}
          </span>
        )}

        {/* Price */}
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-sm md:text-base font-mono font-medium text-white">
            R${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* Installments Note */}
        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
          ou {product.installments}
        </p>
      </div>
    </div>
  );
};
