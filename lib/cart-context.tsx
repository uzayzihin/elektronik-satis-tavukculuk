"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import type { Packaging } from "@/content/products";

export type CartItem = {
  slug: string;
  name: string;
  packaging: Packaging;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  totalQty: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (slug: string, packaging: Packaging) => void;
  setQty: (slug: string, packaging: Packaging, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "es_cart_v1";

function keyOf(slug: string, packaging: Packaging) {
  return `${slug}::${packaging}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const add = useCallback<CartContextValue["add"]>((item, qty = 1) => {
    setItems((prev) => {
      const k = keyOf(item.slug, item.packaging);
      const existing = prev.find((p) => keyOf(p.slug, p.packaging) === k);
      if (existing) {
        return prev.map((p) =>
          keyOf(p.slug, p.packaging) === k ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback<CartContextValue["remove"]>((slug, packaging) => {
    const k = keyOf(slug, packaging);
    setItems((prev) => prev.filter((p) => keyOf(p.slug, p.packaging) !== k));
  }, []);

  const setQty = useCallback<CartContextValue["setQty"]>(
    (slug, packaging, qty) => {
      const k = keyOf(slug, packaging);
      setItems((prev) =>
        qty <= 0
          ? prev.filter((p) => keyOf(p.slug, p.packaging) !== k)
          : prev.map((p) =>
              keyOf(p.slug, p.packaging) === k ? { ...p, qty } : p
            )
      );
    },
    []
  );

  const clear = useCallback(() => setItems([]), []);

  const totalQty = useMemo(
    () => items.reduce((sum, it) => sum + it.qty, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({ items, totalQty, add, remove, setQty, clear, open, setOpen }),
    [items, totalQty, add, remove, setQty, clear, open]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
