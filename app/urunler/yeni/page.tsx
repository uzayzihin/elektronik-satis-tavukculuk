import type { Metadata } from "next";
import { getNewProducts, packagings } from "@/content/products";
import { ProductsGrid } from "@/components/ProductsGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Yeni Ürünler",
  description:
    "ES Tavukçuluk'tan yeni ürünler — sarma, çıtır, ızgara tava ve daha fazlası. Toptan & perakende, WhatsApp'tan sipariş.",
};

export default function NewProductsPage() {
  return (
    <>
      <ProductsGrid products={getNewProducts()} packagings={packagings} />
      <PromoBanner />
      <Testimonials />
      <FAQ />
    </>
  );
}
