import type { FC } from "react";
import { Factory } from "lucide-react";
import { cn } from "@/utils";
import type { SidebarLogoProps } from "@/utils";

export const SidebarLogo: FC<SidebarLogoProps> = ({
  companyName = "DenimTech",
  subtitle = "Enterprise MIS",
  className = "",
}) => {
  return (
    <div
      className={cn(
        `flex items-center gap-3 px-6 py-5 border-b border-(--sidebar-border)`,
        className
      )}
    >
      <div className="sidebar-gradient-logo flex items-center justify-center w-11 h-11 rounded-xl shadow-lg">
        <Factory className="w-6 h-6 text-(--neutral-white)" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold tracking-tight text-(--neutral-white)">
          {companyName}
        </h1>
        <p className="text-xs font-medium text-(--neutral-300)">{subtitle}</p>
      </div>
    </div>
  );
};
