import type { FC } from "react";
import { DefectBar } from "@/components";
import { AlertTriangle } from "lucide-react";

interface DefectCategory {
  label: string;
  count: number;
}

interface DefectCategoriesProps {
  categories: DefectCategory[];
}

export const DefectCategories: FC<DefectCategoriesProps> = ({ categories }) => {
  const maxCount = Math.max(...categories.map(c => c.count));

  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">Top Defect Categories</h2>
      </div>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <DefectBar
            key={index}
            label={`${index + 1}. ${category.label}`}
            count={category.count}
            maxCount={maxCount}
          />
        ))}
      </div>
    </div>
  );
};
