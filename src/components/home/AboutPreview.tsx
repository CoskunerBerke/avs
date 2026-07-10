import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Award, Sparkles } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Taraf: Tanıtım Metinleri */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gray border border-gray-200 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Biz Kimiz?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              AVS Service & Repair
            </h2>
            
            <p className="text-sm md:text-base text-brand-gray-dark leading-relaxed">
              AVS Service & Repair olarak araç bakım ve onarım sürecinde doğru teşhis, açık iletişim ve titiz işçilik yaklaşımını ön planda tutuyoruz. Sadece arızalı parçayı değiştirmekle kalmıyor, arızanın kök nedenini belirleyerek uzun ömürlü çözümler üretiyoruz.
            </p>
            
            <p className="text-xs md:text-sm text-brand-gray-dark leading-relaxed">
              Her marka ve model aracın kendine has standartları olduğunun farkındayız. Bu nedenle, üretici kılavuzlarına sıkı sıkıya bağlı kalıyor, her cıvatayı doğru tork değerleriyle sıkıyor ve sıvı seviyelerini milimetrik olarak ayarlıyoruz. Araç sahiplerine sürpriz faturalar çıkarmayan, her adımı şeffaf bir özel servis deneyimi sunmak en temel gayemizdir.
            </p>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-charcoal text-white hover:bg-brand-red text-xs font-bold uppercase tracking-wider rounded-lg active:scale-95 transition-all duration-200 w-fit mt-2"
            >
              Bizi Yakından Tanıyın
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sağ Taraf: Değerlerimiz Kartları */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center text-white flex-shrink-0">
                <Shield className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Doğru Teşhis Önceliği</h3>
                <p className="text-xs text-brand-gray-dark mt-1.5 leading-relaxed">
                  Deneme-yanılma maliyetlerini ortadan kaldıran bilgisayarlı diagnostik analizler.
                </p>
              </div>
            </div>

            <div className="p-5 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center text-white flex-shrink-0">
                <Award className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Hassas İşçilik Standartları</h3>
                <p className="text-xs text-brand-gray-dark mt-1.5 leading-relaxed">
                  Üretici standartlarında, torklama değerlerine uygun güvenli montaj süreçleri.
                </p>
              </div>
            </div>

            <div className="p-5 bg-brand-gray/30 border border-gray-100 rounded-xl flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center text-white flex-shrink-0">
                <Sparkles className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Açık İletişim İlkesi</h3>
                <p className="text-xs text-brand-gray-dark mt-1.5 leading-relaxed">
                  Yapılacak işlemleri ve maliyet kalemlerini adım adım izah eden şeffaf hizmet.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
