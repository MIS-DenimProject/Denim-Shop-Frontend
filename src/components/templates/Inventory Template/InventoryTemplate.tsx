import { Package } from 'lucide-react';

export const InventoryTemplate = () => {
  return (
         <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--color-blue))] text-white">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">Inventory</h1>
            <p className="text-sm text-[hsl(var(--color-gray-500))]">Stock management and tracking</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Total Items</h3>
            <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">15,234</p>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Low Stock</h3>
            <p className="text-3xl font-bold text-yellow-600">23</p>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Out of Stock</h3>
            <p className="text-3xl font-bold text-red-600">5</p>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Total Value</h3>
            <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">$890K</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm">
          <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">Inventory Items</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[hsl(var(--color-gray-200))]">
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Item Code</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Material</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Quantity</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Unit</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Status</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--color-gray-100))]">
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">DEN-001</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">Raw Denim Fabric</td>
                    <td className="py-3 text-sm font-medium text-[hsl(var(--color-gray-900))]">2,340</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Yards</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">In Stock</span></td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Warehouse A</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--color-gray-100))]">
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">BTN-045</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">Metal Buttons</td>
                    <td className="py-3 text-sm font-medium text-yellow-600">150</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Pieces</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Low Stock</span></td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Warehouse B</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">THR-089</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">Sewing Thread</td>
                    <td className="py-3 text-sm font-medium text-red-600">0</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Spools</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Out of Stock</span></td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Warehouse A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

