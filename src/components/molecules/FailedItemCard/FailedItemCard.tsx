import type { FC } from "react";

interface FailedItemCardProps {
  batchId: string;
  orderId: string;
  failedCount: number;
  defects: string[];
}

export const FailedItemCard: FC<FailedItemCardProps> = ({ 
  batchId, 
  orderId, 
  failedCount, 
  defects 
}) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-bold text-lg">
            {batchId}
          </a>
          <p className="text-sm text-neutral-600 mt-1">Order: {orderId}</p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-700">
          {failedCount} failed
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {defects.map((defect, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm font-medium"
          >
            {defect}
          </span>
        ))}
      </div>
    </div>
  );
};
