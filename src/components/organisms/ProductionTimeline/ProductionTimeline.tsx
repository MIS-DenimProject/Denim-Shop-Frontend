import type { FC } from "react";
import { TimelineStage } from "@/components";

interface TimelineItem {
  orderId: string;
  quantity: number;
  style: string;
  progress: number;
  stages: {
    stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
    isCompleted: boolean;
    isActive: boolean;
  }[];
}

interface ProductionTimelineProps {
  items: TimelineItem[];
}

export const ProductionTimeline: FC<ProductionTimelineProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
      <h2 className="text-xl font-bold text-neutral-900 mb-6">Production Schedule & Timeline</h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.orderId} className="border-b border-neutral-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  {item.orderId}
                </a>
                <span className="text-neutral-600 ml-2">{item.quantity} units - {item.style}</span>
              </div>
              <div className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {item.progress}% Complete
              </div>
            </div>
            <div className="flex items-center gap-0">
              {item.stages.map((stage, index) => (
                <TimelineStage
                  key={stage.stage}
                  stage={stage.stage}
                  isCompleted={stage.isCompleted}
                  isActive={stage.isActive}
                  showLine={index < item.stages.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
