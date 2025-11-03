import SEO from '../components/SEO';
import MediaSlider from '../components/MediaSlider';

const Home = () => {
  return (
    <div>
      <SEO
        title="Merkez Teknik Metal - TSE Yetkili ADR Araç Muayene ve Tamirat Merkezi"
        description="TSE yetkili ADR araç muayene merkezi. T9 belgesi, ara muayene, periyodik muayene ve tamirat hizmetleri. Profesyonel ve güvenilir çözümler ile hizmetinizdeyiz."
        keywords="ADR muayene, T9 belgesi, ara muayene, periyodik muayene, TSE muayene, tehlikeli madde taşıma, ADR tamirat, araç muayene merkezi, Türkiye, TSE yetkili muayene"
        url="/"
        image="/mtmLOGO.png"
      />
      {/* Fullscreen Media Slider - Ana Ekran */}
      <MediaSlider />
    </div>
  );
};

export default Home;
