import type { FC } from "react";
import {  } from "@/components";
import { ArrowRight } from "lucide-react";

interface PipelineStageCardProps {
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
  count: number;
  showArrow?: boolean;
}

export const PipelineStageCard: FC<PipelineStageCardProps> = ({ stage, count, showArrow = true }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
        <div className="flex flex-col items-center gap-3">
         
          <div className="text-center">
            <h3 className="text-sm font-medium text-neutral-600 mb-1">{stage}</h3>
            <p className="text-3xl font-bold text-neutral-900">{count}</p>
            <p className="text-xs text-neutral-500 mt-1">units in progress</p>
          </div>
        </div>
      </div>
      {showArrow && (
        <ArrowRight className="w-6 h-6 text-neutral-400 shrink-0" />
      )}
    </div>
  );
};
