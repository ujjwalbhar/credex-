"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [retailSpend, setRetailSpend] = useState(10000);
  const [discount, setDiscount] = useState(48);

  const savings = useMemo(
    () => Math.round((retailSpend * discount) / 100),
    [retailSpend, discount],
  );
  const credexPrice = retailSpend - savings;

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-emerald-700">Savings model</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">Estimate runway saved</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
          <Calculator size={22} />
        </span>
      </div>

      <div className="mt-6 grid gap-5">
        <label className="grid gap-2">
          <span className="flex items-center justify-between text-sm font-bold text-slate-700">
            Retail credit need
            <span>${retailSpend.toLocaleString()}</span>
          </span>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={retailSpend}
            onChange={(event) => setRetailSpend(Number(event.target.value))}
            className="accent-slate-950"
          />
        </label>

        <label className="grid gap-2">
          <span className="flex items-center justify-between text-sm font-bold text-slate-700">
            Marketplace discount
            <span>{discount}%</span>
          </span>
          <input
            type="range"
            min="20"
            max="65"
            step="1"
            value={discount}
            onChange={(event) => setDiscount(Number(event.target.value))}
            className="accent-emerald-600"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-slate-950 p-4 text-white">
          <p className="text-sm text-slate-300">Credex price</p>
          <p className="mt-2 text-2xl font-black">${credexPrice.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-emerald-600 p-4 text-white">
          <p className="flex items-center gap-2 text-sm text-emerald-50">
            <TrendingDown size={16} />
            Savings
          </p>
          <p className="mt-2 text-2xl font-black">${savings.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-amber-100 p-4 text-amber-950">
          <p className="text-sm font-semibold">Extra runway</p>
          <p className="mt-2 text-2xl font-black">{Math.max(1, Math.round(savings / 2500))} mo</p>
        </div>
      </div>
    </section>
  );
}
