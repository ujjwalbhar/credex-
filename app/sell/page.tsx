import {
  ArrowRight,
  BadgeDollarSign,
  CircleDollarSign,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/src/components/SiteChrome";

const sellerSteps = [
  ["Submit inventory", "Provider, face value, validity, transfer limits, and proof of ownership."],
  ["Complete verification", "Credex validates balance, account health, eligibility, and risk signals."],
  ["Match with buyers", "Your listing is shared with qualified buyers under a private deal flow."],
  ["Transfer and settle", "Funds release after transfer confirmation and buyer acceptance."],
];

export default function SellPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-sm font-black text-amber-900">
            <BadgeDollarSign size={17} />
            Seller onboarding
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
            Turn unused credits into clean, verified liquidity.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Credex helps startups, agencies, and builders resell unused AI,
            cloud, and software credits without noisy public listings or risky handovers.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [CircleDollarSign, "Monetize unused balance"],
              [LockKeyhole, "Private buyer matching"],
              [ShieldCheck, "Verification-led transfer"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <Icon className="h-5 w-5 text-slate-800" />
                <p className="mt-3 text-sm font-black text-slate-950">{label as string}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-emerald-700">List credits</p>
              <h2 className="mt-2 text-2xl font-black">Seller intake</h2>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-100 text-slate-800">
              <FileCheck2 size={22} />
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Company name" />
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Work email" type="email" />
            <select className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" title="Credit provider">
              <option>OpenAI</option>
              <option>Anthropic</option>
              <option>AWS</option>
              <option>Google Cloud</option>
              <option>Azure</option>
              <option>Other software credits</option>
            </select>
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Face value, e.g. $25,000" />
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Expiry or validity" />
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Expected payout range" />
            <textarea className="min-h-28 rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold outline-none focus:border-slate-400 sm:col-span-2" placeholder="Transfer details, limitations, proof available..." />
          </div>

          <button className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-slate-800">
            Submit for Verification
            <ArrowRight size={17} />
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {sellerSteps.map(([title, body], index) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-emerald-700">0{index + 1}</p>
              <h2 className="mt-3 text-lg font-black text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
