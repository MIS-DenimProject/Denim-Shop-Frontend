import { useState } from "react";
import { Plus } from "lucide-react";
import { 
  ProductionPipeline, 
  ProductionTable, 
  ProductionTimeline,
  ProductionStats,
  ProductionFilters,
  AddOrderModal,
  Toast
} from "@/components";

export const ProductionTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
  const [productionItems, setProductionItems] = useState([
    {
      orderId: "ORD-1024",
      style: "Slim Fit Blue",
      quantity: "500 units",
      currentStage: "Sewing",
      progress: 60,
      assignedTo: "Team C - Sewing",
      estCompletion: "11/2/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1023",
      style: "Regular Fit Black",
      quantity: "350 units",
      currentStage: "Dyeing",
      progress: 75,
      assignedTo: "Team D - Dyeing",
      estCompletion: "10/30/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1025",
      style: "Bootcut Indigo",
      quantity: "300 units",
      currentStage: "Assembling",
      progress: 30,
      assignedTo: "Team B - Assembly",
      estCompletion: "11/5/2025",
      status: "warning" as const
    },
    {
      orderId: "ORD-1026",
      style: "Straight Fit Dark",
      quantity: "450 units",
      currentStage: "Cutting",
      progress: 15,
      assignedTo: "Team A - Cutting",
      estCompletion: "11/8/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1027",
      style: "Relaxed Fit Light",
      quantity: "280 units",
      currentStage: "Ironing/QC",
      progress: 90,
      assignedTo: "Team E - QC",
      estCompletion: "10/29/2025",
      status: "info" as const
    },
    {
      orderId: "ORD-1028",
      style: "Skinny Fit Black",
      quantity: "520 units",
      currentStage: "Sewing",
      progress: 45,
      assignedTo: "Team C - Sewing",
      estCompletion: "11/4/2025",
      status: "warning" as const
    },
    {
      orderId: "ORD-1029",
      style: "Bootcut Dark Wash",
      quantity: "390 units",
      currentStage: "Cutting",
      progress: 25,
      assignedTo: "Team A - Cutting",
      estCompletion: "11/6/2025",
      status: "warning" as const
    },
    {
      orderId: "ORD-1030",
      style: "Regular Fit Blue",
      quantity: "420 units",
      currentStage: "Dyeing",
      progress: 70,
      assignedTo: "Team D - Dyeing",
      estCompletion: "11/1/2025",
      status: "info" as const
    }
  ]);

  // Handler for updating production items
  const handleUpdateItem = (orderId: string, updates: Partial<typeof productionItems[0]>) => {
    setProductionItems(prevItems =>
      prevItems.map(item =>
        item.orderId === orderId ? { ...item, ...updates } : item
      )
    );
    setToastMessage(`Order ${orderId} updated successfully!`);
    console.log(`Updated ${orderId}:`, updates);
  };

  // Statistics data
  const statsData = {
    totalOrders: 12,
    activeOrders: 8,
    completedToday: 2,
    pendingOrders: 2,
    delayedOrders: 2
  };

  // Pipeline data
  const pipelineData = [
    { stage: "Cutting" as const, count: 450 },
    { stage: "Assembling" as const, count: 380 },
    { stage: "Sewing" as const, count: 320 },
    { stage: "Dyeing" as const, count: 280 },
    { stage: "Ironing/QC" as const, count: 245 }
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
    },
    {
      orderId: "ORD-1027",
      quantity: 400,
      style: "Relaxed Fit Light",
      progress: 90,
      stages: [
        { stage: "Cutting" as const, isCompleted: true, isActive: false },
        { stage: "Assembling" as const, isCompleted: true, isActive: false },
        { stage: "Sewing" as const, isCompleted: true, isActive: false },
        { stage: "Dyeing" as const, isCompleted: true, isActive: false },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: true }
      ]
    },
    {
      orderId: "ORD-1028",
      quantity: 550,
      style: "Skinny Fit Black",
      progress: 55,
      stages: [
        { stage: "Cutting" as const, isCompleted: true, isActive: false },
        { stage: "Assembling" as const, isCompleted: true, isActive: false },
        { stage: "Sewing" as const, isCompleted: false, isActive: true },
        { stage: "Dyeing" as const, isCompleted: false, isActive: false },
        { stage: "Ironing/QC" as const, isCompleted: false, isActive: false }
      ]
    }
  ];

  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Production Management</h1>
            <p className="text-sm text-neutral-600 mt-1">{getCurrentDate()}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-denim-600 text-black rounded-lg font-bold hover:bg-denim-700 border-1 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          <Plus className="w-5 h-5 font-bold" />
          Add New Order
        </button>
      </div>

      {/* Production Statistics */}
      <ProductionStats {...statsData} />

      {/* Filters */}
      <ProductionFilters />

      {/* Production Pipeline Section */}
      <ProductionPipeline data={pipelineData} />

      {/* Production Items Table Section */}
      <ProductionTable items={productionItems} onUpdateItem={handleUpdateItem} />

      {/* Production Timeline Section */}
      <ProductionTimeline items={timelineItems} />

      {/* Add Order Modal */}
      <AddOrderModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};
