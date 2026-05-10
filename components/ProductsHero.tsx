import Image from "next/image";

export function ProductsHero() {
  return (
    <section className="relative bg-brand-primary text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 60%, white 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px, 90px 90px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.3), transparent 50%)",
        }}
      />

      <div className="container-x relative h-56 md:h-72 lg:h-80 flex items-center justify-center">
        <Image
          src="/logo-icon.png"
          alt=""
          width={1024}
          height={530}
          priority
          aria-hidden="true"
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 h-40 md:h-56 lg:h-64 w-auto opacity-40 invert"
        />
        <div className="relative z-10 text-left w-full">
          <p className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
            Ürün Katalogu
          </p>
          <h1
            className="font-extrabold uppercase leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Tüm Ürünler
          </h1>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.1em] text-white/70 mt-3 max-w-md">
            27+ Çeşit · 6 Kategori · 7/24 Sipariş
          </p>
        </div>
      </div>
    </section>
  );
}
