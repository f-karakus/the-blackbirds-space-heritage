// ============================================================================
// THE BLACKBIRDS — SCROLLYTELLING ENGINE, 3D MODEL CONTROLLER & PLANETARY MAP
// Single-Camera Photorealistic Rocket Liftoff, Stage Separation & Planetary Horizon
// ============================================================================

(function () {
  "use strict";

  const state = {
    lang: "en",
    activeLaunchMission: "osiris_rex",
    osirisDarkGrade: true,
    osirisFullRange: false,
    refreshLaunchUI: null,
    launchST: null,
    autoScrollRaf: null,
    activePlanet: "mars",
    activeTileStyle: "relief",
    soundEnabled: false,
    speakingId: null,
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    map: null,
    tileLayer: null,
    markers: [],
    lenis: null,
    autoScrollingLaunch: false
  };

  if (window.customElements) {
    customElements.whenDefined("model-viewer").then(() => {
      const MV = customElements.get("model-viewer");
      if (MV) {
        MV.dracoDecoderLocation = "./assets/vendor/draco/";
      }
    });
  }

  const i18n = {
    tr: {
      navLaunch: "Fırlatma",
      navStories: "Araç Hikayeleri (3B)",
      navComparison: "Ömür & Toz Analizi",
      navMap: "Moon & Mars Trek",
      navQuiz: "Genç Kaşif Testi",
      navPitch: "Jüri Sunumu",
      heroBadge: "NASA SPACE APPS // THE BLACKBIRDS",
      heroTitle: "Abandoned, But Not Forgotten",
      heroSubtitle:
        "Kaydırdıkça roketi ateşleyin ve Dünya'dan ayrılın; Ay ve Mars'ta geride bıraktığımız yalnız elçilerin hikayelerini dinleyin.",
      scrollPrompt: "↓ KAYDIR ↓",
      autoLaunchBtn: "FIRLATMAYI BAŞLAT",
      switchRocketLabel: "Fırlatma Aracı Seç:",
      hudAlt: "İRTİFA",
      hudVel: "HIZ",
      hudMach: "MACH / G-KUVVETİ",
      hudStage: "GÖREV EVRESİ",
      hudPropellant: "İTİCİ YAKIT",
      stat1Sub: "metrik ton (~206 ABD tonu • NASA/Apollo)",
      stat1Desc: "Ay Yüzeyindeki İnsan Yapımı Kütle",
      stat2Sub: "aktif Sol (Görev sonu: 5.352 Sol)",
      stat2Desc: "Opportunity'nin 90 Sol Hedefine Karşı Direnişi",
      stat3Sub: "uçuş • 17.0 km (NSSDCA 2020-052B)",
      stat3Desc: "Ingenuity Mars Helikopteri (1.8 kg)",
      stat4Sub: "km (166+ AU • NSSDCA 1977-084A)",
      stat4Desc: "Voyager 1'in Yıldızlararası Mesafesi",
      bgCreditLabel: "Arka Plan:",
      sectionStoriesBadge: "HİKAYELER & 3B NASA ENVANTERİ",
      sectionStoriesTitle: "Geride Kalanların Günlüğü",
      sectionStoriesDesc:
        "Her araç, insanlığın bilgi sınırını genişletmek için tek yönlü bir biletle fırlatıldı. Sağdaki 3B modelleri fareyle döndürün, kimlik kartlarını inceleyin veya sesli anlatımı başlatın.",
      listenStory: "Hikayeyi Sesli Dinle",
      stopStory: "Sesli Anlatımı Durdur",
      locateOnMap: "Haritada İniş Noktasına Uç",
      inspectFullscreen: "Tam Ekran 3B",
      toggleHolo: "Hologram / Izgara",
      resetCam: "Kamerayı Sıfırla",
      cardLaunch: "Fırlatılış & İniş",
      cardDuration: "Planlanan vs. Gerçekleşen Süre",
      cardWhy: "Neden Terk Edildi?",
      cardLastMsg: "Son Gönderdiği Mesaj / Fotoğraf",
      cardScience: "Bilime Katkısı & Mirası",
      cardSources: "Resmi Bilimsel Kaynaklar:",
      firstPersonHeader: "HİKAYESİ // SES KAYDI",
      HotspotHint: "3B Modeli 360° döndürmek için sürükleyin • Yakınlaştırmak için kaydırın",
      lifespanBadge: "MÜHENDİSLİK MUCİZESİ: PLANLANAN VS. GERÇEKLEŞEN ÖMÜR",
      lifespanTitle: "90 Gün İçin Gittiler, On Yıllarca Direndiler",
      lifespanDesc:
        "NASA mühendisleri bu araçları en zorlu senaryolara göre tasarladı. Sonuç? Neredeyse hepsi planlanan görev süresini katbekat aşarak bilim tarihini değiştirdi.",
      lifespanPanelTitle: "GÖREV DAYANIKLILIK ÇARPANI // TELEMETRY",
      dustKicker: "GERÇEK NASA ÖZÇEKİM KARŞILAŞTIRMASI (PIA22876 vs PIA25287)",
      dustTitle: "InSight'ın Sessiz Vedası: İlk ve Son Özçekim (2018 vs 2022)",
      dustDesc:
        "Kaydırıcıyı sağa-sola çekerek 1.200 Mars günü boyunca Elysium Planitia tozlarının InSight'ın güneş panellerini nasıl örttüğünü gerçek NASA fotoğraflarıyla karşılaştırın.",
      dustAfterBadge: "SOL 1211 (2022) — Tozla Kaplı Son Özçekim",
      dustBeforeBadge: "SOL 10 (2018) — İlk Özçekim",
      goldenKicker: "★ VOYAGER GOLDEN RECORD // 55 DİLDE İNSANLIK MİRASI",
      goldenTitle: "Voyager Altın Plak: Yıldızlararası Türkçe Selam (1977)",
      goldenDesc:
        "24.5 milyar km uzaktaki Voyager 1'in üzerinde bulunan Altın Plak'ta 55 dilde selam yer alır. Türkçe mesajımız 48+ yıldır yıldızların arasında yankılanıyor:",
      goldenQuoteHtml:
        "“Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!”",
      goldenPlayBtn: "Türkçe Selamı Seslendir",
      goldenMeta: "Kayıt: Cornell Üniversitesi (1977) • Bakır Üzeri Altın Kaplama Plak",
      mapBadge: "NASA MOON TREK & MARS TREK KOORDİNAT SİSTEMİ",
      mapTitle: "İnteraktif Gezegen Haritası: Tam İniş Noktaları",
      mapDesc:
        "Ay ve Mars yüzeyleri arasında geçiş yapın, NASA yörünge katmanlarını değiştirin ve terk edilen araçların bulunduğu kraterlere doğrudan uçun.",
      btnMars: "MARS (Mars Trek)",
      btnMoon: "AY (Moon Trek)",
      btnRelief: "Kabartma & Kraterler",
      btnOrbital: "NASA Yörünge Mozaiği",
      quizBadge: "LİSE & GENÇ KAŞİF ETKİLEŞİM MODÜLÜ",
      quizTitle: "Uzay Mirası Bilgi Yarışması: Onları Ne Kadar Tanıyorsun?",
      quizDesc:
        "Hikayelerini dinlediğin yalnız uzay elçileri hakkındaki 4 soruluk hızlı testi çöz ve Genç Astronot Miras Rozetini kazan!",
      nextQuestion: "Sonraki Soru",
      restartQuiz: "Testi Yeniden Başlat",
      sourcesKicker: "DOĞRULANMIŞ BİLİMSEL ARŞİV // KAYNAKÇA",
      sourcesTitle: "Bilimsel Kaynakça & Doğrulama Arşivi",
      sourcesDesc:
        "Sitedeki tüm tarihler (UTC ve yerel saat ayrımlarıyla), kütle ölçümleri, aktif görev süreleri (Sol/Yıl), kalkış görüntüleri, derin uzay mozaikleri ve yüzey harita katmanları resmi NASA & JPL açık veri arşivlerine dayandırılmıştır.",
      srcCard1Kicker: "MEDYA & GÖRSELLEŞTİRME (NASA SVS)",
      srcCard1Title: "Fırlatma Videosu & Andromeda PHAT Mozaiği",
      srcCard1Item1Html: `<strong class="text-white">OSIRIS-REx Fırlatma Sekansı:</strong> ULA Atlas V 411 yer kamerası yayını (Cape Canaveral SLC-41, 8 Eylül 2016 • NSSDCA <code class="text-orange-300">2016-055A</code>). <a href="https://svs.gsfc.nasa.gov/12716/" target="_blank" rel="noopener noreferrer" class="block text-orange-400 hover:text-orange-300 underline underline-offset-2 mt-0.5 font-mono-hud text-[11px]">svs.gsfc.nasa.gov/12716 ↗</a>`,
      srcCard1Item2Html: `<strong class="text-white">Arka Plan Uzay Mozaiği (M31):</strong> <em>&ldquo;A cropped view of the Andromeda Galaxy PHAT Mosaic. Monday, January 5, 2015.&rdquo;</em> (Hubble Space Telescope • 5760×1842 PNG). <a href="https://svs.gsfc.nasa.gov/30561/#media_group_339177" target="_blank" rel="noopener noreferrer" class="block text-orange-400 hover:text-orange-300 underline underline-offset-2 mt-0.5 font-mono-hud text-[11px]">svs.gsfc.nasa.gov/30561 ↗</a>`,
      srcCard2Kicker: "UZAY ARACI TELEMETRİ & KÜTLE KAYITLARI",
      srcCard2Title: "NASA NSSDCA & JPL Tarih/Ölçüm Doğrulaması",
      srcCard2Item1Html: `<strong class="text-white">Opportunity (MER-B):</strong> UTC saatine göre <strong>25 Ocak 2004</strong> (05:05 UTC), Kaliforniya JPL yerel saatine göre <strong>24 Ocak 2004</strong> (21:05 PST) inişi; <strong>5.111 aktif Sol</strong> ve görev sonu <strong>5.352 Sol</strong>.`,
      srcCard2Item2Html: `<strong class="text-white">Ingenuity &amp; InSight:</strong> Ingenuity 72 uçuş / 17.0 km (son uçuş 18 Oca 2024); InSight 1.440 Sol, 1.319 Mars depremi (son iletişim 15 Ara 2022).`,
      srcCard2Item3Html: `<strong class="text-white">Ay Yüzeyindeki Kütle:</strong> Apollo, Luna &amp; Surveyor mirası (~187.4 metrik ton / ~206 ABD tonu).`,
      srcCard2Link1: "NASA NSSDCA Kataloğu ↗",
      srcCard3Kicker: "3B MODELLER & GEZEGEN HARİTALARI",
      srcCard3Title: "Moon/Mars Trek WMTS & NASA 3D Resources",
      srcCard3Item1Html: `<strong class="text-white">İnteraktif Yüzey Haritaları:</strong> NASA Solar System Treks WMTS katmanları (Apollo 11/15, Viking 1, Opportunity, InSight ve Jezero/Ingenuity koordinatları).`,
      srcCard3Item2Html: `<strong class="text-white">Gerçekçi 3B Modeller (.glb):</strong> NASA 3D Resources kütüphanesinden alınan resmi araç modelleri ve yukarıdaki kartlarda her araç için listelenen doğrudan NSSDCA/JPL bağlantıları.`,
      srcMasterLabel: "DOĞRUDAN NASA NSSDCA KİMLİK KODLARI (UZAY ARAÇLARI), 3B MODEL & PHOTOJOURNAL ARŞİVİ",
      srcPillVtad: "Opportunity VTAD 3B Model ↗",
      srcPillGolden: "JPL PIA21741 (Altın Plak) ↗",
      srcPillPbd: "JPL PIA00452 / PIA23645 (Soluk Mavi Nokta) ↗",
      footerDescHtml: `Challenge: <strong class="text-orange-400">Abandoned, But Not Forgotten</strong> • NASA NSSDCA, NASA SVS (#12716 &amp; #30561), NASA 3D Resources ve Moon/Mars Trek WMTS verileriyle hazırlanmıştır.`,
      footerPitchBtn: "30s / 240s Jüri Sunum Metni",
      footerTopBtn: "↑ Başa Dön",
      modalClose: "✕ KAPAT",
      pitchKicker: "THE BLACKBIRDS (ANKARA) // JÜRİ SUNUM & VİDEO REHBERİ",
      pitchTitle: "30 Saniyelik & 240 Saniyelik Hazır Sunum Senaryosu",
      pitch30sHeading: "⚡ 30 SANİYELİK HIZLI VİDEO KURGUSU (30-SECOND GLIMPSE)",
      pitch30sListHtml: `
        <li><strong>00–07 sn (Kanca):</strong> “Ay yüzeyinde ~187.4 metrik ton (~206 ABD tonu) ve Mars'ta on binlerce kg insan yapımı bilimsel ekipman sessizce bekliyor. Onlara uzay çöpü mü diyeceğiz, yoksa insanlığın ilk gezegenlerarası anıtları mı?”</li>
        <li><strong>07–18 sn (Canlı Demo):</strong> “The BlackBirds takımı olarak geliştirdiğimiz <em>Abandoned, But Not Forgotten</em>; gerçek NASA OSIRIS-REx fırlatma sekansı (SVS #12716), Hubble Andromeda PHAT mozaiği (SVS #30561), resmi 3B NASA <code>.glb</code> modelleri ve Moon/Mars Trek haritalarıyla bu yalnız kahramanların hikayesini anlatıyor.”</li>
        <li><strong>18–30 sn (Takım Hikayesi &amp; Etki):</strong> “Lise hazırlık sınıfındaki kardeşimle hedef kitlemizin bizzat kendisi olarak kurguladığımız bu çift dilli (EN/TR) ve NSSDCA kaynaklı platformda; Opportunity'nin son mesajından hâlâ her sabah uyanan kırık kanatlı Ingenuity'ye kadar hiçbir elçimizi unutmadık!”</li>
      `,
      pitch240sHeading: "🎥 240 SANİYELİK DETAYLI JÜRİ SUNUM AKIŞI (4-MINUTE PITCH)",
      pitch240sListHtml: `
        <li><strong>0:00 – 0:40 | Empati &amp; Problem:</strong> 10 Haziran 2018'de Mars'tan gelen son telemetri: <em>“Şarjım azalıyor ve hava kararıyor.”</em> Biz The BlackBirds takımıyız; yazılım geliştirme ile lise hazırlık sınıfı hikaye anlatıcılığını birleştirerek NASA'nın terk etmek zorunda kaldığı ama asla unutmadığı araçlara ses verdik.</li>
        <li><strong>0:40 – 1:15 | Scroll-Bound Gerçek NASA OSIRIS-REx Kalkışı (SVS #12716):</strong> Ekranda fare tekerleğini kaydırdıkça Cape Canaveral SLC-41 rampasındaki gerçek Atlas V 411 fırlatma sekansı kare kare ilerler, telemetri artar ve atmosfer dışındaki gezegen ufkuna ulaşılır.</li>
        <li><strong>1:15 – 2:15 | 3B NASA Modelleri &amp; Sesli Günlükler:</strong> Apollo 11 Eagle, Ay Arabası, Viking 1, Opportunity, InSight, Ingenuity ve Voyager 1. Her aracın resmi 3B modelini 360° döndürüp sesli anlatımla hikayesini dinletebilir, InSight'ın 2018 ve 2022 özçekimlerindeki tozlanmayı canlı kaydırıcıyla gösterebilirsiniz.</li>
        <li><strong>2:15 – 3:15 | Moon Trek &amp; Mars Trek Haritası + Genç Kaşif Testi:</strong> Leaflet tabanlı gezegen haritasında araçların gerçek koordinatlarına uçuş ve hedef kitlemiz olan lise/ortaokul öğrencileri için hazırlanan interaktif bilgi yarışması.</li>
        <li><strong>3:15 – 4:00 | Kapanış:</strong> Onlar görevlerini fazlasıyla tamamladı ve bir gün bir astronotun yanlarına gidip güneş panellerindeki tozu sileceği günü bekliyorlar. Terk edildiler, ama asla unutulmadılar!</li>
      `
    },
    en: {
      navLaunch: "Launch Scrub",
      navStories: "Spacecraft Stories (3D)",
      navComparison: "Lifespan & Dust Lab",
      navMap: "Moon & Mars Trek",
      navQuiz: "Explorer Quiz",
      navPitch: "Pitch Guide",
      heroBadge: "NASA SPACE APPS // THE BLACKBIRDS",
      heroTitle: "Abandoned, But Not Forgotten",
      heroSubtitle:
        "Scroll down to ignite the engines and leave Earth behind; discover the stories of humanity's silent ambassadors left behind on the Moon, Mars, and beyond.",
      scrollPrompt: "↓ SCROLL ↓",
      autoLaunchBtn: "START LAUNCH",
      switchRocketLabel: "Select Launch Vehicle:",
      hudAlt: "ALTITUDE",
      hudVel: "VELOCITY",
      hudMach: "MACH / G-LOAD",
      hudStage: "MISSION PHASE",
      hudPropellant: "PROPELLANT",
      stat1Sub: "metric tons (~206 US tons • NASA/Apollo)",
      stat1Desc: "Human-Made Heritage Mass on the Moon",
      stat2Sub: "active Sols (Mission end: 5,352 Sols)",
      stat2Desc: "Opportunity's Endurance vs. 90-Sol Plan",
      stat3Sub: "flights • 17.0 km (NSSDCA 2020-052B)",
      stat3Desc: "Ingenuity Mars Helicopter (1.8 kg)",
      stat4Sub: "km (166+ AU • NSSDCA 1977-084A)",
      stat4Desc: "Voyager 1 Interstellar Distance",
      bgCreditLabel: "Backdrop:",
      sectionStoriesBadge: "STORIES & OFFICIAL 3D NASA ARCHIVE",
      sectionStoriesTitle: "Chronicles of the Left Behind",
      sectionStoriesDesc:
        "Every spacecraft launched on a one-way ticket to expand human knowledge. Rotate the 3D models on the right, inspect their identity cards, or listen to their audio logs.",
      listenStory: "Listen to Story",
      stopStory: "Stop Audio Log",
      locateOnMap: "Fly to Landing Site on Map",
      inspectFullscreen: "Fullscreen 3D",
      toggleHolo: "Hologram / Grid",
      resetCam: "Reset Camera",
      cardLaunch: "Launch & Touchdown",
      cardDuration: "Planned vs. Actual Duration",
      cardWhy: "Why Was It Left Behind?",
      cardLastMsg: "Final Telemetry / Photograph",
      cardScience: "Scientific Legacy",
      cardSources: "Official Scientific Sources:",
      firstPersonHeader: "STORY // AUDIO LOG",
      HotspotHint: "Drag to rotate 3D Model 360° • Scroll/Pinch to zoom",
      lifespanBadge: "ENGINEERING MIRACLE: PLANNED VS. ACTUAL LIFESPAN",
      lifespanTitle: "Sent for 90 Days, Endured for Decades",
      lifespanDesc:
        "NASA engineers built these explorers for worst-case scenarios. Nearly all of them outlived their planned operational lifespans by orders of magnitude.",
      lifespanPanelTitle: "MISSION ENDURANCE MULTIPLIER // TELEMETRY",
      dustKicker: "AUTHENTIC NASA SELFIE COMPARISON (PIA22876 vs PIA25287)",
      dustTitle: "InSight's Silent Farewell: First vs. Final Selfie (2018 vs 2022)",
      dustDesc:
        "Drag the slider left and right to compare authentic NASA photographs showing how Martian dust gradually blanketed InSight's solar arrays over 1,200 sols.",
      dustAfterBadge: "SOL 1211 (2022) — Dust-Blanketed Final Selfie",
      dustBeforeBadge: "SOL 10 (2018) — First Clean Selfie",
      goldenKicker: "★ VOYAGER GOLDEN RECORD // HUMANITY'S HERITAGE IN 55 LANGUAGES",
      goldenTitle: "Voyager Golden Record: The Interstellar Turkish Greeting (1977)",
      goldenDesc:
        "Aboard Voyager 1 — now 24.5 billion km away — the Golden Record carries greetings in 55 languages. Recorded by Prof. Peter Ian Kuniholm at Cornell University, the Turkish message has echoed among the stars for 48 years:",
      goldenQuoteHtml: `“Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!” <span class="block text-sm text-zinc-400 not-italic mt-1">(“Dear Turkish-speaking friends, may the honors of the morning be upon you!”)</span>`,
      goldenPlayBtn: "Play Turkish Greeting",
      goldenMeta: "Recorded: Cornell University (1977) • Gold-Plated Copper Phonograph Record",
      mapBadge: "NASA MOON TREK & MARS TREK COORDINATE SYSTEM",
      mapTitle: "Interactive Planetary Map: Exact Landing Sites",
      mapDesc:
        "Switch between the Moon and Mars, toggle NASA orbital imagery layers, and fly directly to the craters and plains where these silent explorers rest.",
      btnMars: "MARS (Mars Trek)",
      btnMoon: "MOON (Moon Trek)",
      btnRelief: "Shaded Relief & Craters",
      btnOrbital: "NASA Orbital Mosaic",
      quizBadge: "HIGH SCHOOL & JUNIOR EXPLORER INTERACTIVE MODULE",
      quizTitle: "Space Heritage Quiz: How Well Do You Know Them?",
      quizDesc:
        "Take the 4-question challenge about the silent space ambassadors you just met and earn your Junior Astronaut Heritage Badge!",
      nextQuestion: "Next Question",
      restartQuiz: "Restart Quiz",
      sourcesKicker: "VERIFIED SCIENTIFIC ARCHIVE // REFERENCES",
      sourcesTitle: "Scientific Bibliography & Verification Archive",
      sourcesDesc:
        "Every date (including UTC vs. local time-zone distinctions), mass measurement, active mission duration (Sols/Years), launch broadcast, deep-space mosaic, and planetary map layer on this platform is grounded in official NASA & JPL open-data archives.",
      srcCard1Kicker: "MEDIA & VISUALIZATION (NASA SVS)",
      srcCard1Title: "Launch Broadcast & Andromeda PHAT Mosaic",
      srcCard1Item1Html: `<strong class="text-white">OSIRIS-REx Launch Sequence:</strong> ULA Atlas V 411 ground broadcast camera (Cape Canaveral SLC-41, September 8, 2016 • NSSDCA <code class="text-orange-300">2016-055A</code>). <a href="https://svs.gsfc.nasa.gov/12716/" target="_blank" rel="noopener noreferrer" class="block text-orange-400 hover:text-orange-300 underline underline-offset-2 mt-0.5 font-mono-hud text-[11px]">svs.gsfc.nasa.gov/12716 ↗</a>`,
      srcCard1Item2Html: `<strong class="text-white">Deep-Space Mosaic (M31):</strong> <em>&ldquo;A cropped view of the Andromeda Galaxy PHAT Mosaic. Monday, January 5, 2015.&rdquo;</em> (Hubble Space Telescope • 5760×1842 PNG). <a href="https://svs.gsfc.nasa.gov/30561/#media_group_339177" target="_blank" rel="noopener noreferrer" class="block text-orange-400 hover:text-orange-300 underline underline-offset-2 mt-0.5 font-mono-hud text-[11px]">svs.gsfc.nasa.gov/30561 ↗</a>`,
      srcCard2Kicker: "SPACECRAFT TELEMETRY & MASS RECORDS",
      srcCard2Title: "NASA NSSDCA & JPL Date/Measurement Verification",
      srcCard2Item1Html: `<strong class="text-white">Opportunity (MER-B):</strong> Landed <strong>January 25, 2004</strong> (05:05 UTC) — <strong>January 24, 2004</strong> (21:05 PST) local California JPL time; operated for <strong>5,111 active Sols</strong> (mission end declared at <strong>5,352 Sols</strong>).`,
      srcCard2Item2Html: `<strong class="text-white">Ingenuity &amp; InSight:</strong> Ingenuity completed 72 flights / 17.0 km (final flight Jan 18, 2024); InSight operated 1,440 Sols and detected 1,319 marsquakes (last contact Dec 15, 2022).`,
      srcCard2Item3Html: `<strong class="text-white">Lunar Surface Heritage Mass:</strong> Apollo, Luna &amp; Surveyor hardware (~187.4 metric tons / ~206 US tons).`,
      srcCard2Link1: "NASA NSSDCA Master Catalog ↗",
      srcCard3Kicker: "3D MODELS & PLANETARY MAPS",
      srcCard3Title: "Moon/Mars Trek WMTS & NASA 3D Resources",
      srcCard3Item1Html: `<strong class="text-white">Interactive Surface Maps:</strong> NASA Solar System Treks WMTS layers (Apollo 11/15, Viking 1, Opportunity, InSight, and Jezero/Ingenuity coordinates).`,
      srcCard3Item2Html: `<strong class="text-white">Authentic 3D Models (.glb):</strong> Official spacecraft geometry from the NASA 3D Resources &amp; VTAD repository, paired with direct NSSDCA/JPL verification links on every card.`,
      srcMasterLabel: "DIRECT NASA NSSDCA DESIGNATIONS (SPACECRAFT), 3D MODEL & PHOTOJOURNAL ARCHIVE",
      srcPillVtad: "Opportunity VTAD 3D Model ↗",
      srcPillGolden: "JPL PIA21741 (Golden Record) ↗",
      srcPillPbd: "JPL PIA00452 / PIA23645 (Pale Blue Dot) ↗",
      footerDescHtml: `Challenge: <strong class="text-orange-400">Abandoned, But Not Forgotten</strong> • Built with official NASA NSSDCA, NASA SVS (#12716 &amp; #30561), NASA 3D Resources, and Moon/Mars Trek WMTS open data.`,
      footerPitchBtn: "30s / 240s Jury Pitch Script",
      footerTopBtn: "↑ Back to Top",
      modalClose: "✕ CLOSE",
      pitchKicker: "THE BLACKBIRDS (ANKARA) // JURY PITCH & VIDEO GUIDE",
      pitchTitle: "Ready-to-Use 30-Second & 240-Second Presentation Script",
      pitch30sHeading: "⚡ 30-SECOND VIDEO SCRIPT (30-SECOND GLIMPSE)",
      pitch30sListHtml: `
        <li><strong>00–07s (Hook):</strong> “Over ~187.4 metric tons (~206 US tons) of human-made scientific hardware rests silently on the Moon, and tens of thousands of kilograms more on Mars. Should we call them space junk — or humanity’s first interplanetary monuments?”</li>
        <li><strong>07–18s (Live Demo):</strong> “Built by Team The BlackBirds, <em>Abandoned, But Not Forgotten</em> brings these silent heroes to life using the authentic NASA OSIRIS-REx launch broadcast (SVS #12716), the Hubble Andromeda PHAT mosaic (SVS #30561), official 3D NASA <code>.glb</code> models, and interactive Moon/Mars Trek maps.”</li>
        <li><strong>18–30s (Team Story &amp; Impact):</strong> “Co-designed with a high-school prep student who represents our target audience directly, this bilingual (EN/TR) NSSDCA-verified platform ensures that from Opportunity’s final telemetry to broken-winged Ingenuity still waking up on Mars, none of our ambassadors are ever forgotten!”</li>
      `,
      pitch240sHeading: "🎥 240-SECOND DETAILED JURY PRESENTATION FLOW (4-MINUTE PITCH)",
      pitch240sListHtml: `
        <li><strong>0:00 – 0:40 | Empathy &amp; Challenge:</strong> On June 10, 2018, the final telemetry arrived from Mars: <em>“My battery is low and it’s getting dark.”</em> We are Team The BlackBirds; combining software engineering with high-school storytelling, we gave a voice to the spacecraft NASA had to leave behind but never forgot.</li>
        <li><strong>0:40 – 1:15 | Scroll-Bound Authentic NASA OSIRIS-REx Launch (SVS #12716):</strong> As you scroll, the real Atlas V 411 launch at Cape Canaveral SLC-41 advances frame by frame while live telemetry climbs into deep space.</li>
        <li><strong>1:15 – 2:15 | 3D NASA Models &amp; Audio Logs:</strong> Explore Apollo 11 Eagle, the Lunar Roving Vehicle, Viking 1, Opportunity, InSight, Ingenuity, and Voyager 1 in 360° 3D, listen to their stories, and drag the live slider comparing InSight’s 2018 and 2022 selfies.</li>
        <li><strong>2:15 – 3:15 | Moon Trek &amp; Mars Trek Map + Junior Explorer Quiz:</strong> Fly to exact landing coordinates on our Leaflet planetary map and test your knowledge in the interactive Space Heritage Quiz.</li>
        <li><strong>3:15 – 4:00 | Closing:</strong> They exceeded every expectation and now await the day future astronauts brush the dust off their solar panels. Abandoned, but never forgotten!</li>
      `
    }
  };

  let audioCtx = null;
  function playTelemetryBeep(freq = 880, duration = 0.08) {
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (_) {}
  }

  // ============================================================================
  // RENDER SPACECRAFT SCROLLYTELLING CHAPTERS
  // ============================================================================
  function renderSpacecraftChapters() {
    const container = document.getElementById("spacecraft-chapters");
    const navDots = document.getElementById("chapter-dots");
    if (!container) return;

    const t = i18n[state.lang];
    const list = window.SPACE_DATA.spacecraft;

    container.innerHTML = list
      .map((craft, idx) => {
        const isMoon = craft.body === "moon";
        const isInterstellar = craft.body === "interstellar";
        const name = state.lang === "tr" ? craft.name_tr : craft.name_en;
        const nickname = state.lang === "tr" ? craft.nickname_tr : craft.nickname_en;
        const bodyLabel = state.lang === "tr" ? craft.bodyLabel_tr : craft.bodyLabel_en;
        const launchDate = state.lang === "tr" ? craft.launchDate_tr : craft.launchDate_en;
        const planned = state.lang === "tr" ? craft.plannedDuration_tr : craft.plannedDuration_en;
        const actual = state.lang === "tr" ? craft.actualDuration_tr : craft.actualDuration_en;
        const durationCardTitle =
          state.lang === "tr"
            ? craft.durationCardTitle_tr || t.cardDuration
            : craft.durationCardTitle_en || t.cardDuration;
        const durationLine1Label =
          state.lang === "tr"
            ? craft.durationLine1Label_tr || "Plan:"
            : craft.durationLine1Label_en || "Planned:";
        const durationLine2Label =
          state.lang === "tr"
            ? craft.durationLine2Label_tr || "Gerçek:"
            : craft.durationLine2Label_en || "Actual:";
        const statusBadge = state.lang === "tr" ? craft.statusBadge_tr : craft.statusBadge_en;
        const why = state.lang === "tr" ? craft.whyAbandoned_tr : craft.whyAbandoned_en;
        const lastMsg = state.lang === "tr" ? craft.lastMessage_tr : craft.lastMessage_en;
        const science = state.lang === "tr" ? craft.scienceContribution_tr : craft.scienceContribution_en;
        const story = state.lang === "tr" ? craft.firstPersonStory_tr : craft.firstPersonStory_en;

        const accentColor = isMoon
          ? "text-stone-200 border-white/20 bg-white/[0.06]"
          : isInterstellar
          ? "text-blue-200 border-blue-400/35 bg-blue-950/60"
          : "text-orange-300 border-orange-500/35 bg-orange-500/10";

        const panelClass = isMoon
          ? "hud-panel-ivory"
          : isInterstellar
          ? "hud-panel-interstellar"
          : "hud-panel-ember";
        const stageClass = isMoon ? "moon-stage" : isInterstellar ? "interstellar-stage" : "";
        const quoteClass = isMoon ? "moon-quote" : isInterstellar ? "interstellar-quote" : "";
        const cornersClass = isInterstellar ? "hud-corners-interstellar" : "";
        const dotColor = isMoon
          ? "bg-stone-300"
          : isInterstellar
          ? "bg-blue-400"
          : "bg-orange-400";
        const subtitleColor = isMoon
          ? "text-stone-300"
          : isInterstellar
          ? "text-blue-300"
          : "text-orange-400";
        const textAccent = isInterstellar ? "text-blue-300" : "text-orange-300";
        const textAccentStrong = isInterstellar ? "text-blue-400" : "text-orange-400";
        const nssdcBadgeClass = isInterstellar
          ? "bg-blue-950/60 border-blue-400/30 text-blue-200"
          : "bg-white/[0.06] border-white/10 text-orange-300";
        const hoverBorderClass = isInterstellar
          ? "hover:border-blue-400/50"
          : "hover:border-orange-500/40";

        const hotspotsHtml = (craft.hotspots || [])
          .map((h, hIdx) => {
            const hLabel = state.lang === "tr" ? h.label_tr : h.label_en;
            return `<span class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-zinc-300">
              <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span>
              ${hIdx + 1}. ${hLabel}
            </span>`;
          })
          .join("");

        const hasDualPhotos = Boolean(craft.imageCaption2_tr && craft.secondaryImageUrl);
        const cap1 = state.lang === "tr" ? craft.imageCaption1_tr : craft.imageCaption1_en;
        const cap2 = state.lang === "tr" ? craft.imageCaption2_tr : craft.imageCaption2_en;
        const coordLabel =
          state.lang === "tr"
            ? craft.coordinates.label_tr || craft.coordinates.label
            : craft.coordinates.label_en || craft.coordinates.label;

        return `
        <article id="craft-${craft.id}" data-craft-id="${craft.id}" class="craft-chapter relative py-16 lg:py-24 border-b border-white/[0.07]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-7">
              <div class="flex items-center gap-3">
                <span class="font-mono-hud text-[11px] font-semibold px-3 py-1 rounded-full border ${accentColor}">
                  UNIT // ${craft.order} — ${bodyLabel}
                </span>
                <span class="font-mono-hud text-xs text-zinc-400">
                  ${coordLabel}
                </span>
              </div>
              <span class="font-mono-hud text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                ● ${statusBadge}
              </span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-9 items-start">
              <div class="lg:col-span-7 space-y-6">
                <div>
                  <h3 class="font-editorial text-3xl sm:text-5xl font-medium text-white tracking-tight">
                    ${name}
                  </h3>
                  <p class="text-base sm:text-lg ${subtitleColor} font-normal italic mt-1.5">
                    “${nickname}”
                  </p>
                </div>

                <div class="first-person-quote ${quoteClass} p-5 sm:p-6 rounded-r-2xl hud-panel">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="font-mono-hud text-[11px] uppercase tracking-wider ${textAccent} flex items-center gap-2">
                      <span class="inline-block w-2 h-2 rounded-full ${dotColor}"></span>
                      ${t.firstPersonHeader}
                    </span>
                    <button
                      type="button"
                      onclick="window.BlackBirdsApp.toggleSpeech('${craft.id}')"
                      id="speech-btn-${craft.id}"
                      class="inline-flex items-center gap-2 text-[11px] font-mono-hud px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold transition cursor-pointer"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                      </svg>
                      <span>${t.listenStory}</span>
                    </button>
                  </div>
                  <p class="text-zinc-200 leading-relaxed text-base sm:text-[17px] italic">
                    “${story}”
                  </p>
                </div>

                <div class="hud-panel ${panelClass} rounded-2xl p-5 sm:p-6 space-y-4">
                  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span class="font-mono-hud text-[11px] uppercase tracking-widest text-zinc-400">
                      NASA ARCHIVE IDENTITY CARD // ${state.lang === "tr" ? "KİMLİK KARTI #" + craft.order : "UNIT #" + craft.order}
                    </span>
                    <div class="flex items-center gap-3 font-mono-hud text-xs text-zinc-400">
                      ${
                        craft.nssdcId
                          ? `<span class="px-2 py-0.5 rounded border ${nssdcBadgeClass}">NSSDCA: ${craft.nssdcId}</span>`
                          : ""
                      }
                      <span>MASS: ${craft.massKg} KG</span>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="bg-black/60 p-3.5 rounded-xl border border-white/[0.08]">
                      <div class="text-[11px] font-mono-hud text-zinc-500 uppercase">${t.cardLaunch}</div>
                      <div class="text-sm font-semibold text-white mt-1">${launchDate}</div>
                    </div>
                    <div class="bg-black/60 p-3.5 rounded-xl border border-white/[0.08]">
                      <div class="text-[11px] font-mono-hud text-zinc-500 uppercase">${durationCardTitle}</div>
                      <div class="text-xs text-zinc-300 mt-1">
                        <span class="text-zinc-500">${durationLine1Label}</span> ${planned}<br/>
                        <span class="${textAccent} font-semibold">${durationLine2Label} ${actual}</span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-black/60 p-4 rounded-xl border border-white/[0.08]">
                    <div class="text-[11px] font-mono-hud ${textAccentStrong} uppercase mb-1">⚠ ${t.cardWhy}</div>
                    <p class="text-sm text-zinc-200 leading-relaxed">${why}</p>
                  </div>

                  <div class="bg-black/60 p-4 rounded-xl border border-white/[0.08]">
                    <div class="text-[11px] font-mono-hud ${isInterstellar ? "text-blue-200" : "text-amber-200"} uppercase mb-1">📡 ${t.cardLastMsg}</div>
                    <p class="text-sm text-zinc-200 leading-relaxed">${lastMsg}</p>
                  </div>

                  <div class="bg-black/60 p-4 rounded-xl border border-white/[0.08]">
                    <div class="text-[11px] font-mono-hud text-stone-300 uppercase mb-1">✦ ${t.cardScience}</div>
                    <p class="text-sm text-zinc-200 leading-relaxed">${science}</p>
                  </div>

                  <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
                    ${
                      craft.body !== "interstellar"
                        ? `<button
                            type="button"
                            onclick="window.BlackBirdsApp.flyToCraftOnMap('${craft.id}')"
                            class="inline-flex items-center gap-2 text-xs font-mono-hud px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold transition cursor-pointer"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            ${t.locateOnMap}
                          </button>`
                        : `<span class="text-xs font-mono-hud text-blue-200 px-3.5 py-2 rounded-full bg-blue-950/60 border border-blue-400/35">
                            ★ ${state.lang === "tr" ? "Güneş Sistemi Dışında (24.5+ Milyar km)" : "Beyond the Solar System (24.5+ Billion km)"}
                          </span>`
                    }
                    <button
                      type="button"
                      onclick="window.BlackBirdsApp.openPhotoModal('${craft.id}')"
                      class="inline-flex items-center gap-2 text-xs font-mono-hud px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/15 transition cursor-pointer"
                    >
                      <span>📸 ${
                        hasDualPhotos
                          ? state.lang === "tr"
                            ? "Altın Plak & Soluk Mavi Nokta Fotoğrafları"
                            : "Golden Record & Pale Blue Dot Photos"
                          : state.lang === "tr"
                            ? "Gerçek NASA Arşiv Fotoğrafı"
                            : "Authentic NASA Archive Photo"
                      }</span>
                    </button>
                  </div>

                  ${
                    craft.sources && craft.sources.length
                      ? `<div class="pt-3 mt-1 border-t border-white/[0.07] flex flex-wrap items-center gap-2 text-[11px] font-mono-hud">
                          <span class="text-zinc-500">📚 ${t.cardSources}</span>
                          ${craft.sources
                            .map((src) => {
                              const sLabel =
                                state.lang === "tr"
                                  ? src.label_tr || src.label
                                  : src.label_en || src.label;
                              return `<a href="${src.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.12] text-zinc-300 hover:${textAccent} border border-white/10 transition">${sLabel} ↗</a>`;
                            })
                            .join("")}
                        </div>`
                      : ""
                  }
                </div>
              </div>

              <div class="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
                <div
                  id="stage-${craft.id}"
                  onmouseenter="this.querySelector('model-viewer')?.setAttribute('auto-rotate','')"
                  onmouseleave="this.querySelector('model-viewer')?.removeAttribute('auto-rotate')"
                  class="model-stage ${stageClass} holo-grid hud-panel ${panelClass} hud-corners ${cornersClass} rounded-2xl overflow-hidden"
                >
                  <div class="flex items-center justify-between px-4 py-3 bg-[#060508]/95 border-b border-white/10 text-xs font-mono-hud">
                    <span class="text-zinc-200 flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full ${dotColor}"></span>
                      NASA 3D GLB // ${craft.id.toUpperCase()}
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button
                        type="button"
                        onclick="window.BlackBirdsApp.resetModelCamera('mv-${craft.id}', '${craft.cameraOrbit}')"
                        class="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 transition cursor-pointer"
                        title="${t.resetCam}"
                      >
                        ↺
                      </button>
                      <button
                        type="button"
                        onclick="window.BlackBirdsApp.openFullscreenModel('${craft.id}')"
                        class="px-3 py-1 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold transition cursor-pointer"
                      >
                        ⛶ ${t.inspectFullscreen}
                      </button>
                    </div>
                  </div>

                  <div class="relative h-[390px] sm:h-[420px] w-full">
                    <model-viewer
                      id="mv-${craft.id}"
                      src="${craft.modelUrl}"
                      alt="${name} 3D NASA Model"
                      camera-controls
                      auto-rotate-delay="0"
                      rotation-per-second="18deg"
                      camera-orbit="${craft.cameraOrbit}"
                      shadow-intensity="0"
                      exposure="1.1"
                      environment-image="neutral"
                      interaction-prompt="none"
                      loading="${idx === 0 ? "eager" : "lazy"}"
                    ></model-viewer>

                    <div class="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-hud text-zinc-400 bg-black/80 px-3 py-1.5 rounded-full border border-white/10">
                      <span>⟳ ${t.HotspotHint}</span>
                      <span class="${textAccent}">360° GLTF</span>
                    </div>
                  </div>

                  <div class="p-3.5 bg-[#060508]/90 border-t border-white/10 flex flex-wrap gap-1.5">
                    ${hotspotsHtml}
                  </div>
                </div>

                ${
                  hasDualPhotos
                    ? `<div
                        onclick="window.BlackBirdsApp.openPhotoModal('${craft.id}')"
                        class="group relative rounded-2xl overflow-hidden border border-blue-400/25 bg-[#070a14] hover:border-blue-400/60 transition cursor-pointer p-3 space-y-2.5"
                      >
                        <div class="flex items-center justify-between text-[10px] font-mono-hud text-blue-300 uppercase">
                          <span>${state.lang === "tr" ? "GERÇEK NASA ARŞİV KAYITLARI (İKİLİ GÖRSEL)" : "AUTHENTIC NASA ARCHIVE RECORDS (DUAL VIEW)"}</span>
                          <span>${state.lang === "tr" ? "BÜYÜTMEK İÇİN TIKLA ↗" : "CLICK TO ENLARGE ↗"}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2.5">
                          <div class="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                            <div class="h-28 overflow-hidden">
                              <img
                                src="${craft.imageUrl}"
                                alt="${cap1}"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                loading="lazy"
                              />
                            </div>
                            <div class="p-2 text-[10px] font-mono-hud text-zinc-200 truncate">
                              1. ${cap1}
                            </div>
                          </div>
                          <div class="rounded-xl overflow-hidden border border-blue-400/25 bg-black/60">
                            <div class="h-28 overflow-hidden">
                              <img
                                src="${craft.secondaryImageUrl}"
                                alt="${cap2}"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                loading="lazy"
                              />
                            </div>
                            <div class="p-2 text-[10px] font-mono-hud text-blue-200 truncate">
                              2. ${cap2}
                            </div>
                          </div>
                        </div>
                        <p class="text-[11px] text-zinc-400 line-clamp-2">
                          ${lastMsg}
                        </p>
                      </div>`
                    : `<div
                        onclick="window.BlackBirdsApp.openPhotoModal('${craft.id}')"
                        class="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b0a0e] ${hoverBorderClass} transition cursor-pointer"
                      >
                        <div class="grid grid-cols-12 items-center">
                          <div class="col-span-5 h-28 overflow-hidden">
                            <img
                              src="${craft.imageUrl}"
                              alt="${name}"
                              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-span-7 p-3.5">
                            <div class="text-[10px] font-mono-hud ${textAccentStrong} uppercase">
                              ${state.lang === "tr" ? "GERÇEK NASA YÜZEY KAYDI" : "AUTHENTIC NASA SURFACE RECORD"}
                            </div>
                            <div class="text-xs font-semibold text-white mt-0.5 line-clamp-1">
                              ${name}
                            </div>
                            <p class="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                              ${lastMsg}
                            </p>
                          </div>
                        </div>
                      </div>`
                }
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    if (navDots) {
      navDots.innerHTML = list
        .map(
          (c) => `
          <a
            href="#craft-${c.id}"
            data-dot-id="${c.id}"
            class="chapter-dot w-2 h-2 rounded-full bg-zinc-600 hover:bg-orange-400 transition block"
            title="${c.order} - ${state.lang === "tr" ? c.name_tr : c.name_en}"
          ></a>
        `
        )
        .join("");
    }

    // Highlight active dot in #chapter-dots without forcing WebGL auto-rotate loops
    if ("IntersectionObserver" in window && navDots) {
      if (state.mvObserver) state.mvObserver.disconnect();
      state.mvObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const craftId = entry.target.getAttribute("data-craft-id");
            if (entry.isIntersecting && craftId) {
              navDots.querySelectorAll(".chapter-dot").forEach((dot) => {
                const active = dot.getAttribute("data-dot-id") === craftId;
                dot.className = active
                  ? "chapter-dot w-2.5 h-2.5 rounded-full bg-orange-400 scale-125 transition block"
                  : "chapter-dot w-2 h-2 rounded-full bg-zinc-600 hover:bg-orange-400 transition block";
              });
            }
          });
        },
        { rootMargin: "0px 0px -40% 0px", threshold: 0.1 }
      );
      container.querySelectorAll(".craft-chapter").forEach((el) => state.mvObserver.observe(el));
    }
  }

  // ============================================================================
  // RENDER PLANNED VS ACTUAL LIFESPAN BARS
  // ============================================================================
  function renderLifespanComparison() {
    const container = document.getElementById("lifespan-bars");
    if (!container) return;

    const comparisons = [
      {
        name: "Opportunity Rover (MER-B)",
        nssdc: "2003-032A",
        planned_tr: "Planlanan: 90 Sol (3 Ay)",
        planned_en: "Planned: 90 Sols (3 Months)",
        actual_tr: "Aktif: 5.111 Sol / Toplam: 5.352 Sol (14.5 Yıl!)",
        actual_en: "Active: 5,111 Sols / Span: 5,352 Sols (14.5 Years!)",
        multiplier: "59.5×",
        percent: 100,
        color: "from-orange-600 via-orange-400 to-amber-200"
      },
      {
        name: "Viking 1 Lander",
        nssdc: "1975-075C",
        planned_tr: "Planlanan: 90 Sol (3 Ay)",
        planned_en: "Planned: 90 Sols (3 Months)",
        actual_tr: "Gerçekleşen: 2.245 Sol (2.307 Gün — 6+ Yıl!)",
        actual_en: "Actual: 2,245 Sols (2,307 Days — 6+ Years!)",
        multiplier: "24.9×",
        percent: 78,
        color: "from-amber-600 via-orange-400 to-amber-100"
      },
      {
        name: "Ingenuity Mars Helicopter",
        nssdc: "2020-052B",
        planned_tr: "Planlanan: 5 Uçuş (30 Sol)",
        planned_en: "Planned: 5 Flights (30 Sols)",
        actual_tr: "Gerçekleşen: 72 Uçuş / 17.0 km (1.035 Sol)",
        actual_en: "Actual: 72 Flights / 17.0 km (1,035 Sols)",
        multiplier: "14.4×",
        percent: 68,
        color: "from-orange-500 to-stone-200"
      },
      {
        name: "Voyager 1 & 2",
        nssdc: "1977-084A",
        planned_tr: "Planlanan: 5 Yıl (Jüpiter/Satürn)",
        planned_en: "Planned: 5 Years (Jupiter/Saturn)",
        actual_tr: "Gerçekleşen: 48+ Yıl (24.5+ Milyar km!)",
        actual_en: "Actual: 48+ Years (24.5+ Billion km!)",
        multiplier: "9.6×",
        percent: 58,
        color: "from-stone-400 to-white"
      },
      {
        name: "InSight Mars Lander",
        nssdc: "2018-042A",
        planned_tr: "Planlanan: 709 Sol (2 Yıl)",
        planned_en: "Planned: 709 Sols (2 Years)",
        actual_tr: "Gerçekleşen: 1.440 Sol (Son: 15 Ara 2022 / 1.319 Deprem)",
        actual_en: "Actual: 1,440 Sols (End: Dec 15, 2022 / 1,319 Quakes)",
        multiplier: "2.0×",
        percent: 42,
        color: "from-orange-700 to-orange-400"
      }
    ];

    container.innerHTML = comparisons
      .map((item) => {
        const pText = state.lang === "tr" ? item.planned_tr : item.planned_en;
        const aText = state.lang === "tr" ? item.actual_tr : item.actual_en;
        return `
        <div class="bg-black/60 border border-white/[0.08] rounded-xl p-4">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="font-display font-bold text-white">${item.name}</span>
              <span class="font-mono-hud text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">NSSDCA ${item.nssdc}</span>
            </div>
            <span class="font-mono-hud text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30">
              +${item.multiplier} ${state.lang === "tr" ? "BEKLENTİ ÜSTÜ" : "BEYOND PLANNED"}
            </span>
          </div>
          <div class="flex flex-wrap justify-between gap-2 text-xs text-zinc-400 mb-2 font-mono-hud">
            <span>${pText}</span>
            <span class="text-white font-semibold">${aText}</span>
          </div>
          <div class="w-full h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-white/10 p-0.5">
            <div class="h-full rounded-full bg-gradient-to-r ${item.color}" style="width: ${item.percent}%"></div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // ============================================================================
  // NASA SVS #12716 OSIRIS-REx LAUNCH SCROLLYTELLING ENGINE (96-FRAME CANVAS)
  // ============================================================================
  function initLaunchScrollytelling() {
    const canvas = document.getElementById("launch-hud-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    let currentProgress = 0;
    let renderPending = false;

    function scheduleRender() {
      if (!renderPending) {
        renderPending = true;
        requestAnimationFrame(() => {
          renderPending = false;
          renderScene();
        });
      }
    }

    // ------------------------------------------------------------------------
    // PRE-EXTRACTED 96-FRAME SEQUENCE FOR NASA OSIRIS-REx LAUNCH (ZERO H.264 CPU DECODE)
    // ------------------------------------------------------------------------
    const TOTAL_OSIRIS_FRAMES = 96;
    const osirisFrames = new Array(TOTAL_OSIRIS_FRAMES);

    function loadOsirisFrame(idx) {
      if (osirisFrames[idx]) return;
      const img = new Image();
      img.decoding = "async";
      const padded = String(idx).padStart(3, "0");
      img.src = `./assets/osiris_frames/f_${padded}.jpg`;
      img.onload = () => {
        osirisFrames[idx] = img;
        const activeIdx = Math.min(
          TOTAL_OSIRIS_FRAMES - 1,
          Math.max(0, Math.round(currentProgress * (TOTAL_OSIRIS_FRAMES - 1)))
        );
        if (idx === 0 || Math.abs(idx - activeIdx) <= 2) {
          scheduleRender();
        }
      };
    }

    loadOsirisFrame(0);
    let nextFrameToLoad = 1;
    function preloadRemainingFramesBatch() {
      const batchEnd = Math.min(TOTAL_OSIRIS_FRAMES, nextFrameToLoad + 8);
      for (let i = nextFrameToLoad; i < batchEnd; i++) {
        loadOsirisFrame(i);
      }
      nextFrameToLoad = batchEnd;
      if (nextFrameToLoad < TOTAL_OSIRIS_FRAMES) {
        setTimeout(preloadRemainingFramesBatch, 25);
      }
    }
    setTimeout(preloadRemainingFramesBatch, 30);

    function getNearestLoadedOsirisFrame(targetIdx) {
      if (osirisFrames[targetIdx]) return osirisFrames[targetIdx];
      for (let offset = 1; offset < TOTAL_OSIRIS_FRAMES; offset++) {
        if (targetIdx - offset >= 0 && osirisFrames[targetIdx - offset]) {
          return osirisFrames[targetIdx - offset];
        }
        if (targetIdx + offset < TOTAL_OSIRIS_FRAMES && osirisFrames[targetIdx + offset]) {
          return osirisFrames[targetIdx + offset];
        }
      }
      return null;
    }

    function computeOsirisVideoTime(p, duration) {
      const maxDur = Math.max(70, (duration || 84.63) - 0.25);
      // Action Window (59.0s -> 84.38s):
      // 0.00 -> 0.10 scroll: 59.0s -> 62.5s (Pre-ignition pad)
      // 0.10 -> 0.26 scroll: 62.5s -> 66.5s (RD-180 & SRB ignition, flame opens, smoke spreads)
      // 0.26 -> 1.00 scroll: 66.5s -> 84.38s (Hold-down release, liftoff & full ascent)
      if (p <= 0.10) {
        return 59.0 + (p / 0.10) * 3.5;
      } else if (p <= 0.26) {
        return 62.5 + ((p - 0.10) / 0.16) * 4.0;
      } else {
        return 66.5 + ((p - 0.26) / 0.74) * (maxDur - 66.5);
      }
    }

    // Realistic 2D deterministic astronomical star distribution (Zero vertical alignment!)
    function fract(v) {
      return v - Math.floor(v);
    }
    const stellarColors = [
      "255, 250, 244",
      "254, 243, 214",
      "253, 224, 165",
      "253, 186, 116"
    ];
    const stars = Array.from({ length: 220 }, (_, i) => {
      const rx = fract(Math.sin((i + 1) * 127.1 + 311.7) * 43758.5453);
      const ry = fract(Math.sin((i + 1) * 269.5 + 183.3) * 43758.5453);
      const mag = fract(Math.sin((i + 1) * 419.2 + 71.9) * 28461.9137);
      const colIdx = Math.floor(fract(Math.sin((i + 1) * 73.1 + 91.3) * 19384.21) * stellarColors.length);

      let r, alpha;
      if (mag < 0.75) {
        r = 0.35 + (mag / 0.75) * 0.30;
        alpha = 0.20 + (mag / 0.75) * 0.28;
      } else if (mag < 0.95) {
        r = 0.70 + ((mag - 0.75) / 0.20) * 0.35;
        alpha = 0.50 + ((mag - 0.75) / 0.20) * 0.28;
      } else {
        r = 1.15 + ((mag - 0.95) / 0.05) * 0.35;
        alpha = 0.82 + ((mag - 0.95) / 0.05) * 0.13;
      }

      return {
        x: 0.01 + rx * 0.98,
        y: 0.02 + ry * 0.84,
        r,
        alpha,
        speed: 0.15 + mag * 0.38,
        rgb: stellarColors[colIdx],
        isBrightRef: i < 6 || mag > 0.975
      };
    });

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scheduleRender();
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function renderScene() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const p = currentProgress;

      const frameIdx = Math.min(
        TOTAL_OSIRIS_FRAMES - 1,
        Math.max(0, Math.round(p * (TOTAL_OSIRIS_FRAMES - 1)))
      );
      const desiredTime = computeOsirisVideoTime(p, 84.63);
      const badgeEl = document.getElementById("osiris-video-time-badge");
      if (badgeEl) {
        badgeEl.textContent = `${state.lang === "tr" ? "KARE" : "FRAME"}: ${String(frameIdx + 1).padStart(2, "0")} / 96 (${desiredTime.toFixed(1)}s)`;
      }

      const activeFrame = getNearestLoadedOsirisFrame(frameIdx);
      if (activeFrame) {
        const fw = activeFrame.naturalWidth || 960;
        const fh = activeFrame.naturalHeight || 540;
        const fScale = Math.max(w / fw, h / fh);
        const dw = fw * fScale;
        const dh = fh * fScale;
        const dx = (w - dw) * 0.5;
        const dy = (h - dh) * 0.5;
        ctx.drawImage(activeFrame, dx, dy, dw, dh);

        // Lightweight Warm Obsidian Grade (replaces expensive CSS filter shader)
        if (state.osirisDarkGrade) {
          ctx.fillStyle = "rgba(12, 7, 4, 0.24)";
          ctx.fillRect(0, 0, w, h);
        }
      } else {
        ctx.fillStyle = "#050506";
        ctx.fillRect(0, 0, w, h);
      }

      // Seamless End-of-Launch Atmospheric Transition (p = 0.74 -> 1.00)
      if (p > 0.74) {
        const endProg = Math.min(1, (p - 0.74) / 0.26);
        const easeEnd = endProg * endProg * (3 - 2 * endProg);

        // 1) Progressive obsidian space veil blending video into #070609
        const veilGrad = ctx.createLinearGradient(0, 0, 0, h);
        veilGrad.addColorStop(0, `rgba(5, 5, 6, ${easeEnd * 0.88})`);
        veilGrad.addColorStop(0.55, `rgba(6, 5, 8, ${easeEnd * 0.92})`);
        veilGrad.addColorStop(1, `rgba(7, 6, 9, ${Math.min(1, easeEnd * 1.08)})`);
        ctx.fillStyle = veilGrad;
        ctx.fillRect(0, 0, w, h);

        // 2) Realistic Scattered Starfield (behind planetary horizon)
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const sx = s.x * w;
          const sy = (s.y * h + easeEnd * 26 * s.speed) % (h * 0.9);
          const a = s.alpha * easeEnd;

          if (s.isBrightRef) {
            const halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 4.5);
            halo.addColorStop(0, `rgba(${s.rgb}, ${(a * 0.45).toFixed(3)})`);
            halo.addColorStop(1, `rgba(${s.rgb}, 0)`);
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(sx, sy, s.r * 4.5, 0, Math.PI * 2);
            ctx.fill();

            if (i < 6) {
              const spikeLen = 4.5 + s.r * 2.2;
              ctx.strokeStyle = `rgba(${s.rgb}, ${(a * 0.34).toFixed(3)})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(sx - spikeLen, sy);
              ctx.lineTo(sx + spikeLen, sy);
              ctx.moveTo(sx, sy - spikeLen);
              ctx.lineTo(sx, sy + spikeLen);
              ctx.stroke();
            }
          }

          ctx.fillStyle = `rgba(${s.rgb}, ${a.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3) Warm Amber Planetary Horizon Arc rising smoothly from the bottom edge
        const planetRadius = Math.max(w, h) * 1.65;
        const planetCenterY = h + planetRadius - easeEnd * (h * 0.28);

        const rimGrad = ctx.createRadialGradient(
          w * 0.5,
          planetCenterY,
          planetRadius * 0.96,
          w * 0.5,
          planetCenterY,
          planetRadius * 1.035
        );
        rimGrad.addColorStop(0, "#140c08");
        rimGrad.addColorStop(0.55, "#431407");
        rimGrad.addColorStop(0.82, `rgba(249, 115, 22, ${0.55 * easeEnd})`);
        rimGrad.addColorStop(0.92, `rgba(253, 186, 116, ${0.24 * easeEnd})`);
        rimGrad.addColorStop(1, "rgba(7, 6, 9, 0)");

        ctx.fillStyle = rimGrad;
        ctx.beginPath();
        ctx.arc(w * 0.5, planetCenterY, planetRadius * 1.035, 0, Math.PI * 2);
        ctx.fill();

        const surfGrad = ctx.createLinearGradient(0, planetCenterY - planetRadius, 0, h);
        surfGrad.addColorStop(0, "#1a0f0a");
        surfGrad.addColorStop(0.4, "#090709");
        surfGrad.addColorStop(1, "#070609");

        ctx.fillStyle = surfGrad;
        ctx.beginPath();
        ctx.arc(w * 0.5, planetCenterY, planetRadius * 0.985, 0, Math.PI * 2);
        ctx.fill();
      }

      // Right-edge minimal orange progress bar
      if (w > 768) {
        const arcX = w - 68;
        const topY = 130;
        const botY = h - 130;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(arcX, botY);
        ctx.lineTo(arcX, topY);
        ctx.stroke();

        const dotY = botY - p * (botY - topY);
        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.arc(arcX, dotY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#f97316";
        ctx.beginPath();
        ctx.moveTo(arcX, botY);
        ctx.lineTo(arcX, dotY);
        ctx.stroke();
      }
    }

    function updateLaunchTelemetry(progress) {
      currentProgress = Math.max(0, Math.min(1, progress));
      scheduleRender();
      const mission = window.SPACE_DATA.launchMissions.osiris_rex;

      const altEl = document.getElementById("hud-alt-val");
      const velEl = document.getElementById("hud-vel-val");
      const machEl = document.getElementById("hud-mach-val");
      const propEl = document.getElementById("hud-prop-val");
      const propBar = document.getElementById("hud-prop-bar");
      const pctEl = document.getElementById("hud-scroll-pct");

      // Physical telemetry synchronized to the 18-second ground camera climb (0m -> 1,140m)
      const tSec = computeOsirisVideoTime(currentProgress, 84.63);

      let altMeters = 0;
      let velMs = 0;
      let velKmh = 0;
      let propPct = 100.0;
      let machText = "İTİCİ GÜÇ: %0 // 1.00G";

      if (tSec <= 62.5) {
        altMeters = 0;
        velMs = 0;
        velKmh = 0;
        propPct = 100.0;
        machText = state.lang === "tr" ? "İTİCİ GÜÇ: %0 // 1.00G" : "THRUST: 0% // 1.00G";
      } else if (tSec <= 66.5) {
        const ignProg = Math.min(1, (tSec - 62.5) / 4.0);
        const thrustPct = Math.round(ignProg * 100);
        const gForce = (1.0 + ignProg * 0.42).toFixed(2);
        altMeters = 0;
        velMs = 0;
        velKmh = 0;
        propPct = 100.0 - ignProg * 1.1;
        machText =
          state.lang === "tr"
            ? `İTİCİ GÜÇ: %${thrustPct} // ${gForce}G`
            : `THRUST: ${thrustPct}% // ${gForce}G`;
      } else {
        const flightRatio = Math.min(1, (tSec - 66.5) / 17.88);
        altMeters = Math.round(Math.pow(flightRatio, 1.92) * 1140);
        velMs = Math.round(Math.pow(flightRatio, 1.25) * 105);
        velKmh = Math.round(velMs * 3.6);
        const mach = (velMs / 343).toFixed(2);
        const gForce = (1.42 + flightRatio * 0.24).toFixed(2);
        propPct = 98.9 - flightRatio * 7.7;
        machText = `MACH ${mach} // ${gForce}G`;
      }

      if (altEl) {
        altEl.textContent =
          altMeters < 1000
            ? `${altMeters} M`
            : `${altMeters} M (${(altMeters / 1000).toFixed(2)} KM)`;
      }
      if (velEl) {
        velEl.textContent =
          state.lang === "tr"
            ? `${velKmh} KM/SA (${velMs} M/S)`
            : `${velKmh} KM/H (${velMs} M/S)`;
      }
      if (machEl) machEl.textContent = machText;
      if (propEl) propEl.textContent = `${propPct.toFixed(1)}%`;
      if (propBar) propBar.style.width = `${propPct.toFixed(1)}%`;
      if (pctEl) pctEl.textContent = `${Math.round(currentProgress * 100)}%`;

      let activeStage = mission.stages[0];
      for (const st of mission.stages) {
        if (currentProgress >= st.threshold) {
          activeStage = st;
        }
      }

      const codeEl = document.getElementById("stage-code");
      const titleEl = document.getElementById("stage-title");
      const descEl = document.getElementById("stage-desc");
      if (codeEl) codeEl.textContent = activeStage.code;
      if (titleEl) {
        titleEl.textContent = state.lang === "tr" ? activeStage.title_tr : activeStage.title_en;
      }
      if (descEl) {
        descEl.textContent = state.lang === "tr" ? activeStage.desc_tr : activeStage.desc_en;
      }

      const centerCopy = document.getElementById("hero-center-copy");
      if (centerCopy) {
        const copyFade =
          currentProgress <= 0.14
            ? 1
            : Math.max(0, Math.min(1, 1 - (currentProgress - 0.14) / 0.24));
        centerCopy.style.opacity = copyFade.toFixed(3);
        centerCopy.style.transform = `translate3d(0, ${((1 - copyFade) * -28).toFixed(1)}px, 0)`;
        centerCopy.style.pointerEvents = copyFade < 0.25 ? "none" : "";
      }
    }

    state.refreshLaunchUI = () => {
      updateLaunchTelemetry(currentProgress);
    };
    updateLaunchTelemetry(0);

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);

      state.launchST = ScrollTrigger.create({
        trigger: "#launch-pin-section",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 0.1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          updateLaunchTelemetry(self.progress);
        }
      });
    }
  }

  // ============================================================================
  // INSIGHT BEFORE / AFTER DUST COMPARISON SLIDER
  // ============================================================================
  function initDustComparisonSlider() {
    const slider = document.getElementById("insight-dust-slider");
    const beforePane = document.getElementById("insight-before-pane");
    const handle = document.getElementById("insight-slider-handle");
    const rangeInput = document.getElementById("insight-range-input");
    if (!slider || !beforePane || !handle || !rangeInput) return;

    function updateSlider(val) {
      const pct = Math.max(5, Math.min(95, Number(val)));
      beforePane.style.width = `${pct}%`;
      handle.style.left = `${pct}%`;
    }

    rangeInput.addEventListener("input", (e) => updateSlider(e.target.value));
    updateSlider(50);
  }

  // ============================================================================
  // LEAFLET.JS PLANETARY SURFACE MAP (NASA MOON TREK & MARS TREK)
  // ============================================================================
  const PLANET_TILES = {
    mars: {
      relief:
        "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png",
      orbital:
        "https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg"
    },
    moon: {
      relief:
        "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png",
      orbital:
        "https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{z}/{y}/{x}.jpg"
    }
  };

  function initPlanetaryMap() {
    const mapEl = document.getElementById("planetary-map");
    if (!mapEl || !window.L) return;

    state.map = L.map("planetary-map", {
      center: [8, 25],
      zoom: 2,
      minZoom: 1,
      maxZoom: 6,
      worldCopyJump: true
    });

    updateMapLayerAndMarkers();
  }

  function updateMapLayerAndMarkers() {
    if (!state.map) return;

    if (state.tileLayer) {
      state.map.removeLayer(state.tileLayer);
    }
    state.markers.forEach((m) => state.map.removeLayer(m));
    state.markers = [];

    const url = PLANET_TILES[state.activePlanet][state.activeTileStyle];
    state.tileLayer = L.tileLayer(url, {
      maxZoom: 6,
      attribution:
        state.activePlanet === "mars"
          ? "NASA Mars Trek / OpenPlanetaryMap"
          : "NASA Moon Trek LRO / OpenPlanetaryMap"
    }).addTo(state.map);

    const crafts = window.SPACE_DATA.spacecraft.filter((c) => c.body === state.activePlanet);
    const quickBar = document.getElementById("map-craft-buttons");

    if (quickBar) {
      quickBar.innerHTML = crafts
        .map((c) => {
          const title = state.lang === "tr" ? c.name_tr : c.name_en;
          const coordText =
            state.lang === "tr"
              ? c.coordinates.label_tr || c.coordinates.label
              : c.coordinates.label_en || c.coordinates.label;
          return `
          <button
            type="button"
            onclick="window.BlackBirdsApp.focusCraftMarker('${c.id}')"
            class="text-xs font-mono-hud px-4 py-2 rounded-full bg-zinc-900 hover:bg-white text-zinc-200 hover:text-black border border-white/10 transition cursor-pointer flex items-center gap-2"
          >
            <span class="w-2 h-2 rounded-full ${state.activePlanet === "mars" ? "bg-orange-400" : "bg-stone-200"}"></span>
            <span>${c.order}. ${title}</span>
            <span class="opacity-60">(${coordText})</span>
          </button>
        `;
        })
        .join("");
    }

    crafts.forEach((c) => {
      const color = state.activePlanet === "mars" ? "#f97316" : "#f5f5f4";
      const icon = L.divIcon({
        className: "custom-planet-marker",
        html: `<div class="craft-marker-pin" style="background:${color}; color:${color}; box-shadow: 0 0 15px ${color};">
          <span style="color:#050506; font-size:10px; font-weight:800; font-family:monospace;">${c.order}</span>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const title = state.lang === "tr" ? c.name_tr : c.name_en;
      const status = state.lang === "tr" ? c.statusBadge_tr : c.statusBadge_en;
      const coordText =
        state.lang === "tr"
          ? c.coordinates.label_tr || c.coordinates.label
          : c.coordinates.label_en || c.coordinates.label;
      const popupHtml = `
        <div class="p-1 min-w-[230px]">
          <div class="text-[10px] font-mono-hud text-orange-400 uppercase">${coordText}</div>
          <div class="text-sm font-bold text-white mt-0.5">${title}</div>
          <div class="text-xs text-zinc-300 mt-1">${status}</div>
          <img src="${c.imageUrl}" alt="${title}" class="w-full h-24 object-cover rounded-lg my-2 border border-white/15" />
          <a href="#craft-${c.id}" class="block text-center text-xs font-mono-hud py-1.5 px-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition">
            ${state.lang === "tr" ? "3B Modeli & Hikayeyi Aç →" : "Open 3D Model & Story →"}
          </a>
        </div>
      `;

      const marker = L.marker([c.coordinates.lat, c.coordinates.lng], { icon })
        .addTo(state.map)
        .bindPopup(popupHtml);

      marker._craftId = c.id;
      state.markers.push(marker);
    });
  }

  // ============================================================================
  // INTERACTIVE YOUTH SPACE HERITAGE QUIZ
  // ============================================================================
  function renderQuiz() {
    const box = document.getElementById("quiz-container");
    if (!box) return;

    const questions = window.SPACE_DATA.quizQuestions;
    const t = i18n[state.lang];

    if (state.quizIndex >= questions.length) {
      box.innerHTML = `
        <div class="text-center py-8 space-y-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 border border-orange-400 text-3xl">
            🏆
          </div>
          <h4 class="font-editorial text-3xl font-medium text-white">
            ${
              state.lang === "tr"
                ? `Görev Tamamlandı! Skorun: ${state.quizScore} / ${questions.length}`
                : `Mission Complete! Your Score: ${state.quizScore} / ${questions.length}`
            }
          </h4>
          <p class="text-zinc-300 max-w-lg mx-auto text-sm">
            ${
              state.lang === "tr"
                ? "Ay ve Mars'ta bıraktığımız sessiz kahramanların hikayelerini başarıyla öğrendin. Artık sen de 'Abandoned, But Not Forgotten' Uzay Mirası Elçisisin!"
                : "You now carry the stories of the silent robotic pioneers of the Moon and Mars as an 'Abandoned, But Not Forgotten' Space Heritage Ambassador!"
            }
          </p>
          <button
            type="button"
            onclick="window.BlackBirdsApp.restartQuiz()"
            class="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-mono-hud font-bold text-xs cursor-pointer transition"
          >
            ${t.restartQuiz}
          </button>
        </div>
      `;
      return;
    }

    const qObj = questions[state.quizIndex];
    const qText = state.lang === "tr" ? qObj.q_tr : qObj.q_en;
    const opts = state.lang === "tr" ? qObj.options_tr : qObj.options_en;

    box.innerHTML = `
      <div class="space-y-5">
        <div class="flex items-center justify-between text-xs font-mono-hud text-zinc-400">
          <span>QUESTION // ${state.quizIndex + 1} OF ${questions.length}</span>
          <span class="text-orange-400">SCORE: ${state.quizScore}</span>
        </div>
        <h4 class="text-lg sm:text-xl font-semibold text-white leading-snug">
          ${qText}
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${opts
            .map(
              (opt, idx) => `
            <button
              type="button"
              onclick="window.BlackBirdsApp.answerQuiz(${idx})"
              id="quiz-opt-${idx}"
              class="text-left p-4 rounded-xl bg-black/70 hover:bg-zinc-900 border border-white/10 hover:border-orange-400/60 transition cursor-pointer flex items-center gap-3"
            >
              <span class="font-mono-hud text-xs w-6 h-6 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-orange-300 font-bold">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span class="text-sm font-medium text-zinc-100">${opt}</span>
            </button>
          `
            )
            .join("")}
        </div>
        <div id="quiz-feedback" class="hidden p-4 rounded-xl border text-sm"></div>
      </div>
    `;
  }

  // ============================================================================
  // PUBLIC APP CONTROLLER API
  // ============================================================================
  window.BlackBirdsApp = {
    setLanguage(lang) {
      state.lang = lang;
      document.documentElement.lang = lang;
      const trBtn = document.getElementById("lang-tr-btn");
      const enBtn = document.getElementById("lang-en-btn");
      if (trBtn && enBtn) {
        trBtn.className =
          lang === "tr"
            ? "px-2.5 py-1 rounded-full bg-white text-black font-bold transition cursor-pointer"
            : "px-2.5 py-1 rounded-full text-zinc-400 hover:text-white transition cursor-pointer";
        enBtn.className =
          lang === "en"
            ? "px-2.5 py-1 rounded-full bg-white text-black font-bold transition cursor-pointer"
            : "px-2.5 py-1 rounded-full text-zinc-400 hover:text-white transition cursor-pointer";
      }

      const t = i18n[lang];
      const bindMap = {
        "i18n-nav-launch": t.navLaunch,
        "i18n-nav-stories": t.navStories,
        "i18n-nav-comparison": t.navComparison,
        "i18n-nav-map": t.navMap,
        "i18n-nav-quiz": t.navQuiz,
        "i18n-nav-pitch": t.navPitch,
        "i18n-hero-badge": t.heroBadge,
        "i18n-hero-title": t.heroTitle,
        "i18n-hero-subtitle": t.heroSubtitle,
        "i18n-scroll-prompt": t.scrollPrompt,
        "i18n-auto-launch": t.autoLaunchBtn,
        "i18n-hud-alt-label": t.hudAlt,
        "i18n-hud-vel-label": t.hudVel,
        "i18n-hud-prop-label": t.hudPropellant,
        "i18n-stat1-sub": t.stat1Sub,
        "i18n-stat1-desc": t.stat1Desc,
        "i18n-stat2-sub": t.stat2Sub,
        "i18n-stat2-desc": t.stat2Desc,
        "i18n-stat3-sub": t.stat3Sub,
        "i18n-stat3-desc": t.stat3Desc,
        "i18n-stat4-sub": t.stat4Sub,
        "i18n-stat4-desc": t.stat4Desc,
        "i18n-bg-credit-label": t.bgCreditLabel,
        "i18n-stories-badge": t.sectionStoriesBadge,
        "i18n-stories-title": t.sectionStoriesTitle,
        "i18n-stories-desc": t.sectionStoriesDesc,
        "i18n-lifespan-badge": t.lifespanBadge,
        "i18n-lifespan-title": t.lifespanTitle,
        "i18n-lifespan-desc": t.lifespanDesc,
        "i18n-lifespan-panel-title": t.lifespanPanelTitle,
        "i18n-dust-kicker": t.dustKicker,
        "i18n-dust-title": t.dustTitle,
        "i18n-dust-desc": t.dustDesc,
        "i18n-dust-after-badge": t.dustAfterBadge,
        "i18n-dust-before-badge": t.dustBeforeBadge,
        "i18n-golden-kicker": t.goldenKicker,
        "i18n-golden-title": t.goldenTitle,
        "i18n-golden-desc": t.goldenDesc,
        "i18n-golden-btn": t.goldenPlayBtn,
        "i18n-golden-meta": t.goldenMeta,
        "i18n-map-badge": t.mapBadge,
        "i18n-map-title": t.mapTitle,
        "i18n-map-desc": t.mapDesc,
        "btn-planet-mars": t.btnMars,
        "btn-planet-moon": t.btnMoon,
        "btn-style-relief": t.btnRelief,
        "btn-style-orbital": t.btnOrbital,
        "i18n-quiz-badge": t.quizBadge,
        "i18n-quiz-title": t.quizTitle,
        "i18n-quiz-desc": t.quizDesc,
        "i18n-sources-kicker": t.sourcesKicker,
        "i18n-sources-title": t.sourcesTitle,
        "i18n-sources-desc": t.sourcesDesc,
        "i18n-src-card1-kicker": t.srcCard1Kicker,
        "i18n-src-card1-title": t.srcCard1Title,
        "i18n-src-card2-kicker": t.srcCard2Kicker,
        "i18n-src-card2-title": t.srcCard2Title,
        "i18n-src-card2-link1": t.srcCard2Link1,
        "i18n-src-card3-kicker": t.srcCard3Kicker,
        "i18n-src-card3-title": t.srcCard3Title,
        "i18n-src-master-label": t.srcMasterLabel,
        "i18n-src-pill-vtad": t.srcPillVtad,
        "i18n-src-pill-golden": t.srcPillGolden,
        "i18n-src-pill-pbd": t.srcPillPbd,
        "i18n-footer-pitch-btn": t.footerPitchBtn,
        "i18n-footer-top-btn": t.footerTopBtn,
        "i18n-modal-3d-close": t.modalClose,
        "i18n-modal-photo-close": t.modalClose,
        "i18n-modal-pitch-close": t.modalClose,
        "i18n-pitch-kicker": t.pitchKicker,
        "i18n-pitch-title": t.pitchTitle,
        "i18n-pitch-30s-heading": t.pitch30sHeading,
        "i18n-pitch-240s-heading": t.pitch240sHeading
      };

      Object.entries(bindMap).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      });

      const htmlBindMap = {
        "i18n-golden-quote": t.goldenQuoteHtml,
        "i18n-src-card1-item1": t.srcCard1Item1Html,
        "i18n-src-card1-item2": t.srcCard1Item2Html,
        "i18n-src-card2-item1": t.srcCard2Item1Html,
        "i18n-src-card2-item2": t.srcCard2Item2Html,
        "i18n-src-card2-item3": t.srcCard2Item3Html,
        "i18n-src-card3-item1": t.srcCard3Item1Html,
        "i18n-src-card3-item2": t.srcCard3Item2Html,
        "i18n-footer-desc": t.footerDescHtml,
        "i18n-pitch-30s-list": t.pitch30sListHtml,
        "i18n-pitch-240s-list": t.pitch240sListHtml
      };

      Object.entries(htmlBindMap).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = val;
      });

      const gradeBtn = document.getElementById("btn-osiris-grade");
      if (gradeBtn) {
        gradeBtn.textContent = state.osirisDarkGrade
          ? lang === "tr"
            ? "🎨 Filtre: Gece Kehribar"
            : "🎨 Filter: Night Amber"
          : lang === "tr"
            ? "☀️ Filtre: Orijinal NASA"
            : "☀️ Filter: Original NASA";
      }

      if (state.refreshLaunchUI) state.refreshLaunchUI();
      renderSpacecraftChapters();
      renderLifespanComparison();
      updateMapLayerAndMarkers();
      renderQuiz();
    },

    toggleOsirisGrade() {
      state.osirisDarkGrade = !state.osirisDarkGrade;
      playTelemetryBeep(880, 0.07);
      const gradeBtn = document.getElementById("btn-osiris-grade");
      const vignette = document.getElementById("hero-vignette-overlay");
      if (vignette) {
        vignette.className = state.osirisDarkGrade
          ? "pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050506]/80 via-[#050506]/25 to-[#050506]/75"
          : "pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050506]/65 via-transparent to-[#050506]/65";
      }
      if (gradeBtn) {
        gradeBtn.textContent = state.osirisDarkGrade
          ? state.lang === "tr"
            ? "🎨 Filtre: Gece Kehribar"
            : "🎨 Filter: Night Amber"
          : state.lang === "tr"
            ? "☀️ Filtre: Orijinal NASA"
            : "☀️ Filter: Original NASA";
      }
      if (state.refreshLaunchUI) state.refreshLaunchUI();
    },

    toggleOsirisRange() {
      state.osirisFullRange = !state.osirisFullRange;
      playTelemetryBeep(960, 0.07);
      const rangeBtn = document.getElementById("btn-osiris-range");
      if (rangeBtn) {
        rangeBtn.textContent = state.osirisFullRange
          ? state.lang === "tr"
            ? "⏱️ Aralık: Tam Video (02s–84s)"
            : "⏱️ Range: Full Video (02s–84s)"
          : state.lang === "tr"
            ? "⏱️ Aralık: Kalkış (59s–84s)"
            : "⏱️ Range: Liftoff (59s–84s)";
      }
      if (state.refreshLaunchUI) state.refreshLaunchUI();
    },

    autoScrubLaunch() {
      playTelemetryBeep(660, 0.12);
      if (state.autoScrollRaf) {
        cancelAnimationFrame(state.autoScrollRaf);
        state.autoScrollRaf = null;
      }

      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";

      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }

      const stEnd = state.launchST && state.launchST.end ? state.launchST.end : 3000;
      const targetY = stEnd + 40;

      if (window.scrollY > targetY * 0.85) {
        window.scrollTo(0, 0);
        if (window.ScrollTrigger) ScrollTrigger.update();
      }

      const startY = window.scrollY;
      const distance = Math.max(0, targetY - startY);
      const duration = Math.max(2500, Math.round((distance / targetY) * 7400));
      const startTime = performance.now();

      const stopOnUserInput = () => {
        if (state.autoScrollRaf) {
          cancelAnimationFrame(state.autoScrollRaf);
          state.autoScrollRaf = null;
        }
        window.removeEventListener("wheel", stopOnUserInput);
        window.removeEventListener("touchstart", stopOnUserInput);
      };
      window.addEventListener("wheel", stopOnUserInput, { passive: true, once: true });
      window.addEventListener("touchstart", stopOnUserInput, { passive: true, once: true });

      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const nextY = Math.round(startY + eased * distance);
        window.scrollTo(0, nextY);
        if (window.ScrollTrigger) {
          ScrollTrigger.update();
        }
        if (t < 1) {
          state.autoScrollRaf = requestAnimationFrame(step);
        } else {
          state.autoScrollRaf = null;
          window.removeEventListener("wheel", stopOnUserInput);
          window.removeEventListener("touchstart", stopOnUserInput);
        }
      }

      state.autoScrollRaf = requestAnimationFrame(step);
    },

    resetModelCamera(mvId, orbit) {
      const mv = document.getElementById(mvId);
      if (mv) {
        mv.cameraOrbit = orbit;
        mv.fieldOfView = "auto";
        playTelemetryBeep(920, 0.06);
      }
    },

    openFullscreenModel(craftId) {
      const craft = window.SPACE_DATA.spacecraft.find((c) => c.id === craftId);
      if (!craft) return;
      const modal = document.getElementById("fullscreen-3d-modal");
      const mv = document.getElementById("modal-model-viewer");
      const title = document.getElementById("modal-3d-title");
      if (!modal || !mv) return;

      mv.src = craft.modelUrl;
      if (title) title.textContent = state.lang === "tr" ? craft.name_tr : craft.name_en;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      playTelemetryBeep(1100, 0.08);
    },

    closeFullscreenModel() {
      const modal = document.getElementById("fullscreen-3d-modal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    },

    openPhotoModal(craftId) {
      const craft = window.SPACE_DATA.spacecraft.find((c) => c.id === craftId);
      if (!craft) return;
      const modal = document.getElementById("photo-modal");
      const mediaBox = document.getElementById("photo-modal-media");
      const title = document.getElementById("photo-modal-title");
      const desc = document.getElementById("photo-modal-desc");
      if (!modal || !mediaBox) return;

      if (craft.imageCaption2_tr && craft.secondaryImageUrl) {
        const cap1 = state.lang === "tr" ? craft.imageCaption1_tr : craft.imageCaption1_en;
        const cap2 = state.lang === "tr" ? craft.imageCaption2_tr : craft.imageCaption2_en;
        mediaBox.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-xl overflow-hidden border border-white/15 bg-black/80 p-2">
              <img src="${craft.imageUrl}" alt="${cap1}" class="w-full max-h-[55vh] object-contain rounded-lg" />
              <div class="text-xs font-mono-hud text-zinc-200 mt-2 text-center">1. ${cap1}</div>
            </div>
            <div class="rounded-xl overflow-hidden border border-blue-400/35 bg-black/80 p-2">
              <img src="${craft.secondaryImageUrl}" alt="${cap2}" class="w-full max-h-[55vh] object-contain rounded-lg" />
              <div class="text-xs font-mono-hud text-blue-200 mt-2 text-center">2. ${cap2}</div>
            </div>
          </div>
        `;
      } else {
        mediaBox.innerHTML = `
          <img id="photo-modal-img" src="${craft.imageUrl}" alt="NASA Archive" class="w-full max-h-[65vh] object-contain rounded-xl" />
        `;
      }

      if (title) title.textContent = state.lang === "tr" ? craft.name_tr : craft.name_en;
      if (desc) desc.textContent = state.lang === "tr" ? craft.lastMessage_tr : craft.lastMessage_en;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    },

    closePhotoModal() {
      const modal = document.getElementById("photo-modal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    },

    toggleSpeech(craftId) {
      if (!("speechSynthesis" in window)) return;
      const synth = window.speechSynthesis;

      const resetBtnUI = (id) => {
        if (!id) return;
        const b = document.getElementById(`speech-btn-${id}`);
        if (b) {
          b.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg><span>${i18n[state.lang].listenStory}</span>`;
        }
      };

      if (state.speakingId === craftId && synth.speaking) {
        synth.cancel();
        resetBtnUI(state.speakingId);
        state.speakingId = null;
        return;
      }

      synth.cancel();
      if (state.speakingId) resetBtnUI(state.speakingId);
      const craft = window.SPACE_DATA.spacecraft.find((c) => c.id === craftId);
      if (!craft) return;

      playTelemetryBeep(740, 0.1);
      const text = state.lang === "tr" ? craft.firstPersonStory_tr : craft.firstPersonStory_en;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = state.lang === "tr" ? "tr-TR" : "en-US";
      utter.rate = 0.98;
      utter.pitch = 0.95;

      state.speakingId = craftId;
      const btn = document.getElementById(`speech-btn-${craftId}`);
      if (btn) {
        btn.innerHTML = `<span class="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span> <span>${i18n[state.lang].stopStory}</span>`;
      }

      utter.onend = () => {
        resetBtnUI(craftId);
        state.speakingId = null;
      };
      synth.speak(utter);
    },

    playGoldenRecordGreeting() {
      playTelemetryBeep(528, 0.25);
      setTimeout(() => playTelemetryBeep(660, 0.25), 180);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(
          "Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!"
        );
        utter.lang = "tr-TR";
        utter.rate = 0.92;
        window.speechSynthesis.speak(utter);
      }
      const statusEl = document.getElementById("golden-record-status");
      if (statusEl) {
        statusEl.textContent =
          state.lang === "tr"
            ? "📡 DSN CANBERRA 70M ANTENİ: 24.5 Milyar km uzaklıktaki Voyager 1'e 22 saat 34 dakika ışık hızı gecikmesiyle selam gönderildi!"
            : "📡 DSN CANBERRA 70M DISH: Greeting transmitted toward Voyager 1 (24.5 Billion km away) with a 22h 34m one-way light-time delay!";
        statusEl.classList.remove("hidden");
      }
    },

    switchPlanet(planet) {
      state.activePlanet = planet;
      playTelemetryBeep(820, 0.08);
      const marsBtn = document.getElementById("btn-planet-mars");
      const moonBtn = document.getElementById("btn-planet-moon");
      if (marsBtn && moonBtn) {
        marsBtn.className =
          planet === "mars"
            ? "px-4 py-2 rounded-full bg-orange-500 text-black font-bold transition cursor-pointer"
            : "px-4 py-2 rounded-full text-zinc-300 hover:text-white transition cursor-pointer";
        moonBtn.className =
          planet === "moon"
            ? "px-4 py-2 rounded-full bg-white text-black font-bold transition cursor-pointer"
            : "px-4 py-2 rounded-full text-zinc-300 hover:text-white transition cursor-pointer";
      }
      updateMapLayerAndMarkers();
      if (state.map) {
        state.map.setView([10, 20], 2);
      }
    },

    switchTileStyle(style) {
      state.activeTileStyle = style;
      playTelemetryBeep(960, 0.07);
      const relBtn = document.getElementById("btn-style-relief");
      const orbBtn = document.getElementById("btn-style-orbital");
      if (relBtn && orbBtn) {
        relBtn.className =
          style === "relief"
            ? "px-3.5 py-2 rounded-full bg-white text-black font-semibold transition cursor-pointer"
            : "px-3.5 py-2 rounded-full text-zinc-400 hover:text-white transition cursor-pointer";
        orbBtn.className =
          style === "orbital"
            ? "px-3.5 py-2 rounded-full bg-white text-black font-semibold transition cursor-pointer"
            : "px-3.5 py-2 rounded-full text-zinc-400 hover:text-white transition cursor-pointer";
      }
      updateMapLayerAndMarkers();
    },

    focusCraftMarker(craftId) {
      const craft = window.SPACE_DATA.spacecraft.find((c) => c.id === craftId);
      if (!craft || !state.map) return;
      if (craft.body !== state.activePlanet && craft.body !== "interstellar") {
        this.switchPlanet(craft.body);
      }
      state.map.flyTo([craft.coordinates.lat, craft.coordinates.lng], 4, {
        duration: 1.4
      });
      const marker = state.markers.find((m) => m._craftId === craftId);
      if (marker) {
        setTimeout(() => marker.openPopup(), 900);
      }
    },

    flyToCraftOnMap(craftId) {
      const craft = window.SPACE_DATA.spacecraft.find((c) => c.id === craftId);
      if (!craft) return;
      const mapSection = document.getElementById("map-section");
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        this.focusCraftMarker(craftId);
      }, 650);
    },

    answerQuiz(choiceIdx) {
      if (state.quizAnswered) return;
      state.quizAnswered = true;

      const qObj = window.SPACE_DATA.quizQuestions[state.quizIndex];
      const isCorrect = choiceIdx === qObj.correct;
      if (isCorrect) {
        state.quizScore++;
        playTelemetryBeep(1046, 0.15);
      } else {
        playTelemetryBeep(320, 0.2);
      }

      const chosenBtn = document.getElementById(`quiz-opt-${choiceIdx}`);
      const correctBtn = document.getElementById(`quiz-opt-${qObj.correct}`);

      if (correctBtn) {
        correctBtn.classList.add("border-white", "bg-white/15");
      }
      if (!isCorrect && chosenBtn) {
        chosenBtn.classList.add("border-orange-500", "bg-orange-500/20");
      }

      const fb = document.getElementById("quiz-feedback");
      if (fb) {
        const exp = state.lang === "tr" ? qObj.explain_tr : qObj.explain_en;
        fb.className = `p-4 rounded-xl border text-sm mt-4 ${
          isCorrect
            ? "bg-white/10 border-white/30 text-white"
            : "bg-orange-500/15 border-orange-500/40 text-orange-200"
        }`;
        fb.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span>${exp}</span>
            <button
              type="button"
              onclick="window.BlackBirdsApp.nextQuizQuestion()"
              class="px-5 py-2 rounded-full bg-white hover:bg-zinc-200 text-black font-mono-hud font-bold text-xs cursor-pointer"
            >
              ${i18n[state.lang].nextQuestion} →
            </button>
          </div>
        `;
      }
    },

    nextQuizQuestion() {
      state.quizIndex++;
      state.quizAnswered = false;
      renderQuiz();
    },

    restartQuiz() {
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = false;
      renderQuiz();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    initLaunchScrollytelling();
    initDustComparisonSlider();
    initPlanetaryMap();
    window.BlackBirdsApp.setLanguage("en");
  });
})();
