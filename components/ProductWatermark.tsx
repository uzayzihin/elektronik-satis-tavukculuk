import type { Packaging } from "@/content/products";

export function ProductWatermark({
  packaging = "tabakli",
  compact = false,
}: {
  productName?: string;
  packaging?: Packaging;
  compact?: boolean;
}) {
  const pack = packaging === "dokme" ? "Dökme" : "Tabaklı";

  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute z-[5] pointer-events-none font-semibold uppercase tracking-wider text-white leading-tight ${
          compact
            ? "bottom-2 left-2 text-[25px] md:text-[28px]"
            : "bottom-3 left-3 text-[34px] md:text-[39px]"
        }`}
        style={{
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}
      >
        {pack}
      </span>
    </>
  );
}
