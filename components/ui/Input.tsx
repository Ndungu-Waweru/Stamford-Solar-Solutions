export function Input({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder={placeholder} />
    </label>
  );
}
