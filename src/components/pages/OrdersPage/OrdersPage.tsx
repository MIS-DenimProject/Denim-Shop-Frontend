import { ShoppingCart } from 'lucide-react';

export const OrdersPage = () => {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--color-blue))] text-white">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">Orders</h1>
            <p className="text-sm text-[hsl(var(--color-gray-500))]">Manage customer orders and tracking</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">1,234</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Pending Orders</h3>
            <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">89</p>
            <p className="text-sm text-yellow-600 mt-2">Requires attention</p>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">Completed</h3>
            <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">1,145</p>
            <p className="text-sm text-[hsl(var(--color-gray-500))] mt-2">This month</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-6 bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm">
          <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">Recent Orders</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[hsl(var(--color-gray-200))]">
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Order ID</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Customer</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Product</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Status</th>
                    <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--color-gray-100))]">
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">#ORD-001</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">ABC Retail</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Slim Fit Jeans</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span></td>
                    <td className="py-3 text-sm font-medium text-[hsl(var(--color-gray-900))]">$2,450</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--color-gray-100))]">
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">#ORD-002</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">XYZ Fashion</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Bootcut Denim</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                    <td className="py-3 text-sm font-medium text-[hsl(var(--color-gray-900))]">$1,890</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">#ORD-003</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">Global Denim Co.</td>
                    <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">Straight Leg Jeans</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Processing</span></td>
                    <td className="py-3 text-sm font-medium text-[hsl(var(--color-gray-900))]">$3,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
