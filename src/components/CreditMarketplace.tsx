"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Filter, Search, ShieldCheck } from "lucide-react";
import { categories, creditListings, type CreditListing } from "@/src/data/credits";

function ListingCard({ listing }: { listing: CreditListing }) {
  const Icon = listing.icon;
  const salePrice = Math.round(listing.amount * (1 - listing.discount / 100));

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span className={`grid h-12 w-12 place-items-center rounded-lg ${listing.accent}`}>
          <Icon size={24} />
        </span>
        <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
          {listing.status}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs font-black uppercase text-slate-500">{listing.category}</p>
        <h3 className="mt-2 text-xl font-black text-slate-950">{listing.provider}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">{listing.verification}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-500">Face value</p>
          <p className="mt-1 text-lg font-black text-slate-950">${listing.amount.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3">
          <p className="text-xs font-bold text-emerald-700">Discount</p>
          <p className="mt-1 text-lg font-black text-emerald-700">{listing.discount}%</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-500">Valid for</p>
          <p className="mt-1 text-sm font-black text-slate-950">{listing.validity}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-500">Transfer</p>
          <p className="mt-1 text-sm font-black text-slate-950">{listing.transferTime}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs font-bold text-slate-500">Estimated price</p>
          <p className="text-xl font-black text-slate-950">${salePrice.toLocaleString()}</p>
        </div>
        <a
          href="#inquiry"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Inquire
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default function CreditMarketplace() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      creditListings.filter((listing) => {
        const matchesCategory = category === "All" || listing.category === category;
        const matchesQuery = listing.provider.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  return (
    <section>
      <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search OpenAI, AWS, Claude, Azure..."
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`h-12 shrink-0 rounded-lg px-4 text-sm font-black transition ${
                category === item
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-500">
        <Filter size={16} />
        Showing {filtered.length} verified listings with balance checks, transfer notes, and discount ranges.
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <div id="inquiry" className="mt-8 rounded-lg bg-slate-950 p-5 text-white shadow-xl shadow-slate-200 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-emerald-200">
              <ShieldCheck size={16} />
              Buyer inquiry
            </p>
            <h2 className="mt-5 text-3xl font-black">Reserve verified credits before they move.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Share the provider, budget, and deadline. Credex matches you with available
              inventory, runs verification, and coordinates a secure transfer path.
            </p>
          </div>
          <form className="grid gap-3 rounded-lg bg-white p-4 text-slate-950 sm:grid-cols-2">
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Name or company" />
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Work email" type="email" />
            <select className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" title="Provider">
              {creditListings.slice(0, 6).map((listing) => (
                <option key={listing.id}>{listing.provider}</option>
              ))}
            </select>
            <input className="h-12 rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-slate-400" placeholder="Budget, e.g. $10,000" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-black text-white transition hover:bg-emerald-700 sm:col-span-2">
              Request Match
              <CheckCircle2 size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
