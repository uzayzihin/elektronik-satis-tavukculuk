import { Truck, Snowflake, Clock } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    sub: "İstanbul içi aynı gün",
  },
  {
    icon: Snowflake,
    title: "Hijyenik Paket",
    sub: "Soğuk zincir korunur",
  },
  {
    icon: Clock,
    title: "7/24 Sipariş",
    sub: "Hafta sonu dahil",
  },
];

export function TrustBand() {
  return (
    <section className="bg-brand-light border-y border-brand-border">
      <div className="container-x py-10 md:py-12 grid grid-cols-3 gap-4 md:gap-6">
        {items.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center"
          >
            <Icon className="w-7 h-7 md:w-9 md:h-9 text-brand-navy mb-2 md:mb-3" />
            <div className="font-bold text-brand-navy text-[10px] md:text-xs uppercase tracking-[0.2em] leading-tight">
              {title}
            </div>
            <div className="text-[8px] md:text-[10px] text-brand-muted mt-1.5 uppercase tracking-[0.14em] leading-tight font-medium">
              {sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
