import type { FC } from "react";
import { CheckCircle2 } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  isChecked?: boolean;
}

export const ChecklistItem: FC<ChecklistItemProps> = ({ label, isChecked = true }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-green-300 transition-colors duration-200">
      <CheckCircle2 
        className={`w-5 h-5 ${isChecked ? 'text-green-600' : 'text-neutral-300'}`}
      />
      <span className="text-neutral-900 font-medium">{label}</span>
    </div>
  );
};
