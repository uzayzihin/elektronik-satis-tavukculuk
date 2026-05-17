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
    primary: "905367344270",
    primaryDisplay: "+90 536 734 42 70",
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
    { label: "Alışveriş", href: "/", external: false },
    { label: "Tavuk", href: "/urunler", external: false },
    {
      label: "Fresh",
      href: "https://evkafresh.com",
      external: true,
      children: [
        { label: "Limonata", href: "https://evkafresh.com/limonata-ozutu-1", external: true },
        { label: "Donuk Mısır", href: "https://evkafresh.com/donuk-misir-1", external: true },
        { label: "Dondurulmuş Patates", href: "https://evkafresh.com/dondurulmus-patates-cesitleri", external: true },
        { label: "Dondurulmuş Sebze", href: "https://evkafresh.com/dondurulmus-sebze-cesitleri", external: true },
        { label: "Sos Çeşitleri", href: "https://evkafresh.com/sos-cesitleri-1", external: true },
        { label: "Pirinç & Bakliyat", href: "https://evkafresh.com/pirinc-bakliyat-cesitleri", external: true },
        { label: "Yağ Çeşitleri", href: "https://evkafresh.com/yag-cesitleri-1", external: true },
        { label: "Makarna Çeşitleri", href: "https://evkafresh.com/makarna-cesitleri-1", external: true },
      ],
    },
  ],

} as const;

export type SiteConfig = typeof site;
