export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{children}</span>;
}
