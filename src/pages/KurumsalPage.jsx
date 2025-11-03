import { useState } from 'react';
import { useEffect } from 'react';

const KurumsalPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Belgeler - Fotoğrafları buraya ekleyeceksiniz
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
      image: '/belgeler/iso9001.jpg',
      description: 'Kalite Yönetim Sistemi'
    },
    {
      id: 3,
      title: 'ISO 14001 Belgesi',
      category: 'ISO',
      image: '/belgeler/iso14001.jpg',
      description: 'Çevre Yönetim Sistemi'
    },
    {
      id: 4,
      title: 'ISO 45001 Belgesi',
      category: 'ISO',
      image: '/belgeler/iso45001.jpg',
      description: 'İş Sağlığı ve Güvenliği Yönetim Sistemi'
    }
  ];

  // Anchor link için scroll handling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImage]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 border-b-4 border-orange-500">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 text-xs font-bold mb-2 uppercase tracking-wider">
              KURUMSAL
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide">Kurumsal</h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Hakkımızda Section */}
      <section id="hakkimizda" className="py-12 bg-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Hakkımızda</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto"></div>
          </div>

          {/* Tanıtım */}
          <div className="bg-white border-l-8 border-orange-500 shadow-xl p-8 md:p-12 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-gray-900">Merkez Teknik Metal</span>, Türk Standartları Enstitüsü (TSE) 
              tarafından yetkilendirilmiş ADR Araç Muayene ve Tamirat Merkezi olarak hizmet vermektedir.
            </p>
          
            <p className="text-lg text-gray-600 leading-relaxed">
              Tehlikeli madde taşıyan araçların muayene, kontrol ve tamirat işlemlerinde uzman kadromuz ve 
              modern ekipmanlarımızla güvenli, hızlı ve profesyonel hizmet sunuyoruz.
            </p>
          </div>

          {/* Vizyon, Misyon, Değerler */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vizyonumuz */}
            <div className="bg-gray-800 border-t-4 border-orange-500 shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-center text-orange-500">Vizyonumuz</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Türkiye'nin en güvenilir ve tercih edilen ADR araç muayene merkezi olarak, 
                sektörde öncü bir konumda yer almak ve müşteri memnuniyetinde standartları belirlemek.
              </p>
            </div>
            
            {/* Misyonumuz */}
            <div className="bg-gray-800 border-t-4 border-yellow-500 shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-center text-yellow-500">Misyonumuz</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                TSE standartlarında, güvenli, hızlı ve kaliteli muayene hizmeti sunarak, 
                müşterilerimizin iş sürekliliğine katkıda bulunmak ve yol güvenliğini sağlamak.
              </p>
            </div>
            
            {/* Değerlerimiz */}
            <div className="bg-gray-800 border-t-4 border-red-500 shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-red-500 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-center text-red-500">Değerlerimiz</h3>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>Güvenlik ve kalite önceliği</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>Müşteri odaklı hizmet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>Profesyonellik ve uzmanlık</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>Sürekli gelişim ve yenilik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Belgelerimiz Section */}
      <section id="belgelerimiz" className="py-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
           
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Belgelerimiz</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto mb-6"></div>
          </div>

      
          <div className="mb-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {belgeler.map((belge) => (
                <div
                  key={belge.id}
                  className="bg-white border-4 border-gray-800 shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => setSelectedImage(belge)}
                >
                  {/* Belge Fotoğrafı */}
                  <div className="relative h-64 bg-gray-900 overflow-hidden">
                    <img
                      src={belge.image}
                      alt={belge.title}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-size="20"%3EBelge Fotoğrafı%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Belge Bilgileri */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        belge.category === 'TSE' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-yellow-500 text-gray-900'
                      }`}>
                        {belge.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {belge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {belge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        
        </div>
      </section>

      {/* Modal - Büyük Görüntüleme */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            {/* Kapat Butonu */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Büyük Görsel */}
            <div className="bg-white p-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KurumsalPage;
