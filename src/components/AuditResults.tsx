import { AuditResult } from '@/src/types/audit';

interface Props {
  result: AuditResult;
}

export default function AuditResults({ result }: Props) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border p-6">
        <h2 className="text-3xl font-bold">
          \/mo saved
        </h2>

        <p className="text-gray-500">
          \/year potential savings
        </p>
      </div>

      <div className="space-y-4">
        {result.recommendations.map((rec, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{rec.tool}</h3>
              <span className="text-green-600 font-bold">Save \/mo</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Current spend: \/mo</p>
            <p className="text-sm font-medium mt-2">{rec.recommendedAction}</p>
            <p className="text-sm text-gray-400 mt-1">{rec.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
