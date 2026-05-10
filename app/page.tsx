import { HeroSlider } from "@/components/HeroSlider";
import { CollectionSwitcher } from "@/components/CollectionSwitcher";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import {
  getFeaturedProducts,
  getNewProducts,
  freshProducts,
} from "@/content/products";

export default function HomePage() {
  const collections = [
    {
      title: "Çok Satan",
      products: getFeaturedProducts(),
      ctaHref: "/urunler",
      ctaLabel: "Tüm Ürünleri Gör",
    },
    {
      title: "Trending",
      products: [...freshProducts],
      ctaHref: "/urunler",
      ctaLabel: "Tüm Ürünleri Gör",
    },
    {
      title: "Yeni Ürünler",
      products: getNewProducts(),
      ctaHref: "/urunler",
      ctaLabel: "Tüm Ürünleri Gör",
    },
  ];

  return (
    <>
      <HeroSlider />
      <CollectionSwitcher collections={collections} />
      <CategoryGrid />
      <AboutTeaser />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
