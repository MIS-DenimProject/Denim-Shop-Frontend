import type { FC } from "react";
import { Factory } from "lucide-react";
import { cn } from "@/utils";
import type { SidebarLogoProps } from "@/utils";

export const SidebarLogo: FC<SidebarLogoProps> = ({
  companyName = "DenimTech",
  subtitle = "Enterprise MIS",
  className = "",
  isCollapsed = false,
}) => {
  return (
    <div
      className={cn(
        `flex items-center border-b border-sidebar-border transition-all duration-300 shrink-0`,
        isCollapsed ? "justify-center px-3 py-6 w-full" : "gap-3 px-6 py-6",
        className
      )}
    >
      <div 
        className={cn(
          "sidebar-gradient-logo flex items-center justify-center rounded-xl shadow-lg transition-all duration-300 shrink-0",
          isCollapsed ? "w-10 h-10" : "w-11 h-11"
        )}
      >
        <Factory className={cn(
          "text-(--neutral-white) transition-all duration-300",
          isCollapsed ? "w-5 h-5" : "w-6 h-6"
        )} />
      </div>
      <div 
        className={cn(
          "flex flex-col overflow-hidden transition-all duration-300",
          isCollapsed ? "hidden" : "w-auto opacity-100"
        )}
      >
        <h1 className="text-lg font-bold tracking-tight text-(--neutral-white) whitespace-nowrap">
          {companyName}
        </h1>
        <p className="text-xs font-medium text-(--neutral-300) whitespace-nowrap">{subtitle}</p>
      </div>
    </div>
  );
};
