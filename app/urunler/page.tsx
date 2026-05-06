import type { Metadata } from "next";
import { categories, getProductsByCategory } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "27+ farklı tavuk kesimi: bütün piliç, kanat, but, göğüs, sakatat ve hazır ürünler. Toptan ve perakende.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-primary text-white">
        <div className="container-x py-16 md:py-24">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-3">
            Ürün Katalogu
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tüm Ürünlerimiz
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            27+ farklı tavuk kesimi 6 ana kategoride. Fiyat ve stok bilgisi için
            WhatsApp üzerinden iletişime geçin.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                {cat.name}
                <span className="text-brand-accent">
                  {getProductsByCategory(cat.slug).length}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {categories.map((cat, idx) => {
        const products = getProductsByCategory(cat.slug);
        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className={idx % 2 === 0 ? "bg-white" : "bg-brand-light"}
          >
            <div className="container-x py-14 md:py-16">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
                  Kategori {idx + 1} / {categories.length}
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-2">
                  {cat.name}
                </h2>
                <p className="text-brand-muted">{cat.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
