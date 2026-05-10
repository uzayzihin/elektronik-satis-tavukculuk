"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waProductOrder } from "@/lib/whatsapp";
import type { Packaging } from "@/content/products";

export function ProductDetailActions({
  product,
  packaging,
}: {
  product: { slug: string; name: string };
  packaging: Packaging;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ slug: product.slug, name: product.name, packaging }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="qty"
          className="block text-sm font-bold uppercase tracking-wider text-brand-primary mb-2"
        >
          Miktar
        </label>
        <div className="inline-flex items-center border-2 border-brand-light rounded-lg overflow-hidden">
          <button
            type="button"
            aria-label="Miktarı azalt"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-12 h-12 flex items-center justify-center text-brand-primary hover:bg-brand-light"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 h-12 text-center font-bold text-lg text-brand-primary border-x-2 border-brand-light focus:outline-none"
          />
          <button
            type="button"
            aria-label="Miktarı artır"
            onClick={() => setQty((q) => q + 1)}
            className="w-12 h-12 flex items-center justify-center text-brand-primary hover:bg-brand-light"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-4 rounded-md text-base transition-colors ${
            added
              ? "bg-brand-purple-dark text-white"
              : "bg-brand-purple hover:bg-brand-purple-dark text-white"
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              Sepete Eklendi
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              Sepete Ekle
            </>
          )}
        </button>
        <a
          href={waProductOrder(`${product.name} (${qty} adet)`, packaging)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white font-bold px-6 py-4 rounded-md text-base transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Hızlı Sipariş
        </a>
      </div>
    </div>
  );
}
