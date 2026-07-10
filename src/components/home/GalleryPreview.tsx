import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { galleryData } from "@/data/gallery";

export const GalleryPreview: React.FC = () => {
  // İlk 6 galeri öğesini gösterelim
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="bg-brand-gray/30 py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gray border border-gray-200 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 mb-4">
              <span className="skew-x-6">Çalışma Alanımız</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              Atölyemizden Kareler
            </h2>
            <p className="text-xs md:text-sm text-brand-gray-dark mt-2">
              AVS Service & Repair atölyesindeki günlük çalışma ortamımızı ve donanımlarımızı inceleyin.
            </p>
          </div>
          
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-charcoal text-white hover:bg-brand-red text-xs font-bold uppercase tracking-wider rounded-lg active:scale-95 transition-all duration-200 w-fit"
          >
            Tüm Galeriyi Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6'lı Görsel Matrisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              href="/galeri"
              className="group relative h-64 rounded-xl overflow-hidden bg-brand-charcoal border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer"
            >
              {/* Resim Yer Tutucu (Görsel yüklenmezse şık bir degrade) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal via-brand-charcoal-light to-brand-border z-0 flex flex-col items-center justify-center p-4">
                <ImageIcon className="w-8 h-8 text-brand-red opacity-40 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">Görsel Yer Tutucu</span>
              </div>

              {/* Gerçek Görsel */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover z-5 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Koyu Karartma Katmanı */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 z-10 transition-opacity group-hover:opacity-85" />
              
              {/* Altyazı ve Kategori Metinleri */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col">
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest -skew-x-6 w-fit bg-brand-charcoal px-2 py-0.5 border border-brand-border/60 mb-2">
                  <span className="skew-x-6">{item.category}</span>
                </span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-brand-red transition-colors duration-200">
                  {item.caption}
                </h3>
              </div>

              {/* Spor Köşe Çizgisi Süsü */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-brand-red border-r-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
export default GalleryPreview;
