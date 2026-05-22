import { MessageCircle, Clock } from "lucide-react";
import { site } from "@/content/site.config";
import { waLink } from "@/lib/whatsapp";

export function CTABanner() {
  const message = "Merhaba, sipariş için yazıyorum.";
  return (
    <section className="bg-brand-dark text-white">
      <div className="container-x py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/40 px-3 py-1.5 rounded-full text-sm font-semibold text-brand-accent mb-5">
          <Clock className="w-4 h-4" />
          7/24 Sipariş Hattı
        </div>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
          Hemen sipariş verin.
        </h2>
        <p className="text-brand-light/75 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Toptan veya perakende — WhatsApp üzerinden hızlı teyit ve teslimat.
        </p>
        <div className="flex justify-center">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-7 py-4 rounded-md text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {site.whatsapp.primaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
