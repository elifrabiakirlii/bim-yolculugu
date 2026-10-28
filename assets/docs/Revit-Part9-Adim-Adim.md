# Revit Beginner Course — Part 9 (Adım Adım)
**Konu:** Sheet (pafta) · Görünüm yerleştirme · PDF çıktı  
**Proje:** `Revit_Beginner_House`  
**Playlist:** 9. video — [Balkan Architect Beginner](https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN)

> Son adım. Part 8 bittikten sonra yap. Takılırsan: `Part 9 — adım X — hata` yaz.

---

## 0) Başlamadan önce

1. **File → Save**
2. Part 8’de Entry planında ölçü + tag + room olduğundan emin ol
3. Project Browser → **Views** altında planların hazır olduğunu kontrol et:
   - `01 Lower` (Floor Plan)
   - `02 Entry` (Floor Plan)
   - **South** veya **East** (Elevation — yoksa oluştur: View → Elevation)
   - **3D** view

---

## 1) Pafta (Sheet) oluştur

1. Project Browser → en altta **Sheets (all)** bölümü
2. Sağ tık → **New Sheet…**
3. **Title block** seç:
   - Metric: **A1 metric**, **A3 metric** veya **E1 30 x 42 Horizontal** (hangisi listede varsa)
   - Yoksa ilk metric title block’u seç → OK
4. Sheet numarası / adı:
   - **Number:** `A101` (veya `01`)
   - **Name:** `Floor Plans` veya `Begineer House Plans`
5. **OK** → boş pafta açılır

---

## 2) Plan görünümünü paftaya sürükle

1. Project Browser → **Views** → **`02 Entry`** planını bul
2. **`02 Entry`**’yi **tıkla + sürükle** → açık sheet’in ortasına bırak
3. Revit “Place View” modunda:
   - Sheet üzerinde **tıkla** → plan yerleşir
4. Köşe tutamaçlarıyla **ölçekle / taşı** (genelde 1:100 veya 1:50)
5. Aynı sheet’e **`01 Lower`** planını da ekleyebilirsin:
   - Sürükle → sheet’in alt yarısına yerleştir
   - İkisi sığmazsa **ikinci sheet** aç (A102)

**Ölçek değiştir:** Görünüm seçili → Properties → **View Scale** (ör. 1:100)

---

## 3) Cephe (Elevation) ekle — opsiyonel ama videoda var

1. Project Browser → **Elevations** → **South** (veya East)
2. Sheet’e sürükle → sağ tarafa yerleştir
3. Ölçek: 1:100

**Elevation yoksa:**
- View → **Elevation**
- Plan görünümünde bina dışından iki nokta ile cephe yönü belirle

---

## 4) 3D görünüm ekle — opsiyonel

1. Project Browser → **3D** view (Default 3D)
2. Sheet’e sürükle → köşeye küçük perspektif koy
3. **View Scale** 1:200 olabilir (daha küçük)

**İpucu:** 3D’yi önce açıp **View → Save Orientation and Lock View** ile güzel açı ayarla, sonra sheet’e koy.

---

## 5) Title block bilgilerini doldur

1. Sheet’te **title block** çerçevesindeki yazı alanlarına tıkla:
   - **Project Name:** Revit Beginner House
   - **Drawn By:** Elif Rabia (veya adın)
   - **Date:** bugünün tarihi
   - **Sheet Number / Sheet Name** zaten Properties’te
2. Bazı alanlar düzenlenemez — sorun değil

---

## 6) Görünüm başlığı (View Title)

- Plan altında otomatik **view title** çıkar (ör. Entry Level)
- Görünmüyorsa: görünüm çerçevesini seç → Properties → **Show View Title**

---

## 7) PDF / yazdırma

1. Sheet aktifken **File → Print** (veya **Export → PDF → PDF**)
2. **PDF önerilir:**
   - File → **Export → PDF**
   - Sheet’leri seç (A101, A102…)
   - **Export**
   - Masaüstüne kaydet: `Revit_Beginner_House_A101.pdf`
3. PDF’i aç — planlar, ölçüler, tag’ler görünüyor mu kontrol et

---

## 8) Final kontrol listesi

- [ ] En az **1 sheet** oluşturuldu
- [ ] **Entry planı** (ölçü + room + tag) sheet’te
- [ ] Title block dolduruldu
- [ ] **PDF export** alındı
- [ ] **File → Save** (proje)
- [ ] Portföy için: PDF + plan ekran görüntüsü + 3D render

---

## Sık hatalar

| Sorun | Çözüm |
|-------|--------|
| View sheet’e sığmıyor | View Scale küçült (1:100 → 1:200) |
| Title block yok | New Sheet’te farklı family dene |
| PDF boş | Export’ta doğru sheet işaretli mi |
| Ölçüler sheet’te kayık | Plan view’da düzelt, sheet otom güncellenir |

---

## Tebrikler — 9 video bitti

Yapılacaklar:
1. `bim-ogrenme-portfolyo` → Hafta 3 → **status: done**, Part 8–9 notlarını ekle
2. LinkedIn / portföy → PDF veya ekran görüntüsü
3. Sonraki adım: **Revit Structure** (grid, kolon, kiriş) veya **ACU hazırlık**
