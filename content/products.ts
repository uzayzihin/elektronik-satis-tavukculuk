export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  featured?: boolean;
};

export const categories: ProductCategory[] = [
  {
    slug: "butun-pilic",
    name: "Bütün Piliç",
    description: "Açık ve poşetli bütün piliç çeşitleri.",
  },
  {
    slug: "kanat",
    name: "Kanat Çeşitleri",
    description: "Klasik kanat, ızgara, kök ve yaprak kanat.",
  },
  {
    slug: "but",
    name: "But Çeşitleri",
    description: "Baket, çatalbut, kalçalı but ve özel but kesimleri.",
  },
  {
    slug: "gogus",
    name: "Göğüs Çeşitleri",
    description: "Bonfile, kovan, döner, jülyen ve şinitzel kesimleri.",
  },
  {
    slug: "sakatat",
    name: "Sakatat",
    description: "Tavuk ciğer ve taşlık.",
  },
  {
    slug: "hazir-ozel",
    name: "Hazır & Özel",
    description: "Sarma, çorbalık, çıtır ve özel hazırlanmış ürünler.",
  },
];

export const products: Product[] = [
  // Bütün Piliç
  { slug: "acik-butun-pilic", name: "Açık Bütün Piliç", category: "butun-pilic", description: "Tazeliği korunmuş açık bütün piliç.", featured: true },
  { slug: "poseti-butun-pilic", name: "Poşetli Bütün Piliç", category: "butun-pilic", description: "Hijyenik poşetli bütün piliç." },

  // Kanat
  { slug: "kanat", name: "Kanat", category: "kanat", description: "Klasik tavuk kanat." },
  { slug: "izgara-kanat", name: "Izgara Kanat", category: "kanat", description: "Izgaraya hazır özel kesim kanat.", featured: true },
  { slug: "kok-kanat", name: "Kök Kanat", category: "kanat", description: "Etli kök kanat." },
  { slug: "yaprak-kanat", name: "Yaprak Kanat", category: "kanat", description: "İnce kesim yaprak kanat." },

  // But
  { slug: "baket", name: "Baket", category: "but", description: "Klasik baket but." },
  { slug: "catalbut", name: "Çatalbut", category: "but", description: "Çatal kesim but." },
  { slug: "kalcali-but", name: "Kalçalı But", category: "but", description: "Kalçası ile birlikte but." },
  { slug: "special-but", name: "Special But", category: "but", description: "Özel kesim premium but.", featured: true },
  { slug: "kemiksiz-but-donerlik", name: "Kemiksiz But Dönerlik", category: "but", description: "Dönerlik kemiksiz but." },
  { slug: "derili-but-izgara", name: "Derili But Izgara", category: "but", description: "Derisi ile ızgaralık but." },

  // Göğüs
  { slug: "bonfile", name: "Bonfile", category: "gogus", description: "Tavuk bonfile.", featured: true },
  { slug: "kovan-gogus", name: "Kovan Göğüs", category: "gogus", description: "Bütün kovan göğüs." },
  { slug: "kemiksiz-gogus-donerlik", name: "Kemiksiz Göğüs Dönerlik", category: "gogus", description: "Dönerlik kemiksiz göğüs." },
  { slug: "muz-gogus", name: "Muz Göğüs", category: "gogus", description: "Muz şeklinde kesim göğüs." },
  { slug: "sacasiz-gogus", name: "Saçaksız Göğüs", category: "gogus", description: "Temizlenmiş saçaksız göğüs." },
  { slug: "derisiz-gogus-kus-basi", name: "Derisiz Göğüs Kuş Başı", category: "gogus", description: "Kuş başı doğranmış derisiz göğüs." },
  { slug: "derisiz-gogus-julyen", name: "Derisiz Göğüs Jülyen", category: "gogus", description: "Jülyen kesim derisiz göğüs." },
  { slug: "derisiz-gogus-sinitzel", name: "Derisiz Göğüs Şinitzel", category: "gogus", description: "Şinitzel için ince dövme göğüs.", featured: true },

  // Sakatat
  { slug: "tavuk-ciger", name: "Tavuk Ciğer", category: "sakatat", description: "Taze tavuk ciğer." },
  { slug: "tavuk-taslik", name: "Tavuk Taşlık", category: "sakatat", description: "Temizlenmiş tavuk taşlık." },

  // Hazır & Özel
  { slug: "sarma", name: "Sarma", category: "hazir-ozel", description: "Hazır sarma tavuk." },
  { slug: "corbalik", name: "Çorbalık", category: "hazir-ozel", description: "Çorba için hazırlanmış parçalar." },
  { slug: "citir", name: "Çıtır", category: "hazir-ozel", description: "Çıtır için hazır kesim.", featured: true },
  { slug: "izgara-tava", name: "Izgara Tava", category: "hazir-ozel", description: "Izgara/tava için hazır karışım." },
  { slug: "tavuk-kirinti", name: "Tavuk Kırıntı", category: "hazir-ozel", description: "Köfte/sucuk için tavuk kırıntı." },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
