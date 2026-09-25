import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-100">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Trusted solar solutions</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-slate-900">
            Power your future with smarter solar energy.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            From residential rooftops to commercial power upgrades, we design renewable systems that reduce costs and improve resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white">Get a quote</Link>
            <Link href="/products" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900">View products</Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-emerald-100/30">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-100">Average saving</p>
            <div className="mt-4 text-5xl font-black">34%</div>
            <p className="mt-3 text-emerald-50">On annual electricity cost across our managed commercial projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
