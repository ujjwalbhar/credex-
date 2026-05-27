import { AuditResult } from "@/src/types/audit";

export default function AuditResults({ result }: { result: AuditResult }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border p-6">
        <h2 className="text-3xl font-bold">
          ${result.monthlySavings}/mo saved
        </h2>

        <p className="text-gray-500">
          ${result.annualSavings}/year potential savings
        </p>
      </div>

      {result.recommendations.map(
        (rec: import("@/src/types/audit").Recommendation, index: number) => (
          <div key={index} className="rounded-xl border p-4">
            <h3 className="font-semibold">{rec.tool}</h3>

            <p>{rec.recommendedAction}</p>

            <p className="text-green-600">Save ${rec.savings}/month</p>

            <p className="text-sm text-gray-500">{rec.reason}</p>
          </div>
        ),
      )}

      <div className="rounded-xl bg-gray-100 p-4">
        <p>{result.summary}</p>
      </div>
    </div>
  );
}
