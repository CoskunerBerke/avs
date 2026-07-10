export const businessConfig = {
  // İşletme İsimleri
  name: "AVS Service & Repair",
  legalName: "AVS Otomotiv Servis ve Onarım San. Tic. Ltd. Şti.",
  
  // İletişim Bilgileri
  phone: "0531 815 75 74",
  phoneFormatted: "+905318157574", // tel: linkleri için
  whatsapp: "0531 815 75 74",
  whatsappFormatted: "905318157574", // whatsapp api linkleri için
  whatsappPrefilledMessage: "Merhaba, aracım için servis randevusu ve bilgi almak istiyorum.",
  email: "info@avsservicerepair.com",
  
  // Adres Bilgileri
  address: "Geçen, Galericiler Sitesi A Blok 92/1",
  district: "Merkez",
  city: "Bartın",
  zipCode: "74100",
  fullAddress: "Geçen, Galericiler Sitesi A Blok 92/1, 74100 Bartın Merkez / Bartın",
  
  // Harita ve Yol Tarifi
  googleMapsUrl: "https://maps.app.goo.gl/yYvjV8Lp2P7o8nS99", // Konuma git linkleri için
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.8361546252994!2d32.316041!3d41.621743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408bc7b3992ea4b1%3A0xe9f7f45c8ad5fb9d!2zR2XDp2VuLCBHYWxlcmljaWxlciBTaXRlc2ksIDc0MTAwIEJhcnRhbiBNZXJrZXovQmFydW4!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str", // İletişim sayfasındaki harita için
  
  // Sosyal Medya
  socialLinks: {
    instagram: "https://instagram.com/avsservicerepair",
    facebook: "https://facebook.com/avsservicerepair",
  },
  
  // Çalışma Saatleri
  openingHours: {
    weekdays: "Pazartesi - Cuma: 09:00 - 18:30",
    saturday: "Cumartesi: 09:00 - 15:00",
    sunday: "Pazar: Kapalı",
    summary: "Pazartesi - Cuma: 09:00 - 18:30, Cumartesi: 09:00 - 15:00, Pazar: Kapalı",
    schema: [
      "Mo-Fr 09:00-18:30",
      "Sa 09:00-15:00"
    ]
  },
  
  // Site ve SEO Yapılandırması
  domain: "https://avsservis.com", // Yeni resmi site adresi
  logo: {
    darkPath: "/logos/logo-dark.svg", // Koyu arka planlar için
    lightPath: "/logos/logo-light.svg", // Açık arka planlar için
  },
  
  seo: {
    title: "AVS Servis | Bartın & Çaycuma Profesyonel Oto Servis ve Bakım",
    description: "Bartın Merkez ve Zonguldak Çaycuma şubelerimizde uzman oto servis çözümleri. Arıza tespiti, periyodik bakım, motor-mekanik onarım, DSG ve şanzıman tamiri AVS Servis güvencesiyle.",
    keywords: [
      "AVS Servis",
      "AVS Service & Repair",
      "Bartın oto servis",
      "Çaycuma oto servis",
      "Zonguldak özel servis",
      "Bartın özel servis",
      "DSG onarım Çaycuma",
      "şanzıman tamiri Bartın",
      "periyodik bakım Bartın"
    ]
  },

  // Çoklu Şube Yapılandırması
  branches: [
    {
      id: "bartin",
      name: "AVS Servis - Bartın Merkez Şubesi",
      phone: "0531 815 75 74",
      phoneFormatted: "+905318157574",
      whatsapp: "0531 815 75 74",
      whatsappFormatted: "905318157574",
      email: "info@avsservis.com",
      address: "Geçen, Galericiler Sitesi A Blok 92/1",
      fullAddress: "Geçen, Galericiler Sitesi A Blok 92/1, 74100 Bartın Merkez / Bartın",
      googleMapsUrl: "https://maps.app.goo.gl/yYvjV8Lp2P7o8nS99",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.8361546252994!2d32.316041!3d41.621743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408bc7b3992ea4b1%3A0xe9f7f45c8ad5fb9d!2zR2XDp2VuLCBHYWxlcmljaWxlciBTaXRlc2ksIDc0MTAwIEJhcnRhbiBNZXJrZXovQmFydW4!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
      openingHours: "Pazartesi - Cuma: 09:00 - 18:30, Cumartesi: 09:00 - 15:00, Pazar: Kapalı",
    },
    {
      id: "caycuma",
      name: "AVS Servis - Çaycuma Şubesi",
      phone: "0546 513 41 94",
      phoneFormatted: "+905465134194",
      whatsapp: "0546 513 41 94",
      whatsappFormatted: "905465134194",
      email: "caycuma@avsservis.com",
      address: "Çaycuma Yeni Sanayi Sitesi",
      fullAddress: "Yeni Sanayi Sitesi, İstasyon Mahallesi, 67900 Çaycuma / Zonguldak",
      googleMapsUrl: "https://www.google.com/maps/search/%C3%87aycuma+Yeni+Sanayi+Sitesi",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.411624625299!2d32.072541!3d41.411743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408b0722339eb4b1%3A0xe9f7f45c8ad5fb9d!2zw4dheWN1bWEgWmVuaSBTYW5heWkgU2l0ZXNp!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
      openingHours: "Pazartesi - Cuma: 09:00 - 18:30, Cumartesi: 09:00 - 15:00, Pazar: Kapalı",
    }
  ]
};
