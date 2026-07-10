import React from "react";
import { Info } from "lucide-react";

export const BrandExpertise: React.FC = () => {
  const brands = [
    { name: "VOLKSWAGEN", desc: "Binek & Ticari Araç Çözümleri" },
    { name: "AUDI", desc: "Premium Servis & Diagnostik Hizmeti" },
    { name: "SEAT", desc: "Mekanik ve Periyodik Bakım" },
    { name: "SKODA", desc: "Kapsamlı Onarım ve Elektrik Servisi" },
    { name: "PORSCHE", desc: "Uzman Diagnostik ve Genel Kontrol" }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Bölümü */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gray border border-gray-200 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 mb-4">
            <span className="skew-x-6">Araç Gruplarımız</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-brand-charcoal">
            Uzmanlık Alanı Araçlar
          </h2>
          <p className="text-sm md:text-base text-brand-gray-dark mt-4 leading-relaxed">
            Özellikle Alman grubu (VAG) binek araçların tüm periyodik bakım, arıza tespit, mekatronik onarım ve elektrik-elektronik ihtiyaçlarında derin bir birikime sahibiz.
          </p>
        </div>

        {/* Metin Tabanlı Premium Marka Listesi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-brand-gray/40 border border-gray-250 rounded-xl text-center hover:bg-brand-red hover:text-white transition-all duration-300 group"
            >
              <span className="text-lg md:text-xl font-black tracking-widest text-brand-charcoal group-hover:text-brand-red transition-colors duration-200">
                {brand.name}
              </span>
              <span className="text-[10px] font-semibold text-brand-gray-dark group-hover:text-gray-400 mt-2 transition-colors duration-200">
                {brand.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Zorunlu Yasal Uyarı Paneli */}
        <div className="max-w-4xl mx-auto mt-12 p-4 bg-brand-gray/50 rounded-lg border border-gray-100 flex gap-3.5 items-start">
          <Info className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
          <p className="text-xs text-brand-gray-dark leading-relaxed">
            <strong className="text-brand-charcoal">Önemli Bilgilendirme:</strong> Marka adları yalnızca servis verilen araç gruplarını belirtmek amacıyla kullanılmaktadır. AVS Service & Repair, bağımsız özel servis olarak faaliyet gösterir. Belirtilen araç markalarının resmi yetkili servisi veya distribütörü değildir.
          </p>
        </div>

      </div>
    </section>
  );
};
export default BrandExpertise;
