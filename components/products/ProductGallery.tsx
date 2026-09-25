import type { Product } from "@/types/common";

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img src={product.image} alt={product.name} className="h-[420px] w-full object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[product.image, product.image, product.image].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={image} alt={`${product.name} ${index + 1}`} className="h-28 w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
