import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type CategoryCard = {
  title: string;
  label: string;
  image: string;
  href: string;
};

const cards: CategoryCard[] = [
  {
    title: "Tabaklı",
    label: "Perakende & Ev",
    image: "/images/products/tabakli/kovan-gogus.webp",
    href: "/urunler",
  },
  {
    title: "Dökme",
    label: "Toptan & Restoran",
    image: "/images/products/dokme/kovan-gogus.webp",
    href: "/urunler",
  },
  {
    title: "Yeni Ürünler",
    label: "Sezon Kesimleri",
    image: "/images/products/tabakli/citir.webp",
    href: "/urunler/yeni",
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="container-x pt-10 md:pt-14 pb-2">
        <h2
          className="font-serif tracking-[-0.03em] font-medium text-brand-navy leading-tight mb-6 md:mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Kategoriler
        </h2>
      </div>

      <div className="container-x pb-12 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((c) => (
            <Link key={c.label} href={c.href} className="group block">
              <div className="relative aspect-square bg-brand-light overflow-hidden rounded-md border border-brand-border/40 shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div
                  className="absolute inset-x-0 top-6 md:top-8 flex justify-center px-6 pointer-events-none"
                >
                  <h3
                    className="font-serif tracking-[-0.03em] font-medium text-brand-navy text-center leading-[1] drop-shadow-[0_2px_8px_rgba(250,247,240,0.85)]"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                  >
                    {c.title}
                  </h3>
                </div>

                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-stretch rounded-md overflow-hidden shadow hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all">
                  <span className="bg-brand-navy text-brand-light px-5 md:px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em]">
                    İncele
                  </span>
                  <span className="bg-brand-accent text-brand-navy px-3 py-3 flex items-center justify-center group-hover:bg-brand-accent-dark transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <p className="text-center mt-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">
                {c.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
