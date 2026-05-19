import type { MetadataRoute } from 'next';
import { site } from '@/content/site.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand.short,
    short_name: site.brand.short,
    description: site.brand.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#013F80',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
