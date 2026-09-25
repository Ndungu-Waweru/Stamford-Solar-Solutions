import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center text-center py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">
        Back to home
      </Link>
    </main>
  );
}
