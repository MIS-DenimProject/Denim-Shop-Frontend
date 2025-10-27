import type { FC } from "react";
import { Scissors, Layers, Shirt, Droplet, Sparkles } from "lucide-react";

interface StageIconProps {
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
  isActive?: boolean;
  isCompleted?: boolean;
}

export const StageIcon: FC<StageIconProps> = ({ stage, isActive, isCompleted }) => {
  const icons = {
    "Cutting": Scissors,
    "Assembling": Layers,
    "Sewing": Shirt,
    "Dyeing": Droplet,
    "Ironing/QC": Sparkles
  };

  const Icon = icons[stage];

  const getColor = () => {
    if (isCompleted) return "bg-green-500";
    if (isActive) {
      switch (stage) {
        case "Cutting": return "bg-blue-500";
        case "Assembling": return "bg-purple-500";
        case "Sewing": return "bg-pink-500";
        case "Dyeing": return "bg-orange-500";
        case "Ironing/QC": return "bg-green-500";
      }
    }
    return "bg-neutral-300";
  };

  return (
    <div className={`flex items-center justify-center w-14 h-14 rounded-full ${getColor()} text-white transition-all duration-300`}>
      <Icon className="w-7 h-7" />
    </div>
  );
};
