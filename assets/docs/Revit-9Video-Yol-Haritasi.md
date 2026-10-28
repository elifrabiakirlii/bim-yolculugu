# Balkan Architect — 9 Video Revit Yol Haritası (Sıfırdan, Revit 2026)

**Playlist:** [https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN](https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN)  

**Amaç:** Videoyu izle → buradaki checklist’i uygula → bir sonraki bölüme geç.  
**Kural:** Eski bozuk dosyayı kullanma. **Yeni proje** ile başla.

---

## Başlamadan önce (zorunlu)

### Yeni proje

1. Revit aç → **New → Project**
2. Template: **Metric Multi-discipline** (veya Architectural Metric)
3. Hemen kaydet: **File → Save As → Project**
  İsim: `Revit_Beginner_House`  
   Yer: Masaüstü

### Sabit seviye kotları (bunu ezberle)

South Elevation’da level’ları şöyle ayarla / yeniden adlandır:


| İsim            | Kot       |
| --------------- | --------- |
| `03 Roof`       | **6.00**  |
| `02 Entry`      | **3.00**  |
| `01 Lower`      | **0.00**  |
| `00 Foundation` | **-2.10** |


> Önceki denemede Roof 3.05 / Lower -3.05 karışıklığı hata üretti. Bu tablo daha temiz.



### Altın kurallar (hata yememek için)

1. Duvarı **plan**da çiz (South’ta değil)
2. Aynı çizgiye **2. kez duvar çizme** (overlap hatası)
3. Top Constraint hatası → önce **Unconnected Height = 6**, sonra `03 Roof` yap
4. Part 3 arazi: **basit Toposolid** (aşırı nokta / -4.3 ile uğraşma)
5. Her part bitince **Save** + 3D kontrol



### Kısayollar


|       |                 |
| ----- | --------------- |
| WA    | Wall            |
| DR    | Door            |
| WN    | Window          |
| VR    | View Range      |
| TR    | Trim            |
| SL    | Split           |
| CS    | Create Similar  |
| Esc   | Komuttan çık    |
| Tab   | Seçimi değiştir |
| Space | Duvar flip      |


---



## PART 1 — Arayüz (~10 dk)

**Video:** [https://www.youtube.com/watch?v=0Ndeh-jt26M](https://www.youtube.com/watch?v=0Ndeh-jt26M)  

### Ne öğreneceksin

Ribbon, Properties, Project Browser, zoom/pan, 3D, Save

### Yap

- [ ] Yeni proje aç, kaydet
- [ ] **View → User Interface** → Properties + Project Browser açık
- [ ] Level 1 planında WA ile 2–3 deneme duvarı çiz, Esc, Undo
- [ ] Default **3D** aç, Shift+orta tuş ile çevir
- [ ] File → Save

**Bitince:** Arayüzü tanıyorsan Part 2.

---



## PART 2 — Seviyeler + ilk duvarlar + gezinme

**Video (playlist Part 2):** başlıkta *navigation, selection, walls, levels…*  
Playlist’ten 2. videoyu aç.

### Yap

- [ ] South Elevation aç
- [ ] Level’ları yukarıdaki tabloya göre **isimlendir + kot ver**
- [ ] Her level için Floor Plan yoksa: **View → Floor Plan → level seç → OK**
- [ ] `00 Foundation` planında **WA**
  - Tip: Retaining / Generic 300 (beton)
  - Base = `00 Foundation`
  - Top = **Unconnected**, Height ≈ **3** (veya Top = `02 Entry`)
  - Kabaca dikdörtgen çiz (~12 m × 7 m civarı; sonra ölçüyle düzelt)
- [ ] Duvar seç → mavi ölçüye tıkla → boyut ayarla
- [ ] 3D kontrol + Save

**Bitince:** Temel “kutu” duvarlar + 4 level hazır.

---



## PART 3 — Alt duvarlar + Site + Kamera + Arazi (BASİT)

**Video:** [https://www.youtube.com/watch?v=-0pNrGx9m6w](https://www.youtube.com/watch?v=-0pNrGx9m6w)  

### 3A — Lower duvarlar

- [ ] `01 Lower` planı
- [ ] WA → aynı tip
- [ ] Bu sefer **Depth** / aşağı: Base = `00 Foundation`, Top = `01 Lower` (veya videodaki gibi depth)
- [ ] **VR → View Depth = Unlimited** (görünmeyen duvar için)
- [ ] İç/dış hatları tamamla, ölçüleri düzelt
- [ ] 3D kontrol



### 3B — Kamera

- [ ] Lower planında zoom out
- [ ] View küpü yanı → **Camera** (veya View → 3D View → Camera)
- [ ] 1. tık uzağa, 2. tık binaya doğru
- [ ] Perspective kaydedildi



### 3C — Arazi (Revit 2026 basitleştirilmiş — takılma)

Videoda Toposurface + Building Pad var. Sende:

1. **Site** planı aç + **VR Unlimited**
2. **Massing & Site → Toposolid**
3. Evin etrafında **büyük dikdörtgen** çiz → Finish
4. Edit Type → Earth kalınlığı **≥ 6 m** (ince tip hata verir)
5. İsteğe bağlı: Modify Sub Elements → dış noktalar **-0.15**, orta **-1.5** ( **-4.3 zorlama** )
6. Delik için: Toposolid seç → **Sub-Divide** → evin **1–2 m dışında** dikdörtgen → **Sub-divide Offset = -3** → Finish
  (Building Pad yoksa bu yeterli)

- [ ] 3D’de eğim + ev görünüyor
- [ ] Save

**Bitince:** Arazi “mükemmel” olmasa da devam et. Part 4 daha önemli.

---



## PART 4 — Dış duvarlar + Çatı + Döşeme + İç duvarlar

**Video:** [https://www.youtube.com/watch?v=paav5qgfDP0](https://www.youtube.com/watch?v=paav5qgfDP0)  
**Detay checklist:** Masaüstü `Revit_Part4_Adim_Adim.md`

### Yap (özet)

- [ ] Save As (yedek)
- [ ] `01 Lower` → WA → Generic 200  
  - Location Line = **Finish Face: Interior**  
  - Base = `01 Lower`  
  - Top = **Unconnected Height 6** → çiz → sonra Top = `03 Roof`
- [ ] Aynı duvarı Entry’de **CS** ile tamamla (Space = flip)
- [ ] **Roof by Footprint** → Pick Lines + Offset ~0.9 → slope ~5° → TR → Finish
- [ ] Floor @ Lower (Pick Walls + Tab) → Finish → **No** attach
- [ ] Floor @ Entry (Pick Lines + balkon) → Finish → **No**
- [ ] Dış duvarları seç → **Attach Top** → Roof
- [ ] İç duvarlar (Partition) Lower→Entry; ölçü 1.2 / 1.4; SL + TR
- [ ] İç duvarları Entry floor’a Attach (alttan bitsin)
- [ ] Entry iç duvarlar → Roof’a Attach
- [ ] 3D + Save

**Hata olursa:**

- Top Constraint invalid → Unconnected 6 kullan
- Walls overlap → Filter → Walls → fazla olanı Delete

---



## PART 5 — Kapı / pencere / boşluklar (playlist 5)

**Video:** Playlist’ten Part 5

### Tipik adımlar

- [ ] `02 Entry` ve `01 Lower` planlarında
- [ ] **DR** (Door) → duvara tıkla → Space ile yön
- [ ] **WN** (Window) → dış duvarlara yerleştir
- [ ] Geçici ölçüyle kenardan mesafe ayarla
- [ ] 3D kontrol + Save

*(Videoda sıra farklıysa videoyu takip et; checklist aynı kalır.)*

---



## PART 6 — Merdiven / korkuluk (playlist 6)

**Video:** Playlist’ten Part 6

### Tipik adımlar

- [ ] Architecture → **Stair**
- [ ] Lower’dan Entry’ye (veya Entry→Roof) koşu çiz
- [ ] Properties: yükselme / basamak ayarı
- [ ] Finish
- [ ] Railing otomatik geldiyse kontrol et; yoksa Railing ekle
- [ ] 3D + Save

---



## PART 7 — Bileşenler / mobilya / site elemanları (playlist 7)

**Video:** Playlist’ten Part 7

### Tipik adımlar

- [ ] Architecture → **Component → Place a Component**
- [ ] Load Family gerekirse (mobilya, ağaç…)
- [ ] Plana yerleştir, hizala
- [ ] 3D + Save

---



## PART 8 — Ölçülendirme / etiket / oda (playlist 8)

**Video:** Playlist’ten Part 8  
**Detay checklist:** Masaüstü `Revit_Part8_Adim_Adim.md`

### Yap (özet)

- [ ] **File → Save**
- [ ] `02 Entry` planını aç
- [ ] Annotate → **Aligned** → dış ölçüler (DI)
- [ ] `01 Lower` → iç ölçüler (opsiyonel)
- [ ] Annotate → **Tag by Category** → Doors, sonra Windows
- [ ] Architecture → **Room** → her kapalı alana oda
- [ ] **Room Tag** → isim + alan (m²)
- [ ] 3D kontrol + Save + ekran görüntüsü

**Bitince:** Part 9’a geç.

---



## PART 9 — Sheet / çıktı / son rötuş (playlist 9)

**Video:** Playlist’ten Part 9  
**Detay checklist:** Masaüstü `Revit_Part9_Adim_Adim.md`

### Yap (özet)

- [ ] Project Browser → Sheets → **New Sheet** (metric title block)
- [ ] `02 Entry` + `01 Lower` planlarını sheet’e sürükle
- [ ] Elevation + 3D (opsiyonel) ekle
- [ ] Title block doldur (proje adı, tarih, adın)
- [ ] **File → Export → PDF**
- [ ] Final Save + portföy için PDF / screenshot

---



## Haftalık tempo (öneri)


| Gün | İş                                           |
| --- | -------------------------------------------- |
| 1   | Part 1–2 (temiz proje + level + temel duvar) |
| 2   | Part 3 (basit site) + Part 4 yarım           |
| 3   | Part 4 bitir                                 |
| 4   | Part 5–6                                     |
| 5   | Part 7–9                                     |


---



## Takılınca ne yazacaksın

Sadece şunu yaz:  
`Part X — adım Y — hata metni`  
(+ gerekirse ekran görüntüsü)

Örnek: `Part 4 — çatı — Defines Slope bulamıyorum`

---



## Önemli Revit 2026 farkları


| Video (2019)           | Sen (2026)                          |
| ---------------------- | ----------------------------------- |
| Architectural Template | Metric Multi-discipline OK          |
| Toposurface            | **Toposolid**                       |
| Building Pad           | **Sub-Divide + negatif Offset**     |
| —                      | Duvar: önce Unconnected, sonra Roof |


---



## Şimdi ilk işin

1. Eski dosyayı kapat (kaydetme zorunlu değil)
2. **Yeni proje** aç + kaydet
3. Level tablosunu kur
4. Playlist Part 1’i aç → yukarıdaki Part 1 checklist

Hazırsan bir sonraki mesajda birlikte **Part 1 + Part 2 level kurulumunu** canlı adım adım yaparız.