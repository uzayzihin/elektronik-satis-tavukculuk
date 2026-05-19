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
  
  const meatType = getMeatTypeBySlug(product.meatType);
  const title = `${product.name} (${pkg.name})`;
  const desc = `${product.description} Toptan ve perakende ${product.name} satışı Evka Surur Tavukçuluk'ta. İstanbul içi 7/24 teslimat imkanı.`;
  
  return {
    title,
    description: desc,
    keywords: [
      product.name,
      pkg.name,
      meatType?.name ?? "",
      "toptan tavuk",
      "piliç eti",
      "evka surur",
      "istanbul toptancılar çarşısı"
    ].filter(Boolean),
    openGraph: {
      title,
      description: desc,
      url: `https://estavukculuk.com/urunler/${product.slug}/${packaging}`,
      siteName: "Evka Surur Tavukçuluk",
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

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

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
          <FadeIn delay={0.1}>
            <div className="aspect-square bg-brand-light rounded-lg overflow-hidden relative">
              <Image
                src={`/images/products/${packaging}/${product.slug}.webp`}
                alt={product.name}
                width={1600}
                height={1600}
                quality={100}
                priority
                className="absolute inset-0 w-full h-full object-cover"
              />
              <ProductWatermark productName={product.name} packaging={packaging} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-xs md:text-sm font-mono uppercase tracking-[0.12em] text-brand-muted mb-4">
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

            <Link
              href={`/urunler/${product.slug}/${otherPackaging}`}
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-brand-muted hover:text-brand-accent mt-4"
            >
              {otherPkg.name} olarak gör
              <ChevronRight className="w-3 h-3" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-light">
          <div className="container-x py-14 md:py-16">
            <FadeIn delay={0.3} className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
                Aynı Kategoriden
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary">
                Benzer Ürünler
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProductCard product={p} packaging={packaging} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
