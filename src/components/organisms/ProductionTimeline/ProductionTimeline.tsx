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
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-neutral-200 bg-linear-to-r from-neutral-50 to-denim-50">
        <h2 className="text-xl font-bold text-neutral-900">Production Schedule & Timeline</h2>
        <p className="text-sm text-neutral-600 mt-1">Track order progression through production stages</p>
      </div>
      <div className="p-8">
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.orderId} className="border-b border-neutral-200 pb-8 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <a href="#" className="text-denim-600 hover:text-denim-700 font-semibold text-lg transition-colors duration-200">
                    {item.orderId}
                  </a>
                  <span className="text-neutral-600 ml-2">{item.quantity} units - {item.style}</span>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  item.progress >= 75 ? 'bg-neutral-800 text-white' :
                  item.progress >= 50 ? 'bg-neutral-600 text-white' :
                    item.progress >= 25 ? 'bg-neutral-400 text-white' :
                  'bg-neutral-200 text-white'
                }`}>
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
    </div>
  );
};
