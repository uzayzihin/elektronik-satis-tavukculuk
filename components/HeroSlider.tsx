import Link from "next/link";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

export function HeroSlider() {
  return (
    <section className="relative bg-white border-b border-brand-border overflow-hidden">
      <div className="container-x relative py-10 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Link href="/urunler" aria-label="Tüm ürünleri gör" className="block">
            <h1
              className="font-serif leading-[1.05] mb-6 tracking-tight text-brand-navy hover:text-brand-accent transition-colors"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5.25rem)" }}
            >
              Aradığınız her kesim,
              <br />
              <em className="text-brand-accent">tek vitrinde.</em>
            </h1>
          </Link>

          <p className="text-sm md:text-base tracking-[0.02em] text-brand-text/85 leading-relaxed mb-8 max-w-xl">
            Beyaz etin premium adresi — günlük taze kesim, 7/24 sipariş ve hızlı
            teslimat.
          </p>

          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan hızlı sipariş"
            className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-7 py-3 uppercase tracking-wider transition-colors text-base md:text-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hızlı Sipariş
          </a>
        </div>
      </div>
    </section>
  );
}
