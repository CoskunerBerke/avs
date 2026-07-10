"use client";

import React, { useState, useEffect } from "react";
import { businessConfig } from "@/config/business";

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa biraz kaydırıldıktan sonra gösterilsin veya doğrudan yüklendiğinde aktif olsun
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const encodedMessage = encodeURIComponent(businessConfig.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-20 md:bottom-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="WhatsApp ile Ustaya Sorun"
    >
      {/* Yeşil Daire Nabız (Pulse) Efekti */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:animate-none"></span>
      
      {/* İkon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.022-.08-.124-.22-.364-.34-.24-.12-1.418-.7-1.638-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.167-.701-.626-1.173-1.4-1.31-1.64-.138-.24-.015-.37.107-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.198-.48-.397-.415-.54-.422-.14-.007-.3-.007-.46-.007s-.42.06-.64.3c-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.572.248 1.02.396 1.368.508.575.183 1.1.157 1.514.097.46-.067 1.418-.58 1.62-1.114.202-.533.202-1 .14-1.114-.022-.08-.103-.13-.242-.2zM12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.88 1.627 5.454l-1.077 3.93 4.025-1.056C8.11 21.373 9.99 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.734 0-3.35-.506-4.717-1.38l-.337-.217-2.486.652.664-2.423-.238-.38C4.01 15.023 3.5 13.562 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
      </svg>
      
      {/* Yüzen yardım balonu (Masaüstü için) */}
      <span className="absolute right-16 px-3 py-1.5 bg-brand-charcoal text-white text-[11px] font-semibold tracking-wide rounded-md shadow-lg opacity-0 pointer-events-none translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap hidden md:block">
        Ustaya Sorun
      </span>
    </a>
  );
};
export default WhatsAppButton;
