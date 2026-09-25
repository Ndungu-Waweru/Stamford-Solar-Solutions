export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">{children}</div>
    </div>
  );
}
