import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative bg-brand-primary overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
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
            "radial-gradient(ellipse at 70% 30%, rgba(200,68,43,0.18), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(74,111,156,0.25), transparent 50%)",
        }}
      />

      <div className="container-x relative py-16 md:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        <div className="lg:col-span-7 text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-7">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            {site.brand.foundedYear}'den Beri • {site.contact.hours}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
            Çiftlikten
            <br />
            Sofranıza
            <br />
            <span className="text-brand-accent">Taze Beyaz Et</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
            Toptan ve perakende beyaz et tedariği.
            <br className="hidden md:inline" />
            <strong className="text-white">{site.contact.hours}</strong> hizmetinizdeyiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={waGeneralOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-bold px-8 py-5 rounded-md text-lg transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'tan Sipariş Ver
            </a>
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-5 rounded-md text-lg transition-colors"
            >
              Tüm Ürünleri Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
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

        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
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
            <div className="absolute -bottom-4 -right-4 bg-brand-accent text-white rounded-2xl px-5 py-3 shadow-xl rotate-6">
              <div className="text-2xl font-extrabold leading-none">7/24</div>
              <div className="text-xs font-semibold opacity-90">Açık</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs font-semibold uppercase tracking-wider">Aşağı Kaydır</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
