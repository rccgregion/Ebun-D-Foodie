import React from 'react';
import { Flame, CheckCircle2, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { VENDOR_INFO } from '../data/menuData';

interface SmokyJollofSpotlightProps {
  onAddToCart: (item: MenuItem) => void;
  currency: 'NGN' | 'USD';
}

export const SmokyJollofSpotlight: React.FC<SmokyJollofSpotlightProps> = ({
  onAddToCart,
  currency
}) => {
  const jollofItem: MenuItem = {
    id: 'smoky-party-jollof',
    name: 'Smoky Lagos Party Jollof Tray',
    category: 'jollof',
    priceNgn: 18000,
    priceUsd: 18.00,
    description: 'Authentic Lagos firewood smoky party jollof rice made with rich scotch bonnet and bell pepper reduction, sweet fried dodo (plantain) and deep-seasoned grilled peppered chicken.',
    pieces: 'Serves 4 - 6 People',
    image: '/src/assets/images/product_party_jollof_1791148083205.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['Smoky Firewood Jollof', 'Sweet Fried Dodo', '4x Jumbo Peppered Chicken Quarters', 'Spiced Coleslaw', 'Shito Dip']
  };

  const formatPrice = (ngn: number, usd: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${usd.toFixed(2)}`;
  };

  const getWhatsAppJollofUrl = () => {
    const text = encodeURIComponent(
      `Hello Ebun D Foodie! I would like to order the Smoky Party Jollof Tray (${formatPrice(18000, 18.00)}).\n` +
      `Delivery Location:\n` +
      `Delivery Date & Time:`
    );
    return `https://wa.me/2349077230897?text=${text}`;
  };

  return (
    <section id="jollof" className="w-full bg-[#FFFFFF] py-[72px] text-[#000000] border-b border-[#E0E0E0]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-[#121416] overflow-hidden border border-[#E0E0E0]">
              <img
                src="/src/assets/images/product_party_jollof_1791148083205.jpg"
                alt="Ebun D Foodie Authentic Firewood Smoky Party Jollof Rice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Trust Indicator (color-blocked per design.md) */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#121416] text-white p-5 border border-[#353536] max-w-xs shadow-lg hidden sm:block">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4E6EF] font-bold mb-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>The Firewood Secret</span>
              </div>
              <p className="text-xs text-[#9E9E9F] leading-snug">
                Cooked with seasoned hardwood embers for that unmistakable charred bottom-pot party aroma.
              </p>
            </div>
          </div>

          {/* Editorial Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#595959] font-medium">
              Signature Culinary Craft
            </div>

            <h2 className="font-heading-md uppercase text-[#000000] tracking-tight leading-tight">
              That Authentic Firewood Smoky Party Jollof
            </h2>

            <p className="font-body-lg text-[#595959] leading-relaxed">
              No Nigerian party is complete without that unmistakable reddish-orange grain, infused
              with smoked paprika, roasted tatashe (bell peppers), ripe tomatoes, and sweet onions.
              At Ebun D Foodie, we simmer every grain to perfection, locking in deep savory warmth.
            </p>

            {/* Key Quality Pillars (unboxed clean text per zero-pill rule) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B2E3A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold uppercase tracking-tight text-black block">
                    Rich Tatashe & Ata Rodo Emulsion
                  </span>
                  <span className="text-xs text-[#595959]">
                    Fried in pure vegetable oil seasoned with fresh bay leaves, thyme, and bone marrow stock.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B2E3A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold uppercase tracking-tight text-black block">
                    Caramelized Dodo & Jumbo Peppered Chicken
                  </span>
                  <span className="text-xs text-[#595959]">
                    Served with ripe sweet fried plantain and fork-tender pepper-glazed chicken quarters.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B2E3A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold uppercase tracking-tight text-black block">
                    Party Foil Trays & Chafing Refills
                  </span>
                  <span className="text-xs text-[#595959]">
                    Packed in heat-retaining food containers that stay steaming hot for up to 3 hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-6 border-t border-[#E0E0E0] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#595959]">
                  Standard Party Tray (Serves 4 - 6)
                </div>
                <div className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black tabular-nums">
                  {formatPrice(18000, 18.00)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onAddToCart(jollofItem)}
                  type="button"
                  className="btn-pill-primary text-xs"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Add Jollof Tray</span>
                </button>

                <a
                  href={getWhatsAppJollofUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-filled text-xs"
                >
                  <span>WhatsApp Order</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
