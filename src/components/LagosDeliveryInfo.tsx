import React from 'react';
import { MapPin, Clock, ShieldCheck, Truck, Phone } from 'lucide-react';
import { LAGOS_ZONES, VENDOR_INFO } from '../data/menuData';

interface LagosDeliveryInfoProps {
  currency: 'NGN' | 'USD';
}

export const LagosDeliveryInfo: React.FC<LagosDeliveryInfoProps> = ({ currency }) => {
  const formatPrice = (ngn: number) => {
    return currency === 'NGN' ? `₦${ngn.toLocaleString()}` : `$${(ngn / 1000).toFixed(2)}`;
  };

  return (
    <section id="delivery" className="w-full bg-[#121416] text-white py-[72px] border-b border-[#353536]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-semibold mb-3">
            Dispatch Logistics & Quality Assurance
          </div>
          <h2 className="font-heading-md uppercase text-white tracking-tight mb-4">
            Lagos Delivery Network
          </h2>
          <p className="text-sm text-[#9E9E9F] leading-relaxed">
            Based centrally along the LASU corridor (Ojo / Igando axis), our dedicated dispatch riders
            deliver piping hot small chops and party jollof across Lagos mainland and island.
          </p>
        </div>

        {/* 3 Quality & Packaging Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1C1C1E] border border-[#353536] p-6">
            <ShieldCheck className="w-6 h-6 text-white mb-4" />
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">
              Thermal Heat Retention
            </h3>
            <p className="text-xs text-[#9E9E9F] leading-relaxed">
              Every small chops platter and jollof tray is packed in moisture-vented, heat-retaining
              containers so your pastry remains ultra-crisp and your rice steaming.
            </p>
          </div>

          <div className="bg-[#1C1C1E] border border-[#353536] p-6">
            <Clock className="w-6 h-6 text-white mb-4" />
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">
              Made-To-Order Freshness
            </h3>
            <p className="text-xs text-[#9E9E9F] leading-relaxed">
              We never reheat old food. Samosas, spring rolls, and puff-puffs enter the fryer
              only after your order is confirmed, ensuring maximum crunch.
            </p>
          </div>

          <div className="bg-[#1C1C1E] border border-[#353536] p-6">
            <Truck className="w-6 h-6 text-white mb-4" />
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">
              LASU Priority Corridor
            </h3>
            <p className="text-xs text-[#9E9E9F] leading-relaxed">
              Express 30–45 minute drop-offs at LASU main gate, faculties, hostels, Iba, and
              Ojo axis. Bulk drops available for events and campus associations.
            </p>
          </div>
        </div>

        {/* Lagos Delivery Fee Matrix */}
        <div className="bg-[#1C1C1E] border border-[#353536] overflow-hidden">
          <div className="p-6 border-b border-[#353536] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold uppercase tracking-tight text-white">
                Estimated Delivery Fees & Timelines
              </h3>
              <p className="text-xs text-[#9E9E9F]">
                Standard dispatch rates per zone across Lagos State
              </p>
            </div>
            <a
              href={`tel:${VENDOR_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-[#E4E6EF]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Dispatcher Line: {VENDOR_INFO.phone}</span>
            </a>
          </div>

          <div className="divide-y divide-[#353536]">
            {LAGOS_ZONES.map((zone, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#29292A]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#7E849F] shrink-0" />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-tight text-white">
                      {zone.name}
                    </div>
                    <div className="text-xs text-[#9E9E9F]">
                      {zone.axis}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 text-xs pl-7 sm:pl-0">
                  <div className="text-[#9E9E9F] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{zone.estimatedTime}</span>
                  </div>

                  <div className="font-['Space_Grotesk',sans-serif] text-sm font-bold text-white tabular-nums min-w-[70px] text-right">
                    {formatPrice(zone.feeNgn)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
