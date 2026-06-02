import { MessageCircle, Clock } from "lucide-react";
import { site } from "@/content/site.config";
import { waLink } from "@/lib/whatsapp";

export function CTABanner() {
  const message = "Merhaba, sipariş için yazıyorum.";
  return (
    <section className="bg-brand-light border-y border-brand-border text-brand-navy">
      <div className="container-x py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/30 px-3 py-1.5 rounded-md text-[10px] md:text-xs font-bold text-brand-navy mb-5 tracking-[0.14em] uppercase">
          <Clock className="w-3.5 h-3.5" />
          7/24 Sipariş Hattı
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-[-0.03em] mb-4 leading-tight">
          Hemen sipariş verin.
        </h2>
        <p className="text-brand-muted max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Toptan veya perakende — WhatsApp üzerinden hızlı teyit ve teslimat.
        </p>
        <div className="flex justify-center">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow text-white font-bold px-8 py-4 rounded-md text-base transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            {site.whatsapp.primaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
