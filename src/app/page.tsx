import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyAVS from "@/components/home/WhyAVS";
import BrandExpertise from "@/components/home/BrandExpertise";
import ProcessSteps from "@/components/home/ProcessSteps";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";
import JsonLd from "@/components/ui/JsonLd";
import { businessConfig } from "@/config/business";

export default function Home() {
  // LocalBusiness / AutoRepair JSON-LD Yapılandırılmış Verisi
  const autoRepairSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": businessConfig.name,
    "image": `${businessConfig.domain}/images/gallery/workshop.webp`,
    "@id": `${businessConfig.domain}/#organization`,
    "url": businessConfig.domain,
    "telephone": businessConfig.phoneFormatted,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address,
      "addressLocality": businessConfig.district,
      "addressRegion": businessConfig.city,
      "postalCode": businessConfig.zipCode,
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.621743,
      "longitude": 32.316041
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      businessConfig.socialLinks.instagram,
      businessConfig.socialLinks.facebook
    ]
  };

  return (
    <>
      {/* Local SEO için yapılandırılmış veri enjeksiyonu */}
      <JsonLd schema={autoRepairSchema} />

      <main className="min-h-screen bg-white">
        {/* Kahraman Bölümü */}
        <Hero />

        {/* Hızlı Güven Noktaları */}
        <TrustBar />

        {/* 12 Hizmet Kartı Kataloğu */}
        <ServicesGrid />

        {/* Neden AVS / İlkeler ve Yasal Sorumluluk Reddi */}
        <WhyAVS />

        {/* Marka Uzmanlıkları (VW, Audi, vb.) */}
        <BrandExpertise />

        {/* Servis Süreci (4 Adım) */}
        <ProcessSteps />

        {/* Hakkımızda Özet */}
        <AboutPreview />

        {/* Galeri Özet */}
        <GalleryPreview />

        {/* Hızlı İletişim CTA */}
        <ContactCTA />
      </main>
    </>
  );
}
