# Revit Beginner Course — Part 8 (Adım Adım)
**Konu:** Ölçülendirme · Etiket (Tag) · Oda (Room)  
**Proje:** `Revit_Beginner_House` (Part 1–7 bitti varsayılır)  
**Playlist:** 8. video — [Balkan Architect Beginner](https://www.youtube.com/playlist?list=PL1n-0H6b0FkX_9t_253XuEO45712U3RqN)

> Revit 2026. Videoyu aç, durdur-kaldır yap, her adımı uygula. Takılırsan: `Part 8 — adım X — hata` yaz.

---

## 0) Başlamadan önce

1. **File → Save** (son kayıt)
2. Project Browser’da **`02 Entry`** planını aç (Entry Level / 03 Entry — sende hangi isim varsa)
3. **VR** (View Range) → View Depth = **Unlimited** → OK *(gerekirse)*
4. Plan temiz görünsün: **VG** (Visibility) → gereksiz kategorileri kapatma, şimdilik hepsi açık kalabilir

---

## 1) Dış ölçüler (Aligned Dimension)

1. **Annotate** sekmesi → **Aligned** (veya kısayol **DI**)
2. İlk tık: **dış duvarın bir köşe noktası** (endpoint — sarı nokta)
3. İkinci tık: **aynı duvarda veya karşı duvarda** başka bir köşe
4. Üçüncü tık: ölçü çizgisinin **planın dışında** duracağı yere tıkla
5. Aynı hattı devam ettir:
   - Zincir ölçü için: bitiş noktasından **sonraki köşeye** tıkla → dışarı tıkla
   - Veya tekrar **Aligned** ile yeni segment
6. **Uzun kenarlar:** önce uzun duvar boyunca 2–3 dış ölçü koy
7. **Kısa kenarlar:** derinlik ölçüsü (ör. ~7 m civarı — senin modeline göre)

**İpucu:** Ölçü yanlış duvara yapışırsa **Tab** ile alternatif noktayı seç.

---

## 2) İç ölçüler (opsiyonel ama videoda var)

1. **`01 Lower`** planına geç
2. **Aligned** → iç duvar köşeleri arası mesafe
3. Ölçü çizgisini **içeride**, duvarlar arasında konumlandır
4. Önemli mesafeler: oda genişlikleri, kapı kenarından duvara (~1.2 m gibi — videodaki gibi)

---

## 3) Kapı ve pencere etiketleri (Tag by Category)

1. **`02 Entry`** planına dön
2. **Annotate → Tag by Category** (veya **TG**)
3. **Doors** seçili olsun (Options Bar’da category)
4. Her **kapıya** tıkla → otomatik etiket (DR01, DR02…)
5. Etiket ters / dışarıdaysa: etiketi seç → **Space** veya sürükle
6. Tekrar **Tag by Category** → bu sefer **Windows**
7. Her **pencereye** tıkla (WN01…)
8. Çok kalabalıksa bazı etiketleri sürükleyerek ayır

**Alternatif:** Tek kapı → seç → **Tag All Not Tagged** (Annotate menüsünde)

---

## 4) Oda yerleştirme (Room)

1. **`02 Entry`** planı
2. **Architecture → Room** (veya **RM**)
3. Properties:
   - **Room** (henüz numara yok)
   - Limit: **Upper Limit** = `02 Entry` veya `03 Roof` (sendeki üst level)
4. **Her kapalı alanın ortasına** bir kez tıkla:
   - Salon / oturma
   - Mutfak (varsa)
   - Koridor
   - Balkon (kapalı sayılıyorsa)
5. **`01 Lower`** planına geç → alt kattaki odaları da koy
6. Oda görünmüyorsa: oda henüz **kapalı değil** — duvarlarda boşluk var, kapat

**Hata “Room not enclosed”:** Duvarlarda gap var → duvar uçlarını birleştir (TR) veya küçük duvar ekle.

---

## 5) Oda etiketi (Room Tag)

1. **Architecture → Tag → Room Tag** (veya Room komutundayken **Tag on Placement** işaretli)
2. Her odaya tıkladığında **isim + alan (m²)** görünür
3. Etiketi sürükleyerek okunaklı yere koy
4. Oda adını değiştirmek için: odaya tıkla → Properties → **Name** (ör. Living, Kitchen, Bedroom)

---

## 6) Temizlik ve kontrol

- [ ] Dış ölçüler okunuyor
- [ ] Kapı/pencere etiketleri var
- [ ] Her kapalı alanda Room + Room Tag
- [ ] **3D** — model bozulmamış
- [ ] **File → Save**

---

## Sık hatalar

| Sorun | Çözüm |
|-------|--------|
| Ölçü görünmüyor | View Scale çok küçük — zoom in; VG → Annotations açık |
| Tag çıkmıyor | Tag by Category’de doğru kategori; eleman zaten tag’li |
| Room “?” işareti | Alan hesaplanamadı — duvarları kapat |
| Etiketler üst üste | Elle sürükle |

---

## Bitince

Part 8 tamam → **`Revit_Part9_Adim_Adim.md`** dosyasına geç (Sheet / PDF).

Portföy için: Entry planının ekran görüntüsünü al (ölçü + tag + room görünsün).
