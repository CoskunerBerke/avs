import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Shield } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "AVS Service & Repair web sitesi gizlilik sözleşmesi ve kişisel veri saklama koşulları.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: "Gizlilik Politikası" }];

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
            <Shield className="w-6 h-6 text-brand-red" />
            Gizlilik Politikası
          </h1>
        </div>
      </div>

      {/* Politika İçeriği */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-xs md:text-sm text-brand-gray-dark leading-relaxed flex flex-col gap-6">
        <p className="text-brand-charcoal font-semibold">
          Son güncelleme: 10 Temmuz 2026
        </p>

        <p>
          {businessConfig.legalName} olarak, web sitemizi ziyaret eden kullanıcılarımızın kişisel verilerinin güvenliğine büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemiz ({businessConfig.domain}) üzerinden topladığımız bilgileri ve bunları nasıl kullandığımızı açıklamaktadır.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          1. Hangi Verileri Topluyoruz?
        </h2>
        <p>
          Sitemizdeki randevu ve iletişim formunu doldurduğunuzda aşağıdaki kişisel verilerinizi toplarız:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>Adınız ve soyadınız</li>
          <li>Telefon numaranız</li>
          <li>E-posta adresiniz (isteğe bağlı)</li>
          <li>Araç marka ve model detaylarınız</li>
          <li>Talep ettiğiniz servis veya bakım hizmeti türü</li>
          <li>Mesaj alanına yazdığınız ek bilgiler</li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          2. Verileri Hangi Amaçla Kullanıyoruz?
        </h2>
        <p>
          Topladığımız kişisel verileri yalnızca aşağıdaki amaçlarla kullanırız:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>Aracınız için talep ettiğiniz periyodik bakım veya onarım randevusunu onaylamak ve takvim oluşturmak.</li>
          <li>Servis süreci, yedek parça temini ve maliyet kalemleriyle ilgili sizi bilgilendirmek amacıyla telefon veya WhatsApp üzerinden iletişime geçmek.</li>
          <li>Sorularınıza ve bilgi taleplerinize doğrudan teknik ekibimiz aracılığıyla yanıt vermek.</li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          3. Verilerin Üçüncü Şahıslarla Paylaşılması
        </h2>
        <p>
          Kişisel verileriniz hiçbir şart altında ticari amaçlarla üçüncü şahıslara satılmaz, kiralanmaz veya dağıtılmaz. Verileriniz, yalnızca yasal zorunluluk hallerinde ve yetkili kamu mercilerinin resmi talebi durumunda kanuni sınırlar dahilinde paylaşılabilecektir.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          4. Veri Güvenliği
        </h2>
        <p>
          Web sitemiz üzerinden ilettiğiniz bilgiler şifrelenmiş SSL (Secure Socket Layer) bağlantısı kullanılarak sunucularımıza aktarılır. Veritabanlarımız yetkisiz erişime karşı gerekli yazılımsal güvenlik önlemleriyle korunmaktadır.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          5. Haklarınız ve Bizimle İletişim
        </h2>
        <p>
          Kişisel verilerinizin silinmesini, güncellenmesini veya hangi verilerinizin tutulduğunun sorgulanmasını talep etme hakkına sahipsiniz. Bu talepleriniz veya gizlilikle ilgili sorularınız için doğrudan <a href={`mailto:${businessConfig.email}`} className="text-brand-red font-semibold">{businessConfig.email}</a> adresi üzerinden bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </main>
  );
}
