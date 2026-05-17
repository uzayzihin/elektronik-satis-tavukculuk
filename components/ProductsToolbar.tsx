"use client";

import { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  Grid2x2,
  Rows2,
  SlidersHorizontal,
  Check,
} from "lucide-react";
import type { Packaging, ProductCategory } from "@/content/products";

export type FilterValue = Packaging;
export type GridCols = 1 | 2 | 4;

export function ProductsToolbar({
  filter,
  setFilter,
  cols,
  setCols,
  packagings,
  counts,
}: {
  filter: FilterValue;
  setFilter: (v: FilterValue) => void;
  cols: GridCols;
  setCols: (v: GridCols) => void;
  packagings: readonly ProductCategory[];
  counts: Record<string, number>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      const inMenu = ref.current?.contains(target);
      const inTitle = titleRef.current?.contains(target);
      if (!inMenu && !inTitle) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeName = packagings.find((p) => p.slug === filter)?.name ?? "";

  return (
    <div className="container-x py-4 md:py-5 grid grid-cols-[auto_1fr] items-center gap-3 md:gap-4 border-b border-brand-border bg-white">
      <div className="flex items-center gap-2">
        <div ref={ref} className="relative">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Paketleme filtresini aç"
            aria-expanded={open}
            className="inline-flex items-center justify-center w-10 md:w-11 h-10 md:h-11 rounded-md bg-brand-dark hover:bg-brand-accent text-white transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          {open && (
            <div
              role="menu"
              className="absolute top-full left-0 mt-2 z-40 w-56 bg-white border border-brand-border rounded-md shadow-xl py-2"
            >
              {packagings.map((p) => {
                const active = filter === p.slug;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setFilter(p.slug as Packaging);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-soft text-brand-primary"
                        : "text-brand-navy hover:bg-brand-soft"
                    }`}
                  >
                    <span>
                      {p.name}
                      <span className="ml-2 text-xs text-brand-muted">
                        ({counts[p.slug] ?? 0})
                      </span>
                    </span>
                    {active && <Check className="w-4 h-4 text-brand-primary" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center bg-brand-dark rounded-md overflow-hidden">
          <button
            type="button"
            onClick={() => setCols(1)}
            aria-label="Tek sütun görünüm"
            aria-pressed={cols === 1}
            className={`w-10 md:w-11 h-10 md:h-11 flex items-center justify-center transition-colors ${
              cols === 1
                ? "bg-brand-primary text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Rows2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setCols(2)}
            aria-label="2 sütun görünüm"
            aria-pressed={cols === 2}
            className={`w-10 md:w-11 h-10 md:h-11 flex items-center justify-center transition-colors ${
              cols === 2
                ? "bg-brand-primary text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Grid2x2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setCols(4)}
            aria-label="4 sütun görünüm"
            aria-pressed={cols === 4}
            className={`hidden sm:flex w-10 md:w-11 h-10 md:h-11 items-center justify-center transition-colors ${
              cols === 4
                ? "bg-brand-primary text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
      </div>

      <button
        ref={titleRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Paketleme seç"
        aria-expanded={open}
        className="text-right font-extrabold uppercase tracking-tight text-brand-navy whitespace-nowrap overflow-hidden text-ellipsis hover:text-brand-accent transition-colors cursor-pointer"
        style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.5rem)" }}
      >
        {activeName}
      </button>
    </div>
  );
}
