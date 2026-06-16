"use client";

import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { useLang } from "@/lib/lang";

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLang();

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        />
      </div>
      <div className="mt-4 flex justify-between items-end">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe">{t(product.color, product.colorEn)}</p>
          <p className="mt-1 font-serif text-lg text-espresso">{t(product.name, product.nameEn)}</p>
          <p className="text-xs text-taupe mt-0.5">{product.dimensions}</p>
        </div>
        <p className="text-sm tabular-nums text-espresso">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
