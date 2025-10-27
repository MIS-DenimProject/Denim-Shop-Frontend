import type { FC } from "react";

interface DefectBarProps {
  label: string;
  count: number;
  maxCount: number;
}

export const DefectBar: FC<DefectBarProps> = ({ label, count, maxCount }) => {
  const percentage = (count / maxCount) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-900">{label}</span>
        <span className="text-sm font-semibold text-neutral-700">{count} occurrence{count !== 1 ? 's' : ''}</span>
      </div>
      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
