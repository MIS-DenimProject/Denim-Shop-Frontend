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
}) => {
  const [activeItem, setActiveItem] = useState(
    activeItemId || items[0]?.id || "dashboard"
  );

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  return (
    <nav className={cn(`flex-1 overflow-y-auto py-4 px-3`, className)}>
      <div className="space-y-1">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};
