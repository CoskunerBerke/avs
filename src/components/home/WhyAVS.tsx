import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface WhyPoint {
  title: string;
  desc: string;
}

export const WhyAVS: React.FC = () => {
  const points: WhyPoint[] = [
    {
      title: "Teknoloji Odaklı Arıza Teşhisi",
      desc: "VAG Grubu lisanslı arıza tespit donanımlarımız sayesinde deneme-yanılma yapmadan sorunu doğrudan saptarız."
    },
    {
      title: "Üretici Standartlarında Onarım",
      desc: "Her mekanik montajda üreticinin belirlediği tork değerlerine (sıkma torklarına) ve prosedürlerine sadık kalırız."
    },
    {
      title: "Doğru Esnaflık ve Şeffaflık",
      desc: "Müşterimizin onayı olmadan hiçbir parça değişimine başlamaz, eski değişen parçaları müşterimize teslim ederiz."
    },
    {
      title: "Uzman Şanzıman Çözümleri",
      desc: "DSG kavrama, mekatronik ve şanzıman beyin revizyonlarını garantili işçilik ve orijinal yedek parçayla sunarız."
    }
  ];

  return (
    <section className="bg-white text-brand-charcoal py-20 px-6 border-b border-gray-200 relative overflow-hidden" id="neden-biz">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon: Tanıtım, İlkeler ve Nitelikler */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Neden AVS?</span>
            </div>
            
            <h2 className="text-2xl md:text-3.5xl font-black uppercase tracking-wide leading-tight text-brand-charcoal">
              Teknoloji ile Tecrübeyi <br />
              Tek Çatı Altında Buluşturuyoruz
            </h2>
            
            <p className="text-xs md:text-sm text-brand-gray-dark leading-relaxed">
              AVS Servis, Bartın ve Çaycuma şubelerimizle modern otomobillerin elektriksel ve mekanik tüm bileşenlerinde yetkili servis standartlarında bağımsız özel hizmet sunar. Deneyimli kadromuz ve gelişmiş servis ekipmanlarımızla aracınız emin ellerde.
            </p>

            {/* 4 İlkeli Liste */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">{point.title}</h4>
                    <p className="text-[11px] text-brand-gray-dark leading-relaxed mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Yasal Bilgilendirme Kutusu */}
            <div className="p-4 rounded-xl bg-brand-gray border border-gray-200 flex items-start gap-3 mt-4">
              <ShieldCheck className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Yasal Bilgilendirme</h4>
                <p className="text-[10px] text-brand-gray-dark mt-1 leading-relaxed">
                  Marka logoları ve isimleri yalnızca servis verilen araç gruplarını belirtmek amacıyla kullanılmaktadır. AVS Servis, bağımsız özel otomotiv servisi olarak hizmet vermektedir.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Büyük Gerçek Atölye Görseli */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/avs_workshop_3.jpg"
                alt="AVS Özel Servis Atölyesi ve Mekanik Bakım"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Resim Altı Detay Katmanı */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Mekanik Onarım & Lifler</span>
                <h4 className="text-xs font-bold uppercase tracking-wider mt-1">Geniş ve Modern Atölyemizde Aynı Anda Çoklu Araç Servis Desteği</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default WhyAVS;
