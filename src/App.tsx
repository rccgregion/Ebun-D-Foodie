import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { CustomPlatterBuilder } from './components/CustomPlatterBuilder';
import { SmokyJollofSpotlight } from './components/SmokyJollofSpotlight';
import { TikTokShowcase } from './components/TikTokShowcase';
import { CateringEstimator } from './components/CateringEstimator';
import { LagosDeliveryInfo } from './components/LagosDeliveryInfo';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CartItem, MenuItem } from './types';
import { MENU_ITEMS } from './data/menuData';

export default function App() {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ebun_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ebun_cart', JSON.stringify(cartItems));
    } catch {
      // localStorage may fail in some sandboxes
    }
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          priceNgn: item.priceNgn,
          priceUsd: item.priceUsd,
          quantity: 1,
          image: item.image,
          customDetails: `${item.pieces} · ${item.category.toUpperCase()}`
        }
      ];
    });
    setIsCartOpen(true);
  };

  const handleAddCustomPlatter = (customItem: CartItem) => {
    setCartItems(prev => [...prev, customItem]);
    setIsCartOpen(true);
  };

  const handleOrderVideoItem = (videoTitle: string) => {
    // Pick the most relevant combo
    let matchedItem = MENU_ITEMS[0];
    if (videoTitle.toLowerCase().includes('jollof')) {
      matchedItem = MENU_ITEMS.find(i => i.id === 'smoky-party-jollof') || MENU_ITEMS[2];
    } else if (videoTitle.toLowerCase().includes('100-piece')) {
      matchedItem = MENU_ITEMS.find(i => i.id === 'grand-event-mega-box') || MENU_ITEMS[4];
    } else if (videoTitle.toLowerCase().includes('puff-puff')) {
      matchedItem = MENU_ITEMS.find(i => i.id === 'puff-puff-golden-bucket') || MENU_ITEMS[6];
    } else if (videoTitle.toLowerCase().includes('catering')) {
      matchedItem = MENU_ITEMS.find(i => i.id === 'deluxe-chops-platter') || MENU_ITEMS[1];
    }

    handleAddToCart(matchedItem);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Top Bar Contract */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => (prev === 'NGN' ? 'USD' : 'NGN'))}
      />

      <main className="flex-1">
        {/* Cinematic Lusion Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenBuilder={() => scrollToSection('custom-builder')}
        />

        {/* Signature Menu Grid */}
        <SignatureMenu
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* Custom Platter & Box Builder */}
        <CustomPlatterBuilder
          onAddCustomPlatter={handleAddCustomPlatter}
          currency={currency}
        />

        {/* Firewood Smoky Party Jollof Spotlight */}
        <SmokyJollofSpotlight
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* TikTok Showcase & Reels (@ebundfoodie1) */}
        <TikTokShowcase
          onOrderVideoItem={handleOrderVideoItem}
        />

        {/* Event Catering Estimator */}
        <CateringEstimator
          currency={currency}
        />

        {/* Lagos Delivery Info & Zones */}
        <LagosDeliveryInfo
          currency={currency}
        />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
      />

      {/* Architectural Footer */}
      <Footer />
    </div>
  );
}
