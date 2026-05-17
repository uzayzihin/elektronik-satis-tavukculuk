import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

export function HeroSlider() {
  return (
    <section className="relative bg-white border-b border-brand-border overflow-hidden">
      <div className="container-x relative py-8 md:py-12 lg:py-14">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Link href="/urunler" aria-label="Tüm ürünleri gör" className="block">
            <h1
              className="font-extrabold leading-[0.95] mb-5 tracking-tight text-brand-navy uppercase hover:text-brand-primary transition-colors"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Aradığınız Her{" "}
              <span className="relative inline-block align-baseline">
                <span
                  className="font-[family-name:var(--font-script)] font-bold normal-case italic text-brand-gold"
                  style={{
                    fontSize: "1.05em",
                    lineHeight: "0.85",
                    display: "inline-block",
                    transform: "rotate(-3deg) translateY(-0.04em)",
                  }}
                >
                  Kesim
                </span>
              </span>{" "}
              Burada
            </h1>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <AvatarStack />
            <span className="text-sm font-mono uppercase tracking-wider text-brand-text">
              <strong className="font-bold text-brand-navy text-base">4.9 / 5</strong>
              <span className="text-brand-muted"> · 1000+ müşteri</span>
            </span>
          </div>

          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan hızlı sipariş"
            className="block w-full max-w-2xl mb-8 group/graphic"
          >
            <HeroGraphic className="w-full" />
          </a>

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
            className="relative w-full max-w-xl inline-flex items-center justify-between gap-3 overflow-hidden rounded-md bg-brand-dark text-white font-bold pl-7 pr-5 py-3 uppercase tracking-wider transition-all hover:scale-[1.01] shadow-xl shadow-black/20"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 25%, rgba(37,96,126,0.55), transparent 60%), radial-gradient(ellipse at 80% 85%, rgba(3,28,55,0.7), transparent 55%)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 1.2px, transparent 1.2px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12) 1.6px, transparent 1.6px)",
                backgroundSize: "44px 44px, 70px 70px",
              }}
            />

            <span className="relative flex-1 inline-flex items-center justify-center gap-3 text-base md:text-lg">
              <WhatsAppIcon className="w-5 h-5" />
              Hızlı Sipariş
            </span>
            <span className="relative flex-shrink-0 inline-flex items-center justify-center">
              <Image
                src="/logo-icon.png"
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
                className="h-7 w-auto brightness-0 invert opacity-95"
              />
            </span>
          </a>

          <div className="mt-8 pt-6 border-t border-brand-border w-full max-w-xl grid grid-cols-3 gap-3">
            <TrustItem icon={ShieldCheck} label="Güvenli Sipariş" />
            <TrustItem icon={Truck} label="Aynı Gün Teslimat" />
            <TrustItem icon={Clock} label="7/24 Hizmet" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroGraphic({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-square rounded-2xl overflow-hidden bg-brand-dark text-white ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 25%, rgba(37,96,126,0.55), transparent 60%), radial-gradient(ellipse at 80% 85%, rgba(3,28,55,0.7), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 1.2px, transparent 1.2px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12) 1.6px, transparent 1.6px)",
          backgroundSize: "44px 44px, 70px 70px",
        }}
      />
      <Image
        src="/images/products/solo/kemiksiz-but-donerlik.webp"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/55">
          İletişime Geç
        </span>
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/55">
          İstanbul
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo-mountain.png"
          alt=""
          aria-hidden="true"
          width={800}
          height={445}
          priority
          className="w-[42%] h-auto brightness-0 invert opacity-95 mb-3 md:mb-4"
        />
        <div
          className="font-black uppercase tracking-tight text-white leading-[0.9]"
          style={{
            fontSize: "clamp(1.25rem, 5vw, 3rem)",
            textShadow: "0 2px 10px rgba(0,0,0,0.45)",
          }}
        >
          Evka Surur
        </div>
        <div
          className="font-bold uppercase tracking-[0.18em] text-white/85 mt-1"
          style={{
            fontSize: "clamp(0.75rem, 2.5vw, 1.5rem)",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          Tavukçuluk
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white/55">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">
          Beyaz Et
        </span>
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em]">
          Toptan & Perakende
        </span>
      </div>
    </div>
  );
}

function AvatarStack() {
  const avatars = [
    "linear-gradient(135deg, #25607e 0%, #031c37 100%)",
    "linear-gradient(135deg, #1d4a63 0%, #25607e 100%)",
    "linear-gradient(135deg, #25607e 0%, #1d4a63 100%)",
    "linear-gradient(135deg, #031c37 0%, #25607e 100%)",
    "linear-gradient(135deg, #1d4a63 0%, #031c37 100%)",
  ];
  return (
    <div className="flex -space-x-2" aria-hidden="true">
      {avatars.map((bg, i) => (
        <span
          key={i}
          className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm"
          style={{ background: bg }}
        />
      ))}
    </div>
  );
}

function TrustItem({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-brand-muted">
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
