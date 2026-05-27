export interface AuditInput {
  tools: ToolInput[];
  teamSize: number;
  primaryUseCase: 'coding' | 'writing' | 'data' | 'research' | 'mixed';
}

export interface ToolInput {
  name: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface Recommendation {
  tool: string;
  currentSpend: number;
  recommendedAction: string;
  monthlySavings: number;
  reason: string;
}

export interface AuditResult {
  recommendations: Recommendation[];
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  summary?: string;
}
