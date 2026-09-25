import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Let’s talk about your energy goals</h1>
          <p className="mt-4 text-lg text-slate-600">
            Reach out for a project review, technical guidance, or a tailored quote.
          </p>

          <div className="mt-8 space-y-4 text-slate-600">
            <p>📍 24 Orchard Road, Stamford</p>
            <p>📞 +44 20 5555 0123</p>
            <p>✉️ hello@stamfordsolarsolutions.co.uk</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
