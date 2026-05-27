"use client";

import { useState } from "react";
import type { AuditInput } from "@/src/types/audit";

type SpendFormProps = {
  onSubmit: (data: AuditInput) => void;
};

export default function SpendForm({ onSubmit }: SpendFormProps) {
  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Team");
  const [monthlySpend, setMonthlySpend] = useState(60);
  const [seats, setSeats] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      tools: [
        {
          tool,
          plan,
          monthlySpend,
          seats,
        },
      ],
      teamSize: seats,
      useCase: "coding",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-6">
      <div>
        <label className="block text-sm font-medium">Tool</label>
        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="w-full rounded border p-2"
          title="Select Tool"
        >
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Plan</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full rounded border p-2"
          title="Select Plan"
        >
          <option>Plus</option>
          <option>Team</option>
          <option>Enterprise</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Monthly Spend</label>
        <input
          type="number"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(Number(e.target.value))}
          className="w-full rounded border p-2"
          placeholder="Enter monthly spend"
          title="Monthly Spend"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Seats</label>
        <input
          type="number"
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="w-full rounded border p-2"
          placeholder="Enter number of seats"
          title="Seats"
        />
      </div>

      <button type="submit" className="w-full rounded bg-black p-3 text-white">
        Generate Audit
      </button>
    </form>
  );
}
