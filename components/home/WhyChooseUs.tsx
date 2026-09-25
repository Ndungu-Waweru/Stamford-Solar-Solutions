export function WhyChooseUs() {
  return (
    <section className="container py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Why choose us</p>
        <h2 className="mt-3 text-4xl font-bold text-slate-900">Built for reliability, performance, and peace of mind</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ["End-to-end design", "System planning, installation, and commissioning handled by one trusted team."],
          ["Premium components", "We specify dependable brands and proven hardware for long service life."],
          ["Ongoing support", "From feasibility to aftercare, we stay involved for the full project lifecycle."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-emerald-100" />
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
