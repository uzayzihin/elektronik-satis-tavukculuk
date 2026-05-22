"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { ProductWatermark } from "@/components/ProductWatermark";
import type { Product, Packaging } from "@/content/products";

export function ProductCard({
  product,
  compact = false,
  packaging = "tabakli",
}: {
  product: Product;
  compact?: boolean;
  packaging?: Packaging;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const detailHref = `/urunler/${product.slug}/${packaging}`;

  const imgSrc = compact
    ? `/images/products/${packaging}/thumbnails/${product.slug}.webp`
    : `/images/products/${packaging}/${product.slug}.webp`;

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    add({ slug: product.slug, name: product.name, packaging }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const imageInner = (
    <>
      {!imgError ? (
        <Image
          src={imgSrc}
          alt={product.name}
          width={1024}
          height={1024}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-full h-full flex items-center justify-center text-brand-muted text-xs font-serif italic"
        >
          Görsel yok
        </div>
      )}
      <ProductWatermark
        productName={product.name}
        packaging={packaging}
        compact={compact}
      />
      <div
        className={`absolute bg-brand-primary text-white font-bold uppercase tracking-wider rounded z-10 ${
          compact
            ? "top-2 left-2 text-[9px] px-1.5 py-0.5"
            : "top-3 left-3 text-[10px] px-2 py-1"
        }`}
      >
        {product.isNew ? "Yeni" : "Taze"}
      </div>

      {compact && (
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`${product.name} sepete ekle`}
          className={`absolute bottom-2 right-2 z-10 w-10 h-10 rounded-sm flex items-center justify-center shadow-md transition-all ${
            added
              ? "bg-brand-accent-dark text-brand-navy"
              : "bg-brand-accent text-brand-navy hover:bg-brand-accent-dark"
          }`}
        >
          {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      )}
    </>
  );

  const imageClass =
    "relative aspect-square bg-brand-light flex items-center justify-center overflow-hidden";

  if (compact) {
    return (
      <article className="group flex flex-col bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <Link href={detailHref} className={imageClass}>
          {imageInner}
        </Link>
        <div className="px-3 py-3">
          <Link href={detailHref} className="block">
            <h3 className="font-bold uppercase tracking-tight text-brand-navy text-xs md:text-sm leading-tight hover:text-brand-accent transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-muted mt-1.5">
            WhatsApp'tan Fiyat
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <Link href={detailHref} className={imageClass}>
        {imageInner}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={detailHref} className="block mb-1">
          <h3 className="font-bold text-brand-primary text-base leading-tight hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-brand-muted mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-sm transition-colors ${
            added
              ? "bg-brand-accent-dark text-brand-navy"
              : "bg-brand-accent hover:bg-brand-accent-dark text-brand-navy"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Sepete Eklendi
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Sepete Ekle
            </>
          )}
        </button>
      </div>
    </article>
  );
}
