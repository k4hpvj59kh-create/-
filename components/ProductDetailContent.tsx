"use client";

import Link from "next/link";
import AddToCart from "@/components/AddToCart";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { formatPrice, Product } from "@/lib/products";
import { useLang } from "@/lib/lang";

export default function ProductDetailContent({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { t, lang } = useLang();
  const details = lang === "he" ? product.details : product.detailsEn;

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-10">
        {/* Breadcrumb */}
        <nav aria-label={t("פירורי לחם", "Breadcrumb")} className="mb-8 text-sm text-taupe">
          <ol className="flex gap-2">
            <li>
              <Link href="/collection" className="transition-opacity hover:opacity-60">
                {t("הקולקציה", "Collection")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-espresso">
              {t(product.name, product.nameEn)}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductGallery product={product} />
          </div>

          <div className="max-w-xl">
            <p className="mb-3 text-[13px] font-medium tracking-[0.3em] text-taupe uppercase">
              {t(product.color, product.colorEn)}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-espresso">{t(product.name, product.nameEn)}</h1>
            <p className="mt-4 text-xl tabular-nums">{formatPrice(product.price)}</p>

            <p className="mt-8 leading-relaxed text-taupe">{t(product.description, product.descriptionEn)}</p>

            <div className="mt-10">
              <AddToCart slug={product.slug} />
              <p className="mt-3 text-xs text-taupe">
                {t("משלוח חינם בישראל", "Free shipping in Israel")}
              </p>
            </div>

            <div className="mt-12 border-t border-linen-border pt-8">
              <h2 className="mb-4 font-sans text-[13px] font-medium tracking-[0.16em] uppercase">
                {t("פרטים", "Details")}
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-taupe">
                {details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-espresso/40" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-linen-border pt-8 pb-16">
              <h2 className="mb-2 font-sans text-[13px] font-medium tracking-[0.16em] uppercase">
                {t("מידות", "Dimensions")}
              </h2>
              <p className="text-sm text-taupe">{product.dimensions}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-8 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <h2 className="mb-12 font-serif text-2xl md:text-3xl text-espresso">{t("אולי תאהבו גם", "You may also love")}</h2>
        </Reveal>
        <ProductGrid products={related} />
      </section>
    </>
  );
}
