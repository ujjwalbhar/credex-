import { BadgeCheck } from "lucide-react";
import CreditMarketplace from "@/src/components/CreditMarketplace";
import { SiteFooter, SiteHeader } from "@/src/components/SiteChrome";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <SiteHeader />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800">
            <BadgeCheck size={17} />
            Verified live-style listings
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black text-slate-950 sm:text-6xl">
            Marketplace for discounted AI and cloud credits.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Filter by provider category, inspect transfer terms, compare discounts,
            and send a buyer inquiry from one focused workspace.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CreditMarketplace />
      </section>
      <SiteFooter />
    </main>
  );
}
