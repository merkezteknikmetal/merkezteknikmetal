# 📸 BELGE FOTOĞRAFI EKLEME REHBERİ

## ✅ Belgelerimiz Sayfası Hazır!

Belge fotoğraflarınızı eklemek için:

---

## 📁 Klasör Yapısı:

Belge fotoğraflarınızı şu klasöre ekleyin:
```
MERKEZ TEKNİK METAL SİTE/
  └── public/
      └── belgeler/
          ├── iso9001.jpg      ← ISO 9001 belgesi
          ├── iso14001.jpg     ← ISO 14001 belgesi
          └── iso45001.jpg     ← ISO 45001 belgesi
```

**Not:** `yetki belgesi.jpg` zaten `public/` klasöründe var, onu kullanıyoruz.

---

## 🎨 Sayfa Özellikleri:

### ✅ Belge Galerisi:
- Kartlar halinde görsel gösterim
- Hover efekti (büyüme + zoom ikonu)
- Tıkla → Modal'da büyük görüntüleme
- Kategoriler (TSE / ISO)
- Belge bilgileri (başlık, açıklama)

### ✅ Modal Görüntüleme:
- Tıklayınca tam ekran modal açılır
- Büyük görsel görüntüleme
- Kapat butonu (sağ üst X)
- Belge bilgileri altında

---

## 📝 Belge Ekleme:

### Adım 1: Fotoğrafları Hazırla
- **Format**: JPG veya PNG
- **Boyut**: 1920x1080px veya daha büyük (net görünsün)
- **Dosya Boyutu**: Max 2-3MB (optimize edin)

### Adım 2: Klasöre Ekle
```
public/belgeler/iso9001.jpg
public/belgeler/iso14001.jpg
public/belgeler/iso45001.jpg
```

### Adım 3: Kodu Güncelle (Opsiyonel)
`src/pages/BelgelerPage.jsx` dosyasında, `belgeler` array'ini düzenleyebilirsiniz:

```javascript
const belgeler = [
  {
    id: 1,
    title: 'TSE Yetki Belgesi',
    category: 'TSE',
    image: '/yetki belgesi.jpg',
    description: 'TSE Araç Muayene Merkezi Yetkilendirme Belgesi'
  },
  {
    id: 2,
    title: 'ISO 9001 Belgesi',
    category: 'ISO',
    image: '/belgeler/iso9001.jpg', // ← Dosya yolunu buraya yazın
    description: 'Kalite Yönetim Sistemi'
  },
  // ... diğer belgeler
];
```

---

## 🖼️ Mevcut Belgeler:

1. ✅ **TSE Yetki Belgesi** - `/yetki belgesi.jpg` (zaten var)
2. 🔲 **ISO 9001** - `/belgeler/iso9001.jpg` (ekleyeceksiniz)
3. 🔲 **ISO 14001** - `/belgeler/iso14001.jpg` (ekleyeceksiniz)
4. 🔲 **ISO 45001** - `/belgeler/iso45001.jpg` (ekleyeceksiniz)

---

## 🎯 Daha Fazla Belge Eklemek:

`belgeler` array'ine yeni obje ekleyin:

```javascript
{
  id: 5,
  title: 'Yeni Belge Adı',
  category: 'ISO', // veya 'TSE'
  image: '/belgeler/yeni-belge.jpg',
  description: 'Belge açıklaması'
}
```

---

## 📐 Grid Layout:

- **Mobil**: 1 sütun
- **Tablet**: 2 sütun
- **Desktop**: 3 sütun

---

## ✨ Özellikler:

- ✅ Hover efekti (kart büyür, zoom ikonu görünür)
- ✅ Modal popup (tıklayınca büyük görüntüleme)
- ✅ Kategori renkleri (TSE: Turuncu, ISO: Sarı)
- ✅ Fallback görsel (resim yoksa placeholder)
- ✅ Responsive tasarım
- ✅ Smooth animasyonlar

---

## 🚀 Test Et:

1. Fotoğrafları `public/belgeler/` klasörüne ekle
2. Tarayıcıyı yenile (Ctrl+F5)
3. Belgelerimiz sayfasına git
4. Fotoğraflar otomatik görünecek!

---

## 📍 Sayfa URL:

```
http://localhost:5173/belgelerimiz
```

veya navbar'dan: **Kurumsal → Belgelerimiz** 🖱️

---

## 💡 İpuçları:

- Fotoğrafları yüksek çözünürlükte çekin (net görünsün)
- Dosya isimlerini küçük harf ve tire ile yazın (`iso-9001.jpg`)
- JPG formatı tercih edin (daha küçük dosya)
- Fotoğrafları web için optimize edin (100-500KB ideal)

---

Başarılar! 🎉📸

