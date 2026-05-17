import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  products,
  getProductBySlug,
  getMeatTypeBySlug,
  getProductsByMeatType,
  getPackagingBySlug,
  isValidPackaging,
  packagings,
  type Packaging,
} from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailActions } from "@/components/ProductDetailActions";
import { ProductWatermark } from "@/components/ProductWatermark";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";

export function generateStaticParams() {
  const internalPackagings = packagings.filter((pk) => pk.slug !== "fresh");
  return products.flatMap((p) =>
    internalPackagings.map((pk) => ({
      productSlug: p.slug,
      packaging: pk.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productSlug: string; packaging: string }>;
}): Promise<Metadata> {
  const { productSlug, packaging } = await params;
  const product = getProductBySlug(productSlug);
  const pkg = getPackagingBySlug(packaging);
  if (!product || !pkg) return { title: "Ürün bulunamadı" };
  return {
    title: `${product.name} (${pkg.name})`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string; packaging: string }>;
}) {
  const { productSlug, packaging } = await params;
  if (!isValidPackaging(packaging) || packaging === "fresh") notFound();
  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  const pkg = getPackagingBySlug(packaging) as { slug: Packaging; name: string; description: string };
  const meatType = getMeatTypeBySlug(product.meatType);
  const otherPackaging: Packaging = packaging === "tabakli" ? "dokme" : "tabakli";
  const otherPkg = getPackagingBySlug(otherPackaging)!;

  const related = getProductsByMeatType(product.meatType)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="bg-brand-light border-b border-brand-light"
      >
        <div className="container-x py-3 flex items-center gap-1.5 text-sm overflow-x-auto whitespace-nowrap">
          <Link href="/" className="text-brand-muted hover:text-brand-accent">
            Anasayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
          <Link
            href="/urunler"
            className="text-brand-muted hover:text-brand-accent"
          >
            Ürünler
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
          <span className="text-brand-muted">{pkg.name}</span>
          {meatType && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
              <span className="text-brand-muted">{meatType.name}</span>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
          <span className="text-brand-primary font-semibold">{product.name}</span>
        </div>
      </nav>

      <section className="bg-white">
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="aspect-square bg-brand-light rounded-2xl flex items-center justify-center overflow-hidden relative">
              <Image
                src={`/images/products/${packaging}/${product.slug}.webp`}
                alt={product.name}
                width={1600}
                height={1600}
                priority
                className="absolute inset-0 w-full h-full object-cover"
              />
              <ProductWatermark productName={product.name} packaging={packaging} />
              <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-10">
                Günlük Taze
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-accent mb-3">
              {pkg.name} · {meatType?.name ?? "Tavuk"}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-brand-text leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="bg-brand-light rounded-lg p-4 mb-6 border border-brand-light">
              <p className="text-sm text-brand-text">
                <strong className="text-brand-primary">Fiyat bilgisi</strong> sipariş
                miktarına göre değişir. Toptan ve perakende fiyatlar için sepete
                ekleyip WhatsApp üzerinden teyit alın — anında dönüş yapıyoruz.
              </p>
            </div>

            <ProductDetailActions
              product={{
                slug: product.slug,
                name: product.name,
              }}
              packaging={packaging}
            />

            <div className="mt-6 pt-6 border-t border-brand-light">
              <p className="text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                Diğer Paketleme
              </p>
              <Link
                href={`/urunler/${product.slug}/${otherPackaging}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent-dark"
              >
                {otherPkg.name} olarak görüntüle
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-light">
          <div className="container-x py-14 md:py-16">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
                Aynı Kategoriden
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary">
                Benzer Ürünler
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} packaging={packaging} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <CTABanner />
    </>
  );
}
