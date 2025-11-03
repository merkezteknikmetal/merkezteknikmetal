# Kurulum Notları - Merkez Teknik Metal

## ⚠️ Manuel Dosya Kopyalama

Aşağıdaki dosyaları `public` klasörüne manuel olarak kopyalamanız gerekmektedir:

1. **mtmLOGO.png** → `public/mtmLOGO.png` (Navbar için)
2. **ADR kamyon fotoğrafı** → `public/adr-truck.jpg` (ADR Muayene sayfası için)

### Adımlar:

1. Proje ana dizinindeki `mtmLOGO.png` dosyasını kopyalayın
2. `public` klasörüne yapıştırın
3. ADR kamyon fotoğrafınızı `adr-truck.jpg` olarak `public` klasörüne kaydedin

## 🚀 Projeyi Çalıştırma

```bash
# Bağımlılıkları yükleyin (React Router dahil)
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` açılacaktır.

## 📦 Production Build

```bash
# Build oluşturun
npm run build

# Build'i test edin
npm run preview
```

## ✅ Tamamlanan Özellikler

### Genel
✅ React Router kurulumu
✅ Çok sayfalı (multi-page) yapı
✅ Layout component (Navbar + Footer)
✅ Responsive tasarım (Mobile & Desktop)
✅ Modern gradient tasarımlar

### Ana Sayfa (/)
✅ Hero section (video background)
✅ Placeholder bölümler (Kurumsal, Hizmetler, Projeler, İletişim)
✅ Smooth scrolling

### ADR'li Muayene Sayfası (/adr-muayene)
✅ **Ayrı sayfa olarak kurumsal şık tasarım**
✅ Premium hero section (gradient background)
✅ TSE Araç Kontrol Merkezi detayları
✅ T9 Belgesi, Ara Muayene, Periyodik Muayene bilgileri
✅ Servis kartları (hover efektleri)
✅ İki ayrı evrak listesi (grid layout)
✅ Call-to-action butonlar
✅ Profesyonel ikonlar ve görseller

### Navbar
✅ Logo entegrasyonu
✅ React Router Link ve anchor link desteği
✅ Scroll efekti (transparent → solid)
✅ Mobile hamburger menü

## 🗂️ Site Yapısı

### Sayfalar
- **Ana Sayfa** (`/`)
- **ADR'li Muayene** (`/adr-muayene`) - Ayrı sayfa, kurumsal tasarım

### Menü
- Anasayfa → Ana sayfaya git
- Kurumsal → Ana sayfa anchor
- Hizmetler → Ana sayfa anchor
- **ADR'li Muayene** → Ayrı sayfa (premium tasarım)
- Projeler → Ana sayfa anchor
- İletişim → Ana sayfa anchor

## 🎨 Tasarım Notları

ADR Muayene sayfası özellikle kurumsal şık bir tasarıma sahiptir:
- Gradient hero section
- Premium servis kartları (hover animasyonları)
- Modern badge'ler (60 dk, 3 yıl, 6 yıl)
- İki renkli evrak listeleri (mavi & yeşil)
- Pattern background efektleri
- Call-to-action bölümü

## 🔧 Geliştirme Devam

İlerleye dönük eklenebilecekler:
- Kurumsal sayfası (hakkımızda, vizyon, misyon)
- Hizmetler detay sayfaları
- Projeler galerisi
- İletişim formu (email entegrasyonu)
- Blog/Haberler bölümü

