import type { FC } from "react";
import type { UserAvatarProps } from "@/utils";
import { cn } from "@/utils";

export const UserAvatar: FC<UserAvatarProps> = ({
  name = "John Doe",
  role = "Production Manager",
  avatarUrl,
  isCollapsed = false,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn(
      "flex items-center transition-all duration-300",
      isCollapsed ? "justify-center px-0" : "gap-3 px-2"
    )}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          title={isCollapsed ? `${name} - ${role}` : undefined}
          className={cn(
            "rounded-full object-cover transition-all duration-300",
            isCollapsed ? "w-9 h-9" : "w-10 h-10"
          )}
        />
      ) : (
        <div 
          title={isCollapsed ? `${name} - ${role}` : undefined}
          className={cn(
            "flex items-center justify-center rounded-full bg-(--denim-600) text-(--neutral-white) font-semibold transition-all duration-300",
            isCollapsed ? "w-9 h-9 text-xs" : "w-10 h-10 text-sm"
          )}
        >
          {initials}
        </div>
      )}
      <div className={cn(
        "flex-1 min-w-0 overflow-hidden transition-all duration-300",
        isCollapsed ? "hidden" : "w-auto opacity-100"
      )}>
        <p className="text-sm font-semibold truncate text-(--neutral-white)">
          {name}
        </p>
        <p className="text-xs truncate text-(--neutral-400)">{role}</p>
      </div>
    </div>
  );
};
