"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, MapPin, X, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { businessConfig } from "@/config/business";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  // Gövde kaydırmasını engelleme (Scroll Lock)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const encodedMessage = encodeURIComponent(businessConfig.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodedMessage}`;

  const navLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Şubelerimiz", href: "/subelerimiz" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
      {/* Karartılmış Arka Plan (Overlay) */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Kayar Çekmece Menüsü */}
      <div className="relative w-80 max-w-[85vw] h-full bg-brand-charcoal border-l border-brand-border p-6 flex flex-col justify-between z-10 shadow-2xl animate-slide-in overflow-y-auto no-scrollbar">
        <div>
          {/* Üst Kapatma Bölümü */}
          <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-red">AVS MENÜ</span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-brand-border text-gray-400 hover:text-white cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigasyon Linkleri */}
          <nav className="flex flex-col gap-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3 px-4 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  pathname === link.href
                    ? "bg-brand-red text-white"
                    : "text-gray-300 hover:bg-brand-charcoal-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Hizmetlerimiz Akordeon */}
            <div className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center justify-between py-3 px-4 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  pathname.startsWith("/hizmetler")
                    ? "bg-brand-red/10 text-brand-red border border-brand-red/20"
                    : "text-gray-300 hover:bg-brand-charcoal-light hover:text-white"
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Alt Hizmetlerin Listesi */}
              {servicesOpen && (
                <div className="flex flex-col pl-4 mt-1 border-l border-brand-border gap-1 animate-fade-in">
                  <Link
                    href="/hizmetler"
                    onClick={onClose}
                    className="py-2.5 px-3 rounded-md text-xs font-bold text-brand-red hover:bg-brand-charcoal-light flex items-center justify-between"
                  >
                    <span>Tüm Hizmetler</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/hizmetler/${service.slug}`}
                      onClick={onClose}
                      className={`py-2 px-3 rounded-md text-xs font-medium transition-colors ${
                        pathname === `/hizmetler/${service.slug}`
                          ? "text-brand-red font-semibold"
                          : "text-gray-400 hover:text-white hover:bg-brand-charcoal-light"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3 px-4 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  pathname === link.href
                    ? "bg-brand-red text-white"
                    : "text-gray-300 hover:bg-brand-charcoal-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Alt CTA Bölümü */}
        <div className="border-t border-brand-border pt-6 mt-8 flex flex-col gap-3">
          <a
            href={`tel:${businessConfig.phoneFormatted}`}
            className="flex items-center justify-center gap-2.5 py-3 w-full bg-brand-charcoal-card border border-brand-border hover:bg-brand-border text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            Ustayı Ara
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-3 w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
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
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-3 w-full bg-brand-charcoal-light hover:bg-brand-charcoal text-gray-300 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-brand-border"
          >
            <MapPin className="w-4 h-4 text-brand-red" />
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
