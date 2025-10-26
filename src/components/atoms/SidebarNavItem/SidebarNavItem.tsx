import type { FC } from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components";
import type { NavigationItemProps } from "@/utils";

export const NavigationItem: FC<NavigationItemProps> = ({
  item,
  isActive,
  onClick,
}) => {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-4 py-3 rounded-lg 
        text-sm font-medium transition-all duration-(--transition-speed) 
        group
        ${
          isActive
            ? "bg-(--sidebar-active) text-(--sidebar-text-active)"
            : "text-(--sidebar-text) hover:bg-(--sidebar-hover) hover:text-(--sidebar-text-active)"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span>{item.label}</span>
      </div>

      {item.badge ? (
        <Badge count={item.badge} isActive={isActive} />
      ) : (
        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
};
