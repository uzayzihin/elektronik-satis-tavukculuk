import { Award, Clock, Package, Truck } from "lucide-react";

const items = [
  { icon: Award, title: "2007'den Beri", subtitle: "18+ yıl sektör tecrübesi" },
  { icon: Clock, title: "7/24 Hizmet", subtitle: "Hafta içi & sonu açığız" },
  { icon: Package, title: "27+ Ürün Çeşidi", subtitle: "Her kesimde alternatif" },
  { icon: Truck, title: "Toptan & Perakende", subtitle: "Restoran, market, ev" },
];

export function TrustSignals() {
  return (
    <section className="bg-brand-light border-y border-brand-light">
      <div className="container-x py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <div className="font-bold text-brand-primary leading-tight">{title}</div>
              <div className="text-sm text-brand-muted">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
