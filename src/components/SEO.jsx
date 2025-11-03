import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Merkez Teknik Metal - ADR Araç Muayene ve Tamirat Merkezi',
  description = 'TSE yetkili ADR araç muayene merkezi. T9 belgesi, ara muayene, periyodik muayene ve tamirat hizmetleri. Profesyonel ve güvenilir çözümler.',
  keywords = 'ADR muayene, T9 belgesi, ara muayene, periyodik muayene, TSE muayene, tehlikeli madde taşıma, ADR tamirat, araç muayene merkezi',
  image = '/mtmLOGO.png',
  url = '',
  type = 'website'
}) => {
  const siteUrl = 'https://merkezteknikmetal.com'; // Domain adresinizi buraya ekleyin
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Temel Meta Tag'ler */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Merkez Teknik Metal" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Merkez Teknik Metal" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#f97316" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO;

