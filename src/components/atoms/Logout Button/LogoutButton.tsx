import type { FC } from "react";
import { LogOut } from "lucide-react";
import type { LogoutButtonProps } from "@/utils";

export const LogoutButton: FC<LogoutButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-(--transition-speed) border border-(--denim-600) text-(--neutral-200) hover:bg-(--denim-600) hover:text-(--neutral-white)"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </button>
  );
};
