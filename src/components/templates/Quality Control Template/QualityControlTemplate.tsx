import { useState } from "react";
import { Plus } from "lucide-react";
import { 
  StatsOverview, 
  InspectionHistoryTable, 
  DefectCategories, 
  RecentFailedItems,
  QCChecklist,
  InspectionModal
} from "@/components";

export const QualityControlTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get current date dynamically
  const getCurrentDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('en-US', options);
  };

  const [inspections, setInspections] = useState<Array<{
    batchId: string;
    orderId: string;
    totalQty: number;
    inspected: number;
    passed: number;
    failed: number;
    passRate: number;
    inspector: string;
    date: string;
    status: "Completed" | "In Progress";
    trend?: "up" | "down";
  }>>([
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
      status: "Completed",
      trend: "down"
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
      status: "Completed",
      trend: "up"
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
      status: "In Progress",
      trend: "up"
    }
  ]);

  // Handler for updating inspections
  const handleUpdateInspection = (batchId: string, updates: Partial<typeof inspections[0]>) => {
    setInspections(prevInspections =>
      prevInspections.map(inspection =>
        inspection.batchId === batchId ? { ...inspection, ...updates } : inspection
      )
    );
    console.log(`Updated ${batchId}:`, updates);
  };

  const statsData = {
    totalInspected: 1100,
    passRate: 95.0,
    failedUnits: 55,
    activeInspections: 1,
    passedUnits: 1045
  };

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
         
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Quality Control</h1>
            <p className="text-sm text-neutral-600 mt-1">{getCurrentDate()}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          <Plus className="w-5 h-5 font-bold" />
          New Inspection
        </button>
      </div>

      <StatsOverview {...statsData} />
      
      <InspectionHistoryTable inspections={inspections} onUpdateInspection={handleUpdateInspection} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DefectCategories categories={defectCategories} />
        <RecentFailedItems items={failedItems} />
      </div>

      <QCChecklist items={checklistItems} />

      <InspectionModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};
