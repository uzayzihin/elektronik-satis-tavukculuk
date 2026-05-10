import type { Metadata } from "next";
import { Award, Building2, Truck, Users, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/content/site.config";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.brand.legal} — 2007'den beri İstanbul Gıda Toptancılar Çarşısı'nda beyaz et tedariği.`,
};

const values = [
  {
    icon: Award,
    title: "Tecrübe",
    text: "2007'den bu yana sektörde aktif. Her yıl artan müşteri portföyü.",
  },
  {
    icon: Clock,
    title: "Süreklilik",
    text: "7/24 hizmet — siparişiniz her zaman bizim önceliğimiz.",
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
  const yearsActive = new Date().getFullYear() - site.brand.foundedYear;

  return (
    <>
      <section className="bg-white border-b border-brand-border">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-3">
              Hakkımızda
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-brand-navy">
              {site.brand.foundedYear}'den Beri
              <br />
              <span className="text-brand-primary">Beyaz Etin Adresi</span>
            </h1>
            <p className="text-brand-text/85 text-lg leading-relaxed max-w-2xl">
              {site.brand.legal} olarak {yearsActive} yıldır İstanbul Gıda
              Toptancılar Çarşısı'nda hizmet veriyoruz. Toptan ve perakende
              müşterilerimize 27+ farklı tavuk kesimi sunuyoruz.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={Building2} number={`${yearsActive}+`} label="Yıllık Tecrübe" />
              <Stat icon={Users} number="1000+" label="Müşteri" />
              <Stat icon={Award} number="27+" label="Ürün Çeşidi" />
              <Stat icon={Clock} number="7/24" label="Hizmet" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-3">
            Hikayemiz
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-6">
            Küçük Bir Tezgahtan Güvenilir Tedarikçiye
          </h2>
          <div className="prose prose-lg space-y-5 text-brand-text leading-relaxed">
            <p>
              {site.brand.foundedYear} yılında İstanbul Gıda Toptancılar
              Çarşısı'nda küçük bir tezgah olarak başladık. İlk günden bu yana
              ilkemiz tek: <strong>taze ürün, dürüst fiyat, hızlı servis.</strong>
            </p>
            <p>
              Bugün {yearsActive} yıllık tecrübemizle restoranlara, marketlere,
              kasaplara ve ev müşterilerine 27+ farklı tavuk kesiminde tedarik
              sağlıyoruz. <strong>{site.contact.hours}</strong> sipariş kabul
              ediyor, en kısa sürede teslimat yapıyoruz.
            </p>
            <p>
              Beyaz et ve donuk gıda alanında çalıştığımız partnerlerimizle
              soğuk zinciri kırmadan, hijyenik paketleme ile size ulaştırıyoruz.
              Şirket olarak Sanayi ve Ticaret Limited Şirketi statüsünde, vergi
              ve standartlara uygun faaliyet gösteriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light">
        <div className="container-x py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
              Değerlerimiz
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary">
              Neden Bizi Tercih Etmelisiniz
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-6 border border-brand-light"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{title}</h3>
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
    <div className="bg-brand-soft border border-brand-border rounded-xl p-5">
      <Icon className="w-6 h-6 text-brand-primary mb-3" />
      <div className="text-3xl font-extrabold mb-1 text-brand-navy">{number}</div>
      <div className="text-sm text-brand-muted">{label}</div>
    </div>
  );
}
