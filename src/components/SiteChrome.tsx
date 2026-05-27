import Link from "next/link";
import { BadgeCheck, BadgeDollarSign, LockKeyhole, Menu } from "lucide-react";

const navItems = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Sell Credits", href: "/sell" },
  { label: "Trust", href: "/trust" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-emerald-300 shadow-sm">
            <BadgeDollarSign size={23} strokeWidth={2.4} />
          </span>
          <span>
            <span className="block text-base font-black text-slate-950">Credex</span>
            <span className="block text-xs font-medium text-slate-500">
              Verified credit marketplace
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <LockKeyhole size={16} />
            Verify Process
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
          >
            Browse Deals
            <BadgeCheck size={16} />
          </Link>
        </div>

        <Link
          href="/marketplace"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Open marketplace"
        >
          <Menu size={20} />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-emerald-300">
              <BadgeDollarSign size={23} />
            </span>
            <div>
              <p className="font-black text-slate-950">Credex</p>
              <p className="text-sm text-slate-500">Unused AI and cloud credits, verified.</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
            A polished assignment-ready marketplace concept for secure discovery,
            verification, and transfer of discounted software credits.
          </p>
        </div>
        <div>
          <p className="text-sm font-black text-slate-950">Explore</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-500">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black text-slate-950">Signals</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-500">
            <span>Escrow-style payment flow</span>
            <span>Balance and ownership checks</span>
            <span>NDA-first buyer/seller matching</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
