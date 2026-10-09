import React, { useState } from 'react';
import { Calendar, Users, ChefHat, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { VENDOR_INFO } from '../data/menuData';

interface CateringEstimatorProps {
  currency: 'NGN' | 'USD';
}

export const CateringEstimator: React.FC<CateringEstimatorProps> = ({ currency }) => {
  const [guests, setGuests] = useState(50);
  const [eventType, setEventType] = useState('Birthday Party');
  const [packageTier, setPackageTier] = useState<'silver' | 'gold' | 'platinum'>('gold');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('LASU Axis / Ojo, Lagos');
  const [liveFrying, setLiveFrying] = useState(true);
  const [customStickers, setCustomStickers] = useState(false);

  const tiers = {
    silver: {
      name: 'Silver Finger Foods',
      pricePerGuestNgn: 1500,
      pricePerGuestUsd: 1.50,
      description: '4 Small Chops per guest: 1 Samosa, 1 Spring Roll, 2 Puff-Puffs + Ebun dipping sauce.'
    },
    gold: {
      name: 'Gold Feast Platter',
      pricePerGuestNgn: 3000,
      pricePerGuestUsd: 3.00,
      description: '8 Small Chops per guest: 2 Samosas, 2 Spring Rolls, 3 Puff-Puffs, Peppered Beef Cube or Gizdodo + dual sauces.'
    },
    platinum: {
      name: 'Platinum Royal Feast',
      pricePerGuestNgn: 5500,
      pricePerGuestUsd: 5.50,
      description: 'Small Chops Buffet + Steaming Firewood Smoky Party Jollof, Sweet Dodo, and Jumbo Peppered Chicken.'
    }
  };

  const selectedTier = tiers[packageTier];
  const baseCostNgn = guests * selectedTier.pricePerGuestNgn;
  const liveFryingCostNgn = liveFrying ? 25000 : 0; // Flat chef & live fryer station fee
  const stickersCostNgn = customStickers ? guests * 200 : 0;
  const totalCostNgn = baseCostNgn + liveFryingCostNgn + stickersCostNgn;
  const totalCostUsd = totalCostNgn / 1000;

  const formatPrice = (ngn: number, usd: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${usd.toFixed(2)}`;
  };

  const getWhatsAppCateringUrl = () => {
    const text = encodeURIComponent(
      `Hello Ebun D Foodie! I would like to request an Event Catering Booking Quote:\n\n` +
      `Event Type: ${eventType}\n` +
      `Guest Count: ${guests} Guests\n` +
      `Package: ${selectedTier.name} (${formatPrice(selectedTier.pricePerGuestNgn, selectedTier.pricePerGuestUsd)} / guest)\n` +
      `Live Frying Station: ${liveFrying ? 'YES (Chef on-site)' : 'No (Pre-packed)'}\n` +
      `Branded Stickers: ${customStickers ? 'Yes' : 'No'}\n` +
      `Event Date: ${eventDate || 'To Be Confirmed'}\n` +
      `Venue / Area: ${eventLocation}\n` +
      `Estimated Budget: ${formatPrice(totalCostNgn, totalCostUsd)}\n\n` +
      `Please let me know your availability!`
    );
    return `https://wa.me/2349077230897?text=${text}`;
  };

  return (
    <section id="catering" className="w-full bg-[#FFFFFF] py-[72px] text-[#000000] border-b border-[#E0E0E0]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form & Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#595959] font-medium mb-3">
                Weddings · Birthdays · Corporate · LASU Events
              </div>
              <h2 className="font-heading-md uppercase text-black tracking-tight mb-4">
                Bespoke Event Catering Estimator
              </h2>
              <p className="text-sm text-[#595959] leading-relaxed">
                Whether you need 30 chops boxes for a department symposium or a live frying station
                serving 500 wedding guests in Lagos, we provide flawless culinary execution.
              </p>
            </div>

            {/* Guest Count Slider */}
            <div className="bg-[#FFFFFF] border border-[#E0E0E0] p-6">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="guest-slider" className="text-xs uppercase tracking-wider font-bold text-black flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#2B2E3A]" />
                  <span>Number of Guests:</span>
                </label>
                <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-[#2B2E3A] tabular-nums">
                  {guests} Guests
                </span>
              </div>
              <input
                id="guest-slider"
                type="range"
                min="20"
                max="500"
                step="10"
                value={guests}
                onChange={e => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-[#E4E6EF] rounded-lg appearance-none cursor-pointer accent-[#2B2E3A]"
              />
              <div className="flex justify-between text-[11px] text-[#595959] mt-2 uppercase">
                <span>20 Guests (Intimate)</span>
                <span>150 Guests (Medium)</span>
                <span>500+ Guests (Grand)</span>
              </div>
            </div>

            {/* Event Type */}
            <div className="bg-[#FFFFFF] border border-[#E0E0E0] p-6">
              <div className="text-xs uppercase tracking-wider font-bold text-black mb-3">
                Select Event Type
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  'Wedding Reception',
                  'Birthday Party',
                  'Corporate Luncheon',
                  'Campus Fest / LASU Event',
                  'Funeral / Thanksgiving',
                  'Cocktail / Social Gathering'
                ].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`p-3 text-xs uppercase font-medium text-left border transition-colors ${
                      eventType === type
                        ? 'border-[#2B2E3A] bg-[#2B2E3A] text-white'
                        : 'border-[#E0E0E0] text-[#595959] hover:border-black'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Package Tiers */}
            <div className="bg-[#FFFFFF] border border-[#E0E0E0] p-6">
              <div className="text-xs uppercase tracking-wider font-bold text-black mb-4">
                Choose Catering Tier
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['silver', 'gold', 'platinum'] as const).map(tierKey => {
                  const t = tiers[tierKey];
                  const isSelected = packageTier === tierKey;
                  return (
                    <div
                      key={tierKey}
                      onClick={() => setPackageTier(tierKey)}
                      className={`p-4 border cursor-pointer flex flex-col justify-between transition-all ${
                        isSelected
                          ? 'border-[#2B2E3A] bg-[#E4E6EF]/40 ring-1 ring-[#2B2E3A]'
                          : 'border-[#E0E0E0] hover:border-[#2B2E3A]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-tight text-black">
                            {t.name}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-[#2B2E3A]" />}
                        </div>
                        <div className="font-['Space_Grotesk',sans-serif] text-base font-bold text-[#2B2E3A] tabular-nums mb-2">
                          {formatPrice(t.pricePerGuestNgn, t.pricePerGuestUsd)} <span className="text-[11px] font-normal text-[#595959]">/ guest</span>
                        </div>
                        <p className="text-[11px] text-[#595959] leading-normal">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Event Date & Location Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FFFFFF] border border-[#E0E0E0] p-4">
                <label htmlFor="event-date" className="block text-xs uppercase tracking-wider font-bold text-black mb-2">
                  Event Date
                </label>
                <input
                  id="event-date"
                  type="date"
                  value={eventDate}
                  onChange={e => setEventDate(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-sm rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>

              <div className="bg-[#FFFFFF] border border-[#E0E0E0] p-4">
                <label htmlFor="event-location" className="block text-xs uppercase tracking-wider font-bold text-black mb-2">
                  Venue / Location in Lagos
                </label>
                <input
                  id="event-location"
                  type="text"
                  value={eventLocation}
                  onChange={e => setEventLocation(e.target.value)}
                  placeholder="e.g. LASU Main Campus, Festac, Ikeja"
                  className="w-full bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-2 text-sm rounded-[18px] focus:outline-none focus:border-[#2B2E3A]"
                />
              </div>
            </div>

            {/* Add-on toggles */}
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 border border-[#E0E0E0] cursor-pointer hover:bg-[#E4E6EF]/20">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={liveFrying}
                    onChange={e => setLiveFrying(e.target.checked)}
                    className="w-4 h-4 accent-[#2B2E3A]"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-tight text-black block">
                      Live Frying Station & Chef Setup
                    </span>
                    <span className="text-[11px] text-[#595959]">
                      Chops fried fresh in front of guests (+{formatPrice(25000, 25.00)} flat fee)
                    </span>
                  </div>
                </div>
                <ChefHat className="w-5 h-5 text-[#2B2E3A]" />
              </label>

              <label className="flex items-center justify-between p-4 border border-[#E0E0E0] cursor-pointer hover:bg-[#E4E6EF]/20">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={customStickers}
                    onChange={e => setCustomStickers(e.target.checked)}
                    className="w-4 h-4 accent-[#2B2E3A]"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-tight text-black block">
                      Branded Custom Packaging Stickers
                    </span>
                    <span className="text-[11px] text-[#595959]">
                      With celebrant photo, couple names, or corporate logo (+{formatPrice(200, 0.20)} / guest)
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Right Column: Sticky Quote Breakdown (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 bg-[#121416] text-white p-6 sm:p-8 border border-[#353536]">
            <div className="text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-semibold mb-2">
              Instant Catering Manifest
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
              {eventType}
            </h3>

            {/* Catering Visual */}
            <div className="aspect-[16/10] bg-black mb-6 overflow-hidden border border-[#353536]">
              <img
                src="/src/assets/images/product_catering_event_1791148083205.jpg"
                alt="Ebun D Foodie Event Catering Setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/product_party_jollof_1791148083205.jpg';
                }}
              />
            </div>

            {/* Itemized Quote */}
            <div className="space-y-3 text-xs text-[#9E9E9F] pb-6 border-b border-[#353536]">
              <div className="flex justify-between">
                <span>Guest Count</span>
                <span className="font-['Space_Grotesk',sans-serif] text-white tabular-nums">
                  {guests} attendees
                </span>
              </div>
              <div className="flex justify-between">
                <span>{selectedTier.name} Base</span>
                <span className="font-['Space_Grotesk',sans-serif] text-white tabular-nums">
                  {formatPrice(baseCostNgn, baseCostNgn / 1000)}
                </span>
              </div>
              {liveFrying && (
                <div className="flex justify-between">
                  <span>Live Frying Station Fee</span>
                  <span className="font-['Space_Grotesk',sans-serif] text-white tabular-nums">
                    {formatPrice(liveFryingCostNgn, 25.00)}
                  </span>
                </div>
              )}
              {customStickers && (
                <div className="flex justify-between">
                  <span>Branded Event Stickers</span>
                  <span className="font-['Space_Grotesk',sans-serif] text-white tabular-nums">
                    {formatPrice(stickersCostNgn, stickersCostNgn / 1000)}
                  </span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex items-baseline justify-between py-6">
              <span className="text-xs uppercase tracking-widest text-[#E4E6EF] font-semibold">
                Estimated Catering Total:
              </span>
              <span className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-white tabular-nums">
                {formatPrice(totalCostNgn, totalCostUsd)}
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppCateringUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary w-full bg-white text-black hover:bg-[#E4E6EF] h-[48px] text-xs font-semibold justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Send Catering Request on WhatsApp</span>
            </a>

            <div className="mt-4 text-center">
              <div className="text-[11px] text-[#9E9E9F] uppercase tracking-wider">
                Direct Catering Line: {VENDOR_INFO.phone}
              </div>
              <div className="text-[10px] text-[#7E849F] mt-1">
                {VENDOR_INFO.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
