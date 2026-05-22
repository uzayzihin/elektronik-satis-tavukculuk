"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waCartCheckout, packagingLabel } from "@/lib/whatsapp";
import { site } from "@/content/site.config";

export function CartDrawer() {
  const { items, totalQty, setQty, remove, clear, open, setOpen } = useCart();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-brand-primary/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        aria-label="Alışveriş sepeti"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-5 border-b border-brand-light">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-brand-primary" />
            <h2 className="text-lg font-bold text-brand-primary">
              Sepetim
              {totalQty > 0 && (
                <span className="ml-2 text-sm text-brand-muted font-normal">
                  ({totalQty} ürün)
                </span>
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Sepeti kapat"
            className="p-2 -mr-2 text-brand-muted hover:text-brand-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-brand-muted" />
              </div>
              <h3 className="font-bold text-brand-primary text-lg mb-1">
                Sepetiniz Boş
              </h3>
              <p className="text-brand-muted text-sm mb-6 max-w-xs">
                Ürünleri sepete ekleyin, sipariş listenizi WhatsApp üzerinden bize gönderin.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-brand-primary hover:bg-brand-accent text-white font-semibold px-5 py-2.5 rounded-sm text-sm transition-colors"
              >
                Alışverişe Devam Et
              </button>
            </div>
          ) : (
            <ul className="p-5 space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.packaging}`}
                  className="flex gap-3 pb-4 border-b border-brand-light last:border-0 last:pb-0"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-brand-light overflow-hidden relative">
                    <Image
                      src={`/images/products/${item.packaging}/thumbnails/${item.slug}.webp`}
                      alt=""
                      width={128}
                      height={128}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-brand-primary text-sm leading-tight mb-0.5">
                      {item.name}
                    </h4>
                    <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-brand-muted mb-2">
                      {packagingLabel(item.packaging)}
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-brand-light rounded-sm">
                        <button
                          type="button"
                          onClick={() => setQty(item.slug, item.packaging, item.qty - 1)}
                          aria-label="Miktarı azalt"
                          className="w-8 h-8 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:bg-brand-light"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center font-semibold text-sm text-brand-text">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(item.slug, item.packaging, item.qty + 1)}
                          aria-label="Miktarı artır"
                          className="w-8 h-8 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:bg-brand-light"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.slug, item.packaging)}
                        aria-label={`${item.name} ürününü sepetten çıkar`}
                        className="p-1.5 text-brand-muted hover:text-brand-accent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-brand-light p-5 space-y-3 bg-brand-light/30">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Toplam ürün</span>
              <span className="font-bold text-brand-primary">{totalQty} adet</span>
            </div>
            <p className="text-xs text-brand-muted">
              Fiyat ve teslimat WhatsApp üzerinden teyit edilir.
            </p>
            <a
              href={waCartCheckout(items)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-5 py-3.5 rounded-sm transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Siparişi Gönder ({site.whatsapp.primaryDisplay})
            </a>
            <button
              type="button"
              onClick={clear}
              className="w-full text-xs text-brand-muted hover:text-brand-accent text-center pt-1"
            >
              Sepeti temizle
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}

export function CartButton() {
  const { totalQty, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Sepeti aç (${totalQty} ürün)`}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-sm text-brand-navy hover:bg-brand-soft hover:text-brand-accent transition-colors"
    >
      <ShoppingCart className="w-5 h-5" />
      {totalQty > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-brand-primary text-white text-[10px] font-bold flex items-center justify-center">
          {totalQty}
        </span>
      )}
    </button>
  );
}
