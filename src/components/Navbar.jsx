import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '/', type: 'link' },
    {
      name: 'Kurumsal',
      type: 'dropdown',
      subLinks: [
        { name: 'Hakkımızda', href: '/kurumsal#hakkimizda' },
        { name: 'Belgelerimiz', href: '/kurumsal#belgelerimiz' }
      ]
    },
    { name: 'Hizmetler', href: '/hizmetler', type: 'link' },
    { name: 'İletişim', href: '/iletisim', type: 'link' },
    { name: 'Muayene İstasyonu', href: '/adr-muayene', type: 'link' },
  ];

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
    setIsKurumsalOpen(false);
    
    // Handle anchor links (like /kurumsal#hakkimizda)
    if (href && href.includes('#')) {
      const [path, hash] = href.split('#');
      
      if (location.pathname !== path) {
        // Navigate to page first, then scroll after delay
        e.preventDefault();
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      } else {
        // Already on the page, just scroll
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-gray-900 shadow-lg border-b-2 border-orange-500'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/mtmLOGO.png" 
                alt="Merkez Teknik Metal Logo" 
                className="h-16 md:h-20 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider leading-tight">
                  Merkez Teknik Metal
                </div>
                <div className="text-orange-500 text-xs md:text-sm font-semibold uppercase tracking-widest">
                  TSE Yetkili Muayene Merkezi
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.type === 'dropdown' ? (
                  // Dropdown Menu
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsKurumsalOpen(true)}
                    onMouseLeave={() => setIsKurumsalOpen(false)}
                  >
                    <button
                      className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isKurumsalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Content */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-gray-900 border-2 border-orange-500 shadow-2xl transition-all duration-300 ${
                      isKurumsalOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          onClick={(e) => handleLinkClick(e, subLink.href)}
                          className="block px-4 py-3 text-white hover:bg-orange-500 hover:text-white transition-all duration-200 border-b border-gray-700 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{subLink.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Link
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={
                      link.name === 'Muayene İstasyonu'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 border-orange-400 shadow-lg hover:shadow-xl hover:scale-105'
                        : 'text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
                    }
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          {navLinks.map((link) => (
            link.type === 'dropdown' ? (
              // Mobile Dropdown
              <div key={link.name}>
                <button
                  onClick={() => setIsKurumsalOpen(!isKurumsalOpen)}
                  className="text-white hover:text-orange-400 hover:bg-gray-800 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
                >
                  {link.name}
                  <svg className={`w-5 h-5 transition-transform duration-200 ${isKurumsalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isKurumsalOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        onClick={(e) => {
                          handleLinkClick(e, subLink.href);
                          setIsKurumsalOpen(false);
                        }}
                        className="text-gray-300 hover:text-orange-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center gap-2"
                      >
                        <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Mobile Regular Link
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={
                  link.name === 'Muayene İstasyonu'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white block px-4 py-3 text-base font-bold uppercase tracking-wider transition-all duration-300 border-2 border-orange-400 shadow-lg text-center'
                    : 'text-white hover:text-orange-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
                }
              >
                {link.name === 'Muayene İstasyonu' && (
                  <span className="inline-block mr-2">🚛</span>
                )}
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


