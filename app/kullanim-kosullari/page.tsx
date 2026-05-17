import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${site.brand.short} web sitesi kullanım koşulları — sipariş süreci, sorumluluk ve yasal hükümler.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      intro={`${site.url} adresini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.`}
    >
      <h2>Site Sahibi</h2>
      <p>
        Bu site {site.brand.legal} tarafından işletilmektedir.
        <br />
        Adres: {site.contact.address}
      </p>

      <h2>Sipariş ve Ödeme</h2>
      <p>
        Sipariş süreci WhatsApp üzerinden yürütülür. Sepete eklenen ürünler
        WhatsApp'ta teyit edildiğinde sipariş kesinleşir. Ödeme; nakit, havale/EFT
        veya teslimatta kredi kartı ile yapılabilir. Toptan müşteriler için cari
        hesap açılabilir.
      </p>

      <h2>Fiyatlandırma</h2>
      <p>
        Site üzerinde fiyat görünmez; her sipariş özelinde miktara göre fiyat
        netleştirilir. Bu yöntem hem toptan hem perakende müşterilere doğru
        fiyatlandırma sunmamızı sağlar.
      </p>

      <h2>İçerik Sorumluluğu</h2>
      <p>
        Site içeriği bilgilendirme amaçlıdır. Ürün görselleri temsilidir;
        tedariğe ve kesim şekline göre küçük farklılıklar olabilir. WhatsApp
        sırasında her ürünün gerçek detayını teyit alabilirsiniz.
      </p>

      <h2>Telif Hakkı</h2>
      <p>
        Site içeriği, logo, görseller ve metinler {site.brand.short}'a aittir.
        İzinsiz kullanılamaz.
      </p>

      <h2>Uyuşmazlık</h2>
      <p>
        Bu koşullardan doğacak uyuşmazlıklarda İstanbul (Çağlayan) Mahkemeleri ve
        İcra Daireleri yetkilidir.
      </p>

      <h2>İletişim</h2>
      <p>
        Soru ve geri bildirimleriniz için WhatsApp:{" "}
        <strong>{site.whatsapp.primaryDisplay}</strong>
      </p>
    </LegalPage>
  );
}
