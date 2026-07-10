import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface WhyPoint {
  title: string;
  desc: string;
}

export const WhyAVS: React.FC = () => {
  const points: WhyPoint[] = [
    {
      title: "Doğru Teşhis Odaklı Yaklaşım",
      desc: "Aracınızdaki arızaları deneme-yanılma yöntemiyle değil, lisanslı arıza tespit sistemlerimizle noktasal olarak saptarız."
    },
    {
      title: "Şeffaf Fiyatlandırma & Bilgilendirme",
      desc: "Bakım veya onarım öncesinde yapılacak tüm işlemleri ve yedek parça maliyetlerini açıklar, onayınızı almadan işleme başlamayız."
    },
    {
      title: "Modern Servis Ekipmanları",
      desc: "Otomobil teknolojilerindeki güncel gelişmeleri takip ederek atölyemizde modern el aletleri ve diagnostik cihazlar bulundururuz."
    },
    {
      title: "Planlı Bakım Yaklaşımı",
      desc: "Aracınızın geçmiş servis kayıtlarını dijital olarak arşivler, bir sonraki bakım döneminde yapılması gerekenleri önceden belirleriz."
    },
    {
      title: "İşlem Öncesi ve Sonrası Açıklama",
      desc: "Değişen eski parçalarınızı size gösterir, yapılan tüm teknik işlemleri anlaşılır bir dille rapor ederiz."
    },
    {
      title: "Etkin Müşteri İletişimi",
      desc: "Sorularınıza WhatsApp veya telefon üzerinden doğrudan teknik muhataplarımızla yanıt bulabilirsiniz."
    }
  ];

  return (
    <section className="bg-brand-charcoal text-white py-20 px-6 border-y border-brand-border relative overflow-hidden">
      {/* Background carbon texture grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon: Tanıtım ve Bağımsızlık Vurgusu */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-charcoal-light border border-brand-border/80 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Neden AVS?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide leading-tight">
              Dürüst Esnaflık, <br className="hidden md:inline"/>
              Modern Teknik İşçilik
            </h2>
            
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              AVS Service & Repair, Bartın’da araç sahiplerinin güvenle anahtar teslim edebileceği, usta tecrübesi ile modern teknolojinin birleştiği bağımsız özel servis noktasıdır. Amacımız, müşterilerimize yetkili servis standartlarında hizmeti, şeffaf esnaf ilkeleriyle sunmaktır.
            </p>

            <div className="p-4 rounded-lg bg-brand-charcoal-light border border-brand-border/60 flex items-start gap-3 mt-2">
              <ShieldCheck className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Yasal Bilgilendirme</h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                  Marka logoları ve isimleri yalnızca servis verilen araç gruplarını belirtmek amacıyla kullanılmaktadır. AVS Service & Repair, bağımsız özel otomotiv servisi olarak hizmet vermektedir.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: 6 Temel İlke Listesi */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-brand-charcoal-light border border-brand-border/40 hover:border-brand-border/80 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded bg-brand-charcoal border border-brand-border flex items-center justify-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-red" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default WhyAVS;
