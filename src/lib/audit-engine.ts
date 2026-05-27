import { AuditInput, AuditResult, Recommendation } from "@/src/types/audit"

export function generateAudit(input: AuditInput): AuditResult {
  const recommendations: Recommendation[] = [];

  for (const tool of input.tools) {
    if (tool.tool === "ChatGPT" && tool.plan === "Team" && tool.seats <= 2) {
      const savings = tool.monthlySpend - 40;

      recommendations.push({
        tool: tool.tool,
        currentSpend: tool.monthlySpend,
        recommendedAction: "Downgrade to ChatGPT Plus",
        savings,
        reason:
          "Small teams using basic workflows rarely benefit from Team collaboration features.",
      });
    }

    if (tool.tool === "Cursor" && tool.plan === "Business" && tool.seats <= 3) {
      const savings = tool.monthlySpend - 60;

      recommendations.push({
        tool: tool.tool,
        currentSpend: tool.monthlySpend,
        recommendedAction: "Switch to Cursor Pro",
        savings,
        reason:
          "Business tier is usually unnecessary for small engineering teams.",
      });
    }
  }

  const monthlySavings = recommendations.reduce(
    (acc, curr) => acc + (curr.savings ?? 0),
    0,
  );

  return {
    totalMonthlySavings: monthlySavings,
    totalAnnualSavings: monthlySavings * 12,
    recommendations,
    summary:
      monthlySavings > 0
        ? `You could save approximately $${monthlySavings} every month.`
        : "Your AI tooling stack already appears cost-efficient.",
  };
}


