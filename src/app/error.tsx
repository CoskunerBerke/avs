"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Hatayı sunucu loglarına veya izleme sistemlerine gönder
    console.error("Uygulama çalışma zamanı hatası:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-brand-charcoal text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background carbon texture grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="text-center z-10 max-w-md flex flex-col items-center">
        {/* Hata İkonu */}
        <div className="w-16 h-16 rounded-full bg-brand-charcoal-light border border-brand-border flex items-center justify-center text-brand-red mb-8 animate-pulse">
          <AlertOctagon className="w-8 h-8" />
        </div>

        <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest bg-brand-charcoal border border-brand-border/60 px-2 py-0.5 mb-4">
          Sistem Hatası
        </span>

        <h1 className="text-3xl font-black uppercase tracking-wider text-white">
          Bir Şeyler Ters Gitti
        </h1>
        
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Sayfa yüklenirken beklenmeyen bir hata ile karşılaşıldı. Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-5 py-3 w-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-hover active:scale-95 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Yeniden Dene
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 w-full bg-brand-charcoal-light border border-brand-border text-gray-300 hover:text-white rounded-lg active:scale-95 transition-all"
          >
            <Home className="w-4 h-4" />
            Ana Sayfa
          </Link>
        </div>
      </div>
    </main>
  );
}
