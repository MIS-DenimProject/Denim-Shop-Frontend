import type { FC } from "react";
import { InspectionRow } from "@/components";
import { Info } from "lucide-react";

interface InspectionData {
  batchId: string;
  orderId: string;
  totalQty: number;
  inspected: number;
  passed: number;
  failed: number;
  passRate: number;
  inspector: string;
  date: string;
  status: "Completed" | "In Progress";
  trend?: "up" | "down";
}

interface InspectionHistoryTableProps {
  inspections: InspectionData[];
  onUpdateInspection?: (batchId: string, updates: Partial<InspectionData>) => void;
}

export const InspectionHistoryTable: FC<InspectionHistoryTableProps> = ({ inspections, onUpdateInspection }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      {/* Info Banner */}
      <div className="px-6 py-3 bg-purple-50 border-b border-purple-200 flex items-center gap-3">
        <Info className="w-5 h-5 text-purple-600 shrink-0" />
        <p className="text-sm text-purple-800">
          <span className="font-semibold">Interactive Table:</span> Click the <span className="font-semibold">edit button</span> to modify inspections, or <span className="font-semibold">click status badges</span> to toggle status
        </p>
      </div>
      
      <div className="px-8 py-6 border-b border-neutral-200">
        <h2 className="text-xl font-bold text-neutral-900">Inspection History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Batch #
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Order #
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Total Qty
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Inspected
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Passed
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Failed
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Pass Rate
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Inspector
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {inspections.map((inspection) => (
              <InspectionRow key={inspection.batchId} {...inspection} onUpdate={onUpdateInspection} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
