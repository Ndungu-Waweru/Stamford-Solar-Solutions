import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-emerald-600 py-16 text-white">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Ready to get started?</p>
          <h2 className="mt-2 text-4xl font-bold">Book a site survey today</h2>
        </div>
        <Link href="/quote" className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-700">
          Request a quote
        </Link>
      </div>
    </section>
  );
}
