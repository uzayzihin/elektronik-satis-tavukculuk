"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  ProductsToolbar,
  type FilterValue,
  type GridCols,
} from "@/components/ProductsToolbar";
import type { Product, ProductCategory } from "@/content/products";

const STORAGE_KEY_COLS = "urunler_cols_v1";
const STORAGE_KEY_FILTER = "urunler_pkg_v1";

export function ProductsGrid({
  products,
  packagings,
}: {
  products: readonly Product[];
  packagings: readonly ProductCategory[];
}) {
  const [filter, setFilter] = useState<FilterValue>("tabakli");
  const [cols, setColsState] = useState<GridCols>(4);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCols = localStorage.getItem(STORAGE_KEY_COLS);
      if (savedCols === "1" || savedCols === "2" || savedCols === "4") {
        setColsState(parseInt(savedCols) as GridCols);
      }
      const savedFilter = localStorage.getItem(STORAGE_KEY_FILTER);
      if (
        savedFilter === "tabakli" ||
        savedFilter === "dokme" ||
        savedFilter === "fresh"
      ) {
        setFilter(savedFilter);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  function persistFilter(v: FilterValue) {
    setFilter(v);
    if (hydrated) {
      try {
        localStorage.setItem(STORAGE_KEY_FILTER, v);
      } catch {
        // ignore
      }
    }
  }

  function setCols(v: GridCols) {
    setColsState(v);
    if (hydrated) {
      try {
        localStorage.setItem(STORAGE_KEY_COLS, String(v));
      } catch {
        // ignore
      }
    }
  }

  const visibleProducts = products.filter((p) =>
    filter === "fresh" ? !!p.externalUrl : !p.externalUrl
  );

  const counts: Record<string, number> = {
    tabakli: products.filter((p) => !p.externalUrl).length,
    dokme: products.filter((p) => !p.externalUrl).length,
    fresh: products.filter((p) => !!p.externalUrl).length,
  };

  const gridClass =
    cols === 1
      ? "grid-cols-1 sm:max-w-xl sm:mx-auto"
      : cols === 2
      ? "grid-cols-2"
      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="bg-white">
      <ProductsToolbar
        filter={filter}
        setFilter={persistFilter}
        cols={cols}
        setCols={setCols}
        packagings={packagings}
        counts={counts}
      />

      <div className="container-x py-8 md:py-10">
        <div className={`grid ${gridClass} gap-3 md:gap-5`}>
          {visibleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} compact packaging={filter} />
          ))}
        </div>
      </div>
    </section>
  );
}
