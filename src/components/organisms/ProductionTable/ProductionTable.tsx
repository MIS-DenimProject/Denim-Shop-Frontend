import type { FC } from "react";
import { ProductionItemRow } from "@/components";

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
}

export const ProductionTable: FC<ProductionTableProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
        <h2 className="text-xl font-bold text-neutral-900">All Production Items</h2>
        <button className="text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors duration-200">
          View All Stages
        </button>
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {items.map((item) => (
              <ProductionItemRow key={item.orderId} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
