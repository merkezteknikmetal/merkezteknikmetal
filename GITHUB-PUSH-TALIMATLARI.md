# GitHub'a Push ve Netlify Deploy Talimatları

## 1️⃣ Git Repository Oluşturma ve Push

Terminal/PowerShell'de proje klasöründe şu komutları çalıştır:

```bash
# Git repository'yi başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - Merkez Teknik Metal website"

# GitHub remote'u ekle
git remote add origin https://github.com/merkezteknikmetal/merkezteknikmetal.git

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'a push yap
git push -u origin main
```

**Not:** Eğer GitHub'da repository henüz oluşturulmadıysa, önce GitHub'da boş bir repository oluştur.

---

## 2️⃣ Netlify Deployment

### Yöntem A: GitHub ile Otomatik Deploy (Önerilen)

1. **Netlify'e Git:**
   - https://www.netlify.com adresine git
   - "Add new site" → "Import an existing project" tıkla

2. **GitHub Bağlantısı:**
   - "GitHub" seçeneğini seç
   - GitHub hesabını bağla
   - `merkezteknikmetal/merkezteknikmetal` repository'sini seç

3. **Build Ayarları:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (boş bırak)

4. **Deploy:**
   - "Deploy site" butonuna tıkla
   - İlk deploy otomatik başlayacak (2-3 dakika)

5. **Otomatik Deploy:**
   - Artık GitHub'a push yaptığın her seferde Netlify otomatik deploy edecek! 🚀

---

### Yöntem B: Manuel Deploy (Drag & Drop)

1. **Build Al:**
   ```bash
   npm run build
   ```
   
2. **Netlify'e Git:**
   - https://app.netlify.com/drop adresine git
   - `dist` klasörünü sürükle-bırak

---

## 3️⃣ Netlify Ayarları (Opsiyonel)

### Custom Domain Ekleme:
1. Netlify Dashboard → Site settings → Domain management
2. "Add custom domain" tıkla
3. Domain adresini gir (örn: `www.merkezteknikmetal.com`)

### Environment Variables (Gerekirse):
- Site settings → Environment variables
- API key'ler vs. buraya eklenebilir

---

## 4️⃣ Önemli Notlar

✅ **GitHub'a push yaparken:**
- `node_modules` klasörü `.gitignore`'da olduğu için push edilmeyecek (çok büyük)
- Sadece kaynak kodlar push edilecek

✅ **Netlify Build:**
- Her deploy'da Netlify otomatik olarak `npm install` ve `npm run build` çalıştırır
- Production-ready `dist` klasörü oluşturulur

✅ **Domain:**
- Netlify otomatik bir subdomain verir: `merkezteknikmetal.netlify.app`
- Bu domain'i değiştirebilirsin: Site settings → Change site name

---

## 🐛 Sorun Giderme

**"git is not recognized" hatası:**
- Git'i yükle: https://git-scm.com/download/win
- Terminal'i kapatıp yeniden aç

**"Authentication failed" hatası:**
- GitHub'a giriş yapmayı dene
- Personal Access Token kullan (Settings → Developer settings → Personal access tokens)

**Build başarısız oluyor:**
- Netlify build logs'u kontrol et
- `package.json`'da tüm dependencies'in olduğundan emin ol

---

## 📞 Yardım

Sorun olursa:
1. Netlify build logs'u kontrol et
2. GitHub repository'nin public olduğundan emin ol
3. Build command ve publish directory'nin doğru olduğundan emin ol

