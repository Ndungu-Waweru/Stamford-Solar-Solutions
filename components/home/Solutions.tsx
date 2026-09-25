import Link from "next/link";

import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Solutions</p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">Energy systems designed around your needs</h2>
          </div>
          <Link href="/solutions" className="text-sm font-semibold text-emerald-600">See all solutions →</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">{solution.name}</h3>
              <p className="mt-3 text-slate-600">{solution.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {solution.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
