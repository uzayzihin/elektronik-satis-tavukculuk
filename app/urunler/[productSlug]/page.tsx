import { redirect, notFound } from "next/navigation";
import { products, getProductBySlug } from "@/content/products";

export function generateStaticParams() {
  return products.map((p) => ({ productSlug: p.slug }));
}

export default async function ProductRedirectPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) notFound();
  redirect(`/urunler/${productSlug}/tabakli`);
}
