import { SolutionGrid } from "@/components/solutions/SolutionGrid";

export default function SolutionsPage() {
  return (
    <main className="container py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Solutions</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Designed around your energy goals</h1>
      </div>
      <SolutionGrid />
    </main>
  );
}
