import React from 'react';
import { ArrowUpRight, Flame, Clock, Sparkles } from 'lucide-react';
import { VENDOR_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenBuilder }) => {
  return (
    <section className="relative w-full bg-[#121416] text-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Cinematic Food Image with Measured Scrim & Hero Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_ebun_smallchops_1791148072759.jpg"
          alt="Ebun D Foodie Artisanal Nigerian Small Chops Platter"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Scrim per design.md: linear-gradient(270deg, rgba(11, 11, 18, 0.5), rgba(11, 11, 18, 0)) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121416] via-[#121416]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-transparent to-[#121416]/40" />
      </div>

      <div className="relative z-10 max-w-[1296px] mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Metadata line per zero-pill discipline */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm uppercase tracking-widest text-[#E4E6EF]/90 mb-6 font-medium">
            <span>LASU Corridor & All Lagos</span>
            <span aria-hidden="true" className="text-[#E4E6EF]/40">·</span>
            <a
              href={VENDOR_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-[#E4E6EF]/30"
            >
              TikTok: {VENDOR_INFO.tiktokHandle}
            </a>
            <span aria-hidden="true" className="text-[#E4E6EF]/40">·</span>
            <span>Hotline: {VENDOR_INFO.phone}</span>
          </div>

          {/* Lusion Display Typography: Ultra-Large Hero Headline */}
          <h1 className="font-display-xxl text-white tracking-[-2.88px] uppercase mb-8 leading-[0.92] text-balance">
            Crisp Bites. <br />
            Smoky Jollof. <br />
            Lagos Spirit.
          </h1>

          <p className="font-body-lg text-[#E4E6EF]/85 max-w-2xl mb-10 leading-relaxed font-normal">
            Ebun D Foodie crafts artisanal Nigerian finger foods, crunchy seasoned beef samosas,
            golden spring rolls, sweet cloud-soft puff-puffs, and authentic firewood party jollof
            for fast dining, campus cravings, and grand Lagos celebrations.
          </p>

          {/* Primary Action Controls */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-14">
            <button
              onClick={onExploreMenu}
              type="button"
              className="btn-pill-filled bg-white text-black hover:bg-[#E4E6EF] text-xs font-semibold px-8 h-[48px]"
            >
              <span>Explore The Menu</span>
            </button>

            <button
              onClick={onOpenBuilder}
              type="button"
              className="btn-pill-primary bg-[#2B2E3A] border border-[#353536] hover:bg-[#383c4a] text-white text-xs font-semibold px-8 h-[48px]"
            >
              <span>Build Custom Box</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>

            {/* Link Badge per design.md with measured dual-layer shadow */}
            <a
              href={VENDOR_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-badge text-xs uppercase tracking-wider font-semibold"
            >
              <Sparkles className="w-4 h-4 text-[#2B2E3A]" />
              <span>Watch on TikTok {VENDOR_INFO.tiktokHandle}</span>
            </a>
          </div>

          {/* Quantitative adjacency proof & trust markers (clean, unboxed text) */}
          <div className="pt-8 border-t border-[#353536] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif] tabular-nums">
                40 Mins
              </div>
              <div className="text-xs uppercase tracking-wider text-[#9E9E9F] mt-1">
                Frying Freshness Window
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif] tabular-nums">
                100% Real
              </div>
              <div className="text-xs uppercase tracking-wider text-[#9E9E9F] mt-1">
                Smoky Firewood Jollof Base
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif] tabular-nums">
                15+ Zones
              </div>
              <div className="text-xs uppercase tracking-wider text-[#9E9E9F] mt-1">
                LASU, Mainland & Island Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
