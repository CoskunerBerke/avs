"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Calendar, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { servicesData } from "@/data/services";
import { businessConfig } from "@/config/business";
import { MobileMenu } from "./MobileMenu";
import { TopBar } from "./TopBar";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sticky header algılaması
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown dışına tıklamayı algılama
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Klavye Escape tuşu ile menüyü kapatma
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Rota değiştiğinde menüleri kapat
  useEffect(() => {
    const timer = setTimeout(() => {
      setDropdownOpen(false);
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <TopBar />
      <header
        className={`w-full z-45 transition-all duration-300 ${
          isSticky
            ? "sticky top-0 bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-border shadow-lg py-3"
            : "relative bg-brand-charcoal border-b border-brand-border/40 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo light={true} />

          {/* Desktop Navigasyon */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-red font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Hizmetlerimiz Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-200 text-gray-300 hover:text-white cursor-pointer ${
                  pathname.startsWith("/hizmetler") ? "text-brand-red font-semibold" : ""
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menü Kartı */}
              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[560px] bg-brand-charcoal border border-brand-border rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-3 z-50 animate-fade-in">
                  <div className="col-span-2 border-b border-brand-border pb-2 mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Servis Çözümlerimiz</span>
                    <Link href="/hizmetler" className="text-[11px] font-bold text-gray-400 hover:text-white underline">
                      Tüm Hizmetler
                    </Link>
                  </div>
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/hizmetler/${service.slug}`}
                      className="group flex flex-col p-2 rounded-lg hover:bg-brand-charcoal-light transition-colors duration-200"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-brand-red transition-colors">
                        {service.title}
                      </span>
                      <span className="text-xs text-brand-gray-dark line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-red font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Masaüstü CTA Butonları */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-brand-border rounded-lg text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-brand-charcoal-light active:scale-95 transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              Yol Tarifi
            </a>
            <Link
              href="/iletisim"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-hover active:scale-95 shadow-md shadow-brand-red/10 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              Randevu Al
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobil Çekmece Menüsü */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
export default Header;
