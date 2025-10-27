import type { FC } from "react";
import { FailedItemCard } from "@/components";
import { XCircle } from "lucide-react";

interface FailedItem {
  batchId: string;
  orderId: string;
  failedCount: number;
  defects: string[];
}

interface RecentFailedItemsProps {
  items: FailedItem[];
}

export const RecentFailedItems: FC<RecentFailedItemsProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
          <XCircle className="w-5 h-5 text-red-600" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">Recent Failed Items</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <FailedItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
