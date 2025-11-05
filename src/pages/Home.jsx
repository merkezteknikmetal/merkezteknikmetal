import SEO from '../components/SEO';
import MediaSlider from '../components/MediaSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <SEO
        title="Merkez Teknik Metal - TSE Yetkili ADR Araç Muayene ve Tamirat Merkezi"
        description="TSE yetkili ADR araç muayene merkezi. T9 belgesi, ara muayene, periyodik muayene ve tamirat hizmetleri. Profesyonel ve güvenilir çözümler ile hizmetinizdeyiz."
        keywords="ADR muayene, T9 belgesi, ara muayene, periyodik muayene, TSE muayene, tehlikeli madde taşıma, ADR tamirat, araç muayene merkezi, Türkiye, TSE yetkili muayene"
        url="/"
        image="/mtmLOGO.png"
      />
      
      {/* Full Screen Hero with Slider */}
      <div className="min-h-screen bg-gray-900 flex items-center pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Sol: Başlık ve Açıklama */}
            <div className="text-white order-2 lg:order-1">
              <div className="inline-block bg-orange-500 text-white px-3 py-1 text-xs font-bold mb-3 uppercase tracking-wider">
                TSE YETKİLİ MUAYENE MERKEZİ
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 uppercase tracking-wide leading-tight">
                ADR Araç Muayene ve Tamirat Merkezi
              </h1>
              <div className="h-1 w-20 lg:w-24 bg-orange-500 mb-4 lg:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                Tehlikeli madde taşıyan araçların T9 Belgesi, ara muayene, periyodik muayene 
                ve tamirat işlemlerinde TSE yetkili profesyonel hizmet sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link
                  to="/hizmetler"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 text-center transition-all duration-300 uppercase tracking-wider text-sm lg:text-base"
                >
                  HİZMETLERİMİZ
                </Link>
                <Link
                  to="/iletisim"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 text-center transition-all duration-300 uppercase tracking-wider text-sm lg:text-base"
                >
                  İLETİŞİM
                </Link>
              </div>
            </div>
            
            {/* Sağ: Slider - Responsive */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-800 border-2 lg:border-4 border-orange-500 shadow-2xl overflow-hidden max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <MediaSlider compact={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
