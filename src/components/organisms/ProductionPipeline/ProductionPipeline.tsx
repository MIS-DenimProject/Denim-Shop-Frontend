import type { FC } from "react";
import { PipelineStageCard } from "@/components";

interface PipelineData {
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
  count: number;
}

interface ProductionPipelineProps {
  data: PipelineData[];
}

export const ProductionPipeline: FC<ProductionPipelineProps> = ({ data }) => {
  const totalUnits = data.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-neutral-200 bg-linear-to-r from-denim-50 to-neutral-50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Production Pipeline</h2>
            <p className="text-sm text-neutral-600 mt-1">Current production flow across all stages</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-neutral-600">Total Units in Production</p>
            <p className="text-2xl font-bold text-denim-600">{totalUnits.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between">
          {data.map((item, index) => (
            <PipelineStageCard 
              key={item.stage}
              stage={item.stage}
              count={item.count}
              showArrow={index < data.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
