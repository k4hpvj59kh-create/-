"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";

export default function Newsletter() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section className="bg-linen py-20 px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3">{t("עדכונים", "Updates")}</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">{t("לא תפספסו כלום", "Don't miss a thing")}</h2>
        <p className="text-sm text-taupe leading-relaxed mb-8">
          {t(
            "הצטרפו לרשימה וקבלו עדכון על כל מוצר חדש.",
            "Join the list and get notified about every new product."
          )}
        </p>
        {done ? (
          <p className="text-sm text-espresso font-medium">{t("תודה — נהיה בקשר.", "Thank you — we'll be in touch.")}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              {t("כתובת אימייל", "Email address")}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              aria-label={t("כתובת אימייל", "Email address")}
              placeholder={t("המייל שלך", "your@email.com")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-linen-border bg-warm-white px-4 py-3 text-sm text-espresso placeholder-taupe/60 outline-none focus:border-espresso transition-colors"
            />
            <button type="submit" className="bg-espresso text-cream px-6 py-3 text-[12px] tracking-[0.14em] uppercase hover:bg-espresso/90 transition-colors whitespace-nowrap">
              {t("הרשמה", "Subscribe")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
