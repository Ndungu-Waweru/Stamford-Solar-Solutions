import type { Product } from "@/types/common";

export function ProductSpecifications({ product }: { product: Product }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Key specifications</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Highlights</p>
          <ul className="mt-4 space-y-2 text-slate-600">
            {product.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Details</p>
          <p className="mt-4 text-slate-600">
            Recommended for homeowners and businesses seeking dependable energy performance, flexible power capacity, and low-maintenance operation.
          </p>
        </div>
      </div>
    </section>
  );
}
