import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site.config";

export function PromoBanner() {
  const yearsActive = new Date().getFullYear() - site.brand.foundedYear;

  return (
    <Link
      href="/hakkimizda"
      className="relative block overflow-hidden bg-brand-dark text-white aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8] lg:aspect-[24/7] group"
    >
      <div className="absolute inset-0 opacity-[0.10]">
        <Image
          src="/logo-v2.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-contain object-right scale-[1.4] md:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-px bg-white/10"
      />

      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-3 md:mb-4">
          EST. {site.brand.foundedYear} · {yearsActive}+ Yıl
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
          BEYAZ ETİN
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-[0.9] tracking-tight text-white/65 mt-1">
          adresi.
        </h2>
        <span className="inline-flex items-center gap-2 mt-5 md:mt-6 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
          Hikâyemizi keşfedin
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
