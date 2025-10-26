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
}: SidebarFooterProps) => {
  return (
    <div
      className={cn(
        "border-t border-(--sidebar-border) pt-4 px-4 pb-5 space-y-3",
        className
      )}
    >
      <UserAvatar name={userName} role={userRole} avatarUrl={userAvatar} />
      <LogoutButton onClick={onLogout} />
    </div>
  );
};
