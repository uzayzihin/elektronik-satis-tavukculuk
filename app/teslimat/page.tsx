import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Teslimat Bilgileri",
  description: `${site.brand.short} teslimat — İstanbul içi aynı gün, soğuk zincir korumalı tedarik. 7/24 sipariş.`,
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Teslimat"
      intro="İstanbul Gıda Toptancılar Çarşısı'ndan günlük taze kesim — soğuk zincir korunarak şehir içine teslim."
    >
      <h2>Teslimat Bölgesi</h2>
      <p>
        İstanbul içi bütün ilçelere teslimat yapıyoruz. Şehir dışı sipariş için
        WhatsApp üzerinden konuşalım, kargo seçeneklerini netleştirelim.
      </p>

      <h2>Teslimat Süresi</h2>
      <ul>
        <li><strong>Perakende:</strong> Aynı gün veya ertesi gün — saati WhatsApp'tan birlikte belirleriz.</li>
        <li><strong>Toptan (restoran, market, kasap):</strong> Anlaşmalı program, özel saatlerde sevkiyat.</li>
        <li><strong>Acil sipariş:</strong> Mesai saatleri içinde 2-3 saatte teslim — stok ve mesafeye bağlı.</li>
      </ul>

      <h2>Soğuk Zincir</h2>
      <p>
        Tüm sevkiyat soğuk araçlarımızla yapılır. Ürünler ısıtmasız, kesintisiz
        soğuk zincirde teslim noktasına ulaşır.
      </p>

      <h2>Paketleme</h2>
      <p>
        Tabaklı sipariş hijyenik tabaklarda; dökme sipariş ekonomik döküm
        sevkiyatla — kullanım amacınıza göre seçim sizin.
      </p>

      <h2>İletişim & Sipariş</h2>
      <p>
        7/24 WhatsApp: <strong>{site.whatsapp.primaryDisplay}</strong>
        <br />
        Adres: {site.contact.address}
      </p>
    </LegalPage>
  );
}
