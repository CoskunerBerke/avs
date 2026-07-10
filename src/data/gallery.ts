import { GalleryItem } from "@/types";

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/avs_workshop_1.png",
    alt: "AVS Servis Dış Cephe",
    category: "workshop",
    caption: "AVS Servis Dış Görünüm ve Araç Kabul Alanı"
  },
  {
    id: "g2",
    src: "/images/avs_workshop_2.png",
    alt: "AVS Atölye İçi ve Lifler",
    category: "workshop",
    caption: "AVS Servis Atölye İçi ve Genel Çalışma Alanı"
  },
  {
    id: "g3",
    src: "/images/avs_workshop_3.jpg",
    alt: "AVS Mekanik Servis ve Bakım",
    category: "maintenance",
    caption: "Lif Üzerinde Mekanik Onarım ve Detaylı Teşhis Süreçleri"
  },
  {
    id: "g4",
    src: "/images/avs_workshop_4.png",
    alt: "AVS Şanzıman ve Genel Onarım",
    category: "engine",
    caption: "DSG/Şanzıman ve Genel Motor Mekanik Çalışmaları"
  },
  {
    id: "g5",
    src: "/images/vag_service_diagnostic.png",
    alt: "Ön Takım ve Yürüyen Aksam Muayenesi",
    category: "inspection",
    caption: "Rot-Balans ve Süspansiyon Güvenlik Kontrolleri"
  },
  {
    id: "g6",
    src: "/images/vag_service_dsg.png",
    alt: "Müşteri Kabul ve Araç Teslimatı",
    category: "general",
    caption: "Şeffaf Servis Süreci ve Teslim Öncesi Son Kontroller"
  }
];
export const galleryCategories = [
  { value: "all", label: "Tümü" },
  { value: "workshop", label: "Atölye" },
  { value: "diagnostics", label: "Arıza Tespit" },
  { value: "maintenance", label: "Periyodik Bakım" },
  { value: "engine", label: "Motor Mekanik" },
  { value: "inspection", label: "Alt Takım & Kontrol" }
];
