/**
 * Product details page.
 *
 * Magazine-spread layout: gallery left (sticky on desktop), details right.
 * Statically generated for every product via generateStaticParams.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCart from "@/components/AddToCart";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { formatPrice, getProduct, products } from "@/lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.color}`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-10">
        {/* Breadcrumb for orientation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-taupe">
          <ol className="flex gap-2">
            <li>
              <Link href="/collection" className="transition-opacity hover:opacity-60">
                Collection
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-espresso">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
          {/* Gallery — sticky so it stays in view while reading details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductGallery product={product} />
          </div>

          {/* Details */}
          <div className="max-w-xl">
            <p className="mb-3 text-[13px] font-medium tracking-[0.3em] text-taupe uppercase">
              {product.color}
            </p>
            <h1 className="text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-4 text-xl tabular-nums">{formatPrice(product.price)}</p>

            <p className="mt-8 leading-relaxed text-taupe">{product.description}</p>

            <div className="mt-10">
              <AddToCart slug={product.slug} />
              <p className="mt-3 text-xs text-taupe">
                Complimentary shipping within the EU · 30-day returns
              </p>
            </div>

            {/* Craftsmanship details */}
            <div className="mt-12 border-t border-linen-border pt-8">
              <h2 className="mb-4 font-sans text-[13px] font-medium tracking-[0.16em] uppercase">
                Details
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-taupe">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-espresso/40" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-linen-border pt-8 pb-16">
              <h2 className="mb-2 font-sans text-[13px] font-medium tracking-[0.16em] uppercase">
                Dimensions
              </h2>
              <p className="text-sm text-taupe">
                {product.dimensions} — seats six to eight, with a generous drop.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related pieces */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <h2 className="mb-12 text-2xl md:text-3xl">You may also love</h2>
        </Reveal>
        <ProductGrid products={related} />
      </section>
    </>
  );
}
