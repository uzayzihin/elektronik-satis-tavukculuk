import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export function HeroSlider() {
  return (
    <section className="relative bg-white border-b border-brand-border overflow-hidden">
      {/* Background accents using strict palette */}
      <div className="absolute top-0 right-0 w-[80%] h-full bg-brand-soft rounded-bl-[100px] -z-10 opacity-50 md:opacity-100" />
      
      <div className="container-x relative py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <StaggerContainer className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <StaggerItem>
              <Link href="/urunler" aria-label="Tüm ürünleri gör" className="block group">
                <h1
                  className="font-extrabold leading-[0.95] mb-6 tracking-tight text-brand-navy uppercase group-hover:text-brand-primary/80 transition-colors"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                >
                  Aradığınız Her Kesim Burada
                </h1>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <a
                href={waGeneralOrder()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp'tan hızlı sipariş"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-8 py-4 uppercase tracking-wider transition-colors text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 mb-8"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
                Hızlı Sipariş
              </a>
            </StaggerItem>

            <StaggerItem>
              <p className="font-mono text-sm uppercase tracking-[0.1em] text-brand-text leading-relaxed max-w-lg">
                Beyaz etin adresi. {site.brand.foundedYear}'den beri.
                <br />
                Günlük taze kesim. İstanbul'da 7/24 teslimat.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2} className="relative aspect-square lg:aspect-[4/3] order-1 lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[85%] h-[85%]">
                <div className="absolute inset-0 bg-brand-soft rounded-full opacity-60 blur-3xl -z-10 transform scale-110" />
                <Image
                  src="/images/products/tabakli/kemiksiz-but-donerlik.webp"
                  alt="Kemiksiz But Dönerlik"
                  fill
                  quality={100}
                  unoptimized
                  priority
                  className="object-contain drop-shadow-[0_20px_30px_rgba(1,63,128,0.2)] hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
