# Merkez Teknik Metal - Website

Modern ve profesyonel bir şekilde tasarlanmış Merkez Teknik Metal web sitesi. React + TailwindCSS + React Router ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🎬 Fullscreen video background
- 📱 Mobile-friendly hamburger menü
- 🎨 Smooth scrolling ve fade-in animasyonlar
- 🌐 Türkçe içerik
- ⚡ Vite ile hızlı geliştirme ortamı
- 🎯 TailwindCSS ile özelleştirilebilir stil
- 🔀 React Router ile çok sayfalı yapı
- 💼 Kurumsal şık tasarım (ADR Muayene sayfası)

## 📋 Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

## 🏃 Çalıştırma

Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## 📦 Production Build

Production için build almak:
```bash
npm run build
```

Build dosyaları `dist` klasöründe oluşturulacaktır.

Build'i preview etmek için:
```bash
npm run preview
```

## 🌐 Netlify'a Deploy

1. Netlify hesabınıza giriş yapın
2. "New site from Git" veya "Deploy manually" seçin
3. Manuel deploy için:
   - `npm run build` komutunu çalıştırın
   - `dist` klasörünü Netlify'a sürükleyin

4. Git üzerinden deploy için:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📁 Proje Yapısı

```
merkez-teknik-metal/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navbar bileşeni (router & scroll effect)
│   │   ├── Hero.jsx          # Hero section (video background & animations)
│   │   └── Layout.jsx        # Ana sayfa düzeni (Navbar + Footer)
│   ├── pages/
│   │   ├── Home.jsx          # Ana sayfa
│   │   └── ADRMuayenePage.jsx # ADR Muayene sayfası (ayrı sayfa)
│   ├── App.jsx               # Router yapılandırması
│   ├── main.jsx              # React giriş noktası
│   └── index.css             # Tailwind CSS ve global stiller
├── public/
│   ├── mtmLOGO.png           # Şirket logosu
│   └── adr-truck.jpg         # ADR kamyon fotoğrafı
├── index.html                # HTML şablonu
├── package.json              # Proje bağımlılıkları (React Router dahil)
├── vite.config.js            # Vite yapılandırması
├── tailwind.config.js        # Tailwind yapılandırması
└── postcss.config.js         # PostCSS yapılandırması
```

## 🎨 Sayfalar ve Bileşenler

### Ana Sayfa (/)
- **Hero Section**: Fullscreen video background, fade-in animasyonlar
- **Kurumsal**: Şirket hakkında (placeholder)
- **Hizmetler**: Sunulan hizmetler (placeholder)
- **Projeler**: Tamamlanan projeler (placeholder)
- **İletişim**: İletişim bilgileri

### ADR'li Muayene Sayfası (/adr-muayene)
- 🏆 **Premium kurumsal tasarım**
- 🎯 TSE Araç Kontrol Merkezi bilgilendirmesi
- 📊 T9 Belgesi, Ara Muayene, Periyodik Muayene detayları
- ✅ Muayene merkezinde yapılan işlemler
- 📋 Gerekli evraklar (İlk Muayene & Periyodik Muayene)
- 🎨 Gradient tasarımlar ve modern UI
- 📸 Fotoğraf galeri entegrasyonu

### Navbar
- React Router entegrasyonu
- Logo ile ana sayfaya dönüş
- Desktop: Yatay menü
- Mobile: Hamburger menü
- Hem sayfa linkler hem anchor linkler

### Layout
- Ortak navbar ve footer yapısı
- Tüm sayfalarda tutarlı görünüm

## 🎯 Geliştirme Notları

- Font: Google Fonts'tan Montserrat kullanılmaktadır
- Video: Pixabay'den endüstriyel video (autoplay, loop, muted)
- Responsive: Mobile-first yaklaşımla tasarlanmıştır
- Animasyonlar: Tailwind transitions ve transforms kullanılarak yapılmıştır

## 📝 Lisans

© 2025 Merkez Teknik Metal. Tüm hakları saklıdır.


