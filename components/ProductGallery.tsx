"use client";

import { useState } from "react";
import { Product } from "@/lib/products";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[4/5] bg-linen overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${product.images[active]})` }}
        />
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-2">
          {product.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`aspect-square w-16 bg-linen overflow-hidden border-2 transition-colors ${
                active === i ? "border-espresso" : "border-transparent hover:border-linen-border"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
