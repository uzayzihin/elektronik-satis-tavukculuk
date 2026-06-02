"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/content/products";

export type SwitcherCollection = {
  title: string;
  products: Product[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function CollectionSwitcher({
  collections,
}: {
  collections: SwitcherCollection[];
}) {
  const [index, setIndex] = useState(0);
  const collection = collections[index];

  return (
    <section className="bg-white border-y border-brand-border">
      <div className="container-x pt-12 md:pt-14 pb-2">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2
            className="font-serif tracking-[-0.03em] font-medium text-brand-navy leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {collection.title}
          </h2>
          {collection.ctaHref && (
            <Link
              href={collection.ctaHref}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-brand-accent hover:text-brand-accent-dark whitespace-nowrap pb-1 transition-colors"
            >
              {collection.ctaLabel ?? "Tümünü Gör"} →
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mb-6 md:mb-8 border-b border-brand-border">
          {collections.map((c, i) => {
            const active = i === index;
            return (
              <button
                key={c.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-current={active}
                className={`pb-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] transition-colors ${
                  active
                    ? "text-brand-navy border-b-2 border-brand-accent -mb-px"
                    : "text-brand-muted hover:text-brand-navy"
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pb-12 md:pb-14">
        <div className="container-x">
          <div
            key={`scroll-${index}`}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {collection.products.map((p) => (
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
