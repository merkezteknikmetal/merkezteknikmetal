# 📸 SLIDER KULLANIM REHBERİ

## ✅ Temiz & Minimal Slider Hazır!

Üzerinde yazı olmayan, sadece görsel odaklı profesyonel slider kuruldu!

---

## 🎯 Özellikler:

✅ **Temiz Tasarım** - Yazısız, sadece görsel
✅ **Otomatik Geçiş** - 6 saniye aralıklarla
✅ **Manuel Kontrol** - Ok tuşları (← →)
✅ **Dot Navigation** - Alt kısımda noktalar
✅ **Smooth Animasyon** - Fade-in/fade-out
✅ **Responsive** - Mobil, tablet, desktop uyumlu
✅ **Video Desteği** - Hem fotoğraf hem video eklenebilir
✅ **Minimal Overlay** - Çok hafif karartma (görsel netliği korunur)
✅ **Sayfa Sayacı** - Sağ üstte (1/4, 2/4, vb.)

---

## 📁 Fotoğraflar Nerede?

Fotoğraflar zaten eklenmiş:
```
public/resimler/
  ├── slider1.jpeg ✅
  ├── slider2.jpeg ✅
  ├── slider3.jpeg ✅
  └── slider4.jpg  ✅
```

---

## 🎥 Video Eklemek İsterseniz:

### 1. Video Dosyasını Ekle:
```
public/resimler/
  └── video1.mp4  ← Buraya koy
```

### 2. Kodu Güncelle:
`src/components/MediaSlider.jsx` dosyasını aç ve `slides` array'ine ekle:

```javascript
const slides = [
  {
    type: 'image',
    src: '/resimler/slider1.jpeg',
    alt: 'Merkez Teknik Metal - Görsel 1'
  },
  {
    type: 'video',  // ← Video tipi
    src: '/resimler/video1.mp4',  // ← Video yolu
    alt: 'Merkez Teknik Metal - Video'
  },
  // ... diğer slider'lar
];
```

---

## 📏 Slider Boyutları:

- **Mobil**: 400px yükseklik
- **Tablet**: 500px yükseklik
- **Desktop**: 650px yükseklik

### Boyutu Değiştirmek İçin:
`src/components/MediaSlider.jsx` dosyasında satır 72:
```javascript
<div className="relative h-[400px] md:h-[500px] lg:h-[650px]">
```

---

## 🎨 Tasarım Detayları:

### Ok Butonları:
- Yarı saydam siyah arka plan (blur efekti)
- Hover'da turuncu olur
- Smooth geçişler

### Dot Navigation:
- Yarı saydam siyah kutu içinde
- Aktif nokta: Turuncu, uzun
- Pasif noktalar: Beyaz, küçük
- Blur efekti

### Overlay:
- Çok hafif (10% siyah)
- Görselleri gölgelemez
- Butonların görünürlüğü için

---

## ⚙️ Ayarlar:

### Otomatik Geçiş Hızı:
`src/components/MediaSlider.jsx` satır 44:
```javascript
}, 6000); // ← 6000 = 6 saniye
```

### Daha Fazla Slider Eklemek:
`slides` array'ine yeni obje ekle:
```javascript
{
  type: 'image',
  src: '/resimler/slider5.jpg',
  alt: 'Açıklama'
}
```

---

## 📍 Sayfa Düzeni:

```
1. Hero (Video background + CTA)
2. 🆕 Media Slider ← Temiz, yazısız
3. Kurumsal
4. Hizmetler
5. Projeler
6. İletişim
```

---

## 🎥 Video Önerileri:

### Video Özellikleri:
- **Format**: MP4 (H.264 codec)
- **Çözünürlük**: 1920x1080 (Full HD)
- **Dosya Boyutu**: Max 5-10MB (web için optimize)
- **Süre**: 10-30 saniye (kısa ve etkili)

### Video İçin İpuçları:
- ✅ Şirket tanıtımı
- ✅ Muayene süreci
- ✅ Ekipman gösterimi
- ✅ Tesis turu
- ⚠️ Çok uzun videodan kaçının
- ⚠️ Ses otomatik kapalı (muted)

---

## 🚀 Kullanım:

Slider zaten aktif ve çalışıyor! 

- Otomatik 6 saniyede bir değişiyor
- Ok tuşlarıyla manuel geçiş yapabilirsin
- Noktalara tıklayarak direkt slide'a gidebilirsin
- Video eklemek istersen yukarıdaki talimatları takip et

---

## 💡 Öneriler:

1. **Fotoğraflar net ve kaliteli olsun**
2. **Yatay formatta çekim yapın** (16:9 oran)
3. **İyi aydınlatılmış görüntüler** kullanın
4. **Benzer renk paletinde** görseller uyumlu olur
5. **Max 6-8 slider** yeterli (çok fazla uzun olur)

---

## ✨ Sonuç:

Slider sistemi hazır ve profesyonel! Görseller temiz ve net görünüyor, üzerinde yazı yok. Video eklemek istersen de hazır! 📸🎥

