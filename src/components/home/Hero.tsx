"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, MessageSquare, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";

interface Slide {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  isWhatsapp?: boolean;
}

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      eyebrow: "Profesyonel Otomotiv Servis Çözümleri",
      headline: "Aracınız İçin Uzman Bakım, Doğru Teşhis, Güvenilir Onarım",
      description: "AVS Service & Repair, modern arıza tespit ekipmanları ve profesyonel servis yaklaşımıyla aracınızın bakım ve onarım ihtiyaçlarına çözüm sunar.",
      primaryCtaText: "Randevu Al",
      primaryCtaHref: "/iletisim",
      secondaryCtaText: "Ustaya Sor",
      secondaryCtaHref: `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodeURIComponent(businessConfig.whatsappPrefilledMessage)}`,
      isWhatsapp: true
    },
    {
      eyebrow: "Uzman Şanzıman & DSG Çözümleri",
      headline: "Çift Kavrama ve Mekatronik Revizyon Hizmetleri",
      description: "Volkswagen, Audi, Seat, Skoda grubu araçlarınızda DSG şanzıman mekatronik onarımları, kavrama değişimi ve temel ayarlar AVS güvencesiyle yapılır.",
      primaryCtaText: "Hizmetlerimiz",
      primaryCtaHref: "/hizmetler",
      secondaryCtaText: "Konuma Git",
      secondaryCtaHref: businessConfig.googleMapsUrl,
      isWhatsapp: false
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Otomatik geçiş
  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, 7000); // 7 saniye bekleme
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPlaying, nextSlide]);

  // Klavye yön tuşları desteği
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative w-full min-h-[580px] lg:min-h-[640px] bg-brand-charcoal text-white flex items-center overflow-hidden border-b border-brand-border"
      aria-label="Öne Çıkan Servis Kampanyaları"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Büyük Atölye Arka Plan Görseli (Dinamik Gerçek Fotoğraflar) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000" 
        style={{ 
          backgroundImage: `url(${currentSlide === 0 ? '/images/avs_workshop_1.png' : '/images/avs_workshop_2.png'})` 
        }}
      />
      
      {/* Ekran Karartma Katmanı (Hafifletilmiş) */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 w-full py-16 md:py-24 z-10 relative">
        <div className="max-w-2xl bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-200 shadow-2xl animate-fade-in">
          {/* Slayt İçerikleri */}
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`transition-all duration-700 flex flex-col ${
                  isActive
                    ? "opacity-100 translate-x-0 relative block"
                    : "opacity-0 translate-x-10 absolute pointer-events-none hidden"
                }`}
                aria-hidden={!isActive}
              >
                {/* Küçük Başlık (Eyebrow) */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brand-red text-white border border-brand-red/60 rounded text-[10px] font-extrabold uppercase tracking-widest -skew-x-6 w-fit mb-6">
                  <span className="skew-x-6">{slide.eyebrow}</span>
                </div>

                {/* Ana Başlık */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide leading-tight text-brand-charcoal">
                  {slide.headline.split(", ").map((part, i) => (
                    <span key={i} className="block mt-1 first:mt-0">
                      {part}
                    </span>
                  ))}
                </h1>

                {/* Açıklama Metni */}
                <p className="text-xs md:text-sm text-brand-gray-dark mt-5 leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* CTA Butonları */}
                <div className="flex flex-wrap items-center gap-3.5 mt-8">
                  <Link
                    href={slide.primaryCtaHref}
                    className="flex items-center gap-2 px-5 py-3 bg-brand-red text-white text-xs font-black uppercase tracking-wider rounded-lg hover:bg-brand-red-hover hover:scale-105 active:scale-95 shadow-md shadow-brand-red/20 transition-all duration-200"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {slide.primaryCtaText}
                  </Link>

                  {slide.isWhatsapp ? (
                    <a
                      href={slide.secondaryCtaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-brand-gray border border-gray-250 hover:bg-white text-brand-charcoal text-xs font-black uppercase tracking-wider rounded-lg hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      {slide.secondaryCtaText}
                    </a>
                  ) : (
                    <a
                      href={slide.secondaryCtaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-brand-gray border border-gray-250 hover:bg-white text-brand-charcoal text-xs font-black uppercase tracking-wider rounded-lg hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-red" />
                      {slide.secondaryCtaText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slayt Navigasyon Butonları */}
      <div className="absolute right-6 bottom-20 md:bottom-12 flex items-center gap-3 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 border border-brand-border rounded bg-brand-charcoal/80 text-gray-400 hover:text-white hover:border-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
          aria-label="Önceki kampanya görseli"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? "bg-brand-red w-6" : "bg-brand-border hover:bg-gray-500"
              }`}
              aria-label={`Slayt ${i + 1} göster`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-10 h-10 border border-brand-border rounded bg-brand-charcoal/80 text-gray-400 hover:text-white hover:border-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
          aria-label="Sonraki kampanya görseli"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default Hero;
