import React from "react";
import Link from "next/link";
import { Wrench, Home, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-brand-charcoal text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background carbon texture grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="text-center z-10 max-w-md flex flex-col items-center">
        {/* Hata İkonu */}
        <div className="w-16 h-16 rounded-full bg-brand-charcoal-light border border-brand-border flex items-center justify-center text-brand-red mb-8 animate-bounce">
          <Wrench className="w-8 h-8" />
        </div>

        <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest bg-brand-charcoal border border-brand-border/60 px-2 py-0.5 mb-4">
          Hata 404
        </span>

        <h1 className="text-3xl font-black uppercase tracking-wider text-white">
          Sayfa Yol Dışına Çıktı
        </h1>
        
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Aradığınız sayfa silinmiş, ismi değiştirilmiş veya geçici olarak kullanılamıyor olabilir. Aracınızı ana yola geri döndürelim.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 w-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-hover active:scale-95 transition-all"
          >
            <Home className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
          <a
            href={`tel:${businessConfig.phoneFormatted}`}
            className="flex items-center justify-center gap-2 px-5 py-3 w-full bg-brand-charcoal-light border border-brand-border text-gray-300 hover:text-white rounded-lg active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            Ustaya Sorun
          </a>
        </div>
      </div>
    </main>
  );
}
