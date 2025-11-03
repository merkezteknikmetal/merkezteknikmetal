import { Link } from 'react-router-dom';

const HizmetlerPage = () => {
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
              HİZMETLERİMİZ
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide">Sunduğumuz Hizmetler</h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Hizmetler Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            TSE yetkili muayene merkezi olarak ADR araç muayene ve tamirat hizmetleri
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/adr-muayene" className="bg-gray-800 border-t-4 border-orange-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">T9 Belgesi</h3>
              <p className="text-gray-300 leading-relaxed">
                ADR Araç Uygunluk Belgesi (T9) muayenesi. Tehlikeli madde taşıyan araçlar için yıllık zorunlu belgelendirme hizmeti.
              </p>
              <div className="mt-4 text-orange-500 font-bold">
                → Detaylı Bilgi
              </div>
            </Link>
            
            <Link to="/adr-muayene" className="bg-gray-800 border-t-4 border-yellow-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Ara & Periyodik Muayene</h3>
              <p className="text-gray-300 leading-relaxed">
                Tehlikeli madde taşıyan tankların 3 yılda bir ara muayene ve 6 yılda bir periyodik muayene hizmetleri.
              </p>
              <div className="mt-4 text-yellow-500 font-bold">
                → Detaylı Bilgi
              </div>
            </Link>
            
            <div className="bg-gray-800 border-t-4 border-red-500 shadow-xl p-8 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-16 h-16 bg-red-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Tamirat & Tadilat</h3>
              <p className="text-gray-300 leading-relaxed">
                ADR araçlarının tamirat ve tadilat işlemleri. Profesyonel servis ve bakım hizmetleri.
              </p>
              <div className="mt-4 text-red-500 font-bold">
                → Hemen İletişime Geçin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Hizmetlerimiz Hakkında Detaylı Bilgi</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              ADR muayene randevusu almak ve hizmetlerimiz hakkında detaylı bilgi için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/adr-muayene"
                className="inline-block bg-white text-orange-600 font-bold px-8 py-4 hover:bg-gray-100 transition-all duration-200 uppercase tracking-wider"
              >
                MUAYENE İSTASYONU
              </Link>
              <Link
                to="/iletisim"
                className="inline-block bg-gray-800 text-white font-bold px-8 py-4 hover:bg-gray-700 transition-all duration-200 uppercase tracking-wider"
              >
                İLETİŞİME GEÇ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HizmetlerPage;

