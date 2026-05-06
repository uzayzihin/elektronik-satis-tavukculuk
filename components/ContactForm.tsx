"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { waContactForm } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const url = waContactForm({ name: name.trim(), phone: phone.trim(), message: message.trim() });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-brand-light rounded-lg p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-brand-primary">
        <MessageCircle className="w-5 h-5 text-brand-accent" />
        <h3 className="text-xl font-bold">Bize Yazın</h3>
      </div>
      <p className="text-sm text-brand-muted mb-6">
        Form, doldurduğunuzda WhatsApp üzerinden bize ulaşacak. Hızlı dönüş için tercih edilir.
      </p>

      <div className="grid gap-4">
        <Field label="Ad Soyad" htmlFor="name" required>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-brand-light bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
            placeholder="Adınız Soyadınız"
          />
        </Field>

        <Field label="Telefon" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-brand-light bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
            placeholder="+90 5__ ___ __ __"
          />
        </Field>

        <Field label="Mesajınız" htmlFor="message" required>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-brand-light bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary resize-y"
            placeholder="Sipariş, fiyat sorgusu veya genel bilgi talebinizi yazın..."
          />
        </Field>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-bold px-6 py-3.5 rounded-md transition-colors mt-2"
        >
          <Send className="w-4 h-4" />
          WhatsApp ile Gönder
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-sm font-semibold text-brand-primary mb-1.5">
        {label}
        {required && <span className="text-brand-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
