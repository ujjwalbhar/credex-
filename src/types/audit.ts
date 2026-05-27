export type ToolInput = {
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
};

export type AuditInput = {
  tools: ToolInput[];
  teamSize: number;
  useCase: string;
};

export type Recommendation = {
  tool: string;
  currentSpend: number;
  recommendedAction: string;
  savings: number;
  reason: string;
};

export type AuditResult = {
  monthlySavings: number;
  annualSavings: number;
  recommendations: Recommendation[];
  summary: string;
};
