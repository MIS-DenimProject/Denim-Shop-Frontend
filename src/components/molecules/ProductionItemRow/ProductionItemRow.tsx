import { useState, type FC } from "react";
import { ProgressBar, StatusBadge } from "@/components";
import { Edit2, Check, X } from "lucide-react";

interface ProductionItemRowProps {
  orderId: string;
  style: string;
  quantity: string;
  currentStage: string;
  progress: number;
  assignedTo: string;
  estCompletion: string;
  status: "info" | "warning";
  onUpdate?: (orderId: string, updates: Partial<ProductionItemRowProps>) => void;
}

export const ProductionItemRow: FC<ProductionItemRowProps> = ({
  orderId,
  style,
  quantity,
  currentStage,
  progress,
  assignedTo,
  estCompletion,
  status,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    currentStage,
    progress,
    assignedTo,
    estCompletion,
    status
  });

  const handleSave = () => {
    onUpdate?.(orderId, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ currentStage, progress, assignedTo, estCompletion, status });
    setIsEditing(false);
  };

  const stages = ["Cutting", "Assembling", "Sewing", "Dyeing", "Ironing/QC"];
  const teams = [
    "Team A - Cutting",
    "Team B - Assembly", 
    "Team C - Sewing",
    "Team D - Dyeing",
    "Team E - QC"
  ];

  return (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200 group">
      <td className="px-6 py-4">
        <a href="#" className="text-denim-600 hover:text-denim-800 font-medium">
          {orderId}
        </a>
      </td>
      <td className="px-6 py-4 text-neutral-900 font-medium">{style}</td>
      <td className="px-6 py-4 text-neutral-700">{quantity}</td>
      
      {/* Current Stage - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <select
            value={editData.currentStage}
            onChange={(e) => setEditData({ ...editData, currentStage: e.target.value })}
            className="px-3 py-1 border-2 border-denim-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-denim-500"
          >
            {stages.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-denim-100 text-denim-800">
            {currentStage}
          </span>
        )}
      </td>
      
      {/* Progress - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="100"
              value={editData.progress}
              onChange={(e) => setEditData({ ...editData, progress: Number(e.target.value) })}
              className="w-16 px-2 py-1 border-2 border-denim-400 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-denim-500"
            />
            <span className="text-sm text-neutral-600">%</span>
          </div>
        ) : (
          <div className="w-32">
            <ProgressBar percentage={progress} />
          </div>
        )}
      </td>
      
      {/* Assigned To - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <select
            value={editData.assignedTo}
            onChange={(e) => setEditData({ ...editData, assignedTo: e.target.value })}
            className="px-3 py-1 border-2 border-denim-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-denim-500"
          >
            {teams.map((team) => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
        ) : (
          <span className="text-neutral-700">{assignedTo}</span>
        )}
      </td>
      
      {/* Est. Completion - Editable */}
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="date"
            value={editData.estCompletion}
            onChange={(e) => setEditData({ ...editData, estCompletion: e.target.value })}
            className="px-3 py-1 border-2 border-denim-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-denim-500"
          />
        ) : (
          <span className="text-neutral-700">{estCompletion}</span>
        )}
      </td>
      
      {/* Status - Editable with Quick Toggle */}
      <td className="px-6 py-4">
        {isEditing ? (
          <select
            value={editData.status}
            onChange={(e) => setEditData({ ...editData, status: e.target.value as "info" | "warning" })}
            className="px-3 py-1 border-2 border-denim-400 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-denim-500"
          >
            <option value="info">On Track</option>
            <option value="warning">Needs Attention</option>
          </select>
        ) : (
          <button
            onClick={() => {
              const newStatus = status === "info" ? "warning" : "info";
              onUpdate?.(orderId, { status: newStatus });
            }}
            className="hover:scale-105 transition-transform duration-200"
            title="Click to toggle status"
          >
            <StatusBadge type={status} />
          </button>
        )}
      </td>
      
      {/* Action Buttons */}
      <td className="px-6 py-4">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="p-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
              title="Save changes"
            >
              <Check className="w-5 h-5" />
            </button>
            <button
              onClick={handleCancel}
              className="p-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
              title="Cancel editing"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
              className="p-2 bg-denim-600 text-neutral-900 rounded-lg hover:bg-denim-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110"
            title="Edit order"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        )}
      </td>
    </tr>
  );
};
