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
              className="font-extrabold leading-[0.95] mb-5 tracking-tight text-brand-navy uppercase hover:text-brand-accent transition-colors"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Aradığınız Her{" "}
              <span className="relative inline-block align-baseline">
                <span
                  className="font-[family-name:var(--font-script)] font-bold normal-case italic text-brand-accent"
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
            className="relative w-full max-w-xl inline-flex items-center justify-between gap-3 overflow-hidden rounded-md bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold pl-7 pr-5 py-3 uppercase tracking-wider transition-all hover:scale-[1.01] shadow-xl shadow-black/20"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 25%, rgba(98,147,71,0.55), transparent 60%), radial-gradient(ellipse at 80% 85%, rgba(79,120,56,0.85), transparent 55%)",
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
                src="/logo-main.png"
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
                className="h-8 w-auto"
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
  const bottomProducts = [
    "baket",
    "bonfile",
    "kanat",
    "acik-butun-pilic",
  ];

  return (
    <div
      className={`relative aspect-square rounded-2xl overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #f7ecd0 0%, #f1e1b3 55%, #e8d28b 100%)",
      }}
    >
      {/* Warm parchment grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(9,75,141,0.06) 1px, transparent 1.2px), radial-gradient(circle at 75% 65%, rgba(9,75,141,0.04) 1.4px, transparent 1.6px)",
          backgroundSize: "32px 32px, 56px 56px",
        }}
      />

      {/* Soft top-bottom vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.4), transparent 55%), linear-gradient(180deg, transparent 60%, rgba(9,75,141,0.08) 100%)",
        }}
      />

      {/* Top corner labels */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-navy/70">
          İletişime Geç
        </span>
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-navy/70">
          İstanbul
        </span>
      </div>

      {/* Main brand logo — centerpiece */}
      <Image
        src="/logo-main.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        priority
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[58%] h-auto drop-shadow-[0_10px_24px_rgba(9,75,141,0.25)]"
      />

      {/* Bottom chicken products row */}
      <div className="absolute bottom-3 md:bottom-4 left-0 right-0 flex items-end justify-center gap-2 md:gap-3 px-3 z-10">
        {bottomProducts.map((slug, i) => {
          const lift = i === 0 || i === 3 ? "translate-y-1" : "-translate-y-1";
          return (
            <div
              key={slug}
              className={`relative w-[20%] aspect-square rounded-full overflow-hidden ring-2 ring-white shadow-[0_8px_16px_rgba(9,75,141,0.25)] ${lift}`}
            >
              <Image
                src={`/images/products/solo/${slug}.webp`}
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
}

function AvatarStack() {
  const avatars = [
    "linear-gradient(135deg, #094b8d 0%, #063872 100%)",
    "linear-gradient(135deg, #cfbb50 0%, #b09e3e 100%)",
    "linear-gradient(135deg, #094b8d 0%, #cfbb50 100%)",
    "linear-gradient(135deg, #629347 0%, #4f7838 100%)",
    "linear-gradient(135deg, #094b8d 0%, #629347 100%)",
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
