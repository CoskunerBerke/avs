import React from "react";
import { MessageSquare, Eye, ClipboardList, CheckCircle } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const ProcessSteps: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6 text-brand-red" />,
      title: "Bize Ulaşın",
      desc: "Telefon veya WhatsApp ile randevu alın, şikayetinizi ve gelmek istediğiniz saati bildirin."
    },
    {
      number: "02",
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "Aracınızı İnceleyelim",
      desc: "Belirlenen saatte atölyemize gelin, bilgisayarlı arıza tespit cihazımızla aracınızı analiz edelim."
    },
    {
      number: "03",
      icon: <ClipboardList className="w-6 h-6 text-brand-red" />,
      title: "İşlem Planını Netleştirelim",
      desc: "Değişecek yedek parçaları, yapılacak işçiliği ve net maliyeti onayınıza sunalım."
    },
    {
      number: "04",
      icon: <CheckCircle className="w-6 h-6 text-brand-red" />,
      title: "Bakım ve Onarımı Tamamlayalım",
      desc: "Teknisyenlerimiz işlemi tamamlasın, yol testleri yapılsın ve aracınızı güvenle teslim edelim."
    }
  ];

  return (
    <section className="bg-brand-gray text-brand-charcoal py-20 px-6 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded text-brand-red text-xs font-bold uppercase tracking-widest -skew-x-6 mb-4">
            <span className="skew-x-6">Nasıl Çalışıyoruz?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-brand-charcoal">
            Servis Sürecimiz
          </h2>
          <p className="text-xs md:text-sm text-brand-gray-dark mt-4 leading-relaxed">
            Aracınızın kabulünden teslimat anına kadar tüm süreci organize bir akış içerisinde sürdürüyor, sürpriz maliyetlerin önüne geçiyoruz.
          </p>
        </div>

        {/* 4 Adım Akışı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Bağlantı Çizgisi (Desktop için arka planda yatay çizgi) */}
          <div className="hidden lg:block absolute top-[62px] left-[15%] right-[15%] h-[1px] bg-gray-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white border border-gray-250 rounded-xl relative z-10 hover:border-brand-red/45 transition-colors duration-300 shadow-sm"
            >
              {/* Adım Numarası Balonu */}
              <div className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-black italic shadow-lg shadow-brand-red/20">
                {step.number}
              </div>

              {/* İkon Çerçevesi */}
              <div className="w-14 h-14 rounded-full bg-brand-gray border border-gray-200 flex items-center justify-center shadow-inner mb-6 relative">
                {step.icon}
              </div>

              {/* Adım Başlığı */}
              <h3 className="text-base font-bold uppercase tracking-wide text-brand-charcoal">
                {step.title}
              </h3>

              {/* Adım Açıklaması */}
              <p className="text-xs text-brand-gray-dark mt-3 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default ProcessSteps;
