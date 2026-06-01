export const site = {
  domain: "estavukculuk.com",
  url: "https://estavukculuk.com",

  brand: {
    short: "Elektronik Satış Tavukçuluk",
    legal: "Elektronik Satış Tavukçuluk",
    tagline: "Beyaz Et • Toptan & Perakende • 7/24 Tedarik",
    foundedYear: 2020,
    description:
      "Elektronik Satış Tavukçuluk — günlük taze beyaz et tedariği, toptan ve perakende. 7/24 sipariş ve hızlı teslimat.",
  },

  whatsapp: {
    primary: "905000000000",
    primaryDisplay: "+90 500 000 00 00",
  },

  contact: {
    address: "Adres bilgisi mağaza yöneticisi tarafından düzenlenir",
    addressShort: "Türkiye",
    hours: "7/24 Açık",
    hoursDetail: "Hafta içi, hafta sonu ve resmi tatiller dahil 7/24 hizmet",
    mapsQuery: "Türkiye",
  },

  social: {
    instagramMain: {
      handle: "@estavukculuk",
      url: "https://instagram.com/",
    },
  },

  nav: [
    { label: "Alışveriş", href: "/", external: false },
    { label: "Tavuk", href: "/urunler", external: false },
    { label: "Hakkımızda", href: "/hakkimizda", external: false },
    { label: "İletişim", href: "/iletisim", external: false },
  ],

} as const;

export type SiteConfig = typeof site;
