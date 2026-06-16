"use client";

import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";
import { useLang } from "@/lib/lang";

export default function CollectionContent() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-32">
      <div className="mb-16 max-w-lg">
        <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3">{t("כל המוצרים", "All pieces")}</p>
        <h1 className="font-serif text-4xl md:text-5xl text-espresso">{t("הקולקציה", "The Collection")}</h1>
        <p className="mt-4 text-taupe leading-relaxed">
          {t(
            "כל מפה נתפרת, מקופלת ומגוהצת ביד — כמויות קטנות, תשומת לב גדולה.",
            "Each tablecloth is made in small batches from pure European flax — gathered, washed, and finished by hand."
          )}
        </p>
      </div>

      <ProductGrid products={products} />

      <div className="mt-24 border border-linen-border p-10 text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3">{t("התאמה אישית", "Custom Size")}</p>
        <h2 className="font-serif text-3xl text-espresso mb-4">{t("מידה שלא מוצאים?", "Don't see your size?")}</h2>
        <p className="text-sm text-taupe leading-relaxed mb-6">
          {t(
            "אנחנו מייצרים מפות בכל מידה לפי הזמנה. צרו קשר עם המידות ונחזור אליכם תוך 24 שעות.",
            "We make tablecloths in any size to order. Send us your dimensions and we'll get back to you within 24 hours."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:adamsh6@gmail.com?subject=הזמנה בהתאמה אישית"
            className="inline-block border border-espresso text-espresso px-8 py-3 text-[12px] tracking-[0.14em] uppercase hover:bg-espresso hover:text-cream transition-colors"
          >
            ✉️ adamsh6@gmail.com
          </a>
          <a
            href="tel:0528433338"
            className="inline-block border border-espresso text-espresso px-8 py-3 text-[12px] tracking-[0.14em] uppercase hover:bg-espresso hover:text-cream transition-colors"
          >
            📞 052-843-3338
          </a>
          <a
            href="https://instagram.com/mapatshirathayam"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-espresso text-espresso px-8 py-3 text-[12px] tracking-[0.14em] uppercase hover:bg-espresso hover:text-cream transition-colors"
          >
            📷 @mapatshirathayam
          </a>
        </div>
      </div>
    </div>
  );
}
