import Link from "next/link";
import { Plus } from "lucide-react";
import { site } from "@/content/site.config";
import { waLink } from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const sections = [
  {
    title: "Alışveriş",
    items: [
      { label: "Tüm Ürünler", href: "/urunler" },
      { label: "Yeni Ürünler", href: "/urunler/yeni" },
    ],
  },
  {
    title: "Kurumsal",
    items: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "İletişim",
    items: [
      {
        label: site.contact.address,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapsQuery)}`,
        external: true,
      },
      {
        label: site.whatsapp.primaryDisplay,
        href: waLink("Merhaba, sipariş için yazıyorum."),
        external: true,
      },
    ],
  },
  {
    title: "Yasal",
    items: [
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "İade & İptal", href: "/iade-iptal" },
      { label: "Teslimat", href: "/teslimat" },
      { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-light border-t border-brand-border">
      <div className="container-x pt-10 pb-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="text-center">
            <div className="font-serif text-brand-navy text-4xl md:text-5xl leading-none font-semibold tracking-[-0.02em]">
              ES
            </div>
            <div className="font-semibold text-brand-navy text-xs md:text-sm tracking-[0.18em] uppercase mt-2">
              Tavukçuluk
            </div>
          </div>
          <p className="mt-4 text-sm text-brand-muted italic">
            Beyaz etin adresi.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a
              href={site.social.instagramMain.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram: ${site.social.instagramMain.handle}`}
              className="w-9 h-9 inline-flex items-center justify-center rounded-full text-brand-navy hover:text-brand-accent transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-brand-border">
          {sections.map((section) => (
            <details key={section.title} className="group border-b border-brand-border">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-mono font-black uppercase tracking-[0.04em] text-xs text-brand-navy">
                  {section.title}
                </span>
                <Plus className="w-4 h-4 text-brand-muted transition-transform group-open:rotate-45" />
              </summary>
              <ul className="pb-4 space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-text hover:text-brand-accent"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-brand-text hover:text-brand-accent"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <p className="text-center text-[10px] text-brand-muted mt-8 font-mono uppercase tracking-wider">
          © {new Date().getFullYear()} {site.brand.short}
        </p>
      </div>
    </footer>
  );
}
