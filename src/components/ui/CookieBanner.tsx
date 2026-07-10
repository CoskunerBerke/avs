"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Çerez izni kontrolü
    const consent = localStorage.getItem("avs_cookie_consent");
    if (!consent) {
      // Sayfa yüklendikten 2 saniye sonra görünsün
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("avs_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("avs_cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-45 bg-brand-charcoal/95 border border-brand-border text-white p-4 rounded-lg shadow-2xl backdrop-blur-md animate-fade-in">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Çerez Kullanımı</h4>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed">
            Web sitemizin temel işlevlerini sağlamak, kullanıcı deneyimini artırmak ve trafiğimizi analiz etmek amacıyla çerezler kullanıyoruz.
          </p>
          <div className="flex items-center gap-2.5 mt-3 flex-wrap">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-brand-red text-white text-[11px] font-bold rounded uppercase hover:bg-brand-red-hover active:scale-95 transition-all cursor-pointer"
            >
              Kabul Et
            </button>
            <button
              onClick={handleReject}
              className="px-3.5 py-1.5 bg-brand-charcoal-card hover:bg-brand-border text-gray-300 text-[11px] font-bold rounded uppercase active:scale-95 transition-all cursor-pointer"
            >
              Reddet
            </button>
            <Link
              href="/cerez-politikasi"
              className="text-[11px] font-semibold text-brand-gray-dark hover:text-white underline ml-1"
            >
              Detaylar
            </Link>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-brand-gray-dark hover:text-white transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
export default CookieBanner;
