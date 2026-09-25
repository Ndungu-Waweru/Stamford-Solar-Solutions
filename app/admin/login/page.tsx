export default function AdminLoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Admin</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Log in</h1>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="admin@company.com" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input type="password" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5" placeholder="••••••••" />
          </label>
          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

