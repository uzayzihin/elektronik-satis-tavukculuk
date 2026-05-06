import { site } from "@/content/site.config";

export function waLink(message: string, useSecondary = false): string {
  const number = useSecondary ? site.whatsapp.secondary : site.whatsapp.primary;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function waProductOrder(productName: string): string {
  return waLink(`Merhaba, "${productName}" hakkında bilgi almak istiyorum.`);
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
