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
    <div className="space-y-3">
      <div className="inline-flex items-center border border-brand-border rounded-sm overflow-hidden">
        <button
          type="button"
          aria-label="Miktarı azalt"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-10 h-10 flex items-center justify-center text-brand-navy hover:bg-brand-light"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          id="qty"
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-12 h-10 text-center font-bold text-base text-brand-navy border-x border-brand-border focus:outline-none"
        />
        <button
          type="button"
          aria-label="Miktarı artır"
          onClick={() => setQty((q) => q + 1)}
          className="w-10 h-10 flex items-center justify-center text-brand-navy hover:bg-brand-light"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a
          href={waProductOrder(`${product.name} (${qty} adet)`, packaging)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-4 py-3 rounded-sm text-sm md:text-base transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
          Hızlı Sipariş
        </a>
        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm md:text-base transition-colors ${
            added
              ? "bg-brand-accent-dark text-brand-navy"
              : "bg-brand-accent hover:bg-brand-accent-dark text-brand-navy"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4 md:w-5 md:h-5" />
              Eklendi
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              Sepete Ekle
            </>
          )}
        </button>
      </div>
    </div>
  );
}
