import {
  KPICardGrid,
  ProductionChart,
  HorizontalBarChart,
  PieChartForStages,
  InventoryAlerts,
} from "@/components";
import { Title } from "@/components/molecules/Title";
import { LayoutDashboard } from "lucide-react";

export const DashboardTemplate = () => {
  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
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
        <div className="w-full lg:w-1/2">
          <HorizontalBarChart />
          {/* <VerticalBarChart /> */}
        </div>
        <div className="w-full lg:w-auto lg:max-w-[400px]">
          <PieChartForStages />
        </div>
      </div>

      <div className="w-full">
        <InventoryAlerts />
      </div>

      <div className="w-full">
        <ProductionChart />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))] mb-4">
            Recent Orders
          </h2>
          <div className="space-y-4">
            {[
              {
                id: "#ORD-001",
                customer: "ABC Retail",
                status: "Completed",
                amount: "$2,450",
              },
              {
                id: "#ORD-002",
                customer: "XYZ Fashion",
                status: "Pending",
                amount: "$1,890",
              },
              {
                id: "#ORD-003",
                customer: "Global Denim",
                status: "Processing",
                amount: "$3,200",
              },
            ].map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-[hsl(var(--color-gray-100))] last:border-0"
              >
                <div>
                  <p className="font-medium text-[hsl(var(--color-gray-900))]">
                    {order.id}
                  </p>
                  <p className="text-sm text-[hsl(var(--color-gray-500))]">
                    {order.customer}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[hsl(var(--color-gray-900))]">
                    {order.amount}
                  </p>
                  <p className="text-xs text-[hsl(var(--color-gray-500))]">
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))] mb-4">
            Production Status
          </h2>
          <div className="space-y-4">
            {[
              { line: "Line A - Cutting", status: "Running", output: 456 },
              { line: "Line B - Sewing", status: "Running", output: 389 },
              { line: "Line C - Washing", status: "Running", output: 412 },
              {
                line: "Line D - Finishing",
                status: "Maintenance",
                output: 0,
              },
            ].map((line, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-[hsl(var(--color-gray-100))] last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      line.status === "Running"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium text-[hsl(var(--color-gray-900))]">
                      {line.line}
                    </p>
                    <p className="text-sm text-[hsl(var(--color-gray-500))]">
                      {line.status}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-[hsl(var(--color-gray-900))]">
                  {line.output} units
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
