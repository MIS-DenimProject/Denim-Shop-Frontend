import type { FC } from "react";
import { ProgressBar, StatusBadge } from "@/components";

interface ProductionItemRowProps {
  orderId: string;
  style: string;
  quantity: string;
  currentStage: string;
  progress: number;
  assignedTo: string;
  estCompletion: string;
  status: "info" | "warning";
}

export const ProductionItemRow: FC<ProductionItemRowProps> = ({
  orderId,
  style,
  quantity,
  currentStage,
  progress,
  assignedTo,
  estCompletion,
  status
}) => {
  return (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200">
      <td className="px-6 py-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
          {orderId}
        </a>
      </td>
      <td className="px-6 py-4 text-neutral-900">{style}</td>
      <td className="px-6 py-4 text-neutral-700">{quantity}</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800">
          {currentStage}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="w-32">
          <ProgressBar percentage={progress} />
        </div>
      </td>
      <td className="px-6 py-4 text-neutral-700">{assignedTo}</td>
      <td className="px-6 py-4 text-neutral-700">{estCompletion}</td>
      <td className="px-6 py-4">
        <StatusBadge type={status} />
      </td>
    </tr>
  );
};
