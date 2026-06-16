import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {products.map((product, i) => (
        <Reveal key={product.slug} delay={i * 80}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
