import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    const element = document.getElementById('hizmetler');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="anasayfa" className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Video with Industrial Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://cdn.pixabay.com/video/2019/06/06/23923-340874612_large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Industrial Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)'
        }}></div>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
      </div>

      {/* Content - Industrial Style */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-5xl transition-all duration-1000 transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-block bg-orange-500 text-white px-6 py-2 text-sm font-bold mb-6 uppercase tracking-wider">
            TSE YETKİLİ MUAYENE MERKEZİ
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
            ADR Araç Muayene ve Tamirat Merkezi
          </h1>

          {/* Orange Line */}
          <div className="h-1 w-32 bg-orange-500 mb-8"></div>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Tehlikeli madde taşıyan araçların T9 Belgesi, ara muayene, periyodik muayene 
            ve tamirat işlemlerinde TSE yetkili profesyonel hizmet.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={handleButtonClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 uppercase tracking-wider"
            >
              HİZMETLERİMİZ
            </button>
            <Link
              to="/adr-muayene"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 uppercase tracking-wider text-center"
            >
              ADR MUAYENE
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;


