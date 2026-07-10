import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortDescription: "Aracınızın motor ömrünü uzatmak ve sürüş güvenliğini sağlamak için planlı ve kapsamlı kontrol, yağ ve filtre değişimi hizmetleri.",
    description: "Periyodik bakım, aracınızın üretici standartlarına uygun olarak belirli kilometre veya zaman aralıklarında yapılması gereken en kritik koruyucu bakım işlemidir. AVS Service & Repair olarak, motor yağından fren balatalarına, filtrelerden sıvı seviyelerine kadar geniş bir kontrol listesiyle aracınızın performansını korur ve gelecekte oluşabilecek büyük arızaların önüne geçeriz.",
    icon: "Calendar",
    checkList: [
      "Motor yağı ve yağ filtresinin değiştirilmesi",
      "Hava filtresi ve polen filtresinin yenilenmesi",
      "Yakıt filtresinin kontrolü ve gerekirse değişimi",
      "Fren hidroliği, motor soğutma suyu ve direksiyon sıvısı kontrolü",
      "Fren diskleri, balataları ve hortumlarının aşınma kontrolü",
      "Ön ve arka süspansiyon elemanlarının fiziki muayenesi",
      "Lastik hava basınçları, diş derinlikleri ve aşınma durumları",
      "Aydınlatma, sinyaller, silecekler ve korna işlevselliği",
      "Akü şarj seviyesi ve kutup başlarının temizliği",
      "Araç altı sızıntı (yağ, su, yakıt) ve korozyon kontrolleri"
    ],
    symptoms: [
      "Servis uyarı lambasının veya bakım kilometresinin gelmesi",
      "Motor performansında hissedilir düşüş ve yakıt sarfiyatında artış",
      "Rölanti devrinde düzensizlik ve sarsıntılı çalışma",
      "Frenleme sırasında ses gelmesi veya zayıf duruş hissi",
      "Kabinde klima açıkken kötü koku yayılması (polen filtresi kaynaklı)"
    ],
    process: [
      "Aracın kabulü ve arıza tespit cihazıyla genel sistem taraması yapılması.",
      "Motorun soğutulmasının ardından eski motor yağının süzülmesi ve yağ filtresinin sökülmesi.",
      "Hava ve polen filtrelerinin yenileriyle değiştirilmesi.",
      "Yeni üretici onaylı motor yağının eklenmesi ve filtrelerin montajı.",
      "Tüm sıvı seviyelerinin tamamlanması ve fren/yürüyen aksam kontrollerinin yapılması.",
      "Servis sıfırlama (maintenance reset) işleminin bilgisayarlı cihazla gerçekleştirilmesi.",
      "Yol testi yapılarak aracın müşteriye güvenle teslim edilmesi."
    ],
    faq: [
      {
        question: "Periyodik bakım hangi aralıklarla yapılmalıdır?",
        answer: "Genellikle binek araçlarda yılda bir kez veya her 10.000 ile 15.000 kilometre arasında (hangisi önce dolarsa) yapılması önerilir. Ağır kullanım koşullarında bu süre daha da kısalabilir."
      },
      {
        question: "Bakımda orijinal parça kullanılıyor mu?",
        answer: "AVS Service & Repair olarak OEM standartlarında onaylı yüksek kaliteli yedek parçalar ve üretici onaylı motor yağları kullanıyoruz. Müşteri talebine göre orijinal parça seçenekleri de sunulmaktadır."
      }
    ],
    seoTitle: "Periyodik Bakım ve Yağ Değişimi | Bartın AVS Service",
    seoDescription: "Bartın'da profesyonel periyodik araç bakımı. Filtre değişimleri, motor yağı yenileme ve 40 nokta güvenlik kontrolü uzman ekibimizle AVS'de."
  },
  {
    slug: "ariza-tespit",
    title: "Arıza Tespit",
    shortDescription: "Gelişmiş bilgisayarlı diagnostik cihazlar ile aracınızdaki elektriksel ve mekanik arızaların noktasal tespiti.",
    description: "Modern otomobiller, karmaşık elektronik kontrol üniteleri (ECU) ve sensör ağlarıyla yönetilir. Aracınızın gösterge panelinde bir arıza lambası yandığında veya sıra dışı bir durum hissettiğinizde, doğru teşhis koymak kritik önem taşır. AVS bünyesindeki lisanslı arıza tespit donanımları ile deneme-yanılma yapmadan arızanın kaynağına doğrudan ulaşırız.",
    icon: "Activity",
    checkList: [
      "ECU (Motor Kontrol Ünitesi) hata kodu okuma ve analiz etme",
      "Şanzıman (TCU), ABS, SRS (Hava Yastığı) sistemlerinin taranması",
      "Sensör verilerinin (Oksijen sensörü, MAF, MAP vb.) canlı izlenmesi",
      "Ateşleme ve yakıt enjeksiyon değerlerinin kontrolü",
      "Tesisat ve elektriksel akım kontrolleri",
      "Hata geçmişinin temizlenmesi ve adaptasyon testleri"
    ],
    symptoms: [
      "Gösterge panelinde 'Check Engine' (Motoru Kontrol Et) veya EPC lambasının yanması",
      "Aracın geç çalışması veya rölantide stop etme eğilimi",
      "Hızlanma esnasında tekleme, silkeleme veya çekiş kaybı",
      "Yakıt tüketiminde açıklanamayan ani artışlar",
      "Göstergelerin düzensiz çalışması veya elektriksel donanımların devre dışı kalması"
    ],
    process: [
      "Araç OBD2 soketi üzerinden profesyonel diagnostik cihazımıza bağlanır.",
      "Tüm kontrol modülleri taranarak hata kodları (DTC) listelenir.",
      "Aktif ve pasif hata kodları ayırt edilerek canlı veri parametreleri incelenir.",
      "Arızalı parça veya sensörün fiziki kontrolleri ve kablo hattı testleri yapılır.",
      "Müşteriye arıza raporu sunulur ve onarım maliyet/süreç planı çıkarılır.",
      "Onay sonrası onarım yapılarak sistem adaptasyonları gerçekleştirilir."
    ],
    faq: [
      {
        question: "Arıza tespit cihazı her arızayı söyler mi?",
        answer: "Cihazlar arızanın hangi devrede veya sensörde olduğunu (örn: fakir karışım, turbo basınç kaybı vb.) söyler. Ancak arızanın kopuk bir kablodan mı, tıkalı bir filtreden mi yoksa mekanik bir aşınmadan mı kaynaklandığını bulmak uzman teknisyenimizin tecrübesine bağlıdır."
      },
      {
        question: "Arıza lambası yanıp sönerse ne yapmalıyım?",
        answer: "Özellikle yanıp sönen motor arıza lambası ciddi bir ateşleme teklemesini (misfire) gösteriyor olabilir. Bu durum katalitik konvertöre zarar verebilir, aracı durdurup çekici ile servise ulaştırmanız önerilir."
      }
    ],
    seoTitle: "Bilgisayarlı Arıza Tespit ve Diagnostik | Bartın AVS",
    seoDescription: "Gösterge panelinde arıza lambası mı yandı? Bartın'da modern diagnostik arıza tespit cihazları ile noktasal hata bulma ve bilgisayarlı check-up hizmeti."
  },
  {
    slug: "motor-mekanik-onarim",
    title: "Motor & Mekanik Onarım",
    shortDescription: "Motor revizyonu, silindir kapağı, triger seti, supap ayarları ve diğer tüm mekanik aksam onarım hizmetleri.",
    description: "Motor, aracınızın kalbidir ve yüksek sıcaklıklar ile sürtünme altında çalışır. AVS Service & Repair olarak, motorunuzda meydana gelen aşınmaları, yağ yakma problemlerini, sesli çalışmaları ve mekanik kayıpları gideriyoruz. Triger değişimi gibi hassas senteli işlemlerden komple motor rektifiyesine kadar her aşamada titiz işçilik sunuyoruz.",
    icon: "Settings",
    checkList: [
      "Silindir kapağı contası ve supap kontrolleri",
      "Triger kayışı / zincir seti değişimi ve sente ayarı",
      "Piston, sekman, yatak ve krank mili revizyonları",
      "Yağ pompası ve su pompası (devirdaim) yenilenmesi",
      "Motor takozları ve kulaklarının aşınma kontrolleri",
      "Manifold contaları ve sızıntı onarımları",
      "Kompresör testi ile silindir içi basınç ölçümleri"
    ],
    symptoms: [
      "Motordan gelen metalik vuruntu, zincir sesi veya sürtünme sesleri",
      "Egzozdan mavi duman atılması (yağ yakma belirtisi)",
      "Motor soğutma suyuna yağ karışması veya yağ çubuğunda tahinleşme",
      "Hararetin sürekli yükselmesi veya su eksiltme",
      "Ciddi güç kaybı ve rölantide aşırı sarsıntı"
    ],
    process: [
      "Motorun şikayet doğrultusunda akustik ve bilgisayarlı analizi yapılır.",
      "Kompresör testi uygulanarak mekanik aşınma oranları belirlenir.",
      "Hasarlı bölgeye ulaşmak için motor parçaları üretici el kitabına uygun tork değerleriyle sökülür.",
      "Aşınmış contalar, keçeler, rulmanlar veya supaplar yenileriyle değiştirilir.",
      "Triger ve sente ayarları hassas aparatlarla yapılarak kilitlenir.",
      "Montaj sonrası taze sıvılar eklenir, motor çalıştırılarak sızıntı ve sıcaklık testleri tamamlanır."
    ],
    faq: [
      {
        question: "Triger seti ne zaman değiştirilmelidir?",
        answer: "Triger kayışı veya zinciri araç modeline göre değişiklik gösterir. Genellikle kayışlar için 3 ila 4 yıl veya 60.000 - 90.000 km, zincirli sistemler için ise ses yapmaya başladığında veya 120.000 - 180.000 km aralığında değişim önerilir."
      },
      {
        question: "Motor revizyonu ne kadar sürer?",
        answer: "Küçük mekanik onarımlar (conta, su pompası vb.) gün içinde tamamlanabilirken, komple motor rektifiyesi ve revizyon işlemleri parça tedarik ve rektifiye aşamalarına bağlı olarak 3 ila 7 iş günü sürebilmektedir."
      }
    ],
    seoTitle: "Motor Yenileme ve Mekanik Onarım | Bartın AVS Service",
    seoDescription: "Bartın'da motor revizyonu, silindir kapak contası değişimi, triger zinciri ve kayış yenileme. Profesyonel işçilikle motor tamiri ve mekanik servis."
  },
  {
    slug: "dsg-sanziman",
    title: "DSG & Şanzıman Sistemleri",
    shortDescription: "Çift kavramalı DSG şanzımanlar, tork konvertörlü otomatik şanzımanlar ve manuel şanzıman bakım onarım çözümleri.",
    description: "Özellikle Volkswagen grubu araçlarda bulunan DSG (Direct Shift Gearbox) başta olmak üzere, tüm otomatik ve manuel şanzıman sistemlerinin bakımına odaklanıyoruz. Şanzıman beyni (Mekatronik) arızaları, kavrama aşınmaları ve şanzıman yağ değişimleri, yüksek maliyetli komple değişimler yerine komponent düzeyinde onarılarak bütçenizi korur.",
    icon: "Cpu",
    checkList: [
      "Şanzıman beyni (Mekatronik) basınç ve solenoid testleri",
      "Kavrama (Debriyaj) aşınma noktalarının bilgisayarlı ölçümü",
      "Şanzıman yağı seviyesi, rengi ve sızıntı kontrolleri",
      "Vites geçiş basınçları ve vuruntu analizleri",
      "Aks keçeleri ve diferansiyel dişli muayenesi",
      "Temel ayar (Basic settings) ve vites adaptasyonu yazılımları"
    ],
    symptoms: [
      "Vites geçişlerinde sarsıntı, vuruntu veya kararsızlık",
      "Yokuş yukarı kalkışlarda aşırı titreme veya kaçırma (kavrama aşınması)",
      "Gösterge panelinde vites konum göstergesinin (P-R-N-D-S) yanıp sönmesi veya anahtar işareti",
      "Geri vitese geçmeme veya şanzımandan uğultu sesi gelmesi",
      "Araç altında yeşil veya kırmızımsı yağ sızıntısı"
    ],
    process: [
      "Şanzımanın elektronik diagnostik taraması ve canlı veri takibi yapılır.",
      "Gerekli durumlarda şanzıman sökülerek kavrama kalınlıkları kontrol edilir.",
      "Mekatronik ünite test edilerek hidrolik tüp basınç kayıpları (özellikle DSG'lerde) saptanır.",
      "Hasarlı valfler, kartlar veya mekatronik tüpler güçlendirilmiş yedek parçalarla revize edilir.",
      "Yeni şanzıman yağı ve filtresi takılarak sistem kapatılır.",
      "Bilgisayar yardımıyla debriyaj kavrama noktaları tanıtılarak adaptasyon sürüşü yapılır."
    ],
    faq: [
      {
        question: "Otomatik şanzıman yağı değişir mi?",
        answer: "Evet, şanzıman yağları da zamanla özelliğini yitirir. Özellikle çift kavramalı (DSG) şanzımanlarda her 60.000 km'de bir yağ ve filtre değişimi, mekatronik ömrünü ciddi şekilde uzatır."
      },
      {
        question: "DSG kart arızası komple mekatronik değişimi gerektirir mi?",
        answer: "Hayır. AVS bünyesinde DSG mekatronik kartları ve hidrolik valf gövdeleri ayrı ayrı tamir edilebilmekte veya değiştirilebilmektedir. Bu sayede komple ünite maliyetinden tasarruf edersiniz."
      }
    ],
    seoTitle: "DSG Kavrama ve Mekatronik Tamiri | Bartın AVS Otomotiv",
    seoDescription: "Bartın'da DSG ve otomatik şanzıman servis hizmetleri. Mekatronik revizyonu, kavrama değişimi, şanzıman yağı yenileme ve adaptasyon işlemleri."
  },
  {
    slug: "fren-suspansiyon",
    title: "Fren & Süspansiyon",
    shortDescription: "Fren balatası ve disk değişimi, amortisörler, salıncaklar, rot başları ve güvenli yol tutuş elemanlarının onarımı.",
    description: "Fren ve süspansiyon sistemleri, aracınızın aktif güvenlik unsurlarıdır. Doğru zamanda durabilmek ve virajlarda yolu stabil tutabilmek için aşınan parçaların geciktirilmeden değiştirilmesi gerekir. AVS Service & Repair olarak, fren kaliperlerinden amortisör kulelerine kadar sürüş güvenliğinizi tehlikeye atan tüm gevşeme ve aşınmaları tespit ederek onarırız.",
    icon: "ShieldAlert",
    checkList: [
      "Ön ve arka fren balatalarının kalınlık kontrolü",
      "Fren disklerinin yüzey pürüzsüzlüğü ve kalınlık ölçümü",
      "Fren hortumlarında çatlak, şişme ve hidrolik sızıntı kontrolü",
      "Amortisörler ve amortisör takozlarının sızıntı/ses kontrolü",
      "Rotil, rot başı, rot mili ve salıncak burçlarının muayenesi",
      "Viraj demiri askı rotları (z-rot) ve lastiklerinin durumu",
      "ABS sensör kabloları ve okuyucu dişlilerinin temizliği"
    ],
    symptoms: [
      "Frene basıldığında gıcırtı, ıslık veya sürtünme sesi gelmesi",
      "Fren pedalında yumuşama, aşırı aşağıda kavrama veya süngerimsi his",
      "Yüksek hızda fren yaparken direksiyonda titreme (eğri disk belirtisi)",
      "Kasislerden geçerken ön takımdan lokurtu veya gıcırtı sesleri gelmesi",
      "Virajlarda aracın aşırı yatması veya arkasını bırakma eğilimi"
    ],
    process: [
      "Araç lifte kaldırılarak ön takım elemanları levyelerle boşluk kontrolüne tabi tutulur.",
      "Disk ve balata kalınlıkları kumpas ile ölçülerek aşınma sınırları kontrol edilir.",
      "Aşınmış balatalar sökülür, kaliper pistonları temizlenip geri itilir.",
      "Gerekiyorsa diskler yenilenir veya standartlar dahilindeyse torna edilir.",
      "Patlak amortisörler ve yıpranmış burçlar özel presler yardımıyla salıncaklardan sökülüp yenilenir.",
      "Montaj sonrası fren hidroliği test edilir, gerekiyorsa yenilenerek havası alınır."
    ],
    faq: [
      {
        question: "Fren diskleri her balata değişiminde değişmeli midir?",
        answer: "Hayır. Genellikle bir disk, kullanım tarzına bağlı olarak 2 veya 3 balata ömrü boyunca hizmet edebilir. Ancak disk yüzeyinde derin faturalar oluşmuşsa veya kalınlık limitin altına düşmüşse güvenlik için mutlaka değişmelidir."
      },
      {
        question: "Ön takım kontrolü ne sıklıkla yapılmalıdır?",
        answer: "Her periyodik bakımda ön takım mekanizması ücretsiz olarak kontrol edilmektedir. Türkiye yol şartları düşünüldüğünde, yılda en az bir kez detaylı alt takım muayenesi önerilir."
      }
    ],
    seoTitle: "Fren Balatası ve Amortisör Değişimi | Bartın AVS",
    seoDescription: "Bartın'da garantili fren balatası, disk değişimi ve amortisör onarımı. Güvenli sürüş için ön takım ve süspansiyon sistemleri revizyonu AVS'de."
  },
  {
    slug: "oto-elektrik",
    title: "Oto Elektrik & Elektronik",
    shortDescription: "Aydınlatma sistemleri, marş ve şarj motorları, kablo tesisatı onarımı, sigorta kutuları ve konfor elektroniği hizmetleri.",
    description: "Araçlardaki konfor, güvenlik ve motor yönetim sistemleri tamamen elektriksel sinyallerle çalışır. AVS bünyesindeki oto elektrik hizmetimiz; kısa devre aramaları, kablo tesisatı yenileme, beyin tamirleri ve marş/şarj dinamosu revizyonlarını kapsar. Multimetre ve osiloskop gibi ölçüm aletleriyle karmaşık elektriksel sorunları hızlıca çözüme kavuştururuz.",
    icon: "Zap",
    checkList: [
      "Aydınlatma (Far, stop, sinyal, sis) lambaları kontrolü",
      "Marş motoru (marş dinamosu) akım çekiş testi",
      "Şarj dinamosu (alternatör) voltaj üretim değerleri",
      "Sigorta kutusu bağlantıları ve kaçak akım testleri",
      "Merkezi kilit, elektrikli camlar ve ayna motorları",
      "Park sensörleri, geri görüş kamerası ve multimedya elektrik hatları",
      "Kablo koruma spiral hortumları ve şase kablosu durumu"
    ],
    symptoms: [
      "Aracın marşa basıldığında çok yavaş dönmesi veya hiç dönmemesi",
      "Akü lambasının gösterge panelinde kırmızı renkte yanık kalması",
      "Farların veya iç aydınlatmaların rölantide göz kırpması (kısılıp açılması)",
      "Bazı elektrikli donanımların (camlar, kilitler) kararsız çalışması veya hiç çalışmaması",
      "Araç kilitliyken akünün kendi kendine boşalması (akım kaçağı)"
    ],
    process: [
      "Aracın akü sağlık durumu ve alternatörün şarj kapasitesi ölçülür.",
      "Çalışmayan sistemin şeması incelenerek sigorta ve röle kutuları denetlenir.",
      "Multimetre ile devre üzerindeki voltaj düşümleri ve direnç değerleri ölçülür.",
      "Kablo hatlarındaki kopukluk veya kısa devre noktaları bulunarak lehim ve makaron ile izole edilerek onarılır.",
      "Kömürleri veya kollektörleri aşınmış dinamolar sökülüp içi revize edilir.",
      "Onarım bitiminde tüm hatların sızdırmazlığı ve koruyucu kılıfları kapatılır."
    ],
    faq: [
      {
        question: "Kaçak akım testi nedir?",
        answer: "Araç kapalı ve kilitli konumdayken, arka planda bazı modüllerin uyku moduna geçmeyip aküden akım çekmeye devam etmesi durumudur. Hassas ampermetre ölçümleriyle hangi sigorta hattının akım çektiği bulunarak sorun giderilir."
      },
      {
        question: "Sigorta attığında ne yapılmalıdır?",
        answer: "Atan sigorta mutlaka aynı amper değerindeki yeni bir sigorta ile değiştirilmelidir. Eğer yeni takılan sigorta da hemen atıyorsa, o hatta ciddi bir kısa devre vardır ve zorlanmadan elektrikçiye gösterilmelidir."
      }
    ],
    seoTitle: "Oto Elektrik ve Tesisat Onarımı | Bartın AVS Otomotiv",
    seoDescription: "Bartın oto elektrik servisi. Akü ölçümü, alternatör şarj dinamosu revizyonu, kısa devre arama, far ayarı ve tesisat tamir işleri AVS'de."
  },
  {
    slug: "klima-bakim",
    title: "Klima Bakım & Onarım",
    shortDescription: "Klima gazı dolumu, kompresör tamiri, kaçak tespiti, polen filtresi değişimi ve klima sistemi dezenfeksiyonu.",
    description: "Araç kliması sadece yazın serinlemek için değil, kışın da cam buğusunu hızlıca çözmek için hayati bir sistemdir. Klima sistemlerinde gaz kaçakları, kompresör kilitlenmeleri ve evaporatör bakteri oluşumları sıkça görülür. AVS olarak klima gazınızı yeniliyor, sistemi dezenfekte ediyor ve performansını test ediyoruz.",
    icon: "Wind",
    checkList: [
      "Klima gazı (R134a / R1234yf) miktarının ölçümü",
      "Klima boruları ve bağlantı noktalarında UV ışıkla kaçak testi",
      "Klima kompresörünün devreye girme testi ve basınç ölçümleri",
      "Evaporatör ve kondanser peteklerinin temizlik durumu",
      "Klima kurutucu filtresinin kondisyonu",
      "Polen filtresinin yenilenmesi ve havalandırma kanalları dezenfeksiyonu"
    ],
    symptoms: [
      "Klimanın üfleme yapmasına rağmen soğuk veya sıcak hava vermemesi",
      "Klima açıldığında kabin içine rutubet veya ağır toz kokusu yayılması",
      "Klima açıldığında motor bölümünden uğultulu veya tıkırtılı ses gelmesi",
      "Cam buğusunun klima açık olmasına rağmen çözülmemesi",
      "Klima düğmesine basıldığında motor devrinde hiç değişiklik olmaması"
    ],
    process: [
      "Klima manifoldu sisteme bağlanarak alçak ve yüksek basınç değerleri okunur.",
      "Sistemdeki eski gaz vakumlanarak nemden arındırılır.",
      "Vakum aşamasında sistem sızdırmazlık testine tabi tutularak kaçaklar izlenir.",
      "Sisteme kompresörün yağlanması için özel PAG yağı eklenir.",
      "Araç etiketinde belirtilen gramajda orijinal klima gazı dolumu yapılır.",
      "Kabin içine özel antibakteriyel dezenfektan uygulanarak bakteriler yok edilir.",
      "Menfez çıkış sıcaklığı termometre ile ölçülerek soğutma performansı doğrulanır."
    ],
    faq: [
      {
        question: "Klima gazı neden eksilir?",
        answer: "Klima sistemi esnek hortumlardan ve contalardan oluşur. Zamanla mikro titreşimler veya kılcal çatlaklar sebebiyle gaz sızıntısı olabilir. Yılda ortalama %5-10 oranında gaz eksilmesi normal kabul edilebilir."
      },
      {
        question: "Klima kokusu nasıl önlenir?",
        answer: "Klima evaporatöründe oluşan nem bakterilere zemin hazırlar. Polen filtresini her bakımda değiştirmek ve yılda bir kez klima dezenfeksiyonu yaptırmak bu kokuları tamamen engeller."
      }
    ],
    seoTitle: "Klima Gazı Dolumu ve Kompresör Tamiri | Bartın AVS",
    seoDescription: "Bartın'da araç klima servisi. Bilgisayarlı klima gazı basımı, UV boyalı kaçak tespiti, klima kompresörü tamiri ve dezenfeksiyon işlemleri."
  },
  {
    slug: "dpf-egr",
    title: "DPF & EGR Sistemleri",
    shortDescription: "Dizel Partikül Filtresi (DPF) temizliği, EGR valfi revizyonu, rejenerasyon işlemleri ve emisyon sistemleri onarımı.",
    description: "Özellikle dizel motorlu araçlarda emisyon standartlarını karşılamak için DPF (Dizel Partikül Filtresi) ve EGR (Egzoz Gazı Geri Dönüşümü) sistemleri kullanılır. Şehir içi kısa mesafe kullanımlarda bu sistemler kurumla tıkanır. AVS Service & Repair olarak, tıkanan filtrelerinizi makineyle temizleyerek motorunuzu rahatlatıyor ve emisyon değerlerini normale döndürüyoruz.",
    icon: "Gauge",
    checkList: [
      "DPF doluluk oranı (%) ve diferansiyel basınç sensörü testleri",
      "EGR valfi mekanik sıkışma ve kurum doluluk muayenesi",
      "Egzoz sıcaklık sensörlerinin veri doğruluğu kontrolü",
      "AdBlue sistemi enjektör tıkanıklığı ve pompa basıncı testleri",
      "Manifold içi kurum birikimi (kurum doluluğu) fiziki kontrolü",
      "Bilgisayar kontrollü durduğu yerde rejenerasyon (DPF Regeneration)"
    ],
    symptoms: [
      "Gösterge panelinde DPF lambası veya motor arıza lambasının yanması",
      "Aracın 'Limp Mode' (koruma modu) durumuna geçerek 3000 devri geçmemesi",
      "Egzozdan aşırı siyah duman çıkması veya ağır koku yayılması",
      "Motorun geç hızlanması ve yakıt tüketiminin ciddi oranda artması",
      "Rölantide motorun düzensiz ve gürültülü çalışması"
    ],
    process: [
      "Diagnostik cihazla emisyon sistemi parametreleri ve kurum seviyesi okunur.",
      "Kurum miktarı sınır değerler içindeyse bilgisayarlı aktif rejenerasyon başlatılır.",
      "Aşırı tıkanıklık varsa DPF ünitesi egzoz hattından sökülür.",
      "Özel DPF temizleme makinesinde kimyasal sıvılar ve tazyikli su/hava ile kurumlar çözülür.",
      "EGR valfi sökülerek ultrasonik temizleyicide kurumlarından arındırılır ve test edilir.",
      "Parçalar monte edildikten sonra sistem adaptasyonları yapılır ve yol testine çıkılır."
    ],
    faq: [
      {
        question: "DPF iptal edilmeli midir?",
        answer: "Hayır. DPF iptali hem çevreye büyük zarar verir hem de TÜV Türk muayenesinden aracınızın geçmesini engeller. AVS olarak çevre dostu temizlik ve onarım yöntemlerini uyguluyoruz."
      },
      {
        question: "DPF neden sürekli tıkanır?",
        answer: "Sürekli düşük devirli ve kısa mesafeli kullanımlar egzoz sıcaklığının DPF'i kendi kendine temizleyecek seviyeye (yaklaşık 600°C) ulaşmasını engeller. Bu da tıkanmayı hızlandırır."
      }
    ],
    seoTitle: "DPF Temizliği ve EGR Valfi Onarımı | Bartın AVS",
    seoDescription: "Bartın'da Dizel Partikül Filtresi (DPF) temizliği ve EGR valfi revizyonu. Makineyle kurum temizleme, rejenerasyon ve AdBlue hata onarımları."
  },
  {
    slug: "turbo-sistemleri",
    title: "Turbo Sistemleri",
    shortDescription: "Turbocharger revizyonu, westgate arızaları, intercooler sızıntı kontrolleri ve basınç kayıplarının giderilmesi.",
    description: "Turbocharger, motora yüksek basınçta hava göndererek performansı artıran hassas bir bileşendir. Çok yüksek devirlerde ve egzoz sıcaklığında çalıştığı için yağlama kalitesi turbo ömrü için hayati önem taşır. AVS bünyesinde turbo basınç kaçakları, mil boşlukları, westgate arızaları ve intercooler sızıntıları titizlikle teşhis edilip onarılmaktadır.",
    icon: "ZapOff", // Performans düşüşü vb. temsil edebilir
    checkList: [
      "Turbo mili boşluğu (eksenel ve radyal oynama) kontrolü",
      "Turbo pervaneleri (emme ve egzoz pallerinin) hasar muayenesi",
      "Westgate (basınç tahliye valfi) aktüatör testi",
      "Turbo yağ besleme ve dönüş borularında sızıntı kontrolü",
      "Intercooler (hava soğutucu) hortumlarında yırtık ve kaçak testi",
      "Manifold basınç (boost) verilerinin canlı sürüş testi ile okunması"
    ],
    symptoms: [
      "Hızlanırken motordan gelen ıslık veya rüzgar uğultusu sesi",
      "Aracın çekiş gücünde ani düşüş ve gaz tepkisine geç yanıt vermesi",
      "Egzozdan gri-mavi renkte duman çıkması (turbo yağ kaçırma belirtisi)",
      "Motor arıza lambasının yanması ve bilgisayarda 'aşırı besleme' (overboost) hatası",
      "Turbo hortumları çevresinde aşırı yağ birikmesi ve terleme"
    ],
    process: [
      "Turbo hortumları sökülerek intercooler hattında basınç testi uygulanır.",
      "Turbo emme borusu çıkarılarak mil yatak boşluğu elle ve komparatörle ölçülür.",
      "Vakum pompası yardımıyla westgate aktüatörünün açma-kapama noktaları test edilir.",
      "Arızalı turbo ünitesi araçtan sökülerek balans ve parça değişimi için hazırlanır.",
      "Paller, miller ve burçlar yüksek kaliteli komponentlerle yenilenir.",
      "Montaj esnasında motor yağı ve filtreleri mutlaka değiştirilir, turbo yağ kanalları temizlenir."
    ],
    faq: [
      {
        question: "Turbo neden arızalanır?",
        answer: "En büyük neden kalitesiz motor yağı kullanımı veya yağ değişim sürelerinin geciktirilmesidir. Ayrıca motor sıcakken aracı stop etmeden önce rölantide beklememek turbo milinin yağsız kalmasına yol açar."
      },
      {
        question: "Turbo ıslık sesi çıkarıyorsa ne olur?",
        answer: "Islık sesi genellikle turbo pallerinin gövdeye sürtmeye başladığını veya hava hortumlarında yırtık olduğunu gösterir. Geciktirilirse mil keserek motor içine parça kaçırabilir ve motoru kullanılmaz hale getirebilir."
      }
    ],
    seoTitle: "Turbo Revizyonu ve Basınç Kaçakları | Bartın AVS",
    seoDescription: "Bartın'da turbo tamiri ve intercooler hortum onarımları. Westgate arızaları, mil boşluğu giderme ve garantili turbocharger revizyonu AVS'de."
  },
  {
    slug: "yag-filtre-degisimi",
    title: "Yağ & Filtre Değişimi",
    shortDescription: "Motor yağı, hava filtresi, polen filtresi ve yakıt filtresinin üretici standartlarına uygun motor yağları ile hızlı değişimi.",
    description: "Yağ ve filtre değişimi, aracınızın en temel ama en önemli bakım kalemidir. Motor yağı, hareketli parçalar arasında sürtünmeyi azaltır, motoru temizler ve soğumasına yardımcı olur. AVS Service & Repair olarak, sadece aracınızın marka ve modeline tam uyumlu, viskozite ve onay kodları doğrulanmış premium yağ markalarını ve kaliteli filtre gruplarını kullanırız.",
    icon: "Droplet",
    checkList: [
      "Eski motor yağının karter tapasından tamamen süzülmesi",
      "Karter tapası ve pulunun sızdırmazlık için yenilenmesi",
      "Yağ filtresinin orijinal tork değerinde sıkılarak monte edilmesi",
      "Hava filtresi kutusunun temizlenmesi ve yeni filtrenin yerleştirilmesi",
      "Polen filtresinin yönüne dikkat edilerek kabin içine montajı",
      "Yakıt filtresinin değişimi ve yakıt hattı hava alma işlemi"
    ],
    symptoms: [
      "Motor yağının çamurlaşması veya siyah renge dönüşmesi",
      "Göstergede düşük yağ basıncı uyarısı veya yağ seviye lambasının yanması",
      "Motorun eskisinden daha gürültülü ve sıcak çalışması",
      "Kabin içine havalandırmadan gelen tozlu veya rutubetli hava",
      "Yüksek kilometre kat edilmesi sonrası motor yağı ömrünün tükenmesi"
    ],
    process: [
      "Araç lifte alınarak motor sıcaklığı yağın akışkanlığı için kontrol edilir.",
      "Karter tapası açılarak eski yağın süzülmesi beklenir.",
      "Yağ filtresi sökülür ve montaj yatağı temizlenir. Yeni filtre contası yağlanarak takılır.",
      "Hava ve polen filtreleri yuvalarından sökülür, yuvaları vakumla temizlenip yenileri takılır.",
      "Karter tapası tork anahtarı ile sıkılır ve araç yere indirilir.",
      "Aracın fabrika verisi kadar yeni motor yağı doldurulur, motor çalıştırılıp sızıntı kontrolü yapılır.",
      "Motor yağı ömrü göstergeden sıfırlanır."
    ],
    faq: [
      {
        question: "Motor yağı hangi sıklıkta kontrol edilmelidir?",
        answer: "Her 2-3 bin kilometrede bir, düz bir zeminde motor soğukken yağ çubuğundan seviye kontrolü yapılması önerilir. İki çizgi arasında olması idealdir."
      },
      {
        question: "Hangi motor yağı markasını kullanıyorsunuz?",
        answer: "Mobil 1, Castrol, Liqui Moly ve Shell gibi dünya lideri, otomobil üreticilerinin (VW, BMW, Mercedes vb.) onay kodlarına sahip tam sentetik yağları tercih ediyoruz."
      }
    ],
    seoTitle: "Motor Yağı ve Filtre Değişimi | Bartın AVS Servis",
    seoDescription: "Bartın'da hızlı ve güvenilir motor yağı değişimi. Orijinal filtre seçenekleri, kaliteli tam sentetik motor yağları ve karter contası yenileme işlemleri."
  },
  {
    slug: "aku-sarj-sistemleri",
    title: "Akü & Şarj Sistemleri",
    shortDescription: "Akü ölçümü, şarj alternatörü testleri, akü değişimi ve Start-Stop sistemleri akü adaptasyon işlemleri.",
    description: "Araç marş basma gücünü aküden alır. Özellikle kış aylarında sıcaklığın düşmesiyle akü kimyasal reaksiyon gücü azalır ve yolda kalma riskiniz artar. AVS Otomotiv olarak, akülerinizi profesyonel test cihazlarıyla ölçüyor, şarj dinamosunun aküyü besleme performansını test ediyor ve gerekirse yeni akü montajı ile Start-Stop kodlamalarını gerçekleştiriyoruz.",
    icon: "BatteryCharging",
    checkList: [
      "Akü voltajı ve soğuk marş akımı (CCA) değerlerinin ölçümü",
      "Alternatörün rölantide ve yük altında şarj voltajı ölçümleri",
      "Akü kutup başlarının korozyon ve gevşeklik yönünden kontrolü",
      "Şase ve ana besleme kablolarında voltaj kayıpları ölçümü",
      "Araç kilitliyken çekilen akım (kaçak akım) kontrolü",
      "Yeni takılan AGM/EFB akülerin araca bilgisayarla tanıtılması (kodlama)"
    ],
    symptoms: [
      "Marşa basıldığında motorun zorlanarak dönmesi veya 'tık' sesi gelmesi",
      "Start-Stop sisteminin devreye girmemesi veya sürekli akü uyarısı vermesi",
      "Araç içi gösterge ekranında 'Akü Zayıf' veya şarj lambası uyarısı",
      "Farların motor devrine göre parlayıp sönmesi",
      "Korna sesinde zayıflama veya uzaktan kumandanın geç algılaması"
    ],
    process: [
      "Akü test cihazı kutuplara bağlanarak CCA ve iç direnç ölçümleri yapılır.",
      "Cihazdan çıkan yazılı akü raporu müşteriye sunulur.",
      "Araç çalıştırılarak alternatörün şarj dinamosu çıkış voltajı denetlenir.",
      "Akü değişimi gerekiyorsa, araç elektrik akımı kesilmeden (bellek koruyucu ile) eski akü sökülür.",
      "Yeni akü takıldıktan sonra kutup başları greslenerek sıkılır.",
      "Start-stop özellikli akıllı şarj sistemine sahip araçlarda yeni akü kodu ECU'ya girilir."
    ],
    faq: [
      {
        question: "Bir araç aküsünün ömrü ne kadardır?",
        answer: "Ortalama akü ömrü kullanım alışkanlıkları ve hava şartlarına bağlı olarak 3 ila 5 yıl arasındadır. Start-stop sistemine sahip araçlarda AGM veya EFB aküler tercih edilmelidir."
      },
      {
        question: "Start-Stop akü değişimi sonrası neden kodlama yapılır?",
        answer: "Araç beyni, akünün yaşlandığını bilerek şarj algoritmasını değiştirir. Yeni akü takıldığında beyne bunu tanıtmazsanız, alternatör yeni aküyü eski akü gibi şarj ederek ömrünü erken bitirebilir."
      }
    ],
    seoTitle: "Akü Değişimi ve Şarj Testi | Bartın AVS Otomotiv",
    seoDescription: "Bartın'da garantili akü satışı ve değişimi. Start-Stop AGM/EFB akü kodlama, alternatör şarj dinamosu ölçümü ve kaçak akım tespiti AVS'de."
  },
  {
    slug: "genel-kontrol",
    title: "Genel Kontrol",
    shortDescription: "Seyahat öncesi veya araç alım-satım öncesi motor, fren, yürüyen aksam ve elektronik sistemlerin detaylı check-up kontrolü.",
    description: "Uzun yola çıkmadan önce veya mevsim geçişlerinde aracınızın genel durumundan emin olmak istersiniz. Genel kontrol hizmetimiz, aracınızın güvenliğini ve konforunu etkileyen 40 farklı noktanın titizlikle incelenmesini kapsar. Bu sayede sürpriz arızaların önüne geçerek seyahatlerinizi huzurla yapabilirsiniz.",
    icon: "Compass",
    checkList: [
      "Tüm sıvı seviyelerinin ve kalitesinin muayenesi (fren, soğutma, cam vb.)",
      "Fren disk ve balatalarının fiziksel aşınma durumları",
      "Lastiklerin diş derinlikleri ve üretim yılı (DOT) kontrolleri",
      "Süspansiyon sistemi amortisör, körük ve salıncak boşlukları",
      "Egzoz hattında kaçak, gevşeme ve askı lastiği kontrolleri",
      "Aydınlatma, silecekler ve cam yıkama fıskiyelerinin çalışması",
      "Diagnostik bilgisayar ile tüm elektronik sistem hata kodu kontrolü",
      "Kabin içi ısıtma ve klima üfleme sıcaklık kontrolleri"
    ],
    symptoms: [
      "Uzun seyahat veya tatil öncesi güvenlik teyidi ihtiyacı",
      "Mevsimsel (Kış / Yaz) geçişlerde hazırlık talebi",
      "İkinci el araç alımı veya satımı öncesi durum tespiti isteği",
      "Aracın genel performansında veya seslerinde değişiklik şüphesi"
    ],
    process: [
      "Araç servis alanına alınır ve ilk olarak hata kodu taraması yapılır.",
      "Kaput altındaki akü, kayışlar, hortumlar ve sıvılar gözle incelenir.",
      "Araç lifte kaldırılarak yürüyen aksam, ön takım ve sızıntı denetimleri tamamlanır.",
      "Lastiklerin durumları ve havaları kontrol edilir.",
      "Fren mekanizması görsel ve kumpas yardımıyla incelenir.",
      "Kontrol listesi (check-up) raporu detaylandırılarak müşteriye sunulur, yapılması elzem olanlar önceliklendirilir."
    ],
    faq: [
      {
        question: "Genel kontrol ne kadar sürer?",
        answer: "Yaklaşık 30 ila 45 dakika süren detaylı bir işlemdir. Randevu alarak geldiğinizde bekleme salonumuzda çayınızı içerken işlemleriniz tamamlanır."
      },
      {
        question: "Bu işlem bir ekspertiz raporu yerine geçer mi?",
        answer: "Check-up hizmetimiz teknik bakım ve güvenlik odaklıdır. Boya-kaporta ekspertizi veya yasal oto ekspertiz raporu yerine geçmez, ancak mekanik kondisyon hakkında detaylı teknik bilgi verir."
      }
    ],
    seoTitle: "Araç Check-Up ve Genel Kontrol Hizmeti | Bartın AVS",
    seoDescription: "Bartın'da detaylı 40 nokta araç check-up hizmeti. Uzun yol öncesi veya mevsimlik bakım kapsamında motor, fren ve ön takım kontrolü AVS'de."
  }
];
