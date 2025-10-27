import { FileText, Calendar, Download } from "lucide-react";
import { useState } from "react";
import {
  ProductionTab,
  SalesOrdersTab,
  QualityTab,
  InventoryTab,
} from "@/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Title } from "@/components/molecules/Title";

type TabType = 'production' | 'sales' | 'quality' | 'inventory';

interface StageEfficiency {
  stage: string;
  throughput: number;
  efficiency: number;
}

interface MonthlyData {
  month: string;
  value: number;
}

interface TopCustomer {
  name: string;
  orders: number;
  revenue: string;
  growth: string;
}

interface QualityStage {
  stage: string;
  passRate: number;
  inspected: number;
}

interface DefectType {
  type: string;
  percentage: number;
}

interface InventoryItem {
  material: string;
  stock: number;
  unit: string;
  status: string;
  reorderPoint: number;
  usage: number;
}

interface BaseReportData {
  reportType: TabType;
  timeRange: string;
  generatedAt: string;
  generatedBy: string;
  kpis: Record<string, string | number>;
}

interface ProductionReportData extends BaseReportData {
  stageEfficiency: StageEfficiency[];
  monthlyProduction: MonthlyData[];
}

interface SalesReportData extends BaseReportData {
  topCustomers: TopCustomer[];
  monthlyRevenue: MonthlyData[];
}

interface QualityReportData extends BaseReportData {
  qualityByStage: QualityStage[];
  defectTypes: DefectType[];
}

interface InventoryReportData extends BaseReportData {
  inventory: InventoryItem[];
}

type ReportData = ProductionReportData | SalesReportData | QualityReportData | InventoryReportData;

export const ReportsTemplate = () => {
  const [timeRange, setTimeRange] = useState("last30days");
  const [reportType, setReportType] = useState<TabType>("production");
  const [activeTab, setActiveTab] = useState<TabType>("production");

  // Data for CSV export
  const getExportData = (): ReportData => {
    const timestamp = new Date().toISOString();
    
    const baseData = {
      reportType: activeTab,
      timeRange,
      generatedAt: timestamp,
      generatedBy: 'System Administrator',
    };

    switch (activeTab) {
      case 'production':
        return {
          ...baseData,
          kpis: {
            totalProduction: 51200,
            productionRate: '1,280/day',
            efficiency: '89.3%',
            defectRate: '2.1%',
          },
          stageEfficiency: [
            { stage: 'Cutting', throughput: 450, efficiency: 92 },
            { stage: 'Assembling', throughput: 380, efficiency: 88 },
            { stage: 'Sewing', throughput: 320, efficiency: 90 },
            { stage: 'Dyeing', throughput: 280, efficiency: 85 },
            { stage: 'Ironing/QC', throughput: 245, efficiency: 94 },
          ],
          monthlyProduction: [
            { month: 'Jan', value: 4200 },
            { month: 'Feb', value: 4500 },
            { month: 'Mar', value: 5000 },
            { month: 'Apr', value: 4700 },
            { month: 'May', value: 5500 },
            { month: 'Jun', value: 5300 },
            { month: 'Jul', value: 5700 },
            { month: 'Aug', value: 5900 },
            { month: 'Sep', value: 5800 },
            { month: 'Oct', value: 6000 },
          ],
        };
      
      case 'sales':
        return {
          ...baseData,
          kpis: {
            totalRevenue: '$627,750',
            ordersCompleted: 48,
            averageOrderValue: '$13,078',
            onTimeDelivery: '94%',
          },
          topCustomers: [
            { name: 'Blue Denim Wholesale', orders: 24, revenue: '$156,240', growth: '+15%' },
            { name: 'Fashion Plus Co.', orders: 18, revenue: '$127,890', growth: '+22%' },
            { name: 'Metro Garments', orders: 16, revenue: '$98,500', growth: '+8%' },
            { name: 'Retail Hub Ltd.', orders: 14, revenue: '$89,320', growth: '+18%' },
            { name: 'Global Denim Inc.', orders: 12, revenue: '$76,800', growth: '+12%' },
          ],
          monthlyRevenue: [
            { month: 'Jan', value: 52000 },
            { month: 'Feb', value: 58000 },
            { month: 'Mar', value: 61000 },
            { month: 'Apr', value: 59000 },
            { month: 'May', value: 65000 },
            { month: 'Jun', value: 63000 },
            { month: 'Jul', value: 68000 },
            { month: 'Aug', value: 72000 },
            { month: 'Sep', value: 70000 },
            { month: 'Oct', value: 75000 },
          ],
        };
      
      case 'quality':
        return {
          ...baseData,
          kpis: {
            qualityPassRate: '93.7%',
            defectRate: '2.1%',
            reworkRate: '3.5%',
            firstPassYield: '91.2%',
          },
          qualityByStage: [
            { stage: 'Cutting', passRate: 96.5, inspected: 4520 },
            { stage: 'Assembling', passRate: 94.2, inspected: 3850 },
            { stage: 'Sewing', passRate: 92.8, inspected: 3200 },
            { stage: 'Dyeing', passRate: 91.5, inspected: 2890 },
            { stage: 'Finishing', passRate: 95.3, inspected: 2650 },
          ],
          defectTypes: [
            { type: 'Stitching Issues', percentage: 35 },
            { type: 'Fabric Defects', percentage: 25 },
            { type: 'Color Mismatch', percentage: 20 },
            { type: 'Size Issues', percentage: 15 },
            { type: 'Other', percentage: 5 },
          ],
        };
      
      case 'inventory':
        return {
          ...baseData,
          kpis: {
            totalInventoryValue: '$1.2M',
            stockTurnoverRate: '4.2x',
            lowStockItems: 2,
            criticalStock: 1,
          },
          inventory: [
            { material: 'Denim Fabric (Raw)', stock: 8500, unit: 'meters', status: 'healthy', reorderPoint: 5000, usage: 75 },
            { material: 'Thread (Polyester)', stock: 2200, unit: 'spools', status: 'low', reorderPoint: 2500, usage: 88 },
            { material: 'Buttons', stock: 45000, unit: 'pieces', status: 'healthy', reorderPoint: 30000, usage: 65 },
            { material: 'Zippers', stock: 1200, unit: 'pieces', status: 'critical', reorderPoint: 2000, usage: 95 },
            { material: 'Labels', stock: 12000, unit: 'pieces', status: 'healthy', reorderPoint: 8000, usage: 60 },
            { material: 'Rivets', stock: 35000, unit: 'pieces', status: 'healthy', reorderPoint: 25000, usage: 58 },
            { material: 'Dye (Indigo)', stock: 450, unit: 'kg', status: 'low', reorderPoint: 500, usage: 90 },
            { material: 'Packaging Materials', stock: 5500, unit: 'units', status: 'healthy', reorderPoint: 4000, usage: 72 },
          ],
        };
      
      default:
        return {
          ...baseData,
          kpis: {},
          stageEfficiency: [],
          monthlyProduction: [],
        } as ProductionReportData;
    }
  };

  const convertToCSV = (data: ReportData): string => {
    let csv = '';
    
    // Add header information
    csv += `Report Type,${data.reportType}\n`;
    csv += `Time Range,${data.timeRange}\n`;
    csv += `Generated At,${new Date(data.generatedAt).toLocaleString()}\n`;
    csv += `Generated By,${data.generatedBy}\n\n`;
    
    // Add KPIs section
    csv += 'KEY PERFORMANCE INDICATORS\n';
    Object.entries(data.kpis).forEach(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').trim();
      csv += `${label.charAt(0).toUpperCase() + label.slice(1)},${value}\n`;
    });
    csv += '\n';
    
    // Add specific data based on report type
    switch (data.reportType) {
      case 'production':
        if ('stageEfficiency' in data && 'monthlyProduction' in data) {
          csv += 'STAGE EFFICIENCY\n';
          csv += 'Stage,Throughput (units/day),Efficiency (%)\n';
          data.stageEfficiency.forEach((stage) => {
            csv += `${stage.stage},${stage.throughput},${stage.efficiency}\n`;
          });
          csv += '\n';
          
          csv += 'MONTHLY PRODUCTION\n';
          csv += 'Month,Production (units)\n';
          data.monthlyProduction.forEach((month) => {
            csv += `${month.month},${month.value}\n`;
          });
        }
        break;
      
      case 'sales':
        if ('topCustomers' in data && 'monthlyRevenue' in data) {
          csv += 'TOP CUSTOMERS\n';
          csv += 'Customer Name,Orders,Revenue,Growth\n';
          data.topCustomers.forEach((customer) => {
            csv += `${customer.name},${customer.orders},${customer.revenue},${customer.growth}\n`;
          });
          csv += '\n';
          
          csv += 'MONTHLY REVENUE\n';
          csv += 'Month,Revenue ($)\n';
          data.monthlyRevenue.forEach((month) => {
            csv += `${month.month},${month.value}\n`;
          });
        }
        break;
      
      case 'quality':
        if ('qualityByStage' in data && 'defectTypes' in data) {
          csv += 'QUALITY BY STAGE\n';
          csv += 'Stage,Pass Rate (%),Items Inspected\n';
          data.qualityByStage.forEach((stage) => {
            csv += `${stage.stage},${stage.passRate},${stage.inspected}\n`;
          });
          csv += '\n';
          
          csv += 'DEFECT TYPES DISTRIBUTION\n';
          csv += 'Defect Type,Percentage (%)\n';
          data.defectTypes.forEach((defect) => {
            csv += `${defect.type},${defect.percentage}\n`;
          });
        }
        break;
      
      case 'inventory':
        if ('inventory' in data) {
          csv += 'INVENTORY STATUS\n';
          csv += 'Material,Current Stock,Unit,Status,Reorder Point,Usage (%)\n';
          data.inventory.forEach((item) => {
            csv += `${item.material},${item.stock},${item.unit},${item.status},${item.reorderPoint},${item.usage}\n`;
          });
        }
        break;
    }
    
    return csv;
  };

  const handleExportReport = () => {
    const reportData = getExportData();
    const csv = convertToCSV(reportData);
    
    // Create and download CSV file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeTab}-report-${timeRange}-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'production':
        return <ProductionTab />;
      case 'sales':
        return <SalesOrdersTab />;
      case 'quality':
        return <QualityTab />;
      case 'inventory':
        return <InventoryTab />;
      default:
        return <ProductionTab />;
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--denim-700) text-(--neutral-white) shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <Title
              titleHeading="Reports"
              titleSubheading="Monday, October 27, 2025"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Time Range Selector */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-(--color-muted-foreground)" />
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="last90days">Last 90 Days</SelectItem>
                <SelectItem value="thisyear">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Report Type Selector */}
          <Select value={reportType} onValueChange={(value) => setReportType(value as TabType)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="sales">Sales & Orders</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
              <SelectItem value="inventory">Inventory</SelectItem>
            </SelectContent>
          </Select>

          {/* Export Button */}
          <button
            onClick={handleExportReport}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-(--color-border)">
        {[
          { id: 'production' as TabType, label: 'Production' },
          { id: 'sales' as TabType, label: 'Sales & Orders' },
          { id: 'quality' as TabType, label: 'Quality' },
          { id: 'inventory' as TabType, label: 'Inventory' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-(--color-foreground) border-b-2 border-(--color-foreground)'
                : 'text-(--color-muted-foreground) hover:text-(--color-foreground)'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};
