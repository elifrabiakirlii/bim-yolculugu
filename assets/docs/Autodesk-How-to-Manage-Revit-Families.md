# Autodesk Learning — How to manage Revit families

**Modül:** [Coaching: How to manage Revit families](https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families)  
**Süre:** ~40 dk · **Durum:** tamamlandı (Hafta 5)  
**Amaç:** Revit ailelerini oluşturmak, gelişmiş yükleme tekniklerini kullanmak ve aileleri proje içinde yönetmek.

---

## Modül konuları (resmi outline)

1. **Overview of Revit Family** — aile türleri ve ne zaman hangisi  
2. **Creating Revit Families** — Family Editor’da sıfırdan / şablondan üretim  
3. **Advanced Loadable Revit Family Techniques** — parametre, kısıt, yükleme pratikleri  
4. **Revit Family / Project Interaction** — projeye yükleme, tip–instance, bakım  

Modül sonunda: **Quiz** + **Summary**.

---

## 1) Overview — aile türleri

| Tür | Ne | Dosya / yönetim |
|-----|----|-----------------|
| **System family** | Duvar, döşeme, çatı, merdiven… | Projede *Edit Type*; ayrı `.rfa` yok |
| **Loadable family** | Kapı, pencere, mobilya, MEP, kolon kesiti… | `.rfa` → *Load into Project* |
| **In-place family** | Tek seferlik özel geometri | Sadece o projede |

**Tip vs instance:** Tip parametresi aynı tipteki tüm örnekleri günceller; instance yalnızca seçili örneği. Schedule / metraj için bu ayrım kritik.

---

## 2) Creating Revit Families — üretim sırası

İyi pratik sırası (Autodesk / AU ile uyumlu):

1. Ne üreteceğini ve **kategoriyi** netleştir → doğru **family template**  
2. Önce **referans düzlem iskeleti** (geometri değil)  
3. Düzlemlere ölçü → **Label** ile parametre (Genişlik, Derinlik, Yükseklik…)  
4. **EQ / Align + Lock** ile kısıtlar  
5. Geometriyi (Extrusion, Blend, Sweep…) düzlemlere kilitle  
6. Material / görünürlük / nested aile (gerekirse)  
7. **Flex testi** (*Family Types* diyaloğunda değerleri değiştir)  
8. *Load into Project* → Component ile yerleştir  

> Bu portföyde pratik: **Tst-test kutu 01** / **alt kabuk**, **masa ayak** — aynı iskelet mantığı.

---

## 3) Advanced loadable techniques — yönetim ipuçları

- **Host-based** vs **free-standing:** kapı duvara ihtiyaç duyar; mobilya serbest durabilir.  
- Gereksiz tip/parametre bırakma; projeye yükledikten sonra **Purge Unused**.  
- Schedule’da görünmesi gereken özel alanlar → **Shared Parameter** (aile parametresi yetmez).  
- Birim (mm / metric) ve kategori indirmeden / yüklemeden kontrol.  
- Nested aileler karmaşık formlarda kullanılır; ana aile şişmesin diye sade tut.  
- Kütüphane düzeni: ofis standardı klasör / isimlendirme (marka_ürün_boyut).

---

## 4) Family ↔ project interaction

| İş | Ne işe yarar |
|----|----------------|
| *Insert → Load Family* | `.rfa` projeye girer |
| *Edit Family* (projeden) | Aileyi düzenle → *Load into Project* ile güncelle |
| Type Selector / Edit Type | Tip ekle–sil–çoğalt |
| Properties (instance) | Tek örnek: yükseklik offset, mark… |
| Schedule / Material Takeoff | Kategori + parametreler metraja akar (Hafta 6) |

**Bakım:** yanlış kategori → yanlış schedule; fazla aile → ağır model. Düzenli purge + standart kütüphane.

---

## Bu modülle bağlanan pratikler (portföy)

- Family Editor parametrik iskelet (kutu, masa ayak)  
- Üretici / kütüphane aileleri (BIMobject, BIMsmith, NBS…) — `revit_aileleri_rehberi.pdf`  
- Sonraki adım: aynı ailelerin **metraj / schedule** tarafı (Hafta 6)

---

## Kaynaklar

- Modül: https://www.autodesk.com/learn/ondemand/module/how-to-manage-revit-families  
- İlgili: [Using families in Revit](https://www.autodesk.com/learn/ondemand/tutorial/using-families-in-revit) · [Foundations of Revit](https://www.autodesk.com/learn/ondemand/course/foundations-of-revit)  
- Site: Hafta 5 makalesi (`articles/revit-family.js`) + galeri `assets/revit-family/`
