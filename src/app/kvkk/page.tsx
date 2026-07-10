import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FileText } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "AVS Service & Repair 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni.",
};

export default function KvkkPage() {
  const breadcrumbItems = [{ label: "KVKK Aydınlatma Metni" }];

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
            <FileText className="w-6 h-6 text-brand-red" />
            KVKK Aydınlatma Metni
          </h1>
        </div>
      </div>

      {/* KVKK İçeriği */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-xs md:text-sm text-brand-gray-dark leading-relaxed flex flex-col gap-6">
        <p className="text-brand-charcoal font-semibold">
          6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) Uyarınca Aydınlatma Metni
        </p>

        <p>
          {businessConfig.legalName} (“AVS Service & Repair” veya “Şirket”) olarak, müşterilerimiz ve web sitemizi ziyaret eden tüm şahıslara ait kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu’na uygun olarak işlenmesine ve korunmasına azami hassasiyet göstermekteyiz.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          1. Veri Sorumlusu
        </h2>
        <p>
          KVKK uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla {businessConfig.legalName} tarafından aşağıda açıklanan kapsamda işlenecektir. <br/>
          <strong>Adres:</strong> {businessConfig.fullAddress}
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          2. Kişisel Verilerin İşlenme Amacı
        </h2>
        <p>
          Toplanan kişisel verileriniz (Ad soyad, telefon numarası, e-posta, araç plakası veya model bilgisi);
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>Servis ve bakım taleplerinizin kayda alınması ve takvim planlaması,</li>
          <li>Randevu onayının verilmesi ve araç kabul hazırlıklarının yapılması,</li>
          <li>Bakım/onarım sürecindeki yedek parça, işçilik bedelleri ve ek arızalar hakkında sizden onay alınması,</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi ve faturalandırma süreçlerinin yönetilmesi</li>
        </ul>
        <p>
          amaçlarıyla, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenmektedir.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          3. İşlenen Kişisel Verilerin Aktarılması
        </h2>
        <p>
          Kişisel verileriniz, herhangi bir ticari amaçla üçüncü taraf kişi veya kurumlarla paylaşılmaz. Yalnızca yasal zorunluluklar kapsamında; vergi daireleri, yargı mercileri ve ilgili emniyet birimleri gibi kanunen yetkili kılınmış kamu kurum ve kuruluşları ile yasal çerçevede paylaşılabilecektir.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
        </h2>
        <p>
          Kişisel verileriniz, web sitemizdeki iletişim ve randevu formu, telefon görüşmeleri veya fiziki olarak atölyemize geldiğinizde araç teslim kartları aracılığıyla tamamen veya kısmen otomatik yollarla toplanmaktadır. Bu veriler, “sözleşmenin kurulması ve ifası”, “veri sorumlusunun hukuki yükümlülüğü” ve “açık rızanızın varlığı” hukuki sebeplerine dayanılarak işlenmektedir.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal mt-4 border-l-2 border-brand-red pl-2.5">
          5. KVKK Madde 11 Uyarınca Haklarınız
        </h2>
        <p>
          Dilediğiniz zaman veri sorumlusu olan şirketimize başvurarak kendinizle ilgili aşağıdaki hakları kullanabilirsiniz:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
          <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Kişisel verilerinizin düzeltilmesini veya silinmesini isteme,</li>
          <li>İşlenen verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için, kimliğinizi teyit eden belgelerle birlikte talebinizi içeren yazılı bir dilekçeyi yukarıda belirtilen fiziki adresimize elden teslim edebilir veya <a href={`mailto:${businessConfig.email}`} className="text-brand-red font-semibold">{businessConfig.email}</a> e-posta adresimize gönderebilirsiniz.
        </p>
      </section>
    </main>
  );
}
