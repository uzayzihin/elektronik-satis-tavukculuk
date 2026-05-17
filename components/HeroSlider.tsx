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
              className="font-extrabold leading-[0.95] mb-6 tracking-tight text-brand-navy uppercase hover:text-brand-accent transition-colors"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Aradığınız Her Kesim Burada
            </h1>
          </Link>

          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.1em] text-brand-text/80 leading-relaxed mb-8 max-w-xl">
            Beyaz etin adresi. {site.brand.foundedYear}'den beri.
            <br />
            Günlük taze kesim. İstanbul'da 7/24 teslimat.
          </p>

          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan hızlı sipariş"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-7 py-3 uppercase tracking-wider transition-colors text-base md:text-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hızlı Sipariş
          </a>
        </div>
      </div>
    </section>
  );
}
