/* Revit Temelleri — BIM Temelleri.docx ile aynı üslup: eğitim / referans, günlük değil */
window.ARTICLES = window.ARTICLES || {};

window.ARTICLES["revit-temelleri"] = {
  tr: {
    intro:
      "Yeni başlayan biri için tek akış. Her bölümün altında o konuya ait video linkleri vardır; ayrı bir kaynak listesi yoktur. Uygulama projesi: Revit_Beginner_House (Metric, Revit 2026). Eğitim serisi: Balkan Architect — 9 videoluk beginner playlist.",
    sections: [
      {
        title: "Revit nedir?",
        paragraphs: [
          "Autodesk Revit, mimari, yapı ve MEP disiplinlerinde kullanılan BIM (Building Information Modeling) yazılımıdır. AutoCAD’de çizgi ve katman çizersiniz; Revit’te nesne (wall, door, floor, column…) yerleştirirsiniz. Her nesnenin tipi, malzemesi, hangi katta olduğu ve diğer görünümlerle ilişkisi modele bağlıdır.",
          "Plan, kesit, cephe ve 3D aynı modelden türetilir. Duvarı taşıdığınızda kesit ve metraj da güncellenir — tabii model tutarlı ve kurallara uygun kurulduysa. Revit “tuş öğrenmek”ten önce level (kat), constraint (kısıt) ve view (görünüş) mantığını kavramak gerekir; aksi halde “Top Constraint invalid” veya “walls overlap” gibi hatalar sık görülür.",
          "Revit tek başına BIM değildir; BIM sürecinin modelleme aracıdır. EIR, BEP, CDE, clash ve teslim gibi süreç konuları ayrıdır (bkz. BIM Temelleri). Burada odak: ilk bina modelini kurmak ve paftaya dökmek.",
        ],
      },
      {
        title: "Proje kurulumu ve arayüz",
        paragraphs: [
          "Yeni proje: File → New → Project. Şablon: Metric Multi-discipline (veya Architectural Metric). Hemen Save As ile kaydedin; otomatik yedek sürümler (.0019 gibi) normaldir.",
        ],
        list: [
          "Ribbon — komutlar (Architecture, Structure, Annotate…)",
          "Properties — seçili nesnenin parametreleri",
          "Project Browser — görünümler, level’lar, sheet’ler",
        ],
        paragraphsAfter: [
          "View → User Interface ile Properties ve Project Browser açık kalsın. 3D’de Shift + orta fare tekerleği ile orbit; plan da WA (Wall), DR (Door), WN (Window) kısayolları günlük kullanımda zaman kazandırır.",
        ],
        links: [
          { label: "Part 1 — Arayüz (~10 dk)", href: "https://www.youtube.com/watch?v=0Ndeh-jt26M" },
          { label: "Playlist (9 video — tam seri)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
          { label: "Learn Revit in 90 minutes (Autodesk)", href: "https://www.autodesk.com/learn/ondemand/course/learn-revit-in-90-minutes" },
          { label: "Foundations of Revit (Autodesk)", href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit" },
        ],
      },
      {
        title: "Level (kat kotları) ve görünümler",
        paragraphs: [
          "Bina dikeyde level’larla bölünür. Beginner House örneğinde önerilen kot tablosu aşağıdadır. Level’lar South Elevation’da isimlendirilir ve kot verilir. Her level için Floor Plan yoksa: View → Floor Plan → level seç → OK.",
          "Duvar çizimi plan görünümünde yapılır; elevation’da değil. View Range (VR) ile görünmeyen duvar sorunu çözülür: View Depth = Unlimited (alt/üst katta devam eden duvarlar için).",
        ],
        table: {
          headers: ["Level", "Kot (m)"],
          rows: [
            ["00 Foundation", "-2.10"],
            ["01 Lower", "0.00"],
            ["02 Entry", "3.00"],
            ["03 Roof", "6.00"],
          ],
        },
        links: [{ label: "Part 2 — Level + ilk duvarlar (playlist 2. video)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Temel yapı: duvar, çatı, döşeme",
        paragraphs: [
          "Temel kutusu (Foundation): 00 Foundation planında Generic 300 (veya retaining) duvar; Base = Foundation, Top = Lower veya Unconnected ~3 m. Kabaca 12 m × 7 m dikdörtgen; ölçü mavi tutamaçla düzeltilir.",
          "Dış duvarlar: 01 Lower planında Generic 200, Location Line = Finish Face: Interior. Top önce Unconnected Height 6, çizim bitince Top = 03 Roof — “Top Constraint invalid” hatasında bu sıra işe yarar.",
          "Roof by Footprint: Pick Lines, overhang ~0.9 m, eğim ~5°, TR (Trim/Extend to Corner), Finish. Floor: Pick Walls + Tab (tüm zincir); “Attach walls to floor?” → No. Dış duvarları Attach Top → Roof. İç duvarlar (Partition): Lower–Entry arası; SL (Split), TR, Entry floor ve Roof’a attach.",
        ],
        links: [
          { label: "Part 4 — Duvar + çatı + döşeme", href: "https://www.youtube.com/watch?v=paav5qgfDP0" },
        ],
      },
      {
        title: "Alt kat, site ve kamera",
        paragraphs: [
          "01 Lower planında foundation’dan lower’a depth duvarları. Site planında arazi.",
          "Revit 2026’da videodaki Toposurface + Building Pad yerine Toposolid kullanılır: (1) Massing & Site → Toposolid — ev etrafında büyük dikdörtgen; (2) Earth kalınlığı ≥ 6 m; (3) Kazı/delik: Sub-Divide → ev dışında dikdörtgen → Sub-divide Offset = -3.",
          "Arazi “mükemmel” olmasa da devam edilir; modelleme akışı daha kritiktir. Camera: Lower planında View → 3D View → Camera; perspektif kaydedilir.",
        ],
        links: [{ label: "Part 3 — Site + kamera", href: "https://www.youtube.com/watch?v=-0pNrGx9m6w" }],
      },
      {
        title: "Kapı, pencere, merdiven",
        list: [
          "DR (Door) — duvara tıkla; Space ile swing yönü",
          "WN (Window) — dış duvarlara; kenar mesafesi geçici ölçüyle",
          "Stair — Architecture → Stair; Lower → Entry koşusu; railing otomatik veya ayrı eklenir",
        ],
        links: [
          { label: "Part 5 — Kapı / pencere (playlist 5)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
          { label: "Part 6 — Merdiven (playlist 6)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
        ],
      },
      {
        title: "Bileşenler (Component / Family)",
        paragraphs: [
          "Mobilya ve ağaç gibi öğeler Component → Place a Component ile gelir. Face-based veya wall-based aileler (ör. Lighting Switch) yüzey ister; hata alınırsa Furniture kategorisi kullanılır.",
          "Aynı duvara iki kez üst üste duvar çizilmemeli — overlap uyarısı çıkar; Filter → Walls ile fazlalık silinir.",
        ],
        links: [{ label: "Part 7 — Component (playlist 7)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Dokümantasyon: ölçü, etiket, oda",
        paragraphs: [
          "Model bittikten sonra plan okunabilir hale getirilir. 02 Entry planı tipik dokümantasyon katmanıdır.",
          "Aligned ölçü: Annotate → Dimension → Aligned (kısayol DI). Dış köşe → karşı dış köşe → ölçü çizgisini plan dışına koy. Beginner House dış ölçüleri örnek: 12600 mm × 7600 mm. Ribbon dar ise ölçü Dimension kutusunun içinde gizlidir; kutuya tıklayın veya DI yazın.",
          "Etiket: Annotate → Tag → Tag All Not Tagged — önce Door Tags, sonra Window Tags. Oda: Architecture → Room; Tag on Placement işaretli olsun. Room not enclosed hatası duvar boşluğundan gelir.",
        ],
        links: [{ label: "Part 8 (playlist 8)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Pafta (Sheet) ve PDF",
        paragraphs: [
          "Project Browser → Sheets → sağ tık → New Sheet — metric title block (A1/A3 metric). Sheet numarası örn. A101, ad Architectural Floor Plans.",
          "Paftaya görünüm eklemek: Floor Plans → 02 Entry (Entry katı — ölçü ve tag’lerin olduğu plan) sürükle-bırak. Level 0 / Foundation planı dokümantasyon paftası için uygun değildir; Entry kullanılır.",
          "File → Export → PDF — Current window (sheet aktifken). Dosya örn. Revit_Beginner_House.pdf.",
        ],
        links: [{ label: "Part 9 (playlist 9)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Revit 2026: videodan farklar",
        table: {
          headers: ["Video (2019)", "Revit 2026 uygulaması"],
          rows: [
            ["Architectural Template", "Metric Multi-discipline OK"],
            ["Toposurface", "Toposolid"],
            ["Building Pad", "Sub-Divide + negatif Offset"],
            ["Top Constraint doğrudan Roof", "Önce Unconnected Height, sonra Roof level"],
          ],
        },
      },
      {
        title: "Proje çıktıları (Beginner House)",
        table: {
          headers: ["Çıktı", "Açıklama"],
          rows: [
            [".rvt", "Revit proje dosyası"],
            ["02 Entry planı", "Ölçü + tag + room"],
            ["Sheet A101", "Entry planının paftası"],
            ["PDF", "Export edilmiş pafta"],
          ],
        },
        links: [{ label: "Revit 2026 Yardım", href: "https://help.autodesk.com/view/RVT/2026/ENU/" }],
      },
      {
        title: "Sonraki konular (bu belgenin dışında)",
        list: [
          "Revit Structure — grid, kolon, kiriş, temel (inşaat mühendisliği)",
          "Autodesk Certified User (ACU) — resmi sınav; bu seri temel hazırlık sağlar",
          "Navisworks, ACC, ISO 19650 — BIM süreç derinlemesi (BIM Temelleri ile bağlantılı)",
        ],
      },
    ],
  },
  en: {
    intro:
      "A single flow for beginners. Each section includes video links for that topic; there is no separate source list. Practice project: Revit_Beginner_House (Metric, Revit 2026). Training series: Balkan Architect — 9-video beginner playlist.",
    sections: [
      {
        title: "What is Revit?",
        paragraphs: [
          "Autodesk Revit is BIM software used in architecture, structure, and MEP. In AutoCAD you draw lines and layers; in Revit you place objects (walls, doors, floors, columns…). Each object’s type, material, level, and relationship to other views is tied to the model.",
          "Plans, sections, elevations, and 3D derive from one model. Move a wall and sections and quantities update — if the model is consistent. Before shortcuts, grasp levels, constraints, and views; otherwise “Top Constraint invalid” or “walls overlap” errors are common.",
          "Revit alone is not BIM; it is the modeling tool in the BIM process. EIR, BEP, CDE, clash, and handover are separate (see BIM fundamentals). Focus here: build a first building model and publish a sheet.",
        ],
      },
      {
        title: "Project setup and interface",
        paragraphs: [
          "New project: File → New → Project. Template: Metric Multi-discipline (or Architectural Metric). Save As immediately; automatic backup versions (.0019, etc.) are normal.",
        ],
        list: [
          "Ribbon — commands (Architecture, Structure, Annotate…)",
          "Properties — parameters of the selected element",
          "Project Browser — views, levels, sheets",
        ],
        paragraphsAfter: [
          "Keep Properties and Project Browser open via View → User Interface. In 3D, Shift + middle mouse to orbit; in plan, WA (Wall), DR (Door), WN (Window) save time daily.",
        ],
        links: [
          { label: "Part 1 — Interface (~10 min)", href: "https://www.youtube.com/watch?v=0Ndeh-jt26M" },
          { label: "Playlist (9 videos — full series)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
          { label: "Learn Revit in 90 minutes (Autodesk)", href: "https://www.autodesk.com/learn/ondemand/course/learn-revit-in-90-minutes" },
          { label: "Foundations of Revit (Autodesk)", href: "https://www.autodesk.com/learn/ondemand/course/foundations-of-revit" },
        ],
      },
      {
        title: "Levels and views",
        paragraphs: [
          "Buildings are split vertically by levels. The Beginner House elevation table is below. Name levels and set elevations in South Elevation. If a level has no floor plan: View → Floor Plan → select level → OK.",
          "Draw walls in plan views, not elevation. Fix missing walls with View Range (VR): View Depth = Unlimited for walls continuing on other levels.",
        ],
        table: {
          headers: ["Level", "Elevation (m)"],
          rows: [
            ["00 Foundation", "-2.10"],
            ["01 Lower", "0.00"],
            ["02 Entry", "3.00"],
            ["03 Roof", "6.00"],
          ],
        },
        links: [{ label: "Part 2 — Levels + first walls (playlist video 2)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Basic structure: walls, roof, floor",
        paragraphs: [
          "Foundation box: on 00 Foundation plan, Generic 300 wall; Base = Foundation, Top = Lower or Unconnected ~3 m. Roughly 12 m × 7 m rectangle; adjust with blue grips.",
          "Exterior walls: on 01 Lower, Generic 200, Location Line = Finish Face: Interior. Set Top to Unconnected Height 6 first, then Top = 03 Roof after drawing — fixes “Top Constraint invalid”.",
          "Roof by Footprint: Pick Lines, overhang ~0.9 m, slope ~5°, TR, Finish. Floor: Pick Walls + Tab; “Attach walls to floor?” → No. Attach exterior walls to roof. Interior partitions: Lower–Entry; SL, TR, attach to Entry floor and roof.",
        ],
        links: [{ label: "Part 4 — Walls + roof + floor", href: "https://www.youtube.com/watch?v=paav5qgfDP0" }],
      },
      {
        title: "Lower level, site, and camera",
        paragraphs: [
          "On 01 Lower, draw depth walls from foundation to lower. Site plan for terrain.",
          "In Revit 2026, Toposolid replaces Toposurface + Building Pad: (1) Massing & Site → Toposolid around the house; (2) Earth thickness ≥ 6 m; (3) Cut: Sub-Divide → rectangle outside house → Sub-divide Offset = -3.",
          "Imperfect terrain is fine; modeling flow matters more. Camera: on Lower plan, View → 3D View → Camera; save perspective.",
        ],
        links: [{ label: "Part 3 — Site + camera", href: "https://www.youtube.com/watch?v=-0pNrGx9m6w" }],
      },
      {
        title: "Doors, windows, stairs",
        list: [
          "DR (Door) — click wall; Space toggles swing",
          "WN (Window) — on exterior walls; edge distance via temporary dims",
          "Stair — Architecture → Stair; Lower → Entry run; railing auto or added separately",
        ],
        links: [
          { label: "Part 5 — Doors / windows (playlist 5)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
          { label: "Part 6 — Stairs (playlist 6)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" },
        ],
      },
      {
        title: "Components (families)",
        paragraphs: [
          "Furniture and trees via Component → Place a Component. Face-based or wall-based families need a host; use Furniture category if errors occur.",
          "Do not draw two walls on the same line — overlap warning; delete extras with Filter → Walls.",
        ],
        links: [{ label: "Part 7 — Components (playlist 7)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Documentation: dimensions, tags, rooms",
        paragraphs: [
          "After modeling, make the plan readable. 02 Entry is the typical documentation level.",
          "Aligned dimensions: Annotate → Dimension → Aligned (DI). Outer corner to opposite outer corner; place dim line outside plan. Beginner House example: 12600 mm × 7600 mm. If ribbon is narrow, Aligned hides inside the Dimension flyout — click it or type DI.",
          "Tags: Annotate → Tag → Tag All Not Tagged — Door Tags, then Window Tags. Room: Architecture → Room; Tag on Placement on. Room not enclosed means a gap in walls.",
        ],
        links: [{ label: "Part 8 (playlist 8)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Sheet and PDF",
        paragraphs: [
          "Project Browser → Sheets → right-click → New Sheet — metric title block. Example sheet A101, name Architectural Floor Plans.",
          "Drag Floor Plans → 02 Entry onto the sheet (the plan with dims and tags). Do not use Level 0 / Foundation for documentation sheets.",
          "File → Export → PDF — Current window (with sheet active). Example file: Revit_Beginner_House.pdf.",
        ],
        links: [{ label: "Part 9 (playlist 9)", href: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN" }],
      },
      {
        title: "Revit 2026 vs the video",
        table: {
          headers: ["Video (2019)", "Revit 2026"],
          rows: [
            ["Architectural Template", "Metric Multi-discipline OK"],
            ["Toposurface", "Toposolid"],
            ["Building Pad", "Sub-Divide + negative Offset"],
            ["Top Constraint straight to Roof", "Unconnected Height first, then Roof level"],
          ],
        },
      },
      {
        title: "Beginner House deliverables",
        table: {
          headers: ["Output", "Description"],
          rows: [
            [".rvt", "Revit project file"],
            ["02 Entry plan", "Dimensions + tags + room"],
            ["Sheet A101", "Sheet with Entry plan"],
            ["PDF", "Exported sheet"],
          ],
        },
        links: [{ label: "Revit 2026 Help", href: "https://help.autodesk.com/view/RVT/2026/ENU/" }],
      },
      {
        title: "Next topics (outside this document)",
        list: [
          "Revit Structure — grids, columns, beams, foundations (civil/structural)",
          "Autodesk Certified User (ACU) — official exam; this series is foundational prep",
          "Navisworks, ACC, ISO 19650 — deeper BIM process (linked to BIM fundamentals)",
        ],
      },
    ],
  },
};
