export function QuoteForm() {
  return (
    <form className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="Jane Smith" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="jane@example.com" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input type="tel" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="+44 7700 900000" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Property type
          <select className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Farm</option>
            <option>Off-grid</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Project details
        <textarea className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" rows={5} placeholder="Tell us about your project requirements" />
      </label>

      <button type="submit" className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white">
        Submit request
      </button>
    </form>
  );
}
