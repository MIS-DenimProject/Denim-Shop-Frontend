import {
  KPICardGrid,
  ProductionChart,
  HorizontalBarChart,
  PieChartForStages,
  InventoryAlerts,
  RecentOrders,
  ProductionPipeline,
} from "@/components";
import { Title } from "@/components/molecules/Title";
import { LayoutDashboard } from "lucide-react";

export const DashboardTemplate = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--denim-700) text-(--neutral-white) shrink-0">
          <LayoutDashboard className="w-6 h-6" />
        </div>
        <div>
          <Title
            titleHeading="Dashboard"
            titleSubheading="Overview of Gold Line Denim Factory MIS Management System"
          />
        </div>
      </div>

      <div className="w-full">
        <KPICardGrid />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="w-[60%] ">
          <HorizontalBarChart />
          {/* <VerticalBarChart /> */}
        </div>
        <div className="w-[40%] ">
          <PieChartForStages />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="w-[40%]">
          <InventoryAlerts />
        </div>
        <div className="w-[30%]">
          <ProductionPipeline />
        </div>
        <div className="w-[30%]">
           <RecentOrders />
        </div>
      </div>

      <div className="w-full">
        <ProductionChart />
      </div>
    </div>
  );
};
