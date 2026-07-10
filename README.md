# AVS Service & Repair - Web Sitesi Projesi

Bu proje, **AVS Service & Repair** otomotiv bakım ve onarım servisi için Next.js (App Router), TypeScript ve Tailwind CSS kullanılarak sıfırdan geliştirilmiş, yüksek performanslı ve SEO uyumlu Türkçe kurumsal web sitesidir.

Uygulama, hem **Vercel** üzerinde sunucusuz (serverless) olarak çalışmaya hem de **VPS, Ubuntu Server, Docker ve PM2** gibi bağımsız altyapılarda çalıştırılmaya tamamen uyumludur (vendor lock-in bulunmamaktadır).

---

## Özellikler
- **Merkezi Yönetim**: Tüm firma bilgileri (telefon, adres, çalışma saatleri, sosyal ağlar) tek bir dosyadan değiştirilebilir.
- **Dinamik Hizmet Rotaları**: 12 adet otomotiv hizmeti statik derleme (SSG) destekli dinamik sayfalarda listelenir.
- **Lightbox Destekli Fotoğraf Galerisi**: Kategori filtreli, tamamen klavye uyumlu (ESC ile kapatma, ok tuşlarıyla gezinme) görsel galeri.
- **Teknik ve Yerel SEO**: JSON-LD `AutoRepair` ve `Service` şemaları entegre edilmiştir. Sitemap.xml ve robots.txt dinamik üretilir.
- **Gelişmiş İletişim Formu**: Sunucu taraflı doğrulama, spam engelleme (honeypot) ve SMTP/Nodemailer entegrasyonu mevcuttur (SMTP yoksa loglama moduna otomatik geçer).
- **Yüksek Performans (LCP/CLS)**: Next/Image entegrasyonu ve CSS tabanlı hafif görsel yer tutucular sayesinde sıfır görsel kırılma ve anında yüklenme.
- **Erişilebilirlik & Geçişler**: Klavyeyle kontrol edilebilir menüler, WCAG renk kontrastı ve `prefers-reduced-motion` desteği.

---

## Başlangıç ve Yerel Geliştirme

### Gereksinimler
- Node.js 18.x veya üzeri
- npm 9.x veya üzeri

### Kurulum
1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. `.env.example` dosyasını kopyalayarak bir `.env` veya `.env.local` oluşturun:
   ```bash
   cp .env.example .env.local
   ```
   *(Gerekirse dosyayı düzenleyip e-posta göndermek için SMTP bilgilerinizi girin).*

### Çalıştırma
Geliştirme sunucusunu başlatmak için:
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyebilirsiniz.

### Proje Derleme ve Test
Derleme aşamasında TypeScript, Lint ve Yapılandırma hatalarını kontrol etmek için:
```bash
# Kod standartları kontrolü
npm run lint

# Üretim sürümü derleme
npm run build

# Derlenen üretim sürümünü yerelde çalıştırma
npm run start
```

---

## İçerikleri Güncelleme Kılavuzu

### 1. Firma Bilgilerini Değiştirme (Telefon, Adres, Harita vb.)
Tüm firma iletişim bilgileri, sosyal ağlar ve çalışma saatleri aşağıdaki dosyada bulunur:
`src/config/business.ts`

Bu dosyadaki değerleri değiştirdiğinizde, Header, Footer, İletişim Sayfası, WhatsApp bağlantısı ve SEO Şema kodları otomatik olarak güncellenir.

### 2. Hizmetleri Düzenleme veya Yeni Hizmet Ekleme
Hizmet başlıkları, detayları, kontrol listeleri, belirtiler ve Sıkça Sorulan Sorular (SSS) verileri aşağıdaki dosyadan okunur:
`src/data/services.ts`

Yeni bir hizmet eklemek için, bu dosyadaki diziye (array) yeni bir nesne (object) eklemeniz yeterlidir. Next.js derleme aşamasında bu hizmet için `/hizmetler/[yeni-slug]` rotasını otomatik olarak üretecektir.

### 3. Galeri Fotoğraflarını Yenileme
Galeri sayfası verileri şu dosyada yönetilir:
`src/data/gallery.ts`

Gerçek resimleri sisteme dahil etmek için:
1. Görsellerinizi `/public/images/gallery/` klasörü altına yerleştirin (WebP formatı tavsiye edilir).
2. `src/data/gallery.ts` dosyasında ilgili görselin `src` değerini resminizin dosya yoluyla güncelleyin (örn: `src: "/images/gallery/atolyemiz-1.webp"`).

### 4. Logoları Güncelleme
Placeholder logoları değiştirmek için kendi logolarınızı hazırlayıp şu konumlardaki dosyaların üzerine yazmanız yeterlidir:
- Açık renkli arka planlar için logo: `/public/logos/logo-dark.svg`
- Koyu renkli arka planlar (Sticky header, footer) için logo: `/public/logos/logo-light.svg`

---

## Dağıtım ve Sunucu Barındırma Seçenekleri

### A) Vercel Dağıtımı (Ücretsiz ve Geçici Sunucu)
1. Projenizi GitHub, GitLab veya Bitbucket üzerine yükleyin.
2. Vercel paneline giriş yapın ve **Add New > Project** seçeneğini seçin.
3. Projenizin yer aldığı depoyu (repository) import edin.
4. **Environment Variables** bölümüne `.env.example` dosyasında yer alan değişkenleri girin (Özellikle `NEXT_PUBLIC_SITE_URL` alanını Vercel'in size atayacağı domain ile doldurun).
5. **Deploy** butonuna tıklayın.

### B) Docker Dağıtımı (VPS / Kendi Sunucunuz)
Proje içerisinde hafif ve optimize edilmiş bir multi-stage `Dockerfile` hazır durumdadır.

1. Docker imajını derleyin:
   ```bash
   docker build -t avs-service-web .
   ```

2. Konteyneri çalıştırın (Port 3000 üzerinde):
   ```bash
   docker run -d -p 3000:3000 --name avs-web --env-file .env avs-service-web
   ```

### C) Ubuntu VPS Sunucuda PM2 ve Nginx ile Dağıtım (Geleneksel Yol)

#### 1. Sunucu Hazırlığı
Node.js ve PM2 paketlerini sunucunuza kurun:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

#### 2. Proje Kurulumu ve Derleme
Projenizi sunucuya çekin (`git clone`) ve ilgili klasörde bağımlılıkları yükleyip derleyin:
```bash
npm install
npm run build
```

#### 3. PM2 ile Uygulamayı Başlatma
Uygulamayı PM2 yardımıyla arka planda çalışacak şekilde başlatın:
```bash
pm2 start npm --name "avs-web" -- start
pm2 save
pm2 startup
```

#### 4. Nginx Tersine Vekil (Reverse Proxy) Yapılandırması
Nginx sunucusunu kurun:
```bash
sudo apt update
sudo apt install nginx
```

`/etc/nginx/sites-available/avsservicerepair.com` dosyasını oluşturun ve aşağıdaki konfigürasyonu kendinize göre düzenleyerek ekleyin:

```nginx
server {
    listen 80;
    server_name avsservicerepair.com www.avsservicerepair.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Statik dosyaları doğrudan sunmak ve Nginx önbelleklemesi için (İsteğe bağlı optimize ayar)
    location /_next/static {
        alias /var/www/avs-web/.next/static;
        expires 365d;
        access_log off;
    }
}
```

Yapılandırmayı aktifleştirin ve Nginx'i yeniden başlatın:
```bash
sudo ln -s /etc/nginx/sites-available/avsservicerepair.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Güvenlik ve Yedekleme Önerileri
- **Güvenlik**: İletişim formu API rotamız (`/api/contact`) sunucu tarafında çalışır. E-posta şifrelerinizi kesinlikle istemci taraflı (client-side) kodlarda veya `NEXT_PUBLIC_` ön eki taşıyan ortam değişkenlerinde saklamayın.
- **Yedekleme**: `src/config/business.ts` ve `src/data/` altındaki veri dosyalarınızın birer kopyasını harici bir depolama alanında saklamanız, sunucu çökmelerinde hızlıca geri yükleme yapmanıza olanak tanır.
