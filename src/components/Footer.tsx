import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { VENDOR_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#121416] text-white border-t border-[#353536] pt-16 pb-12">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
              {VENDOR_INFO.name}
            </h2>
            <p className="text-xs text-[#9E9E9F] leading-relaxed max-w-sm">
              Artisanal Nigerian small chops, seasoned crispy samosas, crunchy spring rolls,
              pillowy sweet puff-puffs, and signature firewood smoky party jollof rice.
              Crafted fresh daily along the LASU corridor with all-Lagos express delivery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={VENDOR_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary bg-[#2B2E3A] border border-[#353536] text-xs px-4 h-9"
              >
                <span>TikTok {VENDOR_INFO.tiktokHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={VENDOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-filled bg-white text-black hover:bg-[#E4E6EF] text-xs px-4 h-9"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4E6EF] mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs text-[#9E9E9F] uppercase tracking-wider">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#custom-builder" className="hover:text-white transition-colors">
                  Custom Platter Builder
                </a>
              </li>
              <li>
                <a href="#jollof" className="hover:text-white transition-colors">
                  Smoky Party Jollof
                </a>
              </li>
              <li>
                <a href="#tiktok-showcase" className="hover:text-white transition-colors">
                  TikTok Video Reels
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Bespoke Event Catering
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition-colors">
                  Lagos Delivery Zones
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4E6EF] mb-4">
              Specialties
            </h3>
            <ul className="space-y-2 text-xs text-[#9E9E9F]">
              <li>Spiced Beef Samosas</li>
              <li>Golden Vegetable Spring Rolls</li>
              <li>Honey-Glazed Puff-Puff</li>
              <li>Scotch Bonnet Peppered Beef</li>
              <li>Firewood Cast-Iron Jollof</li>
              <li>Gourmet Gizdodo Bowls</li>
              <li>100-Piece Party Chops Trays</li>
            </ul>
          </div>

          {/* Contact & Hub */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4E6EF] mb-4">
              Kitchen Hub
            </h3>
            <div className="space-y-3 text-xs text-[#9E9E9F]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{VENDOR_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Hotline: {VENDOR_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{VENDOR_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#353536] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E9E9F]">
          <div>
            © {new Date().getFullYear()} {VENDOR_INFO.name}. All Rights Reserved. Artisanal Nigerian Catering & Small Chops.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={VENDOR_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok: @ebundfoodie1
            </a>
            <span>·</span>
            <a
              href={VENDOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp: +234 907 723 0897
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
