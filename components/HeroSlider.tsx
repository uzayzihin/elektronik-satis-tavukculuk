"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

type Slide = {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primary: { label: string; href: string; external?: boolean; icon?: "wa" | "arrow" | "external" };
  secondary?: { label: string; href: string; external?: boolean };
  bottomBadge?: { primary: string; secondary: string };
};

const slides: Slide[] = [
  {
    badge: `${2007}'den Beri • 7/24`,
    title: (
      <>
        En Çok Satanlar
        <br />
        <span className="text-brand-accent">Taze Beyaz Et</span>
      </>
    ),
    subtitle: (
      <>
        Bonfile, şinitzel, baket, kanat ve daha fazlası — günlük taze.
        <br className="hidden md:inline" />
        <strong className="text-white">7/24</strong> WhatsApp'tan sipariş.
      </>
    ),
    primary: { label: "WhatsApp'tan Sipariş Ver", href: waGeneralOrder(), external: true, icon: "wa" },
    secondary: { label: "En Çok Satanları Gör", href: "/urunler" },
    bottomBadge: { primary: "7/24", secondary: "Açık" },
  },
  {
    badge: "27+ Ürün • 6 Kategori",
    title: (
      <>
        Aradığınız
        <br />
        Her <span className="text-brand-accent">Kesim Burada</span>
      </>
    ),
    subtitle: (
      <>
        Bütün piliçten özel kesim parçalara, sakatatdan hazır ürünlere
        <br className="hidden md:inline" />
        <strong className="text-white">27 farklı tavuk ürünü</strong> tek adresten.
      </>
    ),
    primary: { label: "Tüm Ürünleri Gör", href: "/urunler", icon: "arrow" },
    secondary: { label: "İletişim", href: "/iletisim" },
    bottomBadge: { primary: "27+", secondary: "Çeşit" },
  },
  {
    badge: "Diğer Markamız",
    title: (
      <>
        Evka <span className="text-brand-accent">Fresh</span>
        <br />
        Taze Çözümler
      </>
    ),
    subtitle: (
      <>
        Kardeş markamız <strong className="text-white">Evka Fresh</strong> ile
        taze gıda dünyasını keşfedin.
        <br className="hidden md:inline" />
        Evkafresh.com'da sizi bekliyor.
      </>
    ),
    primary: {
      label: "evkafresh.com'a Git",
      href: "https://evkafresh.com",
      external: true,
      icon: "external",
    },
    secondary: { label: "Bizim Ürünlerimiz", href: "/urunler" },
    bottomBadge: { primary: "Yeni", secondary: "Marka" },
  },
];

const AUTO_ROTATE_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [go, paused, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = slides[index];

  return (
    <section
      className="relative bg-brand-primary overflow-hidden min-h-[calc(100vh-5rem)] flex items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Tanıtım slaytları"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 60%, white 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px, 90px 90px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(200,68,43,0.18), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(74,111,156,0.25), transparent 50%)",
        }}
      />

      <div className="container-x relative py-16 md:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        <div
          key={`text-${index}`}
          className="lg:col-span-7 text-white animate-[fadeIn_500ms_ease-out]"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-7">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            {slide.badge}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
            {slide.title}
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              {...(slide.primary.external
                ? { href: slide.primary.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: slide.primary.href })}
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-bold px-8 py-5 rounded-md text-lg transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/30"
            >
              {slide.primary.icon === "wa" && <WhatsAppIcon className="w-5 h-5" />}
              {slide.primary.icon === "arrow" && <ArrowRight className="w-5 h-5" />}
              {slide.primary.icon === "external" && <ExternalLink className="w-5 h-5" />}
              {slide.primary.label}
            </a>
            {slide.secondary && (
              <Link
                href={slide.secondary.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-5 rounded-md text-lg transition-colors"
              >
                {slide.secondary.label}
              </Link>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold text-brand-accent">18+</div>
              <div className="text-sm">Yıl Tecrübe</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold text-brand-accent">27+</div>
              <div className="text-sm">Ürün Çeşidi</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold text-brand-accent">1000+</div>
              <div className="text-sm">Müşteri</div>
            </div>
          </div>
        </div>

        <div
          key={`img-${index}`}
          className="hidden lg:flex lg:col-span-5 items-center justify-center animate-[fadeIn_700ms_ease-out]"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-3xl blur-2xl" />
            <div className="absolute -inset-2 bg-white/10 rounded-3xl rotate-3" />
            <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl p-10 shadow-2xl shadow-black/40 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/logo.png"
                alt={site.brand.short}
                width={1024}
                height={1024}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            {slide.bottomBadge && (
              <div className="absolute -bottom-4 -right-4 bg-brand-accent text-white rounded-2xl px-5 py-3 shadow-xl rotate-6">
                <div className="text-2xl font-extrabold leading-none">
                  {slide.bottomBadge.primary}
                </div>
                <div className="text-xs font-semibold opacity-90">
                  {slide.bottomBadge.secondary}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Önceki slayt"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Sonraki slayt"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1}. slayda git`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-10 bg-brand-accent" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-1 text-white/50 text-xs font-semibold uppercase tracking-wider">
        <ChevronDown className="w-4 h-4 animate-bounce" />
        Aşağı Kaydır
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
