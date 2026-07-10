import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { servicesData } from "@/data/services";
import { ServiceIcon } from "@/components/home/ServicesGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "AVS Service & Repair bünyesindeki oto servis hizmetlerimiz: Periyodik bakım, motor rektifiyesi, DSG kavrama tamiri, fren sistemi ve oto elektrik onarımları.",
};

export default function ServicesPage() {
  const breadcrumbItems = [{ label: "Hizmetlerimiz" }];

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
            Hizmetlerimiz
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Aracınızın güvenliği ve yüksek performansı için Bartın Merkez’de sunduğumuz kapsamlı mekanik, elektronik ve şanzıman servis hizmetlerimiz.
          </p>
        </div>
      </div>

      {/* 12 Hizmet Kartı Kataloğu */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col justify-between p-6 bg-brand-gray/30 border border-gray-100 rounded-xl hover:border-brand-red/20 hover:bg-white hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-300"
            >
              <div>
                {/* Kart İkonu */}
                <div className="w-12 h-12 rounded-lg bg-brand-charcoal flex items-center justify-center text-white group-hover:bg-brand-red transition-all duration-300 shadow-md">
                  <ServiceIcon name={service.icon} className="w-6 h-6" />
                </div>

                {/* Hizmet Başlığı */}
                <h3 className="text-lg font-bold text-brand-charcoal mt-5 group-hover:text-brand-red transition-colors duration-200 uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Kısa Açıklama */}
                <p className="text-xs text-brand-gray-dark mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Detay Butonu */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-red flex items-center gap-1.5 transition-colors"
                >
                  Detaylı İncele
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kapanış Randevu CTA'sı */}
      <ContactCTA />
    </main>
  );
}
