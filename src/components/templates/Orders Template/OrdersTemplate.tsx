import { Package2, Plus } from "lucide-react";
import { Title } from "@/components/molecules/Title";
import { OrderStats } from "@/components/molecules/OrderStats";
import { OrdersTable } from "@/components/organisms/OrdersTable";
import { OrdersToolbar } from "@/components/molecules/OrdersToolbar";
import { OrderForm } from "@/components/organisms/OrderForm";
import { useState } from "react";

export const OrdersTemplate = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  return (
    <div className="w-full mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--denim-700) text-(--neutral-white) shrink-0">
            <Package2 className="w-6 h-6" />
          </div>
          <div>
            <Title
              titleHeading="Orders"
              titleSubheading="Manage wholesale orders and tracking"
            />
          </div>
        </div>

        <button
          onClick={() => setShowOrderForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-(--neutral-900) text-white rounded-md hover:bg-(--neutral-800) transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Order
        </button>
      </div>

      {/* Stats Overview */}
      <OrderStats />

      {/* Search and Filters */}
      <OrdersToolbar />

      {/* Orders Table */}
      <OrdersTable />

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm onClose={() => setShowOrderForm(false)} />
      )}
    </div>
  );
};