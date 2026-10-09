import React, { useState } from 'react';
import { Play, Heart, MessageCircle, Share2, Volume2, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { TIKTOK_VIDEOS, TESTIMONIALS, VENDOR_INFO } from '../data/menuData';

interface TikTokShowcaseProps {
  onOrderVideoItem: (title: string) => void;
}

export const TikTokShowcase: React.FC<TikTokShowcaseProps> = ({ onOrderVideoItem }) => {
  const [activeVideo, setActiveVideo] = useState<typeof TIKTOK_VIDEOS[0] | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOrderCombo = (videoTitle: string) => {
    onOrderVideoItem(videoTitle);
    setOrderNotification(`Added combo from "${videoTitle}" to your bag!`);
    setTimeout(() => setOrderNotification(null), 3000);
  };

  return (
    <section id="tiktok-showcase" className="w-full bg-[#121416] text-white py-[72px] border-b border-[#353536]">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
        {/* Header with TikTok Wordmark & Handle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Direct From TikTok @ebundfoodie1</span>
            </div>
            <h2 className="font-heading-md uppercase text-white tracking-tight">
              Trending Viral Food Reels
            </h2>
          </div>

          <a
            href={VENDOR_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary bg-white text-black hover:bg-[#E4E6EF] text-xs font-semibold px-6 self-start md:self-auto"
          >
            <span>Follow {VENDOR_INFO.tiktokHandle}</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {orderNotification && (
          <div className="mb-6 p-4 bg-[#2B2E3A] border border-[#7E849F] text-white text-xs uppercase tracking-wider flex items-center justify-between">
            <span>{orderNotification}</span>
            <span className="text-white/60">Ready in Bag</span>
          </div>
        )}

        {/* 4 TikTok Reel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TIKTOK_VIDEOS.map(video => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative bg-[#1C1C1E] border border-[#353536] aspect-[9/16] overflow-hidden cursor-pointer flex flex-col justify-between p-4 transition-all duration-300 hover:border-white hover:-translate-y-1"
            >
              {/* Thumbnail Image */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

              {/* Top Bar of Reel */}
              <div className="relative z-10 flex items-center justify-between text-xs text-white/90">
                <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider font-['Space_Grotesk',sans-serif]">
                  {video.views} Views
                </span>
                <span className="text-[11px] font-mono text-white/70">{video.duration}</span>
              </div>

              {/* Center Play Button Affordance */}
              <div className="relative z-10 self-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
              </div>

              {/* Bottom Video Meta */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase truncate">
                    {VENDOR_INFO.tiktokHandle}
                  </span>
                  <button
                    onClick={(e) => toggleLike(video.id, e)}
                    type="button"
                    className="flex items-center gap-1 text-xs text-white"
                  >
                    <Heart
                      className={`w-4 h-4 ${likedMap[video.id] ? 'fill-red-500 text-red-500' : 'text-white'}`}
                    />
                    <span className="text-[11px] font-['Space_Grotesk',sans-serif] tabular-nums">
                      {video.likes}
                    </span>
                  </button>
                </div>

                <p className="text-xs text-white/90 font-medium line-clamp-2 leading-snug">
                  {video.title}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-[#9E9E9F] truncate">
                  <Volume2 className="w-3 h-3 text-white/70 shrink-0" />
                  <span className="truncate">{video.sound}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Social Proof / Testimonials Section */}
        <div className="pt-12 border-t border-[#353536]">
          <div className="text-xs uppercase tracking-widest text-[#E4E6EF]/70 font-semibold mb-8">
            Real Reviews From Lagos Foodies & Event Planners
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1E] border border-[#353536] p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-[#9E9E9F] uppercase tracking-wider">
                    <span>{t.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">★★★★★</span>
                  </div>

                  <p className="text-sm text-white/90 leading-relaxed font-normal">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#29292A]">
                  <div className="text-sm font-bold uppercase tracking-tight text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#9E9E9F] mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-[#7E849F] uppercase mt-2">
                    Verified Order: {t.order}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Reel Playback Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full bg-[#121416] border border-[#353536] aspect-[9/16] overflow-hidden flex flex-col justify-between p-6">
            <button
              onClick={() => setActiveVideo(null)}
              type="button"
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg hover:bg-black"
            >
              ✕
            </button>

            {/* Simulated Live Video Background */}
            <img
              src={activeVideo.thumbnail}
              alt={activeVideo.title}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs text-white">
              <span className="font-bold uppercase tracking-wider">
                {VENDOR_INFO.tiktokHandle}
              </span>
              <a
                href={VENDOR_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary bg-white text-black text-[10px] px-3 h-7 font-bold"
              >
                Open TikTok
              </a>
            </div>

            {/* Right Action Rail (TikTok style) */}
            <div className="relative z-10 self-end flex flex-col items-center gap-5 mr-1 mb-8">
              <button
                onClick={(e) => toggleLike(activeVideo.id, e)}
                type="button"
                className="flex flex-col items-center gap-1 text-white"
              >
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Heart
                    className={`w-5 h-5 ${likedMap[activeVideo.id] ? 'fill-red-500 text-red-500' : 'text-white'}`}
                  />
                </div>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif]">
                  {activeVideo.likes}
                </span>
              </button>

              <div className="flex flex-col items-center gap-1 text-white">
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif]">284</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-white">
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif]">Share</span>
              </div>
            </div>

            {/* Bottom Caption & Order CTA */}
            <div className="relative z-10 space-y-3">
              <p className="text-xs text-white/95 leading-relaxed">
                {activeVideo.caption}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#E4E6EF]">
                <Volume2 className="w-4 h-4 shrink-0" />
                <span className="truncate">{activeVideo.sound}</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleOrderCombo(activeVideo.title);
                    setActiveVideo(null);
                  }}
                  type="button"
                  className="btn-pill-primary w-full bg-white text-black hover:bg-[#E4E6EF] text-xs font-bold py-3 justify-center"
                >
                  Order Featured Combo in this Reel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
