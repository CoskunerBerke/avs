import React from "react";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/services";

// Dinamik Lucide ikonu yükleyici bileşeni
export const ServiceIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconsMap = Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const IconComponent = IconsMap[name];
  if (!IconComponent) return <Wrench className={className} />;
  return <IconComponent className={className} />;
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6" id="hizmetler">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gray border border-gray-200 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 mb-4">
            <span className="skew-x-6">Neler Yapıyoruz?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-brand-charcoal">
            Hizmetlerimiz
          </h2>
          <p className="text-sm md:text-base text-brand-gray-dark mt-4 leading-relaxed">
            Aracınızın periyodik bakımından en karmaşık şanzıman ve motor onarımlarına kadar tüm ihtiyaçlarına özel ekipmanlarla profesyonel çözümler üretiyoruz.
          </p>
        </div>

        {/* 12 Hizmet Kartı Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group relative flex flex-col justify-between p-6 bg-brand-gray/30 border border-gray-100 rounded-xl hover:border-brand-red/20 hover:bg-white hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-300"
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
                <p className="text-xs text-brand-gray-dark mt-3 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>

              {/* Detay Butonu */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-red flex items-center gap-1.5 transition-colors"
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesGrid;
