import { KPI } from "@/components";

export function KPICardGrid() {
  return (
    <div className="space-y-8 py-4 bg-(--color-background)">
      {/* --- PRODUCTION & OPERATIONS KPIs --- */}
      <div>
        <h2 className="text-lg font-semibold text-(--color-text-heading) mb-3">
          Production & Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <KPI
            title="Today's Production"
            value="285 units"
            change="+12.5%"
            trend="up"
            description="Units produced today across all stages"
            subtext="Compared to yesterday"
          />

          <KPI
            title="Orders in Progress"
            value="34"
            change="-5.4%"
            trend="down"
            description="Orders currently in production"
            subtext="Active production lines"
          />

          <KPI
            title="Average Production Time"
            value="6.8 days"
            change="-4.1%"
            trend="down"
            description="Avg. days to complete one unit"
            subtext="Lower is better"
          />

          <KPI
            title="Material Consumption Rate"
            value="1.2m/unit"
            change="-1.8%"
            trend="down"
            description="Avg. denim fabric used per jeans"
            subtext="Efficiency improving"
          />

          <KPI
            title="Worker Productivity"
            value="42 units/day"
            change="+5.2%"
            trend="up"
            description="Avg. production per worker"
            subtext="Across all sections"
          />

          <KPI
            title="Defect Rate"
            value="2.1%"
            change="-0.4%"
            trend="down"
            description="Defects per 100 jeans"
            subtext="Quality improving this month"
          />
        </div>
      </div>

      {/* --- QUALITY & BUSINESS PERFORMANCE KPIs --- */}
      <div>
        <h2 className="text-lg font-semibold text-(--color-text-heading) mb-3">
          Quality & Business Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <KPI
            title="On-Time Delivery Rate"
            value="94%"
            change="+2.7%"
            trend="up"
            description="Orders delivered on or before due date"
            subtext="Delivery reliability"
          />

          <KPI
            title="Revenue (Month)"
            value="Rs. 45.2M"
            change="+4.5%"
            trend="up"
            description="Total revenue from completed orders"
            subtext="Meets growth projections"
          />
        </div>
      </div>
    </div>
  );
}
