import { ClipboardCheck, Plus } from "lucide-react";
import { 
  StatsOverview, 
  InspectionHistoryTable, 
  DefectCategories, 
  RecentFailedItems,
  QCChecklist
} from "@/components";

export const QualityControlTemplate = () => {
  const statsData = {
    totalInspected: 1100,
    passRate: 95.0,
    failedUnits: 55,
    activeInspections: 1,
    passedUnits: 1045
  };

  const inspections = [
    {
      batchId: "BATCH-2025-145",
      orderId: "ORD-1024",
      totalQty: 500,
      inspected: 500,
      passed: 472,
      failed: 28,
      passRate: 94.4,
      inspector: "John Smith",
      date: "10/24/2025",
      status: "Completed" as const,
      trend: "down" as const
    },
    {
      batchId: "BATCH-2025-144",
      orderId: "ORD-1023",
      totalQty: 350,
      inspected: 350,
      passed: 335,
      failed: 15,
      passRate: 95.7,
      inspector: "Sarah Johnson",
      date: "10/23/2025",
      status: "Completed" as const,
      trend: "up" as const
    },
    {
      batchId: "BATCH-2025-146",
      orderId: "ORD-1025",
      totalQty: 400,
      inspected: 250,
      passed: 238,
      failed: 12,
      passRate: 95.2,
      inspector: "Mike Davis",
      date: "10/24/2025",
      status: "In Progress" as const,
      trend: "up" as const
    }
  ];

  const defectCategories = [
    { label: "Stitching Issue", count: 1 },
    { label: "Color Variation", count: 1 },
    { label: "Minor Threading", count: 1 },
    { label: "Button Placement", count: 1 }
  ];

  const failedItems = [
    {
      batchId: "BATCH-2025-145",
      orderId: "ORD-1024",
      failedCount: 28,
      defects: ["Stitching Issue", "Color Variation"]
    },
    {
      batchId: "BATCH-2025-144",
      orderId: "ORD-1023",
      failedCount: 15,
      defects: ["Minor Threading"]
    },
    {
      batchId: "BATCH-2025-146",
      orderId: "ORD-1025",
      failedCount: 12,
      defects: ["Button Placement"]
    }
  ];

  const checklistItems = [
    "Stitching quality and strength",
    "Color consistency and match",
    "Button and zipper functionality",
    "Size and measurements accuracy",
    "Fabric quality and finish",
    "Thread trimming and cleaning",
    "Label placement and quality",
    "Overall appearance and presentation"
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-denim-600 to-denim-500 text-white shadow-lg">
            <ClipboardCheck className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Quality Control</h1>
            <p className="text-sm text-neutral-600 mt-1">Monday, October 27, 2025</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-colors duration-200 shadow-md">
          <Plus className="w-5 h-5" />
          New Inspection
        </button>
      </div>

      <StatsOverview {...statsData} />
      
      <InspectionHistoryTable inspections={inspections} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DefectCategories categories={defectCategories} />
        <RecentFailedItems items={failedItems} />
      </div>

      <QCChecklist items={checklistItems} />
    </div>
  );
};
