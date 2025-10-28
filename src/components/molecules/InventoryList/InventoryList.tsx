import React from 'react';
import { useInventory } from '@/hooks/useInventory';

export const InventoryList: React.FC = () => {
  const { materials, loading } = useInventory();

  // Note: quick adjust removed from this view; use dedicated modal for stock movements.

  if (loading) return <div>Loading inventory...</div>;

  return (
    <div className="overflow-x-auto">
      <div className="bg-white rounded-lg border p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Inventory Items ({materials.length})</h3>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3">Item Name</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Current Stock</th>
              <th className="pb-3">Stock Level</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Value</th>
              <th className="pb-3">Last Restocked</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m) => {
              const status = m.quantityOnHand <= 0 ? 'Critical' : m.quantityOnHand <= m.reorderLevel ? 'Low' : 'Good';
              const max = Math.max(1, m.reorderLevel || 1);
              const value = Math.min(m.quantityOnHand, max);
              return (
                <tr key={m.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-gray-500">{m.supplier || ''}</div>
                  </td>
                  <td className="py-4 text-sm text-gray-700">{m.category}</td>
                  <td className="py-4 font-medium">{m.quantityOnHand} {m.unit}</td>
                  <td className="py-4 w-64">
                    <progress className="w-full h-3" value={value} max={max} />
                    <div className="text-xs text-gray-400 mt-1">Reorder: {m.reorderLevel} {m.unit}</div>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${status === 'Critical' ? 'bg-red-100 text-red-800' : status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-black text-white'}`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-4">{m.value ? `$${m.value.toLocaleString()}` : '-'}</td>
                  <td className="py-4 text-sm text-gray-500">{m.lastRestocked || '-'}</td>
                  <td className="py-4">
                    <button title="Download" className="mr-2">⬆️</button>
                    <button title="Upload">⬇️</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
