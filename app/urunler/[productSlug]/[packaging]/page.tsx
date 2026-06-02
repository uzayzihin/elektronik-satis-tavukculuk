import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { ProductImageNavigator } from "@/components/ProductImageNavigator";
import { ProductTrustBadges } from "@/components/ProductTrustBadges";

export function generateStaticParams() {
  return products.flatMap((p) =>
    packagings.map((pk) => ({
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
  
  const meatType = getMeatTypeBySlug(product.meatType);
  const title = `${product.name} (${pkg.name})`;
  const desc = `${product.description} Toptan ve perakende ${product.name} satışı ES Tavukçuluk'ta. 7/24 sipariş ve hızlı teslimat.`;
  
  return {
    title,
    description: desc,
    keywords: [
      product.name,
      pkg.name,
      meatType?.name ?? "",
      "toptan tavuk",
      "piliç eti",
      "es tavukçuluk",
      "online tavuk siparişi"
    ].filter(Boolean),
    openGraph: {
      title,
      description: desc,
      url: `https://estavukculuk.com/urunler/${product.slug}/${packaging}`,
      siteName: "ES Tavukçuluk",
      images: [
        {
          url: `https://estavukculuk.com/images/products/${packaging}/${product.slug}.webp`,
          width: 800,
          height: 800,
          alt: `${product.name} - ${pkg.name}`,
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [`https://estavukculuk.com/images/products/${packaging}/${product.slug}.webp`],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string; packaging: string }>;
}) {
  const { productSlug, packaging } = await params;
  if (!isValidPackaging(packaging)) notFound();
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
        className="bg-white border-b border-brand-border"
      >
        <div className="container-x py-2 flex items-center gap-1 text-xs text-brand-muted overflow-x-auto whitespace-nowrap">
          <Link href="/urunler" className="hover:text-brand-accent">
            Tavuk
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <span className="text-brand-navy font-semibold">{product.name}</span>
        </div>
      </nav>

      <section className="bg-white">
        <div className="container-x py-4 md:py-10 grid lg:grid-cols-2 gap-4 md:gap-10 lg:gap-16">
          <div>
            <div className="aspect-square bg-brand-light rounded-lg overflow-hidden relative">
              <ProductImageNavigator
                productSlug={product.slug}
                productName={product.name}
                packaging={packaging}
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-brand-navy leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-xs md:text-sm font-mono uppercase tracking-[0.04em] text-brand-muted mb-4">
              {pkg.name} · {meatType?.name ?? "Tavuk"}
            </p>

            <ProductDetailActions
              product={{
                slug: product.slug,
                name: product.name,
              }}
              packaging={packaging}
            />

            <p className="text-sm md:text-base text-brand-text leading-relaxed mt-5">
              {product.description}
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href={`/urunler/${product.slug}/${otherPackaging}`}
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-brand-muted hover:text-brand-accent mt-4 w-max"
              >
                {otherPkg.name} olarak gör
                <ChevronRight className="w-3 h-3" />
              </Link>
              
              <ProductTrustBadges />
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
              <h2 className="text-3xl md:text-4xl font-serif text-brand-navy">
                Benzer ürünler.
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
    </>
  );
}
