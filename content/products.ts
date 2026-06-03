export type Packaging = "tabakli" | "dokme";

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
};

export type MeatType = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  meatType: string;
  description: string;
  basePrice: number;
  featured?: boolean;
  isNew?: boolean;
  externalUrl?: string;
  image?: string;
};

export const packagings: ProductCategory[] = [
  {
    slug: "tabakli",
    name: "Tabaklı",
    description:
      "Tabaklı paketleme — perakende, market ve ev kullanımı için porsiyonlanmış hijyenik tabaklar.",
  },
  {
    slug: "dokme",
    name: "Dökme",
    description:
      "Dökme paketleme — restoran, kasap ve toptan kullanım için ekonomik döküm sevkiyat.",
  },
];

export const meatTypes: MeatType[] = [
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
  { slug: "acik-butun-pilic", name: "Açık Bütün Piliç", meatType: "butun-pilic", description: "Tazeliği korunmuş açık bütün piliç.", basePrice: 115, featured: true },
  { slug: "poseti-butun-pilic", name: "Poşetli Bütün Piliç", meatType: "butun-pilic", description: "Hijyenik poşetli bütün piliç.", basePrice: 120 },

  // Kanat
  { slug: "kanat", name: "Kanat", meatType: "kanat", description: "Klasik tavuk kanat.", basePrice: 210 },
  { slug: "izgara-kanat", name: "Izgara Kanat", meatType: "kanat", description: "Izgaraya hazır özel kesim kanat.", basePrice: 230, featured: true },
  { slug: "kok-kanat", name: "Kök Kanat", meatType: "kanat", description: "Etli kök kanat.", basePrice: 180 },
  { slug: "yaprak-kanat", name: "Yaprak Kanat", meatType: "kanat", description: "İnce kesim yaprak kanat.", basePrice: 240 },

  // But
  { slug: "baket", name: "Baket", meatType: "but", description: "Klasik baket but.", basePrice: 145 },
  { slug: "catalbut", name: "Çatalbut", meatType: "but", description: "Çatal kesim but.", basePrice: 135 },
  { slug: "kalcali-but", name: "Kalçalı But", meatType: "but", description: "Kalçası ile birlikte but.", basePrice: 125 },
  { slug: "special-but", name: "Special But", meatType: "but", description: "Özel kesim premium but.", basePrice: 165, featured: true },
  { slug: "kemiksiz-but-donerlik", name: "Kemiksiz But Dönerlik", meatType: "but", description: "Dönerlik kemiksiz but.", basePrice: 195 },
  { slug: "derili-but-izgara", name: "Derili But Izgara", meatType: "but", description: "Derisi ile ızgaralık but.", basePrice: 175 },

  // Göğüs
  { slug: "bonfile", name: "Bonfile", meatType: "gogus", description: "Tavuk bonfile.", basePrice: 250, featured: true },
  { slug: "kovan-gogus", name: "Kovan Göğüs", meatType: "gogus", description: "Bütün kovan göğüs.", basePrice: 230 },
  { slug: "kemiksiz-gogus-donerlik", name: "Kemiksiz Göğüs Dönerlik", meatType: "gogus", description: "Dönerlik kemiksiz göğüs.", basePrice: 240 },
  { slug: "muz-gogus", name: "Muz Göğüs", meatType: "gogus", description: "Muz şeklinde kesim göğüs.", basePrice: 235 },
  { slug: "sacasiz-gogus", name: "Saçaksız Göğüs", meatType: "gogus", description: "Temizlenmiş saçaksız göğüs.", basePrice: 225 },
  { slug: "derisiz-gogus-kus-basi", name: "Derisiz Göğüs Kuş Başı", meatType: "gogus", description: "Kuş başı doğranmış derisiz göğüs.", basePrice: 255 },
  { slug: "derisiz-gogus-julyen", name: "Derisiz Göğüs Jülyen", meatType: "gogus", description: "Jülyen kesim derisiz göğüs.", basePrice: 260 },
  { slug: "derisiz-gogus-sinitzel", name: "Derisiz Göğüs Şinitzel", meatType: "gogus", description: "Şinitzel için ince dövme göğüs.", basePrice: 265, featured: true },

  // Sakatat
  { slug: "tavuk-ciger", name: "Tavuk Ciğer", meatType: "sakatat", description: "Taze tavuk ciğer.", basePrice: 95 },
  { slug: "tavuk-taslik", name: "Tavuk Taşlık", meatType: "sakatat", description: "Temizlenmiş tavuk taşlık.", basePrice: 90 },

  // Hazır & Özel
  { slug: "sarma", name: "Sarma", meatType: "hazir-ozel", description: "Hazır sarma tavuk.", basePrice: 190, isNew: true },
  { slug: "corbalik", name: "Çorbalık", meatType: "hazir-ozel", description: "Çorba için hazırlanmış parçalar.", basePrice: 75 },
  { slug: "citir", name: "Çıtır", meatType: "hazir-ozel", description: "Çıtır için hazır kesim.", basePrice: 215, featured: true, isNew: true },
  { slug: "izgara-tava", name: "Izgara Tava", meatType: "hazir-ozel", description: "Izgara/tava için hazır karışım.", basePrice: 205, isNew: true },
  { slug: "tavuk-kirinti", name: "Tavuk Kırıntı", meatType: "hazir-ozel", description: "Köfte/sucuk için tavuk kırıntı.", basePrice: 80 },
];

export function isValidPackaging(s: string): s is Packaging {
  return s === "tabakli" || s === "dokme";
}

export function getPackagingBySlug(slug: string): ProductCategory | undefined {
  return packagings.find((p) => p.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getMeatTypeBySlug(slug: string): MeatType | undefined {
  return meatTypes.find((m) => m.slug === slug);
}

export function getProductsByMeatType(slug: string): Product[] {
  return products.filter((p) => p.meatType === slug);
}

export function getFeaturedProducts(): Product[] {
  const order = ["bonfile", "citir", "acik-butun-pilic"];
  const featured = products.filter((p) => p.featured);
  return featured.sort((a, b) => {
    const ai = order.indexOf(a.slug);
    const bi = order.indexOf(b.slug);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

export function getNewProducts(): Product[] {
  const nu = products.filter((p) => p.isNew);
  const extras = products.filter(
    (p) => p.meatType === "gogus" && (p.slug === "derisiz-gogus-julyen" || p.slug === "muz-gogus")
  );
  return [...nu, ...extras].slice(0, 8);
}

export function getRestaurantProducts(): Product[] {
  const order = [
    "kemiksiz-but-donerlik",
    "kemiksiz-gogus-donerlik",
    "kanat",
    "izgara-kanat",
    "kok-kanat",
    "yaprak-kanat",
    "derisiz-gogus-kus-basi",
    "derisiz-gogus-sinitzel",
    "derisiz-gogus-julyen",
    "sacasiz-gogus",
    "corbalik",
    "izgara-tava",
    "tavuk-kirinti",
  ];
  return order
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => !!p);
}
