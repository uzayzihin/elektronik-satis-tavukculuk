import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function LimonataPromo() {
  return (
    <section className="bg-brand-light">
      <div className="container-x py-10 md:py-14">
        <a
          href="https://evkafresh.com/limonata-ozutu-1"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-md aspect-[4/3] sm:aspect-[16/9] md:aspect-[24/9] group"
        >
          <Image
            src="/products/fresh/limonata.webp"
            alt="Evka Fresh Limonata Özütü"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-2xl">
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Evka Fresh
              <br />
              Limonata
            </h2>
            <p className="font-mono text-[11px] md:text-sm uppercase tracking-[0.15em] text-white/85 mt-4 md:mt-6 max-w-md">
              Soğuk limonata özütü — restoran ve ev mutfağı için Evka Fresh kalitesiyle.
            </p>
          </div>

          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-stretch shadow-lg">
            <span className="bg-white text-brand-navy px-5 md:px-6 py-3 font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]">
              Shop Limonata
            </span>
            <span className="bg-brand-primary text-white px-3 py-3 flex items-center justify-center transition-colors group-hover:bg-brand-accent-dark">
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
