import type { FC } from "react";
import { ProductionItemRow } from "@/components";
import { Info } from "lucide-react";

interface ProductionItem {
  orderId: string;
  style: string;
  quantity: string;
  currentStage: string;
  progress: number;
  assignedTo: string;
  estCompletion: string;
  status: "info" | "warning";
}

interface ProductionTableProps {
  items: ProductionItem[];
  onUpdateItem?: (orderId: string, updates: Partial<ProductionItem>) => void;
}

export const ProductionTable: FC<ProductionTableProps> = ({ items, onUpdateItem }) => {
  const onTrackCount = items.filter(item => item.status === 'info').length;
  const delayedCount = items.filter(item => item.status === 'warning').length;
  
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      {/* Info Banner */}
      <div className="px-6 py-3 bg-blue-50 border-b border-blue-200 flex items-center gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0" />
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Interactive Table:</span> Click the <span className="font-semibold">edit button</span> to modify orders, or <span className="font-semibold">click status badges</span> to toggle between "On Track" and "Needs Attention"
        </p>
      </div>
      
      <div className="px-8 py-6 border-b border-neutral-200 bg-linear-to-r from-neutral-50 to-denim-50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Active Production Orders</h2>
            <p className="text-sm text-neutral-600 mt-1">
              {onTrackCount} on track • {delayedCount} needs attention
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-green-100 rounded-lg">
              <p className="text-xs text-green-700 font-medium">On Track</p>
              <p className="text-lg font-bold text-green-700">{onTrackCount}</p>
            </div>
            <div className="px-4 py-2 bg-yellow-100 rounded-lg">
              <p className="text-xs text-yellow-700 font-medium">Attention</p>
              <p className="text-lg font-bold text-yellow-700">{delayedCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Order #
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Style
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Current Stage
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Est. Completion
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
            {items.map((item) => (
              <ProductionItemRow key={item.orderId} {...item} onUpdate={onUpdateItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
