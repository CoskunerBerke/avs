import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eye } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "AVS Service & Repair web sitesi çerez (cookie) kullanım ilkeleri ve bilgilendirme metni.",
};

export default function CookiePolicyPage() {
  const breadcrumbItems = [{ label: "Çerez Politikası" }];

  return (
    <main className="bg-white min-h-screen">
      {/* Sayfa Üst Bölümü */}
      <div className="bg-brand-charcoal py-12 px-6 relative border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0" />
        <div className="max-w-7xl mx-auto z-10 relative flex flex-col gap-3">
          <div className="w-fit">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <h1 className="text-2xl md:text-4xl font-black uppercase text-white mt-2 flex items-center gap-3">
            <Eye className="w-6 h-6 text-brand-red" />
            Çerez Politikası
          </h1>
        </div>
      </div>

      {/* Çerez Politikası İçeriği */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-xs md:text-sm text-brand-gray-dark leading-relaxed flex flex-col gap-6">
        <p className="text-brand-charcoal font-semibold">
          Son güncelleme: 10 Temmuz 2026
        </p>

        <p>
          {businessConfig.legalName} olarak, web sitemizin ({businessConfig.domain}) ziyaretçilerinin kullanıcı deneyimlerini en üst seviyeye çıkarmak ve site performansını optimize etmek amacıyla çerezler (cookies) kullanıyoruz. Bu metin, çerezlerin ne olduğunu, hangilerini kullandığımızı ve bunları nasıl kontrol edebileceğinizi açıklamaktadır.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          1. Çerez (Cookie) Nedir?
        </h2>
        <p>
          Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, akıllı telefon veya tablet) kaydedilen küçük metin dosyalarıdır. Sitemizi tekrar ziyaret ettiğinizde, tarayıcınız bu çerezleri okuyarak sizi tanır ve web sayfasının size daha optimize sunulmasını sağlar.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          2. Web Sitemizde Hangi Çerezleri Kullanıyoruz?
        </h2>
        <p>
          Web sitemizde yalnızca sitenin çalışması için zorunlu olan ve gizlilik tercihlerinizi kaydeden temel çerezleri kullanıyoruz:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>
            <strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarını (sayfalar arası geçiş, güvenli alan erişimleri) sağlayan çerezlerdir. Bunlar devre dışı bırakıldığında web sitesi beklendiği gibi çalışmayabilir.
          </li>
          <li>
            <strong>Tercih Çerezleri (localStorage):</strong> Sitemizi ziyaret ettiğinizde çerez uyarı banner’ını onaylayıp onaylamadığınızı kaydetmek amacıyla <code>avs_cookie_consent</code> parametresi altında yerel tarayıcı hafızanızı kullanırız. Bu sayede her sayfada çerez uyarısını tekrar görmek zorunda kalmazsınız.
          </li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          3. Çerezleri Nasıl Kontrol Edebilir veya Silebilirsiniz?
        </h2>
        <p>
          Çerezleri kabul etmek web sitemizin en iyi şekilde görüntülenmesini sağlar, ancak dilerseniz tarayıcı ayarlarınız üzerinden çerez kullanımını tamamen engelleyebilir veya kaydedilmiş çerezleri silebilirsiniz. Tarayıcı üreticilerinin çerez yönetimi kılavuzlarına aşağıdaki linklerden ulaşabilirsiniz:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">Google Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">Mozilla Firefox</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-%C3%A7erezleri-silme-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">Microsoft Edge</a>
          </li>
          <li>
            <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">Apple Safari</a>
          </li>
        </ul>
        <p className="mt-2">
          Çerezleri silmeniz veya devre dışı bırakmanız durumunda, web sitemizin bazı fonksiyonlarının ve kullanıcı tercihlerinin sıfırlanabileceğini lütfen göz önünde bulundurunuz.
        </p>
      </section>
    </main>
  );
}
