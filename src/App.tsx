import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { MobileMenu } from './components/MobileMenu';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { TrackingModal } from './components/TrackingModal';
import { BottomBanner } from './components/BottomBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartProvider, useCart } from './context/CartContext';
import { SlidersHorizontal, CheckCircle } from 'lucide-react';

const MainContent: React.FC = () => {
  const { toastMessage, clearToast } = useCart();
  const [activeView, setActiveView] = useState<'home' | 'produtos' | 'contato'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name-asc'>('default');

  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, sortBy]);

  const categories = [
    { label: 'Todos', value: 'all', count: PRODUCTS.length },
    { label: 'Camisetas', value: 'Camisetas', count: PRODUCTS.filter((p) => p.category === 'Camisetas').length },
    { label: 'Moletons', value: 'Moletons', count: PRODUCTS.filter((p) => p.category === 'Moletons').length },
    { label: 'Calças', value: 'Calças', count: PRODUCTS.filter((p) => p.category === 'Calças').length },
    { label: 'Acessórios', value: 'Acessórios', count: PRODUCTS.filter((p) => p.category === 'Acessórios').length },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-4 py-2.5 rounded shadow-2xl flex items-center gap-2 text-xs font-mono font-semibold animate-in slide-in-from-top duration-300">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{toastMessage}</span>
          <button
            onClick={clearToast}
            className="ml-2 text-zinc-500 hover:text-black"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        currentCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (activeView === 'contato') setActiveView('produtos');
        }}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Views Router */}
      <main className="flex-1">
        {activeView === 'contato' ? (
          <ContactSection />
        ) : (
          <>
            {/* Hero Video (only on home) */}
            {activeView === 'home' && <HeroVideo />}

            {/* Catalog Section */}
            <section id="catalogo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
              {/* Category filters & Sorter header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                        selectedCategory === cat.value
                          ? 'bg-white text-black font-semibold border-white'
                          : 'bg-black text-zinc-400 border-white/15 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>

                {/* Sorter Selector */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-end md:self-auto">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ordenar por:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-black border border-white/20 text-white text-xs font-mono px-2.5 py-1.5 focus:outline-none focus:border-white uppercase"
                  >
                    <option value="default">Destaques</option>
                    <option value="price-asc">Menor Preço</option>
                    <option value="price-desc">Maior Preço</option>
                    <option value="name-asc">Nome (A - Z)</option>
                  </select>
                </div>
              </div>

              {/* Products Grid (Identical layout to nosoul4life cali theme: 2 cols on mobile, 3 or 4 cols desktop) */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8 sm:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenQuickView={(p) => setSelectedProduct(p)}
                  />
                ))}
              </div>

              {/* If no products in category */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-zinc-500 font-mono text-sm">
                  Nenhum produto encontrado nesta categoria no momento.
                </div>
              )}
            </section>

            {/* Bottom Slider Banner */}
            <BottomBanner />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenAuth={() => setAuthOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveView('produtos');
          const el = document.getElementById('catalogo-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        setActiveView={setActiveView}
      />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      <CartDrawer
        onOpenCheckout={() => setCheckoutOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        setActiveView={setActiveView}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
      />

      <TrackingModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}

export default App;
