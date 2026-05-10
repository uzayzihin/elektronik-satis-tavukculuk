import { site } from "@/content/site.config";
import type { Packaging } from "@/content/products";

const PACKAGING_LABEL: Record<Packaging, string> = {
  tabakli: "Tabaklı",
  dokme: "Dökme",
  fresh: "Fresh",
};

export function packagingLabel(p: Packaging): string {
  return PACKAGING_LABEL[p];
}

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp.primary}?text=${encodeURIComponent(message)}`;
}

export function waProductOrder(productName: string, packaging?: Packaging): string {
  const suffix = packaging ? ` (${PACKAGING_LABEL[packaging]})` : "";
  return waLink(`Merhaba, "${productName}${suffix}" hakkında bilgi almak istiyorum.`);
}

export function waGeneralOrder(): string {
  return waLink(
    "Merhaba, web siteniz üzerinden sipariş/bilgi almak istiyorum."
  );
}

export function waContactForm(data: {
  name: string;
  phone: string;
  message: string;
}): string {
  const text = `Merhaba, web siteniz üzerinden iletişim kuruyorum.

Ad: ${data.name}
Telefon: ${data.phone}
Mesaj: ${data.message}`;
  return waLink(text);
}

export function waCartCheckout(
  items: Array<{ name: string; qty: number; packaging?: Packaging }>
): string {
  if (items.length === 0) {
    return waLink("Merhaba, sipariş vermek istiyorum.");
  }
  const lines = items.map((it, i) => {
    const suffix = it.packaging ? ` (${PACKAGING_LABEL[it.packaging]})` : "";
    return `${i + 1}. ${it.name}${suffix} — ${it.qty} adet`;
  });
  const text = `Merhaba, web siteniz üzerinden sipariş vermek istiyorum.

📋 Sipariş Listem:
${lines.join("\n")}

Toplam ${items.reduce((s, i) => s + i.qty, 0)} kalem.

Fiyat ve teslimat detayları için yardımcı olabilir misiniz?`;
  return waLink(text);
}
