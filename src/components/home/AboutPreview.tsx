import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Sparkles } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 border-b border-gray-150">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Taraf: Tanıtım Metinleri ve Küçük Değerler Listesi */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gray border border-gray-200 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Biz Kimiz?</span>
            </div>
            
            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              AVS Servis & Onarım
            </h2>
            
            <p className="text-xs md:text-sm text-brand-gray-dark leading-relaxed">
              AVS Servis olarak araç bakım ve onarım sürecinde doğru teşhis, açık iletişim ve titiz işçilik yaklaşımını ön planda tutuyoruz. Sadece arızalı parçayı değiştirmekle kalmıyor, arızanın kök nedenini belirleyerek uzun ömürlü çözümler üretiyoruz.
            </p>
            
            <p className="text-xs text-brand-gray-dark leading-relaxed">
              Volkswagen, Audi, Seat ve Skoda grubu araçlarda şanzıman, mekatronik, motor rektifiyesi ve periyodik bakımlarda teknik standartlara sadık kalarak hizmet veririz. Müşterilerimize sürpriz faturalar çıkarmayan, her adımı şeffaf bir özel servis deneyimi sunmak en temel gayemizdir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <Shield className="w-5 h-5 text-brand-red" />
                <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mt-1">Doğru Teşhis</span>
                <span className="text-[10px] text-brand-gray-dark">Detaylı diagnostik analizler.</span>
              </div>
              <div className="flex flex-col gap-1">
                <Award className="w-5 h-5 text-brand-red" />
                <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mt-1">Hassas İşçilik</span>
                <span className="text-[10px] text-brand-gray-dark">Torklama değerlerine uyum.</span>
              </div>
              <div className="flex flex-col gap-1">
                <Sparkles className="w-5 h-5 text-brand-red" />
                <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mt-1">Açık İletişim</span>
                <span className="text-[10px] text-brand-gray-dark">Şeffaf ve adım adım izah.</span>
              </div>
            </div>
            
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-charcoal text-white hover:bg-brand-red text-xs font-bold uppercase tracking-wider rounded-lg active:scale-95 transition-all duration-200 w-fit mt-4"
            >
              Bizi Yakından Tanıyın
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sağ Taraf: DSG/Şanzıman Mekatronik Onarım Görseli */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/vag_service_dsg.png"
                alt="AVS DSG Mekatronik Revizyon ve Şanzıman Onarım"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">DSG & Şanzıman Revizyonu</span>
                <h4 className="text-xs font-bold uppercase tracking-wider mt-1">Garantili Çift Kavrama, Basınç Tüpü ve Beyin Onarımları</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
