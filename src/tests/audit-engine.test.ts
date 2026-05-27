import { describe, expect, it } from "vitest";
import { generateAudit } from "@/src/lib/audit-engine";

describe("audit engine", () => {
  it("detects overpriced ChatGPT Team plan", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "ChatGPT",
          plan: "Team",
          monthlySpend: 60,
          seats: 2,
        },
      ],
      teamSize: 2,
      useCase: "coding",
    });

    expect(result.monthlySavings).toBeGreaterThan(0);
  });
});
