import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <Link
      href="/hakkimizda"
      className="relative block overflow-hidden bg-brand-dark text-brand-light aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8] lg:aspect-[24/7] group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/40" />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-brand-light/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-px bg-brand-light/10"
      />

      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-brand-light/55 mb-3 md:mb-4">
          Bizim hikayemiz
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1] tracking-tight">
          Beyaz etin
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic leading-[1] tracking-tight text-brand-accent mt-1">
          premium adresi.
        </h2>
        <span className="inline-flex items-center gap-2 mt-5 md:mt-6 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/75 group-hover:text-brand-light transition-colors">
          Hikâyemizi keşfedin
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
