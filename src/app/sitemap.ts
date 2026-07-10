import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { businessConfig } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || businessConfig.domain;

  // Temel statik sayfalar
  const staticPages = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/galeri",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dinamik hizmet sayfaları
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...servicePages];
}
