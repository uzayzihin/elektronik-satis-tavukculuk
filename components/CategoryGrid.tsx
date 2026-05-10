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
    title: "Evka Surur",
    label: "Evka Surur",
    image: "/products/kovan-gogus.jpg",
    href: "/urunler",
  },
  {
    title: "Yeni Ürünler",
    label: "Yeni Ürünler",
    image: "/products/citir.jpg",
    href: "/urunler",
  },
  {
    title: "Evka Fresh",
    label: "Evka Fresh",
    image: "/products/fresh/limonata.webp",
    href: "/urunler",
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="container-x pt-10 md:pt-14 pb-2">
        <h2
          className="font-extrabold uppercase tracking-tight text-brand-navy leading-none mb-6 md:mb-8"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Kategoriler
        </h2>
      </div>

      <div className="container-x pb-12 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((c) => (
            <Link key={c.label} href={c.href} className="group block">
              <div className="relative aspect-[4/5] bg-brand-light overflow-hidden rounded-md">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 top-6 md:top-8 flex justify-center px-6 pointer-events-none"
                >
                  <h3
                    className="font-extrabold uppercase tracking-tight text-brand-navy text-center leading-[0.9] drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]"
                    style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}
                  >
                    {c.title}
                  </h3>
                </div>

                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-stretch shadow-lg">
                  <span className="bg-brand-dark text-white px-5 md:px-6 py-3 font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]">
                    Shop Now
                  </span>
                  <span className="bg-white text-brand-primary px-3 py-3 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <p className="text-center mt-3 font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
                {c.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
