import React from "react";
import { ShieldCheck, Snowflake, Award, Calendar } from "lucide-react";

export function ProductTrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "Helal Kesim",
      description: "İslami usullere uygun el kesimi",
    },
    {
      icon: Snowflake,
      title: "Soğuk Zincir",
      description: "+4°C soğutmalı araçlarla sevk",
    },
    {
      icon: ShieldCheck,
      title: "Veteriner Kontrollü",
      description: "Bakanlık onaylı hekim denetimli",
    },
    {
      icon: Calendar,
      title: "Günlük Taze",
      description: "Her gün taze kesim ve tedarik",
    },
  ];

  return (
    <div className="mt-8 pt-6 border-t border-brand-border/60">
      <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-brand-muted mb-4">
        Kalite & Güven Garantisi
      </h4>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div 
              key={badge.title} 
              className="flex items-start gap-2.5 p-3 rounded-lg bg-brand-light/60 border border-brand-border/40 hover:border-brand-accent/50 hover:bg-brand-light transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-brand-border/60 flex items-center justify-center text-brand-accent shadow-sm">
                <Icon className="w-4 h-4 text-brand-navy" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-brand-navy leading-none mb-1">
                  {badge.title}
                </h5>
                <p className="text-[10px] text-brand-muted leading-tight">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
