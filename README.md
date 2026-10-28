# BIM Yolculuğu

İnşaat mühendisliği öğrencisi olarak BIM öğrenme sürecimi hafta hafta belgelediğim kişisel öğrenme ve portföy sitesi. Her hafta bir araç ya da kavram, ekran görüntüleri, kısa anlatım notları ve tamamlanan eğitimlerin sertifikaları.

🌐 **Canlı site:** [elifrabiakirlii.github.io/bim-yolculugu](https://elifrabiakirlii.github.io/bim-yolculugu/)  
🏫 **İTÜ adresi:** [web.itu.edu.tr/kirli22](https://web.itu.edu.tr/kirli22/)

## İçerik

| Konu | Neler var |
| --- | --- |
| BIM temelleri, openBIM | BIM kavramları, IFC, BCF ve veri standartları |
| Revit | Temeller, yapısal elemanlar, aileler (families), metraj ve çizelgeler, donatı |
| Civil 3D | Yüzey, yol ekseni, boy kesit, enkesit ve kazı–dolgu hacimleri |
| Navisworks | Federe model, çakışma kontrolü (clash detection), raporlama |
| Forma / ACC | Ortak veri ortamı (CDE), sürüm karşılaştırma, metraj (takeoff) |
| ISO 19650 | Kavramlar ve öğrenci projesi için mini BEP örneği |
| Dynamo + IFC | Revit'te otomatik numaralandırma (Mark) ve IFC dışa aktarma |
| Portföy | Sertifikalar, CV ve haftalık derlemeler |

## Site hakkında

- Saf **HTML, CSS ve JavaScript** ile yazıldı; herhangi bir framework ya da derleme adımı yok.
- **Türkçe / İngilizce** dil seçeneği ve iki renk teması var.
- Haftalık içerik `content.js` dosyasında veri olarak tutuluyor, `app.js` sayfayı bu veriden oluşturuyor.

## Klasör yapısı

```
index.html      Ana sayfa
styles.css      Tasarım
content.js      Haftalık içerik (TR/EN)
app.js          Sayfayı içerikten oluşturan kod
articles/       Uzun anlatım yazıları (Revit)
assets/         Ekran görüntüleri, notlar (PDF/MD/DOCX), sertifikalar, CV
```

## Bilgisayarda açmak

Repoyu indirip `index.html` dosyasını tarayıcıda açman yeterli. `main` branch'ine yapılan her push, GitHub Pages üzerinden siteyi otomatik günceller.

## Not

Notlar ve anlatımlar bana aittir. Bağlantı verilen eğitimler, yazılımlar ve örnek modeller ilgili sahiplerine (Autodesk, buildingSMART vb.) aittir; sertifikalar kendi adıma düzenlenmiştir.
