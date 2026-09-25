export default function AboutPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">About us</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Clean energy systems designed for long-term value</h1>
        <p className="mt-6 text-lg text-slate-600">
          Stamford Solar Solutions helps homes, farms, and businesses reduce operational costs with practical renewable
          energy systems built for reliability and performance.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ["15+ years", "of renewable energy expertise"],
          ["1,200+ installs", "completed across residential and commercial projects"],
          ["99% satisfaction", "from customers who value quality and aftercare"],
        ].map(([value, label]) => (
          <div key={value} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-emerald-600">{value}</div>
            <p className="mt-3 text-slate-600">{label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

