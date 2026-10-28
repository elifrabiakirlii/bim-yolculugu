# Civil 3D — Hafta 8: Enkesit + Cut/Fill Hacim

Hafta 7 iskeleti üzerine:

**Sample Lines → Section Views → Compute Materials → Volume Table**

PDF: [`assets/civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf`](../civil3d/Civil3D-Hafta8-Enkesit-ve-Hacim.pdf)

---

## Kavramlar

| Kavram | Anlamı |
|--------|--------|
| **Sample Line** | Yol üzerinde “şuradan kes” çizgisi |
| **Section View** | Enkesit grafiği (yola dik) |
| **EG / FG** | Mevcut zemin / tasarım zemini |
| **Cut / Fill** | Kazı m³ / dolgu m³ |
| **DATUM** | Cut-Fill şablonunda tasarım yuvası → Object Name’de FG seçilir |

Boykesit (Profile) uzunlamasına bakar; enkesit bir istasyonda enine bakar.

---

## Adımlar (YOL1 / SL-YOL1)

1. Sample Lines → YOL1 → SL-YOL1 → istasyon 0,20,40,60,80 (±20 m)
2. Create Section View + Create Multiple Section Views
3. Create Surface `FG` (düz kot ~101) → Point groups
4. SL-YOL1 Properties → Sections → Sample more sources → FG
5. Compute Materials: EG→EG, DATUM→FG
6. Total Volume Table

Örnek sonuç: kümülatif ~73 m³ cut, ~18 m³ fill (0+080).

---

## Kanıt

`assets/civil3d/10–22` ekran görüntüleri.
