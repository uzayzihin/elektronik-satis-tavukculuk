import { ShieldCheck, Snowflake, BadgeCheck, Truck, Zap } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Hijyenik Paketleme" },
  { icon: Snowflake, label: "Soğuk Zincir" },
  { icon: BadgeCheck, label: "Kalite Garantisi" },
  { icon: Truck, label: "Hızlı Teslimat" },
  { icon: Zap, label: "Günlük Taze Kesim" },
];

export function TrustBadges() {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="container-x py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
              <Icon className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
