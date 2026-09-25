import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Shop</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Solar equipment for every project</h1>
      </div>
      <ProductGrid />
    </main>
  );
}
