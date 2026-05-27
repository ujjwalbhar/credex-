export interface ToolInput {
  name?: string;
  tool?: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditInput {
  tools: ToolInput[];
  teamSize: number;
  primaryUseCase?: 'coding' | 'writing' | 'data' | 'research' | 'mixed';
  useCase?: string;
}

export interface Recommendation {
  tool: string;
  currentSpend: number;
  recommendedAction: string;
  monthlySavings?: number;
  savings?: number;
  reason: string;
}

export interface AuditResult {
  recommendations: Recommendation[];
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  summary?: string;
}
