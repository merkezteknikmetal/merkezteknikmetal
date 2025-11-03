import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FloatingCTA from './FloatingCTA';
import PageTransition from './PageTransition';

const Layout = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <FloatingCTA />
      <PageTransition>
        <Outlet />
      </PageTransition>
      
      {/* Footer - Industrial */}
      <footer className="bg-gray-900 border-t-4 border-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-500">Merkez Teknik Metal</h3>
              <p className="text-gray-400 leading-relaxed">
                Endüstriyel imalât ve mühendislik sektöründe TSE yetkilendirmeli profesyonel çözümler.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-500">Hızlı Linkler</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Anasayfa</a></li>
                <li><a href="/kurumsal#hakkimizda" className="text-gray-400 hover:text-orange-500 transition-colors">Hakkımızda</a></li>
                <li><a href="/kurumsal#belgelerimiz" className="text-gray-400 hover:text-orange-500 transition-colors">Belgelerimiz</a></li>
                <li><a href="/hizmetler" className="text-gray-400 hover:text-orange-500 transition-colors">Hizmetler</a></li>
                <li><a href="/adr-muayene" className="text-gray-400 hover:text-orange-500 transition-colors">Muayene İstasyonu</a></li>
                <li><a href="/iletisim" className="text-gray-400 hover:text-orange-500 transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-500">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>YEŞİLKÖY MH. GÜL ÇINAR CD.</li>
                <li>DÖRTYOL / HATAY</li>
                <li className="mt-4 text-white font-semibold">+90 542 182 22 26</li>
                <li className="text-white font-semibold">mtm@merkezteknikmetal.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} <span className="text-orange-500 font-bold">Merkez Teknik Metal</span>. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

