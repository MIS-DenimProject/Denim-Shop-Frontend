import type { FC } from "react";
import { StatCard } from "@/components";


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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
      <div className=" relative">
       
        <StatCard
          label="Total Inspected"
          value={totalInspected}
          subtitle="units checked"
        />
      </div>
      
      <div className="relative">
        
        <StatCard
          label="Pass Rate"
          value={`${passRate}%`}
          type="success"
          trend="up"
          subtitle={passedUnits ? `${passedUnits} units passed` : undefined}
        />
      </div>
      
      <div className="relative">
       
        <StatCard
          label="Failed Units"
          value={failedUnits}
          type="error"
          subtitle="need rework"
        />
      </div>
      
      <div className="relative">
       
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
