import type { FC } from "react";

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-semibold text-neutral-900">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-neutral-900 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
