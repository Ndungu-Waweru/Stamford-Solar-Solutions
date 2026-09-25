import Link from "next/link";

import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Categories</p>
          <h2 className="mt-2 text-4xl font-bold">Power solutions for every site</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`} className="rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-emerald-400 hover:bg-slate-800/80">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
