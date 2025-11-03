const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Merkez Teknik Metal",
    "description": "TSE yetkili ADR araç muayene ve tamirat merkezi",
    "url": "https://merkezteknikmetal.com",
    "logo": "https://merkezteknikmetal.com/mtmLOGO.png",
    "image": "https://merkezteknikmetal.com/mtmLOGO.png",
    "telephone": "+905421822226",
    "email": "mtm@merkezteknikmetal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "YEŞİLKÖY MAH. GÜL ÇINAR CD. N:165",
      "addressLocality": "Dörtyol",
      "addressRegion": "Hatay",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.86017180605816",
      "longitude": "36.169684039915595"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "serviceType": [
      "ADR Araç Muayene",
      "T9 Belgesi",
      "Ara Muayene",
      "Periyodik Muayene",
      "ADR Tamirat ve Tadilat"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default StructuredData;

