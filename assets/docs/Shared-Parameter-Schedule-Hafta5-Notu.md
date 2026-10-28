# Shared Parameter → Schedule (Hafta 5)

Tarih: 12 Eylül 2026  
Proje: BIMobject HAFELE KitchenEase — `Room-03.rvt`

## Amaç

Family / proje parametresinin **schedule sütununda** görünmesi. Normal family parametresi çoğu zaman listede çıkmaz; **Shared Parameter** ortak `.txt` tanımıyla hem Properties’te hem Schedule’da kullanılır.

## Adımlar (yapılan)

1. **Shared Parameters** dosyası: `Documents\Elif-SharedParams.txt`
   - Grup: `Furniture`
   - Parametre: `Marka_Kod` (Text)
2. **Project Parameters → Add** → Shared `Marka_Kod`
   - Instance
   - Kategoriler: Furniture (+ Casework / Specialty Equipment ihtiyaç halinde)
3. `Room-03` içinde dolap seçildi → Properties → `Marka_Kod` = `Ma-01` / `Ma-02`
4. **View → Schedules → Furniture Schedule**
   - Fields: Family and Type, Count, **Marka_Kod**
5. Sonuç: tabloda kodlar göründü

## Öğrenme cümlesi

Shared Parameter = parametreyi aile/proje arasında paylaşılabilir yapar → **Schedule’da sütun** olur. Bu, metraj / marka / üretici kodu gibi bilgileri listede toplamak için temel BIM pratiğidir.

## Kanıt (galeri)

- `assets/revit-family/17-shared-param-marka-kod-properties.png`
- `assets/revit-family/18-furniture-schedule-marka-kod.png`
