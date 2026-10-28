/* Revit yapı — Hafta 4. Üslup: revit-temelleri.js (eğitim / referans, günlük değil) */
window.ARTICLES = window.ARTICLES || {};

window.ARTICLES["revit-yapi"] = {
  tr: {
    intro:
      "Hafta 3 mimari modelden sonra Structure sekmesi. Tam adım adım checklist: revit-yapi-yol-haritasi.html (mimari 9 video yol haritasının yapı karşılığı). Autodesk Learning: Introduction to BIM for Structural Design and Engineering (tamamlandı, sertifika indirildi). Pratik: Research Building — mimari model link, grid / TOS, kolon–kiriş–döşeme, temel metrajı, analitik model. PE-M2…PE-M9 klasörleri masaüstünde.",
    sections: [
      {
        title: "Yapısal BIM nedir?",
        paragraphs: [
          "Mimari model odaları, duvarları ve görünümü anlatır. Yapısal model yükü taşıyan iskeleti anlatır: kolon, kiriş, döşeme, temel, varsa çapraz. İkisi aynı binadır; disiplinler ayrı dosyada tutulur, birbirine Link ile bağlanır.",
          "Revit Structure, AutoCAD’de çizgi çizmek değildir. Structural Column ve Structural Framing nesnelerdir: kesit (UB356×171×51 gibi), seviye, grid ve malzeme modele bağlıdır. Plan, kesit ve 3D aynı modelden gelir.",
          "Bu kursun odağı: yapı mühendisinin BIM sürecindeki yeri, bağlantılı mimari model üzerinde çalışmak ve ilk çelik/beton iskeleti belgelemek. Statik hesap yazılımının yerini tutmaz; koordinasyon ve dokümantasyon aracıdır.",
        ],
      },
      {
        title: "Mimari modeli bağlamak (Link)",
        paragraphs: [
          "Yapı dosyası çoğu zaman boş Structural şablonla açılır. Mimari bina Insert → Link Revit ile gelir. Link’teki duvar ve döşemeler referanstır: senin kolonun onların içinden geçer, ama o duvarı bu dosyada silmezsin.",
          "Link olup olmadığını anlamak: elemanı seç. Önce tüm link kutusu seçiliyorsa, Properties’te link adı (ör. RESEARCH BUILDING_ARCHITECTURAL.rvt) görünüyorsa, veya Manage Links → Revit listesinde dosya varsa çelik/duvar o dosyadandır. Pick Supports gibi komutlar link kirişini çoğu zaman seçmez; destek kendi Structural Framing’in olmalıdır.",
        ],
        list: [
          "Insert → Link Revit — mimari .rvt",
          "Manage Links — Loaded / Unload",
          "VG → Revit Links — görünürlük",
        ],
      },
      {
        title: "Grid ve TOS (Top of Steel)",
        paragraphs: [
          "Yapı planı grid ağı üzerine kurulur. GR (Grid): A, B, C… ve 1, 2, 3… Kolonlar kesişimlere oturur. Kirişler grid çizgileri boyunca uzanır.",
          "TOS = Top of Steel: çelik kirişin üst kotu. Döşeme (metal deck + beton) çoğu zaman bu kotun üzerine oturur. 1ST FLOOR TOS, 14 ROOF gibi görünümler yapı planlarıdır; mimari 02 Entry ile karıştırılmaz.",
          "Level isimleri ve kotlar Elevation’da verilir. Her TOS için Floor Plan yoksa: View → Floor Plan → ilgili level.",
        ],
        table: {
          headers: ["Kavram", "Ne işe yarar"],
          rows: [
            ["Grid", "Kolon/kiriş hizası"],
            ["Level / TOS", "Düşey kot; döşeme ve kiriş üstü"],
            ["Structural Column", "Düşey taşıyıcı (mimari kolon değil)"],
            ["Structural Framing", "Kiriş, aşık, çapraz"],
          ],
        },
      },
      {
        title: "Kolon, kiriş, döşeme",
        paragraphs: [
          "Structure → Column: grid kesişimine tıkla; Base ve Top level seç. Structure → Beam: iki kolon veya grid ucu arasında kiriş. Kesit ailesi (UB / HEA / beton dikdörtgen) Properties’ten değişir.",
          "Yapısal döşeme: Structure → Floor. Tip örnek: 152 mm beton + 50 mm metal deck. Sınır için Boundary Line veya Pick Supports. Pick Supports yalnız kendi dosyandaki kiriş/duvara basar; boş alana veya etikete (UB356…) değil. Link kiriş seçilmezse Pick Lines veya elle sınır çiz.",
          "“Extend into wall (to core)” Pick Walls içindir. Destek seçilmiyorsa: kiriş vurgulanıyor mu, doğru Structural Floor mu, kiriş ile döşeme aynı TOS hizasında mı bak.",
        ],
        list: [
          "Column → grid kesişimi",
          "Beam → grid / kolon arası",
          "Floor → Pick Supports veya Pick Lines",
          "3D + 1ST FLOOR TOS ile kontrol",
        ],
      },
      {
        title: "Temel, metraj ve pafta",
        paragraphs: [
          "Isolated footing / pier kolon altına oturur. Schedule: View → Schedule → Footing / Pier. Mimari A101 paftası gibi, yapıda sheet’e FOOTING SCHEDULE sürüklenir (ör. Autodesk Research Building, sheet 02).",
          "3D görünümler isimlendirilir (ROOF ISOMETRIC). Çatı planı (14 ROOF) kiriş ızgarasını gösterir. Analitik model (Analytical Model) çubuk elemanları analiz yazılımına giden sadeleştirmedir; görsel kirişten ayrı bir katmandır.",
        ],
      },
      {
        title: "Kurs ve proje çıktıları",
        table: {
          headers: ["Çıktı", "Nerede"],
          rows: [
            ["Autodesk sertifika", "BIM Sertifikalar + bu galeri PDF"],
            ["PE-M2 … PE-M9 .rvt", "Masaüstü pratik klasörleri"],
            ["Research Building Structural", "Link’li mimari + kendi iskelet"],
            ["Ekranlar", "assets/revit-structure (aşağıdaki galeri)"],
          ],
        },
        links: [
          {
            label: "Autodesk — Introduction to BIM for Structural Design and Engineering",
            href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "After the Week 3 architectural model, the Structure tab. Full step-by-step checklist: revit-yapi-yol-haritasi.html (the structural counterpart of the 9-video architectural roadmap). Autodesk Learning: Introduction to BIM for Structural Design and Engineering (completed; certificate downloaded). Practice: Research Building — linked architectural model, grids / TOS, columns–beams–slabs, footing schedule, analytical model. PE-M2…PE-M9 folders are on the Desktop.",
    sections: [
      {
        title: "What is structural BIM?",
        paragraphs: [
          "The architectural model describes rooms, walls, and appearance. The structural model describes the load-bearing skeleton: columns, beams, slabs, foundations, braces. Same building; disciplines live in separate files and connect with Link.",
          "Revit Structure is not linework. Structural Column and Structural Framing are objects: section (e.g. UB356×171×51), level, grid, and material sit on the model. Plan, section, and 3D come from one model.",
          "This course: the structural engineer’s place in BIM, working on a linked architectural model, and documenting a first steel/concrete frame. It does not replace analysis software.",
        ],
      },
      {
        title: "Linking the architectural model",
        paragraphs: [
          "The structural file often starts from a Structural template. The architectural building arrives via Insert → Link Revit. Linked walls and floors are references: your column can pass through them; you do not delete that wall in this file.",
          "To tell a link: select the element. If the whole link box highlights first, Properties shows a link name (e.g. RESEARCH BUILDING_ARCHITECTURAL.rvt), or Manage Links → Revit lists the file, it is linked. Pick Supports usually cannot pick linked beams; supports must be your Structural Framing.",
        ],
        list: [
          "Insert → Link Revit — architectural .rvt",
          "Manage Links — Loaded / Unload",
          "VG → Revit Links — visibility",
        ],
      },
      {
        title: "Grids and TOS (Top of Steel)",
        paragraphs: [
          "A structural plan sits on a grid. GR (Grid): A, B, C… and 1, 2, 3… Columns land on intersections. Beams run along grid lines.",
          "TOS = Top of Steel: the top of the steel beam. The slab (metal deck + concrete) usually sits on that elevation. Views such as 1ST FLOOR TOS and 14 ROOF are structural plans — not the architectural 02 Entry plan.",
          "Name levels and set elevations in Elevation. If a TOS has no floor plan: View → Floor Plan → that level.",
        ],
        table: {
          headers: ["Idea", "Role"],
          rows: [
            ["Grid", "Column/beam alignment"],
            ["Level / TOS", "Vertical datum; slab and beam top"],
            ["Structural Column", "Vertical member (not architectural column)"],
            ["Structural Framing", "Beams, joists, braces"],
          ],
        },
      },
      {
        title: "Columns, beams, floors",
        paragraphs: [
          "Structure → Column: click a grid intersection; set Base and Top. Structure → Beam: between columns or grid ends. Change the section family (UB / HEA / concrete) in Properties.",
          "Structural floor: Structure → Floor. Example type: 152 mm concrete + 50 mm metal deck. Boundary: Boundary Line or Pick Supports. Pick Supports clicks your own beams/walls — not empty space or a tag (UB356…). If the beam is in a link, use Pick Lines or sketch the edge.",
          "“Extend into wall (to core)” is for Pick Walls. If a support will not pick: does the beam highlight, is this a Structural Floor, and is the beam on the same TOS as the slab?",
        ],
        list: [
          "Column → grid intersection",
          "Beam → between grid / columns",
          "Floor → Pick Supports or Pick Lines",
          "Check in 3D + 1ST FLOOR TOS",
        ],
      },
      {
        title: "Foundations, schedules, sheets",
        paragraphs: [
          "Isolated footings / piers sit under columns. Schedule: View → Schedule → Footing / Pier. Like architectural sheet A101, drag FOOTING SCHEDULE onto a structural sheet (e.g. Autodesk Research Building, sheet 02).",
          "Name 3D views (ROOF ISOMETRIC). A roof plan (14 ROOF) shows the framing grid. The analytical model is the simplified stick model for analysis software — a separate layer from the visible beam.",
        ],
      },
      {
        title: "Course and deliverables",
        table: {
          headers: ["Deliverable", "Where"],
          rows: [
            ["Autodesk certificate", "BIM Sertifikalar + gallery PDF"],
            ["PE-M2 … PE-M9 .rvt", "Desktop practice folders"],
            ["Research Building Structural", "Linked architecture + your frame"],
            ["Screenshots", "assets/revit-structure (gallery below)"],
          ],
        },
        links: [
          {
            label: "Autodesk — Introduction to BIM for Structural Design and Engineering",
            href: "https://www.autodesk.com/learn/ondemand/course/introduction-to-bim-for-structural-design-and-engineering",
          },
        ],
      },
    ],
  },
};
