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
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
      <h2 className="text-xl font-bold text-neutral-900 mb-6">Production Pipeline</h2>
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
  );
};
