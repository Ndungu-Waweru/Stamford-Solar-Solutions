import { QuoteForm } from "@/components/contact/QuoteForm";

export default function QuotePage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Get a quote</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Tell us about your project</h1>
        <p className="mt-4 text-slate-600">
          Share a few details and our team will provide a tailored recommendation.
        </p>
      </div>

      <div className="mt-10">
        <QuoteForm />
      </div>
    </main>
  );
}
