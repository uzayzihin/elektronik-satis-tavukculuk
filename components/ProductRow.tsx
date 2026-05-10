import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/content/products";

export function ProductRow({
  title,
  products,
  ctaHref,
  ctaLabel = "Tüm Ürünleri Gör",
}: {
  title: string;
  products: Product[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="container-x pt-12 md:pt-14 pb-2">
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <h2
            className="font-extrabold uppercase tracking-tight text-brand-navy leading-none"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {title}
          </h2>
          {ctaHref && (
            <Link
              href={ctaHref}
              className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-primary hover:text-brand-accent-dark whitespace-nowrap pb-1"
            >
              {ctaLabel} →
            </Link>
          )}
        </div>
      </div>

      <div className="pb-12 md:pb-14">
        <div className="container-x">
          <div className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {products.map((p) => (
              <div
                key={p.slug}
                className="flex-shrink-0 w-[68%] sm:w-[45%] md:w-[30%] lg:w-[23%] snap-start"
              >
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
