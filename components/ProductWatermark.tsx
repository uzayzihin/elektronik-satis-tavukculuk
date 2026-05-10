import type { Packaging } from "@/content/products";

export function ProductWatermark({
  packaging = "tabakli",
  isExternal = false,
  compact = false,
}: {
  packaging?: Packaging;
  isExternal?: boolean;
  compact?: boolean;
}) {
  const isFresh = isExternal || packaging === "fresh";
  const topLine = isFresh ? "Evka" : "Evka Surur";
  const bottomLine = isFresh
    ? "Fresh"
    : packaging === "dokme"
    ? "Dökme"
    : "Tabaklı";

  const topSize = compact
    ? "clamp(0.65rem, 4.5vw, 1.15rem)"
    : "clamp(0.85rem, 3vw, 1.75rem)";
  const bottomSize = compact
    ? "clamp(1rem, 9vw, 2.1rem)"
    : "clamp(2rem, 7.5vw, 4.5rem)";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[5] flex flex-col items-center justify-center pointer-events-none px-3 text-center"
    >
      <span
        className="font-extrabold uppercase tracking-tight text-white leading-[0.9]"
        style={{
          fontSize: topSize,
          textShadow:
            "0 2px 10px rgba(0,0,0,0.55), 0 0 2px rgba(0,0,0,0.45)",
        }}
      >
        {topLine}
      </span>
      <span
        className="font-black uppercase tracking-tight text-white leading-[0.85] mt-0.5"
        style={{
          fontSize: bottomSize,
          textShadow:
            "0 3px 12px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.5)",
        }}
      >
        {bottomLine}
      </span>
    </div>
  );
}
