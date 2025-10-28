import type { FC } from "react";

interface StatusBadgeProps {
  type: "info" | "warning";
}

export const StatusBadge: FC<StatusBadgeProps> = ({ type }) => {
  const config = {
    info: {
      text: "Completed",
      bgColor: "bg-neutral-900",
      textColor: "text-white"
    },
    warning: {
      text: "In Progress",
      bgColor: "bg-neutral-200",
      textColor: "text-neutral-800"
    }
  };

  const badge = config[type];

  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${badge.bgColor} ${badge.textColor}`}>
      {badge.text}
    </span>
  );
};
