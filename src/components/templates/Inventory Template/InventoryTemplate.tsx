import { Package } from "lucide-react";
import InventoryList from '@/components/molecules/InventoryList/InventoryList';

export const InventoryTemplate = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--color-blue))] text-white">
          <Package className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            Inventory
          </h1>
          <p className="text-sm text-[hsl(var(--color-gray-500))]">
            Stock management and tracking
          </p>
        </div>
      </div>

      {/* Top controls: search, filters, add item */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          <input
            placeholder="Search inventory items..."
            className="w-full rounded-md border px-4 py-3 bg-white text-sm shadow-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <select aria-label="Filter categories" className="rounded-md border px-3 py-2 text-sm bg-white">
            <option>All Categories</option>
            <option>Raw Material</option>
            <option>Hardware</option>
            <option>Finished Goods</option>
          </select>
          <button className="px-4 py-2 bg-neutral-900 text-white rounded-md">+ Add Item</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Total Items
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            15,234
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Low Stock
          </h3>
          <p className="text-3xl font-bold text-yellow-600">23</p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Out of Stock
          </h3>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Total Value
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            $890K
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm">
        <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">
            Inventory Items
          </h2>
        </div>
        <div className="p-6">
          <div>
            {/* Dynamic inventory list (frontend-only mock) */}
            <InventoryList />
          </div>
        </div>
      </div>
    </div>
  );
};
