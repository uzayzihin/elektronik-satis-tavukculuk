import { HeroSlider } from "@/components/HeroSlider";
import { TrustBadges } from "@/components/TrustBadges";
import { TrustSignals } from "@/components/TrustSignals";
import { CollectionSection } from "@/components/CollectionSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { CategoryFeatures } from "@/components/CategoryFeatures";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { getFeaturedProducts, getProductsByCategory } from "@/content/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const gogus = getProductsByCategory("gogus").slice(0, 4);
  const but = getProductsByCategory("but").slice(0, 4);
  const hazir = getProductsByCategory("hazir-ozel").slice(0, 5);

  return (
    <>
      <HeroSlider />
      <TrustBadges />
      <TrustSignals />

      <CollectionSection
        subtitle="Öne Çıkanlar"
        title="En Çok Tercih Edilen Ürünler"
        products={featured}
        ctaHref="/urunler"
        background="white"
      />

      <CategoryGrid />

      <CategoryFeatures />

      <CollectionSection
        subtitle="Göğüs Çeşitleri"
        title="Bonfile, Şinitzel, Jülyen ve Daha Fazlası"
        products={gogus}
        ctaHref="/urunler#gogus"
        ctaLabel="Tüm Göğüs Çeşitlerini Gör"
        background="light"
      />

      <CollectionSection
        subtitle="But Çeşitleri"
        title="Baket, Çatalbut ve Özel Kesimler"
        products={but}
        ctaHref="/urunler#but"
        ctaLabel="Tüm But Çeşitlerini Gör"
        background="white"
      />

      <CollectionSection
        subtitle="Hazır & Özel"
        title="Mutfağınıza Hazır Ürünler"
        products={hazir}
        ctaHref="/urunler#hazir-ozel"
        ctaLabel="Tüm Hazır Ürünleri Gör"
        background="light"
      />

      <AboutTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
