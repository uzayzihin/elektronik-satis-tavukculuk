import { ShieldCheck, Snowflake, Truck, Clock } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Güvenli Sipariş",
    sub: "WhatsApp üzerinden hızlı teyit",
  },
  {
    icon: Snowflake,
    title: "Hijyenik Paketleme",
    sub: "Soğuk zincir korunur",
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    sub: "İstanbul içi aynı gün",
  },
  {
    icon: Clock,
    title: "7/24 Hizmet",
    sub: "Hafta sonu ve tatiller dahil",
  },
];

export function TrustBand() {
  return (
    <section className="bg-brand-soft border-y border-brand-border">
      <div className="container-x py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center">
              <Icon className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <div className="font-mono font-bold text-brand-navy text-[11px] md:text-xs uppercase tracking-[0.15em]">
                {title}
              </div>
              <div className="font-mono text-[10px] md:text-[11px] text-brand-muted mt-1 uppercase tracking-[0.1em]">
                {sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
