import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CheckCircle2, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "AVS Service & Repair oto servis yaklaşımı, teknik titizlik ve dürüst esnaflık ilkeleri. Bizimle ilgili detaylı bilgi alın.",
};

export default function AboutPage() {
  const breadcrumbItems = [{ label: "Hakkımızda" }];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
      title: "Güven ve Şeffaflık",
      desc: "Müşterilerimizin onayı olmadan hiçbir parça değişimine başlamaz, tüm maliyet kalemlerini işlem öncesinde açıkça paylaşırız."
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-red" />,
      title: "Doğru Teşhis Önceliği",
      desc: "Mekanik hataları deneme-yanılma yoluyla çözmek yerine, gelişmiş arıza tespit donanımlarımızla doğrudan kaynağı saptarız."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-red" />,
      title: "Müşteri Odaklı İletişim",
      desc: "Aracınızın durumunu teknik terimler yerine herkesin anlayabileceği basit ve net bir dille açıklar, eski değişen parçaları size teslim ederiz."
    }
  ];

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
            Biz Kimiz?
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
            AVS Service & Repair otomotiv bakım ve onarım süreçlerinde teknik standartlara sadık kalarak dürüst esnaflık anlayışını bir araya getiren bağımsız özel servistir.
          </p>
        </div>
      </div>

      {/* AVS Yaklaşımı Detay Bölümü */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Metin Alanı */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              Servis Felsefemiz
            </h2>
            <p className="text-sm text-brand-gray-dark leading-relaxed">
              Modern otomobiller, yüksek hassasiyetle çalışan mekanik ve elektronik bileşenlerin birleşimidir. AVS Service & Repair olarak, sıradan bir tamirhaneden farklı olarak araç üretici standartlarına ve tork değerlerine göre hizmet veririz.
            </p>
            <p className="text-sm text-brand-gray-dark leading-relaxed">
              Aracınızı atölyemize kabul ettikten sonra ilk işimiz, sistemlerin elektriksel ve mekanik verilerini gözden geçirmektir. Sorun tespit edildikten sonra hazırladığımız iş planını, parça seçeneklerini ve fiyat teklifini size iletiriz. Onayınız doğrultusunda, tecrübeli teknisyenlerimiz gerekli onarımları hassasiyetle gerçekleştirir. Amacımız, Bartın Merkez’de araç sahiplerinin kafasında soru işareti kalmadan hizmet alabileceği bir özel servis noktası olmaktır.
            </p>
          </div>

          {/* Sağ Alan - Spor Teknik Detay Kutusu */}
          <div className="lg:col-span-5 bg-brand-gray/30 p-8 rounded-2xl border border-gray-100 flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-gray-200 pb-3">
              Çalışma İlkelerimiz
            </h3>
            <ul className="flex flex-col gap-4 text-xs text-brand-gray-dark">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Değiştirilen her parçada OEM standartlarında ve onaylı marka kullanımı.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Teknik prosedürlere, sıkma torklarına ve sıvı dolum kılavuzlarına tam uyum.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Bakım ve onarım sonrası yol güvenlik testleri yapılmadan araç teslim etmeme.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Servis sonrası yapılan işlemlerle ilgili müşteriyi detaylı bilgilendirme.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Değerlerimiz Gridi */}
      <section className="bg-brand-gray/20 py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-brand-charcoal">
              Kurumsal Değerlerimiz
            </h2>
            <p className="text-xs text-brand-gray-dark mt-3 leading-relaxed">
              Aracınızı teslim alırken ve teslim ederken ödün vermediğimiz temel prensiplerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-charcoal flex items-center justify-center text-white">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-brand-charcoal">
                  {val.title}
                </h3>
                <p className="text-xs text-brand-gray-dark leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kapanış Randevu CTA'sı */}
      <ContactCTA />
    </main>
  );
}
