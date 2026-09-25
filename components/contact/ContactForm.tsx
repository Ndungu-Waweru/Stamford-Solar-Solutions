export function ContactForm() {
  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-5">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" rows={5} placeholder="Tell us about your project" />
        </label>
        <button type="submit" className="rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white">Send message</button>
      </div>
    </form>
  );
}
