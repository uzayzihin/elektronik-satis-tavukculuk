import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/content/products";

export function CollectionSection({
  title,
  subtitle,
  products,
  ctaHref,
  ctaLabel = "Tümünü Gör",
  background = "white",
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  ctaHref?: string;
  ctaLabel?: string;
  background?: "white" | "light";
}) {
  return (
    <section className={background === "light" ? "bg-brand-light" : "bg-white"}>
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            {subtitle && (
              <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight">
              {title}
            </h2>
          </div>
          {ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent font-semibold transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
