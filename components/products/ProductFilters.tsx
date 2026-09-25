export function ProductFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Filter</p>
      <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1">Residential</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Commercial</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Off-grid</span>
      </div>
    </div>
  );
}
