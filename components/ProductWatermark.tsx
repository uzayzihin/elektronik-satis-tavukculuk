import type { Packaging } from "@/content/products";

export function ProductWatermark({
  productName,
  packaging = "tabakli",
  isExternal = false,
  compact = false,
}: {
  productName?: string;
  packaging?: Packaging;
  isExternal?: boolean;
  compact?: boolean;
}) {
  const isFresh = isExternal || packaging === "fresh";
  const name = productName ?? (isFresh ? "Evka" : "Evka Surur");
  const pack = isFresh
    ? "Fresh"
    : packaging === "dokme"
    ? "Dökme"
    : "Tabaklı";

  return (
    <span
      aria-hidden="true"
      className={`absolute z-[5] pointer-events-none font-semibold uppercase tracking-wider text-white leading-tight ${
        compact
          ? "bottom-2 left-2 text-[9px] md:text-[10px]"
          : "bottom-3 left-3 text-xs md:text-sm"
      }`}
      style={{
        textShadow: "0 1px 4px rgba(0,0,0,0.5)",
      }}
    >
      {name} · {pack}
    </span>
  );
}
