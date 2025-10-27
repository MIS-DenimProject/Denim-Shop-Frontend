import type { FC } from "react";
import { ChecklistItem } from "@/components";
import { FileText } from "lucide-react";

interface QCChecklistProps {
  items: string[];
}

export const QCChecklist: FC<QCChecklistProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">
          <span className="text-blue-600">Standard</span> QC Checklist
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <ChecklistItem key={index} label={item} />
        ))}
      </div>
    </div>
  );
};
