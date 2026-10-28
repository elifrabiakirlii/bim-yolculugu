# Revit Beginner Course — Part 4 (Adım Adım)
**Video:** https://www.youtube.com/watch?v=paav5qgfDP0  
**Konu:** Kayıt → dış duvarlar → çatı → döşemeler → iç duvarlar  
**Senin seviye isimleri (yaklaşık):** `01 Lower Level` · `03 Entry Level` · `04 Roof`

> Revit 2026’da araçlar aynı: Wall (WA), Roof by Footprint, Floor, Attach, Split (SL), Trim (TR), Create Similar (CS), View Range (VR).

---

## 0) Kaydet (önce bunu yap)
1. **File → Save As → Project**
2. Masaüstüne kaydet, isim örn. `GettingStarted_Revit`
3. **Save**

---

## 1) Lower Level dış duvarlar (yukarı Roof’a kadar)

1. Project Browser → **`01 Lower Level`** çift tıkla  
2. **WA** (Wall)  
3. Tip: **Generic 200** (veya benzeri)  
4. Properties:
   - **Location Line** = **Finish Face: Interior** (Wall Centerline değil)
   - **Base Constraint** = `01 Lower Level`
   - **Top Constraint** = `04 Roof` (Unconnected olmasın)
5. İç yüzden çiz; yanlış taraftaysa **Spacebar** ile çevir (flip)  
6. Duvarları yerleştir → Esc

---

## 2) Entry Level’da aynı duvarı devam ettir

1. **`03 Entry Level`** aç  
2. Duvar görünmüyorsa: **VR** → View Depth = **Unlimited** → Apply → OK  
3. Mevcut doğru duvara tıkla → **CS** (Create Similar)  
4. Location Line / Top = Roof aynı kalsın  
5. Gerekirse **Spacebar** ile flip → çiz → Esc  
6. **3D** ile kontrol et

---

## 3) Çatı (Roof by Footprint)

1. **`04 Roof`** planını aç (veya Roof level)  
2. Gerekirse **VR → Unlimited**  
3. **Architecture → Roof → Roof by Footprint**  
4. **Pick Lines** ile dış duvar kenarlarını seç  
5. Overhang (saçak) için Options Bar’da **Offset ≈ 0.9** m  
   - Yanlış tarafa giderse mouse’u diğer taraftan yaklaştırıp tıkla  
6. Eğim: Defines Slope açık olanlarda açı **~5°** (video 30→5)  
7. Eğimsiz kenarlar: çizgiyi seç → **Defines Slope** işaretini kaldır  
8. Köşeleri birleştir: **TR** (Trim/Extend to Corner)  
9. **✓ Finish**  
10. 3D’de çatıyı kontrol et

---

## 4) Lower Level döşeme (Floor)

1. **`01 Lower Level`** aç  
2. **Architecture → Floor**  
3. **Pick Walls** → bir duvara gel → **Tab** → tüm zincir → tıkla  
4. **✓ Finish**  
5. “Attach walls to floor?” → **No**  
6. “Join geometry?” benzeri → **No**  
7. 3D’de görmek zor olabilir; duvar seçince döşeme kenarı görünür

---

## 5) Entry Level döşeme + balkon uzantısı

1. **`03 Entry Level`** aç  
2. **Floor**  
3. Bu sefer **Pick Lines** (Pick Walls değil) — iç cephe çizgileri  
4. İstediğin balkon/uzantıyı çizgiyle biraz dışarı taşı  
5. **TR** ile köşeleri birleştir / fazla uçları kes  
6. **✓ Finish** → yine **No** (duvarları floor’a yapıştırma)

---

## 6) Dış duvarları çatıya bağla (Attach)

1. 3D veya planda dış duvarlara gel → **Tab** ile zincir seç  
2. **Ctrl** ile diğer duvar gruplarını da ekle  
3. **Modify → Attach Top/Base** (Attach)  
4. **Top** → çatıya tıkla  
5. Duvarlar çatıya oturmalı

> Floor’a Attach deme; video özellikle bundan kaçınıyor (duvarlar Roof’a kadar gidecek).

---

## 7) Lower Level iç duvarlar

1. **`01 Lower Level`**  
2. **WA**  
3. Tip: **Interior / Partition** (varsa)  
4. Base = Lower · Top = **Entry Level**  
5. Odaları kabaca çiz  
6. Duvar seç → mavi ölçüye tıkla:
   - oda ≈ **1.2** m  
   - koridor ≈ **1.4** m (merkez–merkez)  
7. Duvarı bölmek için: **SL** (Split Element) → tıkla  
8. Birleştirmek/kesmek için: **TR**

---

## 8) İç duvarları üst döşemenin altına oturt

Entry planında lower iç duvarlar “delip geçiyormuş” gibi görünür.

1. **`03 Entry Level`** aç  
2. Alttan görünen iç duvarları seç  
3. **Attach Top/Base** → **Top** → Entry **Floor**’a tıkla  
4. Duvarlar döşemenin altında bitsin  
5. 3D ile kontrol

---

## 9) Entry Level iç duvarlar (Roof’a)

1. **`03 Entry Level`**  
2. **WA** → Interior tip  
3. Top Constraint = **`04 Roof`**  
4. Büyük oda + küçük dolap/ayırıcı çiz  
5. Koridor ≈ **1.4** m  
6. Bu duvarları seç → 3D’de seçmek zorsa görsel stil: **Wireframe**  
7. **Attach Top/Base** → **Roof**  
8. Tekrar **Hidden Line**

---

## Part 4 bitti mi? Kontrol listesi

- [ ] Dosya kaydedildi  
- [ ] Dış duvarlar Lower’dan Roof’a  
- [ ] Çatı var (~5° + saçak)  
- [ ] Lower floor var  
- [ ] Entry floor (+ balkon uzantısı) var  
- [ ] Dış duvarlar çatıya Attach  
- [ ] Lower iç duvarlar Entry floor altına Attach  
- [ ] Entry iç duvarlar Roof’a Attach  

---

## Sık kısayollar

| Kısayol | İş |
|---------|-----|
| **WA** | Wall |
| **CS** | Create Similar |
| **VR** | View Range |
| **TR** | Trim/Extend |
| **SL** | Split Element |
| **Spacebar** | Duvar flip |
| **Tab** | Zincir seçim |

---

## Revit 2026 notu
Part 4’te Toposurface/Pad yok; araçlar neredeyse bire bir aynı. Takılırsan hangi adımda olduğunu yaz (örn. “3 — çatı”).
