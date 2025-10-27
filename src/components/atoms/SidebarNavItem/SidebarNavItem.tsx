import type { FC } from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components";
import type { NavigationItemProps } from "@/utils";
import { cn } from "@/utils";

export const NavigationItem: FC<NavigationItemProps> = ({
  item,
  isActive,
  onClick,
  isCollapsed = false,
}) => {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      title={isCollapsed ? item.label : undefined}
      className={cn(
        "w-full flex items-center rounded-lg text-sm font-medium transition-all duration-300 group relative",
        isCollapsed ? "justify-center px-3 py-3 w-full" : "justify-between px-4 py-3",
        isActive
          ? "bg-(--sidebar-active) text-(--sidebar-text-active)"
          : "text-(--sidebar-text) hover:bg-(--sidebar-hover) hover:text-(--sidebar-text-active)"
      )}
    >
      <div className={cn(
        "flex items-center transition-all duration-300",
        isCollapsed ? "gap-0" : "gap-3"
      )}>
        <Icon className="w-5 h-5 shrink-0" />
        <span className={cn(
          "transition-all duration-300 whitespace-nowrap",
          isCollapsed ? "w-0 opacity-0 overflow-hidden hidden" : "w-auto opacity-100"
        )}>
          {item.label}
        </span>
      </div>

      {!isCollapsed && (
        <>
          {item.badge ? (
            <Badge count={item.badge} isActive={isActive} />
          ) : (
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </>
      )}

      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-3 py-2 bg-(--sidebar-bg) text-(--neutral-white) text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-sidebar-border">
          {item.label}
          {item.badge && (
            <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-(--neutral-white) bg-(--denim-500) rounded-full">
              {item.badge}
            </span>
          )}
        </div>
      )}
    </button>
  );
};
