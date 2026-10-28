/* Tek akış içerik: öğrenme + link + pratik aynı haftada. Ayrı kaynak/proje sayfası yok. */
window.SITE = {
  ui: {
    tr: {
      brand: "BIM Yolculuğu",
      "nav.journey": "Yolculuk",
      "nav.revit": "Revit Yol Haritası",
      "nav.revitYapi": "Yapı Yol Haritası",
      "nav.autodesk": "Autodesk Dosyaları",
      "nav.sysadmin": "Sistem Admin",
      "nav.about": "Hakkında",
      "nav.contact": "İletişim",
      "theme.label": "Tema",
      "theme.night": "Gece",
      "theme.concrete": "Beton",
      "contact.title": "Bana ulaş",
      "contact.lead":
        "Staj, iş veya BIM hakkında yazmak istersen — buradan ulaşabilirsin.",
      "contact.linkedin": "LinkedIn profilim",
      "hero.kicker": "Elif Rabia Kırlı · İnşaat Mühendisliği öğrencisi",
      "hero.title": "BIM Yolculuğu",
      "hero.lead":
        "BIM’i sıfırdan öğrendiğim not defteri. Her hafta ne yaptığımı, hangi araçla çalıştığımı ve ekran kanıtını burada topladım — hem kendime yol olsun diye, hem staj / iş başvurularında gösterebilmek için.",
      "hero.cta": "Haftalara bak",
      "hero.cta2": "Biraz kendimden",
      "about.title": "Biraz kendimden",
      "about.body":
        "Merhaba — ben Elif Rabia. İnşaat mühendisliği okuyorum ve BIM’e sıfırdan başladım. Bu siteyi her hafta ne izlediğimi, ne denediğimi ve ekranda ne yaptığımı unutmamak için tutuyorum. İleride staj ya da iş başvurusunda da «bunları ben yaptım» diyebileyim diye.",
      "about.p1": "Hafta hafta gidiyorum: kavramlar, Revit, Civil, Navisworks, Dynamo, sonra portföy ve CV",
      "about.p2": "Her haftanın yanında ekran görüntüsü ve kısa PDF özet var",
      "about.p3": "Kullandığım araçlar: Revit, Civil 3D, Navisworks, Forma/ACC, Dynamo",
      "about.p4": "Anlatım Türkçe ve İngilizce",
      "about.p5": "Klasörü açıp paylaşmak yeterli — ekstra bir kurulum yok",
      "journey.title": "Öğrenme yolculuğum",
      "journey.lead":
        "Bir haftaya tıkla: o hafta ne hedefledim, ne izledim, ne yaptım — hepsi bir arada.",
      "footer.note": "Elif Rabia Kırlı · BIM öğrenme günlüğü & portföy · 2026",
      "footer.hint": "İTÜ: bu klasörün içeriğini ev dizinindeki public_html klasörüne yükle.",
      labels: {
        goal: "Hedef",
        story: "Anlatı (kendi notlarımdan)",
        content: "İçerik",
        learn: "Ne öğrenilir",
        practice: "Ne yapılır (pratik)",
        links: "Bu haftanın kaynakları",
        notes: "Bu yolculukta notlar",
        gallery: "Proje galerisi",
        docs: "Dokümanlar",
        statusDone: "Tamamlandı",
        statusActive: "Devam ediyor",
        statusTodo: "Planlandı",
      },
    },
    en: {
      brand: "BIM Journey",
      "nav.journey": "Journey",
      "nav.revit": "Revit Roadmap",
      "nav.revitYapi": "Structure Roadmap",
      "nav.autodesk": "Autodesk files",
      "nav.sysadmin": "Sysadmin",
      "nav.about": "About",
      "nav.contact": "Contact",
      "theme.label": "Theme",
      "theme.night": "Night",
      "theme.concrete": "Concrete",
      "contact.title": "Get in touch",
      "contact.lead":
        "Want to write about internships, jobs, or BIM — you can reach me here.",
      "contact.linkedin": "My LinkedIn",
      "hero.kicker": "Elif Rabia Kırlı · Civil engineering student",
      "hero.title": "BIM Journey",
      "hero.lead":
        "My notebook for learning BIM from scratch. Each week I recorded what I did, which tools I used, and the screenshots that prove it — a path for myself, and evidence I can show for internships and job applications.",
      "hero.cta": "Browse the weeks",
      "hero.cta2": "A bit about me",
      "about.title": "A bit about me",
      "about.body":
        "Hi — I’m Elif Rabia. I study civil engineering and started BIM from scratch. I keep this site so I don’t forget what I watched, tried, and actually did on screen each week. Later, for internships or job applications, I want to be able to say: I did this.",
      "about.p1": "Week by week: concepts, Revit, Civil, Navisworks, Dynamo, then portfolio and CV",
      "about.p2": "Each week has screenshots and a short PDF summary",
      "about.p3": "Tools I use: Revit, Civil 3D, Navisworks, Forma/ACC, Dynamo",
      "about.p4": "Written in Turkish and English",
      "about.p5": "Just open the folder and share — no extra setup",
      "journey.title": "My learning journey",
      "journey.lead":
        "Open a week: what I aimed for, what I watched, what I made — all together.",
      "footer.note": "Elif Rabia Kırlı · BIM learning journal & portfolio · 2026",
      "footer.hint": "ITU: upload this folder’s contents into your home public_html directory.",
      labels: {
        goal: "Goal",
        story: "Narrative (from my notes)",
        content: "Content",
        learn: "What you learn",
        practice: "What you do (practice)",
        links: "Sources for this week",
        notes: "Notes from this journey",
        gallery: "Project gallery",
        docs: "Documents",
        statusDone: "Done",
        statusActive: "In progress",
        statusTodo: "Planned",
      },
    },
  },

  weeks: [
    {
      id: 1,
      status: "done",
      tr: {
        title: "BIM temelleri",
        goal: "BIM’in ne olduğunu, neden dönüştürücü olduğunu ve LOD’u kavramak.",
        story: [
          "BIM (Building Information Modeling), bir bina veya altyapının fiziksel ve işlevsel özelliklerinin dijital temsilidir. Sadece 3D çizim değildir: yaşam döngüsünü kapsayan, akıllı ve veri açısından zengin bir modeldir.",
          "Sektörü dönüştüren başlıca nedenler: geliştirilmiş işbirliği, daha iyi görselleştirme, geliştirilmiş verimlilik ve sürdürülebilirlik.",
          "Autodesk Learning’de Introduction to BIM for the AECO Industry sertifikasını tamamladım (BIM ilkeleri, 2D→3D, CDE, koordinasyon, handover).",
          "LOD: model hangi aşamada ne kadar detayda olmalı? ISO 19650 dilinde LOIN ile ‘gerçekten ne kadar bilgi lazım?’ sorusu sorulur.",
        ],
        learn: [
          "BIM tanımı ve yaşam döngüsü bakışı",
          "İşbirliği, görselleştirme, verimlilik, sürdürülebilirlik",
          "LOD / LOIN farkındalığı",
          "AECO sertifika konuları",
        ],
        practice: [
          "Kendi cümlelerimle BIM tanımı yazmak",
          "LOD videolarını izleyip not çıkarmak",
          "AECO sertifikasını tamamlamak",
          "Tam metin: Masaüstü → BIM_Hafta1-2_Ozet.md",
        ],
        links: [
          { label: "BIM giriş videosu 1", href: "https://www.youtube.com/watch?v=sZygHGWiHc8" },
          { label: "BIM giriş videosu 2", href: "https://www.youtube.com/watch?v=omaw1mdk9xg" },
          { label: "Autodesk — Introduction to BIM for AECO (sertifika)", href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-the-aeco-industry" },
          { label: "LOD videosu 1", href: "https://www.youtube.com/watch?v=_-rsuIE7GYI" },
          { label: "LOD videosu 2", href: "https://www.youtube.com/watch?v=HUtn6e4WoY4" },
          { label: "LOD / ilgili video 3", href: "https://www.youtube.com/watch?v=Vp1r9UHNZ-c" },
          { label: "LOD / ilgili video 4", href: "https://www.youtube.com/watch?v=pJkcC_pgAAs" },
          { label: "LOD / ilgili video 5", href: "https://www.youtube.com/watch?v=e9R-HAbu6i0" },
          { label: "Balkan Architect", href: "https://balkanarchitect.com/" },
          { label: "Cogram (AEC)", href: "https://cogram.com/industry/aec" },
        ],
        docs: [
          { label: "Word — BIM Temelleri", href: "assets/docs/BIM-Temelleri.docx" },
          { label: "Word — Autodesk BIM AECO kurs notu", href: "assets/docs/Autodesk-BIM-AECO-Kurs-Notu.docx" },
          { label: "Word — Autodesk BIM AECO öğretici notu", href: "assets/docs/Autodesk-BIM-AECO-Ogretici-Notu.docx" },
          { label: "Word — Öğrenme planı checklist", href: "assets/docs/BIM-Ogrenme-Plani-Checklist.docx" },
        ],
        notes: [
          "BIM = geometri + veri + süreç.",
          "Haftalık Word notları sitede: Dokümanlar bölümü.",
        ],
      },
      en: {
        title: "BIM fundamentals",
        goal: "Understand what BIM is, why it is transformative, and what LOD means.",
        story: [
          "BIM is the digital representation of a building or infrastructure’s physical and functional characteristics — a data-rich lifecycle model, not just 3D drawing.",
          "Key drivers: collaboration, visualization, efficiency, sustainability.",
          "Completed Autodesk Introduction to BIM for the AECO Industry.",
          "LOD = how mature/detailed; LOIN = how much information is truly needed.",
        ],
        learn: [
          "BIM definition and lifecycle view",
          "Collaboration, visualization, efficiency, sustainability",
          "LOD / LOIN awareness",
          "AECO certificate topics",
        ],
        practice: [
          "Write a BIM definition in my own words",
          "Watch LOD videos and take notes",
          "Complete the AECO certificate",
          "Full text: Desktop → BIM_Hafta1-2_Ozet.md",
        ],
        links: [
          { label: "BIM intro video 1", href: "https://www.youtube.com/watch?v=sZygHGWiHc8" },
          { label: "BIM intro video 2", href: "https://www.youtube.com/watch?v=omaw1mdk9xg" },
          { label: "Autodesk — Introduction to BIM for AECO", href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-the-aeco-industry" },
          { label: "LOD video 1", href: "https://www.youtube.com/watch?v=_-rsuIE7GYI" },
          { label: "LOD video 2", href: "https://www.youtube.com/watch?v=HUtn6e4WoY4" },
          { label: "LOD / related video 3", href: "https://www.youtube.com/watch?v=Vp1r9UHNZ-c" },
          { label: "LOD / related video 4", href: "https://www.youtube.com/watch?v=pJkcC_pgAAs" },
          { label: "LOD / related video 5", href: "https://www.youtube.com/watch?v=e9R-HAbu6i0" },
          { label: "Balkan Architect", href: "https://balkanarchitect.com/" },
          { label: "Cogram (AEC)", href: "https://cogram.com/industry/aec" },
        ],
        docs: [
          { label: "Word — BIM fundamentals", href: "assets/docs/BIM-Temelleri.docx" },
          { label: "Word — Autodesk BIM AECO course notes", href: "assets/docs/Autodesk-BIM-AECO-Kurs-Notu.docx" },
          { label: "Word — Autodesk BIM AECO teaching notes", href: "assets/docs/Autodesk-BIM-AECO-Ogretici-Notu.docx" },
          { label: "Word — Learning plan checklist", href: "assets/docs/BIM-Ogrenme-Plani-Checklist.docx" },
        ],
        notes: [
          "BIM = geometry + data + process.",
          "Weekly Word notes live on this site under Documents.",
        ],
      },
    },
    {
      id: 2,
      status: "done",
      tr: {
        title: "openBIM, veri dili ve süreç",
        goal: "Açık standartlar (openBIM), JSON ve OIR→EIR→BEP→CDE zincirini anlamak.",
        story: [
          "openBIM: yazılımlar farklı olsa da bilginin açık standartlarla taşınabilmesi (buildingSMART).",
          "bSDD = ortak sözlük. IDS = bilgi teslim şartnamesi. BCF = clash/yorumları modele bağlı paylaşmak. openCDE / CDE = ortak veri ortamı ve API yönü.",
          "JSON: anahtar–değer ile hafif veri taşıma; API ve modern BIM alışverişinde sık görülür.",
          "Plannerly + kavram haritası: OIR/AIR/PIR → EIR → BEP/MIDP → CDE → doğrulama. Çoğu sorun zayıf gereksinimlerde başlar.",
        ],
        learn: [
          "openBIM yaklaşımı",
          "bSDD, IDS, BCF, openCDE / CDE",
          "JSON’un bilgi alışverişindeki yeri",
          "OIR → EIR → BEP → CDE sözlüğü",
        ],
        practice: [
          "bSDD’de arama denemek",
          "Kavram haritasını açıp EIR / BEP / CDE okumak",
          "Plannerly Boot Camp Orientation",
          "Hafta 1–2 notlarını tek metinde birleştirmek",
        ],
        links: [
          { label: "buildingSMART — openBIM", href: "https://www.buildingsmart.org/about/openbim/" },
          { label: "bSDD nedir?", href: "https://www.buildingsmart.org/users/services/buildingsmart-data-dictionary/" },
          { label: "bSDD arama", href: "https://search.bsdd.buildingsmart.org/" },
          { label: "IDS", href: "https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/" },
          { label: "BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
          { label: "openCDE Documents API (onay haberi)", href: "https://www.buildingsmart.org/the-opencde-documents-api-detailed-project-plan-has-been-reviewed-and-unanimously-been-endorsed/" },
          { label: "Plannerly Boot Camp", href: "https://plannerly.com/courses/bim-boot-camp/" },
          { label: "Boot Camp Orientation", href: "https://plannerly.com/courses/bim-boot-camp/lesson/bim-boot-camp-orientation/?page_tab=overview" },
        ],
        docs: [
          { label: "Word — Plannerly BIM kavramları rehberi", href: "assets/docs/Plannerly-BIM-Kavramlari-Rehberi.docx" },
          { label: "Word — Plannerly Level 1 Basic", href: "assets/docs/Plannerly-Level1-Basic-Kurs-Notu.docx" },
          { label: "Word — Plannerly Level 2 Advanced", href: "assets/docs/Plannerly-Level2-Advanced-Kurs-Notu.docx" },
          { label: "Word — Plannerly Level 3 Expert", href: "assets/docs/Plannerly-Level3-Expert-Kurs-Notu.docx" },
        ],
        notes: [
          "Plannerly notları sitede: Dokümanlar bölümü.",
          "Plannerly = süreç; Revit = modelleme; ikisi birlikte BIM.",
        ],
      },
      en: {
        title: "openBIM, data language, and process",
        goal: "Understand open standards, JSON, and the OIR→EIR→BEP→CDE chain.",
        story: [
          "openBIM keeps information portable across tools via open standards (buildingSMART).",
          "bSDD = shared dictionary. IDS = delivery rules. BCF = issues tied to the model. CDE / openCDE = shared data environment + APIs.",
          "JSON is a lightweight key–value format used in APIs and modern BIM exchange.",
          "Plannerly + concept map: OIR/AIR/PIR → EIR → BEP/MIDP → CDE → verification.",
        ],
        learn: [
          "openBIM approach",
          "bSDD, IDS, BCF, openCDE / CDE",
          "Where JSON fits in information exchange",
          "OIR → EIR → BEP → CDE glossary",
        ],
        practice: [
          "Try searching in bSDD",
          "Open the concept map and read EIR / BEP / CDE",
          "Plannerly Boot Camp Orientation",
          "Merge week 1–2 notes into one narrative",
        ],
        links: [
          { label: "buildingSMART — openBIM", href: "https://www.buildingsmart.org/about/openbim/" },
          { label: "What is bSDD?", href: "https://www.buildingsmart.org/users/services/buildingsmart-data-dictionary/" },
          { label: "bSDD search", href: "https://search.bsdd.buildingsmart.org/" },
          { label: "IDS", href: "https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/" },
          { label: "BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
          { label: "openCDE Documents API (endorsement)", href: "https://www.buildingsmart.org/the-opencde-documents-api-detailed-project-plan-has-been-reviewed-and-unanimously-been-endorsed/" },
          { label: "Plannerly Boot Camp", href: "https://plannerly.com/courses/bim-boot-camp/" },
          { label: "Boot Camp Orientation", href: "https://plannerly.com/courses/bim-boot-camp/lesson/bim-boot-camp-orientation/?page_tab=overview" },
        ],
        docs: [
          { label: "Word — Plannerly BIM concepts guide", href: "assets/docs/Plannerly-BIM-Kavramlari-Rehberi.docx" },
          { label: "Word — Plannerly Level 1 Basic", href: "assets/docs/Plannerly-Level1-Basic-Kurs-Notu.docx" },
          { label: "Word — Plannerly Level 2 Advanced", href: "assets/docs/Plannerly-Level2-Advanced-Kurs-Notu.docx" },
          { label: "Word — Plannerly Level 3 Expert", href: "assets/docs/Plannerly-Level3-Expert-Kurs-Notu.docx" },
        ],
        notes: [
          "Plannerly notes live on this site under Documents.",
          "Plannerly = process; Revit = modeling; together = BIM.",
        ],
      },
    },
    {
      id: 3,
      status: "done",
      articleId: "revit-temelleri",
      tr: {
        title: "Revit temelleri",
        goal: "Revit arayüzü, level, model elemanları, dokümantasyon (ölçü, tag, room) ve pafta çıktısı.",
        gallery: [
          { src: "assets/revit/01-entry-model.png", caption: "02 Entry — model (kapı, pencere, merdiven, mobilya)" },
          { src: "assets/revit/02-dimensions.png", caption: "Dış ölçüler — 12600 × 7600 mm" },
          { src: "assets/revit/03-tags-room.png", caption: "Pencere tag + Room Living 100" },
          { src: "assets/revit/04-sheet-a101.png", caption: "Sheet A101 — Architectural Floor Plans" },
          { src: "assets/revit/05-3d-site.png", caption: "3D — arazi + yapı" },
          { src: "assets/revit/06-3d-exterior.png", caption: "3D — dış görünüm + çatı" },
          { src: "assets/revit/07-3d-levels.png", caption: "3D — level'lar + Section Box" },
          { src: "assets/revit/08-site-plan.png", caption: "Site planı" },
        ],
        pdf: {
          label: "PDF — Revit_Beginner_House",
          href: "assets/revit/Revit_Beginner_House.pdf",
        },
        notes: [
          "Proje: Revit_Beginner_House.rvt (masaüstü)",
        ],
        docs: [
          { label: "Markdown — Revit temelleri", href: "assets/docs/Revit-Temelleri.md" },
          { label: "Markdown — 9 video yol haritası", href: "assets/docs/Revit-9Video-Yol-Haritasi.md" },
          { label: "Markdown — Part 4 adım adım", href: "assets/docs/Revit-Part4-Adim-Adim.md" },
          { label: "Markdown — Part 8 adım adım", href: "assets/docs/Revit-Part8-Adim-Adim.md" },
          { label: "Markdown — Part 9 adım adım", href: "assets/docs/Revit-Part9-Adim-Adim.md" },
          { label: "Word — Beginner House detaylı rapor", href: "assets/docs/Revit-Beginner-House-Detayli-Rapor.docx" },
          { label: "Word — Beginner House uygulama raporu", href: "assets/docs/Revit-Beginner-House-Uygulama-Raporu.docx" },
        ],
        links: [
          { label: "Balkan Architect — 9 video playlist", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
        ],
      },
      en: {
        title: "Revit fundamentals",
        goal: "Revit UI, levels, model elements, documentation (dims, tags, rooms), and sheet export.",
        gallery: [
          { src: "assets/revit/01-entry-model.png", caption: "02 Entry — model (doors, windows, stair, furniture)" },
          { src: "assets/revit/02-dimensions.png", caption: "Exterior dimensions — 12600 × 7600 mm" },
          { src: "assets/revit/03-tags-room.png", caption: "Window tags + Room Living 100" },
          { src: "assets/revit/04-sheet-a101.png", caption: "Sheet A101 — Architectural Floor Plans" },
          { src: "assets/revit/05-3d-site.png", caption: "3D — site + building" },
          { src: "assets/revit/06-3d-exterior.png", caption: "3D — exterior + roof" },
          { src: "assets/revit/07-3d-levels.png", caption: "3D — levels + Section Box" },
          { src: "assets/revit/08-site-plan.png", caption: "Site plan" },
        ],
        pdf: {
          label: "PDF — Revit_Beginner_House",
          href: "assets/revit/Revit_Beginner_House.pdf",
        },
        notes: [
          "Project: Revit_Beginner_House.rvt (Desktop)",
        ],
        docs: [
          { label: "Markdown — Revit fundamentals", href: "assets/docs/Revit-Temelleri.md" },
          { label: "Markdown — 9-video roadmap", href: "assets/docs/Revit-9Video-Yol-Haritasi.md" },
          { label: "Markdown — Part 4 step by step", href: "assets/docs/Revit-Part4-Adim-Adim.md" },
          { label: "Markdown — Part 8 step by step", href: "assets/docs/Revit-Part8-Adim-Adim.md" },
          { label: "Markdown — Part 9 step by step", href: "assets/docs/Revit-Part9-Adim-Adim.md" },
          { label: "Word — Beginner House detailed report", href: "assets/docs/Revit-Beginner-House-Detayli-Rapor.docx" },
          { label: "Word — Beginner House practice report", href: "assets/docs/Revit-Beginner-House-Uygulama-Raporu.docx" },
        ],
        links: [
          { label: "Balkan Architect — 9-video playlist", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
        ],
      },
    },
    {
      id: 4,
      status: "done",
      articleId: "revit-yapi",
      tr: {
        title: "Revit: yapısal elemanlar",
        goal: "Kolon, kiriş, döşeme, temel; link’li mimari model ve Autodesk yapısal BIM kursu.",
        gallery: [
          { src: "assets/revit-structure/01-arch-3d.png", caption: "Research Building — mimari 3D (link edilen model)" },
          { src: "assets/revit-structure/02-link-section.png", caption: "Insert / Link + Section Box ile kesilmiş 3D" },
          { src: "assets/revit-structure/03-3d-frame.png", caption: "Çelik çerçeve + çapraz + temel" },
          { src: "assets/revit-structure/04-pick-supports.png", caption: "1ST FLOOR TOS — döşeme sınırı / Pick Supports" },
          { src: "assets/revit-structure/05-3d-interior.png", caption: "3D — kolon ızgarası, kiriş, deck" },
          { src: "assets/revit-structure/06-slab-on-steel.png", caption: "14 ROOF — kiriş üzeri döşeme" },
          { src: "assets/revit-structure/07-roof-plan.png", caption: "14 ROOF plan — grid A–G / 1–11" },
          { src: "assets/revit-structure/08-footing-schedule.png", caption: "Pafta 02 — FOOTING SCHEDULE" },
          { src: "assets/revit-structure/09-analytical.png", caption: "Analytical Model — çubuk + düğüm" },
        ],
        pdf: {
          label: "PDF — Introduction to BIM for Structural Design (sertifika)",
          href: "assets/revit-structure/Introduction_to_BIM_for_Structural_Design.pdf",
        },
        story: [
          "Hafta 3’te mimari model (Beginner House) tamamlandı. Bu hafta Structure sekmesine geçiyoruz: grid → kolon → kiriş → döşeme → temel.",
          "Yapısal elemanlar grid kesişimlerine ve level’lara bağlanır; mimari kolon değil Structural Column kullanılır.",
          "Önerilen sıra: Autodesk kısa tutorial’lar → YouTube tam akış → kendi modelinde uygula.",
        ],
        learn: ["Grid sistemi", "Kolon / kiriş / döşeme", "Foundation"],
        practice: [
          "Structural template veya Beginner House’a grid ekle",
          "Grid kesişimlerine kolon yerleştir",
          "Kiriş + yapısal döşeme + isolated footing",
          "Plan / kesit / 3D görünüm kontrol",
        ],
        links: [
          { label: "Autodesk — Introduction to BIM for Structural Design (ana kurs)", href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering" },
          { label: "Autodesk — Grids in Revit for structure (3 dk)", href: "https://www.autodesk.com/learn/ondemand/tutorial/grids-in-revit-structure" },
          { label: "Autodesk — Levels in Revit for structure (3 dk)", href: "https://www.autodesk.com/learn/ondemand/tutorial/levels-in-revit-for-structure" },
          { label: "Autodesk — Create structural columns (3 dk)", href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-columns-in-revit" },
          { label: "Autodesk — Create beams in Revit (3 dk)", href: "https://www.autodesk.com/learn/ondemand/tutorial/create-beams-in-revit" },
          { label: "YouTube — Beginner Concrete: grid, kolon, kiriş, temel (Balkan)", href: "https://www.youtube.com/watch?v=T3d7VGxW_bY" },
          { label: "YouTube — Basic Revit 2025 Structure for Beginners", href: "https://www.youtube.com/watch?v=TdOZLnxsutg" },
          { label: "LinkedIn Learning — Revit Essential Training for Structure", href: "https://www.linkedin.com/learning/revit-2025-essential-training-for-structure-imperial-and-metric" },
          { label: "Ücretsiz kitap — Structural Systems (Bölüm 16)", href: "https://uta.pressbooks.pub/buildinginformationmodeling/chapter/chapter-16/" },
          { label: "Balkan Architect — Concrete Structures (ücretli, derinlemesine)", href: "https://balkanarchitect.com/p/concrete-structures-in-revit" },
        ],
        notes: [
          "Kurs: Autodesk Learning — Introduction to BIM for Structural Design and Engineering",
          "Pratik: masaüstü PE-M2 … PE-M9 (Research Building Structural)",
        ],
        docs: [
        ],
      },
      en: {
        title: "Revit: structural elements",
        goal: "Columns, beams, slabs, foundations; linked architectural model and Autodesk structural BIM course.",
        gallery: [
          { src: "assets/revit-structure/01-arch-3d.png", caption: "Research Building — architectural 3D (linked model)" },
          { src: "assets/revit-structure/02-link-section.png", caption: "Insert / Link + 3D with Section Box" },
          { src: "assets/revit-structure/03-3d-frame.png", caption: "Steel frame + bracing + foundations" },
          { src: "assets/revit-structure/04-pick-supports.png", caption: "1ST FLOOR TOS — floor boundary / Pick Supports" },
          { src: "assets/revit-structure/05-3d-interior.png", caption: "3D — column grid, beams, deck" },
          { src: "assets/revit-structure/06-slab-on-steel.png", caption: "14 ROOF — slab on steel beams" },
          { src: "assets/revit-structure/07-roof-plan.png", caption: "14 ROOF plan — grids A–G / 1–11" },
          { src: "assets/revit-structure/08-footing-schedule.png", caption: "Sheet 02 — FOOTING SCHEDULE" },
          { src: "assets/revit-structure/09-analytical.png", caption: "Analytical Model — sticks + nodes" },
        ],
        pdf: {
          label: "PDF — Introduction to BIM for Structural Design (certificate)",
          href: "assets/revit-structure/Introduction_to_BIM_for_Structural_Design.pdf",
        },
        story: [
          "Week 3 architectural model (Beginner House) is done. This week: Structure tab — grid → columns → beams → slabs → foundations.",
          "Structural members snap to grids and levels; use Structural Column, not architectural columns.",
          "Suggested order: Autodesk short tutorials → full YouTube walkthrough → apply in your own model.",
        ],
        learn: ["Grid system", "Columns / beams / floors", "Foundations"],
        practice: [
          "Add grids to Structural template or Beginner House",
          "Place columns at grid intersections",
          "Beams + structural floor + isolated footings",
          "Check plan / section / 3D views",
        ],
        links: [
          { label: "Autodesk — Introduction to BIM for Structural Design", href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering" },
          { label: "Autodesk — Grids in Revit for structure (3 min)", href: "https://www.autodesk.com/learn/ondemand/tutorial/grids-in-revit-structure" },
          { label: "Autodesk — Levels in Revit for structure (3 min)", href: "https://www.autodesk.com/learn/ondemand/tutorial/levels-in-revit-for-structure" },
          { label: "Autodesk — Create structural columns (3 min)", href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-columns-in-revit" },
          { label: "Autodesk — Create beams in Revit (3 min)", href: "https://www.autodesk.com/learn/ondemand/tutorial/create-beams-in-revit" },
          { label: "YouTube — Beginner Concrete: grid, column, beam, foundation", href: "https://www.youtube.com/watch?v=T3d7VGxW_bY" },
          { label: "YouTube — Basic Revit 2025 Structure for Beginners", href: "https://www.youtube.com/watch?v=TdOZLnxsutg" },
          { label: "LinkedIn Learning — Revit Essential Training for Structure", href: "https://www.linkedin.com/learning/revit-2025-essential-training-for-structure-imperial-and-metric" },
          { label: "Free textbook — Structural Systems (Chapter 16)", href: "https://uta.pressbooks.pub/buildinginformationmodeling/chapter/chapter-16/" },
          { label: "Balkan Architect — Concrete Structures (paid)", href: "https://balkanarchitect.com/p/concrete-structures-in-revit" },
        ],
        notes: [
          "Course: Autodesk Learning — Introduction to BIM for Structural Design and Engineering",
          "Practice: Desktop PE-M2 … PE-M9 (Research Building Structural)",
        ],
        docs: [
        ],
      },
    },
    {
      id: 5,
      status: "done",
      articleId: "revit-family",
      tr: {
        title: "Revit: aileler ve detay",
        goal: "Family Editor, parametrik aile, üretici kütüphane; Shared Parameter ile bilginin schedule’da görünmesi.",
        story: [
          "Ne yaptım — Önce kendi parametrik aileleri (Tst-test kutu 01, masa ayak) + Autodesk “How to manage Revit families” modülü. Sonra playlist index 10: “İyi family nedir? İyi family nereden bulunur?”",
          "Üretici pratik — BIMobject’ten HAFELE KitchenEase (Room-03.rvt) ve Cappellini / Haworth Elan Lounge (.rfa). Showcase’te üretici ürün kodları + MATERIAL finish paketleri incelendi.",
          "Shared Parameter — Elif-SharedParams.txt içinde Marka_Kod (Text) tanımlandı. Room-03’te Project Parameters ile Furniture’a bağlandı. cabinet-02 → Ma-01, diğer dolap → Ma-02.",
          "Schedule — Furniture Schedule: Family and Type + Count + Marka_Kod. Tabloda Ma-01 / Ma-02 göründü. Normal family parametresi schedule’da çıkmaz; Shared Parameter çıkar.",
          "Sonuç — Hafta 5 kapandı: kendi aile + iyi family/BIMobject + Shared Parameter → schedule kanıtı.",
        ],
        gallery: [
          { src: "assets/revit-family/01-ref-planes-kutu.png", caption: "Tst-test kutu 01 — Ref. Level, referans düzlem iskeleti" },
          { src: "assets/revit-family/02-dimension-label.png", caption: "Ölçü → Label / Create Parameter (parametre bağlama)" },
          { src: "assets/revit-family/03-genislik-derinlik.png", caption: "alt kabuk — Genişlik = 1500, Derinlik = 1000" },
          { src: "assets/revit-family/04-3d-kutu-extrusion.png", caption: "3D — parametrik kutu extrusion + shape handle" },
          { src: "assets/revit-family/05-material-parameter.png", caption: "Parameter Properties — material (Instance)" },
          { src: "assets/revit-family/06-yukseklik-eq-constraints.png", caption: "Yükseklik parametresi + EQ (eşitlik) kısıtları" },
          { src: "assets/revit-family/07-masa-ayak-plan-params.png", caption: "masa ayak — GENİŞLİK / Derinlik + EQ merkezleme" },
          { src: "assets/revit-family/08-masa-ayak-profile.png", caption: "masa ayak — profil (fillet) + seviye alt = 0" },
          { src: "assets/revit-family/09-masa-ayak-3d.png", caption: "masa ayak — 3D View 1" },
          { src: "assets/revit-family/10-masa-ayak-extrusion-left.png", caption: "masa ayak — Left elevation, Extrusion düzenleme" },
          { src: "assets/revit-family/11-project-place-components.png", caption: "Proje — L1 planında yerleştirilmiş bileşenler" },
          { src: "assets/revit-family/12-bimobject-kitchenease-hafele.png", caption: "BIMobject HAFELE KitchenEase — Room-03 ürün etiketleri (Viento / Sense / Drawer light / Hailo)" },
          { src: "assets/revit-family/13-cappellini-elan-project-3d.png", caption: "Haworth Elan Lounge (.rfa) — projeye yüklenmiş 3 koltuk (3D)" },
          { src: "assets/revit-family/14-cappellini-elan-project-plan.png", caption: "Elan Lounge — plan yerleşimi" },
          { src: "assets/revit-family/15-hafele-material-dark-oak.jpg", caption: "KitchenEase MATERIAL — ZKS-1 984.50.110 DARK OAK" },
          { src: "assets/revit-family/16-hafele-material-ral-9016.jpg", caption: "KitchenEase MATERIAL — ZKS-1 984.50.110 RAL 9016" },
          { src: "assets/revit-family/17-shared-param-marka-kod-properties.png", caption: "Room-03 — cabinet-02 Properties: Marka_Kod = Ma-01 (Shared / Project)" },
          { src: "assets/revit-family/20-new-schedule-furniture.png", caption: "New Schedule — Category: Furniture" },
          { src: "assets/revit-family/19-schedule-fields-marka-kod.png", caption: "Schedule Fields — Marka_Kod eklendi" },
          { src: "assets/revit-family/18-furniture-schedule-marka-kod.png", caption: "Furniture Schedule — Ma-01 / Ma-02 sütunda görünüyor" },
        ],
        pdf: {
          label: "PDF — Revit Ailesi ve Üretici Firma Rehberi",
          href: "assets/revit-family/revit_aileleri_rehberi.pdf",
        },
        links: [
          { label: "YouTube — Revit Family Eğitim Serisi (playlist)", href: "https://www.youtube.com/playlist?list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH" },
          { label: "YouTube — Seri video (index 8, masa ayak)", href: "https://www.youtube.com/watch?v=qY5HQIU5CsM&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=8" },
          { label: "YouTube — İyi family nedir? (index 10)", href: "https://www.youtube.com/watch?v=uz4syCXx5WQ&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=10" },
          { label: "Autodesk — How to manage Revit families (tamamlandı)", href: "https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families" },
          { label: "Autodesk — Using families in Revit", href: "https://www.autodesk.com/learn/ondemand/tutorial/using-families-in-revit" },
          { label: "Autodesk — Foundations of Revit", href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit" },
          { label: "BIMobject — HAFELE KitchenEase", href: "https://www.bimobject.com/en/hafele/product/the-learning-room-kitchenease" },
          { label: "BIMobject TR — hazır aile indir", href: "https://www.bimobject.com/tr" },
          { label: "BIMsmith Market", href: "https://www.bimsmith.com/" },
          { label: "NBS National BIM Library", href: "https://www.nationalbimlibrary.com/" },
        ],
        docs: [
          { label: "PDF — Revit Ailesi ve Üretici Firma Rehberi", href: "assets/revit-family/revit_aileleri_rehberi.pdf" },
          { label: "Markdown — Autodesk How to manage Revit families (modül notu)", href: "assets/docs/Autodesk-How-to-Manage-Revit-Families.md" },
          { label: "Markdown — BIMobject üretici aile notu (Hafta 5)", href: "assets/docs/BIMobject-Uretici-Aile-Hafta5-Notu.md" },
          { label: "Markdown — Shared Parameter → Schedule (Hafta 5)", href: "assets/docs/Shared-Parameter-Schedule-Hafta5-Notu.md" },
        ],
        notes: [
          "Dosyalar: Tst-test kutu 01.rfa, masa ayak.rfa; BIMobject: Room-03.rvt, Haworth_Chair_Elan-Lounge.rfa",
          "Ekran görüntüleri: assets/revit-family/ (01–20; Shared Param 17–20)",
          "Autodesk modülü + iyi family videosu + BIMobject pratik tamam.",
          "Shared Parameter Marka_Kod → Furniture Schedule (Ma-01 / Ma-02) tamam — Hafta 5 kapandı.",
        ],
      },
      en: {
        title: "Revit: families and detail",
        goal: "Family Editor, parametric families, manufacturer libraries; Shared Parameter so data appears in schedules.",
        story: [
          "What I did — First my own parametric families (Tst-test kutu 01, table leg) + Autodesk “How to manage Revit families”. Then playlist index 10: “What is a good family? Where do you find one?”",
          "Manufacturer practice — From BIMobject: HAFELE KitchenEase (Room-03.rvt) and Cappellini / Haworth Elan Lounge (.rfa). Reviewed manufacturer product codes and MATERIAL finish packs.",
          "Shared Parameter — Defined Marka_Kod (Text) in Elif-SharedParams.txt. Bound it to Furniture via Project Parameters in Room-03. cabinet-02 → Ma-01; another cabinet → Ma-02.",
          "Schedule — Furniture Schedule with Family and Type + Count + Marka_Kod. Ma-01 / Ma-02 appeared in the table. Ordinary family parameters often do not; Shared Parameters do.",
          "Outcome — Week 5 closed: own families + good-family/BIMobject + Shared Parameter → schedule proof.",
        ],
        gallery: [
          { src: "assets/revit-family/01-ref-planes-kutu.png", caption: "Tst-test kutu 01 — Ref. Level, reference-plane skeleton" },
          { src: "assets/revit-family/02-dimension-label.png", caption: "Dimension → Label / Create Parameter" },
          { src: "assets/revit-family/03-genislik-derinlik.png", caption: "alt kabuk — Width = 1500, Depth = 1000" },
          { src: "assets/revit-family/04-3d-kutu-extrusion.png", caption: "3D — parametric box extrusion + shape handles" },
          { src: "assets/revit-family/05-material-parameter.png", caption: "Parameter Properties — material (Instance)" },
          { src: "assets/revit-family/06-yukseklik-eq-constraints.png", caption: "Height parameter + EQ constraints" },
          { src: "assets/revit-family/07-masa-ayak-plan-params.png", caption: "table leg — Width / Depth + EQ centering" },
          { src: "assets/revit-family/08-masa-ayak-profile.png", caption: "table leg — filleted profile + level alt = 0" },
          { src: "assets/revit-family/09-masa-ayak-3d.png", caption: "table leg — 3D View 1" },
          { src: "assets/revit-family/10-masa-ayak-extrusion-left.png", caption: "table leg — Left elevation, Extrusion edit" },
          { src: "assets/revit-family/11-project-place-components.png", caption: "Project — components placed on L1 plan" },
          { src: "assets/revit-family/12-bimobject-kitchenease-hafele.png", caption: "BIMobject HAFELE KitchenEase — Room-03 product tags (Viento / Sense / Drawer light / Hailo)" },
          { src: "assets/revit-family/13-cappellini-elan-project-3d.png", caption: "Haworth Elan Lounge (.rfa) — three chairs loaded into project (3D)" },
          { src: "assets/revit-family/14-cappellini-elan-project-plan.png", caption: "Elan Lounge — plan placement" },
          { src: "assets/revit-family/15-hafele-material-dark-oak.jpg", caption: "KitchenEase MATERIAL — ZKS-1 984.50.110 DARK OAK" },
          { src: "assets/revit-family/16-hafele-material-ral-9016.jpg", caption: "KitchenEase MATERIAL — ZKS-1 984.50.110 RAL 9016" },
          { src: "assets/revit-family/17-shared-param-marka-kod-properties.png", caption: "Room-03 — cabinet-02 Properties: Marka_Kod = Ma-01 (Shared / Project)" },
          { src: "assets/revit-family/20-new-schedule-furniture.png", caption: "New Schedule — Category: Furniture" },
          { src: "assets/revit-family/19-schedule-fields-marka-kod.png", caption: "Schedule Fields — Marka_Kod added" },
          { src: "assets/revit-family/18-furniture-schedule-marka-kod.png", caption: "Furniture Schedule — Ma-01 / Ma-02 visible in column" },
        ],
        pdf: {
          label: "PDF — Revit Family & Manufacturer Guide",
          href: "assets/revit-family/revit_aileleri_rehberi.pdf",
        },
        links: [
          { label: "YouTube — Revit Family Eğitim Serisi (playlist)", href: "https://www.youtube.com/playlist?list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH" },
          { label: "YouTube — Series video (index 8, table leg)", href: "https://www.youtube.com/watch?v=qY5HQIU5CsM&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=8" },
          { label: "YouTube — What is a good family? (index 10)", href: "https://www.youtube.com/watch?v=uz4syCXx5WQ&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=10" },
          { label: "Autodesk — How to manage Revit families (completed)", href: "https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families" },
          { label: "Autodesk — Using families in Revit", href: "https://www.autodesk.com/learn/ondemand/tutorial/using-families-in-revit" },
          { label: "Autodesk — Foundations of Revit", href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit" },
          { label: "BIMobject — HAFELE KitchenEase", href: "https://www.bimobject.com/en/hafele/product/the-learning-room-kitchenease" },
          { label: "BIMobject — download families", href: "https://www.bimobject.com/" },
          { label: "BIMsmith Market", href: "https://www.bimsmith.com/" },
          { label: "NBS National BIM Library", href: "https://www.nationalbimlibrary.com/" },
        ],
        docs: [
          { label: "PDF — Revit Family & Manufacturer Guide", href: "assets/revit-family/revit_aileleri_rehberi.pdf" },
          { label: "Markdown — Autodesk How to manage Revit families (module note)", href: "assets/docs/Autodesk-How-to-Manage-Revit-Families.md" },
          { label: "Markdown — BIMobject manufacturer family note (Week 5)", href: "assets/docs/BIMobject-Uretici-Aile-Hafta5-Notu.md" },
          { label: "Markdown — Shared Parameter → Schedule (Week 5)", href: "assets/docs/Shared-Parameter-Schedule-Hafta5-Notu.md" },
        ],
        notes: [
          "Files: Tst-test kutu 01.rfa, masa ayak.rfa; BIMobject: Room-03.rvt, Haworth_Chair_Elan-Lounge.rfa",
          "Screenshots: assets/revit-family/ (01–20; Shared Param 17–20)",
          "Autodesk module + good-family video + BIMobject practice done.",
          "Shared Parameter Marka_Kod → Furniture Schedule (Ma-01 / Ma-02) done — Week 5 closed.",
        ],
      },
    },
    {
      id: 6,
      status: "done",
      tr: {
        title: "Revit: metraj ve çizelgeler",
        goal: "Metrajı adım adım öğrenmek: 2D dijital takeoff → AI sayım → Forma Takeoff → aynı modelde Revit Material Takeoff kıyası.",
        story: [
          "Süreç staj paftasıyla başladı. Statik planı Cyanbuild’e yükledim, ölçeği kontrol edip döşeme betonu için poligon çizerek area takeoff yaptım — ilk somut miktar buradan çıktı.",
          "Sonra aynı platformda AI akışını denedim: plan rasterleşti, bölümler ayrıldı, elemanlar tespit edildi (kolon, kapı, tuvalet…). Amaç tam ihale metrajı değil; “otomatik sayım ne kadar işe yarıyor, nerede elle düzeltmek gerekir?” sorusunu görmekti.",
          "Üçüncü adımda Autodesk Learning’deki Docs & Takeoff (90 dk) kursunun metraj yarısını işledim. Forma Takeoff’ta önce takeoff type açtım (column count, floor concrete), foundation paftasında kolonları saydım (17 EA), sonra Retaining Footing üzerinde poligon çizdim. Scale not set uyarısı gelince alan/m³’ün henüz güvenilmez olduğunu net gördüm — Cyanbuild’deki ölçek dersinin tekrarı.",
          "Sonra Structural paketinde 3D modele geçtim: A–Substructure altında Floor concrete 30, Footing 60/78 ve retaining footing tiplerini tanımlayıp modelden seçtim. Inventory’de hacimler düştü (ör. Floor 25.29 M3, Footing 60 ≈ 23.51 M3, retaining ≈ 140.44 M3); Classification (A1010) ve Excel export da denendi.",
          "Footing 78’deki `-- M3` uyarısını default ölçü (0.78×0.78×0.60) + yeniden seçimle giderdim: 7 EA ve 42.00 M3. Map Thickness’te çarpım formülü yerine sabit boyut / doğru tek property kullanmak gerektiğini net gördüm.",
          "Mini kıyas: aynı `ADSK-STR_Takeoff.rvt` dosyasını Revit’te açıp Structural Foundation Material Takeoff yaptım (Family and Type + Count + Material Volume; tip bazında toplu). Sonuç Forma Inventory ile birebir örtüştü — Footing 1500×1500: 11 / 23.51 m³; Footing 2000×2000: 7 / 42.00 m³; Foundation Slab: 25.29 m³; Retaining Wall Foundation: 11 / 140.44 m³. Aynı modelde bulut Takeoff ile model schedule’ın uyumu görüldü.",
        ],
        gallery: [
          {
            src: "assets/revit-metraj/01-staj-statik-plan-cyanbuild.png",
            caption: "1) Staj planı — Cyanbuild’de döşeme betonu area takeoff",
          },
          {
            src: "assets/revit-metraj/02-cyanbuild-ai-tespit-miktarlar.png",
            caption: "2) Cyanbuild AI — tespit kutuları + miktar tablosu",
          },
          {
            src: "assets/revit-metraj/03-forma-takeoff-floor-concrete.png",
            caption: "3) Forma Takeoff — floor concrete poligon; Scale not set",
          },
          {
            src: "assets/revit-metraj/04-forma-takeoff-types-columns.png",
            caption: "4) Takeoff Types — kolon 17 EA + floor concrete",
          },
          {
            src: "assets/revit-metraj/05-forma-takeoff-3d-structural.png",
            caption: "5) 3D — ADSK-STR_Takeoff.rvt + sheet listesi",
          },
          {
            src: "assets/revit-metraj/06-forma-takeoff-3d-colored-footings.png",
            caption: "6) 3D — renkli footing takeoff’ları (60 / 78 / retaining)",
          },
          {
            src: "assets/revit-metraj/07-forma-takeoff-types-substructure.png",
            caption: "7) Takeoff Types — A Substructure + volume (retaining 140.44 M3)",
          },
          {
            src: "assets/revit-metraj/08-forma-takeoff-inventory-volumes.png",
            caption: "8) Inventory — Floor / Footing hacimleri (M3)",
          },
          {
            src: "assets/revit-metraj/09-forma-takeoff-export-excel.png",
            caption: "9) Excel export — Classification A1010 + emb. carbon",
          },
          {
            src: "assets/revit-metraj/10-forma-takeoff-footing78-volume-fixed.png",
            caption: "10) Footing 0.78 — 7 EA + 42.00 M3 (uyarı giderildi)",
          },
          {
            src: "assets/revit-metraj/11-forma-takeoff-footing78-inventory-3d.png",
            caption: "11) Inventory + 3D — Footing 78 düzeltmesi (emb. carbon güncellendi)",
          },
          {
            src: "assets/revit-metraj/12-revit-foundation-material-takeoff.png",
            caption: "12) Revit Material Takeoff — foundation hacimleri (Forma ile aynı m³)",
          },
          {
            src: "assets/revit-metraj/13-revit-str-takeoff-3d.png",
            caption: "13) Revit 3D — ADSK-STR_Takeoff (schedule kaynağı)",
          },
        ],
        learn: [
          "2D takeoff sırası: pafta yükle → ölçek → poligon / count",
          "AI takeoff: tespit → doğrulama → güven skoru sınırı",
          "Forma Takeoff: type tanımla → 2D çiz / say → 3D modelden seç",
          "3D volume: line item M3 + Width/Length/Thickness map veya default ölçü",
          "Inventory / Excel export ve Classification (A1010)",
          "Revit Material Takeoff: aynı modelde tip + Count + Material Volume; Forma ile kıyas",
        ],
        practice: [
          "1. Staj statik planını Cyanbuild’e yükleyip döşeme betonu ölç",
          "2. Aynı planda AI tespit + miktar tablosunu oku, yanlış etiketleri not et",
          "3. Autodesk Learn Docs & Takeoff — Takeoff bölümünü bitir",
          "4. Forma’da type aç: kolon sayımı + floor concrete poligon",
          "5. Structural paket: 3D footing / slab tipleri + Inventory M3",
          "6. Excel export + Classification; Footing 78 `-- M3` düzeltmesi (tamam)",
          "7. Aynı RVT’de Revit Material Takeoff + Forma kıyası (tamam)",
        ],
        links: [
          { label: "Cyanbuild (denediğim AI / dijital takeoff)", href: "https://cyanbuild.com" },
          {
            label: "Autodesk Learn — Docs & Takeoff (90 dk)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-and-takeoff-in-90-minutes",
          },
          { label: "Autodesk / Forma Takeoff", href: "https://construction.autodesk.com/products/autodesk-takeoff/" },
          { label: "Togal.AI", href: "https://www.togal.ai" },
          { label: "Kreo", href: "https://www.kreo.net" },
          { label: "Buildots (saha / ilerleme odaklı AI)", href: "https://buildots.com" },
          { label: "Revit quantity takeoff (YouTube)", href: "https://www.youtube.com/results?search_query=revit+quantity+takeoff" },
          { label: "Autodesk Certification overview", href: "https://www.autodesk.com/certification/overview" },
        ],
        notes: [
          "Tamam: Cyanbuild + Forma Takeoff + Footing 78 M3 + Revit Material Takeoff kıyası.",
          "Kanıt: assets/revit-metraj/01–02 Cyanbuild, 03–11 Forma, 12–13 Revit schedule.",
          "Kıyas (aynı model): Slab 25.29 · Footing 23.51 / 42.00 · Retaining 140.44 m³ — Forma = Revit.",
          "Docs yarısı → Hafta 10.",
        ],
      },
      en: {
        title: "Revit: quantities and schedules",
        goal: "Learn takeoff step by step: 2D digital → AI counts → Forma Takeoff → same-model Revit Material Takeoff compare.",
        story: [
          "The process started with an internship sheet. I uploaded the structural plan to Cyanbuild, checked scale, and traced a polygon for slab concrete — that was the first concrete quantity.",
          "Next I tried the AI path on the same platform: rasterize → segment → detect (columns, doors, toilets…). Goal wasn’t a full bid takeoff; it was to see how far auto-count goes and where manual correction still matters.",
          "Third step: the takeoff half of Autodesk Learning’s Docs & Takeoff (90 min). In Forma Takeoff I created types (column count, floor concrete), counted columns on the foundation sheet (17 EA), then traced a Retaining Footing polygon. The Scale not set warning made clear that area/m³ was not trustworthy yet — same lesson as Cyanbuild.",
          "Then in the Structural package I moved to the 3D model: under A–Substructure I defined Floor concrete 30, Footing 60/78 and retaining footing types and selected them from the model. Inventory showed volumes (e.g. Floor 25.29 M3, Footing 60 ≈ 23.51 M3, retaining ≈ 140.44 M3); Classification (A1010) and Excel export were also tried.",
          "I cleared the Footing 78 `-- M3` warning with default dimensions (0.78×0.78×0.60) and reselect: 7 EA and 42.00 M3. Lesson: use a single Thickness property or fixed sizes — not a multiply formula in Map Thickness.",
          "Mini compare: I opened the same `ADSK-STR_Takeoff.rvt` in Revit and built a Structural Foundation Material Takeoff (Family and Type + Count + Material Volume, grouped by type). Results matched Forma Inventory exactly — Footing 1500×1500: 11 / 23.51 m³; Footing 2000×2000: 7 / 42.00 m³; Foundation Slab: 25.29 m³; Retaining Wall Foundation: 11 / 140.44 m³. Same model, cloud Takeoff and model schedule aligned.",
        ],
        gallery: [
          {
            src: "assets/revit-metraj/01-staj-statik-plan-cyanbuild.png",
            caption: "1) Internship plan — Cyanbuild slab concrete area takeoff",
          },
          {
            src: "assets/revit-metraj/02-cyanbuild-ai-tespit-miktarlar.png",
            caption: "2) Cyanbuild AI — detection boxes + quantities table",
          },
          {
            src: "assets/revit-metraj/03-forma-takeoff-floor-concrete.png",
            caption: "3) Forma Takeoff — floor concrete polygon; Scale not set",
          },
          {
            src: "assets/revit-metraj/04-forma-takeoff-types-columns.png",
            caption: "4) Takeoff Types — columns 17 EA + floor concrete",
          },
          {
            src: "assets/revit-metraj/05-forma-takeoff-3d-structural.png",
            caption: "5) 3D — ADSK-STR_Takeoff.rvt + sheet list",
          },
          {
            src: "assets/revit-metraj/06-forma-takeoff-3d-colored-footings.png",
            caption: "6) 3D — colored footing takeoffs (60 / 78 / retaining)",
          },
          {
            src: "assets/revit-metraj/07-forma-takeoff-types-substructure.png",
            caption: "7) Takeoff Types — A Substructure + volume (retaining 140.44 M3)",
          },
          {
            src: "assets/revit-metraj/08-forma-takeoff-inventory-volumes.png",
            caption: "8) Inventory — Floor / Footing volumes (M3)",
          },
          {
            src: "assets/revit-metraj/09-forma-takeoff-export-excel.png",
            caption: "9) Excel export — Classification A1010 + emb. carbon",
          },
          {
            src: "assets/revit-metraj/10-forma-takeoff-footing78-volume-fixed.png",
            caption: "10) Footing 0.78 — 7 EA + 42.00 M3 (warning cleared)",
          },
          {
            src: "assets/revit-metraj/11-forma-takeoff-footing78-inventory-3d.png",
            caption: "11) Inventory + 3D — Footing 78 fix (emb. carbon updated)",
          },
          {
            src: "assets/revit-metraj/12-revit-foundation-material-takeoff.png",
            caption: "12) Revit Material Takeoff — foundation volumes (same m³ as Forma)",
          },
          {
            src: "assets/revit-metraj/13-revit-str-takeoff-3d.png",
            caption: "13) Revit 3D — ADSK-STR_Takeoff (schedule source)",
          },
        ],
        learn: [
          "2D takeoff order: upload sheet → scale → polygon / count",
          "AI takeoff: detect → validate → confidence limits",
          "Forma Takeoff: define type → draw / count in 2D → select in 3D",
          "3D volume: line item M3 + Width/Length/Thickness map or default sizes",
          "Inventory / Excel export and Classification (A1010)",
          "Revit Material Takeoff: same model, type + Count + Material Volume; compare to Forma",
        ],
        practice: [
          "1. Upload internship structural plan to Cyanbuild and measure slab concrete",
          "2. Run AI detect + read quantities; note mislabels",
          "3. Finish Autodesk Learn Docs & Takeoff — Takeoff section",
          "4. In Forma: create types, column count + floor concrete polygon",
          "5. Structural package: 3D footing / slab types + Inventory M3",
          "6. Excel export + Classification; fix Footing 78 `-- M3` (done)",
          "7. Same RVT: Revit Material Takeoff + Forma compare (done)",
        ],
        links: [
          { label: "Cyanbuild (AI / digital takeoff I tried)", href: "https://cyanbuild.com" },
          {
            label: "Autodesk Learn — Docs & Takeoff (90 min)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-and-takeoff-in-90-minutes",
          },
          { label: "Autodesk / Forma Takeoff", href: "https://construction.autodesk.com/products/autodesk-takeoff/" },
          { label: "Togal.AI", href: "https://www.togal.ai" },
          { label: "Kreo", href: "https://www.kreo.net" },
          { label: "Buildots (site / progress AI)", href: "https://buildots.com" },
          { label: "Revit quantity takeoff (YouTube)", href: "https://www.youtube.com/results?search_query=revit+quantity+takeoff" },
          { label: "Autodesk Certification overview", href: "https://www.autodesk.com/certification/overview" },
        ],
        notes: [
          "Done: Cyanbuild + Forma Takeoff + Footing 78 M3 + Revit Material Takeoff compare.",
          "Evidence: assets/revit-metraj/01–02 Cyanbuild, 03–11 Forma, 12–13 Revit schedule.",
          "Compare (same model): Slab 25.29 · Footing 23.51 / 42.00 · Retaining 140.44 m³ — Forma = Revit.",
          "Docs half → Week 10.",
        ],
      },
    },
    {
      id: 7,
      status: "done",
      tr: {
        title: "Civil 3D: giriş",
        goal: "Sıfırdan küçük bir arazi + yol iskeleti kurmak: önce arazi (Surface), sonra güzergâh (Alignment), sonra boykesit (Profile), en sonda yol gövdesi (Corridor).",
        story: [
          "Bu hafta Civil 3D’ye başladım. Program yollar ve arazi için; Revit gibi bina odaklı değil. Açılışta metrik (metre) şablon seçtim. Soldaki Prospector paneli önemli: yaptığın her şey (arazi, yol, corridor) burada listelenir. Ekran siyah kalsa bile obje Prospector’da olabilir — önce oraya bak.",
          "Önce Autodesk Learn’deki kısa Surface videolarını izledim. Surface = arazinin 3D modeli. Videolar kavram anlatıyor; senin yerine çizmiyor. Bu yüzden elle denedim: Create Surface ile boş bir arazi kutusu açtım, adını `EG` koydum (Existing Ground = mevcut zemin). Sonra Manual ile 6 nokta girdim; her noktanın X–Y konumu ve kotu (yüksekliği) var. Dikkat: Description (açıklama) kutusuna kot yazılmamalı — kot Elevation alanına gider. Noktaları EG’ye Point groups → `_All Points` ile bağlayınca planda yeşil alan ve kırmızı X’ler çıktı; ViewCube ile çevirince üçgenlerden oluşan arazi (TIN) göründü.",
          "İkinci adım Alignment = yolun plandaki güzergâhı (üstten bakınca çizgi). `0,10`’dan `80,10`’a düz bir çizgi çizdim. Arazi modelinin kendi üçgen kenarı çapraz çizgi gibi duruyordu; onu silmeye çalışınca hep surface seçiliyordu — çünkü o ayrı çizgi değil, arazinin parçası. Asıl yatay çizgiden Create Alignment from Objects ile `YOL1` ürettim. Prospector → Alignments altında göründü.",
          "Üçüncü adım Profile = boykesit: yol boyunca zeminin nasıl yükselip alçaldığı (yan kesit gibi grafik). Komut Create Surface Profile / `CREATEPROFILEFROMSURFACE`: YOL1 güzergâhı + EG arazisi → Add >> → Draw in profile view. Ribbon’da Profile View ile Profile farklı menüler; Surface Profile ikincisinde. İlk sefer ViewCube alt görünümde olduğu için yazılar ters çıktı; üst görünüme (TOP) dönünce düzeldi. `YOL1 PROFILE` grafiğinde istasyon 0…80 m, kot yaklaşık 100–102 m, kırmızı çizgi mevcut zemin.",
          "Son adım Corridor = güzergâh + boykesit + enkesit şablonunun (Assembly) birleşimi; yolun 3D iskeleti. Basit assembly `YOL-ASM` ve corridor `YOL-COR` oluşturdum (YOL1 + EG profili + assembly). Rebuild deyince `Corridor 'YOL-COR' created.` yazdı. Özet zincir: arazi → güzergâh → boykesit → corridor. Hacim ve enkesit hesapları Hafta 8’de.",
        ],
        gallery: [
          {
            src: "assets/civil3d/01-civil3d-acilis-metrik.png",
            caption: "1) Civil 3D açılış — Prospector + metrik (1:1000)",
          },
          {
            src: "assets/civil3d/02-create-surface-eg.png",
            caption: "2) Create Surface — TIN `EG`, Contours 2m and 10m",
          },
          {
            src: "assets/civil3d/03-eg-surface-6-nokta.png",
            caption: "3) EG + `_All Points` (6 nokta) — plan’da yüzey sınırı",
          },
          {
            src: "assets/civil3d/04-eg-surface-3d-tin.png",
            caption: "4) ViewCube — TIN üçgenleri 3D",
          },
          {
            src: "assets/civil3d/05b-create-alignment-from-objects.png",
            caption: "5) Create Alignment from Objects — `YOL1` / Centerline",
          },
          {
            src: "assets/civil3d/05c-yol1-plan-view.png",
            caption: "6) Plan — EG surface + yatay güzergâh (`YOL1`)",
          },
          {
            src: "assets/civil3d/05-alignment-yol1-prospector.png",
            caption: "7) Prospector — Alignments → Centerline → `YOL1`",
          },
          {
            src: "assets/civil3d/06-create-profile-from-surface.png",
            caption: "8) Create Profile from Surface — YOL1 + EG (Add >>)",
          },
          {
            src: "assets/civil3d/07-yol1-profile-view.png",
            caption: "9) YOL1 PROFILE — boykesit (0+000…0+080, kot ~100)",
          },
          {
            src: "assets/civil3d/08-create-corridor-yol-cor.png",
            caption: "10) Create Corridor — `YOL-COR` + YOL1 + EG + YOL-ASM",
          },
          {
            src: "assets/civil3d/09-hafta7-son-plan-profile.png",
            caption: "11) Son — plan + profile; komut: Corridor YOL-COR created",
          },
        ],
        learn: [
          "Surface = arazi 3D modeli (EG); noktalarla yükselti verilir",
          "Alignment = plandaki yol güzergâhı (YOL1)",
          "Profile = boykesit grafiği (yol boyunca kot)",
          "Corridor = güzergâh + profil + assembly (yol iskeleti)",
          "Prospector’da bak; boş ekran = obje yok demek değil",
          "Learn videoları kavram; uygulamayı elle yapmak gerekir",
        ],
        practice: [
          "1. Metric şablon + Create Surface `EG`",
          "2. 6 Manual nokta + `_All Points` → surface",
          "3. Polyline 0,10–80,10 → Alignment `YOL1`",
          "4. CREATEPROFILEFROMSURFACE → YOL1 PROFILE",
          "5. Assembly + Corridor `YOL-COR` + Rebuild",
        ],
        pdf: {
          label: "PDF — Civil 3D Hafta 7: Kavramlar + Adım Adım Mini Proje",
          href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
        },
        docs: [
          {
            label: "PDF — Hiç bilmeyen için basit anlatım (Hafta 7)",
            href: "assets/civil3d/Civil3D-Hafta7-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Civil 3D Hafta 7: Kavramlar + Adım Adım Mini Proje",
            href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
          },
          {
            label: "Markdown — Civil 3D Hafta 7 kavramlar ve adımlar",
            href: "assets/docs/Civil3D-Hafta7-Kavramlar-ve-Adimlar.md",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Civil 3D Quick Start Guide",
            href: "https://www.autodesk.com/learn/ondemand/curated/civil-3d-quick-start-guide",
          },
          {
            label: "Learn — About Civil 3D surfaces",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/about-civil-3d-surfaces",
          },
          {
            label: "Learn — Introduction to surfaces",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/introduction-to-surfaces",
          },
          {
            label: "Learn — Create alignments from objects",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-alignments-from-objects",
          },
          {
            label: "Learn — Create a surface profile",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-a-surface-profile",
          },
          {
            label: "Learn — Design and edit a layout profile",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/design-and-edit-a-layout-profile-for-a-road",
          },
          {
            label: "Learn — Model a road corridor",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/model-a-road-corridor",
          },
          { label: "Civil 3D Help", href: "https://help.autodesk.com/view/CIV3D/2025/ENU/" },
          {
            label: "YouTube — Civil 3D surface tutorial",
            href: "https://www.youtube.com/results?search_query=civil+3d+surface+tutorial",
          },
        ],
        notes: [
          "Tamam: EG → YOL1 → YOL1 PROFILE → YOL-COR (Civil 3D 2027 metric).",
          "Kanıt: assets/civil3d/01–09 (+ 05b/05c).",
          "PDF: Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf (kavramlar + adımlar).",
          "PDF: Civil3D-Hafta7-Basit-Anlatim.pdf (hiç bilmeyen için).",
          "Learn videoları kavram; uygulama elle mini proje.",
          "Ders: Profile ≠ Profile View; ViewCube Bottom yazıyı ters çevirir; TIN kenarı silinmez.",
          "Sonraki: Hafta 8 — enkesit + cut/fill hacim.",
        ],
      },
      en: {
        title: "Civil 3D: introduction",
        goal: "Build a tiny ground + road skeleton from scratch: Surface (terrain) → Alignment (route) → Profile (long section) → Corridor (3D road body).",
        story: [
          "This week I started Civil 3D. It’s for roads and terrain, not buildings like Revit. I opened a metric (meters) template. The left Prospector panel matters: everything you create (surface, road, corridor) is listed there. If the canvas looks empty, check Prospector first — the object may already exist.",
          "I watched Autodesk Learn’s short Surface videos. A Surface is a 3D model of the ground. The videos explain ideas; they don’t draw for you. So I practiced: Create Surface made an empty terrain box named `EG` (Existing Ground). Then I entered 6 Manual points — each has X–Y location and elevation (height). Tip: don’t type the elevation in Description; use the Elevation field. After linking points with Point groups → `_All Points`, plan showed a green area and red X marks; ViewCube showed the triangulated ground (TIN).",
          "Next: Alignment = the road centerline in plan (the path from above). I drew a straight line from `0,10` to `80,10`. A TIN edge looked like a diagonal line and wouldn’t erase — it’s part of the surface, not a separate line. Create Alignment from Objects turned the horizontal line into `YOL1`, visible under Alignments in Prospector.",
          "Third: Profile = the long section — how the ground rises and falls along the road (a side-view graph). Command Create Surface Profile / `CREATEPROFILEFROMSURFACE`: YOL1 + EG → Add >> → Draw in profile view. On the ribbon, Profile View and Profile are different menus; Surface Profile is under Profile. First placement looked upside-down because ViewCube was on Bottom; switching to TOP fixed it. In `YOL1 PROFILE`: stations 0…80 m, elev about 100–102 m, red line = existing ground.",
          "Last: Corridor = alignment + profile + cross-section template (Assembly) combined — the 3D road skeleton. I made a simple assembly `YOL-ASM` and corridor `YOL-COR` (YOL1 + EG profile + assembly). After Rebuild, the line said `Corridor 'YOL-COR' created.` Chain: ground → route → profile → corridor. Volumes and cross sections come in Week 8.",
        ],
        gallery: [
          {
            src: "assets/civil3d/01-civil3d-acilis-metrik.png",
            caption: "1) Civil 3D open — Prospector + metric (1:1000)",
          },
          {
            src: "assets/civil3d/02-create-surface-eg.png",
            caption: "2) Create Surface — TIN `EG`, Contours 2m and 10m",
          },
          {
            src: "assets/civil3d/03-eg-surface-6-nokta.png",
            caption: "3) EG + `_All Points` (6 pts) — surface boundary in plan",
          },
          {
            src: "assets/civil3d/04-eg-surface-3d-tin.png",
            caption: "4) ViewCube — TIN triangles in 3D",
          },
          {
            src: "assets/civil3d/05b-create-alignment-from-objects.png",
            caption: "5) Create Alignment from Objects — `YOL1` / Centerline",
          },
          {
            src: "assets/civil3d/05c-yol1-plan-view.png",
            caption: "6) Plan — EG surface + horizontal route (`YOL1`)",
          },
          {
            src: "assets/civil3d/05-alignment-yol1-prospector.png",
            caption: "7) Prospector — Alignments → Centerline → `YOL1`",
          },
          {
            src: "assets/civil3d/06-create-profile-from-surface.png",
            caption: "8) Create Profile from Surface — YOL1 + EG (Add >>)",
          },
          {
            src: "assets/civil3d/07-yol1-profile-view.png",
            caption: "9) YOL1 PROFILE — profile view (0+000…0+080, elev ~100)",
          },
          {
            src: "assets/civil3d/08-create-corridor-yol-cor.png",
            caption: "10) Create Corridor — `YOL-COR` + YOL1 + EG + YOL-ASM",
          },
          {
            src: "assets/civil3d/09-hafta7-son-plan-profile.png",
            caption: "11) Final — plan + profile; Corridor YOL-COR created",
          },
        ],
        learn: [
          "Surface = 3D ground model (EG); elevations come from points",
          "Alignment = road route in plan (YOL1)",
          "Profile = long-section graph (elevation along the road)",
          "Corridor = route + profile + assembly (road skeleton)",
          "Check Prospector; empty canvas ≠ missing object",
          "Learn videos = concepts; you still build by hand",
        ],
        practice: [
          "1. Metric template + Create Surface `EG`",
          "2. 6 Manual points + `_All Points` → surface",
          "3. Polyline 0,10–80,10 → Alignment `YOL1`",
          "4. CREATEPROFILEFROMSURFACE → YOL1 PROFILE",
          "5. Assembly + Corridor `YOL-COR` + Rebuild",
        ],
        pdf: {
          label: "PDF — Civil 3D Week 7: Concepts + Step-by-step Mini Project",
          href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
        },
        docs: [
          {
            label: "PDF — Simple explainer for beginners (Week 7)",
            href: "assets/civil3d/Civil3D-Hafta7-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Civil 3D Week 7: Concepts + Step-by-step Mini Project",
            href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
          },
          {
            label: "Markdown — Civil 3D Week 7 concepts and steps",
            href: "assets/docs/Civil3D-Hafta7-Kavramlar-ve-Adimlar.md",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Civil 3D Quick Start Guide",
            href: "https://www.autodesk.com/learn/ondemand/curated/civil-3d-quick-start-guide",
          },
          {
            label: "Learn — About Civil 3D surfaces",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/about-civil-3d-surfaces",
          },
          {
            label: "Learn — Introduction to surfaces",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/introduction-to-surfaces",
          },
          {
            label: "Learn — Create alignments from objects",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-alignments-from-objects",
          },
          {
            label: "Learn — Create a surface profile",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-a-surface-profile",
          },
          {
            label: "Learn — Design and edit a layout profile",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/design-and-edit-a-layout-profile-for-a-road",
          },
          {
            label: "Learn — Model a road corridor",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/model-a-road-corridor",
          },
          { label: "Civil 3D Help", href: "https://help.autodesk.com/view/CIV3D/2025/ENU/" },
          {
            label: "YouTube — Civil 3D surface tutorial",
            href: "https://www.youtube.com/results?search_query=civil+3d+surface+tutorial",
          },
        ],
        notes: [
          "Done: EG → YOL1 → YOL1 PROFILE → YOL-COR (Civil 3D 2027 metric).",
          "Evidence: assets/civil3d/01–09 (+ 05b/05c).",
          "PDF: Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf (concepts + steps).",
          "PDF: Civil3D-Hafta7-Basit-Anlatim.pdf (beginner explainer).",
          "Learn videos = concepts; hands-on mini project = practice.",
          "Lessons: Profile ≠ Profile View; Bottom view mirrors labels; TIN edges aren’t erasable lines.",
          "Next: Week 8 — sections + cut/fill volumes.",
        ],
      },
    },
    {
      id: 8,
      status: "done",
      tr: {
        title: "Civil 3D: hacim ve kesit",
        goal: "Hafta 7 yol iskeleti üzerinde enkesit almak ve EG–FG arasında cut/fill hacmini tabloya dökmek.",
        story: [
          "Hafta 7’de EG (arazi), YOL1 (güzergâh), boykesit ve corridor iskeleti hazırdı. Bu hafta soru değişti: yol boyunca enine nasıl görünüyor ve ne kadar kazı/dolgu var?",
          "Sample Line = yola dik “şuradan kes” çizgisi. Home → Sample Lines ile YOL1 seçildi; grup adı SL-YOL1. İstasyonlar 0 / 20 / 40 / 60 / 80 m, sol-sağ ~20 m. Planda dik kesikli çizgiler ve pembe istasyon etiketleri çıktı.",
          "Section View = enkesit grafiği. Yatay eksen offset (−20…+20 m), düşey kot. Önce Create Section View ile 0+000 tek kesit, sonra Create Multiple Section Views ile beş istasyon birden yerleştirildi. Boykesit (YOL1 PROFILE) uzunlamasına bakarken enkesit o noktada enine bakıyor — ikisi farklı.",
          "Cut/Fill için ikinci yüzey gerekti. Create Surface ile FG (Finished Ground) açıldı; düz kot ~101 m noktalarla dolduruldu. Compute Materials’te şablon solda EG ve DATUM yazar; DATUM bir yuva — Object Name’de FG seçilir. İlk başta FG listede yoktu: SL-YOL1 → Properties → Sections → Sample more sources ile FG eklendi. Sonra EG→EG, DATUM→FG eşlendi.",
          "Total Volume Table yerleştirildi. Average End Area ile istasyonlar arası hacimler geldi; 0+080 sonunda kümülatif kabaca ~73 m³ Cut ve ~18 m³ Fill. Mini demo kotlarına bağlı sayılar; amaç yöntemin (sample → section → materials → table) çalıştığını göstermek. Hafta 8 kapandı.",
        ],
        gallery: [
          {
            src: "assets/civil3d/10-hafta8-sample-lines-baslangic.png",
            caption: "1) Sample Lines başlangıç — YOL1 seçimi (CREATESAMPLELINES)",
          },
          {
            src: "assets/civil3d/11-hafta8-sample-lines-0-80.png",
            caption: "2) Sample Lines — 0+000 … 0+080 (SL-YOL1)",
          },
          {
            src: "assets/civil3d/12-hafta8-sample-lines-plan.png",
            caption: "3) Plan — sample lines + EG tooltip (kot okuma)",
          },
          {
            src: "assets/civil3d/13-hafta8-create-section-view.png",
            caption: "4) Create Section View — YOL1 / SL-YOL1 / 0+000",
          },
          {
            src: "assets/civil3d/14-hafta8-section-view-0000.png",
            caption: "5) Section View — tek enkesit 0+000",
          },
          {
            src: "assets/civil3d/15-hafta8-section-view-detay.png",
            caption: "6) Enkesit detay — offset / elev etiketleri",
          },
          {
            src: "assets/civil3d/16-hafta8-multiple-section-views.png",
            caption: "7) Multiple Section Views — 0+000 … 0+080",
          },
          {
            src: "assets/civil3d/17-hafta8-multiple-sections-renkli.png",
            caption: "8) Multiple sections — EG/FG çizgi renkleri",
          },
          {
            src: "assets/civil3d/18-hafta8-yol1-profile-hatirlatma.png",
            caption: "9) Hatırlatma — YOL1 PROFILE (boykesit ≠ enkesit)",
          },
          {
            src: "assets/civil3d/19b-hafta8-prospector-eg-fg.png",
            caption: "10) Prospector — EG + FG yüzeyleri",
          },
          {
            src: "assets/civil3d/19-hafta8-sl-properties-sections.png",
            caption: "11) SL-YOL1 Properties → Sections (Sample more sources)",
          },
          {
            src: "assets/civil3d/20-hafta8-compute-materials-eg-fg.png",
            caption: "12) Compute Materials — EG→EG, DATUM→FG",
          },
          {
            src: "assets/civil3d/21-hafta8-create-total-volume-table.png",
            caption: "13) Create Total Volume Table — YOL1 / SL-YOL1",
          },
          {
            src: "assets/civil3d/22-hafta8-total-volume-table.png",
            caption: "14) Total Volume Table — Cut ~73 m³, Fill ~18 m³ (kümülatif)",
          },
        ],
        learn: [
          "Sample Line = yolda kesit yeri; Section View = enkesit grafiği",
          "Boykesit (Profile) ≠ enkesit (Section)",
          "Cut = kazı, Fill = dolgu; DATUM yuvasına FG bağlanır",
          "FG sonradan eklenirse Sample more sources şart",
          "Average End Area → Total Volume Table",
        ],
        practice: [
          "1. YOL1 üzerinde SL-YOL1 sample lines (0…80, ±20 m)",
          "2. Tek + multiple section views",
          "3. FG surface + Sections’a ekle",
          "4. Compute Materials EG/FG",
          "5. Total Volume Table",
        ],
        pdf: {
          label: "PDF — Civil 3D Hafta 8: Enkesit + Cut/Fill Hacim",
          href: "assets/civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf",
        },
        docs: [
          {
            label: "PDF — Hiç bilmeyen için basit anlatım (Hafta 8)",
            href: "assets/civil3d/Civil3D-Hafta8-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Civil 3D Hafta 8: Enkesit + Cut/Fill Hacim",
            href: "assets/civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf",
          },
          {
            label: "Markdown — Civil 3D Hafta 8 enkesit ve hacim",
            href: "assets/docs/Civil3D-Hafta8-Enkesit-ve-Hacim.md",
          },
          {
            label: "PDF — Civil 3D Hafta 7: Kavramlar + Adımlar (önkoşul)",
            href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Civil 3D Quick Start Guide",
            href: "https://www.autodesk.com/learn/ondemand/curated/civil-3d-quick-start-guide",
          },
          {
            label: "Help — About Sample Lines",
            href: "https://help.autodesk.com/view/CIV3D/2027/ENU/?guid=GUID-7D84214C-87AC-49F1-8FDB-3F54F7C42B46",
          },
          {
            label: "Help — Analyzing Sectional Volumes",
            href: "https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-1E3A9CD9-DFD6-4455-9EB1-D8E46721A0B4",
          },
          {
            label: "YouTube — Civil 3D sample lines / section views",
            href: "https://www.youtube.com/results?search_query=civil+3d+sample+lines+section+views",
          },
          {
            label: "YouTube — Civil 3D compute materials cut fill",
            href: "https://www.youtube.com/results?search_query=civil+3d+compute+materials+cut+fill",
          },
        ],
        notes: [
          "Tamam: SL-YOL1 → Section Views → FG → Compute Materials → Volume Table.",
          "Kanıt: assets/civil3d/10–22.",
          "PDF: Civil3D-Hafta8-Enkesit-ve-Hacim.pdf.",
          "PDF: Civil3D-Hafta8-Basit-Anlatim.pdf (hiç bilmeyen için).",
          "Sonuç (demo): kümülatif Cut ~73 m³, Fill ~18 m³ @ 0+080.",
          "Ders: DATUM ≠ FG yazısı; Object Name’de FG seç. Sample more sources unutulmasın.",
          "Sonraki: Hafta 9 — Navisworks koordinasyon.",
        ],
      },
      en: {
        title: "Civil 3D: volumes and sections",
        goal: "Take cross sections on the Week 7 road skeleton and report EG–FG cut/fill volumes in a table.",
        story: [
          "Week 7 left EG (ground), YOL1 (route), a profile, and a corridor skeleton. This week the questions changed: what does the road look like in cross section, and how much cut/fill is there?",
          "A Sample Line is a short cut across the alignment — “section here.” Using Home → Sample Lines on YOL1, group SL-YOL1 was created at stations 0 / 20 / 40 / 60 / 80 m with ~20 m left/right width. Plan showed dashed lines and station labels.",
          "A Section View is the cross-section graph: offset (−20…+20 m) horizontal, elevation vertical. Create Section View made 0+000 alone; Create Multiple Section Views placed all five. The long section (YOL1 PROFILE) looks along the road; section views look across it — different tools.",
          "Cut/Fill needs a second surface. Surface FG (Finished Ground) was created with flat elev ~101 m. In Compute Materials the Cut and Fill criteria show EG and DATUM on the left — DATUM is a slot; pick FG in Object Name. FG was missing until SL-YOL1 → Properties → Sections → Sample more sources added it. Then EG→EG and DATUM→FG.",
          "Total Volume Table was placed. Average End Area volumes appeared; by 0+080 cumulative cut was ~73 m³ and fill ~18 m³. Numbers depend on the demo elevations; the point is the workflow: sample → section → materials → table. Week 8 closed.",
        ],
        gallery: [
          {
            src: "assets/civil3d/10-hafta8-sample-lines-baslangic.png",
            caption: "1) Sample Lines start — select YOL1",
          },
          {
            src: "assets/civil3d/11-hafta8-sample-lines-0-80.png",
            caption: "2) Sample Lines — 0+000 … 0+080 (SL-YOL1)",
          },
          {
            src: "assets/civil3d/12-hafta8-sample-lines-plan.png",
            caption: "3) Plan — sample lines + EG tooltip",
          },
          {
            src: "assets/civil3d/13-hafta8-create-section-view.png",
            caption: "4) Create Section View — YOL1 / SL-YOL1 / 0+000",
          },
          {
            src: "assets/civil3d/14-hafta8-section-view-0000.png",
            caption: "5) Section View — single section at 0+000",
          },
          {
            src: "assets/civil3d/15-hafta8-section-view-detay.png",
            caption: "6) Section detail — offset / elev labels",
          },
          {
            src: "assets/civil3d/16-hafta8-multiple-section-views.png",
            caption: "7) Multiple Section Views — 0+000 … 0+080",
          },
          {
            src: "assets/civil3d/17-hafta8-multiple-sections-renkli.png",
            caption: "8) Multiple sections — EG/FG line colors",
          },
          {
            src: "assets/civil3d/18-hafta8-yol1-profile-hatirlatma.png",
            caption: "9) Reminder — YOL1 PROFILE (long section ≠ cross section)",
          },
          {
            src: "assets/civil3d/19b-hafta8-prospector-eg-fg.png",
            caption: "10) Prospector — EG + FG surfaces",
          },
          {
            src: "assets/civil3d/19-hafta8-sl-properties-sections.png",
            caption: "11) SL-YOL1 Properties → Sections (Sample more sources)",
          },
          {
            src: "assets/civil3d/20-hafta8-compute-materials-eg-fg.png",
            caption: "12) Compute Materials — EG→EG, DATUM→FG",
          },
          {
            src: "assets/civil3d/21-hafta8-create-total-volume-table.png",
            caption: "13) Create Total Volume Table — YOL1 / SL-YOL1",
          },
          {
            src: "assets/civil3d/22-hafta8-total-volume-table.png",
            caption: "14) Total Volume Table — Cut ~73 m³, Fill ~18 m³ (cumulative)",
          },
        ],
        learn: [
          "Sample Line = where to cut; Section View = cross-section graph",
          "Long section (Profile) ≠ cross section (Section)",
          "Cut = excavation, Fill = embankment; map FG into DATUM slot",
          "Add late surfaces with Sample more sources",
          "Average End Area → Total Volume Table",
        ],
        practice: [
          "1. SL-YOL1 sample lines on YOL1 (0…80, ±20 m)",
          "2. Single + multiple section views",
          "3. FG surface + add to Sections",
          "4. Compute Materials EG/FG",
          "5. Total Volume Table",
        ],
        pdf: {
          label: "PDF — Civil 3D Week 8: Sections + Cut/Fill Volumes",
          href: "assets/civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf",
        },
        docs: [
          {
            label: "PDF — Simple explainer for beginners (Week 8)",
            href: "assets/civil3d/Civil3D-Hafta8-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Civil 3D Week 8: Sections + Cut/Fill Volumes",
            href: "assets/civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf",
          },
          {
            label: "Markdown — Civil 3D Week 8 sections and volumes",
            href: "assets/docs/Civil3D-Hafta8-Enkesit-ve-Hacim.md",
          },
          {
            label: "PDF — Civil 3D Week 7: Concepts + Steps (prerequisite)",
            href: "assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Civil 3D Quick Start Guide",
            href: "https://www.autodesk.com/learn/ondemand/curated/civil-3d-quick-start-guide",
          },
          {
            label: "Help — About Sample Lines",
            href: "https://help.autodesk.com/view/CIV3D/2027/ENU/?guid=GUID-7D84214C-87AC-49F1-8FDB-3F54F7C42B46",
          },
          {
            label: "Help — Analyzing Sectional Volumes",
            href: "https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-1E3A9CD9-DFD6-4455-9EB1-D8E46721A0B4",
          },
          {
            label: "YouTube — Civil 3D sample lines / section views",
            href: "https://www.youtube.com/results?search_query=civil+3d+sample+lines+section+views",
          },
          {
            label: "YouTube — Civil 3D compute materials cut fill",
            href: "https://www.youtube.com/results?search_query=civil+3d+compute+materials+cut+fill",
          },
        ],
        notes: [
          "Done: SL-YOL1 → Section Views → FG → Compute Materials → Volume Table.",
          "Evidence: assets/civil3d/10–22.",
          "PDF: Civil3D-Hafta8-Enkesit-ve-Hacim.pdf.",
          "PDF: Civil3D-Hafta8-Basit-Anlatim.pdf (beginner explainer).",
          "Demo result: cumulative Cut ~73 m³, Fill ~18 m³ @ 0+080.",
          "Lesson: DATUM slot ← FG in Object Name; don’t forget Sample more sources.",
          "Next: Week 9 — Navisworks coordination.",
        ],
      },
    },
    {
      id: 9,
      status: "done",
      tr: {
        title: "Navisworks: koordinasyon",
        goal: "Autodesk Learn clash kursunu bitirmek; SMALL_HOSPITAL federated modelde Clash Detective (grup / Assign / Report) ve Selection–Search Sets ile ikinci bir clash testi uygulamak.",
        story: [
          "Bu hafta Navisworks Manage ile çok disiplinli koordinasyon (birkaç oturumda): federated model → ilk clash testi → gruplama → Assign/Report → Selection/Search Sets.",
          "Kurs — Identify and resolve clash… tamamlandı; sertifika assets/sertifikalar/07-… ve assets/navisworks/ altında.",
          "İlk oturumlar — SMALL_HOSPITAL_COMBINED: Selection Tree’de A + M + S. Clash Detective’de Structural Beams and Plumbing Piping (Clearance) → 20 New. Clash1/13 vb. Dim Other ile incelendi. Grouping.nwf’de view temizliği; Exclusive ile 001 Sanitary vs Beam (Clash 3, 7, 15).",
          "Devam — 002 Pipes vs Beam (Clash1–2, iki boru Exclusive); 003 Water vs Beam (kiriş Inclusive). Assign.nwf’de Plumbing ataması + Active; Report Group Headers Only / Active / HTML.",
          "Sets oturumu — Troffer Lights (selection); Find Items ile Lighting Fixtures, Plumbing Piping, Structural Framing. Structure vs Lights → 12 clash → Troffer Clashes grubu.",
          "Ders — .nwf ile .nwc aynı klasörde. Exclusive vs Inclusive. Selection set statik, Search set kriterle güncellenir. Sonraki: Hafta 12 ileri Revit.",
        ],
        gallery: [
          {
            src: "assets/navisworks/01-hafta9-federated-3models.png",
            caption: "1) Federated model — Selection Tree: 56750_A / M / S",
          },
          {
            src: "assets/navisworks/02-hafta9-clash-test-20.png",
            caption: "2) İlk clash testi — Structural Beams and Plumbing Piping (20 New)",
          },
          {
            src: "assets/navisworks/03-hafta9-clash13-inspect.png",
            caption: "3) Clash inceleme — Clash13 + Dim Other (kiriş highlight)",
          },
          {
            src: "assets/navisworks/04-hafta9-group-001-sanitary.png",
            caption: "4) Grup 001 Sanitary vs Beam — Clash15 / 7 / 3",
          },
          {
            src: "assets/navisworks/05-hafta9-clash1-pipes-beam.png",
            caption: "5) Clash1 — iki ince boru kirişten geçiyor",
          },
          {
            src: "assets/navisworks/06-hafta9-clash1-zoom-dim.png",
            caption: "6) Results + Dim Other — Clash1 yakın görünüm",
          },
          {
            src: "assets/navisworks/07-hafta9-groups-001-002.png",
            caption: "7) Gruplar — 002 Pipes vs Beam (Clash1–2) + 001",
          },
          {
            src: "assets/navisworks/08-hafta9-groups-001-002-003.png",
            caption: "8) 001 / 002 / 003 grupları Results’ta",
          },
          {
            src: "assets/navisworks/09-hafta9-assign-dialog.png",
            caption: "9) Assign Clash — Assign To: Plumbing + notes",
          },
          {
            src: "assets/navisworks/10-hafta9-report-settings.png",
            caption: "10) Report — Group Headers Only, yalnız Active, HTML",
          },
          {
            src: "assets/navisworks/11-hafta9-html-report.png",
            caption: "11) HTML rapor — 001/002/003 + Plumbing + Comments",
          },
          {
            src: "assets/navisworks/12-hafta9-report-thumbnails.png",
            caption: "12) Rapor görselleri (_files) — Active grup thumbnail’leri",
          },
          {
            src: "assets/navisworks/13-hafta9-sets-troffer.png",
            caption: "13) Sets — Troffer Lights (selection set)",
          },
          {
            src: "assets/navisworks/14-hafta9-find-items-lights.png",
            caption: "14) Find Items — Type = Lighting Fixtures (242 items)",
          },
          {
            src: "assets/navisworks/15-hafta9-sets-plumbing.png",
            caption: "15) Sets — Plumbing Piping (search set) + model",
          },
          {
            src: "assets/navisworks/16-hafta9-sets-four.png",
            caption: "16) Dört set — Troffer / Lights / Plumbing / Structural",
          },
          {
            src: "assets/navisworks/17-hafta9-structure-vs-lights.png",
            caption: "17) Clash testi Sets ile — Structure vs Lights (12 New)",
          },
          {
            src: "assets/navisworks/18-hafta9-troffer-clashes-group.png",
            caption: "18) Troffer Clashes — Clash1–12 içeride (1 Clash sayacı)",
          },
          {
            src: "assets/navisworks/19-hafta9-hospital-exterior.png",
            caption: "19) SMALL_HOSPITAL dış görünüm (federated site)",
          },
        ],
        learn: [
          "Federated model: .nwf + yan yana .nwc (A / M / S)",
          "Clash Detective: test, Results, Dim Other, Exclusive / Inclusive",
          "Gruplar 001–003 → Assign (Plumbing) → Status Active → HTML Report",
          "Selection set = statik; Search set = Find Items kriteri",
          "Sets’i Selection A/B’de kullanarak disiplin clash’i (Troffer Clashes)",
        ],
        practice: [
          "1. Learn kursu + sertifika",
          "2. Federated model + ilk clash testi (20 sonuç)",
          "3. Grouping.nwf — view temizliği + 001/002/003",
          "4. Assign.nwf — Assign Plumbing + Active + HTML Report",
          "5. Sets — Troffer / Lighting / Plumbing / Structural → Troffer Clashes",
        ],
        pdf: {
          label: "PDF — Navisworks Hafta 9: Clash + Sets özet",
          href: "assets/navisworks/Navisworks-Hafta9-Clash-ve-Sets.pdf",
        },
        docs: [
          {
            label: "PDF — Hiç bilmeyen için basit anlatım (Hafta 9)",
            href: "assets/navisworks/Navisworks-Hafta9-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Navisworks Hafta 9: Clash + Sets özet",
            href: "assets/navisworks/Navisworks-Hafta9-Clash-ve-Sets.pdf",
          },
          {
            label: "PDF — Identify & resolve clash (sertifika)",
            href: "assets/sertifikalar/07-identify-resolve-clash-revit-navisworks.pdf",
          },
          {
            label: "PDF — aynı sertifika (navisworks klasörü)",
            href: "assets/navisworks/Identify-Resolve-Clash-Revit-Navisworks-Certificate.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Identify and resolve clash (Revit & Navisworks)",
            href: "https://www.autodesk.com/learn/ondemand/course/identify-and-resolve-clash-and-constructability-issues-between-revit-and",
          },
          { label: "Navisworks Help", href: "https://help.autodesk.com/view/NAV/2025/ENU/" },
          {
            label: "Clash detection (YouTube)",
            href: "https://www.youtube.com/results?search_query=navisworks+clash+detection",
          },
        ],
        notes: [
          "Tamam: Learn + sertifika + Grouping + Assign/Report + Sets/Troffer Clashes.",
          "Kanıt: assets/navisworks/01–19 (önceki oturumlar + bugün).",
          "PDF: Navisworks-Hafta9-Basit-Anlatim.pdf (hiç bilmeyen için).",
          "PDF: Navisworks-Hafta9-Clash-ve-Sets.pdf.",
          "Not: .nwf dosyasını .nwc’lerle aynı klasörden aç.",
          "Sonraki: Hafta 12 — İleri Revit yapı ve donatı.",
        ],
      },
      en: {
        title: "Navisworks: coordination",
        goal: "Finish the Autodesk Learn clash course; practice Clash Detective (groups / Assign / Report) and Selection–Search Sets on the SMALL_HOSPITAL federated model.",
        story: [
          "This week covered multi-discipline coordination in Navisworks Manage across several sessions: federated model → first clash test → grouping → Assign/Report → Selection/Search Sets.",
          "Course — Identify and resolve clash… completed; certificate under assets/sertifikalar/07-… and assets/navisworks/.",
          "Earlier sessions — SMALL_HOSPITAL_COMBINED with A + M + S in the Selection Tree. Clash Detective test Structural Beams and Plumbing Piping (Clearance) → 20 New. Inspected Clash1/13 with Dim Other. On Grouping.nwf, cleaned the view; Exclusive → 001 Sanitary vs Beam (Clashes 3, 7, 15).",
          "Continued — 002 Pipes vs Beam (Clash1–2, two pipes Exclusive); 003 Water vs Beam (beam Inclusive). On Assign.nwf, assigned to Plumbing + Active; Report Group Headers Only / Active / HTML.",
          "Sets session — Troffer Lights (selection); Find Items for Lighting Fixtures, Plumbing Piping, Structural Framing. Structure vs Lights → 12 clashes → Troffer Clashes group.",
          "Lessons — Keep .nwf beside .nwc files. Exclusive vs Inclusive. Selection sets are static; search sets update with criteria. Next: Week 12 advanced Revit.",
        ],
        gallery: [
          {
            src: "assets/navisworks/01-hafta9-federated-3models.png",
            caption: "1) Federated model — Selection Tree: 56750_A / M / S",
          },
          {
            src: "assets/navisworks/02-hafta9-clash-test-20.png",
            caption: "2) First clash test — Structural Beams and Plumbing Piping (20 New)",
          },
          {
            src: "assets/navisworks/03-hafta9-clash13-inspect.png",
            caption: "3) Clash review — Clash13 + Dim Other (beam highlight)",
          },
          {
            src: "assets/navisworks/04-hafta9-group-001-sanitary.png",
            caption: "4) Group 001 Sanitary vs Beam — Clash15 / 7 / 3",
          },
          {
            src: "assets/navisworks/05-hafta9-clash1-pipes-beam.png",
            caption: "5) Clash1 — two thin pipes through a beam",
          },
          {
            src: "assets/navisworks/06-hafta9-clash1-zoom-dim.png",
            caption: "6) Results + Dim Other — Clash1 close-up",
          },
          {
            src: "assets/navisworks/07-hafta9-groups-001-002.png",
            caption: "7) Groups — 002 Pipes vs Beam (Clash1–2) + 001",
          },
          {
            src: "assets/navisworks/08-hafta9-groups-001-002-003.png",
            caption: "8) Groups 001 / 002 / 003 in Results",
          },
          {
            src: "assets/navisworks/09-hafta9-assign-dialog.png",
            caption: "9) Assign Clash — Assign To: Plumbing + notes",
          },
          {
            src: "assets/navisworks/10-hafta9-report-settings.png",
            caption: "10) Report — Group Headers Only, Active only, HTML",
          },
          {
            src: "assets/navisworks/11-hafta9-html-report.png",
            caption: "11) HTML report — 001/002/003 + Plumbing + Comments",
          },
          {
            src: "assets/navisworks/12-hafta9-report-thumbnails.png",
            caption: "12) Report images (_files) — Active group thumbnails",
          },
          {
            src: "assets/navisworks/13-hafta9-sets-troffer.png",
            caption: "13) Sets — Troffer Lights (selection set)",
          },
          {
            src: "assets/navisworks/14-hafta9-find-items-lights.png",
            caption: "14) Find Items — Type = Lighting Fixtures (242 items)",
          },
          {
            src: "assets/navisworks/15-hafta9-sets-plumbing.png",
            caption: "15) Sets — Plumbing Piping (search set) + model",
          },
          {
            src: "assets/navisworks/16-hafta9-sets-four.png",
            caption: "16) Four sets — Troffer / Lights / Plumbing / Structural",
          },
          {
            src: "assets/navisworks/17-hafta9-structure-vs-lights.png",
            caption: "17) Clash test from Sets — Structure vs Lights (12 New)",
          },
          {
            src: "assets/navisworks/18-hafta9-troffer-clashes-group.png",
            caption: "18) Troffer Clashes — Clash1–12 inside (count = 1)",
          },
          {
            src: "assets/navisworks/19-hafta9-hospital-exterior.png",
            caption: "19) SMALL_HOSPITAL exterior (federated site)",
          },
        ],
        learn: [
          "Federated model: .nwf next to .nwc files (A / M / S)",
          "Clash Detective: tests, Results, Dim Other, Exclusive / Inclusive",
          "Groups 001–003 → Assign (Plumbing) → Active → HTML Report",
          "Selection set = static; Search set = Find Items criteria",
          "Use Sets in Selection A/B for discipline clashes (Troffer Clashes)",
        ],
        practice: [
          "1. Learn course + certificate",
          "2. Federated model + first clash test (20 results)",
          "3. Grouping.nwf — view cleanup + 001/002/003",
          "4. Assign.nwf — Assign Plumbing + Active + HTML Report",
          "5. Sets — Troffer / Lighting / Plumbing / Structural → Troffer Clashes",
        ],
        pdf: {
          label: "PDF — Navisworks Week 9: Clash + Sets summary",
          href: "assets/navisworks/Navisworks-Hafta9-Clash-ve-Sets.pdf",
        },
        docs: [
          {
            label: "PDF — Simple explainer for beginners (Week 9)",
            href: "assets/navisworks/Navisworks-Hafta9-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Navisworks Week 9: Clash + Sets summary",
            href: "assets/navisworks/Navisworks-Hafta9-Clash-ve-Sets.pdf",
          },
          {
            label: "PDF — Identify & resolve clash (certificate)",
            href: "assets/sertifikalar/07-identify-resolve-clash-revit-navisworks.pdf",
          },
          {
            label: "PDF — same certificate (navisworks folder)",
            href: "assets/navisworks/Identify-Resolve-Clash-Revit-Navisworks-Certificate.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk Learn — Identify and resolve clash (Revit & Navisworks)",
            href: "https://www.autodesk.com/learn/ondemand/course/identify-and-resolve-clash-and-constructability-issues-between-revit-and",
          },
          { label: "Navisworks Help", href: "https://help.autodesk.com/view/NAV/2025/ENU/" },
          {
            label: "Clash detection (YouTube)",
            href: "https://www.youtube.com/results?search_query=navisworks+clash+detection",
          },
        ],
        notes: [
          "Done: Learn + certificate + Grouping + Assign/Report + Sets/Troffer Clashes.",
          "Evidence: assets/navisworks/01–19 (earlier sessions + today).",
          "PDF: Navisworks-Hafta9-Basit-Anlatim.pdf (beginner explainer).",
          "PDF: Navisworks-Hafta9-Clash-ve-Sets.pdf.",
          "Tip: open the .nwf from the same folder as its .nwc files.",
          "Next: Week 12 — Advanced Revit structure and rebar.",
        ],
      },
    },
    {
      id: 10,
      status: "done",
      tr: {
        title: "Forma / ACC CDE ve işbirliği",
        goal: "Forma CDE’de Docs (Data Management) döngüsünü uygulamak; Design Collaboration / Model Coordination / Issue–clash akışını Learn kursundan bilmek; trial erişiminde neyin açılamadığını kaydetmek.",
        story: [
          "İsim notu — BIM 360 eski ad. Sonra ACC (Autodesk Construction Cloud); eğitimde çoğu yerde Forma for Construction. Aynı CDE ailesi: Docs ≈ Data Management. Portföy başlığı: Forma / ACC.",
          "Ne yaptım — Education ile Forma açtım. Docs pratik kanıtı Docs & Takeoff (90 dk) Docs yarısından; Takeoff → Hafta 6. Learn’de Docs / Design Collaboration / Model Coordination (90 dk) kursunu bitirdim (kavram + video tamam).",
          "Yapabildiklerim (Docs) — ADSK-ARCH.rvt açma; ViewCube Left + Measure (~15.4 m); Level 0 filtresi; Model Browser ile pencere tipi izolasyonu; sheet alan ölçümü; Compare (45 eklenen / 53 silinen / 453 değişen) + Excel diffexport; version set (Exercise 5). Kanıt: assets/acc-docs/01–08.",
          "Issue nedir? — Forma/ACC içindeki sorun kaydı: modelde bir noktaya pin, başlık, açıklama, durum (açık/çözüldü), atanan kişi. Amaç: ekip aynı bulut projesinde clash veya tasarım hatasını takip etmek. Markup ise modele çizilen bulut/ok/yazı; çoğu akışta markup → Issue’ya dönüşür. Kursta Create issue + Markups (kurdele) gösteriliyor; bende Issues panelinde Create yok, Markup ikonu yok — yalnızca Import from BCF. Yani Issue’yu okuma/import tarafı sınırlı açık, yazma kapalı (izin / trial).",
          "BCF nedir? — BIM Collaboration Format (buildingSMART açık standardı). Model dosyasını göndermeden “şu noktada şu sorun var” bilgisini yazılımlar arasında taşıyan issue paketi (.bcf / .bcfzip). İçinde: başlık/açıklama, durum, atanan, viewpoint (kamera), eleman GUID’leri, bazen ekran görüntüsü. Örnek: Navisworks’te clash → BCF export → Revit/Forma’da aynı bakışla açılır.",
          "Issue ile BCF farkı — Issue: o projenin bulutunda yaşar (Forma/ACC Issues). BCF: aynı sorunun dosya olarak taşınabilir hali (Navisworks, Solibri, Revit, Forma arası). Tipik akış: Issue oluştur → BCF export → başka araçta import (veya tersi). Bende Import from BCF görünmesi formatın desteklendiğini gösterdi; Create Issue olmadığı için kendi BCF’mi üretip export edemedim.",
          "Kursta görüp yapamadıklarım — (1) Markup + Issue create/resolve. (2) Design Collaboration: package, timeline, snapshot consume. (3) Model Coordination: modelleri birleştirme, clash ayarı, clash’ten Issue / Not an issue. Sebep: Education + kısa trial’da Data Management açık kalırken Collaboration / Coordination / Issues Create sıkça atanmıyor; sınıf hub’ı olmadan kurs dataset’i birebir açılamıyor.",
          "Sonuç — Docs döngüsü uygulamalı tamam. Collab / clash / Issue create / BCF export Learn + kavram notuyla kapatıldı; erişim engeli kayda geçti. Tam BIM Collaborate veya sınıf hub’ı olursa Issue → BCF turu tekrarlanır.",
        ],
        gallery: [
          {
            src: "assets/acc-docs/01-docs-adsk-arch-viewer.png",
            caption: "1) Docs — ADSK-ARCH.rvt V2 açıldı (3D viewer)",
          },
          {
            src: "assets/acc-docs/02-docs-measure-west-facade.png",
            caption: "2) ViewCube Left + Measure (~15.4 m)",
          },
          {
            src: "assets/acc-docs/03-docs-level0-filter.png",
            caption: "3) Level 0 filtresi — zemin kat izolasyonu",
          },
          {
            src: "assets/acc-docs/04-docs-model-browser-windows.png",
            caption: "4) Model Browser — pencere tipi izolasyonu",
          },
          {
            src: "assets/acc-docs/05-docs-sheet-area-measure.png",
            caption: "5) Sheet — Office 19 alan ölçümü",
          },
          {
            src: "assets/acc-docs/06-docs-version-compare.png",
            caption: "6) Compare — Added / Removed / Modified",
          },
          {
            src: "assets/acc-docs/07-docs-diff-export-excel.png",
            caption: "7) diffexport — Excel’e aktarım",
          },
          {
            src: "assets/acc-docs/08-docs-version-set.png",
            caption: "8) Version set — Exercise 5",
          },
        ],
        learn: [
          "BIM 360 → ACC → Forma: aynı CDE ailesi; Docs = Data Management",
          "Docs: model aç → ViewCube / Measure → filtre → Model Browser → Compare → version set",
          "Issue = buluttaki sorun kaydı (pin + durum + atanan); Markup = çizim notu, çoğu zaman Issue’ya dönüşür",
          "BCF = açık issue paketi (.bcfzip): viewpoint + GUID; yazılımlar arası taşıma",
          "Issue projede kalır; BCF dosya olarak taşınır (Issue ↔ BCF import/export)",
          "Design Collaboration: package / timeline / consume; Model Coordination: birleşik model + clash → Issue",
          "Trial engeli: Create Issue / Markup / MC ürünü yoksa pratik clash–BCF yapılamaz",
        ],
        practice: [
          "1. Forma erişimini doğrula; iki Learn kursunu aç",
          "2. Docs pratik: Measure, filtre, Compare, version set (tamam)",
          "3. Members’ta Design Collaboration / Model Coordination / Issues Create dene",
          "4. Issue vs BCF kavramını nota yaz; ürün yoksa engeli kaydet (tamam)",
        ],
        links: [
          {
            label: "Autodesk Learn — Docs & Takeoff (90 dk)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-and-takeoff-in-90-minutes",
          },
          {
            label: "Autodesk Learn — Docs, Design Collaboration & Model Coordination (90 dk)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-design-collaboration-and-model-coordination-in-90-minutes",
          },
          { label: "buildingSMART — BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
          { label: "Autodesk Construction Cloud / Forma", href: "https://construction.autodesk.com/" },
          { label: "Docs Help", href: "https://help.autodesk.com/view/DOCS/ENU/" },
          {
            label: "Forma for Construction (Education)",
            href: "https://www.autodesk.com/education/edu-software/forma-for-construction",
          },
        ],
        pdf: {
          label: "PDF — Issue ve BCF nedir (Hafta 10 kavram notu)",
          href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf",
        },
        docs: [
          { label: "PDF — Issue ve BCF nedir (Hafta 10 kavram notu)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf" },
          { label: "Word — Issue ve BCF nedir (Hafta 10 kavram notu)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.docx" },
        ],
        notes: [
          "Tamam (uygulama): Docs viewer, ölçü, filtre, compare, version set — assets/acc-docs/01–08.",
          "Tamam (Learn): Docs + Design Collaboration + Model Coordination 90 dk kursu izlendi/bitirildi.",
          "Issue + BCF: PDF kavram notu — assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf",
          "Yapılamadı (trial): Markup/Issue Create, Design Collaboration pratik, Model Coordination / clash.",
          "Takeoff → Hafta 6.",
        ],
      },
      en: {
        title: "Forma / ACC CDE and collaboration",
        goal: "Run the Docs (Data Management) loop in Forma CDE; learn Design Collaboration / Model Coordination / Issue–clash from the Learn course; record what the trial blocked.",
        story: [
          "Naming — BIM 360 was the old name. Then ACC (Autodesk Construction Cloud); in education often Forma for Construction. Same CDE family: Docs ≈ Data Management. Portfolio title: Forma / ACC.",
          "What I did — Enabled Forma via Education. Docs hands-on from Docs & Takeoff (90 min) Docs half; Takeoff → Week 6. Completed Learn Docs / Design Collaboration / Model Coordination (90 min) for concepts + video.",
          "What worked (Docs) — Open ADSK-ARCH.rvt; ViewCube Left + Measure (~15.4 m); Level 0 filter; Model Browser window isolation; sheet area measure; Compare (45 added / 53 removed / 453 modified) + Excel diffexport; version set (Exercise 5). Evidence: assets/acc-docs/01–08.",
          "What is an Issue? — A problem record inside Forma/ACC: pin on the model, title, description, status (open/closed), assignee. Purpose: the team tracks clashes or design errors in the same cloud project. A Markup is a cloud/arrow/text drawn on the model; often Markup → Issue. The course shows Create issue + Markups; my Issues panel had no Create, no markup icon — only Import from BCF. So import/read side is limited; write is locked (permission / trial).",
          "What is BCF? — BIM Collaboration Format (buildingSMART open standard). An issue package that moves “there is a problem here” between tools without resending the whole model (.bcf / .bcfzip). Contents: title/description, status, assignee, viewpoint (camera), element GUIDs, sometimes a screenshot. Example: clash in Navisworks → BCF export → open the same view in Revit/Forma.",
          "Issue vs BCF — Issue lives in that project’s cloud (Forma/ACC Issues). BCF is the portable file form of the same problem (Navisworks, Solibri, Revit, Forma). Typical flow: create Issue → BCF export → import in another tool (or reverse). “Import from BCF” showed the format is supported; without Create Issue I could not produce or export my own BCF.",
          "Course vs my trial — Blocked: (1) Markup + Issue create/resolve. (2) Design Collaboration: package, timeline, consume. (3) Model Coordination: federate models, clash settings, Issue / Not an issue from clashes. Cause: Education + short trial often leaves Data Management on while Collaboration / Coordination / Issues Create stay unassigned; without a class hub the course dataset cannot be mirrored 1:1.",
          "Outcome — Docs loop done in practice. Collab / clash / Issue create / BCF export closed via Learn + concept notes; access limit recorded. With full BIM Collaborate or a class hub, Issue → BCF can be repeated.",
        ],
        gallery: [
          {
            src: "assets/acc-docs/01-docs-adsk-arch-viewer.png",
            caption: "1) Docs — ADSK-ARCH.rvt V2 opened (3D viewer)",
          },
          {
            src: "assets/acc-docs/02-docs-measure-west-facade.png",
            caption: "2) ViewCube Left + Measure (~15.4 m)",
          },
          {
            src: "assets/acc-docs/03-docs-level0-filter.png",
            caption: "3) Level 0 filter — ground-floor isolation",
          },
          {
            src: "assets/acc-docs/04-docs-model-browser-windows.png",
            caption: "4) Model Browser — window type isolation",
          },
          {
            src: "assets/acc-docs/05-docs-sheet-area-measure.png",
            caption: "5) Sheet — Office 19 area measure",
          },
          {
            src: "assets/acc-docs/06-docs-version-compare.png",
            caption: "6) Compare — Added / Removed / Modified",
          },
          {
            src: "assets/acc-docs/07-docs-diff-export-excel.png",
            caption: "7) diffexport — Excel export",
          },
          {
            src: "assets/acc-docs/08-docs-version-set.png",
            caption: "8) Version set — Exercise 5",
          },
        ],
        learn: [
          "BIM 360 → ACC → Forma: same CDE family; Docs = Data Management",
          "Docs: open model → ViewCube / Measure → filter → Model Browser → Compare → version set",
          "Issue = cloud problem record (pin + status + assignee); Markup = drawn note, often becomes an Issue",
          "BCF = open issue package (.bcfzip): viewpoint + GUID; cross-tool transfer",
          "Issue stays in the project; BCF travels as a file (Issue ↔ BCF import/export)",
          "Design Collaboration: package / timeline / consume; Model Coordination: federated model + clash → Issue",
          "Trial limit: without Create Issue / Markup / MC product, clash–BCF practice is blocked",
        ],
        practice: [
          "1. Confirm Forma access; open both Learn courses",
          "2. Docs practice: Measure, filter, Compare, version set (done)",
          "3. Try Design Collaboration / Model Coordination / Issues Create in Members",
          "4. Note Issue vs BCF; record the access blocker if products are missing (done)",
        ],
        links: [
          {
            label: "Autodesk Learn — Docs & Takeoff (90 min)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-and-takeoff-in-90-minutes",
          },
          {
            label: "Autodesk Learn — Docs, Design Collaboration & Model Coordination (90 min)",
            href: "https://www.autodesk.com/learn/ondemand/course/learn-docs-design-collaboration-and-model-coordination-in-90-minutes",
          },
          { label: "buildingSMART — BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
          { label: "Autodesk Construction Cloud / Forma", href: "https://construction.autodesk.com/" },
          { label: "Docs Help", href: "https://help.autodesk.com/view/DOCS/ENU/" },
          {
            label: "Forma for Construction (Education)",
            href: "https://www.autodesk.com/education/edu-software/forma-for-construction",
          },
        ],
        pdf: {
          label: "PDF — What are Issue and BCF (Week 10 note)",
          href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf",
        },
        docs: [
          { label: "PDF — What are Issue and BCF (Week 10 concept note)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf" },
          { label: "Word — What are Issue and BCF (Week 10 concept note)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.docx" },
        ],
        notes: [
          "Done (hands-on): Docs viewer, measure, filter, compare, version set — assets/acc-docs/01–08.",
          "Done (Learn): Docs + Design Collaboration + Model Coordination 90 min course completed.",
          "Issue + BCF: PDF concept note — assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf",
          "Blocked (trial): Markup/Issue Create, Design Collaboration practice, Model Coordination / clash.",
          "Takeoff → Week 6.",
        ],
      },
    },
    {
      id: 11,
      status: "done",
      tr: {
        title: "ISO 19650 derinlemesine",
        goal: "OIR→EIR→BEP→CDE bilgisini kendi öğrenci projesine Mini BEP (v1.1) olarak yazmak; Hafta 6/10 çıktılarıyla güncellemek.",
        story: [
          "Ne yaptım — Hafta 1–2 ve Plannerly ISO 19650 kavram verdi. Bu hafta uzun yeni kurs açmadım; bilineni Mini BEP’e döktüm (Beginner House + Forma Deneme). Sürüm 1.1: Hafta 6 Revit schedule kıyası ve Hafta 10 Issue/BCF + Collab erişim notu BEP’e işlendi. Ayrıca Hafta 10 Issue/BCF notu gibi kısa kavram + kurgusal proje örneği PDF’i yazıldı.",
          "Kavramlar (kısa) — OIR/AIR/PIR = ihtiyaç katmanları. EIR = “şunu teslim et”. BEP = “şöyle cevap vereceğiz”. MIDP/TIDP = kim / ne / ne zaman. CDE = WIP→Shared→Published. LOIN = ne kadar detay yeterli. Issue = bulut sorun kaydı; BCF = taşınabilir issue paketi (Hafta 10).",
          "Somut örnek (projeden bağımsız) — Kurgusal “Yeşilova Ortaokulu”: OIR/AIR → PIR → EIR → BEP → CDE’de WIP→Shared→Published; metraj schedule ve clash→Issue/BCF satırlarıyla süreç anlatıldı. Kişisel laboratuvar (Beginner House / ADSK-STR) yalnızca Mini BEP dosyasında; örnek PDF’de yok.",
          "Sonuç — Mini BEP v1.1 (kişisel) + ISO kavram/Yeşilova PDF (öğretici örnek). Hafta 5 Shared Parameter → schedule dahil kapandı. Hafta 11 ISO uygulama çıktısı tamam.",
        ],
        learn: [
          "OIR / AIR / PIR / EIR / BEP / MIDP / TIDP / CDE / LOIN — birer cümle",
          "Mini BEP = öğrenci ölçeğinde EIR’ye cevap planı (kişisel laboratuvar)",
          "CDE: WIP → Shared → Published; e-posta eki CDE değildir",
          "Issue vs BCF (Hafta 10); BEP’e engel notu yazmak da süreçtir",
          "Öğretici örnek: Yeşilova Ortaokulu (kurgusal) — portföy lab’ından bağımsız",
        ],
        practice: [
          "Hafta 2 kavram haritası + Plannerly notlarını gözden geçir (tamam)",
          "Mini BEP v1.0 → v1.1 (Hafta 6/10) (tamam)",
          "Kavram + kurgusal proje örneği PDF yaz (tamam)",
          "Portföye Markdown + PDF + Word ekle (tamam)",
        ],
        links: [
          { label: "UK BIM Framework resources", href: "https://www.ukbimframework.org/resources/" },
          { label: "BSI ISO 19650", href: "https://www.bsigroup.com/en-GB/iso-19650/" },
          { label: "Plannerly — Learn ISO 19650", href: "https://plannerly.com/learn-iso-19650/" },
          { label: "buildingSMART — BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
        ],
        pdf: {
          label: "PDF — ISO 19650 kavramlar + proje örneği (Hafta 11)",
          href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.pdf",
        },
        docs: [
          { label: "PDF — ISO 19650 kavramlar + somut proje örneği", href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.pdf" },
          { label: "Word — ISO 19650 kavramlar + somut proje örneği", href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.docx" },
          { label: "PDF — Mini BEP (öğrenci projesi) v1.1", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.pdf" },
          { label: "Word — Mini BEP (öğrenci projesi) v1.1", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.docx" },
          { label: "Markdown — Mini BEP (öğrenci projesi)", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.md" },
          { label: "PDF — Issue ve BCF (Hafta 10)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf" },
          { label: "Word — Plannerly Level 3 Expert notu", href: "assets/docs/Plannerly-Level3-Expert-Kurs-Notu.docx" },
        ],
        notes: [
          "Kanıt: ISO19650 PDF (Yeşilova kurgusal örnek) + Mini-BEP v1.1 (kişisel lab).",
          "Güncelleme: Hafta 6 Forma↔Revit kıyas; Hafta 10 Collab engeli + Issue/BCF.",
          "Planerly sertifika → Hafta 15.",
        ],
      },
      en: {
        title: "ISO 19650 in depth",
        goal: "Turn OIR→EIR→BEP→CDE into a Mini BEP (v1.1); publish a short concept note + fictional project walkthrough like Week 10.",
        story: [
          "What I did — Weeks 1–2 and Plannerly gave the concepts. This week I skipped a long new course and applied them in a Mini BEP (Beginner House + Forma Deneme). Version 1.1 folds in Week 6 Revit schedule compare and Week 10 Issue/BCF + Collab access notes. I also wrote a Week-10-style short concepts + fictional project example PDF.",
          "Concepts (short) — OIR/AIR/PIR = need layers. EIR = “deliver this”. BEP = “we will answer like this”. MIDP/TIDP = who / what / when. CDE = WIP→Shared→Published. LOIN = how much detail is enough. Issue = cloud problem record; BCF = portable issue package (Week 10).",
          "Concrete example (independent of my lab) — Fictional “Yeşilova Middle School”: OIR/AIR → PIR → EIR → BEP → CDE WIP→Shared→Published, with quantity-schedule and clash→Issue/BCF walkthroughs. Personal lab (Beginner House / ADSK-STR) stays only in the Mini BEP file — not in the example PDF.",
          "Outcome — Mini BEP v1.1 (personal) + ISO concepts/Yeşilova PDF (teaching example). Week 5 closed including Shared Parameter → schedule. Week 11 ISO application output is done.",
        ],
        learn: [
          "OIR / AIR / PIR / EIR / BEP / MIDP / TIDP / CDE / LOIN — one line each",
          "Mini BEP = student-scale answer to an EIR (personal lab)",
          "CDE: WIP → Shared → Published; email is not a CDE",
          "Issue vs BCF (Week 10); recording a blocker in the BEP is part of the process",
          "Teaching example: Yeşilova Middle School (fictional) — separate from portfolio lab",
        ],
        practice: [
          "Review Week 2 concept map + Plannerly notes (done)",
          "Mini BEP v1.0 → v1.1 with Weeks 6/10 (done)",
          "Write concepts + fictional project example PDF (done)",
          "Add Markdown + PDF + Word to the portfolio (done)",
        ],
        links: [
          { label: "UK BIM Framework resources", href: "https://www.ukbimframework.org/resources/" },
          { label: "BSI ISO 19650", href: "https://www.bsigroup.com/en-GB/iso-19650/" },
          { label: "Plannerly — Learn ISO 19650", href: "https://plannerly.com/learn-iso-19650/" },
          { label: "buildingSMART — BCF", href: "https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format/" },
        ],
        pdf: {
          label: "PDF — ISO 19650 concepts + project example (Week 11)",
          href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.pdf",
        },
        docs: [
          { label: "PDF — ISO 19650 concepts + concrete project example", href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.pdf" },
          { label: "Word — ISO 19650 concepts + concrete project example", href: "assets/docs/ISO19650-Kavramlar-ve-Proje-Ornegi-Hafta11.docx" },
          { label: "PDF — Mini BEP (student project) v1.1", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.pdf" },
          { label: "Word — Mini BEP (student project) v1.1", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.docx" },
          { label: "Markdown — Mini BEP (student project)", href: "assets/docs/Mini-BEP-Ogrenci-Projesi.md" },
          { label: "PDF — Issue and BCF (Week 10)", href: "assets/docs/Issue-ve-BCF-Hafta10-Notu.pdf" },
          { label: "Word — Plannerly Level 3 Expert notes", href: "assets/docs/Plannerly-Level3-Expert-Kurs-Notu.docx" },
        ],
        notes: [
          "Evidence: ISO19650 PDF (Yeşilova fictional example) + Mini-BEP v1.1 (personal lab).",
          "Refresh: Week 6 Forma↔Revit compare; Week 10 Collab block + Issue/BCF.",
          "Plannerly cert → Week 15.",
        ],
      },
    },
    {
      id: 12,
      status: "done",
      tr: {
        title: "İleri Revit: yapı ve donatı",
        goal: "Küçük beton iskelette grid–kolon–kiriş–döşeme kurmak; Area Reinforcement ile donatı; Physical→Analytical; IFC 2x3 export/doğrulama.",
        story: [
          "Hafta 4’te yapısal elemanlara giriş yapılmıştı. Bu hafta metric structural şablonla sıfırdan mini bir bay kuruldu: proje Hafta12-Beton-Donati.rvt.",
          "Autodesk Learn kısa videoları yol haritasıydı (hepsi linklerde): Grids → Levels → Columns → Beams → Structural Floors; sonra Place rebar / Propagate rebar; Create analytical model automatically. Pratikte videoyu izleyip modelde uyguladık — izlemeden de yapıldı, videolar tekrar için duruyor.",
          "Grid A–C / 1–3 (~5000 mm). Köşelere M_Concrete-Rectangular-Column 300×450 mm. Kiriş için beton framing yoktu → M_W Shapes ile 4 kenar çerçeve. L2’de Concrete döşeme.",
          "Planda View Range yüzünden kiriş bazen görünmedi; 3D ile doğrulandı. Aynı yere ikinci çizim identical instances uyarısı verdi.",
          "Donatı: Free Form Rebar karmaşıktı; Area Reinforcement + Major Direction (13M / 300 mm) ile döşemede mavi X. Analyze → Physical to Analytical For Buildings (Autodesk’teki otomatik analytical videosuna paralel).",
          "File → Export → IFC (2x3 Coordination View 2.0). Open→IFC ile 3D’de kolon+döşeme doğrulandı. Ders: IFC çift tıkla açılmaz.",
        ],
        gallery: [
          { src: "assets/revit-hafta12/01-hafta12-grid-abc.png", caption: "1) Grid — A / C ve 1 / 3 (plan)" },
          { src: "assets/revit-hafta12/02-hafta12-grid-5000.png", caption: "2) Grid aralığı — ~5000 mm" },
          { src: "assets/revit-hafta12/03-hafta12-kolon-tipi.png", caption: "3) Kolon tipi — M_Concrete-Rectangular-Column 300×450" },
          { src: "assets/revit-hafta12/04-hafta12-4-kolon-plan.png", caption: "4) Dört kolon — grid köşeleri (plan)" },
          { src: "assets/revit-hafta12/05-hafta12-kiris-w-shapes.png", caption: "5) Kiriş tipi — M_W Shapes (W profil)" },
          { src: "assets/revit-hafta12/06-hafta12-2-kiris-3d.png", caption: "6) 3D — iki kiriş (çerçeve yarım)" },
          { src: "assets/revit-hafta12/07-hafta12-cerceve-4-kiris.png", caption: "7) 3D — dört kiriş çevre çerçeve" },
          { src: "assets/revit-hafta12/08-hafta12-floor-concrete.png", caption: "8) Floor tipi — Concrete döşeme seçimi" },
          { src: "assets/revit-hafta12/09-hafta12-doseme-3d.png", caption: "9) 3D — kolon + kiriş + döşeme" },
          { src: "assets/revit-hafta12/10-hafta12-area-reinforcement.png", caption: "10) Area Reinforcement — döşemede mavi X" },
          { src: "assets/revit-hafta12/11-hafta12-rebar-properties.png", caption: "11) Properties — 13M / 300 mm area rebar" },
          { src: "assets/revit-hafta12/12-hafta12-export-ifc.png", caption: "12) Export IFC — IFC 2x3 Coordination View 2.0" },
          { src: "assets/revit-hafta12/13-hafta12-ifc-3d.png", caption: "13) IFC yeniden açıldı — 3D doğrulama" },
          { src: "assets/revit-hafta12/14-hafta12-analytical-automation.png", caption: "14) Analytical Automation — Physical to Analytical" },
          { src: "assets/revit-hafta12/15-hafta12-analytical-model.png", caption: "15) Analytical — eksen / düğüm işaretleri" },
        ],
        learn: [
          "Grid + Structural Column + Beam + Floor iskeleti",
          "Area Reinforcement ve Major Direction",
          "Physical to Analytical Automation",
          "IFC 2x3 export ve Open → IFC doğrulama",
          "Planda görünürlük (View Range) vs 3D",
        ],
        practice: [
          "1. Metric structural → grid A–C / 1–3 (~5000)",
          "2. Beton kolonlar + W kiriş çerçeve + Concrete döşeme",
          "3. Area Reinforcement (Major Direction + Finish)",
          "4. Export IFC 2x3; Open→IFC ile kontrol",
          "5. Analyze → Physical to Analytical",
        ],
        pdf: {
          label: "PDF — Revit Hafta 12: Yapı + Donatı + IFC özet",
          href: "assets/revit-hafta12/Revit-Hafta12-Yapi-Donati-IFC.pdf",
        },
        docs: [
          {
            label: "PDF — Hiç bilmeyen için basit anlatım (Hafta 12)",
            href: "assets/revit-hafta12/Revit-Hafta12-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Revit Hafta 12: Yapı + Donatı + IFC özet",
            href: "assets/revit-hafta12/Revit-Hafta12-Yapi-Donati-IFC.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk — Introduction to BIM for Structural Design (kurs)",
            href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering",
          },
          {
            label: "Autodesk — Grids in Revit for structure (3 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/grids-in-revit-structure",
          },
          {
            label: "Autodesk — Levels in Revit for structure (3 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/levels-in-revit-for-structure",
          },
          {
            label: "Autodesk — Create structural columns (3 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-columns-in-revit",
          },
          {
            label: "Autodesk — Create beams in Revit (3 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-beams-in-revit",
          },
          {
            label: "Autodesk — Create structural floors (2 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-floors-in-revit",
          },
          {
            label: "Autodesk — Place rebar with Expand to Host (3 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/place-rebar-with-expand-to-host-in-revit",
          },
          {
            label: "Autodesk — Place rebar by two points (2 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/place-rebar-by-two-points-in-revit",
          },
          {
            label: "Autodesk — Propagate rebar (2 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/propagate-rebar-in-revit",
          },
          {
            label: "Autodesk — Create analytical model automatically (2 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-a-structural-analytical-model-automatically-in-revit",
          },
          {
            label: "Help — Area Reinforcement",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-AREA-REINFORCEMENT",
          },
          {
            label: "Help — Export to IFC",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-6EB68CEC-6C17-4B16-A509-30537F666C1F",
          },
          {
            label: "IFC (buildingSMART)",
            href: "https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/",
          },
        ],
        notes: [
          "Tamam: grid → kolon → kiriş çerçeve → döşeme → Area Reinforcement → Analytical → IFC.",
          "Autodesk kısa videolar linklerde (Grids…Floors + Rebar + Analytical).",
          "Kanıt: assets/revit-hafta12/01–15.",
          "PDF: Revit-Hafta12-Basit-Anlatim.pdf + Revit-Hafta12-Yapi-Donati-IFC.pdf.",
          "Proje: Hafta12-Beton-Donati.rvt; IFC masaüstüne export edildi.",
          "Sonraki: Hafta 13 — Dynamo + IFC.",
        ],
      },
      en: {
        title: "Advanced Revit: structure and rebar",
        goal: "Build a small concrete bay (grid–column–beam–slab); Area Reinforcement; Physical→Analytical; IFC 2x3 export/verify.",
        story: [
          "Week 4 introduced structural elements. This week a mini bay was built from a metric structural template: Hafta12-Beton-Donati.rvt.",
          "Autodesk Learn short tutorials were the roadmap (all in Links): Grids → Levels → Columns → Beams → Structural Floors; then Place rebar / Propagate rebar; Create analytical model automatically. Practice was apply-in-model; videos remain for review.",
          "Grids A–C / 1–3 (~5000 mm). Corner columns M_Concrete-Rectangular-Column 300×450 mm. No concrete framing family → M_W Shapes for a 4-edge frame. Concrete floor on L2.",
          "Beams sometimes invisible in plan (View Range); verified in 3D. Duplicate placement triggered identical-instances warning.",
          "Rebar: Free Form was confusing; Area Reinforcement + Major Direction (13M / 300 mm) produced the blue X. Analyze → Physical to Analytical For Buildings (same idea as Autodesk’s automatic analytical tutorial).",
          "File → Export → IFC (2x3 Coordination View 2.0). Open→IFC confirmed columns+slab in 3D. Lesson: IFC is not a double-click document.",
        ],
        gallery: [
          { src: "assets/revit-hafta12/01-hafta12-grid-abc.png", caption: "1) Grids — A / C and 1 / 3 (plan)" },
          { src: "assets/revit-hafta12/02-hafta12-grid-5000.png", caption: "2) Grid spacing — ~5000 mm" },
          { src: "assets/revit-hafta12/03-hafta12-kolon-tipi.png", caption: "3) Column type — M_Concrete-Rectangular-Column 300×450" },
          { src: "assets/revit-hafta12/04-hafta12-4-kolon-plan.png", caption: "4) Four columns — grid corners (plan)" },
          { src: "assets/revit-hafta12/05-hafta12-kiris-w-shapes.png", caption: "5) Beam type — M_W Shapes" },
          { src: "assets/revit-hafta12/06-hafta12-2-kiris-3d.png", caption: "6) 3D — two beams (partial frame)" },
          { src: "assets/revit-hafta12/07-hafta12-cerceve-4-kiris.png", caption: "7) 3D — four-beam perimeter frame" },
          { src: "assets/revit-hafta12/08-hafta12-floor-concrete.png", caption: "8) Floor type — Concrete slab" },
          { src: "assets/revit-hafta12/09-hafta12-doseme-3d.png", caption: "9) 3D — columns + beams + slab" },
          { src: "assets/revit-hafta12/10-hafta12-area-reinforcement.png", caption: "10) Area Reinforcement — blue X on slab" },
          { src: "assets/revit-hafta12/11-hafta12-rebar-properties.png", caption: "11) Properties — 13M / 300 mm area rebar" },
          { src: "assets/revit-hafta12/12-hafta12-export-ifc.png", caption: "12) Export IFC — IFC 2x3 Coordination View 2.0" },
          { src: "assets/revit-hafta12/13-hafta12-ifc-3d.png", caption: "13) IFC re-opened — 3D check" },
          { src: "assets/revit-hafta12/14-hafta12-analytical-automation.png", caption: "14) Analytical Automation — Physical to Analytical" },
          { src: "assets/revit-hafta12/15-hafta12-analytical-model.png", caption: "15) Analytical — axes / node markers" },
        ],
        learn: [
          "Grid + Structural Column + Beam + Floor skeleton",
          "Area Reinforcement and Major Direction",
          "Physical to Analytical Automation",
          "IFC 2x3 export and Open → IFC verify",
          "Plan visibility (View Range) vs 3D",
        ],
        practice: [
          "1. Metric structural → grids A–C / 1–3 (~5000)",
          "2. Concrete columns + W beam frame + Concrete slab",
          "3. Area Reinforcement (Major Direction + Finish)",
          "4. Export IFC 2x3; verify with Open→IFC",
          "5. Analyze → Physical to Analytical",
        ],
        pdf: {
          label: "PDF — Revit Week 12: Structure + Rebar + IFC summary",
          href: "assets/revit-hafta12/Revit-Hafta12-Yapi-Donati-IFC.pdf",
        },
        docs: [
          {
            label: "PDF — Beginner explainer (Week 12)",
            href: "assets/revit-hafta12/Revit-Hafta12-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Revit Week 12: Structure + Rebar + IFC summary",
            href: "assets/revit-hafta12/Revit-Hafta12-Yapi-Donati-IFC.pdf",
          },
        ],
        links: [
          {
            label: "Autodesk — Introduction to BIM for Structural Design (course)",
            href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering",
          },
          {
            label: "Autodesk — Grids in Revit for structure (3 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/grids-in-revit-structure",
          },
          {
            label: "Autodesk — Levels in Revit for structure (3 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/levels-in-revit-for-structure",
          },
          {
            label: "Autodesk — Create structural columns (3 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-columns-in-revit",
          },
          {
            label: "Autodesk — Create beams in Revit (3 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-beams-in-revit",
          },
          {
            label: "Autodesk — Create structural floors (2 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-structural-floors-in-revit",
          },
          {
            label: "Autodesk — Place rebar with Expand to Host (3 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/place-rebar-with-expand-to-host-in-revit",
          },
          {
            label: "Autodesk — Place rebar by two points (2 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/place-rebar-by-two-points-in-revit",
          },
          {
            label: "Autodesk — Propagate rebar (2 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/propagate-rebar-in-revit",
          },
          {
            label: "Autodesk — Create analytical model automatically (2 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/create-a-structural-analytical-model-automatically-in-revit",
          },
          {
            label: "Help — Area Reinforcement",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-AREA-REINFORCEMENT",
          },
          {
            label: "Help — Export to IFC",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-6EB68CEC-6C17-4B16-A509-30537F666C1F",
          },
          {
            label: "IFC (buildingSMART)",
            href: "https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/",
          },
        ],
        notes: [
          "Done: grid → columns → beam frame → slab → Area Reinforcement → Analytical → IFC.",
          "Autodesk short tutorials listed in Links (Grids…Floors + Rebar + Analytical).",
          "Evidence: assets/revit-hafta12/01–15.",
          "PDFs: Revit-Hafta12-Basit-Anlatim.pdf + Revit-Hafta12-Yapi-Donati-IFC.pdf.",
          "Project: Hafta12-Beton-Donati.rvt; IFC exported to Desktop.",
          "Next: Week 13 — Dynamo + IFC.",
        ],
      },
    },
    {
      id: 13,
      status: "done",
      tr: {
        title: "Dynamo + IFC",
        goal: "Dynamo ile Structural Columns’a sıralı Mark (K-1…) yazmak; Mark’lı modeli IFC 2x3 export etmek.",
        story: [
          "Hafta 12’deki mini beton bay (Hafta12-Beton-Donati.rvt) üzerinde otomasyon denendi. Amaç: 4 kolona elle Mark yazmak yerine Dynamo grafiğiyle toplu numaralandırma; sonra Mark’lı modeli IFC’ye vermek.",
          "Hazırlık — Manage → Dynamo → New. Kaynaklar: Dynamo Primer, Autodesk eğitim/AU beginner workshop, YouTube giriş + Mark/IFC aramaları — hepsi Kaynaklar’da (Hafta 12 Autodesk kısa video yoluna paralel).",
          "Manage → Dynamo → New. Categories dropdown boş kaldı; String \"Structural Columns\" → Category.ByName → All Elements of Category ile 4 kolon listelendi.",
          "List.Count → Sequence (1, step 1) → String from Object → \"K-\" + sayılar. Element.SetParameterByName: element=kolonlar, parameterName=Mark, value=K-…. Run completed; Properties’te Mark = K-2 doğrulandı.",
          "Ders: parameterName ≠ value (Mark vs K-1). Mark Project Browser’da aranmaz; eleman seç → Identity Data. Grafik Hafta13-Kolon-Mark.dyn olarak kaydedildi.",
          "File → Export → IFC 2x3 → Hafta13-Beton-Donati-Mark.ifc. Basit anlatım + özet PDF (Hafta 12 tarzı) eklendi.",
        ],
        gallery: [
          { src: "assets/dynamo-hafta13/01-hafta13-dynamo-home.png", caption: "1) Dynamo Home — New" },
          { src: "assets/dynamo-hafta13/02-hafta13-workspace-bos.png", caption: "2) Boş workspace + Library" },
          { src: "assets/dynamo-hafta13/03-hafta13-string-category.png", caption: "3) String → Category.ByName (Structural Columns)" },
          { src: "assets/dynamo-hafta13/04-hafta13-4-kolon-liste.png", caption: "4) All Elements of Category — 4 kolon" },
          { src: "assets/dynamo-hafta13/05-hafta13-sequence.png", caption: "5) Count + Sequence (1…n) + String from Object" },
          { src: "assets/dynamo-hafta13/06-hafta13-k-prefix-plus.png", caption: "6) \"K-\" + sayı → birleştirme" },
          { src: "assets/dynamo-hafta13/07-hafta13-setparameter-tam.png", caption: "7) SetParameterByName — Mark + value" },
          { src: "assets/dynamo-hafta13/08-hafta13-grafik-run.png", caption: "8) Tam grafik — Run completed" },
          { src: "assets/dynamo-hafta13/09-hafta13-revit-mark-k2.png", caption: "9) Revit Properties — Mark = K-2" },
          { src: "assets/dynamo-hafta13/10-hafta13-export-ifc.png", caption: "10) Export IFC — Hafta13-Beton-Donati-Mark.ifc" },
        ],
        learn: [
          "Dynamo node / kablo temeli",
          "Category.ByName + All Elements of Category",
          "Sequence + String birleştirme",
          "Element.SetParameterByName (Mark)",
          "Mark’lı model → IFC 2x3 export",
        ],
        practice: [
          "1. Manage → Dynamo → New",
          "2. Structural Columns → 4 eleman listele",
          "3. Sequence + K- öneki + SetParameterByName Mark",
          "4. Properties’te Mark doğrula; .dyn kaydet",
          "5. Export IFC (Hafta13-…-Mark.ifc)",
        ],
        pdf: {
          label: "PDF — Dynamo Hafta 13: Mark + IFC özet",
          href: "assets/dynamo-hafta13/Dynamo-Hafta13-Mark-ve-IFC.pdf",
        },
        docs: [
          {
            label: "PDF — Yeni öğrenen için basit anlatım (Hafta 13: ne yaptık?)",
            href: "assets/dynamo-hafta13/Dynamo-Hafta13-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Dynamo Hafta 13: Mark + IFC özet",
            href: "assets/dynamo-hafta13/Dynamo-Hafta13-Mark-ve-IFC.pdf",
          },
          {
            label: "Dynamo grafik — Hafta13-Kolon-Mark.dyn",
            href: "assets/dynamo-hafta13/Hafta13-Kolon-Mark.dyn",
          },
          {
            label: "IFC — Hafta13-Beton-Donati-Mark.ifc",
            href: "assets/dynamo-hafta13/Hafta13-Beton-Donati-Mark.ifc",
          },
        ],
        links: [
          { label: "Dynamo (resmi site)", href: "https://dynamobim.org/" },
          { label: "Dynamo Primer (ücretsiz kitap)", href: "https://primer.dynamobim.org/" },
          {
            label: "Dynamo Primer — Revit Connection (bölüm)",
            href: "https://primer.dynamobim.org/08_Dynamo-for-Revit/8-1_The-Revit-Connection.html",
          },
          {
            label: "Autodesk Learn — Use Dynamo Player (2 dk)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/use-dynamo-player",
          },
          {
            label: "Autodesk Learn — Pile numbering with Dynamo (6 dk, Mark’a yakın)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/pile-numbering-with-dynamo",
          },
          {
            label: "Autodesk — Dynamo öğrenmeye nereden başlanır",
            href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-Training-for-Dynamo.html",
          },
          {
            label: "Autodesk University — Beginner Dynamo for Revit (workshop)",
            href: "https://www.autodesk.com/autodesk-university/class/Computational-BIM-Workshop-Beginner-Dynamo-Revit-2019",
          },
          {
            label: "Help — Creating Dynamo Graphs for Revit",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=RevitDynamo_About_Creating_Dynamo_Graphs_for_Revit_html",
          },
          {
            label: "Autodesk — Number elements (Dynamo / Mark)",
            href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-automatically-number-elements-in-Revit.html",
          },
          {
            label: "Help — Export to IFC",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-6EB68CEC-6C17-4B16-A509-30537F666C1F",
          },
          {
            label: "YouTube — Learn Dynamo for Revit in 10 Minutes (başlangıç)",
            href: "https://www.youtube.com/watch?v=iLfKAO9aa54",
          },
          {
            label: "YouTube — Dynamo Revit Mark / renumber (arama)",
            href: "https://www.youtube.com/results?search_query=dynamo+revit+mark+renumber+elements",
          },
          {
            label: "YouTube — Revit Export IFC (arama)",
            href: "https://www.youtube.com/results?search_query=revit+export+ifc+tutorial",
          },
        ],
        notes: [
          "Tamam: Dynamo Mark otomasyonu + IFC export.",
          "Kanıt: assets/dynamo-hafta13/01–10 + .dyn + .ifc.",
          "PDF: Dynamo-Hafta13-Basit-Anlatim.pdf (hiç bilmeyen / hazırlık).",
          "PDF: Dynamo-Hafta13-Mark-ve-IFC.pdf (özet).",
          "Kaynaklar: Primer + Autodesk AU/Support + YouTube başlangıç.",
          "Sonraki: Hafta 14 — Portföy derleme.",
        ],
      },
      en: {
        title: "Dynamo + IFC",
        goal: "Write sequential Mark values (K-1…) on Structural Columns with Dynamo; export the marked model to IFC 2x3.",
        story: [
          "Automation on the Week 12 mini bay (Hafta12-Beton-Donati.rvt): number four columns with Dynamo instead of typing Mark by hand; then export the marked model to IFC.",
          "Prep — Manage → Dynamo → New. Sources: Dynamo Primer, Autodesk training/AU beginner workshop, YouTube intro + Mark/IFC searches — all in Links (same idea as Week 12’s Autodesk short-video roadmap).",
          "Manage → Dynamo → New. Categories dropdown stayed empty; String \"Structural Columns\" → Category.ByName → All Elements of Category listed 4 columns.",
          "List.Count → Sequence (1, step 1) → String from Object → \"K-\" + numbers. Element.SetParameterByName: elements=columns, parameterName=Mark, value=K-…. Run completed; Properties showed Mark = K-2.",
          "Lesson: parameterName ≠ value (Mark vs K-1). Mark is not found in Project Browser search; select element → Identity Data. Graph saved as Hafta13-Kolon-Mark.dyn.",
          "File → Export → IFC 2x3 → Hafta13-Beton-Donati-Mark.ifc. Beginner explainer + summary PDFs added (Week 12 style).",
        ],
        gallery: [
          { src: "assets/dynamo-hafta13/01-hafta13-dynamo-home.png", caption: "1) Dynamo Home — New" },
          { src: "assets/dynamo-hafta13/02-hafta13-workspace-bos.png", caption: "2) Empty workspace + Library" },
          { src: "assets/dynamo-hafta13/03-hafta13-string-category.png", caption: "3) String → Category.ByName (Structural Columns)" },
          { src: "assets/dynamo-hafta13/04-hafta13-4-kolon-liste.png", caption: "4) All Elements of Category — 4 columns" },
          { src: "assets/dynamo-hafta13/05-hafta13-sequence.png", caption: "5) Count + Sequence (1…n) + String from Object" },
          { src: "assets/dynamo-hafta13/06-hafta13-k-prefix-plus.png", caption: "6) \"K-\" + numbers → concatenate" },
          { src: "assets/dynamo-hafta13/07-hafta13-setparameter-tam.png", caption: "7) SetParameterByName — Mark + value" },
          { src: "assets/dynamo-hafta13/08-hafta13-grafik-run.png", caption: "8) Full graph — Run completed" },
          { src: "assets/dynamo-hafta13/09-hafta13-revit-mark-k2.png", caption: "9) Revit Properties — Mark = K-2" },
          { src: "assets/dynamo-hafta13/10-hafta13-export-ifc.png", caption: "10) Export IFC — Hafta13-Beton-Donati-Mark.ifc" },
        ],
        learn: [
          "Dynamo node / wire basics",
          "Category.ByName + All Elements of Category",
          "Sequence + string concatenate",
          "Element.SetParameterByName (Mark)",
          "Marked model → IFC 2x3 export",
        ],
        practice: [
          "1. Manage → Dynamo → New",
          "2. List Structural Columns (4)",
          "3. Sequence + K- prefix + SetParameterByName Mark",
          "4. Verify Mark in Properties; save .dyn",
          "5. Export IFC (Hafta13-…-Mark.ifc)",
        ],
        pdf: {
          label: "PDF — Dynamo Week 13: Mark + IFC summary",
          href: "assets/dynamo-hafta13/Dynamo-Hafta13-Mark-ve-IFC.pdf",
        },
        docs: [
          {
            label: "PDF — Beginner explainer: what we did (Week 13)",
            href: "assets/dynamo-hafta13/Dynamo-Hafta13-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Dynamo Week 13: Mark + IFC summary",
            href: "assets/dynamo-hafta13/Dynamo-Hafta13-Mark-ve-IFC.pdf",
          },
          {
            label: "Dynamo graph — Hafta13-Kolon-Mark.dyn",
            href: "assets/dynamo-hafta13/Hafta13-Kolon-Mark.dyn",
          },
          {
            label: "IFC — Hafta13-Beton-Donati-Mark.ifc",
            href: "assets/dynamo-hafta13/Hafta13-Beton-Donati-Mark.ifc",
          },
        ],
        links: [
          { label: "Dynamo (official site)", href: "https://dynamobim.org/" },
          { label: "Dynamo Primer (free book)", href: "https://primer.dynamobim.org/" },
          {
            label: "Dynamo Primer — Revit Connection (chapter)",
            href: "https://primer.dynamobim.org/08_Dynamo-for-Revit/8-1_The-Revit-Connection.html",
          },
          {
            label: "Autodesk Learn — Use Dynamo Player (2 min)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/use-dynamo-player",
          },
          {
            label: "Autodesk Learn — Pile numbering with Dynamo (6 min, close to Mark)",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/pile-numbering-with-dynamo",
          },
          {
            label: "Autodesk — How to start learning Dynamo",
            href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-Training-for-Dynamo.html",
          },
          {
            label: "Autodesk University — Beginner Dynamo for Revit (workshop)",
            href: "https://www.autodesk.com/autodesk-university/class/Computational-BIM-Workshop-Beginner-Dynamo-Revit-2019",
          },
          {
            label: "Help — Creating Dynamo Graphs for Revit",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=RevitDynamo_About_Creating_Dynamo_Graphs_for_Revit_html",
          },
          {
            label: "Autodesk — Number elements (Dynamo / Mark)",
            href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-automatically-number-elements-in-Revit.html",
          },
          {
            label: "Help — Export to IFC",
            href: "https://help.autodesk.com/view/RVT/2026/ENU/?guid=GUID-6EB68CEC-6C17-4B16-A509-30537F666C1F",
          },
          {
            label: "YouTube — Learn Dynamo for Revit in 10 Minutes (intro)",
            href: "https://www.youtube.com/watch?v=iLfKAO9aa54",
          },
          {
            label: "YouTube — Dynamo Revit Mark / renumber (search)",
            href: "https://www.youtube.com/results?search_query=dynamo+revit+mark+renumber+elements",
          },
          {
            label: "YouTube — Revit Export IFC (search)",
            href: "https://www.youtube.com/results?search_query=revit+export+ifc+tutorial",
          },
        ],
        notes: [
          "Done: Dynamo Mark automation + IFC export.",
          "Evidence: assets/dynamo-hafta13/01–10 + .dyn + .ifc.",
          "PDF: Dynamo-Hafta13-Basit-Anlatim.pdf (beginner / prep).",
          "PDF: Dynamo-Hafta13-Mark-ve-IFC.pdf (summary).",
          "Sources: Primer + Autodesk AU/Support + YouTube intro.",
          "Next: Week 14 — Portfolio assembly.",
        ],
      },
    },
    {
      id: 14,
      status: "done",
      tr: {
        title: "Portföy derleme",
        goal: "1–13 pratik + Hafta 15 sertifika/CV’yi tek sitede toparlamak; başvuru için kontrol ve yayın checklist’i yazmak.",
        story: [
          "Bu hafta yeni model yok. Portföy ayrı bir vitrin sayfası değil: BIM Yolculuğu sitesinin kendisi. Hafta 14, yolculuktaki kanıtları okunur paket haline getirmek ve yayın için hazırlamak.",
          "Kanıt haritası — H1–2 kavram/AECO; H3–5 Revit mimari–yapı–aile; H6 metraj; H7–8 Civil; H9 Navisworks clash/sets; H10–11 Forma/ISO; H12 ileri yapı+donatı+IFC; H13 Dynamo Mark+IFC; H15 sertifika+CV.",
          "Başvuruda öneri: site linki + 2–3 öne çıkan hafta (ör. 9 clash, 12 yapı/donatı, 13 Dynamo). CV’deki PDF’ler Hafta 15’te.",
          "Yayın: statik site (build yok). index.html + content.js + assets birlikte kalmalı. Yerelde kontrol → host’a kopyala (IIS/nginx) veya GitHub Pages / Netlify.",
          "Çıktı: Portfolyo-Hafta14-Basit-Anlatim.pdf + Portfolyo-Hafta14-Derleme.pdf; Hafta 14 status = done.",
        ],
        learn: [
          "Portföy = kanıtlı yolculuk sitesi",
          "Hangi hafta hangi kanıt (harita)",
          "Başvuruda 2–3 öne çıkan seçmek",
          "Statik yayın (klasör / Pages / Netlify)",
        ],
        practice: [
          "1. Siteyi aç; Hafta 9 / 12 / 13 / 15’i kontrol et",
          "2. Bir galeri + bir PDF’in açıldığını doğrula",
          "3. TR/EN dil düğmesini dene",
          "4. Yayın checklist’ini uygula (klasör veya host)",
          "5. CV / LinkedIn’e site linki ekle",
        ],
        pdf: {
          label: "PDF — Portföy Hafta 14: Derleme özet",
          href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Derleme.pdf",
        },
        docs: [
          {
            label: "PDF — Yeni öğrenen için basit anlatım (Hafta 14)",
            href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Portföy Hafta 14: Derleme özet",
            href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Derleme.pdf",
          },
        ],
        links: [
          { label: "Bu site — Yolculuk (ana sayfa)", href: "index.html#journey" },
          { label: "Hafta 15 — Sertifikalar ve CV", href: "index.html#journey" },
          {
            label: "GitHub Pages (yayın seçeneği)",
            href: "https://pages.github.com/",
          },
          {
            label: "Netlify Drop (klasör sürükle-bırak yayın)",
            href: "https://app.netlify.com/drop",
          },
        ],
        notes: [
          "Tamam: portföy derleme notu + basit/özet PDF.",
          "Pratik modelleme H1–13 + sertifika H15; H14 paketleme.",
          "Yayın: assets ile birlikte tüm klasörü host’a koy.",
          "Sonraki adım (isteğe bağlı): canlı URL + CV’ye yaz.",
        ],
      },
      en: {
        title: "Portfolio assembly",
        goal: "Package weeks 1–13 practice + Week 15 certificates/CV into one site; write a publish checklist for applications.",
        story: [
          "No new model this week. The portfolio is not a separate showcase page: it is this BIM Journey site. Week 14 packages the evidence and prepares it for publishing.",
          "Evidence map — W1–2 concepts/AECO; W3–5 Revit architecture–structure–families; W6 quantities; W7–8 Civil; W9 Navisworks clash/sets; W10–11 Forma/ISO; W12 advanced structure+rebar+IFC; W13 Dynamo Mark+IFC; W15 certificates+CV.",
          "For applications: site link + 2–3 highlight weeks (e.g. 9 clash, 12 structure/rebar, 13 Dynamo). Certificate PDFs live in Week 15.",
          "Publish: static site (no build). Keep index.html + content.js + assets together. Local check → copy to host (IIS/nginx) or GitHub Pages / Netlify.",
          "Deliverables: Portfolyo-Hafta14-Basit-Anlatim.pdf + Portfolyo-Hafta14-Derleme.pdf; Week 14 status = done.",
        ],
        learn: [
          "Portfolio = evidence-backed journey site",
          "Which week = which proof (map)",
          "Pick 2–3 highlights for applications",
          "Static publish (folder / Pages / Netlify)",
        ],
        practice: [
          "1. Open the site; check Weeks 9 / 12 / 13 / 15",
          "2. Verify one gallery image + one PDF opens",
          "3. Toggle TR/EN",
          "4. Follow the publish checklist",
          "5. Add the site link to CV / LinkedIn",
        ],
        pdf: {
          label: "PDF — Portfolio Week 14: assembly summary",
          href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Derleme.pdf",
        },
        docs: [
          {
            label: "PDF — Beginner explainer (Week 14)",
            href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Basit-Anlatim.pdf",
          },
          {
            label: "PDF — Portfolio Week 14: assembly summary",
            href: "assets/portfolyo-hafta14/Portfolyo-Hafta14-Derleme.pdf",
          },
        ],
        links: [
          { label: "This site — Journey (home)", href: "index.html#journey" },
          { label: "Week 15 — Certificates and CV", href: "index.html#journey" },
          {
            label: "GitHub Pages (publish option)",
            href: "https://pages.github.com/",
          },
          {
            label: "Netlify Drop (drag-and-drop publish)",
            href: "https://app.netlify.com/drop",
          },
        ],
        notes: [
          "Done: portfolio assembly note + beginner/summary PDFs.",
          "Hands-on modeling W1–13 + certificates W15; W14 packaging.",
          "Publish: upload the whole folder including assets.",
          "Optional next: live URL + add to CV.",
        ],
      },
    },
    {
      id: 15,
      status: "done",
      tr: {
        title: "Sertifikalar ve CV",
        goal: "Bu yolculukta alınan sertifikalar ve güncel CV.",
        docs: [
          { label: "PDF — Introduction to BIM for the AECO Industry", href: "assets/sertifikalar/01-introduction-to-bim-aeco.pdf" },
          { label: "PDF — Introduction to BIM for Structural Design", href: "assets/sertifikalar/02-introduction-to-bim-structural.pdf" },
          { label: "PDF — Plannerly (sertifika 1)", href: "assets/sertifikalar/03-planerly.pdf" },
          { label: "PDF — Plannerly 2", href: "assets/sertifikalar/05-plannerly-2.pdf" },
          { label: "PDF — Plannerly 3", href: "assets/sertifikalar/06-plannerly-3.pdf" },
          { label: "PDF — Learn Forma Data Management and Takeoff (90 dk)", href: "assets/sertifikalar/04-learn-forma-docs-takeoff-90.pdf" },
          { label: "PDF — Identify & resolve clash (Revit–Navisworks)", href: "assets/sertifikalar/07-identify-resolve-clash-revit-navisworks.pdf" },
          { label: "PDF — Elif Rabia Kırlı CV", href: "assets/cv/Elif-Rabia-Kirli-CV.pdf" },
        ],
      },
      en: {
        title: "Certificates and CV",
        goal: "Certificates from this journey and the current CV.",
        docs: [
          { label: "PDF — Introduction to BIM for the AECO Industry", href: "assets/sertifikalar/01-introduction-to-bim-aeco.pdf" },
          { label: "PDF — Introduction to BIM for Structural Design", href: "assets/sertifikalar/02-introduction-to-bim-structural.pdf" },
          { label: "PDF — Plannerly (certificate 1)", href: "assets/sertifikalar/03-planerly.pdf" },
          { label: "PDF — Plannerly 2", href: "assets/sertifikalar/05-plannerly-2.pdf" },
          { label: "PDF — Plannerly 3", href: "assets/sertifikalar/06-plannerly-3.pdf" },
          { label: "PDF — Learn Forma Data Management and Takeoff (90 min)", href: "assets/sertifikalar/04-learn-forma-docs-takeoff-90.pdf" },
          { label: "PDF — Identify & resolve clash (Revit–Navisworks)", href: "assets/sertifikalar/07-identify-resolve-clash-revit-navisworks.pdf" },
          { label: "PDF — Elif Rabia Kirli CV", href: "assets/cv/Elif-Rabia-Kirli-CV.pdf" },
        ],
      },
    },
  ],
};
