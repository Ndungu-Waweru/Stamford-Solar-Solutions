import Link from "next/link";

import type { Solution } from "@/types/common";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Solution</p>
      <h3 className="mt-3 text-2xl font-bold text-slate-900">{solution.name}</h3>
      <p className="mt-3 text-slate-600">{solution.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {solution.benefits.map((benefit) => (
          <li key={benefit}>• {benefit}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/quote" className="text-sm font-semibold text-emerald-600">Request a tailored plan →</Link>
      </div>
    </div>
  );
}
