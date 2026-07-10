import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { businessConfig } from "@/config/business";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "İletişim & Konum",
  description: "Bartın Merkez Galericiler Sitesi AVS Service & Repair iletişim bilgileri, telefon numarası, WhatsApp randevu hattı ve Google Harita yol tarifi.",
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "İletişim" }];
  
  const encodedMessage = encodeURIComponent(businessConfig.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappFormatted}?text=${encodedMessage}`;

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
            Aracınızın bakım randevusunu oluşturmak, yol tarifi almak veya fiyat bilgisi edinmek için bizimle iletişime geçin.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sol Taraf: İletişim Bilgileri ve Harita */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-brand-charcoal">
                İletişim Koordinatları
              </h2>
              <p className="text-xs text-brand-gray-dark leading-relaxed">
                Atölyemize çalışma saatleri içerisinde doğrudan gelebilir veya aşağıdaki kanallardan bize ulaşarak randevunuzu teyit edebilirsiniz.
              </p>
            </div>

            {/* İletişim Detayları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-brand-gray-dark">
              {/* Adres */}
              <div className="p-4 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-brand-charcoal uppercase tracking-wider">Adres</span>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-red leading-relaxed"
                  >
                    {businessConfig.fullAddress}
                  </a>
                </div>
              </div>

              {/* Telefonlar */}
              <div className="p-4 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-brand-charcoal uppercase tracking-wider">Telefon</span>
                  <a href={`tel:${businessConfig.phoneFormatted}`} className="hover:text-brand-red text-sm font-bold">
                    {businessConfig.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-brand-charcoal uppercase tracking-wider">WhatsApp</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red text-sm font-bold">
                    {businessConfig.whatsapp}
                  </a>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="p-4 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-3">
                <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-brand-charcoal uppercase tracking-wider">Çalışma Saatleri</span>
                  <div className="text-[10px]">
                    <p>{businessConfig.openingHours.weekdays}</p>
                    <p className="mt-0.5">{businessConfig.openingHours.saturday}</p>
                    <p className="mt-0.5 text-brand-red font-semibold">{businessConfig.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Haritası (Iframe) */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 relative">
              <iframe
                title="AVS Service & Repair Google Haritası"
                src={businessConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Sağ Taraf: Randevu Formu */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}
