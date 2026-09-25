import Link from "next/link";

import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="container py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Best sellers</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900">Popular solar products</h2>
        </div>
        <Link href="/products" className="text-sm font-semibold text-emerald-600">Browse all products →</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="h-52 overflow-hidden rounded-2xl bg-slate-100">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-5">
              <p className="text-sm text-emerald-600">{product.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">£{product.price.toLocaleString()}</span>
                <span className="text-sm text-slate-500">View details</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
