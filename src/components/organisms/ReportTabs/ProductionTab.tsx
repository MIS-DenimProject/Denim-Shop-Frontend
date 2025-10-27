import type { FC } from 'react';
import { KPI } from '@/components';
import { ReportCharts, StageEfficiency } from '@/components';

export const ProductionTab: FC = () => {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI
          title="Total Production"
          value="51,200"
          change="+12%"
          trend="up"
          subtext="vs last period"
        />
        <KPI
          title="Production Rate"
          value="1,280/day"
          change="+8.5%"
          trend="up"
          subtext="Average daily output"
        />
        <KPI
          title="Efficiency"
          value="89.3%"
          change="+3.2%"
          trend="up"
          subtext="Overall efficiency"
        />
        <KPI
          title="Defect Rate"
          value="2.1%"
          change="-0.4%"
          trend="down"
          subtext="Quality improving"
        />
      </div>

      {/* Charts */}
      <ReportCharts />

      {/* Stage Efficiency */}
      <StageEfficiency />
    </div>
  );
};
