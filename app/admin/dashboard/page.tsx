export default function AdminDashboardPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold text-slate-900">Dashboard overview</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ["Orders", "128"],
          ["Revenue", "£84.2k"],
          ["Customers", "432"],
          ["Projects", "18"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
