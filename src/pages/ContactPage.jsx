import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div className="pt-20 bg-gray-100">
      <SEO
        title="İletişim - Merkez Teknik Metal | ADR Muayene Randevu ve Bilgi"
        description="ADR muayene randevusu ve bilgi için iletişime geçin. Dörtyol, Hatay'da hizmet veren TSE yetkili muayene merkezi. Telefon: +90 542 182 22 26"
        keywords="iletişim, randevu, adres, telefon, email, Dörtyol, Hatay, ADR muayene randevu, iletişim bilgileri"
        url="/iletisim"
        image="/mtmLOGO.png"
      />
      {/* Hero Section - Compact */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 border-b-4 border-orange-500">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 text-xs font-bold mb-2 uppercase tracking-wider">
              BİZE ULAŞIN
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide">İletişim</h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info Cards */}
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-orange-500 shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-orange-500 font-bold text-xs uppercase tracking-wider">Telefon</h3>
                  <a href="tel:+905421822226" className="text-gray-900 text-lg font-bold hover:text-orange-500 transition-colors">
                    +90 542 182 22 26
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-orange-500 font-bold text-xs uppercase tracking-wider">E-posta</h3>
                  <a href="mailto:mtm@merkezteknikmetal.com" className="text-gray-900 text-sm font-bold hover:text-orange-500 transition-colors break-all">
                    mtm@merkezteknikmetal.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-orange-500 font-bold text-xs uppercase tracking-wider">Adres</h3>
                  <p className="text-gray-900 text-sm font-bold">YEŞİLKÖY MAH. GÜL ÇINAR CD. N:165</p>
                  <p className="text-gray-600 text-sm font-semibold">DÖRTYOL / HATAY</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 shadow-lg p-4">
  <div className="flex items-center gap-3">
    {/* İkon kutusu - diğerleriyle aynı */}
    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    </div>

    {/* Bilgi alanı */}
    <div className="flex-1">
      <h3 className="text-orange-500 font-bold text-xs uppercase tracking-wider">Çalışma Saatleri</h3>
      <p className="text-gray-900 text-xs font-semibold">Pzt - Cmt</p>
      <p className="text-orange-500 text-lg font-bold">08:00 - 17:00</p>
    </div>
  </div>
</div>

      
           </div>
          
          {/* Google Map */}
          <div>
            <div className="bg-white border-4 border-gray-800 shadow-xl overflow-hidden" style={{ height: '480px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.0652420799553!2d36.169684039915595!3d36.86017180605816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f3934bda7f849%3A0x83d452e27150c817!2sMERKEZ%20TEKN%C4%B0K%20METAL%20TES.%20MONT.%20SAN.%20VE%20T%C4%B0C.%20LTD.%C5%9ET%C4%B0!5e0!3m2!1str!2str!4v1761997059569!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MERKEZ TEKNİK METAL - YEŞİLKÖY / DÖRTYOL / HATAY"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

