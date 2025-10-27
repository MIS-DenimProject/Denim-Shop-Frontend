export interface KPIProps {
  title: string;
  value: string | number;
  change?: string; // e.g. "+12.5%" or "-8%"
  trend?: "up" | "down" | "neutral";
  description?: string;
  subtext?: string;
  className?: string;
}