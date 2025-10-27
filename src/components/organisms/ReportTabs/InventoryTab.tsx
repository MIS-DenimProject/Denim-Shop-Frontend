import type { FC } from "react";
import { KPI } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

interface InventoryItem {
  material: string;
  stock: number;
  unit: string;
  status: "healthy" | "low" | "critical";
  reorderPoint: number;
  usage: number;
}

const inventoryData: InventoryItem[] = [
  {
    material: "Denim Fabric (Raw)",
    stock: 8500,
    unit: "meters",
    status: "healthy",
    reorderPoint: 5000,
    usage: 75,
  },
  {
    material: "Thread (Polyester)",
    stock: 2200,
    unit: "spools",
    status: "low",
    reorderPoint: 2500,
    usage: 88,
  },
  {
    material: "Buttons",
    stock: 45000,
    unit: "pieces",
    status: "healthy",
    reorderPoint: 30000,
    usage: 65,
  },
  {
    material: "Zippers",
    stock: 1200,
    unit: "pieces",
    status: "critical",
    reorderPoint: 2000,
    usage: 95,
  },
  {
    material: "Labels",
    stock: 12000,
    unit: "pieces",
    status: "healthy",
    reorderPoint: 8000,
    usage: 60,
  },
  {
    material: "Rivets",
    stock: 35000,
    unit: "pieces",
    status: "healthy",
    reorderPoint: 25000,
    usage: 58,
  },
  {
    material: "Dye (Indigo)",
    stock: 450,
    unit: "kg",
    status: "low",
    reorderPoint: 500,
    usage: 90,
  },
  {
    material: "Packaging Materials",
    stock: 5500,
    unit: "units",
    status: "healthy",
    reorderPoint: 4000,
    usage: 72,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "healthy":
      return "text-green-600 bg-green-100";
    case "low":
      return "text-yellow-600 bg-yellow-100";
    case "critical":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export const InventoryTab: FC = () => {
  const criticalItems = inventoryData.filter(
    (item) => item.status === "critical"
  ).length;
  const lowStockItems = inventoryData.filter(
    (item) => item.status === "low"
  ).length;

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI
          title="Total Inventory Value"
          value="$1.2M"
          change="+5.2%"
          trend="up"
          subtext="Current stock value"
        />
        <KPI
          title="Stock Turnover Rate"
          value="4.2x"
          change="+0.3"
          trend="up"
          subtext="Times per year"
        />
        <KPI
          title="Low Stock Items"
          value={lowStockItems.toString()}
          change="-2"
          trend="down"
          subtext="Items below reorder"
        />
        <KPI
          title="Critical Stock"
          value={criticalItems.toString()}
          change="+1"
          trend="up"
          subtext="Requires immediate action"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {/* Inventory Status */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">
              Material Inventory Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {inventoryData.map((item, index) => (
                <div
                  key={index}
                  className="p-3 md:p-4 border border-(--color-border) rounded-lg hover:bg-(--color-muted) transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-sm md:text-base text-(--color-foreground)">
                          {item.material}
                        </h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-(--color-muted-foreground)">
                        Current:{" "}
                        <strong>
                          {item.stock.toLocaleString()} {item.unit}
                        </strong>{" "}
                        | Reorder:{" "}
                        <strong>{item.reorderPoint.toLocaleString()}</strong>
                      </p>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 sm:gap-0 shrink-0">
                      <p className="text-xl md:text-2xl font-bold text-(--color-foreground)">
                        {item.usage}%
                      </p>
                      <p className="text-xs text-(--color-muted-foreground)">
                        Usage
                      </p>
                    </div>
                  </div>
                  <Progress
                    value={item.usage}
                    className={`h-1.5 ${
                      item.status === "critical"
                        ? "bg-red-100"
                        : item.status === "low"
                        ? "bg-yellow-100"
                        : "bg-(--color-muted)"
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          {/* Critical Alerts */}
          {(criticalItems > 0 || lowStockItems > 0) && (
            <Card className="shadow-sm border-yellow-200 bg-yellow-50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <CardTitle className="text-lg font-semibold text-yellow-900">
                    Stock Alerts
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {criticalItems > 0 && (
                    <p className="text-sm text-yellow-800">
                      <strong>{criticalItems}</strong> item(s) in critical stock
                      level - immediate reorder required
                    </p>
                  )}
                  {lowStockItems > 0 && (
                    <p className="text-sm text-yellow-800">
                      <strong>{lowStockItems}</strong> item(s) below reorder
                      point - plan restocking soon
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          <div className="grid grid-rows-1 sm:grid-rows-3 gap-4 md:gap-6">
            <KPI
              title="Healthy Stock"
              value={inventoryData.filter((i) => i.status === "healthy").length.toString()}
              change="+2"
              trend="up"
              subtext="Items in good stock levels"
            />

            <KPI
              title="Low Stock"
              value={lowStockItems.toString()}
              change="-1"
              trend="down"
              subtext="Items need restocking soon"
            />

            <KPI
              title="Critical Stock"
              value={criticalItems.toString()}
              change="+1"
              trend="up"
              subtext="Items require immediate action"
            />
          </div>
        </div>
      </div>

      {/* Inventory Summary */}
    </div>
  );
};
