import { useState, type FC } from "react";
import { TrendingUp, TrendingDown, Edit2, Check, X } from "lucide-react";

interface InspectionRowProps {
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
  onUpdate?: (batchId: string, updates: Partial<InspectionRowProps>) => void;
}

export const InspectionRow: FC<InspectionRowProps> = ({
  batchId,
  orderId,
  totalQty,
  inspected,
  passed,
  failed,
  passRate,
  inspector,
  date,
  status,
  trend,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    inspected,
    passed,
    failed,
    inspector,
    date,
    status
  });

  const handleSave = () => {
    const passRate = editData.inspected > 0 ? (editData.passed / editData.inspected) * 100 : 0;
    onUpdate?.(batchId, { ...editData, passRate });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ inspected, passed, failed, inspector, date, status });
    setIsEditing(false);
  };

  const inspectors = [
    "John Smith",
    "Sarah Johnson",
    "Mike Davis",
    "Emily Brown",
    "David Wilson"
  ];

  return (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200 group">
      <td className="px-6 py-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
          {batchId}
        </a>
      </td>
      <td className="px-6 py-4 text-neutral-900 font-medium">{orderId}</td>
      <td className="px-6 py-4 text-neutral-700">{totalQty}</td>
      
      {/* Inspected - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="number"
            min="0"
            value={editData.inspected}
            onChange={(e) => setEditData({ ...editData, inspected: Number(e.target.value) })}
            className="w-20 px-2 py-1 border-2 border-purple-400 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ) : (
          <span className="text-neutral-700">{inspected}</span>
        )}
      </td>
      
      {/* Passed - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="number"
            min="0"
            value={editData.passed}
            onChange={(e) => setEditData({ ...editData, passed: Number(e.target.value) })}
            className="w-20 px-2 py-1 border-2 border-emerald-400 rounded text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 text-green-600"
          />
        ) : (
          <span className="text-green-600 font-semibold">{passed}</span>
        )}
      </td>
      
      {/* Failed - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="number"
            min="0"
            value={editData.failed}
            onChange={(e) => setEditData({ ...editData, failed: Number(e.target.value) })}
            className="w-20 px-2 py-1 border-2 border-rose-400 rounded text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 text-red-600"
          />
        ) : (
          <span className="text-red-600 font-semibold">{failed}</span>
        )}
      </td>
      
      {/* Pass Rate - Auto-calculated */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className={`font-semibold ${passRate >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
            {passRate.toFixed(1)}%
          </span>
          {trend && (
            trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-600" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600" />
            )
          )}
        </div>
      </td>
      
      {/* Inspector - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <select
            value={editData.inspector}
            onChange={(e) => setEditData({ ...editData, inspector: e.target.value })}
            className="px-3 py-1 border-2 border-blue-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {inspectors.map((insp) => (
              <option key={insp} value={insp}>{insp}</option>
            ))}
          </select>
        ) : (
          <span className="text-neutral-700">{inspector}</span>
        )}
      </td>
      
      {/* Date - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="date"
            value={editData.date}
            onChange={(e) => setEditData({ ...editData, date: e.target.value })}
            className="px-3 py-1 border-2 border-indigo-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        ) : (
          <span className="text-neutral-700">{date}</span>
        )}
      </td>
      
      {/* Status - Editable with Quick Toggle */}
      <td className="px-6 py-4">
        {isEditing ? (
          <select
            value={editData.status}
            onChange={(e) => setEditData({ ...editData, status: e.target.value as "Completed" | "In Progress" })}
            className="px-3 py-1 border-2 border-purple-400 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        ) : (
          <button
            onClick={() => {
              const newStatus = status === "Completed" ? "In Progress" : "Completed";
              onUpdate?.(batchId, { status: newStatus });
            }}
            className="hover:scale-105 transition-transform duration-200"
            title="Click to toggle status"
          >
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
              status === "Completed" 
                ? "bg-neutral-900 text-white" 
                : "bg-neutral-200 text-neutral-800"
            }`}>
              {status}
            </span>
          </button>
        )}
      </td>
      
      {/* Action Buttons */}
      <td className="px-6 py-4">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
              title="Save changes"
            >
              <Check className="w-5 h-5" />
            </button>
            <button
              onClick={handleCancel}
              className="p-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
              title="Cancel editing"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
            title="Edit inspection"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        )}
      </td>
    </tr>
  );
};
