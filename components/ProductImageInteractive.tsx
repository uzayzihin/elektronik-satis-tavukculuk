"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Layers, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductWatermark } from "@/components/ProductWatermark";
import type { Packaging } from "@/content/products";

export function ProductImageInteractive({
  productSlug,
  productName,
  currentPackaging,
}: {
  productSlug: string;
  productName: string;
  currentPackaging: Packaging;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = (pkg: Packaging) => {
    setIsOpen(false);
    if (pkg !== currentPackaging) {
      router.push(`/urunler/${productSlug}/${pkg}`);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="relative w-full h-full cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label="Ambalaj tipini değiştirmek için tıklayın"
      >
        <Image
          src={`/images/products/${currentPackaging}/${productSlug}.webp`}
          alt={productName}
          width={1600}
          height={1600}
          quality={100}
          unoptimized
          priority
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-brand-primary/90 text-white font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Ambalaj Değiştir
          </div>
        </div>
        <ProductWatermark productName={productName} packaging={currentPackaging} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-primary/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <div className="p-6 text-center border-b border-brand-soft relative">
                <h3 className="text-2xl font-extrabold text-brand-navy">Ambalaj Seçimi</h3>
                <p className="text-brand-muted text-sm mt-1">Bu ürün için görmek istediğiniz ambalajı seçin.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Kapat"
                  className="absolute top-6 right-6 text-brand-muted hover:text-brand-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelect("tabakli")}
                  className={`flex flex-col items-center gap-4 p-6 rounded-xl border-2 transition-all ${
                    currentPackaging === "tabakli"
                      ? "border-brand-primary bg-brand-soft/40 shadow-md scale-105"
                      : "border-brand-soft hover:border-brand-primary hover:shadow-lg"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    currentPackaging === "tabakli" ? "bg-brand-primary text-white" : "bg-brand-soft text-brand-navy"
                  }`}>
                    <Layers className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-brand-navy text-lg">Tabaklı</div>
                    <div className="text-xs text-brand-muted mt-1">Perakende ve ev için</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect("dokme")}
                  className={`flex flex-col items-center gap-4 p-6 rounded-xl border-2 transition-all ${
                    currentPackaging === "dokme"
                      ? "border-brand-primary bg-brand-soft/40 shadow-md scale-105"
                      : "border-brand-soft hover:border-brand-primary hover:shadow-lg"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    currentPackaging === "dokme" ? "bg-brand-primary text-white" : "bg-brand-soft text-brand-navy"
                  }`}>
                    <Box className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-brand-navy text-lg">Dökme</div>
                    <div className="text-xs text-brand-muted mt-1">Toptan ve restoranlar için</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
