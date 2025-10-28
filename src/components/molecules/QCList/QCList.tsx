import React from 'react';
import { useQC } from '@/hooks/useQC';

export const QCList: React.FC = () => {
  const { records, loading, createRecord, refresh } = useQC();

  const addRecord = async () => {
    const productId = window.prompt('Product ID:', 'fg-1');
    const status = window.confirm('Mark as PASS? OK = Pass, Cancel = Fail') ? 'pass' : 'fail';
    try {
      await createRecord({ productId: productId || 'unknown', status: status as 'pass' | 'fail' });
      await refresh();
    } catch (err) {
      console.error(err);
      alert('Failed to create QC record');
    }
  };

  if (loading) return <div>Loading QC records...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent QC Records</h3>
        <button className="px-4 py-2 bg-neutral-900 text-white rounded" onClick={addRecord}>New QC</button>
      </div>
      <div className="bg-white rounded border p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">QC ID</th>
              <th className="pb-2">Product</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Inspector</th>
              <th className="pb-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-2">{r.id}</td>
                <td className="py-2">{r.productId}</td>
                <td className="py-2">{r.status === 'pass' ? <span className="text-green-700">Pass</span> : <span className="text-red-700">Fail</span>}</td>
                <td className="py-2">{r.inspectorId || '-'}</td>
                <td className="py-2 text-sm text-gray-500">{new Date(r.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QCList;
