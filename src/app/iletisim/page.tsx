import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { businessConfig } from "@/config/business";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "İletişim & Konum | Bartın & Çaycuma Şubelerimiz",
  description: "AVS Servis şubelerimiz: Bartın Merkez Galericiler Sitesi ve Zonguldak Çaycuma iletişim bilgileri, telefon numaraları, WhatsApp randevu hatları ve Google Harita yol tarifleri.",
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "İletişim" }];
  
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
            İletişim & Ulaşım
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Aracınızın bakım randevusunu oluşturmak, yol tarifi almak veya arızalar hakkında fiyat bilgisi edinmek için bizimle iletişime geçin.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sol Taraf: Şubelerimizin İletişim Bilgileri */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-black uppercase tracking-wide text-brand-charcoal">
                Şube İletişim Koordinatları
              </h2>
              <p className="text-xs text-brand-gray-dark leading-relaxed">
                İlgili şubemize çalışma saatleri içerisinde doğrudan gelebilir veya aşağıdaki kanallardan bize ulaşarak randevunuzu teyit edebilirsiniz.
              </p>
            </div>

            {/* Şubeler Kartları */}
            <div className="flex flex-col gap-8">
              {businessConfig.branches.map((branch) => {
                const encodedMessage = encodeURIComponent(`Merhaba, ${branch.name} için bilgi almak istiyorum.`);
                const whatsappUrl = `https://wa.me/${branch.whatsappFormatted}?text=${encodedMessage}`;

                return (
                  <div 
                    key={branch.id}
                    className="p-6 bg-brand-gray/30 border border-gray-100 rounded-2xl flex flex-col gap-6"
                  >
                    <h3 className="text-lg font-black uppercase tracking-wider text-brand-charcoal border-b border-gray-200 pb-3 flex items-center justify-between">
                      <span>{branch.name}</span>
                      <span className="text-[9px] font-bold tracking-widest text-brand-red bg-white px-2 py-0.5 rounded border border-gray-200">
                        {branch.id === "bartin" ? "MERKEZ" : "ŞUBE"}
                      </span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-brand-gray-dark">
                      {/* Adres */}
                      <div className="flex gap-2.5">
                        <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">Adres</span>
                          <a
                            href={branch.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-red leading-relaxed"
                          >
                            {branch.fullAddress}
                          </a>
                        </div>
                      </div>

                      {/* Telefon */}
                      <div className="flex gap-2.5">
                        <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">Telefon</span>
                          <a href={`tel:${branch.phoneFormatted}`} className="hover:text-brand-red text-sm font-bold text-brand-charcoal">
                            {branch.phone}
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex gap-2.5">
                        <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">WhatsApp</span>
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red text-sm font-bold text-brand-charcoal">
                            {branch.whatsapp}
                          </a>
                        </div>
                      </div>

                      {/* Çalışma Saatleri */}
                      <div className="flex gap-2.5">
                        <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">Çalışma Saatleri</span>
                          <p className="mt-0.5">{branch.openingHours}</p>
                        </div>
                      </div>
                    </div>

                    {/* Google Harita Iframe */}
                    <div className="w-full h-44 rounded-xl overflow-hidden border border-gray-200 relative">
                      <iframe
                        title={`${branch.name} Google Haritası`}
                        src={branch.googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sağ Taraf: Randevu Formu */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 border border-gray-100 rounded-2xl shadow-lg shadow-brand-charcoal/5">
            <h3 className="text-xl font-black uppercase tracking-wide text-brand-charcoal mb-4">
              Online Randevu & Teklif
            </h3>
            <p className="text-xs text-brand-gray-dark leading-relaxed mb-6">
              Aşağıdaki formu doldurarak tercih ettiğiniz şubeden hızlıca servis randevusu veya işçilik fiyat teklifi talep edebilirsiniz.
            </p>
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}
