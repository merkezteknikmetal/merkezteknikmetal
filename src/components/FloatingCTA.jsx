const FloatingCTA = () => {
  return (
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=MERKEZ%20TEKN%C4%B0K%20METAL%20TES.%20MONT.%20SAN.%20VE%20T%C4%B0C.%20LTD.%C5%9ET%C4%B0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-2 border-white"
      aria-label="Yol Tarifi Al"
    >
      <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
      <span className="hidden sm:inline uppercase tracking-wider text-sm">Yol Tarifi Al</span>
      <span className="sm:hidden">🗺️</span>
    </a>
  );
};

export default FloatingCTA;

