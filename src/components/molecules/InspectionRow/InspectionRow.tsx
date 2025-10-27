import type { FC } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface InspectionRowProps {
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

export const InspectionRow: FC<InspectionRowProps> = ({
  batchId,
  orderId,
  totalQty,
  inspected,
  passed,
  failed,
  passRate,
  inspector,
  date,
  status,
  trend
}) => {
  return (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200">
      <td className="px-6 py-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
          {batchId}
        </a>
      </td>
      <td className="px-6 py-4 text-neutral-900">{orderId}</td>
      <td className="px-6 py-4 text-neutral-700">{totalQty}</td>
      <td className="px-6 py-4 text-neutral-700">{inspected}</td>
      <td className="px-6 py-4 text-green-600 font-semibold">{passed}</td>
      <td className="px-6 py-4 text-red-600 font-semibold">{failed}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className={`font-semibold ${passRate >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
            {passRate.toFixed(1)}%
          </span>
          {trend && (
            trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-600" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600" />
            )
          )}
        </div>
      </td>
      <td className="px-6 py-4 text-neutral-700">{inspector}</td>
      <td className="px-6 py-4 text-neutral-700">{date}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
          status === "Completed" 
            ? "bg-neutral-900 text-white" 
            : "bg-neutral-200 text-neutral-800"
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
};
