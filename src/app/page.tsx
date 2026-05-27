"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import SpendForm from "@/src/components/SpendForm";
import AuditResults from "@/src/components/AuditResults";
import type { AuditInput, AuditResult } from "@/src/types/audit";

export default function HomePage() {
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSubmit = async (data: AuditInput) => {
    const res = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const audit = await res.json();
    setResult(audit);
  };

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-950">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="flex flex-col justify-between rounded-[28px] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/70 sm:p-10">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                <BadgeDollarSign size={24} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  AI Spend Audit
                </p>
                <p className="text-sm text-slate-400">Cost intelligence for lean teams</p>
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 sm:flex">
              <ShieldCheck size={16} />
              Private estimate
            </div>
          </nav>

          <div className="my-16 max-w-2xl space-y-7 lg:my-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
              <CheckCircle2 size={16} />
              60-second audit, instant recommendations
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Stop Overspending on AI Tools
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Find unused seats, mismatched plans, and smarter ways to structure your AI stack before another billing cycle slips by.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["$4.8k", "Avg annual waste found"],
                ["3 min", "Decision-ready summary"],
                ["0 setup", "No billing export needed"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {[
              "Compare plans against real usage",
              "Spot duplicate AI subscriptions",
              "Prioritize savings by impact",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:py-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/80 sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Start here
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Enter one AI subscription
                </h2>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                <BarChart3 size={22} />
              </div>
            </div>

            <SpendForm onSubmit={handleSubmit} />
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
            {result ? (
              <AuditResults result={result} />
            ) : (
              <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">
                  Your audit will appear here
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Submit your current tool, plan, spend, and seats to see estimated monthly savings and recommended next actions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
