"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { businessConfig } from "@/config/business";
import { servicesData } from "@/data/services";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sayfa kaydırma dinleyicisi (Sticky efekt)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown dışına tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Rota değiştiğinde dropdown ve mobil menüyü kapat
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
    { label: "Şubelerimiz", href: "/subelerimiz" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
  ];

  const bartinBranch = businessConfig.branches.find(b => b.id === "bartin") || businessConfig.branches[0];
  const caycumaBranch = businessConfig.branches.find(b => b.id === "caycuma") || businessConfig.branches[1];

  return (
    <>
      {/* 1. MASAÜSTÜ ÜST BARI (White Top Header - Logo ve İletişim Bilgileri) */}
      <div className="hidden lg:block bg-white border-b border-gray-150 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo light={false} />

          {/* İletişim Bilgileri Grid */}
          <div className="flex items-center gap-8 text-xs text-brand-gray-dark">
            {/* Bartın Şube */}
            <div className="flex items-center gap-3 border-r border-gray-200 pr-8">
              <div className="w-9 h-9 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Bartın Merkez</span>
                <a href={`tel:${bartinBranch.phoneFormatted}`} className="text-sm font-black text-brand-charcoal hover:text-brand-red transition-colors">
                  {bartinBranch.phone}
                </a>
              </div>
            </div>

            {/* Çaycuma Şube */}
            <div className="flex items-center gap-3 border-r border-gray-200 pr-8">
              <div className="w-9 h-9 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Çaycuma Şubesi</span>
                <a href={`tel:${caycumaBranch.phoneFormatted}`} className="text-sm font-black text-brand-charcoal hover:text-brand-red transition-colors">
                  {caycumaBranch.phone}
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Çalışma Saatleri</span>
                <span className="text-xs font-bold text-brand-charcoal">
                  Pzt - Cmt: 09:00 - 18:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MASAÜSTÜ MENÜ BARI (Blue Nav-Bar) veya MOBİL YAPIŞKAN HEADER */}
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isSticky
            ? "sticky top-0 bg-white lg:bg-brand-red border-b border-gray-200 lg:border-brand-red/20 shadow-lg py-3 lg:py-0"
            : "relative bg-white lg:bg-brand-red py-4 lg:py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* MASAÜSTÜ NAVİGASYON (Blue Bar İçeriği) */}
          <div className="hidden lg:flex items-center justify-between h-14">
            <nav className="flex items-center gap-8 font-medium">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide py-4 border-b-2 transition-all duration-200 ${
                    pathname === link.href
                      ? "border-white text-white font-extrabold"
                      : "border-transparent text-blue-100 hover:text-white hover:border-blue-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Hizmetlerimiz Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1.5 text-sm tracking-wide py-4 border-b-2 border-transparent transition-all duration-200 text-blue-100 hover:text-white cursor-pointer ${
                    pathname.startsWith("/hizmetler") ? "border-white text-white font-extrabold" : ""
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

                {/* Dropdown Menü Kartı (Açık Tema) */}
                {dropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[560px] bg-white border border-gray-250 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-3 z-50 animate-fade-in">
                    <div className="col-span-2 border-b border-gray-200 pb-2 mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Servis Çözümlerimiz</span>
                      <Link href="/hizmetler" className="text-[11px] font-bold text-brand-gray-dark hover:text-brand-red underline">
                        Tüm Hizmetler
                      </Link>
                    </div>
                    {servicesData.slice(0, 10).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/hizmetler/${service.slug}`}
                        className="group flex flex-col p-2 rounded-lg hover:bg-brand-gray transition-colors duration-200"
                      >
                        <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-red transition-colors">
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

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide py-4 border-b-2 transition-all duration-200 ${
                    pathname === link.href
                      ? "border-white text-white font-extrabold"
                      : "border-transparent text-blue-100 hover:text-white hover:border-blue-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Sağ Buton: Konuma Git (Açık Tema) */}
            <a
              href="/subelerimiz"
              className="flex items-center gap-2 px-5 py-2 bg-white text-brand-red hover:bg-brand-gray text-xs font-black uppercase tracking-wider rounded-lg shadow-sm active:scale-95 transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5" />
              Konuma Git
            </a>
          </div>

          {/* MOBİL HEADER (Sadece lg altı ekranlar) */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Logo */}
            <Logo light={false} />

            {/* Hamburger Menü Butonu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:bg-brand-gray rounded-lg transition-colors cursor-pointer"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBİL AÇILIR MENÜ BİLEŞENİ */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
export default Header;
