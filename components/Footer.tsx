"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-linen-border bg-linen mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-xl text-espresso mb-1">Mapat</p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Shirat HaYam</p>
          <p className="text-sm text-taupe leading-relaxed max-w-xs">
            {t(
              "מפת שירת הים — לשבתות, לחגים, לכל שישי.",
              "Shirat HaYam — for Shabbat, for holidays, for every Friday."
            )}
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-taupe mb-4">{t("ניווט", "Navigate")}</p>
          <ul className="space-y-2.5 text-sm text-taupe">
            <li><Link href="/collection" className="hover:text-espresso transition-colors">{t("הקולקציה", "Collection")}</Link></li>
            <li><Link href="/#story" className="hover:text-espresso transition-colors">{t("הסיפור שלנו", "Our Story")}</Link></li>
            <li><Link href="/#care" className="hover:text-espresso transition-colors">{t("טיפול במפה", "Care Guide")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-taupe mb-4">{t("צור קשר", "Contact")}</p>
          <ul className="space-y-2.5 text-sm text-taupe">
            <li>
              <a href="mailto:adamsh6@gmail.com" className="hover:text-espresso transition-colors">
                ✉️ adamsh6@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:0528433338" className="hover:text-espresso transition-colors">
                📞 052-843-3338
              </a>
            </li>
            <li>
              <a href="https://instagram.com/mapatshirathayam" target="_blank" rel="noreferrer" className="hover:text-espresso transition-colors">
                📷 @mapatshirathayam
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-linen-border mx-6 lg:mx-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-taupe">
        <p>© {new Date().getFullYear()} מפת · שירת הים. כל הזכויות שמורות.</p>
        <p>{t("משלוח חינם בישראל · החזרה עד 30 יום", "Free shipping in Israel · 30-day returns")}</p>
      </div>
    </footer>
  );
}
