import type { FC } from "react";
import { UserAvatar, LogoutButton } from "@/components";
import { cn } from "@/utils";
import type { SidebarFooterProps } from "@/utils";

export const SidebarFooter: FC<SidebarFooterProps> = ({
  className,
  onLogout,
  userName,
  userRole,
  userAvatar,
  isCollapsed = false,
}: SidebarFooterProps) => {
  return (
    <div
      className={cn(
        "border-t border-sidebar-border pt-4 pb-6 space-y-3 transition-all duration-300 shrink-0",
        isCollapsed ? "px-2 w-full" : "px-4",
        className
      )}
    >
      <UserAvatar 
        name={userName} 
        role={userRole} 
        avatarUrl={userAvatar}
        isCollapsed={isCollapsed}
      />
      <LogoutButton 
        onClick={onLogout} 
        isCollapsed={isCollapsed}
      />
    </div>
  );
};
