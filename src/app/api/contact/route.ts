import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, vehicleModel, serviceType, branch, message, kvkkApproved } = body;

    // Temel Alan Doğrulamaları
    if (!fullName || !phone || !vehicleModel || !serviceType || !message) {
      return NextResponse.json(
        { error: "Lütfen gerekli alanları doldurunuz." },
        { status: 400 }
      );
    }

    if (!kvkkApproved) {
      return NextResponse.json(
        { error: "KVKK onay kutusunun işaretlenmesi zorunludur." },
        { status: 400 }
      );
    }

    // SMTP Ortam Değişkenleri Kontrolü
    const { CONTACT_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    const isSmtpConfigured = !!(CONTACT_EMAIL && SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);

    const branchName = branch === "caycuma" ? "Çaycuma Şubesi" : "Bartın Merkez Şubesi";

    const logMessage = `
========================================
AVS İLETİŞİM FORMU TALEBİ (YENİ)
========================================
Ad Soyad: ${fullName}
Telefon: ${phone}
E-posta: ${email || "Belirtilmedi"}
Şube: ${branchName}
Araç Marka/Model: ${vehicleModel}
Talep Edilen Hizmet: ${serviceType}
Mesaj: ${message}
KVKK Onayı: ${kvkkApproved ? "Evet" : "Hayır"}
========================================
    `;

    if (isSmtpConfigured) {
      // Nodemailer ile SMTP mail gönderimi
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT || "587"),
        secure: parseInt(SMTP_PORT || "587") === 465, // true if port is 465, false for 587
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${fullName}" <${SMTP_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: email || undefined,
        subject: `Yeni Randevu Talebi: ${fullName} - ${serviceType} (${branchName})`,
        text: logMessage,
        html: `
          <h3>Yeni Servis Randevu Talebi</h3>
          <p><strong>Ad Soyad:</strong> ${fullName}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>E-posta:</strong> ${email || "Belirtilmedi"}</p>
          <p><strong>Şube:</strong> ${branchName}</p>
          <p><strong>Araç Marka/Model:</strong> ${vehicleModel}</p>
          <p><strong>Hizmet Tipi:</strong> ${serviceType}</p>
          <p><strong>Mesaj:</strong> ${message}</p>
          <p><strong>KVKK Onayı:</strong> ${kvkkApproved ? "Evet" : "Hayır"}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Randevu talebi e-postası başarıyla gönderildi.");
      return NextResponse.json({ success: true, message: "Talep mail ile iletildi." });
    } else {
      // E-posta kimlik bilgileri eksik ise konsola yazıp başarılıymış gibi davran
      console.warn("DİKKAT: SMTP e-posta kimlik bilgileri yapılandırılmadığı için talep e-postası gönderilemedi.");
      console.log(logMessage);
      
      return NextResponse.json({
        success: true,
        info: "Geliştirme Modu: SMTP yapılandırılmadığı için form verileri sunucu konsoluna yazdırıldı.",
      });
    }
  } catch (error) {
    console.error("İletişim formu API hatası:", error);
    return NextResponse.json(
      { error: "Sunucu hatası oluştu, lütfen doğrudan telefon/WhatsApp ile iletişime geçin." },
      { status: 500 }
    );
  }
}
