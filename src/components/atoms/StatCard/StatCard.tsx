import type { FC } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  type?: "default" | "success" | "error" | "warning";
  trend?: "up" | "down";
  subtitle?: string;
}

export const StatCard: FC<StatCardProps> = ({ 
  label, 
  value, 
  type = "default",
  trend,
  subtitle 
}) => {
  const colorMap = {
    default: "text-neutral-900",
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600"
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-sm font-medium text-neutral-600 mb-2">
        {label}
      </h3>
      <div className="flex items-baseline gap-2">
        <p className={`text-3xl font-bold ${colorMap[type]}`}>
          {value}
        </p>
        {trend && (
          <div className={trend === "up" ? "text-green-600" : "text-red-600"}>
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
          </div>
        )}
      </div>
      {subtitle && (
        <p className="text-xs text-neutral-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
};
