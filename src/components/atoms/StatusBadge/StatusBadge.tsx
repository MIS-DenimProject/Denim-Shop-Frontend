import type { FC } from "react";
import { Info, Clock } from "lucide-react";

interface StatusBadgeProps {
  type: "info" | "warning";
}

export const StatusBadge: FC<StatusBadgeProps> = ({ type }) => {
  const config = {
    info: {
      icon: Info,
      className: "text-blue-500"
    },
    warning: {
      icon: Clock,
      className: "text-yellow-500"
    }
  };

  const Icon = config[type].icon;

  return (
    <div className={`${config[type].className}`}>
      <Icon className="w-5 h-5" />
    </div>
  );
};
