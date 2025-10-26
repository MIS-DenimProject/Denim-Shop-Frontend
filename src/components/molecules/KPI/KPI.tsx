import type { FC } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn , type KPIProps  } from "@/utils";



export const KPI: FC<KPIProps> = ({
  title,
  value,
  change,
  trend = "up",
  description,
  subtext,
  className,
}) => {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
  const isPositive = trend === "up";
  const isNeutral = trend === "neutral";

  return (
    <div
      className={cn(
        "flex flex-col justify-between p-5 rounded-2xl shadow-sm  bg-linear-to-br from-(--denim-700) to-(--denim-900) text-white border border-(--color-border) hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-(--color-text-muted) font-medium">
            {title}
          </p>
          <h3 className="text-3xl font-semibold text-(--color-text-heading) mt-1 tabular-nums">
            {value}
          </h3>
        </div>

        {change && (
          <div
            className={cn(
              "flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full",
              isPositive
                ? "bg-(--color-success)/10 text-(--color-success)"
                : isNeutral
                ? "bg-(--color-warning)/10 text-(--color-warning)"
                : "bg-(--color-error)/10 text-(--color-error)"
            )}
          >
            <TrendIcon
              className={cn(
                "w-4 h-4",
                isPositive
                  ? "text-(--color-success)"
                  : isNeutral
                  ? "text-(--color-warning)"
                  : "text-(--color-error)"
              )}
            />
            {change}
          </div>
        )}
      </div>

      {/* Footer */}
      {(description || subtext) && (
        <div className="mt-4 text-sm">
          {description && (
            <div
              className="flex items-center gap-2 font-medium text-(--color-text-subheading)"
              style={{
                color: isPositive
                  ? "var(--color-success)"
                  : isNeutral
                  ? "var(--color-warning)"
                  : "var(--color-error)",
              }}
            >
              {description}
              <TrendIcon
                className={cn(
                  "w-4 h-4",
                  isPositive
                    ? "text-(--color-success)"
                    : isNeutral
                    ? "text-(--color-warning)"
                    : "text-(--color-error)"
                )}
              />
            </div>
          )}
          {subtext && (
            <div className="text-(--color-text-muted) mt-0.5">{subtext}</div>
          )}
        </div>
      )}
    </div>
  );
};
