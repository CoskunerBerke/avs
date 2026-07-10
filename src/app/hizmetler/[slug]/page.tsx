import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { servicesData } from "@/data/services";
import { ServiceIcon } from "@/components/home/ServicesGrid";
import ContactCTA from "@/components/home/ContactCTA";
import JsonLd from "@/components/ui/JsonLd";
import { businessConfig } from "@/config/business";

type Props = {
  params: Promise<{ slug: string }>;
};

// Statik Rotaların Derleme Sırasında Üretilmesi (SSG)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dinamik SEO Metadata Üretimi
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/hizmetler/${service.slug}`,
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Benzer diğer 3 hizmeti seçme
  const relatedServices = servicesData
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  // SEO için Service Schema Yapılandırılmış Verisi
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "AutoRepair",
      "name": businessConfig.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessConfig.address,
        "addressLocality": businessConfig.district,
        "addressRegion": businessConfig.city,
        "postalCode": businessConfig.zipCode,
        "addressCountry": "TR"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": businessConfig.city
    },
    "description": service.shortDescription
  };

  const breadcrumbItems = [
    { label: "Hizmetler", href: "/hizmetler" },
    { label: service.title }
  ];

  return (
    <>
      {/* Yapılandırılmış Veri Enjeksiyonu */}
      <JsonLd schema={serviceSchema} />

      <main className="bg-white min-h-screen">
        {/* Hizmet Üst Kahraman Bölümü */}
        <div className="bg-brand-charcoal py-16 px-6 relative border-b border-brand-border">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0" />
          <div className="max-w-7xl mx-auto z-10 relative flex flex-col gap-4">
            <div className="w-fit">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="w-14 h-14 rounded-xl bg-brand-charcoal-light border border-brand-border flex items-center justify-center text-brand-red">
                <ServiceIcon name={service.icon} className="w-8 h-8" />
              </div>
              <h1 className="text-2xl md:text-4xl font-black uppercase text-white tracking-wide">
                {service.title}
              </h1>
            </div>
            
            <p className="text-xs md:text-sm text-gray-400 max-w-3xl leading-relaxed mt-2">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Hizmet İçerik Detayları */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sol Kolon: Detaylar, Kontrol Listesi ve Felsefe */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Detay Açıklama */}
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-brand-charcoal mb-4">
                  Hizmet Detayları
                </h2>
                <p className="text-sm text-brand-gray-dark leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Kontrol Listesi */}
              <div className="p-6 bg-brand-gray/30 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mb-4">
                  Neler Kontrol Edilir?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-brand-gray-dark">
                  {service.checkList.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Neden Profesyonel Teşhis? */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-brand-charcoal mb-3">
                  Neden Profesyonel Diagnostik Gereklidir?
                </h3>
                <p className="text-xs md:text-sm text-brand-gray-dark leading-relaxed">
                  Modern araçların mekanik sistemleri tamamen sensörler ve valf gövdeleriyle kontrol edilir. Örneğin, şanzıman kaçırması veya turbo basınç kaybı elektriksel bir kablo kopukluğundan kaynaklanıyor olabilir. Doğru teşhis yapılmadan parçaların doğrudan değiştirilmesi gereksiz masraflara yol açar. AVS olarak, önce arızanın kaynağını netleştirir, ardından onarıma başlarız.
                </p>
              </div>
            </div>

            {/* Sağ Kolon: Belirtiler ve Uygulama Süreci */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Sık Karşılaşılan Belirtiler */}
              <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100/50 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-brand-red" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
                    Sık Karşılaşılan Belirtiler
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-xs text-brand-gray-dark">
                  {service.symptoms.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0 mt-1.5" />
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Uygulama Süreci */}
              <div className="p-6 bg-brand-charcoal text-white rounded-2xl border border-brand-border flex flex-col gap-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-brand-border pb-3">
                  Uygulama Sürecimiz
                </h3>
                <ol className="flex flex-col gap-4 text-xs text-gray-300">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-red text-[10px] font-black italic flex-shrink-0 text-white mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </section>

        {/* SSS Sıkça Sorulan Sorular */}
        <section className="bg-brand-gray/20 py-20 px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-brand-charcoal">
                Sıkça Sorulan Sorular
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-xl border border-gray-100 shadow-xs flex gap-3.5">
                  <HelpCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-charcoal uppercase tracking-wide">
                      {item.question}
                    </h4>
                    <p className="text-xs text-brand-gray-dark mt-2 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benzer Diğer Hizmetler */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              Diğer Servis Hizmetlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                className="group p-5 bg-brand-gray/30 border border-gray-100 rounded-xl hover:border-brand-red/20 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center text-white group-hover:bg-brand-red transition-all duration-300">
                    <ServiceIcon name={rel.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-charcoal mt-4 group-hover:text-brand-red transition-colors duration-200 uppercase tracking-wide">
                    {rel.title}
                  </h3>
                  <p className="text-[11px] text-brand-gray-dark mt-2 leading-relaxed line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href={`/hizmetler/${rel.slug}`}
                    className="text-[11px] font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-red flex items-center gap-1 transition-colors"
                  >
                    Detaylar
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kapanış Randevu CTA'sı */}
        <ContactCTA />
      </main>
    </>
  );
}
