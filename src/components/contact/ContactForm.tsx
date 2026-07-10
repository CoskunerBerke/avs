"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { servicesData } from "@/data/services";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleModel: "",
    serviceType: "",
    branch: "bartin", // varsayılan şube
    message: "",
    kvkkApproved: false,
    website: "", // Honeypot spam koruma alanı
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam kontrolü
    if (formData.website) {
      // Spam botu yakalandı, başarılıymış gibi davranıp sonlandıralım
      setStatus("success");
      return;
    }

    // Telefon doğrulama (basit karakter kontrolü)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,18}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Lütfen geçerli bir telefon numarası giriniz.");
      setStatus("error");
      return;
    }

    if (!formData.kvkkApproved) {
      setErrorMessage("Lütfen KVKK aydınlatma metnini onaylayınız.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email || undefined,
          vehicleModel: formData.vehicleModel,
          serviceType: formData.serviceType,
          branch: formData.branch,
          message: formData.message,
          kvkkApproved: formData.kvkkApproved,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        // Formu temizle
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          vehicleModel: "",
          serviceType: "",
          branch: "bartin",
          message: "",
          kvkkApproved: false,
          website: "",
        });
      } else {
        setErrorMessage(data.error || "Randevu talebi gönderilirken bir hata oluştu.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Sunucu bağlantı hatası. Lütfen daha sonra tekrar deneyiniz.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-green-50/50 border border-green-200 rounded-2xl text-center flex flex-col items-center gap-4 animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-brand-charcoal uppercase tracking-wider">Talebiniz Alındı</h3>
        <p className="text-xs text-brand-gray-dark leading-relaxed max-w-sm">
          Randevu ve servis talebiniz başarıyla kaydedilmiştir. Teknik ekibimiz çalışma saatleri içerisinde en kısa sürede sizi telefonla arayarak randevunuzu teyit edecektir.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 px-5 py-2.5 bg-brand-charcoal text-white text-xs font-bold uppercase rounded-lg hover:bg-brand-red active:scale-95 transition-all cursor-pointer"
        >
          Yeni Form Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 md:p-8 bg-brand-gray/30 border border-gray-100 rounded-2xl">
      <div className="border-b border-gray-200 pb-3 mb-1">
        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
          Randevu ve İletişim Formu
        </h3>
        <p className="text-[10px] text-brand-gray-dark mt-1">
          Lütfen bilgilerini eksiksiz girin. Teknik ustalarımız size geri dönüş sağlayacaktır.
        </p>
      </div>

      {/* Honeypot Spam Koruması (CSS ile gizlenir) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this if you are human:</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
        />
      </div>

      {/* Hata Mesajı */}
      {status === "error" && (
        <div className="p-4 bg-red-50 text-brand-red rounded-lg text-xs font-semibold flex items-center gap-2 border border-red-100 animate-fade-in">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Ad Soyad */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
          Ad Soyad <span className="text-brand-red">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Örn: Ahmet Yılmaz"
          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
        />
      </div>

      {/* Telefon & E-posta Grubu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Telefon */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            Telefon Numarası <span className="text-brand-red">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Örn: 0531 815 75 74"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
          />
        </div>

        {/* E-posta */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            E-Posta Adresi <span className="text-gray-400">(İsteğe Bağlı)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ahmet@example.com"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Araç Marka / Model, Şube & Hizmet Seçimi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Araç Marka/Model */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicleModel" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            Araç Marka / Model <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            required
            value={formData.vehicleModel}
            onChange={handleChange}
            placeholder="Örn: VW Golf 2018 1.6 TDI"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
          />
        </div>

        {/* Tercih Edilen Şube */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="branch" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            Tercih Edilen Şube <span className="text-brand-red">*</span>
          </label>
          <select
            id="branch"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
          >
            <option value="bartin">Bartın Merkez Şubesi</option>
            <option value="caycuma">Çaycuma Şubesi</option>
          </select>
        </div>

        {/* Hizmet Seçimi */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="serviceType" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            Talep Edilen Hizmet <span className="text-brand-red">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors"
          >
            <option value="">Seçiniz...</option>
            {servicesData.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Diğer">Diğer (Mesajda Belirtiniz)</option>
          </select>
        </div>
      </div>

      {/* Mesaj */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
          Mesajınız <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Şikayetinizi, belirtileri veya randevu tarihi talebinizi yazabilirsiniz."
          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-brand-charcoal focus:border-brand-red focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* KVKK Onayı */}
      <div className="flex items-start gap-2 mt-1">
        <input
          type="checkbox"
          id="kvkkApproved"
          name="kvkkApproved"
          required
          checked={formData.kvkkApproved}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-brand-red border-gray-300 rounded focus:ring-brand-red cursor-pointer mt-0.5"
        />
        <label htmlFor="kvkkApproved" className="text-[10px] text-brand-gray-dark leading-relaxed select-none">
          AVS Service & Repair bünyesindeki kişisel verilerimin korunmasına dair{" "}
          <a href="/kvkk" target="_blank" className="text-brand-charcoal font-bold underline hover:text-brand-red">
            KVKK Aydınlatma Metnini
          </a>{" "}
          okudum, paylaştığım iletişim bilgilerinden tarafıma ulaşılmasını kabul ediyorum. <span className="text-brand-red">*</span>
        </label>
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3 bg-brand-charcoal text-white hover:bg-brand-red disabled:bg-gray-400 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
      </button>
    </form>
  );
};
export default ContactForm;
