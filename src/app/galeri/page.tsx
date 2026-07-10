"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryData, galleryCategories } from "@/data/gallery";
import ContactCTA from "@/components/home/ContactCTA";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtrelenmiş galeri elemanları
  const filteredItems = selectedCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [lightboxIndex, filteredItems.length]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Klavye olay dinleyicileri (Lightbox için)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const breadcrumbItems = [{ label: "Galeri" }];

  return (
    <main className="bg-white min-h-screen">
      {/* Sayfa Üst Bölümü (Header) */}
      <div className="bg-brand-charcoal py-16 px-6 relative border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0" />
        <div className="max-w-7xl mx-auto z-10 relative flex flex-col gap-4">
          <div className="w-fit">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white mt-4">
            Fotoğraf Galerisi
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Atölyemizden çalışma anları, arıza tespit uygulamaları, mekanik servis süreçlerimiz ve servis ortamımızın gerçek kareleri.
          </p>
        </div>
      </div>

      {/* Kategori Filtre Butonları */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-6">
          {galleryCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/10"
                  : "bg-brand-gray/60 hover:bg-brand-gray text-brand-charcoal hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Galeri Izgarası */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-brand-gray-dark text-xs uppercase tracking-widest">
            Bu kategoride henüz görsel bulunmuyor.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 rounded-xl overflow-hidden bg-brand-charcoal border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer"
              >
                {/* Resim Yer Tutucu (Degrade + İkon) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal via-brand-charcoal-light to-brand-border z-0 flex flex-col items-center justify-center p-4">
                  <ImageIcon className="w-8 h-8 text-brand-red opacity-40 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">Görsel Yer Tutucu</span>
                </div>
                
                {/* Karartma Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-75 z-10 transition-opacity group-hover:opacity-85" />
                
                {/* Metin Bilgileri */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col">
                  <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest -skew-x-6 w-fit bg-brand-charcoal px-2 py-0.5 border border-brand-border/60 mb-2">
                    <span className="skew-x-6">
                      {galleryCategories.find((c) => c.value === item.category)?.label || item.category}
                    </span>
                  </span>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-brand-red transition-colors duration-200">
                    {item.caption}
                  </h3>
                </div>

                {/* Köşe Süsü */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-brand-red border-r-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6">
          {/* Üst Bar */}
          <div className="flex items-center justify-between text-white border-b border-brand-border/50 pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest -skew-x-6 w-fit bg-brand-charcoal border border-brand-border/60 px-2 py-0.5">
                <span className="skew-x-6">
                  {galleryCategories.find((c) => c.value === filteredItems[lightboxIndex].category)?.label || filteredItems[lightboxIndex].category}
                </span>
              </span>
              <span className="text-xs text-gray-400 mt-1">
                Görsel {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 border border-brand-border text-gray-300 hover:text-white rounded-lg hover:bg-brand-charcoal-light transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Orta Kısım (Resim ve Yön Okları) */}
          <div className="flex-1 flex items-center justify-between gap-4 py-8">
            {/* Sol Ok */}
            <button
              onClick={prevImage}
              className="p-3 border border-brand-border text-gray-300 hover:text-white rounded-lg bg-brand-charcoal/40 hover:bg-brand-charcoal active:scale-90 transition-all cursor-pointer"
              aria-label="Önceki Görsel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Büyük Görsel Çerçevesi (Yer Tutucu olarak) */}
            <div className="max-w-4xl w-full h-[60vh] bg-gradient-to-tr from-brand-charcoal via-brand-charcoal-light to-brand-border border border-brand-border rounded-xl flex flex-col items-center justify-center p-6 text-center select-none shadow-2xl relative">
              <ImageIcon className="w-16 h-16 text-brand-red opacity-30 mb-4" />
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Görsel Yer Tutucu
              </p>
              <p className="text-base font-extrabold uppercase text-white tracking-wider mt-4">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-brand-gray-dark max-w-sm mt-2 leading-relaxed">
                Bu görsel yeri {filteredItems[lightboxIndex].src} dosyasını ekleyerek kolayca güncellenebilir.
              </p>
            </div>

            {/* Sağ Ok */}
            <button
              onClick={nextImage}
              className="p-3 border border-brand-border text-gray-300 hover:text-white rounded-lg bg-brand-charcoal/40 hover:bg-brand-charcoal active:scale-90 transition-all cursor-pointer"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Alt Kısım */}
          <div className="text-center text-xs text-gray-400 py-2 border-t border-brand-border/40">
            Kapatmak için <kbd className="px-1.5 py-0.5 bg-brand-charcoal-light border border-brand-border rounded text-[10px]">ESC</kbd> tuşuna, gezinmek için <kbd className="px-1.5 py-0.5 bg-brand-charcoal-light border border-brand-border rounded text-[10px]">Sol</kbd>/<kbd className="px-1.5 py-0.5 bg-brand-charcoal-light border border-brand-border rounded text-[10px]">Sağ</kbd> ok tuşlarına basabilirsiniz.
          </div>
        </div>
      )}

      {/* Kapanış Randevu CTA'sı */}
      <ContactCTA />
    </main>
  );
}
