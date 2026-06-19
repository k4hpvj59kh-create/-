"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Image */}
      <img
        src="/images/hero-table.webp"
        alt="מפת שירת הים"
        className="absolute inset-0 w-full h-full object-cover object-center hero-img"
        style={{ imageRendering: "high-quality" } as React.CSSProperties}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-espresso/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-16 lg:pb-24 w-full">
        <p className="hero-tag text-[11px] tracking-[0.3em] uppercase text-cream/70 mb-3">
          {t("מפת פשתן טהור", "Pure Linen Tablecloth")}
        </p>
        <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.05] max-w-xl">
          {t("המפה שמשנה הכל.", "The Tablecloth That Changes Everything.")}
        </h1>
        <p className="hero-subtitle mt-5 text-cream/80 max-w-sm leading-relaxed">
          {t(
            "מפות שולחן עם קפלים, עשויות בעבודת יד — לשולחנות שמכנסים אנשים.",
            "Ruffled tablecloths handcrafted by hand — for tables that gather people."
          )}
        </p>
        <Link
          href="/collection"
          className="hero-cta inline-block mt-8 border border-cream text-cream px-8 py-3.5 text-[13px] tracking-[0.14em] uppercase hover:bg-cream hover:text-espresso transition-colors"
        >
          {t("לקולקציה", "Shop Collection")}
        </Link>
      </div>
    </section>
  );
}
