"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/lang";
import { getProduct } from "@/lib/products";

export default function AddToCart({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const { t } = useLang();
  const [added, setAdded] = useState(false);

  const product = getProduct(slug);
  if (!product) return null;

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      color: product.color,
      price: product.price,
      image: product.images[0],
      dimensions: product.dimensions,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-espresso text-cream py-4 text-[13px] tracking-[0.14em] uppercase transition-all hover:bg-espresso/90 active:scale-[0.99]"
    >
      {added ? t("נוסף לעגלה ✓", "Added to Bag ✓") : t("הוסף לעגלה", "Add to Bag")}
    </button>
  );
}
