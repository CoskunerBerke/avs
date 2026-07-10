"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { businessConfig } from "@/config/business";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer'da gösterilecek 5 ana hizmet
  const footerServices = servicesData.slice(0, 5);

  return (
    <footer className="bg-brand-gray text-brand-gray-dark border-t border-gray-250 pt-16 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Kolon 1: AVS Hakkında */}
        <div className="flex flex-col gap-4">
          <Logo light={false} />
          <p className="text-xs text-brand-gray-dark leading-relaxed mt-2">
            AVS Servis, Bartın ve Çaycuma şubelerinde profesyonel ekipmanlar ve tecrübeli usta kadrosuyla tüm araç marka ve modellerinde güvenilir bakım, teşhis ve mekanik onarım çözümleri sunar.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={businessConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href={businessConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Kolon 2: Hızlı Bağlantılar */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal border-l-2 border-brand-red pl-3.5 mb-6">
            Hızlı Bağlantılar
          </h4>
          <ul className="flex flex-col gap-3.5 text-xs">
            <li>
              <Link href="/" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/subelerimiz" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                Şubelerimiz
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                Fotoğraf Galerisi
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200">
                İletişim & Konum
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolon 3: Hizmetlerimiz (Öne Çıkanlar) */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal border-l-2 border-brand-red pl-3.5 mb-6">
            Popüler Hizmetler
          </h4>
          <ul className="flex flex-col gap-3.5 text-xs">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolon 4: İletişim Bilgileri */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal border-l-2 border-brand-red pl-3.5 mb-6">
            İletişim & Ulaşım
          </h4>
          <ul className="flex flex-col gap-4 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-red leading-relaxed"
              >
                {businessConfig.fullAddress}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
              <a href={`tel:${businessConfig.phoneFormatted}`} className="hover:text-brand-red">
                {businessConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
              <a href={`mailto:${businessConfig.email}`} className="hover:text-brand-red">
                {businessConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-brand-gray-dark">
              <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <p>{businessConfig.openingHours.weekdays}</p>
                <p className="mt-0.5">{businessConfig.openingHours.saturday}</p>
                <p className="mt-0.5 text-brand-red">{businessConfig.openingHours.sunday}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Alt-Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-250 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray-dark">
        <p>© {currentYear} {businessConfig.name}. Tüm Hakları Saklıdır.</p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link href="/gizlilik-politikasi" className="hover:text-brand-red transition-colors">
            Gizlilik Politikası
          </Link>
          <Link href="/kvkk" className="hover:text-brand-red transition-colors">
            KVKK Metni
          </Link>
          <Link href="/cerez-politikasi" className="hover:text-brand-red transition-colors">
            Çerez Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
