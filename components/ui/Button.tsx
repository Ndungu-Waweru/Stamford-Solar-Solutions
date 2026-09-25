import Link from "next/link";

export function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
      : "rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900";

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
