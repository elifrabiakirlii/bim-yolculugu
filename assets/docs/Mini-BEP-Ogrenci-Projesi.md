# Mini BIM Execution Plan (BEP)

**Proje:** Öğrenci BIM portföyü — Beginner House + Forma Deneme (Docs / Takeoff)  
**Standart referansı:** ISO 19650 bilgi yönetimi (öğrenme amaçlı özet BEP)  
**Sürüm:** 1.1 · **Tarih:** 11 Eylül 2026  
**Hazırlayan:** Elif Rabia Kırlı (tek disiplin / öğrenci rolü)

> Bu belge sözleşmeli bir şantiye BEP’i değildir. Hafta 1–2 (Plannerly + OIR→EIR→BEP→CDE) bilgisini kendi öğrenci laboratuvarına uygulayan kısa bir plandır.  
> PDF / Word: `assets/docs/Mini-BEP-Ogrenci-Projesi.pdf` · `.docx`

---

## 1. Amaç

| Amaç | Ne başarıldı sayılır |
|------|----------------------|
| Öğrenme | Revit model + Docs/Takeoff + metraj denemesi tek CDE mantığında |
| Kanıt | Portföy sitesi + sertifikalar + ekran / model çıktıları |
| Bilgi disiplini | Dosya adı, format, durum (WIP / Shared / Published) bilinçli kullanılsın |

---

## 2. Proje bilgisi (özet)

| Alan | Değer |
|------|--------|
| Proje adı | BIM Yolculuğu — öğrenci laboratuvarı |
| Tip | Eğitim / portföy (ticari teslim yok) |
| Disiplinler | Mimari (Beginner House), Yapı (ADSK-STR), Metraj (Cyanbuild + Forma Takeoff + Revit Material Takeoff) |
| CDE | Autodesk Forma / ACC — **Forma Deneme**; yerel yedek: masaüstü + portföy `assets/` |
| Ana modeller | `Revit_Beginner_House.rvt`, `ADSK-ARCH.rvt`, `ADSK-STR_Takeoff.rvt` |

---

## 3. Roller (öğrenci ölçeği)

| Rol (ISO 19650 dili) | Bu projede kim | Sorumluluk |
|----------------------|----------------|------------|
| Appointing party (işveren tarafı) | Kendim (öğrenme hedefi) | Ne isteniyor? (mini EIR aşağıda) |
| Lead appointed / görevli | Kendim | Model, Docs, Takeoff, portföy güncelleme |
| Task team | — (tek kişi) | — |

İleride ekip olursa: her dosyanın **sahibi** + **onaylayan** ayrı yazılır.

---

## 4. Mini EIR (ne isteniyor?)

Teslim “tamam” sayılmak için:

1. **Model:** Revit eğitim sürümü; metrik birim.  
2. **CDE:** Forma Deneme’de güncel sürüm (V1/V2); WIP ile Published karışmaz.  
3. **Metraj:** En az bir 2D takeoff (Cyanbuild veya Forma) + bir 3D Inventory (M3 / EA) + **aynı modelde** Revit Material Takeoff kıyası.  
4. **Dokümantasyon:** Portföy hafta notları + ekran kanıtı.  
5. **Açık format (hedef):** IFC export — Hafta 13 planı; şu an zorunlu değil.  
6. **Koordinasyon:** Learn (Docs / Design Collaboration / Model Coordination 90 dk) tamam. Trial’da Model Coordination ürünü ve Issues/Markups Create yok → Docs döngüsü uygulandı; Issue / BCF **kavram PDF** ile kayda geçti (`Issue-ve-BCF-Hafta10-Notu.pdf`).

---

## 5. Yazılım ve CDE

| Amaç | Araç |
|------|------|
| Modelleme | Autodesk Revit |
| CDE / Docs | Forma Data Management (ACC Docs) |
| Metraj | Forma Takeoff, Cyanbuild, Revit Material Takeoff |
| openBIM kavram | Plannerly + kavram haritası + Issue/BCF notu |
| Portföy | Statik site (`bim-ogrenme-portfolyo`) |

**CDE durumları:**

- **WIP** — sadece kendi düzenlemen  
- **Shared** — incelemeye / kurs adımına açılan sürüm  
- **Published** — portföye veya sertifika kanıtına konan “donmuş” çıktı  

E-posta eki = CDE değildir.

---

## 6. Mini MIDP / TIDP

| Milestone | Teslim | Format | Durum |
|-----------|--------|--------|--------|
| Hafta 1–2 | BIM + ISO / Plannerly | Word / sertifika PDF | Published |
| Hafta 3–5 | Beginner House + aileler | `.rvt` / `.rfa` + ekran | Published (iyi family videosu / Shared Param: planlı) |
| Hafta 6 | Cyanbuild + Forma + Revit schedule kıyası | ekran `01–13` | Published |
| Hafta 10 | Docs + Learn Collab/Coord + Issue/BCF PDF | ekran + PDF | Published (MC/Issue Create: trial engelli) |
| Hafta 11 | Bu Mini BEP (v1.1) | Markdown / PDF / Word | Published |
| Sonra | IFC denemesi | `.ifc` | Planlandı |

---

## 7. Adlandırma ve klasör

Örnek:

- `BH-ARC-00-M3-A-0001.rvt` — Beginner House mimari  
- `FD-STR-TO-M3-S-0001.rvt` — Forma Deneme yapı takeoff kaynağı  

Portföy kanıtı: `assets/…` + sıralı ekran (`01-…`, `02-…`).

---

## 8. Doğrulama (checklist)

- [x] Doğru proje / sürüm (Docs)  
- [x] Birimler tutarlı (M3); Footing 78 `-- M3` giderildi  
- [x] Forma ↔ Revit aynı model m³ kıyası (slab / footing / retaining)  
- [x] Takeoff Classification (A1010) denendi  
- [x] Portföy story + galeri güncel (Hafta 6, 10, 11)  
- [ ] Sertifika / CV Hafta 15 listesi (devam)  

---

## 9. Riskler ve kararlar

| Risk | Karar |
|------|--------|
| Tek kişi — rol çakışması | Mini BEP’te roller “kendim” |
| Takeoff `-- M3` | Footing 78 default ölçü + Revit doğrulaması |
| Collaboration / clash pratik | Trial engeli; Learn + Issue/BCF kavram notu |
| ACU/ACP yok | Zorunlu değil; Plannerly + Autodesk Learn yeterli |

---

## 10. Onay

| Rol | İsim | Tarih |
|-----|------|-------|
| Hazırlayan | Elif Rabia Kırlı | 2026-09-11 |
| Gözden geçiren | (öğrenme — kendim) | 2026-09-11 |

---

*Kaynaklar: Hafta 1–2, Plannerly ISO 19650, `kavram-haritasi.html`, `Issue-ve-BCF-Hafta10-Notu.pdf`, UK BIM Framework / ISO 19650.*
