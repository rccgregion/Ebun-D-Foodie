import React, { useState } from 'react';
import { Plus, Minus, Check, Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { VENDOR_INFO } from '../data/menuData';

interface CustomPlatterBuilderProps {
  onAddCustomPlatter: (item: CartItem) => void;
  currency: 'NGN' | 'USD';
}

export const CustomPlatterBuilder: React.FC<CustomPlatterBuilderProps> = ({
  onAddCustomPlatter,
  currency
}) => {
  const [samosaCount, setSamosaCount] = useState(6);
  const [samosaType, setSamosaType] = useState<'Beef' | 'Vegetable'>('Beef');

  const [springRollCount, setSpringRollCount] = useState(6);
  const [springRollType, setSpringRollType] = useState<'Chicken' | 'Vegetable'>('Chicken');

  const [puffPuffCount, setPuffPuffCount] = useState(12);
  const [puffPuffStyle, setPuffPuffStyle] = useState<'Classic Sweet' | 'Spicy Peppered'>('Classic Sweet');

  const [selectedProteins, setSelectedProteins] = useState<string[]>(['Peppered Beef Cubes']);
  const [selectedSauces, setSelectedSauces] = useState<string[]>(['Ebun House Hot Ata Dindin']);
  const [boxName, setBoxName] = useState('My Custom Chops Box');

  const proteinOptions = [
    { id: 'Peppered Beef Cubes', label: 'Peppered Beef Cubes', priceNgn: 1500, priceUsd: 1.50 },
    { id: 'Peppered Chicken Bites', label: 'Peppered Chicken Bites', priceNgn: 1800, priceUsd: 1.80 },
    { id: 'Sticky BBQ Wings', label: 'Sticky BBQ Wings (3pcs)', priceNgn: 2200, priceUsd: 2.20 },
    { id: 'Gourmet Gizdodo', label: 'Spiced Gizdodo Chunks', priceNgn: 2000, priceUsd: 2.00 }
  ];

  const sauceOptions = [
    'Ebun House Hot Ata Dindin',
    'Sweet Chili Fusion Dip',
    'Herb Garlic Mayo',
    'Tangy Pepper Sauce'
  ];

  // Pricing formula:
  // Base box packaging: ₦1,000 / $1.00
  // Samosas: ₦300 each ($0.30)
  // Spring rolls: ₦300 each ($0.30)
  // Puff puff: ₦80 each ($0.08)
  // Proteins: option prices
  // Extra sauces beyond 1: ₦300 each
  const baseBoxNgn = 1000;
  const samosaTotalNgn = samosaCount * 300;
  const springRollTotalNgn = springRollCount * 300;
  const puffPuffTotalNgn = puffPuffCount * 80;

  const proteinTotalNgn = selectedProteins.reduce((sum, pId) => {
    const opt = proteinOptions.find(o => o.id === pId);
    return sum + (opt ? opt.priceNgn : 0);
  }, 0);

  const sauceTotalNgn = Math.max(0, selectedSauces.length - 1) * 300;

  const totalNgn = baseBoxNgn + samosaTotalNgn + springRollTotalNgn + puffPuffTotalNgn + proteinTotalNgn + sauceTotalNgn;
  const totalUsd = totalNgn / 1000;
  const totalPieces = samosaCount + springRollCount + puffPuffCount + (selectedProteins.length * 2);

  const formatPrice = (ngn: number, usd: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${usd.toFixed(2)}`;
  };

  const toggleProtein = (id: string) => {
    if (selectedProteins.includes(id)) {
      setSelectedProteins(selectedProteins.filter(p => p !== id));
    } else {
      setSelectedProteins([...selectedProteins, id]);
    }
  };

  const toggleSauce = (name: string) => {
    if (selectedSauces.includes(name)) {
      if (selectedSauces.length > 1) {
        setSelectedSauces(selectedSauces.filter(s => s !== name));
      }
    } else {
      setSelectedSauces([...selectedSauces, name]);
    }
  };

  const customSummary = `${samosaCount}x ${samosaType} Samosas, ${springRollCount}x ${springRollType} Spring Rolls, ${puffPuffCount}x ${puffPuffStyle} Puff-Puff, Proteins: [${selectedProteins.join(', ')}], Sauces: [${selectedSauces.join(', ')}]`;

  const handleAddToBag = () => {
    const customCartItem: CartItem = {
      id: `custom-box-${Date.now()}`,
      name: boxName.trim() || 'Custom Artisanal Chops Box',
      priceNgn: totalNgn,
      priceUsd: totalUsd,
      quantity: 1,
      image: '/src/assets/images/product_chops_mega_platter_1791148093011.jpg',
      customDetails: customSummary
    };
    onAddCustomPlatter(customCartItem);
  };

  const getWhatsAppCustomUrl = () => {
    const text = encodeURIComponent(
      `Hello Ebun D Foodie! I would like to order a Custom Small Chops Box:\n\n` +
      `Box Name: ${boxName}\n` +
      `Total Pieces: ~${totalPieces} pcs\n` +
      `Total Estimate: ${formatPrice(totalNgn, totalUsd)}\n\n` +
      `Specifications:\n` +
      `- Samosas: ${samosaCount}x (${samosaType})\n` +
      `- Spring Rolls: ${springRollCount}x (${springRollType})\n` +
      `- Puff-Puff: ${puffPuffCount}x (${puffPuffStyle})\n` +
      `- Proteins: ${selectedProteins.join(', ') || 'None'}\n` +
      `- Dips: ${selectedSauces.join(', ')}\n\n` +
      `Delivery Area in Lagos:\n` +
      `Delivery Date & Time:`
    );
    return `https://wa.me/2349077230897?text=${text}`;
  };

  return (
    <section id="custom-builder" className="w-full bg-[#121416] text-white py-[72px] border-b border-[#353536]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-medium mb-3">
            Interactive Box Studio
          </div>
          <h2 className="font-heading-md uppercase text-white tracking-tight mb-4">
            Build Your Custom Chops Platter
          </h2>
          <p className="text-sm text-[#9E9E9F] leading-relaxed">
            Customize every piece of your Nigerian finger food experience. Choose your savory fillings,
            crisp rolls, sweet puff-puff style, tender peppered proteins, and artisan dipping sauces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Box Name */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <label htmlFor="box-name" className="block text-xs uppercase tracking-wider text-[#9E9E9F] font-semibold mb-2">
                Name Your Box / Event Memo
              </label>
              <input
                id="box-name"
                type="text"
                value={boxName}
                onChange={e => setBoxName(e.target.value)}
                placeholder="e.g. Birthday Squad Box / Law Faculty Munchies"
                className="w-full bg-[#121416] border border-[#353536] text-white px-4 py-3 rounded-[18px] text-sm focus:outline-none focus:border-[#7E849F]"
              />
            </div>

            {/* Samosas Configurator */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    1. Crisp Samosas
                  </h3>
                  <p className="text-xs text-[#9E9E9F]">
                    Thin pastry wrapped around aromatic spiced filling (₦300 / pc)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSamosaCount(Math.max(0, samosaCount - 2))}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-['Space_Grotesk',sans-serif] text-lg font-bold tabular-nums w-8 text-center">
                    {samosaCount}
                  </span>
                  <button
                    onClick={() => setSamosaCount(samosaCount + 2)}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {samosaCount > 0 && (
                <div className="flex items-center gap-3 pt-3 border-t border-[#29292A]">
                  <span className="text-xs text-[#9E9E9F] uppercase">Filling:</span>
                  {(['Beef', 'Vegetable'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSamosaType(type)}
                      className={`px-3 py-1 text-xs uppercase font-medium rounded-full transition-colors ${
                        samosaType === type
                          ? 'bg-white text-black'
                          : 'bg-[#121416] text-[#9E9E9F] hover:text-white'
                      }`}
                    >
                      {type} Samosa
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Spring Rolls Configurator */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    2. Crunchy Spring Rolls
                  </h3>
                  <p className="text-xs text-[#9E9E9F]">
                    Cylindrical golden fried pastry with julienned crunch (₦300 / pc)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSpringRollCount(Math.max(0, springRollCount - 2))}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-['Space_Grotesk',sans-serif] text-lg font-bold tabular-nums w-8 text-center">
                    {springRollCount}
                  </span>
                  <button
                    onClick={() => setSpringRollCount(springRollCount + 2)}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {springRollCount > 0 && (
                <div className="flex items-center gap-3 pt-3 border-t border-[#29292A]">
                  <span className="text-xs text-[#9E9E9F] uppercase">Filling:</span>
                  {(['Chicken', 'Vegetable'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSpringRollType(type)}
                      className={`px-3 py-1 text-xs uppercase font-medium rounded-full transition-colors ${
                        springRollType === type
                          ? 'bg-white text-black'
                          : 'bg-[#121416] text-[#9E9E9F] hover:text-white'
                      }`}
                    >
                      {type} Roll
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Golden Puff-Puff */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    3. Sweet Golden Puff-Puff
                  </h3>
                  <p className="text-xs text-[#9E9E9F]">
                    Deep golden spheres with cloud-soft interior (₦80 / pc)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPuffPuffCount(Math.max(6, puffPuffCount - 6))}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-['Space_Grotesk',sans-serif] text-lg font-bold tabular-nums w-8 text-center">
                    {puffPuffCount}
                  </span>
                  <button
                    onClick={() => setPuffPuffCount(puffPuffCount + 6)}
                    type="button"
                    className="w-8 h-8 rounded-full border border-[#353536] flex items-center justify-center text-white hover:bg-[#2B2E3A]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#29292A]">
                <span className="text-xs text-[#9E9E9F] uppercase">Finish:</span>
                {(['Classic Sweet', 'Spicy Peppered'] as const).map(style => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setPuffPuffStyle(style)}
                    className={`px-3 py-1 text-xs uppercase font-medium rounded-full transition-colors ${
                      puffPuffStyle === style
                        ? 'bg-white text-black'
                        : 'bg-[#121416] text-[#9E9E9F] hover:text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Protein Add-ons */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                4. Peppered Proteins & Delicacies
              </h3>
              <p className="text-xs text-[#9E9E9F] mb-4">
                Slow-glazed with scotch bonnets, red onions, and Lagos spices
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {proteinOptions.map(prot => {
                  const isSelected = selectedProteins.includes(prot.id);
                  return (
                    <button
                      key={prot.id}
                      type="button"
                      onClick={() => toggleProtein(prot.id)}
                      className={`p-3 text-left border rounded-none flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'border-white bg-[#2B2E3A] text-white'
                          : 'border-[#353536] bg-[#121416] text-[#9E9E9F] hover:border-[#7E849F]'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase">{prot.label}</div>
                      <div className="text-xs font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                        +{formatPrice(prot.priceNgn, prot.priceUsd)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dipping Sauces */}
            <div className="bg-[#1C1C1E] p-6 border border-[#353536]">
              <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                5. Artisan Dips & Condiments
              </h3>
              <p className="text-xs text-[#9E9E9F] mb-4">
                First dip included free · additional dips +₦300 ($0.30)
              </p>

              <div className="flex flex-wrap gap-2">
                {sauceOptions.map(sauce => {
                  const isSelected = selectedSauces.includes(sauce);
                  return (
                    <button
                      key={sauce}
                      type="button"
                      onClick={() => toggleSauce(sauce)}
                      className={`px-3 py-1.5 text-xs uppercase font-medium rounded-full border transition-colors ${
                        isSelected
                          ? 'border-white bg-white text-black'
                          : 'border-[#353536] text-[#9E9E9F] hover:text-white'
                      }`}
                    >
                      {sauce}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Summary & Order Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 bg-[#1C1C1E] border border-[#353536] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-semibold mb-2">
              Live Platter Manifest
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
              {boxName}
            </h3>

            {/* Visual Box Preview Image */}
            <div className="relative aspect-[16/10] bg-[#121416] mb-6 overflow-hidden border border-[#353536]">
              <img
                src="/src/assets/images/product_chops_mega_platter_1791148093011.jpg"
                alt="Custom Chops Box Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 bg-[#121416]/90 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white font-medium">
                ~{totalPieces} Pieces Selected
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2.5 text-xs text-[#9E9E9F] pb-6 border-b border-[#353536]">
              <div className="flex justify-between">
                <span>Custom Bento Box & Foil Sealing</span>
                <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                  {formatPrice(baseBoxNgn, 1.00)}
                </span>
              </div>
              {samosaCount > 0 && (
                <div className="flex justify-between">
                  <span>{samosaCount}x {samosaType} Samosas</span>
                  <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                    {formatPrice(samosaTotalNgn, samosaTotalNgn / 1000)}
                  </span>
                </div>
              )}
              {springRollCount > 0 && (
                <div className="flex justify-between">
                  <span>{springRollCount}x {springRollType} Spring Rolls</span>
                  <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                    {formatPrice(springRollTotalNgn, springRollTotalNgn / 1000)}
                  </span>
                </div>
              )}
              {puffPuffCount > 0 && (
                <div className="flex justify-between">
                  <span>{puffPuffCount}x {puffPuffStyle} Puff-Puff</span>
                  <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                    {formatPrice(puffPuffTotalNgn, puffPuffTotalNgn / 1000)}
                  </span>
                </div>
              )}
              {selectedProteins.length > 0 && (
                <div className="flex justify-between">
                  <span>Proteins ({selectedProteins.length})</span>
                  <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                    {formatPrice(proteinTotalNgn, proteinTotalNgn / 1000)}
                  </span>
                </div>
              )}
              {sauceTotalNgn > 0 && (
                <div className="flex justify-between">
                  <span>Extra Dips ({selectedSauces.length - 1})</span>
                  <span className="font-['Space_Grotesk',sans-serif] tabular-nums text-white">
                    {formatPrice(sauceTotalNgn, sauceTotalNgn / 1000)}
                  </span>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="flex items-baseline justify-between py-6">
              <span className="text-xs uppercase tracking-widest text-[#E4E6EF] font-semibold">
                Estimated Total:
              </span>
              <span className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-white tabular-nums">
                {formatPrice(totalNgn, totalUsd)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToBag}
                type="button"
                className="btn-pill-primary w-full bg-white text-black hover:bg-[#E4E6EF] h-[48px] text-xs font-semibold justify-center"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span>Add Box to Bag</span>
              </button>

              <a
                href={getWhatsAppCustomUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-filled w-full bg-[#2B2E3A] text-white hover:bg-[#383c4a] h-[48px] text-xs font-semibold justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Instant WhatsApp Order</span>
              </a>
            </div>

            <p className="text-[11px] text-[#9E9E9F] text-center mt-4 uppercase tracking-wider">
              Hotline: {VENDOR_INFO.phone} · Instant LASU & Lagos Dispatch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
