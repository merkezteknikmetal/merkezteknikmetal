import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';

const ADRMuayenePage = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showPriceList, setShowPriceList] = useState(false);

  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <SEO
        title="ADR Muayene Merkezi - T9 Belgesi, Ara Muayene, Periyodik Muayene | Merkez Teknik Metal"
        description="TSE yetkili ADR muayene merkezi. T9 belgesi, ara muayene (3 yıl), periyodik muayene (6 yıl) hizmetleri. Gerekli evraklar ve fiyat listesi. Randevu için iletişime geçin."
        keywords="ADR muayene merkezi, T9 belgesi, ara muayene 3 yıl, periyodik muayene 6 yıl, TSE araç kontrol merkezi, ADR evraklar, muayene fiyat listesi, randevu"
        url="/adr-muayene"
        image="/adr-truck.jpg"
      />
      {/* Hero Section - Industrial Style */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 border-b-4 border-orange-500">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 text-sm font-bold mb-4">
                TSE YETKİLİ KURULUŞ
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">ADR'li Muayene Merkezi</h1>
              <p className="text-lg text-gray-300 mb-6">
                Tehlikeli Madde Taşıyan Araçlar İçin Profesyonel Muayene ve Belgelendirme Hizmetleri
              </p>
          
            </div>
            <div className="flex-shrink-0">
              <svg className="w-32 h-32 text-orange-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Industrial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden border-4 border-gray-800">
            <img
              src="/adr-truck.jpg"
              alt="ADR Tehlikeli Madde Taşıyan Araç"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">Tehlikeli Madde Taşıma</p>
            </div>
          </div>
          <div className="relative group overflow-hidden border-4 border-gray-800 cursor-pointer" onClick={() => setShowCertificate(true)}>
            <img
              src="/yetki belgesi.jpg"
              alt="TSE Yetki Belgesi"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-orange-500 text-white px-6 py-3 font-bold text-lg">YETKİ BELGESİ GÖRÜNTÜLE</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">TSE Yetki Belgesi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* TSE Araç Kontrol Merkezi - Industrial Style */}
        <div className="bg-white border-l-8 border-orange-500 shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gray-800 flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                TSE Araç Kontrol Merkezi
              </h2>
              <div className="h-1 w-32 bg-orange-500 mb-6"></div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-gray-800 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Türk Standartları Enstitüsü'nün (TSE) yetkilendirmiş olduğu firmamız, <span className="font-bold text-gray-900">Tehlikeli Madde Taşıyan Araçlara Yönelik Muayene</span> işlemlerini en yüksek standartlarda gerçekleştirmektedir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Muayene Merkezimizde; <span className="font-bold">ADR Araç Uygunluk Belgesi Hizmeti, İlk Muayene, Ara Muayene, Periyodik Muayene</span> ve benzeri araç kontrol hizmetlerini profesyonel ekibimizle sunmaktayız.
            </p>
          </div>
          
          {/* Fiyat Listesi Butonu */}
          <button
            onClick={() => setShowPriceList(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 w-full md:w-auto text-lg transition-colors flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            2025 FİYAT LİSTESİNİ GÖRÜNTÜLE
          </button>
        </div>

        {/* Services Grid - Industrial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Araç Uygunluk Muayenesi */}
          <div className="bg-gray-800 border-t-4 border-orange-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-14 h-14 bg-orange-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">T9 Belgesi</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tehlikeli Madde Taşıyan Taşıtlar için ADR Araç Uygunluk Belgesi. Her yıl alınması zorunlu belgedir.
            </p>
            <div className="bg-gray-900 border-l-4 border-orange-500 p-4">
            <p className="text-sm font-semibold text-yellow-500">📅 PERİYOT</p>
              <p className="text-4xl font-bold mt-2">1 <span className="text-xl">YIL</span></p>
            </div>
          </div>

          {/* Ara Muayene */}
          <div className="bg-gray-800 border-t-4 border-yellow-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Ara Muayene</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              TSE yetkilendirmeli Muayene Merkezimizde tehlikeli madde taşıyan tanklar için ara muayene hizmeti.
            </p>
            <div className="bg-gray-900 border-l-4 border-yellow-500 p-4">
              <p className="text-sm font-semibold text-yellow-500">📅 PERİYOT</p>
              <p className="text-4xl font-bold mt-2">3 <span className="text-xl">YIL</span></p>
            </div>
          </div>

          {/* Periyodik Muayene */}
          <div className="bg-gray-800 border-t-4 border-red-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-14 h-14 bg-red-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Periyodik Muayene</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tehlikeli madde taşıyan tankların kapsamlı periyodik muayene işlemleri profesyonelce gerçekleştirilir.
            </p>
            <div className="bg-gray-900 border-l-4 border-red-500 p-4">
              <p className="text-sm font-semibold text-red-500">📅 PERİYOT</p>
              <p className="text-4xl font-bold mt-2">6 <span className="text-xl">YIL</span></p>
            </div>
          </div>
        </div>

        {/* İşlemler Listesi - Industrial */}
        <div className="bg-gray-800 border-l-8 border-orange-500 shadow-xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold mb-8 uppercase tracking-wider border-b-2 border-orange-500 pb-4">Muayene Merkezimizde Yapılan İşlemler</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'T9 Belgesi (ADR Araç Uygunluk Belgesi)',
              'Araç Muayene',
              'Periyodik Muayene',
              'Tamirat / Tadilat'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-gray-900 border-l-4 border-orange-500 p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold uppercase text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Evraklar Section - Industrial */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 uppercase tracking-wider">Gerekli Belgeler ve Evraklar</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Periyodik Muayene Evrakları */}
            <div className="bg-white shadow-xl overflow-hidden border-t-4 border-orange-500">
              <div className="bg-gray-800 p-6">
                <h4 className="text-2xl font-bold text-white flex items-center uppercase tracking-wider">
                  <svg className="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  Periyodik Muayene
                </h4>
              </div>
              <div className="p-6 bg-gray-50">
                <ul className="space-y-2">
                  {[
                    'Ruhsat',
                    'Fenni Muayene',
                    'Eski T9 Belgesi',
                    'Tank Muayene Sertifikası',
                    'Tehlikeli Madde Atık Poliçesi',
                    'Lisanslı Yıkama Belgesi',
                    'Gass Free Belgesi'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center p-3 bg-white border-l-4 border-orange-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 flex items-center justify-center mr-3 font-bold text-white">
                        {index + 1}
                      </div>
                      <span className="text-gray-900 font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* İlk Muayene Evrakları */}
            <div className="bg-white shadow-xl overflow-hidden border-t-4 border-yellow-500">
              <div className="bg-gray-800 p-6">
                <h4 className="text-2xl font-bold text-white flex items-center uppercase tracking-wider">
                  <svg className="w-8 h-8 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  İlk Muayene
                </h4>
              </div>
              <div className="p-6 bg-gray-50">
                <ul className="space-y-2">
                  {[
                    'Ruhsat',
                    'Fenni Muayene',
                    'R-105 Beyanı',
                    'R-111 Beyanı',
                    'AT Uygunluk',
                    'Tehlikeli Madde Atık Poliçesi',
                    'Durum Tespit Belgesi'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center p-3 bg-white border-l-4 border-yellow-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 flex items-center justify-center mr-3 font-bold text-gray-900">
                        {index + 1}
                      </div>
                      <span className="text-gray-900 font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Industrial */}
        <div className="bg-gray-800 border-t-4 border-orange-500 shadow-xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Detaylı Bilgi ve Randevu İçin</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            T9 İncelemesi, Taşıt Uygunluk, Ara Muayene ve Periyodik Muayene hizmetlerimiz hakkında 
            daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="inline-block bg-orange-500 text-white font-bold px-8 py-4 hover:bg-orange-600 transition-all duration-200"
            >
              İLETİŞİME GEÇİN
            </Link>
            <Link
              to="/"
              className="inline-block bg-gray-700 text-white font-bold px-8 py-4 hover:bg-gray-600 transition-all duration-200"
            >
              ANA SAYFAYA DÖN
            </Link>
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowCertificate(false)}>
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-12 right-0 bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600 transition-colors"
            >
              KAPAT ✕
            </button>
            <div className="bg-white p-2">
              <img
                src="/yetki belgesi.jpg"
                alt="TSE Yetki Belgesi"
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      {/* Price List Modal */}
      {showPriceList && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowPriceList(false)}>
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setShowPriceList(false)}
              className="absolute -top-12 right-0 bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600 transition-colors"
            >
              KAPAT ✕
            </button>
            <div className="bg-white p-2">
              <img
                src="/2025fiyatlistesi.jpg"
                alt="2025 Fiyat Listesi"
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ADRMuayenePage;

