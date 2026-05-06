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
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Hemen Sipariş Verin
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
          Toptan veya perakende — iki WhatsApp hattımızdan size en uygun olanı seçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink(message, false)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-bold px-7 py-4 rounded-md text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>
              <span className="block text-xs opacity-80 font-normal -mb-0.5">1. Hat</span>
              {site.whatsapp.primaryDisplay}
            </span>
          </a>
          <a
            href={waLink(message, true)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-4 rounded-md text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>
              <span className="block text-xs opacity-80 font-normal -mb-0.5">2. Hat</span>
              {site.whatsapp.secondaryDisplay}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
