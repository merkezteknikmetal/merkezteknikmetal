import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MediaSlider = ({ compact = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Slider medya dosyaları - Hem fotoğraf hem video destekli
  const slides = [
    {
      type: 'image', // 'image' veya 'video'
      src: '/resimler/slider1.svg',
      alt: 'Merkez Teknik Metal - Görsel 1'
    },
    {
      type: 'image', // 'image' veya 'video'
      src: '/resimler/slider2.svg',
      alt: 'Merkez Teknik Metal - Görsel 2'
    }
   ,   {
    type: 'image', // 'image' veya 'video'
    src: '/resimler/slider3.svg',
    alt: 'Merkez Teknik Metal - Görsel 3'
  }
 
 
 
   
 
  
    // Video eklemek için:
    // {
    //   type: 'video',
    //   src: '/resimler/video1.mp4',
    //   alt: 'Merkez Teknik Metal - Video'
    // }
  ];

  // Fade-in animasyonu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Otomatik geçiş (6 saniye)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Klavye ok tuşlarıyla slider kontrolü
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleButtonClick = () => {
    // Hizmetler sayfasına yönlendir
    navigate('/hizmetler');
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // 10 saniye sonra otomatik oynatmayı tekrar başlat
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className={`relative bg-gray-900 overflow-hidden w-full ${compact ? '' : ''}`}>
      {/* Slider Container - Responsive */}
      <div className={`relative w-full ${compact ? 'aspect-[3/4] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]' : 'aspect-video max-h-screen'}`}>
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Render Image or Video */}
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback: resim bulunamazsa placeholder göster
                  e.target.src = 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1920';
                }}
              />
            ) : (
              <video
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            
            {/* Subtle dark overlay - çok hafif */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              index === 0 && !compact ? 'bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80' : 'bg-black/10'
            }`}></div>
            
            {/* Hero Yazıları - Sadece ilk slide'da ve compact değilse */}
            {index === 0 && !compact && (
              <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight uppercase tracking-wide">
                    ADR Araç Muayene ve Tamirat Merkezi
                  </h1>

                  {/* Orange Line */}
                  <div className="h-1 w-24 bg-orange-500 mb-6"></div>

                  {/* Subheadline */}
                  <p
                    className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl transition-all duration-1000 delay-300 ${
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
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 text-base md:text-lg transition-all duration-300 uppercase tracking-wider"
                    >
                      HİZMETLERİMİZ
                    </button>
                    <Link
                      to="/adr-muayene"
                      className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 text-base md:text-lg transition-all duration-300 uppercase tracking-wider text-center"
                    >
                      ADR MUAYENE
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows - Compact modda gizli */}
        {!compact && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-orange-500 text-white p-2 sm:p-3 md:p-4 transition-all duration-300 group"
              aria-label="Önceki"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-orange-500 text-white p-2 sm:p-3 md:p-4 transition-all duration-300 group"
              aria-label="Sonraki"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Navigation */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2 md:gap-3 bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5 md:h-3 bg-orange-500 shadow-lg'
                  : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Slayt ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Compact modda gizli */}
        {!compact && (
          <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-30 bg-black/40 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-bold rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaSlider;

