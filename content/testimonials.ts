export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mehmet K.",
    role: "Restoran Sahibi, Şişli",
    rating: 5,
    text: "5 yıldır tedarikçimiz. Sabahın 3'ünde aradığımda bile cevap alıyorum. Tavuğun tazeliği müşterilerimden gelen yorumlardan belli.",
  },
  {
    id: "t2",
    name: "Ayşe D.",
    role: "Market Müdürü, Bahçelievler",
    rating: 5,
    text: "Toptan alım yapıyoruz. Fiyatlar dürüst, kalite tutarlı. Soğuk zincire özen gösteriyorlar — bu sektörde nadir bir özellik.",
  },
  {
    id: "t3",
    name: "Hakan Y.",
    role: "Kasap, Esenler",
    rating: 5,
    text: "Özel kesim isteklerimi kelimesi kelimesine yapıyorlar. Şinitzel ve dönerlik kesimleri profesyonel — müşterim memnun.",
  },
  {
    id: "t4",
    name: "Fatma A.",
    role: "Ev Müşterisi",
    rating: 5,
    text: "WhatsApp'tan sipariş veriyorum, yarım saatte hazır. Marketten almaktan çok daha taze ve uygun fiyatlı.",
  },
];
