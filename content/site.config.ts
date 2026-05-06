export const site = {
  domain: "estavukculuk.com",
  url: "https://estavukculuk.com",

  brand: {
    short: "Evka Surur Tavukçuluk",
    legal: "Evka Surur Tavukçuluk ve Donuk Gıda Sanayi ve Ticaret Limited Şirketi",
    tagline: "Beyaz Et • Donuk Gıda • Toptan & Perakende",
    foundedYear: 2007,
    description:
      "2007'den beri İstanbul Gıda Toptancılar Çarşısı'nda taze beyaz et ve donuk gıda tedariği. Toptan & perakende, 7/24 hizmet.",
  },

  whatsapp: {
    primary: "905432051907",
    secondary: "905367344270",
    primaryDisplay: "+90 543 205 19 07",
    secondaryDisplay: "+90 536 734 42 70",
  },

  contact: {
    address: "İstanbul Gıda Toptancılar Çarşısı, 14. Blok No:22",
    addressShort: "Gıda Toptancılar Çarşısı, İstanbul",
    hours: "7/24 Açık",
    hoursDetail: "Hafta içi, hafta sonu ve resmi tatiller dahil 7/24 hizmet",
    mapsQuery: "İstanbul Gıda Toptancılar Çarşısı 14 Blok No 22",
  },

  social: {
    instagramFresh: {
      handle: "@evkra.fresh",
      url: "https://instagram.com/evkra.fresh",
    },
    instagramMain: {
      handle: "@evkra.surur.tavukculuk",
      url: "https://instagram.com/evkra.surur.tavukculuk",
    },
  },

  nav: [
    { label: "Anasayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ],
} as const;

export type SiteConfig = typeof site;
