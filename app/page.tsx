import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  Clock3,
  CloudCog,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/src/components/SiteChrome";
import SavingsCalculator from "@/src/components/SavingsCalculator";
import { creditListings } from "@/src/data/credits";

const stats = [
  ["40-60%", "typical savings"],
  ["24h", "fastest transfer"],
  ["8+", "credit categories"],
];

const steps = [
  {
    title: "Discover verified inventory",
    body: "Browse AI, cloud, and developer credits with face value, discount, validity, and transfer notes visible before inquiry.",
    icon: CloudCog,
  },
  {
    title: "Validate before payment",
    body: "Credex checks balance, ownership, rate limits, eligibility, and transfer path so teams know what they are buying.",
    icon: FileCheck2,
  },
  {
    title: "Close with confidence",
    body: "Escrow-style coordination, NDA-first matching, and handover support keep both buyer and seller protected.",
    icon: LockKeyhole,
  },
];

export default function HomePage() {
  const featured = creditListings.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.14),transparent_32%,rgba(14,165,233,0.12)_68%,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800">
              <BadgeCheck size={17} />
              Secure marketplace for unused credits
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
              Buy AI and cloud credits at startup-friendly prices.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Credex connects buyers with verified unused credits from providers like OpenAI,
              Anthropic, AWS, GCP, Azure, and developer tools, then wraps the deal in proof,
              privacy, and transfer support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/marketplace"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-black text-white shadow-lg shadow-slate-300 transition hover:bg-slate-800"
              >
                Browse Marketplace
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/sell"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-black text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Sell Unused Credits
                <Banknote size={17} />
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 shadow-2xl shadow-slate-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-black text-white">Live Deal Room</p>
                  <p className="text-xs text-slate-400">Verified inventory snapshot</p>
                </div>
                <span className="rounded-lg bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">
                  Protected
                </span>
              </div>
              <div className="mt-4 grid gap-3">
                {featured.map((listing) => {
                  const Icon = listing.icon;
                  return (
                    <div key={listing.id} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className={`grid h-11 w-11 place-items-center rounded-lg ${listing.accent}`}>
                            <Icon size={22} />
                          </span>
                          <div>
                            <p className="font-black text-white">{listing.provider}</p>
                            <p className="text-sm text-slate-400">{listing.verification}</p>
                          </div>
                        </div>
                        <p className="text-right text-lg font-black text-emerald-300">
                          {listing.discount}% off
                        </p>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                        <span className="rounded-lg bg-white/10 px-3 py-2 text-slate-300">
                          ${listing.amount.toLocaleString()}
                        </span>
                        <span className="rounded-lg bg-white/10 px-3 py-2 text-slate-300">
                          {listing.validity}
                        </span>
                        <span className="rounded-lg bg-white/10 px-3 py-2 text-slate-300">
                          {listing.transferTime}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                [ShieldCheck, "Ownership checked"],
                [Clock3, "Fast transfer"],
                [Sparkles, "Discounted access"],
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-sm font-black text-slate-950">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-slate-100 text-slate-800">
                  <Icon size={23} />
                </span>
                <h2 className="mt-5 text-xl font-black text-slate-950">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-lg bg-slate-950 p-6 text-white shadow-xl shadow-slate-200">
          <p className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-emerald-200">
            <CheckCircle2 size={16} />
            Assignment-ready features
          </p>
          <h2 className="mt-5 text-3xl font-black">More than a landing page.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The experience includes a searchable marketplace, seller onboarding,
            verification architecture, buyer inquiry, and an interactive savings calculator.
          </p>
          <Link
            href="/trust"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-black text-slate-950"
          >
            View Trust Flow
            <ArrowRight size={16} />
          </Link>
        </div>
        <SavingsCalculator />
      </section>

      <SiteFooter />
    </main>
  );
}
