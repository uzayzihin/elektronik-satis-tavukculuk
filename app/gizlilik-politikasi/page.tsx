import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.brand.short} gizlilik politikası — kişisel verilerin işlenmesi, KVKK ve çerezler hakkında bilgi.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      intro={`${site.brand.legal} olarak müşterilerimizin kişisel verilerini 6698 sayılı KVKK kapsamında işliyoruz.`}
    >
      <h2>Toplanan Veriler</h2>
      <p>Sipariş ve iletişim sürecinde sizden şu bilgileri alıyoruz:</p>
      <ul>
        <li>Ad-soyad ve işletme adı (varsa)</li>
        <li>Telefon numarası (WhatsApp iletişimi için)</li>
        <li>Teslimat adresi</li>
        <li>Sipariş detayları</li>
      </ul>

      <h2>Verilerin Kullanımı</h2>
      <p>
        Bu veriler yalnızca sipariş işleme, teslimat ve müşteri hizmetleri amacıyla
        kullanılır. Üçüncü taraflarla paylaşılmaz; pazarlama amaçlı kullanılmaz.
        İletişim WhatsApp üzerinden yürütülür.
      </p>

      <h2>Çerezler</h2>
      <p>
        Web sitemiz temel teknik çerezler ve sepet işlevi için yerel depolama
        (localStorage) kullanır. Üçüncü taraf takip çerezi kullanılmaz.
      </p>

      <h2>KVKK Haklarınız</h2>
      <p>
        Kişisel verilerinize erişme, düzeltme, silme ve işlenmesini sınırlama
        haklarınız vardır. Talepleriniz için WhatsApp veya{" "}
        <a href="/iletisim">iletişim sayfası</a> üzerinden bize ulaşabilirsiniz.
      </p>

      <h2>Veri Sorumlusu</h2>
      <p>
        {site.brand.legal}
        <br />
        {site.contact.address}
      </p>
    </LegalPage>
  );
}
