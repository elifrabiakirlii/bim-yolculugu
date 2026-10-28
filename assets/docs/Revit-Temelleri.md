# Revit Temelleri: Arayüz, Model ve Dokümantasyon

Yeni başlayan biri için tek akış. Her bölümün altında o konuya ait video linkleri vardır; ayrı bir kaynak listesi yoktur.  
Uygulama projesi: **Revit_Beginner_House** (Metric, Revit 2026).  
Eğitim serisi: Balkan Architect — 9 videoluk beginner playlist.

---

## Revit nedir?

Autodesk Revit, mimari, yapı ve MEP disiplinlerinde kullanılan **BIM (Building Information Modeling)** yazılımıdır. AutoCAD’de çizgi ve katman çizersiniz; Revit’te **nesne** (wall, door, floor, column…) yerleştirirsiniz. Her nesnenin tipi, malzemesi, hangi katta olduğu ve diğer görünümlerle ilişkisi modele bağlıdır.

Plan, kesit, cephe ve 3D aynı modelden türetilir. Duvarı taşıdığınızda kesit ve metraj da güncellenir — tabii model tutarlı ve kurallara uygun kurulduysa. Revit “tuş öğrenmek”ten önce **level (kat)**, **constraint (kısıt)** ve **view (görünüş)** mantığını kavramak gerekir; aksi halde “Top Constraint invalid” veya “walls overlap” gibi hatalar sık görülür.

Revit tek başına BIM değildir; BIM sürecinin **modelleme aracı**dır. EIR, BEP, CDE, clash ve teslim gibi süreç konuları ayrıdır (bkz. BIM Temelleri). Burada odak: **ilk bina modelini kurmak ve paftaya dökmek**.

---

## Proje kurulumu ve arayüz

Yeni proje: **File → New → Project**. Şablon: **Metric Multi-discipline** (veya Architectural Metric). Hemen **Save As** ile kaydedin; otomatik yedek sürümler (`.0019` gibi) normaldir.

Arayüzde üç alan ezberlenmeli:

- **Ribbon** — komutlar (Architecture, Structure, Annotate…)
- **Properties** — seçili nesnenin parametreleri
- **Project Browser** — görünümler, level’lar, sheet’ler

**View → User Interface** ile Properties ve Project Browser açık kalsın. 3D’de **Shift + orta fare tekerleği** ile orbit; plan da **WA** (Wall), **DR** (Door), **WN** (Window) kısayolları günlük kullanımda zaman kazandırır.

Part 1 — Arayüz (~10 dk)  
https://www.youtube.com/watch?v=0Ndeh-jt26M

Playlist (9 video — tam seri)  
https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN

Learn Revit in 90 minutes (Autodesk)  
https://www.autodesk.com/learn/ondemand/course/learn-revit-in-90-minutes

Foundations of Revit (Autodesk)  
https://www.autodesk.com/learn/ondemand/course/foundations-of-revit

---

## Level (kat kotları) ve görünümler

Bina dikeyde **level**’larla bölünür. Beginner House örneğinde önerilen kot tablosu:

| Level | Kot (m) |
|-------|---------|
| 00 Foundation | -2.10 |
| 01 Lower | 0.00 |
| 02 Entry | 3.00 |
| 03 Roof | 6.00 |

Level’lar **South Elevation**’da isimlendirilir ve kot verilir. Her level için **Floor Plan** yoksa: **View → Floor Plan → level seç → OK**.

Duvar çizimi **plan görünümünde** yapılır; elevation’da değil. **View Range (VR)** ile görünmeyen duvar sorunu çözülür: **View Depth = Unlimited** (alt/üst katta devam eden duvarlar için).

Part 2 — Level + ilk duvarlar (playlist 2. video)

---

## Temel yapı: duvar, çatı, döşeme

### Temel kutusu (Foundation)

`00 Foundation` planında **Generic 300** (veya retaining) duvar; Base = Foundation, Top = Lower veya Unconnected ~3 m. Kabaca 12 m × 7 m dikdörtgen; ölçü mavi tutamaçla düzeltilir.

### Dış duvarlar ve çatı

`01 Lower` planında **Generic 200**, **Location Line = Finish Face: Interior**. Top önce **Unconnected Height 6**, çizim bitince **Top = 03 Roof** — “Top Constraint invalid” hatasında bu sıra işe yarar.

**Roof by Footprint:** Pick Lines, overhang ~0.9 m, eğim ~5°, **TR** (Trim/Extend to Corner), Finish.

**Floor:** Pick Walls + **Tab** (tüm zincir); “Attach walls to floor?” → **No**.

Dış duvarları **Attach Top → Roof**. İç duvarlar (Partition): Lower–Entry arası; **SL** (Split), **TR**, Entry floor ve Roof’a attach.

Part 4 — Duvar + çatı + döşeme  
https://www.youtube.com/watch?v=paav5qgfDP0

Detay checklist: `Revit_Part4_Adim_Adim.md`

---

## Alt kat, site ve kamera

`01 Lower` planında foundation’dan lower’a **depth** duvarları. **Site** planında arazi.

Revit **2026**’da videodaki **Toposurface + Building Pad** yerine **Toposolid** kullanılır:

1. **Massing & Site → Toposolid** — ev etrafında büyük dikdörtgen  
2. Earth kalınlığı **≥ 6 m**  
3. Kazı/delik: **Sub-Divide** → ev dışında dikdörtgen → **Sub-divide Offset = -3**

Arazi “mükemmel” olmasa da devam edilir; modelleme akışı daha kritiktir.

**Camera:** Lower planında View → 3D View → Camera; perspektif kaydedilir.

Part 3 — Site + kamera  
https://www.youtube.com/watch?v=-0pNrGx9m6w

---

## Kapı, pencere, merdiven

- **DR (Door)** — duvara tıkla; **Space** ile swing yönü  
- **WN (Window)** — dış duvarlara; kenar mesafesi geçici ölçüyle  
- **Stair** — Architecture → Stair; Lower → Entry koşusu; railing otomatik veya ayrı eklenir  

Part 5 — Kapı / pencere (playlist 5)  
Part 6 — Merdiven (playlist 6)

---

## Bileşenler (Component / Family)

Mobilya ve ağaç gibi öğeler **Component → Place a Component** ile gelir. **Face-based** veya **wall-based** aileler (ör. Lighting Switch) yüzey ister; hata alınırsa **Furniture** kategorisi kullanılır.

Aynı duvara **iki kez üst üste duvar çizilmemeli** — overlap uyarısı çıkar; **Filter → Walls** ile fazlalık silinir.

Part 7 — Component (playlist 7)

---

## Dokümantasyon: ölçü, etiket, oda

Model bittikten sonra plan **okunabilir hale** getirilir. `02 Entry` planı tipik dokümantasyon katmanıdır.

### Aligned ölçü

**Annotate → Dimension → Aligned** (kısayol **DI**). Dış köşe → karşı dış köşe → ölçü çizgisini plan dışına koy. Beginner House dış ölçüleri örnek: **12600 mm × 7600 mm**.

Ribbon dar ise ölçü **Dimension** kutusunun içinde gizlidir; kutuya tıklayın veya **DI** yazın.

### Etiket (Tag)

**Annotate → Tag → Tag All Not Tagged** — önce **Door Tags**, sonra **Window Tags**. Elmas içindeki sayılar (32, 28) pencere tipi/boyut bilgisidir.

### Oda (Room)

**Architecture → Room**; **Tag on Placement** işaretli olsun. Kapalı alanın ortasına tıklanır; **Room not enclosed** hatası duvar boşluğundan gelir.

Part 8 checklist: `Revit_Part8_Adim_Adim.md`  
Part 8 (playlist 8)

---

## Pafta (Sheet) ve PDF

**Project Browser → Sheets → sağ tık → New Sheet** — metric title block (A1/A3 metric). Sheet numarası örn. **A101**, ad **Architectural Floor Plans**.

Paftaya görünüm eklemek: **Floor Plans → 02 Entry** (Entry katı — ölçü ve tag’lerin olduğu plan) sürükle-bırak. **01 Lower** ikinci viewport veya ikinci sheet olabilir. **Level 0 / Foundation** planı dokümantasyon paftası için uygun değildir; Entry kullanılır.

**File → Export → PDF** — Current window (sheet aktifken). Dosya örn. `Revit_Beginner_House.pdf`.

Part 9 checklist: `Revit_Part9_Adim_Adim.md`  
Part 9 (playlist 9)

---

## Revit 2026: videodan farklar

| Video (2019) | Revit 2026 uygulaması |
|--------------|------------------------|
| Architectural Template | Metric Multi-discipline OK |
| Toposurface | **Toposolid** |
| Building Pad | **Sub-Divide + negatif Offset** |
| Top Constraint doğrudan Roof | Önce **Unconnected Height**, sonra Roof level |

Tam adım adım yol haritası: `Revit_9Video_Yol_Haritasi.md`

---

## Proje çıktıları (Beginner House)

| Çıktı | Açıklama |
|-------|----------|
| `.rvt` | Revit proje dosyası |
| `02 Entry` planı | Ölçü + tag + room |
| Sheet **A101** | Entry planının paftası |
| PDF | Export edilmiş pafta |

Portföy sitesi: `bim-ogrenme-portfolyo/index.html` — Hafta 3  
PDF kopyası: `bim-ogrenme-portfolyo/assets/revit/Revit_Beginner_House_A101.pdf`

---

## Revit 2026 Yardım

https://help.autodesk.com/view/RVT/2026/ENU/

---

## Sonraki konular (bu belgenin dışında)

- **Revit Structure** — grid, kolon, kiriş, temel (inşaat mühendisliği)  
- **Autodesk Certified User (ACU)** — resmi sınav; bu seri temel hazırlık sağlar  
- **Navisworks, ACC, ISO 19650** — BIM süreç derinlemesi (BIM Temelleri ile bağlantılı)
