import { cn, type HeadingTextProps } from "@/utils";
import type { FC } from "react";

export const SubHeadingText: FC<HeadingTextProps> = ({
  headingText,
  className,
}) => {
  return (
  <div className={cn(`text-sm text-[hsl(var(--color-gray-500))]`, className)}>
    {headingText}
  </div>
  );
};
