import { Factory } from "lucide-react";
import { ProductionPipelineT, ProductionTable, ProductionTimeline } from "@/components";

export const ProductionTemplate = () => {
  // Pipeline data
  const pipelineData = [
    { stage: "Cutting" as const, count: 450 },
    { stage: "Assembling" as const, count: 380 },
    { stage: "Sewing" as const, count: 320 },
    { stage: "Dyeing" as const, count: 280 },
    { stage: "Ironing/QC" as const, count: 245 }
  ];

  // Production items data
  const productionItems = [
    {
      orderId: "ORD-1024",
      style: "Slim Fit Blue",
      quantity: "500 units",
      currentStage: "Sewing",
      progress: 60,
      assignedTo: "Team A - Sewing",
      estCompletion: "11/2/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1023",
      style: "Regular Fit Black",
      quantity: "350 units",
      currentStage: "Dyeing",
      progress: 75,
      assignedTo: "Team B - Dyeing",
      estCompletion: "10/30/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1025",
      style: "Bootcut Indigo",
      quantity: "300 units",
      currentStage: "Cutting",
      progress: 30,
      assignedTo: "Team C - Cutting",
      estCompletion: "11/5/2025",
      status: "warning" as const
    },
    {
      orderId: "ORD-1026",
      style: "Straight Fit Dark",
      quantity: "450 units",
      currentStage: "Assembling",
      progress: 45,
      assignedTo: "Team D - Assembly",
      estCompletion: "11/4/2025",
      status: "warning" as const
    }
  ];

  // Timeline data
  const timelineItems = [
    {
      orderId: "ORD-1024",
      quantity: 500,
      style: "Slim Fit Blue",
      progress: 60,
      stages: [
        { stage: "Cutting" as const, isCompleted: true, isActive: false },
        { stage: "Assembling" as const, isCompleted: true, isActive: false },
        { stage: "Sewing" as const, isCompleted: false, isActive: true },
        { stage: "Dyeing" as const, isCompleted: false, isActive: false },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: false }
      ]
    },
    {
      orderId: "ORD-1023",
      quantity: 350,
      style: "Regular Fit Black",
      progress: 75,
      stages: [
        { stage: "Cutting" as const, isCompleted: true, isActive: false },
        { stage: "Assembling" as const, isCompleted: true, isActive: false },
        { stage: "Sewing" as const, isCompleted: true, isActive: false },
        { stage: "Dyeing" as const, isCompleted: false, isActive: true },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: false }
      ]
    },
    {
      orderId: "ORD-1025",
      quantity: 300,
      style: "Bootcut Indigo",
      progress: 30,
      stages: [
        { stage: "Cutting" as const, isCompleted: false, isActive: true },
        { stage: "Assembling" as const, isCompleted: false, isActive: false },
        { stage: "Sewing" as const, isCompleted: false, isActive: false },
        { stage: "Dyeing" as const, isCompleted: false, isActive: false },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: false }
      ]
    },
    {
      orderId: "ORD-1026",
      quantity: 450,
      style: "Straight Fit Dark",
      progress: 45,
      stages: [
        { stage: "Cutting" as const, isCompleted: true, isActive: false },
        { stage: "Assembling" as const, isCompleted: false, isActive: true },
        { stage: "Sewing" as const, isCompleted: false, isActive: false },
        { stage: "Dyeing" as const, isCompleted: false, isActive: false },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: false }
      ]
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-denim-600 to-denim-500 text-white shadow-lg">
          <Factory className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Production</h1>
          <p className="text-sm text-neutral-600 mt-1">Monday, October 27, 2025</p>
        </div>
      </div>

      {/* Production Pipeline Section */}
      <ProductionPipelineT data={pipelineData} />

      {/* Production Items Table Section */}
      <ProductionTable items={productionItems} />

      {/* Production Timeline Section */}
      <ProductionTimeline items={timelineItems} />
    </div>
  );
};
