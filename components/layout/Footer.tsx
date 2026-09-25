import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Solar Panels", href: "/products" },
    { label: "Inverters", href: "/products" },
    { label: "Batteries", href: "/products" },
  ],
  Support: [
    { label: "Solutions", href: "/solutions" },
    { label: "Quote", href: "/quote" },
    { label: "FAQ", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b400] text-lg font-bold text-white">
                S
              </div>
              <div>
                <div className="text-lg font-bold text-white">Stamford</div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#18B7D4]">
                  Solar Solutions
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Delivering smart solar energy systems, battery storage, and renewable power
              solutions for homes, businesses, and agricultural projects.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                {title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-[#18B7D4]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Stamford Solar Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
