"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Check, ExternalLink } from "lucide-react";
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
  const isExternal = !!product.externalUrl;
  const [imgError, setImgError] = useState(false);
  const detailHref = `/urunler/${product.slug}/${packaging}`;

  const imgSrc = isExternal
    ? "/logo-v2.png"
    : compact
    ? `/images/products/solo/thumbnails/${product.slug}.webp`
    : `/images/products/solo/${product.slug}.webp`;

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
        <Image
          src="/logo-v2.png"
          alt=""
          width={512}
          height={512}
          aria-hidden="true"
          className="w-3/4 h-3/4 object-contain opacity-90 group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <ProductWatermark
        productName={product.name}
        packaging={packaging}
        isExternal={isExternal}
        compact={compact}
      />
      <div
        className={`absolute bg-brand-primary text-white font-bold uppercase tracking-wider rounded z-10 ${
          compact
            ? "top-2 left-2 text-[9px] px-1.5 py-0.5"
            : "top-3 left-3 text-[10px] px-2 py-1"
        }`}
      >
        {isExternal ? "Fresh" : product.isNew ? "Yeni" : "Taze"}
      </div>

      {compact && !isExternal && (
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`${product.name} sepete ekle`}
          className={`absolute bottom-2 right-2 z-10 w-10 h-10 rounded-md flex items-center justify-center shadow-md transition-all ${
            added
              ? "bg-brand-purple-dark text-white"
              : "bg-brand-purple text-white hover:bg-brand-purple-dark"
          }`}
        >
          {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      )}

      {compact && isExternal && (
        <div
          className="absolute bottom-2 right-2 z-10 w-10 h-10 rounded-md bg-white text-brand-primary border border-brand-border flex items-center justify-center shadow-md"
          aria-hidden="true"
        >
          <ExternalLink className="w-4 h-4" />
        </div>
      )}
    </>
  );

  const imageClass =
    "relative aspect-square bg-brand-light flex items-center justify-center overflow-hidden";

  if (compact) {
    return (
      <article className="group flex flex-col bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        {isExternal ? (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={imageClass}
          >
            {imageInner}
          </a>
        ) : (
          <Link href={detailHref} className={imageClass}>
            {imageInner}
          </Link>
        )}
        <div className="px-3 py-3">
          {isExternal ? (
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-bold uppercase tracking-tight text-brand-navy text-xs md:text-sm leading-tight hover:text-brand-accent transition-colors line-clamp-2">
                {product.name}
              </h3>
            </a>
          ) : (
            <Link href={detailHref} className="block">
              <h3 className="font-bold uppercase tracking-tight text-brand-navy text-xs md:text-sm leading-tight hover:text-brand-accent transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
          )}
          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-muted mt-1.5">
            {isExternal ? "evkafresh.com" : "WhatsApp'tan Fiyat"}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-white border border-brand-light rounded-lg overflow-hidden hover:shadow-lg hover:border-brand-secondary/30 transition-all">
      {isExternal ? (
        <a
          href={product.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={imageClass}
        >
          {imageInner}
        </a>
      ) : (
        <Link href={detailHref} className={imageClass}>
          {imageInner}
        </Link>
      )}

      <div className="p-4 flex flex-col flex-1">
        {isExternal ? (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-1"
          >
            <h3 className="font-bold text-brand-primary text-base leading-tight hover:text-brand-accent transition-colors">
              {product.name}
            </h3>
          </a>
        ) : (
          <Link href={detailHref} className="block mb-1">
            <h3 className="font-bold text-brand-primary text-base leading-tight hover:text-brand-accent transition-colors">
              {product.name}
            </h3>
          </Link>
        )}
        <p className="text-sm text-brand-muted mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>
        {isExternal ? (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-md transition-colors bg-brand-accent hover:bg-brand-accent-dark text-white"
          >
            <ExternalLink className="w-4 h-4" />
            evkafresh.com'da Gör
          </a>
        ) : (
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-md transition-colors ${
              added
                ? "bg-brand-purple-dark text-white"
                : "bg-brand-purple hover:bg-brand-purple-dark text-white"
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
        )}
      </div>
    </article>
  );
}
