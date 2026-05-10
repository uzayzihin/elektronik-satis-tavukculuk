import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/content/products";

export function CategoryGrid() {
  return (
    <section className="bg-brand-soft">
      <div className="container-x py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
            Ürün Kategorileri
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
            Aradığınız Her Kesim Burada
          </h2>
          <p className="text-brand-muted mt-4">
            6 ana kategoride 27+ farklı tavuk kesimi. Toptan ve perakende olarak temin edilebilir.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/urunler#${cat.slug}`}
                className="group relative overflow-hidden bg-white hover:bg-brand-soft border border-brand-border hover:border-brand-primary text-brand-navy rounded-lg p-6 md:p-8 transition-all hover:shadow-lg"
              >
                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                    {count} Ürün
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-brand-navy">{cat.name}</h3>
                  <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all">
                    Ürünleri Gör
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <Image
                  src="/logo-v2.png"
                  alt=""
                  width={512}
                  height={512}
                  aria-hidden="true"
                  className="absolute -right-12 -bottom-12 w-56 h-56 object-contain opacity-[0.06] select-none pointer-events-none"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
