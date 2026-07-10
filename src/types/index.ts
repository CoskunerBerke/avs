export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // Adı, lucide-react ikonu için
  checkList: string[]; // Nelerin kontrol edildiği
  symptoms: string[]; // Sık karşılaşılan belirtiler
  process: string[]; // İşlem adımları
  faq: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  heroImage?: string; // İsteğe bağlı özel görsel yolu
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "workshop" | "diagnostics" | "maintenance" | "engine" | "inspection" | "general";
  caption: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  vehicleModel: string;
  serviceType: string;
  message: string;
  kvkkApproved: boolean;
}
