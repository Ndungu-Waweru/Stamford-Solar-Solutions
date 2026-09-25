import { categories } from "@/data/categories";

export function ProductSidebar() {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Shop by category</h3>
      <ul className="mt-5 space-y-3 text-slate-600">
        {categories.map((category) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </aside>
  );
}
