import React, { useState } from 'react';
import { Plus, Check, Eye, Flame, Sparkles, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, VENDOR_INFO } from '../data/menuData';

interface SignatureMenuProps {
  onAddToCart: (item: MenuItem) => void;
  currency: 'NGN' | 'USD';
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onAddToCart, currency }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'chops' | 'jollof' | 'platters' | 'combos'>('all');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemMap(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [item.id]: false }));
    }, 1400);
  };

  const formatPrice = (ngn: number, usd: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${usd.toFixed(2)}`;
  };

  const getQuickWhatsAppUrl = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hello Ebun D Foodie! I want to order the "${item.name}" (${formatPrice(item.priceNgn, item.priceUsd)}).\n` +
      `Delivery Location:\n` +
      `Expected Time:`
    );
    return `https://wa.me/2349077230897?text=${text}`;
  };

  return (
    <section id="menu" className="w-full bg-[#FFFFFF] py-[72px] text-[#000000] border-b border-[#E0E0E0]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#595959] font-medium mb-3">
              Lagos Artisanal Finger Foods & Trays
            </div>
            <h2 className="font-heading-md uppercase text-[#000000] tracking-tight">
              Curated Menu & Chops Platters
            </h2>
          </div>

          {/* Interactive Filter Tabs / Segmented Controls per Constitution */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E4E6EF] rounded-full self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#2B2E3A] text-white shadow-sm'
                  : 'text-[#000000] hover:text-[#2B2E3A]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveCategory('chops')}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === 'chops'
                  ? 'bg-[#2B2E3A] text-white shadow-sm'
                  : 'text-[#000000] hover:text-[#2B2E3A]'
              }`}
            >
              Small Chops
            </button>
            <button
              onClick={() => setActiveCategory('jollof')}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === 'jollof'
                  ? 'bg-[#2B2E3A] text-white shadow-sm'
                  : 'text-[#000000] hover:text-[#2B2E3A]'
              }`}
            >
              Party Jollof
            </button>
            <button
              onClick={() => setActiveCategory('platters')}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === 'platters'
                  ? 'bg-[#2B2E3A] text-white shadow-sm'
                  : 'text-[#000000] hover:text-[#2B2E3A]'
              }`}
            >
              Mega Platters
            </button>
            <button
              onClick={() => setActiveCategory('combos')}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === 'combos'
                  ? 'bg-[#2B2E3A] text-white shadow-sm'
                  : 'text-[#000000] hover:text-[#2B2E3A]'
              }`}
            >
              Combos & Bowls
            </button>
          </div>
        </div>

        {/* 3-Column Product Grid per Ecommerce Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group flex flex-col bg-white border border-[#E0E0E0] rounded-none overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#2B2E3A]"
            >
              {/* Product Image slot with fallback container */}
              <div className="relative aspect-[4/3] bg-[#121416] overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(item)}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container per zero-broken-image policy
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback styling placeholder if image fails */}
                <div className="absolute inset-0 bg-[#121416] -z-10 flex items-center justify-center p-6 text-center text-[#E4E6EF]">
                  <span className="text-sm font-medium">{item.name}</span>
                </div>

                {/* Subtle text label if popular (Zero-pill compliant) */}
                {item.popular && (
                  <span className="absolute top-3 left-3 bg-[#2B2E3A] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
                    Signature Favorite
                  </span>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(item);
                  }}
                  type="button"
                  aria-label="View product details"
                  className="absolute bottom-3 right-3 bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:bg-white"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Unboxed metadata line per zero-pill rule */}
                <div className="flex items-center justify-between text-xs text-[#595959] uppercase tracking-wider mb-2 font-medium">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.pieces}</span>
                  {item.spicyLevel && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-[#2B2E3A]">
                        <Flame className="w-3 h-3 text-[#2B2E3A]" />
                        {item.spicyLevel}
                      </span>
                    </>
                  )}
                </div>

                <h3
                  onClick={() => setSelectedProduct(item)}
                  className="text-lg font-bold text-[#000000] uppercase tracking-tight mb-2 cursor-pointer hover:text-[#2B2E3A] transition-colors leading-snug"
                >
                  {item.name}
                </h3>

                <p className="text-sm text-[#595959] line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Key ingredients preview */}
                <div className="text-[12px] text-[#2B2E3A] font-medium mb-6 pt-3 border-t border-[#E0E0E0] truncate">
                  {item.ingredients.slice(0, 3).join(' · ')}
                </div>

                {/* Price and Action Row */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-[#E0E0E0]">
                  <div className="font-['Space_Grotesk',sans-serif] text-xl font-bold tracking-tight text-[#000000] tabular-nums">
                    {formatPrice(item.priceNgn, item.priceUsd)}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={getQuickWhatsAppUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Direct order via WhatsApp"
                      className="p-2.5 text-[#595959] hover:text-[#000000] hover:bg-[#E4E6EF] rounded-full transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => handleAdd(item)}
                      type="button"
                      className={`btn-pill-primary text-xs font-semibold px-4 h-[40px] ${
                        addedItemMap[item.id] ? 'bg-emerald-700 text-white' : ''
                      }`}
                    >
                      {addedItemMap[item.id] ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 mr-1" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[1000] bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full border border-[#2B2E3A] p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              type="button"
              className="absolute top-4 right-4 text-black hover:text-[#595959] text-xl font-bold p-2"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="aspect-square bg-[#121416] overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#595959] font-medium mb-1">
                  {selectedProduct.category} · {selectedProduct.pieces}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                  {selectedProduct.name}
                </h3>
                <div className="text-2xl font-bold text-[#2B2E3A] font-['Space_Grotesk',sans-serif] tabular-nums mb-4">
                  {formatPrice(selectedProduct.priceNgn, selectedProduct.priceUsd)}
                </div>

                <p className="text-sm text-[#595959] mb-4 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider font-bold text-black mb-2">
                    Ingredients & Portions:
                  </div>
                  <ul className="text-xs text-[#595959] space-y-1">
                    {selectedProduct.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#2B2E3A] rounded-full" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      handleAdd(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    type="button"
                    className="btn-pill-primary w-full text-xs font-semibold py-3"
                  >
                    Add to Bag ({formatPrice(selectedProduct.priceNgn, selectedProduct.priceUsd)})
                  </button>
                  <a
                    href={getQuickWhatsAppUrl(selectedProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-filled w-full text-center text-xs font-semibold py-3"
                  >
                    Direct WhatsApp Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
