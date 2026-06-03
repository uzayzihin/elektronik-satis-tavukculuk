import type { Metadata } from "next";
import { Award, Building2, Truck, Users, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/content/site.config";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.brand.short} — taze beyaz et tedariği, toptan & perakende, 7/24 sipariş ve hızlı teslimat.`,
};

const values = [
  {
    icon: Award,
    title: "Tecrübe",
    text: "Beyaz et sektöründe yıllara dayanan tedarik bilgisi.",
  },
  {
    icon: Clock,
    title: "Süreklilik",
    text: "7/24 hizmet — siparişiniz her zaman önceliğimiz.",
  },
  {
    icon: ShieldCheck,
    title: "Kalite",
    text: "Günlük taze kesim, soğuk zincir, hijyenik paketleme.",
  },
  {
    icon: Truck,
    title: "Tedarik",
    text: "Toptan ve perakende — restoran, market, kasap, ev müşterisi.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-light border-b border-brand-border">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
              Hakkımızda
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-5 leading-[1.1] text-brand-navy">
              Beyaz Etin
              <br />
              <em className="text-brand-accent">premium adresi.</em>
            </h1>
            <p className="text-brand-text/85 text-lg leading-relaxed max-w-2xl">
              {site.brand.short}, taze beyaz et tedariğinde toptan ve perakende
              müşterilerine 27+ farklı kesim sunar. Günlük taze kesim, soğuk
              zincir ve hijyenik paketleme bizim varsayılanımızdır.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={Building2} number="7/24" label="Sipariş Hattı" />
              <Stat icon={Users} number="1000+" label="Müşteri Ağı" />
              <Stat icon={Award} number="27+" label="Ürün Çeşidi" />
              <Stat icon={Clock} number="Hızlı" label="Teslimat" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Hikayemiz
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-[-0.03em] text-brand-navy mb-6 leading-tight">
            Tezgahtan dijital vitrine.
          </h2>
          <div className="prose prose-lg space-y-5 text-brand-text leading-relaxed">
            <p>
              {site.brand.short} olarak ilkemiz tek:{" "}
              <strong>taze ürün, dürüst fiyat, hızlı servis.</strong> Beyaz et
              tedariğini geleneksel pazarlardan çağdaş bir dijital alışveriş
              deneyimine taşıdık.
            </p>
            <p>
              Restoranlara, marketlere, kasaplara ve ev müşterilerine 27+ farklı
              tavuk kesiminde tedarik sağlıyoruz.{" "}
              <strong>{site.contact.hours}</strong> sipariş kabul ediyor, en
              kısa sürede teslimat yapıyoruz.
            </p>
            <p>
              Çalıştığımız tedarikçilerle soğuk zinciri kırmadan, hijyenik
              paketleme ile size ulaştırıyoruz. Her sipariş bir güven ilişkisi
              — biz bu ilişkiyi dijital vitrinin arkasında titizlikle
              koruyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-x py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">
              Değerlerimiz
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-[-0.03em] text-brand-navy leading-tight">
              Neden bizi tercih etmelisiniz.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-6 border border-brand-border"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-brand-muted leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function Stat({
  icon: Icon,
  number,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white border border-brand-border rounded-xl p-5">
      <Icon className="w-6 h-6 text-brand-accent mb-3" />
      <div className="text-3xl font-serif font-medium tracking-[-0.03em] text-brand-navy mb-1">{number}</div>
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">{label}</div>
    </div>
  );
}
