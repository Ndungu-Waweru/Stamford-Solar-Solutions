import Link from "next/link";

import type { Product } from "@/types/common";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-52 overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <p className="text-sm font-medium text-emerald-600">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-sm text-slate-600">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">£{product.price.toLocaleString()}</span>
          <span className="text-sm font-medium text-slate-600">Details</span>
        </div>
      </div>
    </Link>
  );
}
