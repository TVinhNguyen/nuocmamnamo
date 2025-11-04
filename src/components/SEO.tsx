import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Nước Mắm Nam Ô - Hương Vị Truyền Thống Đà Nẵng',
  description = 'Nước mắm Nam Ô - sản phẩm truyền thống làng nghề nổi tiếng Đà Nẵng. Được làm từ cá cơm tươi ngon, ủ theo phương pháp truyền thống với hương vị đậm đà, thơm ngon.',
  image = '/og-image.jpg',
  url = 'https://nuocmamnamo.vn'
}: SEOProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: 'Nước Mắm Nam Ô',
        url: url,
        logo: {
          '@type': 'ImageObject',
          url: `${url}/logo.png`,
          width: 512,
          height: 512
        },
        sameAs: [
          'https://www.facebook.com/nuocmamnamo',
          'https://www.instagram.com/nuocmamnamo'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+84-236-3XXX-XXX',
          contactType: 'Customer Service',
          areaServed: 'VN',
          availableLanguage: 'Vietnamese'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}/#localbusiness`,
        name: 'Nước Mắm Nam Ô',
        image: `${url}/business.jpg`,
        description: description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Làng nghề Nam Ô',
          addressLocality: 'Liên Chiểu',
          addressRegion: 'Đà Nẵng',
          addressCountry: 'VN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 16.1074,
          longitude: 108.1459
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '18:00'
        },
        priceRange: '$$'
      },
      {
        '@type': 'Product',
        '@id': `${url}/#product`,
        name: 'Nước Mắm Nam Ô Truyền Thống',
        image: `${url}/product.jpg`,
        description: 'Nước mắm Nam Ô được sản xuất theo phương pháp truyền thống, từ cá cơm tươi ngon, ủ tự nhiên mang hương vị đặc trưng của vùng biển Đà Nẵng.',
        brand: {
          '@type': 'Brand',
          name: 'Nam Ô'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '250'
        },
        offers: {
          '@type': 'Offer',
          url: url,
          priceCurrency: 'VND',
          price: '150000',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Nước Mắm Nam Ô'
          }
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="nước mắm, nước mắm Nam Ô, Đà Nẵng, fish sauce, truyền thống, làng nghề, đặc sản" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content="Nước Mắm Nam Ô" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Nước Mắm Nam Ô" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
