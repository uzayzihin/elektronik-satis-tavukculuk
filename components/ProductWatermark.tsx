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

      <div
        aria-hidden="true"
        className={`absolute z-[6] pointer-events-none bg-brand-light flex flex-col items-center justify-center leading-none border border-brand-border ${
          compact
            ? "bottom-2 right-2 px-2.5 py-1.5"
            : "bottom-3 right-3 px-3.5 py-2 md:px-4 md:py-2.5"
        }`}
      >
        <span
          className={`font-serif font-semibold text-brand-navy tracking-[-0.02em] ${
            compact ? "text-[18px]" : "text-[24px] md:text-[30px]"
          }`}
        >
          ES
        </span>
        <span
          className={`text-brand-navy uppercase font-semibold tracking-[0.22em] mt-0.5 ${
            compact ? "text-[5px]" : "text-[6px] md:text-[7px]"
          }`}
        >
          Tavukçuluk
        </span>
      </div>
    </>
  );
}
