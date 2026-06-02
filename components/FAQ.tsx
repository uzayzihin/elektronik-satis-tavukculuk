import { Plus } from "lucide-react";

const items = [
  {
    q: "Tavuklar günlük taze mi?",
    a: "Evet. Sabah erken saatlerde gelen tavuklar aynı gün içinde paketlenip teslim edilir. Soğuk zincir kesintisiz korunur.",
  },
  {
    q: "Sipariş ne kadar sürede teslim edilir?",
    a: "İstanbul içi siparişler genellikle aynı gün teslim edilir. WhatsApp üzerinden sipariş onayını aldıktan sonra teslimat saatini birlikte belirleriz.",
  },
  {
    q: "Toptan ve perakende fiyatları farklı mı?",
    a: "Evet. Toptan miktarlarda farklı fiyatlandırma uygulanır. Sepete ekleyip WhatsApp'tan teyit aldığınızda size en uygun fiyatı bildiririz.",
  },
  {
    q: "Ödeme nasıl yapılır?",
    a: "Nakit, havale/EFT veya teslimatta kredi kartı ile ödeme alıyoruz. Toptan müşteriler için cari hesap açılabilir.",
  },
  {
    q: "Özel kesim talep edebilir miyim?",
    a: "Tabii. Şinitzel, jülyen, dönerlik, kuş başı ve diğer özel kesimleri sipariş notunda belirtin — istediğiniz şekilde hazırlarız.",
  },
  {
    q: "Hafta sonu sipariş alıyor musunuz?",
    a: "Evet. Cumartesi ve pazar dahil 7/24 WhatsApp hattımızdan ulaşabilirsiniz.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white border-t border-brand-border">
      <div className="container-x pt-10 pb-10 md:pt-12 md:pb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy tracking-[-0.03em] mb-6">
          Sıkça Sorulan Sorular
        </h2>
        <div className="divide-y divide-brand-border border-y border-brand-border">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex items-center justify-between gap-4 py-3.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-brand-navy text-[13px] md:text-sm uppercase tracking-wide">
                  {item.q}
                </span>
                <Plus className="w-4 h-4 text-brand-muted flex-shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="pb-3.5 -mt-1 text-brand-text leading-relaxed text-sm">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
