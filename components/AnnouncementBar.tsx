const messages = [
  "WhatsApp'tan Sipariş",
  "Aynı Gün Teslimat",
  "Toptan & Perakende",
  "2007'den Beri",
];

const SEPARATOR = "•";

export function AnnouncementBar() {
  const line = messages.join(`  ${SEPARATOR}  `);

  return (
    <div className="relative bg-brand-secondary text-white overflow-hidden py-2.5">
      <div
        className="flex whitespace-nowrap"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex shrink-0 animate-[marquee_45s_linear_infinite]">
          <span className="px-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {line}
          </span>
          <span className="px-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {line}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-[marquee_45s_linear_infinite]"
        >
          <span className="px-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {line}
          </span>
          <span className="px-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {line}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
