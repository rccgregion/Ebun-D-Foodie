import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { LAGOS_ZONES, VENDOR_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  currency: 'NGN' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryZone, setDeliveryZone] = useState(LAGOS_ZONES[0].name);
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const selectedZone = LAGOS_ZONES.find(z => z.name === deliveryZone) || LAGOS_ZONES[0];

  const subtotalNgn = cartItems.reduce((sum, item) => sum + (item.priceNgn * item.quantity), 0);
  const deliveryFeeNgn = cartItems.length > 0 ? selectedZone.feeNgn : 0;
  const totalNgn = subtotalNgn + deliveryFeeNgn;
  const totalUsd = totalNgn / 1000;

  const formatPrice = (ngn: number, usd: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${usd.toFixed(2)}`;
  };

  const generateWhatsAppMessage = () => {
    const orderId = `EBUN-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemsList = cartItems
      .map((item, idx) => {
        let details = `${idx + 1}. ${item.quantity}x *${item.name}* (${formatPrice(item.priceNgn, item.priceUsd)} each)`;
        if (item.customDetails) {
          details += `\n   _Details: ${item.customDetails}_`;
        }
        return details;
      })
      .join('\n');

    const message =
      `*NEW ORDER - EBUN D FOODIE* 📦\n` +
      `*Order ID:* ${orderId}\n\n` +
      `*Customer Details:*\n` +
      `• Name: ${customerName || 'Customer'}\n` +
      `• Phone: ${customerPhone || 'Not provided'}\n` +
      `• Delivery Zone: ${selectedZone.name}\n` +
      `• Address/Landmark: ${address || 'To be specified'}\n` +
      `• Target Delivery: ${deliveryTime || 'As soon as possible'}\n` +
      (orderNotes ? `• Notes: ${orderNotes}\n` : '') +
      `\n*Order Manifest:*\n` +
      `${itemsList}\n\n` +
      `*Subtotal:* ${formatPrice(subtotalNgn, subtotalNgn / 1000)}\n` +
      `*Delivery Fee:* ${formatPrice(deliveryFeeNgn, deliveryFeeNgn / 1000)} (${selectedZone.name})\n` +
      `*TOTAL:* ${formatPrice(totalNgn, totalUsd)}\n\n` +
      `Please confirm payment details & dispatch time!`;

    setConfirmedOrderId(orderId);
    return `https://wa.me/2349077230897?text=${encodeURIComponent(message)}`;
  };

  const handleCheckoutWhatsApp = () => {
    const url = generateWhatsAppMessage();
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="bg-[#FFFFFF] text-black w-full max-w-lg h-full overflow-y-auto flex flex-col justify-between border-l border-[#2B2E3A] animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#595959] font-medium">
              Ebun D Foodie Bag
            </div>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black">
              {isSuccess ? 'Order Submitted' : `Your Selection (${cartItems.length})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-black hover:text-[#595959]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        {isSuccess ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-[#595959] font-semibold mb-1">
                Receipt Reference: {confirmedOrderId}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-3">
                Order Dispatched to WhatsApp!
              </h3>
              <p className="text-sm text-[#595959] max-w-sm mx-auto leading-relaxed">
                Your order was forwarded directly to Ebun D Foodie ({VENDOR_INFO.phone}).
                Our kitchen is preparing your fresh small chops and packaging it for delivery.
              </p>
            </div>

            <div className="bg-[#121416] text-white p-5 w-full text-left border border-[#353536] text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#9E9E9F]">Total Amount:</span>
                <span className="font-['Space_Grotesk',sans-serif] font-bold text-white tabular-nums">
                  {formatPrice(totalNgn, totalUsd)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9E9F]">Delivery Axis:</span>
                <span className="text-white">{selectedZone.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E9E9F]">Estimated Prep:</span>
                <span className="text-white">30 - 45 mins</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              type="button"
              className="btn-pill-primary w-full text-xs font-semibold py-3"
            >
              Start New Order
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="text-sm text-[#595959] uppercase tracking-wider">
              Your bag is currently empty.
            </div>
            <p className="text-xs text-[#9E9E9F] max-w-xs">
              Explore our signature small chops, smoky party jollof trays, or build a custom box!
            </p>
            <button
              onClick={onClose}
              type="button"
              className="btn-pill-primary text-xs mt-2"
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-8 flex-1">
            {/* Items List */}
            <div className="space-y-4 divide-y divide-[#E0E0E0]">
              {cartItems.map(item => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-tight text-black">
                      {item.name}
                    </h4>
                    {item.customDetails && (
                      <p className="text-[11px] text-[#595959] mt-1 leading-snug">
                        {item.customDetails}
                      </p>
                    )}
                    <div className="text-xs font-['Space_Grotesk',sans-serif] font-semibold text-[#2B2E3A] tabular-nums mt-1.5">
                      {formatPrice(item.priceNgn, item.priceUsd)} each
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 border border-[#E0E0E0] px-2 py-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        type="button"
                        className="text-[#595959] hover:text-black"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-['Space_Grotesk',sans-serif] font-bold tabular-nums w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        type="button"
                        className="text-[#595959] hover:text-black"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      type="button"
                      className="text-[11px] text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Details Form */}
            <div className="pt-6 border-t border-[#E0E0E0] space-y-4">
              <div className="text-xs uppercase tracking-wider font-bold text-black">
                Delivery Details
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="e.g. Adeola Johnson"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  placeholder="e.g. 08012345678"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Lagos Delivery Zone
                </label>
                <select
                  value={deliveryZone}
                  onChange={e => setDeliveryZone(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                >
                  {LAGOS_ZONES.map(z => (
                    <option key={z.name} value={z.name}>
                      {z.name} (+{formatPrice(z.feeNgn, z.feeNgn / 1000)})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Street Address / Landmark / LASU Gate
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="e.g. LASU Main Gate, Ojo / Block B Flat 4 Festac"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Preferred Delivery Time
                </label>
                <input
                  type="text"
                  value={deliveryTime}
                  onChange={e => setDeliveryTime(e.target.value)}
                  placeholder="e.g. Today 2:00 PM / Tomorrow Lunch"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#595959] mb-1">
                  Special Kitchen Notes (Spice level, Extra sauce)
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={e => setOrderNotes(e.target.value)}
                  placeholder="e.g. Mild pepper on samosas, separate packaging"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-xs rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Drawer Sticky Footer */}
        {!isSuccess && cartItems.length > 0 && (
          <div className="p-6 border-t border-[#E0E0E0] bg-[#FFFFFF] sticky bottom-0 space-y-4">
            <div className="space-y-1.5 text-xs text-[#595959]">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-['Space_Grotesk',sans-serif] text-black font-semibold tabular-nums">
                  {formatPrice(subtotalNgn, subtotalNgn / 1000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee ({selectedZone.name})</span>
                <span className="font-['Space_Grotesk',sans-serif] text-black font-semibold tabular-nums">
                  {formatPrice(deliveryFeeNgn, deliveryFeeNgn / 1000)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-black pt-2 border-t border-[#E0E0E0]">
                <span>Total Amount:</span>
                <span className="font-['Space_Grotesk',sans-serif] text-xl tabular-nums text-[#2B2E3A]">
                  {formatPrice(totalNgn, totalUsd)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              type="button"
              className="btn-pill-primary w-full text-xs font-semibold py-3 justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order to WhatsApp (+234 907 723 0897)</span>
            </button>

            <div className="text-[11px] text-[#595959] text-center">
              Direct hotline: {VENDOR_INFO.phone} · Instant Order Confirmation
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
