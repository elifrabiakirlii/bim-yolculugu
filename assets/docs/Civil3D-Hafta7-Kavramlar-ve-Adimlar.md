# Civil 3D — Hafta 7: Kavramlar + Adım Adım Mini Proje

Sıfırdan küçük bir arazi + yol iskeleti:

**Surface → Alignment → Profile → Corridor**

PDF sürümü: [`assets/civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf`](../civil3d/Civil3D-Hafta7-Kavramlar-ve-Adimlar.pdf)

---

## Bölüm 1 — Kavramlar (detaylı)

Civil 3D, bina modelleyen Revit’ten farklıdır. Asıl işi **arazi, yol, altyapı** modellemektir. Hafta 7’de dört temel taş öğrenilir; birbirine bağlıdır.

| Sıra | Kavram | Basit anlamı |
|------|--------|----------------|
| 1 | **Surface** | Arazi / zemin 3D modeli |
| 2 | **Alignment** | Plandaki yol güzergâhı (üstten çizgi) |
| 3 | **Profile** | Boykesit: yol boyunca kot grafiği |
| 4 | **Corridor** | Yolun 3D iskeleti (güzergâh + profil + enkesit) |

### 1) Surface (Yüzey / Arazi)

**Ne işe yarar?** Arazinin üç boyutlu modelidir. Noktalar, konturlar veya DEM ile üretilir. Program noktaları üçgenlerle birleştirir (**TIN**). Sonuç: “şu koordinatta zemin kotu kaç?” sorusuna cevap veren yüzey.

**Neden önemli?** Yol, temel, kazı–dolgu hep bu zemine oturur. Surface yoksa boykesitte mevcut zemin çizgisi de olmaz.

- **EG (Existing Ground):** mevcut / doğal zemin.
- **Kot / Elevation:** noktanın yüksekliği (metre).
- **Prospector:** soldaki liste; Surface burada yaşar.
- **Point groups:** noktaları surface’e bağlar (`_All Points`).

**İpucu:** Description kutusuna kot yazma — kot yalnızca Elevation alanına gider.

### 2) Alignment (Güzergâh / Aks)

**Ne işe yarar?** Yolun **plandaki** merkez çizgisidir. “Yol nereye gidecek?” sorusunun cevabı. Genelde **Centerline** tipi kullanılır.

Yükseklik bilmez; sadece X–Y rotasıdır. Yükseklik Profile ile gelir.

- Polyline çiz → **Create Alignment from Objects**.
- **İstasyon:** yol boyunca mesafe (0+000, 0+020…).
- TIN kenarı çapraz çizgi gibi görünebilir; o surface parçasıdır, silinmez.

### 3) Profile (Boykesit)

**Ne işe yarar?** Alignment boyunca zeminin yükselip alçalmasını gösteren grafik. Yatay = istasyon, düşey = kot.

- **Surface Profile:** mevcut arazi (EG) kotları.
- **Design Profile:** tasarım yol kotu (Hafta 7’de asıl Surface Profile yapıldı).

**Profile View** = grafiğin ızgarası. Ribbon’da **Profile** ≠ **Profile View**. Önce Surface Profile, sonra Profile View.

**İpucu:** ViewCube Bottom iken yazılar ters çıkabilir → TOP / PLAN World.

### 4) Corridor (Yol gövdesi)

**Ne işe yarar?** Alignment + Profile + **Assembly** (enkesit şablonu) birleşince 3D yol iskeleti oluşur.

- **Assembly:** enine kesit kalıbı (Hafta 7: `YOL-ASM`).
- **Rebuild:** corridor’u yeniden hesapla.
- Detaylı hacim / enkesit → Hafta 8.

**Zincir:** Surface zemini verir → Alignment yolu çizer → Profile kotu gösterir → Corridor 3D gövdeyi kurar.

---

## Bölüm 2 — Mini proje adımları

Objeler: `EG`, `YOL1`, `YOL1 PROFILE`, `YOL-ASM`, `YOL-COR` (Civil 3D 2027, metrik).

### Adım 0 — Açılış
1. Metric şablon
2. Prospector açık

### Adım 1 — Surface
1. Surfaces → Create Surface → TIN → Name `EG` → OK

### Adım 2 — Noktalar

| Nokta | X,Y | Kot |
|-------|-----|-----|
| 1 | 0,0 | 100 |
| 2 | 80,0 | 100.5 |
| 3 | 80,50 | 102 |
| 4 | 0,50 | 101 |
| 5 | 40,25 | 103 |
| 6 | 40,0 | 101 |

`CREATEPOINTMANUAL` → Description boş → Elevation’a kot.  
EG → Definition → Point groups → Add → `_All Points` → `ZE` → ViewCube 3D.

### Adım 3 — Alignment
1. TOP görünüm
2. `PL` → `0,10` → `80,10` → Enter
3. Create Alignment from Objects → `YOL1` (Centerline)

### Adım 4 — Profile
1. `CREATEPROFILEFROMSURFACE` (Profile View menüsü değil)
2. YOL1 + EG → Add >> → Draw in profile view
3. Boş yere tıkla → `YOL1 PROFILE`

### Adım 5 — Corridor
1. Create Assembly → `YOL-ASM`
2. Create Corridor → `YOL-COR` (YOL1 + EG profil + YOL-ASM)
3. Rebuild the corridor

### Kontrol
- [ ] EG
- [ ] YOL1
- [ ] YOL1 PROFILE
- [ ] YOL-COR
- [ ] Ekran görüntüleri `assets/civil3d/`

### Sık hatalar
- Learn videosunu “çizim yok” sanmak
- Kotu Description’a yazmak
- Profile View’da Surface Profile aramak
- TIN kenarını silmeye çalışmak
- Bottom görünümde ters yazı
