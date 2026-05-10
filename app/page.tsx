import { HeroSlider } from "@/components/HeroSlider";
import { CollectionSwitcher } from "@/components/CollectionSwitcher";
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
      ctaLabel: "Tüm Çok Satanları Gör",
    },
    {
      title: "Evka Fresh",
      products: [...freshProducts],
      ctaHref: "https://evkafresh.com",
      ctaLabel: "evkafresh.com'a Git",
    },
    {
      title: "Yeni Ürünler",
      products: getNewProducts(),
      ctaHref: "/urunler",
      ctaLabel: "Tüm Yeni Ürünleri Gör",
    },
  ];

  return (
    <>
      <HeroSlider />
      <CollectionSwitcher collections={collections} />
      <AboutTeaser />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
