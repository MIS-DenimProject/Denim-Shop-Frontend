import type { FC } from "react";
import { StageIcon } from "@/components";
import { Check } from "lucide-react";

interface TimelineStageProps {
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
  isCompleted?: boolean;
  isActive?: boolean;
  showLine?: boolean;
}

export const TimelineStage: FC<TimelineStageProps> = ({ 
  stage, 
  isCompleted = false, 
  isActive = false,
  showLine = true 
}) => {
  return (
    <div className="flex items-center gap-2 relative">
      <div className="relative">
        <StageIcon stage={stage} isActive={isActive} isCompleted={isCompleted} />
        {isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
        )}
      </div>
      {showLine && (
        <div 
          className={`h-1 w-32 ${
            isCompleted ? 'bg-green-500' : 'bg-neutral-300'
          } transition-colors duration-300`}
        />
      )}
    </div>
  );
};
