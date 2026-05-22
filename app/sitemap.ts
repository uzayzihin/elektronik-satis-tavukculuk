import type { MetadataRoute } from "next";
import { site } from "@/content/site.config";
import { products, packagings } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/urunler",
    "/urunler/yeni",
    "/hakkimizda",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kullanim-kosullari",
    "/iade-iptal",
    "/teslimat",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.flatMap((p) =>
    packagings.map((pk) => ({
      url: `${site.url}/urunler/${p.slug}/${pk.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...productRoutes];
}
