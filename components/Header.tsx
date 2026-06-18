"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/lang";

export default function Header() {
  const { count, openCart } = useCart();
  const { lang, toggle, t } = useLang();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-linen-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8 text-[13px] tracking-[0.1em] text-taupe">
          <Link href="/collection" className="hover:text-espresso transition-colors">
            {t("הקולקציה", "Collection")}
          </Link>
          <Link href="/#story" className="hover:text-espresso transition-colors">
            {t("הסיפור שלנו", "Our Story")}
          </Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-taupe hover:text-espresso transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center leading-none">
          <span className="block font-serif text-2xl tracking-[0.04em] text-espresso">Mapat</span>
          <span className="block text-[10px] tracking-[0.2em] text-taupe mt-0.5">Shirat HaYam</span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
            className="text-[11px] tracking-[0.12em] uppercase text-taupe hover:text-espresso transition-colors border border-linen-border px-2 py-0.5"
          >
            {lang === "he" ? "EN" : "עב"}
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            aria-label={t("פתח עגלה", "Open cart")}
            className="relative flex items-center text-taupe hover:text-espresso transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-espresso text-cream text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-linen-border px-6 py-5 flex flex-col gap-5 text-[14px] text-taupe">
          <Link href="/collection" onClick={() => setMenuOpen(false)} className="hover:text-espresso transition-colors">
            {t("הקולקציה", "Collection")}
          </Link>
          <Link href="/#story" onClick={() => setMenuOpen(false)} className="hover:text-espresso transition-colors">
            {t("הסיפור שלנו", "Our Story")}
          </Link>
          <Link href="/#care" onClick={() => setMenuOpen(false)} className="hover:text-espresso transition-colors">
            {t("טיפול במפה", "Care Guide")}
          </Link>
        </nav>
      )}
    </header>
  );
}
