import {
  BadgeCheck,
  ClipboardCheck,
  Eye,
  FileLock2,
  Handshake,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/src/components/SiteChrome";

const checks = [
  ["Ownership proof", "Invoice trails, admin access screenshots, account age, and source-of-credit context."],
  ["Balance validation", "Credit amount, expiry, provider constraints, and rate-limit tier are checked before buyer matching."],
  ["Transfer feasibility", "Credex documents whether credits move by account transfer, billing project, seat reassignment, or supported handover."],
  ["Payment protection", "Buyer funds and seller release are coordinated around completion evidence and acceptance windows."],
];

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <SiteHeader />
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-black text-emerald-200">
              <ShieldCheck size={17} />
              Trust architecture
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              A marketplace is only useful when buyers can verify the deal.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Credex is designed around proof before payment: source checks,
              balance validation, private matching, and guided handover.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [Eye, "Transparent inventory"],
              [UserCheck, "Qualified counterparties"],
              [FileLock2, "NDA-first workflows"],
              [Handshake, "Guided closing"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <Icon className="h-6 w-6 text-emerald-300" />
                <p className="mt-4 font-black">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {checks.map(([title, body], index) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                  {index % 2 === 0 ? <BadgeCheck size={22} /> : <ClipboardCheck size={22} />}
                </span>
                <div>
                  <h2 className="text-xl font-black text-slate-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase text-emerald-700">Deal lifecycle</p>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {["Intake", "Verify", "Match", "Transfer", "Release"].map((item, index) => (
              <div key={item} className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-black text-slate-400">0{index + 1}</p>
                <p className="mt-2 text-lg font-black text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
