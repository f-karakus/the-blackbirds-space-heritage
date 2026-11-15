// ============================================================================
// THE BLACKBIRDS — NASA SPACE APPS CHALLENGE ("ABANDONED, BUT NOT FORGOTTEN")
// Complete Bilingual Dataset (Turkish & English) + Real NASA Assets & Coordinates
// ============================================================================

window.SPACE_DATA = {
  team: {
    name: "The BlackBirds",
    location: "Ankara, Türkiye",
    challenge: "Abandoned, But Not Forgotten",
    challengeUrl: "https://www.spaceappschallenge.org/",
    members: [
      {
        role_tr: "Yazılım & İnteraktif 3B Scrollytelling Mimarisi",
        role_en: "Full-Stack Scrollytelling & 3D Interactive Architecture",
        badge: "DEV / UI-UX"
      },
      {
        role_tr: "Uzay Mirası Araştırması, Hikaye Kurgusu & İngilizce İçerik (Lise Hazırlık)",
        role_en: "Space Heritage Research, First-Person Narrative & Bilingual Curation",
        badge: "STORY / RESEARCH"
      }
    ]
  },

  launchMissions: {
    osiris_rex: {
      id: "osiris_rex",
      nssdcId: "2016-055A",
      sourceUrl: "https://svs.gsfc.nasa.gov/12716/",
      name_tr: "OSIRIS-REx — Atlas V 411 (NASA SVS #12716)",
      name_en: "OSIRIS-REx — Atlas V 411 (NASA SVS #12716)",
      video: "./assets/video/LARGE_MP4-OSIRIS_REx_Launch_Broadcast_Ground.mp4",
      poster: "./assets/images/osiris_ground_preview.jpg",
      pad: "Cape Canaveral SLC-41 // Ground ISO",
      date: "8 Eylül 2016 / 23:05 UTC (NASA SVS #12716)",
      thrust_kn: 5515,
      max_alt_km: 1.14,
      max_alt_m: 1140,
      max_vel_kms: 0.105,
      max_vel_ms: 105,
      max_vel_kmh: 378,
      stages: [
        {
          threshold: 0.0,
          code: "T-00:04.0 // SLC-41 GROUND ISO CAMERA",
          title_tr: "Rampada Son Saniyeler: Atlas V 411 Hazır (0 m)",
          title_en: "Final Seconds on Pad SLC-41: Atlas V 411 Ready (0 m)",
          desc_tr: "58 metre boyundaki Atlas V 411 roketi, 105 metrelik yıldırım kulelerinin arasında ateşleme için bekliyor. Kaydırarak motorları ateşleyin. (Kaynak: NASA SVS #12716 / NSSDCA 2016-055A)",
          desc_en: "Standing 58 meters tall between the 105-meter lightning masts, Atlas V 411 awaits ignition. Scroll down to ignite the engines. (Source: NASA SVS #12716 / NSSDCA 2016-055A)"
        },
        {
          threshold: 0.08,
          code: "T-00:02.7 // RD-180 & AJ-60A IGNITION",
          title_tr: "RD-180 Ana Motoru ve Katı Yakıt İticisi Ateşleniyor",
          title_en: "RD-180 & Solid Rocket Booster Ignition",
          desc_tr: "Kıvılcımlar çakıyor, dev alev sütunu açılıyor ve duman bulutları sağa doğru hızla yayılırken ~5.515 kN itki kuvveti kilitler üzerinde yükseliyor.",
          desc_en: "Sparks shower the pad as the RD-180 and AJ-60A booster ignite, building ~5,515 kN of thrust while exhaust clouds billow across the trench."
        },
        {
          threshold: 0.26,
          code: "T+00:01.1 // LIFTOFF FROM PAD SLC-41",
          title_tr: "İtki Ağırlığı Aştı: Kalkış Başladı! (0 m → 105 m)",
          title_en: "Liftoff! Atlas V 411 Clears Hold-Down Clamps (0 m → 105 m)",
          desc_tr: "1.42G itki/ağırlık oranıyla tutucu kilitler bırakılıyor! ~395 tonluk roket yoğun alev ve dumanların içinden yükselmeye başlıyor.",
          desc_en: "At a ~1.42G thrust-to-weight ratio, hold-down clamps release and the ~395-ton rocket rises ponderously out of the exhaust trench."
        },
        {
          threshold: 0.52,
          code: "T+00:07.5 // TOWER CLEARANCE (105 METRE)",
          title_tr: "105 Metrelik Yıldırım Kuleleri Aşıldı (105 m → 480 m)",
          title_en: "Clearing the 105-Meter Lightning Towers (105 m → 480 m)",
          desc_tr: "Roket 105 metrelik rampa kulelerini geride bırakıp hızını 160 km/saate (~45 m/s) çıkarırken duman bulutları tüm rampayı kaplıyor.",
          desc_en: "Clearing the 105-meter pad towers, the vehicle accelerates past 160 km/h (~45 m/s) as exhaust plumes blanket the launch complex."
        },
        {
          threshold: 0.80,
          code: "T+00:18.0 // INITIAL CLIMB & PITCH-OVER (1.14 KM)",
          title_tr: "İlk Tırmanış: 1.140 Metre İrtifa & 378 km/sa Hız",
          title_en: "Initial Climb Out of Camera Frame: 1,140 m & 378 km/h",
          desc_tr: "Kalkıştan sonraki 18. saniyede roket yer kamerasının kadrajından çıkarken ~1.140 metre (1.14 km) irtifaya ve ~378 km/sa (105 m/s — Mach 0.31) hıza ulaşıyor; yakıtın ~%91.2'si hala dolu!",
          desc_en: "At T+18 seconds, as the rocket climbs out of the ground camera frame, it reaches ~1,140 meters altitude and ~378 km/h (105 m/s — Mach 0.31) with ~91.2% propellant remaining."
        }
      ]
    }
  },

  spacecraft: [
    {
      id: "apollo-eagle",
      nssdcId: "1969-059C",
      order: "01",
      name_tr: "Apollo 11 Lunar Module 'Eagle' (Alt Kademe)",
      name_en: "Apollo 11 Lunar Module 'Eagle' (Descent Stage)",
      nickname_tr: "Sessizlik Denizi'nin İlk Anıtı",
      nickname_en: "First Monument of Tranquility Base",
      body: "moon",
      bodyLabel_tr: "AY // MARE TRANQUILLITATIS (SESSİZLİK DENİZİ)",
      bodyLabel_en: "MOON // MARE TRANQUILLITATIS (SEA OF TRANQUILLITY)",
      coordinates: {
        lat: 0.6741,
        lng: 23.4730,
        label: "0.6741° N, 23.4730° E",
        label_tr: "Ay Koordinatı: 0.6741° K, 23.4730° D",
        label_en: "Lunar Coord: 0.6741° N, 23.4730° E"
      },
      modelUrl: "./assets/models/apollo_lm.glb",
      imageUrl: "./assets/images/apollo11_eagle.jpg",
      secondaryImageUrl: "./assets/images/apollo11_telecast.jpg",
      cameraOrbit: "35deg 72deg 105%",
      launchDate_tr: "Fırlatma: 16 Temmuz 1969 (13:32 UTC) | İniş: 20 Temmuz 1969 (20:17 UTC)",
      launchDate_en: "Launch: July 16, 1969 (13:32 UTC) | Landed: July 20, 1969 (20:17 UTC)",
      durationCardTitle_tr: "Yüzey Görev Süresi & Kalıcı Durumu",
      durationCardTitle_en: "Surface Stay & Permanent Status",
      durationLine1Label_tr: "İnsanlı Yüzey Görevi:",
      durationLine1Label_en: "Crewed Surface Stay:",
      durationLine2Label_tr: "Güncel Durumu:",
      durationLine2Label_en: "Current Status:",
      plannedDuration_tr: "21 Saat 36 Dakika (İnişten Üst Kademe Kalkışına)",
      plannedDuration_en: "21 Hours 36 Minutes (Touchdown to Ascent Liftoff)",
      actualDuration_tr: "20 Temmuz 1969'dan Beri Sessizlik Denizi'nde Kalıcı Anıt (Lazer Reflektörü Aktif)",
      actualDuration_en: "Permanent Monument at Tranquility Base Since July 20, 1969 (Laser Reflector Active)",
      plannedDays: 1,
      actualDays: 20390,
      massKg: 2034,
      statusBadge_tr: "FIRLATMA RAMPASI & BARIŞ ANITI",
      statusBadge_en: "LAUNCH PAD & PEACE MONUMENT",
      whyAbandoned_tr: "Neil Armstrong ve Buzz Aldrin'i güvenli şekilde Ay yörüngesine döndürecek üst kademenin (Ascent Stage) Ay yüzeyinden ateşlenebilmesi için sabit bir fırlatma rampası görevi gördü ve yakıt/kütle tasarrufu için yüzeyde bırakıldı.",
      whyAbandoned_en: "Served as the stationary launch pad for the Ascent Stage carrying Neil Armstrong and Buzz Aldrin back to lunar orbit, left behind to save critical mass and propellant.",
      lastMessage_tr: "Üzerindeki paslanmaz çelik plakada şu cümle yazılı: 'Burada, Dünya gezegeninden insanlar Temmuz 1969'da Ay'a ilk kez ayak bastı. Tüm insanlık için barış içinde geldik.'",
      lastMessage_en: "Engraved on its stainless-steel ladder plaque: 'Here men from the planet Earth first set foot upon the Moon, July 1969, A.D. We came in peace for all mankind.'",
      scienceContribution_tr: "21.55 kg Ay taşı ve toprağı örneğinin toplanmasını sağladı; bugün hâlâ Dünya'dan gönderilen lazer sinyallerini yansıtarak Ay'ın yılda ~3.8 cm uzaklaştığını ölçen LRRR reflektörünü ve sismometreyi taşıdı.",
      scienceContribution_en: "Enabled collection of 21.55 kg of lunar samples and deployed the Laser Ranging Retroreflector (LRRR), which still reflects Earth lasers today to prove the Moon recedes by ~3.8 cm per year.",
      sources: [
        { label: "NASA NSSDCA (1969-059C)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C" },
        { label: "NASA Apollo 11 Mission Overview", url: "https://www.nasa.gov/mission/apollo-11/" }
      ],
      firstPersonStory_tr: "Ben Eagle'ın altın folyoyla sarılı alt kademesiyim. 20 Temmuz 1969 günü yakıtım son saniyelere düşmüşken Neil Armstrong beni kayalık kraterlerin üzerinden aşırıp Sessizlik Denizi'nin tozlu yüzeyine indirdi. Merdivenimden inen ilk insanın botlarının gri regolith üzerinde bıraktığı ilk izleri en yakından ben gördüm. 21 saat 36 dakika sonra ayrılık vakti geldiğinde, arkadaşlarımın Dünya'ya dönebilmesi için kendi omuzlarımı onlara fırlatma rampası yaptım. Ateşleme alevleri altın kapton örtümü savurdu ama dört ayağım yerinden bile kıpırdamadı. Şimdi bacaklarımdaki barış plakasını sessizlik içinde koruyorum.",
      firstPersonStory_en: "I am the gold-wrapped descent stage of Lunar Module Eagle. On July 20, 1969, with seconds of fuel remaining, Neil Armstrong guided my four landing pads past a boulder-strewn crater onto the Sea of Tranquility. I felt humanity step down my nine-rung ladder into the gray lunar dust. Just 21 hours and 36 minutes later, when it was time for my crew to go home, I became their launchpad—absorbing the fiery blast of the ascent engine so they could live. I remain here in airless silence, guarding the plaque promising we came in peace for all mankind.",
      hotspots: [
        { pos: "0m 0.5m 1.2m", label_tr: "Barış Plakası & 9 Basamaklı Merdiven", label_en: "Peace Plaque & 9-Rung Ladder" },
        { pos: "1.1m -0.4m 0.8m", label_tr: "Ay Tozu Sensörlü İniş Ayakları", label_en: "Lunar Contact Probe Landing Pads" },
        { pos: "-0.8m 0.2m -0.6m", label_tr: "Altın Kapton Termal Kalkan", label_en: "Gold Kapton Thermal Micrometeoroid Shield" }
      ]
    },
    {
      id: "lunar-rover",
      nssdcId: "1971-063C / 1972-031C / 1972-096C",
      order: "02",
      name_tr: "Lunar Roving Vehicle (Apollo 15, 16, 17 — 3 Ayrı 'Ay Arabası')",
      name_en: "Lunar Roving Vehicle (Apollo 15, 16, 17 — 3 Separate 'Moon Buggies')",
      nickname_tr: "Kendi Vedasını Canlı Yayınlayan Gezgin",
      nickname_en: "The Rover That Broadcast Its Own Farewell",
      body: "moon",
      bodyLabel_tr: "AY // HADLEY-APENNINE, DESCARTES & TAURUS-LITTROW",
      bodyLabel_en: "MOON // HADLEY-APENNINE, DESCARTES & TAURUS-LITTROW",
      coordinates: {
        lat: 20.1908,
        lng: 30.7717,
        label: "20.1908° N, 30.7717° E (Apollo 17 LRV-3)",
        label_tr: "Ay Koordinatı: 20.1908° K, 30.7717° D (Apollo 17 LRV-3)",
        label_en: "Lunar Coord: 20.1908° N, 30.7717° E (Apollo 17 LRV-3)"
      },
      modelUrl: "./assets/models/lunar_rover.glb",
      imageUrl: "./assets/images/lunar_rover.jpg",
      secondaryImageUrl: "./assets/images/apollo11_telecast.jpg",
      cameraOrbit: "-38deg 68deg 105%",
      launchDate_tr: "3 Ayrı Görevde 3 Ayrı Araç: Apollo 15 (30 Tem 1971), Apollo 16 (21 Nis 1972), Apollo 17 (11 Ara 1972)",
      launchDate_en: "3 Separate Rovers on 3 Missions: Apollo 15 (Jul 30, 1971), Apollo 16 (Apr 21, 1972), Apollo 17 (Dec 11, 1972)",
      durationCardTitle_tr: "3 Görevdeki Sürüş Mesafeleri & Güncel Durum",
      durationCardTitle_en: "Driving Distances Across 3 Missions & Current Status",
      durationLine1Label_tr: "Ayrı Ayrı Sürüşler:",
      durationLine1Label_en: "Individual Drives:",
      durationLine2Label_tr: "Toplam & Son Durum:",
      durationLine2Label_en: "Total & Present State:",
      plannedDuration_tr: "Apollo 15 (LRV-1): 27.76 km • Apollo 16 (LRV-2): 26.55 km • Apollo 17 (LRV-3): 35.89 km",
      plannedDuration_en: "Apollo 15 (LRV-1): 27.76 km • Apollo 16 (LRV-2): 26.55 km • Apollo 17 (LRV-3): 35.89 km",
      actualDuration_tr: "Toplam 90.2 km — Her 3 Araç da Ay Yüzeyinde Park Halinde (LRO Uydusuyla Görüntülendi)",
      actualDuration_en: "90.2 km Total — All 3 Rovers Remain Parked on the Moon (Imaged by LRO Orbiter)",
      plannedDays: 3,
      actualDays: 3.3,
      massKg: 210,
      statusBadge_tr: "3 ADET AY YÜZEYİNDE PARK HALİNDE",
      statusBadge_en: "3 UNITS PARKED ON LUNAR SURFACE",
      whyAbandoned_tr: "Parça parça getirilmedi: Apollo 15, 16 ve 17 görevlerinin her birinde Ay Modülü'nün alt kademesindeki 'Quad 1' bölmesine katlanmış halde 1'er adet tam Ay Arabası (toplam 3 ayrı araç: LRV-1, LRV-2, LRV-3) götürüldü ve her görevde astronotlar kendi araçlarını bizzat sürdü. Dönüş modülünde (Ascent Stage) ağırlık sınırı nedeniyle 210 kg'lık araçlar Ay'da bırakıldı.",
      whyAbandoned_en: "Not brought in pieces: Apollo 15, 16, and 17 each carried its own complete foldable Lunar Roving Vehicle (LRV-1, LRV-2, and LRV-3) stowed in the Lunar Module's Quad 1 bay, driven by that mission's astronauts and left behind due to ascent mass limits.",
      lastMessage_tr: "14 Aralık 1972'de Houston'daki Ed Fendell tarafından 1.3 saniyelik radyo gecikmesiyle yönlendirilen TV kamerası, Apollo 17'nin Ay'dan kalkışını canlı yayınladıktan kısa süre sonra şarj edilemeyen gümüş-çinko (Ag-Zn) pilleri tükendi. Şu anda her 3 araç da (2009–2011'de LRO uydusunun fotoğrafladığı üzere) tekerlek izleriyle birlikte park edildikleri kraterlerde duruyor; havasız ortamda paslanmadan yalnızca güneş radyasyonuna ve +120°C / -130°C sıcaklık farklarına maruz kalıyorlar.",
      lastMessage_en: "After remotely filming Apollo 17's liftoff on December 14, 1972, LRV-3's non-rechargeable silver-zinc batteries depleted. All three rovers still sit intact with their tire tracks in their respective craters (photographed from orbit by NASA's LRO in 2009–2011), exposed only to solar UV radiation and ±125°C thermal swings.",
      scienceContribution_tr: "Astronotların yürüyüş menzilini katlayarak 3 görevde toplam 90.2 km yol kat etmelerini ve 'Yaratılış Taşı' (Genesis Rock — Apollo 15) ile turuncu volkanik cam toprağı (Apollo 17) dahil yüzlerce kilogram Ay örneği toplamalarını sağladı.",
      scienceContribution_en: "Enabled astronauts across three missions to traverse 90.2 km in total, collecting the ~4.1-billion-year-old Genesis Rock (Apollo 15) and volcanic orange glass soil (Apollo 17).",
      sources: [
        { label: "NSSDCA LRV-1 (1971-063C)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C" },
        { label: "NSSDCA LRV-2 (1972-031C)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-031C" },
        { label: "NSSDCA LRV-3 (1972-096C)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C" },
        {
          label: "NASA LRO — Imaged Parked LRVs",
          label_tr: "NASA LRO — Park Halindeki LRV Fotoğrafları",
          label_en: "NASA LRO — Imaged Parked LRVs",
          url: "https://www.nasa.gov/mission/lro/"
        }
      ],
      firstPersonStory_tr: "Havasız bir dünyada lastik şişiremezsiniz; bu yüzden tekerleklerimi piyano tellerinden örülmüş çinko kaplı çelik ağlardan ve titanyum şeritlerden yaptılar. Dünya'da 210 kilogram ağırlığımla kendi ağırlığımın iki katından fazla yük (490 kg) taşıdım! Apollo 17 sırasında çamurluğum kırıldığında astronotlar beni gri koli bandı ve lamine Ay haritalarıyla tamir ettiler. Ama en unutulmaz anım son dakikalarımdı: Gene Cernan ve Harrison Schmitt beni iniş alanından 150 metre uzağa park etti. Kalkış anında Dünya'dan gelen radyo komutuyla boynumu yukarı kaldırdım ve dostlarımın gökyüzüne yükselişini canlı yayınladım.",
      firstPersonStory_en: "In a vacuum, pneumatic rubber tires would burst—so engineers wove my four wheels from zinc-coated piano wire and titanium chevrons. Weighing 210 kilograms on Earth, I carried over twice my own weight (490 kg) across craters and mountains! When my rear fender broke on Apollo 17, astronauts repaired me with duct tape and laminated lunar maps. My proudest moment came at the very end: Gene Cernan parked me ~150 meters east of the Lunar Module. As their ascent engine ignited, my TV camera tilted upward to follow them into the stars—broadcasting my own goodbye before falling silent.",
      hotspots: [
        { pos: "0.86m 0.4m 0.95m", label_tr: "Çelik Tel Örgü Tekerlekler & Titanyum Şeritler", label_en: "Woven Piano-Wire Wheels & Titanium Chevrons" },
        { pos: "-0.35m 1.28m 0.78m", label_tr: "Şemsiye Tipi Yüksek Kazançlı Anten", label_en: "Umbrella High-Gain Parabolic Antenna" },
        { pos: "0.38m 0.98m 0.75m", label_tr: "Uzaktan Kumandalı Canlı Yayın TV Kamerası", label_en: "Remote-Controlled Broadcast TV Camera" }
      ]
    },
    {
      id: "viking-1",
      nssdcId: "1975-075C",
      order: "03",
      name_tr: "Viking 1 Lander (Thomas A. Mutch Anıt İstasyonu)",
      name_en: "Viking 1 Lander (Thomas A. Mutch Memorial Station)",
      nickname_tr: "Kızıl Gezegen'in İlk Başarılı Elçisi",
      nickname_en: "First Successful Emissary on the Red Planet",
      body: "mars",
      bodyLabel_tr: "MARS // CHRYSE PLANITIA",
      bodyLabel_en: "MARS // CHRYSE PLANITIA",
      coordinates: {
        lat: 22.4800,
        lng: -47.9700,
        label: "22.48° N, 47.97° W (Chryse Planitia)",
        label_tr: "Mars Koordinatı: 22.48° K, 47.97° B (Chryse Planitia)",
        label_en: "Mars Coord: 22.48° N, 47.97° W (Chryse Planitia)"
      },
      modelUrl: "./assets/models/viking.glb",
      imageUrl: "./assets/images/viking1_surface.jpg",
      secondaryImageUrl: "./assets/images/viking1_footpad.jpg",
      cameraOrbit: "25deg 68deg 105%",
      launchDate_tr: "Fırlatma: 20 Ağustos 1975 | İniş: 20 Temmuz 1976 (11:53 UTC)",
      launchDate_en: "Launch: August 20, 1975 | Landed: July 20, 1976 (11:53 UTC)",
      plannedDuration_tr: "90 Mars Günü (Sol)",
      plannedDuration_en: "90 Martian Sols",
      actualDuration_tr: "2.245 Sol / 2.307 Dünya Günü (Son İletişim: 11 Kasım 1982 — 24.9×)",
      actualDuration_en: "2,245 Sols / 2,307 Earth Days (Last Contact: Nov 11, 1982 — 24.9×)",
      plannedDays: 90,
      actualDays: 2245,
      massKg: 572,
      statusBadge_tr: "YAZILIM GÜNCELLEMESİYLE BAĞLANTI KOPTU",
      statusBadge_en: "LOST CONTACT VIA MEMORY OVERWRITE",
      whyAbandoned_tr: "11 Kasım 1982'de zayıflayan pillerini daha verimli şarj etmek için Dünya'dan gönderilen bir yazılım komutu, yanlışlıkla yüksek kazançlı antenin Dünya'yı bulmasını sağlayan hafıza adresinin üzerine yazıldı. Anteni yanlış yöne dönünce bir daha ulaşılamadı.",
      whyAbandoned_en: "On November 11, 1982, a battery-charging software patch sent from Earth inadvertently overwrote the memory address controlling the high-gain antenna's pointing coordinates.",
      lastMessage_tr: "11 Kasım 1982 (Sol 2245): Chryse Planitia meteoroloji raporu ve son yüzey fotoğrafları gönderildikten sonra derin sessizlik (Görev resmi kapanışı: 13 Kasım 1982).",
      lastMessage_en: "November 11, 1982 (Sol 2245): Final Chryse Planitia meteorological telemetry and imagery transmitted before antenna lock was lost (contact attempts ended May 1983).",
      scienceContribution_tr: "Mars yüzeyinden tarihteki ilk net fotoğrafları gönderdi; Mars toprağında yaşam izi arayan ilk biyolojik deneyleri gerçekleştirdi ve 6 yıl kesintisiz Mars hava durumu verisi topladı.",
      scienceContribution_en: "Transmitted humanity's first clear photographs from the Martian surface, conducted the first biological soil experiments for life, and recorded 6+ years of Martian weather cycles.",
      sources: [
        { label: "NASA NSSDCA (1975-075C)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C" },
        { label: "NASA Viking 1 Mission Page", url: "https://science.nasa.gov/mission/viking-1/" }
      ],
      firstPersonStory_tr: "Apollo 11'in Ay'a inişinin tam 7. yıldönümünde, 20 Temmuz 1976'da Mars'ın Altın Ovaları'na (Chryse Planitia) indim. Benden önce Mars'a inmeye çalışan araçlar ya parçalanmış ya da saniyeler içinde susmuştu. İndikten sadece 25 saniye sonra kendi ayağımın fotoğrafını çekip Dünya'ya yolladım; insanlar ilk kez Kızıl Gezegen'in pas rengi kayalarını ve gökyüzünü benim gözlerimden gördü! Sadece 90 gün yaşayacağımı düşünüyorlardı ama nükleer RTG jeneratörlerimle 2.245 Mars günü boyunca fırtınalara direndim. Sonunda beni susturan Mars'ın soğuğu değil, Dünya'daki mühendislerin beni kurtarmak isterken gönderdiği küçük bir kod hatası oldu. Antenim gökyüzünde yanlış bir noktaya kilitlendi; hâlâ buradayım ve bir gün bir astronotun gelip antenimi düzeltmesini bekliyorum.",
      firstPersonStory_en: "Exactly seven years after Apollo 11 touched the Moon, I landed safely on the Golden Plains of Chryse Planitia on July 20, 1976. Just 25 seconds after touchdown, I snapped a photo of my own footpad—giving humanity its first clear view of rusty Martian boulders beneath a butterscotch sky. Engineers designed me for 90 sols, yet my radioisotope generators kept me alive for 2,245 sols! Ironically, it wasn't the freezing Martian winter that ended my mission, but a well-intentioned battery software update from Earth that accidentally overwrote my antenna pointing memory. My dish turned away from home, and I have been waiting in Chryse Planitia ever since.",
      hotspots: [
        { pos: "0m 0.8m 0.3m", label_tr: "S-Bant Yüksek Kazançlı Çanak Anten", label_en: "S-Band High-Gain Dish Antenna" },
        { pos: "0.5m 0.2m 0.7m", label_tr: "Toprak Kazıcı Robotik Kol", label_en: "Surface Sampler Collector Arm" },
        { pos: "-0.4m 0.5m -0.4m", label_tr: "RTG Nükleer Güç Kaynağı Muhafazası", label_en: "RTG Radioisotope Thermoelectric Shroud" }
      ]
    },
    {
      id: "opportunity",
      nssdcId: "2003-032A",
      order: "04",
      name_tr: "Opportunity Rover (MER-B 'Oppy')",
      name_en: "Opportunity Rover (MER-B 'Oppy')",
      nickname_tr: "'Şarjım Azalıyor ve Hava Kararıyor'",
      nickname_en: "'My Battery Is Low and It's Getting Dark'",
      body: "mars",
      bodyLabel_tr: "MARS // PERSEVERANCE VALLEY, ENDEAVOUR CRATER",
      bodyLabel_en: "MARS // PERSEVERANCE VALLEY, ENDEAVOUR CRATER",
      coordinates: {
        lat: -2.0400,
        lng: -5.5200,
        label: "2.04° S, 5.52° W (Perseverance Valley)",
        label_tr: "Mars Koordinatı: 2.04° G, 5.52° B (Perseverance Valley)",
        label_en: "Mars Coord: 2.04° S, 5.52° W (Perseverance Valley)"
      },
      modelUrl: "./assets/models/opportunity.glb",
      imageUrl: "./assets/images/opportunity_panorama.jpg",
      secondaryImageUrl: "./assets/images/opportunity_sol3105.jpg",
      cameraOrbit: "-30deg 70deg 105%",
      launchDate_tr: "Fırlatma: 7 Temmuz 2003 | İniş: 25 Ocak 2004 05:05 UTC (24 Ocak 21:05 PST - JPL)",
      launchDate_en: "Launch: July 7, 2003 | Landed: Jan 25, 2004 05:05 UTC (Jan 24, 9:05 PM PST - JPL)",
      plannedDuration_tr: "90 Mars Günü (Sol) & ~1 km Sürüş Hedefi",
      plannedDuration_en: "90 Martian Sols & ~1 km Drive Target",
      actualDuration_tr: "5.111 Sol Aktif İletişim (10 Haz 2018) / 5.352 Sol Resmi Görev Sonu (13 Şub 2019) & 45.16 km",
      actualDuration_en: "5,111 Sols Active (Jun 10, 2018) / 5,352 Sols Official End (Feb 13, 2019) & 45.16 km",
      plannedDays: 90,
      actualDays: 5352,
      massKg: 185,
      statusBadge_tr: "2018 KÜRESEL TOZ FIRTINASINDA UYUDU",
      statusBadge_en: "SILENCED BY 2018 GLOBAL DUST STORM",
      whyAbandoned_tr: "Haziran 2018'de tüm Mars gezegenini saran küresel toz fırtınası (atmosferik opaklık Tau > 10.8) güneş ışığını tamamen kesti. Güneş panelleri elektrik üretemeyince iç ısıtıcıları durdu ve 1.000'den fazla kurtarma çağrısına rağmen uyanamayınca NASA 13 Şubat 2019'da görevi resmen sonlandırdı.",
      whyAbandoned_en: "In June 2018, a planet-encircling dust storm spiked atmospheric opacity above Tau 10.8, blotting out the Sun. Deprived of solar power, survival heaters failed and after 1,000+ recovery commands NASA declared mission end on Feb 13, 2019.",
      lastMessage_tr: "10 Haziran 2018 (Sol 5111) son mühendislik telemetrisi: Kritik batarya voltajı ve küresel toz fırtınası nedeniyle tamamen kararan gökyüzü verisi — NASA görev ekibi ve bilim muhabiri Jacob Margolis tarafından insan diline çevrilen ünlü özeti: 'Şarjım azalıyor ve hava kararıyor.' (My battery is low and it's getting dark.)",
      lastMessage_en: "June 10, 2018 (Sol 5111) final engineering telemetry: critically low battery and near-total atmospheric darkness—translated into human terms by the mission team and reporter Jacob Margolis as: 'My battery is low and it's getting dark.'",
      scienceContribution_tr: "Mars'ta bir zamanlar yaşamaya elverişli sıvı su bulunduğunu kanıtlayan 'yaban mersini' (hematit kürecikleri) ve alçıtaşı damarlarını keşfetti; başka bir gezegende 45.16 km ile maraton mesafesini aşan ilk araç oldu.",
      scienceContribution_en: "Discovered hematite 'blueberries' and gypsum veins proving ancient Mars once hosted liquid water; broke the extraterrestrial driving record by completing a full 45.16 km marathon.",
      sources: [
        { label: "NASA NSSDCA (2003-032A)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A" },
        { label: "NASA/JPL Opportunity Mission", url: "https://science.nasa.gov/mission/mer-opportunity/" },
        {
          label: "NASA VTAD 3D Model (MER)",
          label_tr: "NASA VTAD 3B Model (MER)",
          label_en: "NASA VTAD 3D Model (MER)",
          url: "https://science.nasa.gov/resource/mars-exploration-rovers-3d-model/"
        }
      ],
      firstPersonStory_tr: "Hava yastıklarıyla zıplayarak Eagle Krateri'nin tam içine düştüğümde takvimler Ocak 2004'ü gösteriyordu (Kaliforniya'da 24 Ocak gecesi, UTC ile 25 Ocak sabahı). Mühendisler bana sadece 90 günlük ömür biçmişti; çünkü Mars tozu güneş panellerimi kapatacaktı. Ama Mars rüzgarları bana dostluk etti ve zaman zaman panellerimi temizledi! 5.111 Mars günü boyunca (görev sonuna kadar 5.352 Sol) tam 45.16 kilometre yol kat ederek başka bir gezegende maraton koşan ilk varlık oldum ve Mars'ın kadim sularının kanıtlarını buldum. Ta ki Haziran 2018'de Azim Vadisi'nde o dev fırtına çıkana kadar... Güneşi son kez bulanık bir nokta olarak fotoğrafladım ve Dünya'ya son verimi fısıldadım: 'Şarjım azalıyor ve hava kararıyor.'",
      firstPersonStory_en: "Bouncing inside a cluster of giant airbags, I rolled to a stop inside Eagle Crater in January 2004 (Jan 24 PST / Jan 25 UTC). My creators gave me 90 sols before dust would choke my solar panels. Instead, Martian winds swept my wings clean year after year! Operating actively for 5,111 sols across a 5,352-sol mission span, I drove 45.16 kilometers and proved ancient Mars was once wet and habitable. Then, in June 2018 at Perseverance Valley, a monster global storm swallowed the sky. With my last drops of energy, I whispered my final telemetry across space: 'My battery is low and it's getting dark.'",
      hotspots: [
        { pos: "0m 0.65m 0.25m", label_tr: "Pancam Panoramik Kamera Direği", label_en: "Pancam Panoramic Camera Mast" },
        { pos: "0m 0.25m 0m", label_tr: "Tozla Kaplanan Güneş Panelleri", label_en: "Dust-Covered Solar Array Wings" },
        { pos: "0.45m -0.2m 0.35m", label_tr: "45.16 km Yol Yapan Rocker-Bogie Tekerlekler", label_en: "Rocker-Bogie Marathon Wheels" }
      ]
    },
    {
      id: "insight",
      nssdcId: "2018-042A",
      order: "05",
      name_tr: "InSight Mars Lander",
      name_en: "InSight Mars Lander",
      nickname_tr: "Mars'ın Kalp Atışlarını Dinleyen Sismolog",
      nickname_en: "The Seismologist That Listened to Mars' Heartbeat",
      body: "mars",
      bodyLabel_tr: "MARS // ELYSIUM PLANITIA",
      bodyLabel_en: "MARS // ELYSIUM PLANITIA",
      coordinates: {
        lat: 4.5024,
        lng: 135.6234,
        label: "4.5024° N, 135.6234° E (Elysium Planitia)",
        label_tr: "Mars Koordinatı: 4.5024° K, 135.6234° D (Elysium Planitia)",
        label_en: "Mars Coord: 4.5024° N, 135.6234° E (Elysium Planitia)"
      },
      modelUrl: "./assets/models/insight.glb",
      imageUrl: "./assets/images/insight_final_selfie.jpg",
      secondaryImageUrl: "./assets/images/insight_first_selfie.jpg",
      cameraOrbit: "20deg 65deg 105%",
      launchDate_tr: "Fırlatma: 5 Mayıs 2018 | İniş: 26 Kasım 2018 (19:52 UTC)",
      launchDate_en: "Launch: May 5, 2018 | Landed: November 26, 2018 (19:52 UTC)",
      plannedDuration_tr: "709 Mars Günü (Sol) / 2 Dünya Yılı",
      plannedDuration_en: "709 Martian Sols / 2 Earth Years",
      actualDuration_tr: "1.440 Sol (Son İletişim: 15 Aralık 2022 / Resmi Veda: 21 Aralık 2022 — 1.319 Deprem)",
      actualDuration_en: "1,440 Sols (Last Contact: Dec 15, 2022 / Retired: Dec 21, 2022 — 1,319 Quakes)",
      plannedDays: 709,
      actualDays: 1440,
      massKg: 358,
      statusBadge_tr: "SON ENERJİSİNİ BİLİME ADADI (ARALIK 2022)",
      statusBadge_en: "GAVE ITS FINAL WATT TO SCIENCE (DEC 2022)",
      whyAbandoned_tr: "Elysium Planitia'daki ince kızıl toz, 4 yıl boyunca iki dairesel güneş panelini tamamen kapladı. Elektrik üretimi %10'un altına düşünce, kendi ısıtıcılarını açmak yerine kalan son enerjisini sismometresini çalıştırmak için harcadı ve 15 Aralık 2022'de (Sol 1440) son sinyalini gönderdi.",
      whyAbandoned_en: "Fine reddish dust coated its circular solar arrays over four years, dropping power output below 10%. Mission team chose to spend its final watts running its seismometer until last contact on Dec 15, 2022.",
      lastMessage_tr: "19 Aralık 2022'de NASA/JPL InSight ekibinin son özçekim (PIA25287) ile birlikte yayınladığı birebir resmi veda mesajı: 'Gücüm gerçekten çok azaldı, bu yüzden gönderebileceğim son görüntü bu olabilir. Ama benim için endişelenmeyin: burada geçirdiğim süre hem verimli hem de huzurluydu.'",
      lastMessage_en: "December 19, 2022 verbatim official NASA/JPL InSight farewell message alongside PIA25287: 'My power’s really low, so this may be the last image I can send. Don’t worry about me though: my time here has been both productive and serene.'",
      scienceContribution_tr: "1.319 Mars depremi (Marsquake) ve meteorit çarpması tespit ederek Mars'ın iç yapısını (~1.830 km yarıçaplı sıvı demir çekirdeğini, mantosunu ve kabuk kalınlığını) tarihte ilk kez röntgen çeker gibi ortaya çıkardı.",
      scienceContribution_en: "Detected 1,319 marsquakes and meteoroid impacts, revealing the size of Mars' liquid core (~1,830 km radius), mantle, and crust for the first time in history.",
      sources: [
        { label: "NASA NSSDCA (2018-042A)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A" },
        { label: "NASA/JPL Photojournal PIA25287", url: "https://photojournal.jpl.nasa.gov/catalog/PIA25287" }
      ],
      firstPersonStory_tr: "Diğer kardeşlerim gibi tekerleklerim yoktu; Mars'a gezmek için değil, Kızıl Gezegen'in kalbini dinlemek için geldim. Robotik kolumla bakır renkli sismometremi (SEIS) nazikçe Mars toprağına bıraktım. Dört yıl boyunca (1.440 Sol) yerin derinliklerinden gelen 1.319 Mars depremini dinledim; böylece insanlık Mars'ın sıvı çekirdeğinin ne kadar büyük olduğunu ilk kez öğrendi. Zamanla iki yuvarlak güneş kanadımın üzeri kalın bir pas tozuyla örtüldü. Bilim insanları son enerjimi boşu boşuna ısınmak için değil, bilimi dinlemek için harcadı ve Elysium düzlüklerinin huzuruna karıştım.",
      firstPersonStory_en: "Unlike my rover siblings, I had no wheels—I came to Mars not to roam, but to place a stethoscope on the Red Planet's chest. With my robotic arm, I set my copper-domed seismometer directly onto the plains of Elysium. For 1,440 sols I felt 1,319 marsquakes ripple through the planet's interior, mapping its liquid core and crust. Gradually, fine Martian dust blanketed my twin solar fans until power dipped too low. We spent our final watts listening for quakes until the very end, sending one last dusty selfie before going serenely to sleep.",
      hotspots: [
        { pos: "1.3m 0.1m 0m", label_tr: "Tozla Kaplanan UltraFlex Güneş Fanları", label_en: "Dust-Blanketed UltraFlex Solar Fans" },
        { pos: "0.2m 0.4m 0.8m", label_tr: "SEIS Sismometre Yerleştirme Kolu (IDA)", label_en: "Instrument Deployment Robotic Arm (IDA)" },
        { pos: "-0.3m 0.5m 0.2m", label_tr: "Meteoroloji ve Manyetometre Sensörleri", label_en: "TWINS Weather & Magnetometer Suite" }
      ]
    },
    {
      id: "ingenuity",
      nssdcId: "2020-052B",
      order: "06",
      name_tr: "Ingenuity Mars Helicopter ('Ginny')",
      name_en: "Ingenuity Mars Helicopter ('Ginny')",
      nickname_tr: "Başka Bir Gezegendeki İlk Wright Kardeşler Anı",
      nickname_en: "The Wright Brothers Moment on Another Planet",
      body: "mars",
      bodyLabel_tr: "MARS // VALINOR HILLS, JEZERO CRATER",
      bodyLabel_en: "MARS // VALINOR HILLS, JEZERO CRATER",
      coordinates: {
        lat: 18.4447,
        lng: 77.4508,
        label: "18.44° N, 77.45° E (Jezero Crater)",
        label_tr: "Mars Koordinatı: 18.44° K, 77.45° D (Jezero Krateri)",
        label_en: "Mars Coord: 18.44° N, 77.45° E (Jezero Crater)"
      },
      modelUrl: "./assets/models/ingenuity.glb",
      imageUrl: "./assets/images/ingenuity_blade_shadow.jpg",
      secondaryImageUrl: "./assets/images/ingenuity_missing_blade.jpg",
      cameraOrbit: "40deg 65deg 105%",
      launchDate_tr: "Fırlatma: 30 Temmuz 2020 | İniş: 18 Şubat 2021 | İlk Uçuş: 19 Nisan 2021",
      launchDate_en: "Launch: July 30, 2020 | Landed: Feb 18, 2021 | First Flight: Apr 19, 2021",
      plannedDuration_tr: "30 Mars Günü / Sadece 5 Test Uçuşu",
      plannedDuration_en: "30 Martian Sols / Only 5 Test Flights",
      actualDuration_tr: "72 Uçuş / 128.8 Dakika / 17.0 km (Son Uçuş: 18 Ocak 2024, Sol 1035 — Sabit İstasyon)",
      actualDuration_en: "72 Flights / 128.8 Min / 17.0 km (Final Flight: Jan 18, 2024, Sol 1035 — Stationary Log)",
      plannedDays: 30,
      actualDays: 1035,
      massKg: 1.8,
      statusBadge_tr: "KANADI KIRILDI AMA HÂLÂ VERİ KAYDEDİYOR!",
      statusBadge_en: "BROKEN ROTOR BLADE — STILL LOGGING DATA!",
      whyAbandoned_tr: "18 Ocak 2024'teki 72. uçuşunda (Sol 1035), görsel navigasyon kamerasının iz sürmekte zorlandığı tekdüze kum tepeleri (Valinor Hills) üzerine sert iniş yaptı ve karbon fiber rotor kanatlarının uçları hasar gördü. Artık uçamadığı için Perseverance yola onsuz devam etti.",
      whyAbandoned_en: "On January 18, 2024 (Flight 72, Sol 1035), featureless sand ripples in Valinor Hills confused its visual navigation system during descent, damaging its carbon-fiber rotor blades on touchdown.",
      lastMessage_tr: "16 Nisan 2024 son telsiz vedası: Perseverance menzilden çıktı ama ölmedi! Güneş paneli sayesinde önümüzdeki 20 yıl boyunca her sabah uyanıp sıcaklık ve aviyonik verilerini hafızasına kaydederek gelecekteki astronotları bekleyecek.",
      lastMessage_en: "April 16, 2024 final radio link: Though Perseverance drove out of range, Ingenuity still wakes daily via solar power—logging weather and avionics telemetry to onboard memory for up to 20 years.",
      scienceContribution_tr: "Dünya atmosferinin ~%1'i yoğunluğundaki Mars havasında ~2.537 devir/dakika ile dönen kanatlarıyla motorlu, kontrollü uçuşun mümkün olduğunu kanıtladı; kanadının altında Wright Kardeşler'in 1903 uçağından küçük bir kumaş parçası taşıyor.",
      scienceContribution_en: "Proved powered, controlled aerodynamic flight in Mars' ~1%-density atmosphere at ~2,537 RPM across 72 flights and 17.0 km; carries a postage-stamp muslin swatch from the 1903 Wright Flyer.",
      sources: [
        { label: "NASA NSSDCA (2020-052B)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052B" },
        { label: "NASA/JPL Ingenuity Flight Log", url: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/" }
      ],
      firstPersonStory_tr: "Dünya kütlesiyle sadece 1.8 kilogram ağırlığındayım ve güneş panelimin tam altında Wright Kardeşler'in 1903'te uçtuğu ilk uçağın kanadından küçük bir kumaş parçası taşıyorum! Mars atmosferi Dünya'nın sadece yüzde biri kadar ince olduğu için birçok kişi uçamayacağımı söylüyordu. Ama karbon fiber kanatlarımı dakikada 2.537 kez döndürerek 19 Nisan 2021'de havalandım! Sadece 5 uçuş yapıp emekli olacaktım; oysa en yakın dostum Perseverance'a tam 72 uçuş (17.0 km) boyunca gökyüzünden rehberlik ettim! 72. inişimde kum tepeleri kanatlarımı kırdı ve gölgemde kırık kanadımın izini gördüm. Dostum Perseverance bilimsel görevine devam etmek için benden uzaklaştı... Ama ben ölmedim: Her sabah uyanıyor, hava sıcaklığını hafızama kaydediyor ve gelecekteki astronotları bekliyorum.",
      firstPersonStory_en: "Weighing just 1.8 kilograms on Earth, I carry a tiny swatch of muslin fabric from the 1903 Wright Flyer taped beneath my solar panel. skeptics doubted a helicopter could generate lift in Mars' ~1% atmosphere—yet on April 19, 2021, I spun my carbon-fiber blades at ~2,537 RPM and took flight! Built for just 5 flights, I flew 72 times covering 17.0 kilometers as an aerial scout for Perseverance. On Flight 72 (January 18, 2024), featureless sand dunes led to a hard landing that snapped my rotor tips. Though I can no longer fly, I wake each Martian morning to record telemetry in memory—waiting for future astronauts.",
      hotspots: [
        { pos: "0m 0.35m 0m", label_tr: "Wright Flyer Kumaşı & Güneş Paneli", label_en: "1903 Wright Flyer Fabric & Solar Array" },
        { pos: "0.4m 0.25m 0m", label_tr: "2.537 RPM Karbon Fiber Rotor Kanatları (72. Uçuşta Hasar Aldı)", label_en: "2,537 RPM Carbon-Fiber Coaxial Blades" },
        { pos: "0m 0.05m 0m", label_tr: "20 Yıllık Hafıza Kaydedici Gövde Kutusu", label_en: "Avionics Fuselage (Logging Data for 20 Years)" }
      ]
    },
    {
      id: "voyager-1",
      nssdcId: "1977-084A",
      order: "07",
      name_tr: "Voyager 1 & Altın Plak (Yıldızlararası Elçi)",
      name_en: "Voyager 1 & The Golden Record (Interstellar Ambassador)",
      nickname_tr: "Güneş Sistemi'ni Terk Eden Türkçe Selam",
      nickname_en: "Humanity's Time Capsule Beyond the Solar System",
      body: "interstellar",
      bodyLabel_tr: "YILDIZLARARASI UZAY // 24.5+ MİLYAR KM",
      bodyLabel_en: "INTERSTELLAR SPACE // 24.5+ BILLION KM",
      coordinates: {
        lat: 12.0,
        lng: 160.0,
        label: "Ophiuchus Constellation Direction (24.5+ Billion km)",
        label_tr: "Ophiuchus Takımyıldızı Yönü (24.5+ Milyar km)",
        label_en: "Ophiuchus Constellation Direction (24.5+ Billion km)"
      },
      modelUrl: "./assets/models/voyager.glb",
      imageUrl: "./assets/images/voyager_golden_record.jpg",
      secondaryImageUrl: "./assets/images/voyager_pale_blue_dot.jpg",
      imageCaption1_tr: "Altın Plak (Golden Record — PIA21741)",
      imageCaption1_en: "Golden Record (PIA21741)",
      imageCaption2_tr: "Soluk Mavi Nokta (Pale Blue Dot — PIA00452)",
      imageCaption2_en: "Pale Blue Dot (PIA00452 / PIA23645)",
      cameraOrbit: "30deg 70deg 105%",
      launchDate_tr: "Fırlatma: 5 Eylül 1977 (12:56 UTC) | Heliopause Geçişi: 25 Ağustos 2012 (121.6 AU)",
      launchDate_en: "Launch: September 5, 1977 (12:56 UTC) | Heliopause Crossing: Aug 25, 2012 (121.6 AU)",
      plannedDuration_tr: "5 Yıl (Jüpiter & Satürn Görevi)",
      plannedDuration_en: "5 Years (Jupiter & Saturn Flybys)",
      actualDuration_tr: "48+ Yıl (24.5+ Milyar km / 165+ AU — 17.0 km/s Güneş'e Göre Hız)",
      actualDuration_en: "48+ Years (24.5+ Billion km / 165+ AU — 17.0 km/s Heliocentric Speed)",
      plannedDays: 1825,
      actualDays: 17500,
      massKg: 721.9,
      statusBadge_tr: "YILDIZLARARASI BOŞLUKTA YOLCULUKTA",
      statusBadge_en: "DRIFTING THROUGH INTERSTELLAR SPACE",
      whyAbandoned_tr: "Güneş Sistemi'nden kaçış hızını aşarak yıldızlararası uzaya çıktı. 2030'lu yıllarda plütonyum-238 (MHW-RTG) pilleri tamamen tükendiğinde Dünya ile telsiz bağlantısı kesilecek ve Samanyolu Galaksisi'nde milyarlarca yıl sessizce süzülecek.",
      whyAbandoned_en: "Having crossed the heliopause into interstellar space at ~17.0 km/s, its plutonium-238 RTGs will deplete in the 2030s—leaving it to drift silently among the stars for billions of years.",
      lastMessage_tr: "14 Şubat 1990 (6 milyar km uzaktan son bakış): 'Soluk Mavi Nokta' (Pale Blue Dot) fotoğrafı ve üzerindeki Altın Plak'ta 55 dilde selam (Türkçe: 'Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!').",
      lastMessage_en: "February 14, 1990 (6 billion km away): Took the iconic 'Pale Blue Dot' portrait of Earth, carrying the Golden Record with greetings in 55 languages including Turkish.",
      scienceContribution_tr: "Jüpiter'in uydusu Io'da aktif volkanları keşfetti, Satürn'ün halkalarını inceledi ve Güneş'in manyetik kalkanını (Heliopause) aşarak yıldızlararası ortamı doğrudan ölçen ilk insan yapımı araç (kuru kütle 721.9 kg / fırlatma 825.5 kg) oldu.",
      scienceContribution_en: "Discovered active volcanism on Jupiter's moon Io, revealed the fine structure of Saturn's rings, and became the first human artifact (721.9 kg dry / 825.5 kg wet mass) to cross the heliopause.",
      sources: [
        { label: "NASA NSSDCA (1977-084A)", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1977-084A" },
        {
          label: "NASA Golden Record (PIA21741)",
          label_tr: "NASA Altın Plak (PIA21741)",
          label_en: "NASA Golden Record (PIA21741)",
          url: "https://science.nasa.gov/mission/voyager/golden-record-contents/greetings/"
        },
        {
          label: "NASA/JPL Pale Blue Dot (PIA23645)",
          label_tr: "NASA/JPL Soluk Mavi Nokta (PIA23645)",
          label_en: "NASA/JPL Pale Blue Dot (PIA23645)",
          url: "https://photojournal.jpl.nasa.gov/catalog/PIA23645"
        }
      ],
      firstPersonStory_tr: "Ben Ay'da ya da Mars'ta bırakılmadım; benim kaderim tüm Güneş Sistemi'ni geride bırakmaktı! 1977'de yola çıktım, Jüpiter ve Satürn'ün dev fırtınalarını selamladıktan sonra kameralarımı son kez geriye, evime çevirdim. 6 milyar kilometre öteden çektiğim fotoğrafta Dünya, bir güneş huzmesinin ortasında asılı duran küçücük bir 'Soluk Mavi Nokta'ydı. Gövdemde altın kaplamalı bakır bir plak taşıyorum: İçinde yağmurun sesi, bir annenin bebeğini öpüşü, Beethoven'ın müziği ve Türkçe dahil 55 dilde 'Sabah şerifleriniz hayrolsun' selamı var. Güneş doğup Dünya okyanusları buharlaştıktan milyarlarca yıl sonra bile, insanlığın burada yaşadığının tek kanıtı olarak yıldızların arasında süzülmeye devam edeceğim.",
      firstPersonStory_en: "I was not left on a rocky crater—my destiny was to leave the entire Solar System behind. Launched on September 5, 1977, I swept past the storms of Jupiter and the rings of Saturn before turning my camera backward one final time on Valentine's Day 1990. From 6 billion kilometers away, Earth appeared as a fragile 'Pale Blue Dot' suspended in a sunbeam. Bolted to my side is a gold-plated copper phonograph record carrying the sounds of thunder, whale songs, human heartbeats, and greetings in 55 languages—including a warm Turkish morning wish. Billions of years from now, I will still be sailing the Milky Way as proof that humanity once dreamed of the stars.",
      hotspots: [
        { pos: "0m 0m 0.9m", label_tr: "3.7 Metrelik Yüksek Kazançlı Çanak Anten", label_en: "3.7-Meter High-Gain Parabolic Dish" },
        { pos: "0.3m -0.2m 0.2m", label_tr: "Altın Plak (Golden Record — PIA21741)", label_en: "Golden Phonograph Record (PIA21741)" },
        { pos: "-0.8m -0.5m 0m", label_tr: "3 Adet MHW-RTG Nükleer Güç Kaynağı", label_en: "Triple MHW-RTG Plutonium Power Boom" }
      ]
    }
  ],

  quizQuestions: [
    {
      q_tr: "90 Mars günü (Sol) görev yapması planlanırken 5.111 Sol aktif görev (görev kapanışına dek 5.352 Sol / 14.5 yıl) yaşayarak başka bir gezegende 45.16 km maraton koşan ve 2018 toz fırtınasında 'Şarjım azalıyor ve hava kararıyor' mesajıyla veda eden araç hangisidir?",
      q_en: "Which rover was designed for just 90 Martian sols, yet operated actively for 5,111 sols (5,352 sols to mission end / 14.5 years), drove a 45.16 km marathon, and bid farewell during the 2018 global dust storm?",
      options_tr: ["Opportunity (MER-B)", "Viking 1 Lander", "InSight Lander", "Apollo 17 Ay Arabası"],
      options_en: ["Opportunity (MER-B)", "Viking 1 Lander", "InSight Lander", "Apollo 17 Lunar Rover"],
      correct: 0,
      explain_tr: "Tebrikler! Opportunity (Oppy / NSSDCA 2003-032A), 25 Ocak 2004 UTC (24 Ocak PST) inişinden Haziran 2018'e dek planlanan ömrünün ~56–59.5 katı yaşayarak uzay tarihinin en duygusal ve başarılı görevlerinden birine imza attı.",
      explain_en: "Spot on! Opportunity (MER-B / NSSDCA 2003-032A) exceeded its planned 90-sol lifespan by ~56–59.5x before the 2018 global dust storm cut off sunlight."
    },
    {
      q_tr: "18 Ocak 2024'teki 72. uçuşunda rotor kanadı kırıldığı için artık uçamayan, ancak güneş paneli çalıştığı için önümüzdeki 20 yıl boyunca her sabah uyanıp Mars hava durumunu hafızasına kaydetmeye devam eden araç hangisidir?",
      q_en: "Which spacecraft broke its rotor blade tip on Flight 72 (January 18, 2024), yet continues to wake up every morning to log Martian weather data into its onboard memory for up to 20 years?",
      options_tr: ["Ingenuity Mars Helikopteri", "Eagle Ay Modülü", "Voyager 1", "Sojourner Rover"],
      options_en: ["Ingenuity Mars Helicopter", "Eagle Lunar Module", "Voyager 1", "Sojourner Rover"],
      correct: 0,
      explain_tr: "Harika! Ingenuity ('Ginny' / NSSDCA 2020-052B) 17.0 km toplam uçuşun ardından Jezero Krateri'ndeki Valinor Tepeleri'nde sabit bir veri istasyonu olarak gelecekteki astronotları bekliyor.",
      explain_en: "Correct! Ingenuity ('Ginny' / NSSDCA 2020-052B) logged 17.0 km across 72 flights and now operates as a stationary weather testbed in Valinor Hills."
    },
    {
      q_tr: "Apollo 17 astronotları Ay'dan ayrılırken Houston'dan uzaktan kumanda edilen TV kamerasını yukarı kaldırarak kendi terk edilişini ve Challenger modülünün yükselişini Dünya'ya canlı yayınlayan araç hangisidir?",
      q_en: "Which spacecraft tilted its remote-controlled TV camera upward from Houston (with a 1.3s radio delay) to broadcast the astronauts' liftoff—and its own abandonment—live to Earth?",
      options_tr: ["Lunar Roving Vehicle (Ay Arabası)", "Viking 1 Lander", "InSight Lander", "Pioneer 10"],
      options_en: ["Lunar Roving Vehicle (Moon Buggy)", "Viking 1 Lander", "InSight Lander", "Pioneer 10"],
      correct: 0,
      explain_tr: "Kesinlikle doğru! Apollo 17 Ay Arabası (LRV-3 / NSSDCA 1972-096C), iniş alanından ~150 metre uzağa park edildi ve kamerasıyla Challenger modülünün kalkışını canlı yayınladı.",
      explain_en: "Exactly right! Parked ~150 meters east of the Lunar Module, Apollo 17 LRV-3 (NSSDCA 1972-096C) filmed the historic liftoff live."
    },
    {
      q_tr: "Mars'ta 1.319 deprem kaydederek gezegenin sıvı çekirdeğini haritalayan ve kalan son enerjisini ısıtıcıları yerine sismometresini çalıştırmak için harcayan araç hangisidir?",
      q_en: "Which stationary lander detected 1,319 marsquakes to map Mars' liquid core and spent its final watts of solar power running its seismometer rather than survival heaters?",
      options_tr: ["InSight Lander", "Opportunity Rover", "Apollo 11 Eagle", "Voyager 2"],
      options_en: ["InSight Lander", "Opportunity Rover", "Apollo 11 Eagle", "Voyager 2"],
      correct: 0,
      explain_tr: "Doğru! InSight Lander (NSSDCA 2018-042A), Elysium Planitia'da 1.440 Sol boyunca Mars'ın kalp atışlarını dinledi (Son iletişim: 15 Aralık 2022).",
      explain_en: "Correct! InSight (NSSDCA 2018-042A) listened to Mars' interior for 1,440 sols on Elysium Planitia before final contact on December 15, 2022."
    }
  ],

  pitchGuide: {
    thirtySec_tr: [
      "00-07 sn (Kanca): 'Ay yüzeyinde 187 tonun (~206 ABD tonu) üzerinde insan yapımı ekipman sessizce bekliyor. Onlara uzay çöpü mü diyeceğiz, yoksa insanlığın ilk gezegenlerarası anıtları mı?'",
      "07-18 sn (Çözüm & Demo): 'The BlackBirds takımı olarak hazırladığımız Abandoned, But Not Forgotten; gerçek NASA OSIRIS-REx (SVS #12716) fırlatma sekansı, Hubble Andromeda (SVS #30561) arka planı, resmi 3B .glb modelleri ve Moon/Mars Trek haritalarıyla bu yalnız kahramanların hikayesini anlatıyor.'",
      "18-30 sn (Etki): 'Lise hazırlık sınıfındaki takım arkadaşımla hedef kitlemizin bizzat kendisi olarak kurguladığımız bu çift dilli (TR/EN) platformda; her veri ve ölçüm NASA NSSDCA kaynaklarına dayalıdır!'"
    ],
    twoFortySec_tr: [
      "1. Giriş & Empati (0:00 - 0:40): 10 Haziran 2018'de Mars'tan Dünya'ya son bir veri paketi ulaştı: 'Şarjım azalıyor ve hava kararıyor.' Biz The BlackBirds takımıyız; mühendislik ve lise hazırlık sınıfı hikaye anlatıcılığını birleştirerek NASA'nın yalnız bıraktığı ama asla unutmadığı araçlara ses verdik.",
      "2. Scroll-Bound Roket Fırlatma & Telemetri (0:40 - 1:15): Sitemize girdiğinizde fare tekerleğini kaydırdıkça gerçek NASA OSIRIS-REx / Atlas V 411 fırlatma görüntüleri (SVS #12716) kare kare ilerler; ilk 18 saniyedeki irtifa (0–1.140 m), hız (0–378 km/sa) ve yakıt tüketimi senkronize hesaplanır.",
      "3. 3B NASA Modelleri & NSSDCA Doğrulanmış Kimlik Kartları (1:15 - 2:10): Uzay karanlığına ulaştığınızda Apollo 11 Eagle, Ay Arabası, Viking 1, Opportunity, InSight, Ingenuity ve Voyager 1 karşınıza çıkar. Her aracın resmi NSSDCA kodlu kimlik kartını ve kaynak bağlantılarını inceleyip hikayesini sesli dinleyebilirsiniz.",
      "4. Moon Trek & Mars Trek Haritası ve Eğitim Modülü (2:10 - 3:20): Leaflet tabanlı gezegen haritamızda araçların gerçek iniş koordinatlarına uçabilir, InSight'ın tozlanma öncesi/sonrası özçekimini (PIA22876 vs PIA25287) karşılaştırabilir ve Genç Kaşif Testini çözebilirsiniz.",
      "5. Kapanış (3:20 - 4:00): Onlar görevlerini tamamladı ve gelecekte bir astronotun yanlarına gidip tozlarını sileceği günü bekliyorlar. Terk edildiler, ama asla unutulmadılar. Teşekkürler!"
    ]
  }
};
