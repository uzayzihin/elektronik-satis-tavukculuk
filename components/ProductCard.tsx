import Image from "next/image";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waProductOrder } from "@/lib/whatsapp";
import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col bg-white border border-brand-light rounded-lg overflow-hidden hover:shadow-lg hover:border-brand-secondary/30 transition-all">
      <div className="relative aspect-square bg-brand-light flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={512}
          height={512}
          aria-hidden="true"
          className="w-3/4 h-3/4 object-contain opacity-90 group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
          Taze
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-brand-primary text-base mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-brand-muted mb-4 flex-1">{product.description}</p>
        <a
          href={waProductOrder(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold text-sm px-4 py-2.5 rounded-md transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Satın Al
        </a>
      </div>
    </article>
  );
}
