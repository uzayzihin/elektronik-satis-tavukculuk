import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { categories, getProductsByCategory } from "@/content/products";

const featuredCategorySlugs = ["butun-pilic", "gogus", "but"];

const categoryHighlights: Record<string, string> = {
  "butun-pilic": "Açık veya poşetli, çiftlikten direkt — restoran ve ev tüketimine ideal.",
  gogus: "Bonfile'den şinitzele, jülyenden döner kesime — her tarif için doğru kalınlık.",
  but: "Klasik baket ve çatalbut'tan özel kesim 'special but'a kadar geniş yelpaze.",
};

export function CategoryFeatures() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
            Kategori Detayları
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight">
            Her Kategoride Uzmanlık
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {featuredCategorySlugs.map((slug, idx) => {
            const cat = categories.find((c) => c.slug === slug);
            if (!cat) return null;
            const products = getProductsByCategory(slug);
            const reverse = idx % 2 === 1;

            return (
              <div
                key={slug}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-square">
                    <div className="absolute -inset-3 bg-brand-accent/10 rounded-3xl rotate-3" />
                    <div className="relative w-full h-full bg-brand-light rounded-3xl p-12 flex items-center justify-center">
                      <Image
                        src="/logo-v2.png"
                        alt={cat.name}
                        width={1024}
                        height={1024}
                        className="w-full h-full object-contain opacity-90"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-brand-primary text-white rounded-2xl px-5 py-3 shadow-xl">
                      <div className="text-3xl font-extrabold leading-none text-brand-accent">
                        {products.length}
                      </div>
                      <div className="text-xs font-semibold opacity-90">Çeşit</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-3">
                    Kategori {idx + 1}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary leading-tight mb-4">
                    {cat.name}
                  </h3>
                  <p className="text-lg text-brand-text leading-relaxed mb-6">
                    {categoryHighlights[slug] ?? cat.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                    {products.map((p) => (
                      <li
                        key={p.slug}
                        className="flex items-center gap-2 text-brand-text"
                      >
                        <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span className="text-sm">{p.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/urunler#${slug}`}
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    {cat.name} Ürünlerini Gör
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
