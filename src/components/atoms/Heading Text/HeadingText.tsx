import type { FC } from "react";
import { cn, type HeadingTextProps } from "@/utils";

export const HeadingText: FC<HeadingTextProps> = ({
  headingText,
  className,
}) => {
  return <div className={cn(`text-3xl font-bold text-[hsl(var(--color-gray-900))]`, className)}>
    {headingText}
    </div>;
};
