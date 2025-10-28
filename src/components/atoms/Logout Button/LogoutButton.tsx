import type { FC } from "react";
import { LogOut } from "lucide-react";
import type { LogoutButtonProps } from "@/utils";
import { cn } from "@/utils";

export const LogoutButton: FC<LogoutButtonProps> = ({ 
  onClick,
  isCollapsed = false 
}) => {
  return (
    <button
      onClick={onClick}
      title={isCollapsed ? "Logout" : undefined}
      className={cn(
        "w-full flex items-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 border border-(--denim-600) text-(--neutral-200) hover:bg-(--denim-600) hover:text-(--neutral-white)",
        isCollapsed ? "justify-center px-2 py-2.5" : "justify-center px-4 py-2.5"
      )}
    >
      <LogOut className="w-4 h-4 shrink-0" />
      <span className={cn(
        "transition-all duration-300 whitespace-nowrap",
        isCollapsed ? "w-0 opacity-0 overflow-hidden hidden" : "w-auto opacity-100"
      )}>
        Logout
      </span>
    </button>
  );
};
