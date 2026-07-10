import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Phone, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Şubelerimiz | Bartın & Çaycuma",
  description: "AVS Servis şubelerimiz: Bartın Merkez Şubesi ve Zonguldak Çaycuma Şubesi iletişim bilgileri, çalışma saatleri, konumları ve yol tarifleri.",
};

export default function BranchesPage() {
  const breadcrumbItems = [{ label: "Şubelerimiz" }];

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
            Şubelerimiz
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Size en yakın AVS Servis noktasını seçerek doğrudan telefonla arayabilir, WhatsApp üzerinden kolayca randevu alabilir veya harita üzerinden yol tarifi alabilirsiniz.
          </p>
        </div>
      </div>

      {/* Şubeler Listesi Izgarası */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {businessConfig.branches.map((branch) => {
            const encodedMessage = encodeURIComponent(`Merhaba, ${branch.name} için randevu almak istiyorum.`);
            const branchWhatsappUrl = `https://wa.me/${branch.whatsappFormatted}?text=${encodedMessage}`;

            return (
              <div 
                key={branch.id}
                className="bg-brand-gray/30 border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Süsleme Çizgisi */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-red opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col gap-6">
                  {/* Şube Adı */}
                  <h3 className="text-xl md:text-2xl font-black uppercase text-brand-charcoal tracking-wide border-b border-gray-200/80 pb-4">
                    {branch.name}
                  </h3>

                  {/* İletişim Detayları */}
                  <div className="flex flex-col gap-4">
                    {/* Adres */}
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Adres</span>
                        <p className="text-xs font-semibold text-brand-charcoal leading-relaxed mt-1">
                          {branch.fullAddress}
                        </p>
                      </div>
                    </div>

                    {/* Telefon */}
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Telefon</span>
                        <a 
                          href={`tel:${branch.phoneFormatted}`} 
                          className="text-xs font-bold text-brand-charcoal hover:text-brand-red mt-1 transition-colors"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex gap-3">
                      <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">WhatsApp</span>
                        <a 
                          href={branchWhatsappUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-bold text-brand-charcoal hover:text-brand-red mt-1 transition-colors"
                        >
                          {branch.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Çalışma Saatleri */}
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray-dark">Çalışma Saatleri</span>
                        <p className="text-xs font-semibold text-brand-charcoal mt-1">
                          {branch.openingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Harita ve Aksiyon Butonları */}
                <div className="flex flex-col gap-6 mt-8 pt-6 border-t border-gray-200/80">
                  {/* Harita Embed */}
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative">
                    <iframe
                      src={branch.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} Konumu`}
                      className="absolute inset-0"
                    />
                  </div>

                  {/* Butonlar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href={`tel:${branch.phoneFormatted}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-hover active:scale-95 transition-all text-center"
                    >
                      <Phone className="w-4 h-4" />
                      Ara
                    </a>

                    <a
                      href={branchWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#1ebd5b] active:scale-95 transition-all text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Randevu
                    </a>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-black active:scale-95 transition-all text-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Yol Tarifi
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* İletişim CTA */}
      <ContactCTA />
    </main>
  );
}
