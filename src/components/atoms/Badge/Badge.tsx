import type { FC } from "react";
import type { BadgeProps } from "@/utils";

export const Badge: FC<BadgeProps> = ({ count, isActive }) => {
  return (
    <span
      className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-colors duration-(--transition-speed) ${
        isActive
          ? "bg-(--neutral-white) text-(--denim-800)"
          : "bg-(--color-error) text-(--neutral-white)"
      }`}
    >
      {count}
    </span>
  );
};
