/* Revit aileler — Hafta 5. Üslup: revit-temelleri.js / revit-yapi.js (eğitim / referans) */
window.ARTICLES = window.ARTICLES || {};

window.ARTICLES["revit-family"] = {
  tr: {
    intro:
      "Hafta 3–4’te bina iskeleti (mimari + yapı) kuruldu. Bu hafta odak: Family — modeldeki yeniden kullanılabilir parçalar. İki hat birleştirildi: (1) Family Editor’da parametrik aile çizmek (Tst-test kutu 01, masa ayak); (2) projede hazır üretici / kütüphane ailelerini doğru yerden bulmak. Kaynak: Türkçe Revit Family Eğitim Serisi + Autodesk Learning family modülleri + revit_aileleri_rehberi.pdf (küresel platformlar ve üretici RFA kaynakları).",
    sections: [
      {
        title: "Family nedir?",
        paragraphs: [
          "Revit’te her şey bir ailenin üyesidir. Duvar, döşeme, çatı gibi şeyler sistem ailesidir (projede Edit Type ile yönetilir, ayrı .rfa dosyası yoktur). Kapı, pencere, mobilya, mekanik ekipman, kolon kesiti gibi parçalar yüklenen (loadable) ailedir: .rfa dosyası Family Editor’da üretilir veya kütüphaneden yüklenir.",
          "Aynı ailenin tipleri vardır (ör. kapı 80 / 90 cm). Tipi değiştirince o tipteki bütün örnekler güncellenir. Instance parametresi ise tek bir yerleştirilmiş örneği etkiler. Bu ayrım schedule ve metrajda önemlidir.",
          "Amaç sadece “güzel 3D parça” değil: doğru kategori, doğru parametre ve mümkünse gerçek üretici bilgisi. Böylece kapı listesi, malzeme takeoff ve koordinasyon anlamlı kalır.",
        ],
        table: {
          headers: ["Tür", "Örnek", "Dosya"],
          rows: [
            ["System family", "Wall, Floor, Roof", "Projede (Edit Type)"],
            ["Loadable family", "Door, Window, Furniture, MEP", ".rfa → Load into Project"],
            ["In-place family", "Tek seferlik özel geometri", "Sadece o projede"],
          ],
        },
      },
      {
        title: "Family Editor’da parametrik iskelet",
        paragraphs: [
          "Sıfırdan aile: File → New → Family → uygun template (Generic Model, Furniture, Door…). İlk iş geometri değil; referans düzlem iskeleti. Düzlemlere ölçü koyulur, ölçü Label ile parametreye bağlanır (Genişlik, Derinlik, Yükseklik).",
          "EQ (eşitlik) kısıtı objeyi merkeze kilitler: genişlik değişince iki yan eşit kalır. Geometri (Extrusion, Blend, Sweep…) referans düzlemlere Align + Lock ile bağlanır. Material parametresi Materials and Finishes grubunda tanımlanır; Type veya Instance seçilir.",
          "Bu haftanın pratikleri: Tst-test kutu 01 / alt kabuk — basit parametrik kutu (Genişlik, Derinlik, material). masa ayak — fillet’li profil, Left elevation’da extrusion, 3D View ile kontrol. Flex testi: parametre değerlerini değiştir, geometri bozulmadan büyüyüp küçülmeli.",
        ],
        list: [
          "Referans düzlem → ölçü → Label (parametre)",
          "EQ ile ortalama; Align + Lock ile geometriyi bağla",
          "Extrusion / fillet profil; 3D’de flex",
          "Load into Project → Component ile yerleştir",
        ],
        links: [
          {
            label: "YouTube — Revit Family Eğitim Serisi (playlist)",
            href: "https://www.youtube.com/playlist?list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH",
          },
          {
            label: "YouTube — Seri video (index 8, masa ayak)",
            href: "https://www.youtube.com/watch?v=qY5HQIU5CsM&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=8",
          },
        ],
      },
      {
        title: "Hazır aile nereden bulunur? (üretici rehberi)",
        paragraphs: [
          "Her parçayı sıfırdan çizmek şart değil. BIM projelerinde süreç hızı ve çizim kalitesi için hem genel kütüphane platformları hem de üreticilerin kendi RFA/RVT dosyaları kullanılır. Aşağıdaki özet revit_aileleri_rehberi.pdf ile aynı çerçeveyi takip eder.",
          "Genel platformlar binlerce markanın mimari, statik ve MEP elemanını tek çatı altında toplar. Üretici sitelerinde Resources / BIM bölümü ise katalog ürününe sadık, bağlantı noktaları tanımlı aileler için tercih edilir — özellikle MEP ve ofis mobilyasında.",
        ],
        table: {
          headers: ["Kaynak", "Ne için"],
          rows: [
            ["BIMobject", "En büyük açık BIM kütüphanesi; gerçek üretici ürünleri"],
            ["BIMsmith Market", "Cephe, çatı, yalıtım, mekanik — detaylı filtre"],
            ["NBS National BIM Library", "UK standartları; yüksek kaliteli üretici objeleri"],
            ["BIM&CO / Modlar / BlocksRVT", "Çok dilli / bulut erişimli ek kütüphaneler"],
            ["Herman Miller, Steelcase, Haworth, Knoll", "Ofis mobilyası, oturma, akustik"],
            ["Vitra, Artemide", "Seramik / banyo ve mimari aydınlatma"],
            ["Grundfos, Danfoss", "Pompa, vana, termostatik kontrol (parametrik)"],
            ["Schneider Electric, ABB", "Pano, şalter, priz, otomasyon (MEP)"],
            ["Daikin, Carrier", "Klima / VRF / havalandırma — boru-kanal bağlantılı"],
          ],
        },
        paragraphsAfter: [
          "İndirmeden önce kategori (Furniture, Mechanical Equipment…) ve birimleri (mm/metric) kontrol et. Projeye Load Family sonrası gereksiz tipleri Purge Unused ile temizle. Schedule’da görünmesi gereken özel alanlar için Family parameter yetmez; Shared Parameter gerekir (Hafta 6 metraj).",
        ],
      },
      {
        title: "Autodesk Learning: How to manage Revit families (tamamlandı)",
        paragraphs: [
          "Autodesk Learning coaching modülü (~40 dk) tamamlandı: aile oluşturma, gelişmiş loadable teknikler ve aile–proje etkileşimi. Resmi konular: Overview of Revit Family → Creating Revit Families → Advanced Loadable Techniques → Family/Project Interaction (+ quiz / summary).",
          "Özet not (kendi çalışmam): system / loadable / in-place ayrımı; üretimde önce referans düzlem + Label + EQ/Lock, sonra geometri ve flex testi; projede Load Family, tip–instance, Purge Unused; schedule için Shared Parameter. Tam metin: assets/docs/Autodesk-How-to-Manage-Revit-Families.md",
          "Türkçe YouTube serisi Family Editor pratğini; bu Autodesk modülü kütüphane yönetimi ve proje içi kullanımı pekiştirir. İlgili: Using families in Revit, Foundations of Revit.",
          "Sonraki hafta (metraj): Schedule / Material Takeoff, Volume, Excel export. Bu hafta çizdiğin ailelerin hacim ve malzeme bilgisi orada işe yarar — parametreleri Shared / doğru kategoriye taşımayı unutma.",
        ],
        links: [
          {
            label: "Autodesk — How to manage Revit families (modül)",
            href: "https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families",
          },
          {
            label: "Markdown — Modül özet notu",
            href: "assets/docs/Autodesk-How-to-Manage-Revit-Families.md",
          },
          {
            label: "Autodesk — Using families in Revit",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/using-families-in-revit",
          },
          {
            label: "Autodesk — Foundations of Revit",
            href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit",
          },
        ],
        table: {
          headers: ["Çıktı", "Nerede"],
          rows: [
            ["Tst-test kutu 01 / alt kabuk", "Parametric kutu .rfa"],
            ["masa ayak", "Masa ayağı .rfa + 3D / Left"],
            ["Ekranlar", "assets/revit-family (galeri)"],
            ["Üretici rehberi PDF", "assets/revit-family/revit_aileleri_rehberi.pdf"],
            ["Autodesk modül notu", "assets/docs/Autodesk-How-to-Manage-Revit-Families.md"],
          ],
        },
      },
    ],
  },
  en: {
    intro:
      "After Weeks 3–4 (architecture + structure), the focus is Families — reusable parts in the model. Two tracks: (1) building parametric families in the Family Editor (Tst-test kutu 01, masa ayak / table leg); (2) finding manufacturer / library content for projects. Sources: Turkish Revit Family series + Autodesk Learning family modules + revit_aileleri_rehberi.pdf (global platforms and manufacturer RFA sources).",
    sections: [
      {
        title: "What is a family?",
        paragraphs: [
          "Everything in Revit belongs to a family. Walls, floors, and roofs are system families (managed with Edit Type; no separate .rfa). Doors, windows, furniture, MEP equipment, and column sections are loadable families: .rfa files built in the Family Editor or loaded from a library.",
          "A family has types (e.g. 80 / 90 cm door). Changing a type updates every instance of that type. Instance parameters affect one placed copy. That split matters for schedules and quantities.",
          "The goal is not only a nice 3D part: correct category, correct parameters, and preferably real manufacturer data — so door lists, material takeoff, and coordination stay meaningful.",
        ],
        table: {
          headers: ["Kind", "Example", "File"],
          rows: [
            ["System family", "Wall, Floor, Roof", "In project (Edit Type)"],
            ["Loadable family", "Door, Window, Furniture, MEP", ".rfa → Load into Project"],
            ["In-place family", "One-off custom geometry", "That project only"],
          ],
        },
      },
      {
        title: "Parametric skeleton in the Family Editor",
        paragraphs: [
          "From scratch: File → New → Family → pick a template (Generic Model, Furniture, Door…). First build reference planes, not solids. Dimension the planes and Label them as parameters (Width, Depth, Height).",
          "EQ (equality) keeps the object centered when width changes. Lock geometry (Extrusion, Blend, Sweep…) to planes with Align + Lock. Add a Material parameter under Materials and Finishes as Type or Instance.",
          "This week’s builds: Tst-test kutu 01 / alt kabuk — simple parametric box. masa ayak — filleted profile, extrusion in Left elevation, check in 3D. Flex test: change parameter values; geometry should resize without breaking.",
        ],
        list: [
          "Reference planes → dimension → Label",
          "EQ centering; Align + Lock geometry",
          "Extrusion / filleted profile; flex in 3D",
          "Load into Project → place with Component",
        ],
        links: [
          {
            label: "YouTube — Revit Family Eğitim Serisi (playlist)",
            href: "https://www.youtube.com/playlist?list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH",
          },
          {
            label: "YouTube — Series video (index 8, table leg)",
            href: "https://www.youtube.com/watch?v=qY5HQIU5CsM&list=PLzurlq7ZTsYosmBuouH4_p6RZtpX1FSLH&index=8",
          },
        ],
      },
      {
        title: "Where to get ready-made families (manufacturer guide)",
        paragraphs: [
          "You do not have to model every part from scratch. For speed and quality, use global library platforms and manufacturers’ own RFA/RVT files. The summary below follows revit_aileleri_rehberi.pdf.",
          "Platforms aggregate architectural, structural, and MEP content. Manufacturer Resources / BIM pages are preferred when you need catalog-accurate parts with connectors — especially MEP and office furniture.",
        ],
        table: {
          headers: ["Source", "Use for"],
          rows: [
            ["BIMobject", "Largest open BIM library; real manufacturer products"],
            ["BIMsmith Market", "Facade, roof, insulation, mechanical — rich filters"],
            ["NBS National BIM Library", "UK standards; high-quality manufacturer objects"],
            ["BIM&CO / Modlar / BlocksRVT", "Multilingual / cloud library extras"],
            ["Herman Miller, Steelcase, Haworth, Knoll", "Office furniture, seating, acoustics"],
            ["Vitra, Artemide", "Sanitary / ceramic and architectural lighting"],
            ["Grundfos, Danfoss", "Pumps, valves, thermostatic controls"],
            ["Schneider Electric, ABB", "Panels, switches, outlets, automation (MEP)"],
            ["Daikin, Carrier", "HVAC / VRF — duct and pipe connectors"],
          ],
        },
        paragraphsAfter: [
          "Before loading: check category and units (metric/mm). After Load Family, Purge Unused for unused types. Custom fields that must appear in schedules need Shared Parameters — Family parameters alone are not enough (Week 6 quantities).",
        ],
      },
      {
        title: "Autodesk Learning: How to manage Revit families (completed)",
        paragraphs: [
          "Completed the Autodesk Learning coaching module (~40 min): creating families, advanced loadable techniques, and family–project interaction. Official topics: Overview → Creating → Advanced Loadable Techniques → Family/Project Interaction (+ quiz / summary).",
          "Study note: system / loadable / in-place; build order reference planes → Label → EQ/Lock → geometry → flex; in project Load Family, type vs instance, Purge Unused; Shared Parameters for schedules. Full write-up: assets/docs/Autodesk-How-to-Manage-Revit-Families.md",
          "The Turkish YouTube series covers Family Editor practice; this Autodesk module reinforces library management and in-project use. Related: Using families in Revit, Foundations of Revit.",
          "Next week (quantities): Schedule / Material Takeoff, Volume, Excel export. Volume and material data from this week’s families feed that work — move key fields to Shared Parameters / correct categories when needed.",
        ],
        links: [
          {
            label: "Autodesk — How to manage Revit families (module)",
            href: "https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families",
          },
          {
            label: "Markdown — Module study note",
            href: "assets/docs/Autodesk-How-to-Manage-Revit-Families.md",
          },
          {
            label: "Autodesk — Using families in Revit",
            href: "https://www.autodesk.com/learn/ondemand/tutorial/using-families-in-revit",
          },
          {
            label: "Autodesk — Foundations of Revit",
            href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit",
          },
        ],
        table: {
          headers: ["Deliverable", "Where"],
          rows: [
            ["Tst-test kutu 01 / alt kabuk", "Parametric box .rfa"],
            ["masa ayak", "Table-leg .rfa + 3D / Left"],
            ["Screenshots", "assets/revit-family (gallery)"],
            ["Manufacturer guide PDF", "assets/revit-family/revit_aileleri_rehberi.pdf"],
            ["Autodesk module note", "assets/docs/Autodesk-How-to-Manage-Revit-Families.md"],
          ],
        },
      },
    ],
  },
};
