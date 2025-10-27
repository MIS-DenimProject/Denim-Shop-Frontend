import type { FC } from "react";
import { NavigationItem } from "@/components";
import { useState } from "react";
import { cn } from "@/utils";
import type { SidebarNavigationProps } from "@/utils";

export const SidebarNavigation: FC<SidebarNavigationProps> = ({
  activeItemId,
  className,
  items = [],
  onNavigate,
  isCollapsed = false,
}) => {
  const [activeItem, setActiveItem] = useState(
    activeItemId || items[0]?.id || "dashboard"
  );

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  return (
    <nav className={cn(
      `flex-1 py-4 transition-all duration-300 overflow-y-auto overflow-x-hidden`,
      isCollapsed ? "px-2" : "px-3",
      className
    )}>
      <div className="space-y-1.5">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </nav>
  );
};
