import { KPI } from "@/components";

export function KPICardGrid() {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  py-4 bg-(--color-background)">
      <KPI
        title="Today's Production"
        value="285 units"
        change="+12.5%"
        trend="up"
        description="Trending up this month"
        subtext="Visitors for the last 6 months"
      />

      <KPI
        title="Active Orders"
        value="24"
        change="0%"
        trend="neutral"
        description="No change this period"
        subtext="Acquisition needs attention"
      />

      <KPI
        title="Quality Pass Rate"
        value="94.5%"
        change="-2.5%"
        trend="down"
        description="Strong user retention"
        subtext="Engagement exceeds targets"
      />

      <KPI
        title="Revenue(This month)"
        value="$45,280"
        change="+4.5%"
        trend="up"
        description="From 3,450 units sold"
        subtext="Meets growth projections"
      />
    </div>
  );
}
