export function ProductSearch() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">
        Search products
        <input
          type="search"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5"
          placeholder="Search equipment"
        />
      </label>
    </div>
  );
}
