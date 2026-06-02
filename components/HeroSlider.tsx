import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

export function HeroSlider() {
  return (
    <section className="relative bg-white border-b border-brand-border overflow-hidden">
      <div className="container-x py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/urunler" aria-label="Tüm ürünleri gör" className="block group">
              <h1
                className="font-serif leading-[1.05] mb-6 tracking-tight text-brand-navy group-hover:text-brand-accent transition-colors"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
              >
                Aradığınız her kesim,
                <br />
                <em className="text-brand-accent italic">tek vitrinde.</em>
              </h1>
            </Link>

            <p className="text-sm md:text-base tracking-[0.02em] text-brand-text/80 leading-relaxed mb-8 max-w-xl">
              Beyaz etin premium adresi — günlük taze kesim, 7/24 sipariş ve soğuk zincir korumalı hızlı teslimat ile kapınızda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={waGeneralOrder()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp'tan hızlı sipariş"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-whatsapp hover:bg-brand-whatsapp-dark hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow text-white font-bold px-8 py-3.5 uppercase tracking-wider transition-all text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Hızlı Sipariş
              </a>
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-border hover:bg-brand-soft text-brand-navy font-bold px-8 py-3.5 uppercase tracking-wider transition-all text-base"
              >
                Ürünleri İncele
              </Link>
            </div>
          </div>

          {/* Premium Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden bg-brand-light border border-brand-border/60 p-4 shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/hero-chicken.png"
                alt="Premium taze bütün tavuk"
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover rounded-xl hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 bg-brand-accent text-brand-navy font-mono font-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                GÜNLÜK TAZE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
