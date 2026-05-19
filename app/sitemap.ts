import type { MetadataRoute } from 'next';
import { site } from '@/content/site.config';
import { products, packagings } from '@/content/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  // Temel sayfalar
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/iade-iptal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/teslimat`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kullanim-kosullari`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Ürün sayfaları (Sadece dahili ambalajlar)
  const internalPackagings = packagings.filter((pk) => pk.slug !== 'fresh');
  
  products.forEach((product) => {
    // Harici yönlendirme (evkafresh) olanları sitemapa koymaya gerek yok
    if (product.externalUrl) return;

    internalPackagings.forEach((pkg) => {
      routes.push({
        url: `${baseUrl}/urunler/${product.slug}/${pkg.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
