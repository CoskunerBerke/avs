import React from "react";
import { Cpu, Eye, ShieldAlert, Award } from "lucide-react";

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TrustBar: React.FC = () => {
  const trustPoints: TrustItem[] = [
    {
      icon: <Cpu className="w-6 h-6 text-brand-red" />,
      title: "Profesyonel Arıza Tespit",
      description: "Deneme yanılma yapmadan, gelişmiş bilgisayarlı sistemlerle doğrudan nokta tespiti."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "Şeffaf Servis Süreci",
      description: "İşlem öncesi kapsamlı arıza raporu, fiyat onayı ve aşamalı bilgilendirme."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-red" />,
      title: "Kaliteli Parça Seçenekleri",
      description: "OEM standartlarında onaylı yüksek kaliteli yedek parçalar ve madeni yağ grupları."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-red" />,
      title: "Deneyimli Teknik Yaklaşım",
      description: "Araç üretici kılavuzlarına ve doğru tork değerlerine uygun titiz işçilik."
    }
  ];

  return (
    <section className="bg-brand-charcoal-light py-10 px-6 border-b border-brand-border relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-brand-charcoal border border-brand-border/40 hover:border-brand-border transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-brand-charcoal-light border border-brand-border/50 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-all duration-300">
                {point.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustBar;
