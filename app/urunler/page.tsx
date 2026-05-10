import type { Metadata } from "next";
import { products, freshProducts, packagings } from "@/content/products";
import { ProductsGrid } from "@/components/ProductsGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "27+ farklı tavuk kesimi — hepsi tabaklı ve dökme paketlemede. Toptan ve perakende için 7/24 tedarik.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsGrid
        products={[...products, ...freshProducts]}
        packagings={packagings}
      />
      <PromoBanner />
      <Testimonials />
      <FAQ />
    </>
  );
}
