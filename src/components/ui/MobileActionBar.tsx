"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";

export const MobileActionBar: React.FC = () => {
  const encodedMessage = encodeURIComponent(businessConfig.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-charcoal/95 backdrop-blur-md border-t border-brand-border flex items-center justify-around h-16 md:hidden px-2 pb-[safe-area-inset-bottom]">
      {/* ARA BUTONU */}
      <a
        href={`tel:${businessConfig.phoneFormatted}`}
        className="flex flex-col items-center justify-center w-full h-full text-white hover:text-brand-red active:scale-95 transition-all duration-200"
      >
        <Phone className="w-5.5 h-5.5 text-brand-red" />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Ara</span>
      </a>

      {/* DİKEY BÖLÜCÜ */}
      <div className="w-[1px] h-8 bg-brand-border"></div>

      {/* WHATSAPP BUTONU */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-full h-full text-white hover:text-green-400 active:scale-95 transition-all duration-200"
      >
        <svg
          className="w-5.5 h-5.5 text-[#25D366] fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.022-.08-.124-.22-.364-.34-.24-.12-1.418-.7-1.638-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.167-.701-.626-1.173-1.4-1.31-1.64-.138-.24-.015-.37.107-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.198-.48-.397-.415-.54-.422-.14-.007-.3-.007-.46-.007s-.42.06-.64.3c-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.572.248 1.02.396 1.368.508.575.183 1.1.157 1.514.097.46-.067 1.418-.58 1.62-1.114.202-.533.202-1 .14-1.114-.022-.08-.103-.13-.242-.2zM12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.88 1.627 5.454l-1.077 3.93 4.025-1.056C8.11 21.373 9.99 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.734 0-3.35-.506-4.717-1.38l-.337-.217-2.486.652.664-2.423-.238-.38C4.01 15.023 3.5 13.562 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
        </svg>
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">WhatsApp</span>
      </a>

      {/* DİKEY BÖLÜCÜ */}
      <div className="w-[1px] h-8 bg-brand-border"></div>

      {/* KONUM BUTONU */}
      <a
        href={businessConfig.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-full h-full text-white hover:text-brand-red active:scale-95 transition-all duration-200"
      >
        <MapPin className="w-5.5 h-5.5 text-brand-red" />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Konum</span>
      </a>
    </div>
  );
};
export default MobileActionBar;
