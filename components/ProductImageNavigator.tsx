"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductWatermark } from "@/components/ProductWatermark";
import type { Packaging } from "@/content/products";

export function ProductImageNavigator({
  productSlug,
  productName,
  packaging,
}: {
  productSlug: string;
  productName: string;
  packaging: Packaging;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const handleSelect = (pkg: Packaging) => {
    setIsOpen(false);
    if (pkg !== packaging) {
      router.push(`/urunler/${productSlug}/${pkg}`);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Ambalaj tipini değiştirmek için tıklayın"
        className="absolute inset-0"
      >
        <Image
          src={`/images/products/${packaging}/${productSlug}.webp`}
          alt={productName}
          width={1600}
          height={1600}
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <ProductWatermark productName={productName} packaging={packaging} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-brand-border">
              <h3 className="text-base font-bold text-brand-navy">Ambalaj seçin</h3>
            </div>
            <button
              type="button"
              onClick={() => handleSelect("tabakli")}
              className={`w-full text-left px-5 py-4 text-sm font-semibold border-b border-brand-border transition-colors ${
                packaging === "tabakli"
                  ? "bg-brand-soft text-brand-navy"
                  : "text-brand-text hover:bg-brand-light"
              }`}
            >
              Tabaklı
            </button>
            <button
              type="button"
              onClick={() => handleSelect("dokme")}
              className={`w-full text-left px-5 py-4 text-sm font-semibold transition-colors ${
                packaging === "dokme"
                  ? "bg-brand-soft text-brand-navy"
                  : "text-brand-text hover:bg-brand-light"
              }`}
            >
              Dökme
            </button>
          </div>
        </div>
      )}
    </>
  );
}
