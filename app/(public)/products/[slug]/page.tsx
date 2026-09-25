import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSpecifications } from "@/components/products/ProductSpecifications";
import { Button } from "@/components/ui/Button";
import { getProductBySlug } from "@/lib/products";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container py-16">
      <div className="mb-8">
        <Link href="/products" className="text-sm font-medium text-emerald-600">
          ← Back to products
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery product={product} />

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-4 text-xl font-semibold text-slate-900">£{product.price.toLocaleString()}</p>
          <p className="mt-4 text-slate-600">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/quote">Request a quote</Button>
            <Button href="/contact" variant="secondary">Talk to an expert</Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ProductSpecifications product={product} />
      </div>
    </main>
  );
}
