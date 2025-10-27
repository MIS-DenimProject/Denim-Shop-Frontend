import type { FC } from "react";
import { StatCard } from "@/components";
import { CheckCircle2, XCircle, AlertCircle, ClipboardList } from "lucide-react";

interface StatsOverviewProps {
  totalInspected: number;
  passRate: number;
  failedUnits: number;
  activeInspections: number;
  passedUnits?: number;
}

export const StatsOverview: FC<StatsOverviewProps> = ({
  totalInspected,
  passRate,
  failedUnits,
  activeInspections,
  passedUnits
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-blue-600" />
        </div>
        <StatCard
          label="Total Inspected"
          value={totalInspected}
          subtitle="units checked"
        />
      </div>
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <StatCard
          label="Pass Rate"
          value={`${passRate}%`}
          type="success"
          trend="up"
          subtitle={passedUnits ? `${passedUnits} units passed` : undefined}
        />
      </div>
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
          <XCircle className="w-5 h-5 text-red-600" />
        </div>
        <StatCard
          label="Failed Units"
          value={failedUnits}
          type="error"
          subtitle="need rework"
        />
      </div>
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <AlertCircle className="w-5 h-5 text-yellow-600" />
        </div>
        <StatCard
          label="Active Inspections"
          value={activeInspections}
          type="warning"
          subtitle="in progress"
        />
      </div>
    </div>
  );
};
