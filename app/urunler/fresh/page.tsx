import type { Metadata } from "next";
import { freshProducts } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { PromoBanner } from "@/components/PromoBanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Evka Fresh",
  description:
    "Evka Fresh — dondurulmuş sebze, mısır, patates, limonata, sos, pirinç & bakliyat, yağ ve makarna çeşitleri. evkafresh.com'da.",
};

export default function FreshCategoryPage() {
  return (
    <>
      <section className="bg-white border-b border-brand-border">
        <div className="container-x py-8 md:py-10">
          <h1
            className="font-extrabold uppercase tracking-tight text-brand-navy leading-none"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Evka Fresh
          </h1>
          <p className="mt-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-brand-muted">
            {freshProducts.length} Ürün · evkafresh.com'da
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {freshProducts.map((p) => (
              <ProductCard key={p.slug} product={p} compact packaging="fresh" />
            ))}
          </div>
        </div>
      </section>

      <PromoBanner />
      <Testimonials />
      <FAQ />
    </>
  );
}
