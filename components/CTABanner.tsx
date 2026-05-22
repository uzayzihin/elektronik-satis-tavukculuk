import { MessageCircle, Clock } from "lucide-react";
import { site } from "@/content/site.config";
import { waLink } from "@/lib/whatsapp";

export function CTABanner() {
  const message = "Merhaba, sipariş için yazıyorum.";
  return (
    <section className="bg-brand-light border-y border-brand-border text-brand-navy">
      <div className="container-x py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent px-3 py-1.5 rounded-sm text-sm font-semibold text-brand-navy mb-5 tracking-[0.04em]">
          <Clock className="w-4 h-4" />
          7/24 Sipariş Hattı
        </div>
        <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
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
            className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-7 py-4 rounded-sm text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {site.whatsapp.primaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
