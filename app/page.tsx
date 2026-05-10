import { HeroSlider } from "@/components/HeroSlider";
import { CollectionSwitcher } from "@/components/CollectionSwitcher";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductRow } from "@/components/ProductRow";
import { LimonataPromo } from "@/components/LimonataPromo";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { TrustBand } from "@/components/TrustBand";
import { CTABanner } from "@/components/CTABanner";
import {
  getFeaturedProducts,
  getNewProducts,
  getRestaurantProducts,
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
      <ProductRow
        title="Restoranlar İçin"
        products={getRestaurantProducts()}
        ctaHref="/urunler"
      />
      <LimonataPromo />
      <Testimonials />
      <FAQ />
      <TrustBand />
      <CTABanner />
    </>
  );
}
