import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KurumsalPage from './pages/KurumsalPage';
import HizmetlerPage from './pages/HizmetlerPage';
import ADRMuayenePage from './pages/ADRMuayenePage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<KurumsalPage />} />
          <Route path="hizmetler" element={<HizmetlerPage />} />
          <Route path="adr-muayene" element={<ADRMuayenePage />} />
          <Route path="iletisim" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


