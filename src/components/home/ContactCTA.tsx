import React from "react";
import { Phone, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";

export const ContactCTA: React.FC = () => {
  const encodedMessage = encodeURIComponent(businessConfig.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodedMessage}`;

  return (
    <section className="bg-brand-charcoal text-white py-16 px-6 border-t border-brand-border relative overflow-hidden">
      {/* Background carbon texture grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white leading-tight">
          Aracınız İçin Servis Desteğine mi İhtiyacınız Var?
        </h2>
        
        <p className="text-xs md:text-sm text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Gecikmiş periyodik bakımlar, şanzıman titremeleri veya yanıp sönen motor arıza lambaları... Aracınızın tüm sorunları için doğrudan bizimle iletişime geçin. Şeffaf ve dürüst çözümlerle yanınızdayız.
        </p>

        {/* 3 CTA Butonu */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Hemen Ara */}
          <a
            href={`tel:${businessConfig.phoneFormatted}`}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 w-full sm:w-auto bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-hover hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Hemen Ara
          </a>

          {/* WhatsApp'tan Yaz */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 w-full sm:w-auto bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#1ebd5b] hover:scale-105 active:scale-95 shadow-lg shadow-green-500/10 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.022-.08-.124-.22-.364-.34-.24-.12-1.418-.7-1.638-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.167-.701-.626-1.173-1.4-1.31-1.64-.138-.24-.015-.37.107-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.198-.48-.397-.415-.54-.422-.14-.007-.3-.007-.46-.007s-.42.06-.64.3c-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.572.248 1.02.396 1.368.508.575.183 1.1.157 1.514.097.46-.067 1.418-.58 1.62-1.114.202-.533.202-1 .14-1.114-.022-.08-.103-.13-.242-.2zM12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.88 1.627 5.454l-1.077 3.93 4.025-1.056C8.11 21.373 9.99 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.734 0-3.35-.506-4.717-1.38l-.337-.217-2.486.652.664-2.423-.238-.38C4.01 15.023 3.5 13.562 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
            </svg>
            WhatsApp’tan Yaz
          </a>

          {/* Yol Tarifi Al */}
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 w-full sm:w-auto bg-brand-charcoal-card border border-brand-border text-gray-300 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-border hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-brand-red" />
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactCTA;
