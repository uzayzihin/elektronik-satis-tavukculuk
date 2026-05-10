import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site.config";

const points = [
  "İstanbul Gıda Toptancılar Çarşısı'nda güvenilir adres",
  "Restoran, market ve perakende müşterilere hizmet",
  "Her sipariş için günlük taze kesim",
  "7/24 ulaşılabilir WhatsApp hattı",
];

export function AboutTeaser() {
  return (
    <section className="bg-brand-light">
      <div className="container-x py-16 md:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] lg:aspect-square bg-white rounded-2xl overflow-hidden border border-brand-light shadow-sm">
          <div className="relative h-full flex items-center justify-center p-8">
            <Image
              src="/logo-v2.png"
              alt={site.brand.short}
              width={1024}
              height={1024}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-brand-primary text-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-3xl font-extrabold text-brand-accent leading-none">
                {new Date().getFullYear() - site.brand.foundedYear}+
              </div>
              <div className="text-sm font-semibold mt-1">Yıllık Tecrübe</div>
            </div>
            <div className="text-right text-xs text-white/70">
              {site.brand.foundedYear}'den
              <br />
              günümüze
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-3">
            Hakkımızda
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight mb-5">
            {site.brand.foundedYear}'den Beri Güvenilir Tedarikçiniz
          </h2>
          <p className="text-brand-text leading-relaxed mb-6">
            {site.brand.legal} olarak, İstanbul Gıda Toptancılar Çarşısı'nda
            beyaz et ve donuk gıda tedariği yapıyoruz. Toptan ve perakende
            müşterilerimize 7/24 hizmet veriyoruz.
          </p>
          <ul className="space-y-2.5 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-brand-text">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Daha Fazla Bilgi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
