"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Search } from "lucide-react";
import { products, freshProducts, type Product } from "@/content/products";

const ALL_PRODUCTS: Product[] = [...products, ...freshProducts];

function normalize(s: string) {
  return s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/[üö]/g, (c) => (c === "ü" ? "u" : "o"))
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g");
}

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    return ALL_PRODUCTS.filter((p) => {
      const haystack = normalize(`${p.name} ${p.description ?? ""}`);
      return haystack.includes(q);
    }).slice(0, 12);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-brand-primary/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl mx-4 mt-16 md:mt-24 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-brand-border px-4 py-3">
          <Search className="w-5 h-5 text-brand-muted flex-shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ürün ara — bonfile, kanat, limonata..."
            className="flex-1 outline-none text-base text-brand-navy placeholder:text-brand-muted bg-transparent"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Aramayı kapat"
            className="p-1 text-brand-muted hover:text-brand-navy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <p className="px-5 py-10 text-center text-sm text-brand-muted">
              Aramaya başlamak için en az 2 karakter yazın.
            </p>
          ) : results.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-brand-muted">
              &ldquo;{query}&rdquo; için sonuç bulunamadı.
            </p>
          ) : (
            <ul className="divide-y divide-brand-border">
              {results.map((p) => {
                const isExternal = !!p.externalUrl;
                const href = isExternal
                  ? p.externalUrl!
                  : `/urunler/${p.slug}/tabakli`;
                const img = isExternal
                  ? "/logo-v2.png"
                  : `/images/products/tabakli/thumbnails/${p.slug}.webp`;
                const inner = (
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-brand-light transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 rounded bg-brand-light overflow-hidden relative">
                      <Image
                        src={img}
                        alt=""
                        width={96}
                        height={96}
                        unoptimized
                        className={`absolute inset-0 w-full h-full ${
                          isExternal ? "object-contain p-1" : "object-cover"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-brand-navy line-clamp-1">
                        {p.name}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-brand-muted mt-0.5">
                        {isExternal ? "Evka Fresh" : "Evka Surur"}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <li key={p.slug}>
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={href} onClick={onClose}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
