"use client";

import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/lang";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count } = useCart();
  const { t } = useLang();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-espresso/20 backdrop-blur-sm" onClick={closeCart} />

      <aside className="animate-slide-in fixed top-0 right-0 h-full w-full sm:max-w-md z-50 bg-warm-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen-border">
          <h2 className="font-serif text-xl">
            {t("העגלה שלך", "Your Bag")} {count > 0 && <span className="text-taupe text-base">({count})</span>}
          </h2>
          <button onClick={closeCart} className="text-taupe hover:text-espresso transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-taupe">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <p className="text-sm">{t("העגלה ריקה", "Your bag is empty")}</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-linen-border px-6">
              {items.map((item) => (
                <li key={item.slug} className="py-5 flex gap-4">
                  <div
                    className="w-20 h-20 rounded bg-linen flex-shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base">{item.name}</p>
                    <p className="text-xs text-taupe tracking-[0.1em] uppercase mt-0.5">{item.color}</p>
                    <p className="text-xs text-taupe mt-0.5">{item.dimensions}</p>
                    <p className="text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQty(item.slug, item.quantity - 1)} className="w-6 h-6 border border-linen-border rounded-full text-taupe hover:border-espresso transition-colors flex items-center justify-center text-sm">−</button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(item.slug, item.quantity + 1)} className="w-6 h-6 border border-linen-border rounded-full text-taupe hover:border-espresso transition-colors flex items-center justify-center text-sm">+</button>
                      <button onClick={() => removeItem(item.slug)} className="mr-auto text-xs text-taupe hover:text-espresso transition-colors">{t("הסר", "Remove")}</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-linen-border px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-taupe">{t("סה\"כ", "Subtotal")}</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-taupe">{t("משלוח יחושב בקופה", "Shipping calculated at checkout")}</p>
              <button
                disabled
                className="w-full bg-espresso/50 text-cream py-3.5 text-[13px] tracking-[0.14em] uppercase cursor-not-allowed"
              >
                {t("תשלום — בקרוב", "Checkout — Coming Soon")}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
