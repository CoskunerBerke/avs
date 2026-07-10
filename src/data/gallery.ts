import { GalleryItem } from "@/types";

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery/workshop.webp",
    alt: "AVS Servis Genel Atölye",
    category: "workshop",
    caption: "AVS Service & Repair Genel Çalışma Alanı"
  },
  {
    id: "g2",
    src: "/images/gallery/diagnostics.webp",
    alt: "Bilgisayarlı Arıza Tespit Cihazı",
    category: "diagnostics",
    caption: "Modern Teşhis Cihazlarıyla Bilgisayarlı Arıza Tespiti"
  },
  {
    id: "g3",
    src: "/images/gallery/maintenance.webp",
    alt: "Periyodik Araç Bakımı",
    category: "maintenance",
    caption: "Profesyonel Filtre ve Sıvı Seviyesi Kontrolleri"
  },
  {
    id: "g4",
    src: "/images/gallery/engine.webp",
    alt: "Motor Mekanik Onarımı",
    category: "engine",
    caption: "Detaylı Motor ve triger Değişim İşlemleri"
  },
  {
    id: "g5",
    src: "/images/gallery/inspection.webp",
    alt: "Ön Takım ve Yürüyen Aksam Muayenesi",
    category: "inspection",
    caption: "Rot-Balans ve Süspansiyon Güvenlik Kontrolleri"
  },
  {
    id: "g6",
    src: "/images/gallery/general.webp",
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
