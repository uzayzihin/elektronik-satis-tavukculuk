import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site.config";

export const metadata: Metadata = {
  title: "İade & İptal Koşulları",
  description: `${site.brand.short} iade ve iptal koşulları — taze beyaz et ürünleri için sipariş iptal ve hatalı ürün politikası.`,
};

export default function ReturnPage() {
  return (
    <LegalPage
      title="İade & İptal"
      intro="Taze beyaz et ürünleri, 6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 15. maddesi uyarınca cayma hakkının kapsamı dışındadır. Buna karşın memnuniyetiniz bizim için önceliktir."
    >
      <h2>Sipariş İptali</h2>
      <p>
        Siparişiniz hazırlanmaya başlamadan önce WhatsApp üzerinden talep ederseniz
        ücretsiz iptal edilir. Hazırlık başladıktan sonra iptal yapılamaz.
      </p>

      <h2>Hatalı veya Eksik Ürün</h2>
      <p>
        Teslim aldığınız ürünlerde herhangi bir sorun — eksik kesim, hatalı paketleme,
        kalite uygunsuzluğu — varsa <strong>teslimat anında</strong> bize bildirin.
        Ürünü hemen değiştiririz veya iade ederiz.
      </p>

      <h2>Soğuk Zincir Hasarı</h2>
      <p>
        Teslimat sırasında soğuk zincirin korunamadığı durumlarda ürünü kabul etmeyin —
        teslimatçımıza geri verin, biz yenisini yollarız.
      </p>

      <h2>İletişim</h2>
      <p>
        İade ve iptal talepleri için WhatsApp hattımız 7/24 açıktır:{" "}
        <strong>{site.whatsapp.primaryDisplay}</strong>.
      </p>
    </LegalPage>
  );
}
