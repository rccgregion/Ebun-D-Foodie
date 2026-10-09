import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { VENDOR_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[200] bg-white border-b border-[#E0E0E0] transition-colors">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-[-0.5px] text-[#000000] uppercase font-['Plus_Jakarta_Sans',sans-serif] hover:text-[#2B2E3A] transition-colors"
          >
            {VENDOR_INFO.name}
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium tracking-[0.5px] uppercase text-[#000000]">
            <a href="#menu" className="hover:text-[#2B2E3A] transition-colors">
              Menu
            </a>
            <a href="#custom-builder" className="hover:text-[#2B2E3A] transition-colors">
              Platter Builder
            </a>
            <a href="#jollof" className="hover:text-[#2B2E3A] transition-colors">
              Party Jollof
            </a>
            <a href="#tiktok-showcase" className="hover:text-[#2B2E3A] transition-colors">
              TikTok Reels
            </a>
            <a href="#catering" className="hover:text-[#2B2E3A] transition-colors">
              Catering
            </a>
            <a href="#delivery" className="hover:text-[#2B2E3A] transition-colors">
              Lagos Delivery
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency toggle */}
            <button
              onClick={onToggleCurrency}
              type="button"
              className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2B2E3A] border border-[#E0E0E0] rounded-full hover:bg-[#E4E6EF] transition-colors"
              title="Toggle Currency"
            >
              {currency}
            </button>

            {/* Direct WhatsApp Call/Chat */}
            <a
              href={VENDOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#595959] hover:text-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B2E3A]" />
              <span>{VENDOR_INFO.phone}</span>
            </a>

            {/* Shopping Bag Button with count badge */}
            <button
              onClick={onOpenCart}
              type="button"
              aria-label="View Shopping Bag"
              className="relative p-2.5 text-[#000000] hover:text-[#2B2E3A] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2B2E3A] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Pill Button */}
            <a
              href={VENDOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-pill-primary text-xs"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-black hover:text-[#2B2E3A] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121416] text-white px-6 py-8 border-b border-[#353536] animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-wider font-medium">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                Signature Menu
              </a>
              <a
                href="#custom-builder"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                Custom Platter Builder
              </a>
              <a
                href="#jollof"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                Smoky Party Jollof
              </a>
              <a
                href="#tiktok-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                TikTok Video Reels ({VENDOR_INFO.tiktokHandle})
              </a>
              <a
                href="#catering"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                Event Catering Quote
              </a>
              <a
                href="#delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#29292A] hover:text-[#E4E6EF]"
              >
                Lagos Delivery Axis (LASU / Ojo)
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={VENDOR_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary w-full text-center justify-center bg-white text-black hover:bg-[#E4E6EF]"
                >
                  Direct WhatsApp Order ({VENDOR_INFO.phone})
                </a>
                <a
                  href={VENDOR_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-filled w-full text-center justify-center bg-[#2B2E3A] text-white"
                >
                  View on TikTok @ebundfoodie1
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
