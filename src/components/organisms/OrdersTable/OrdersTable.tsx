import { Eye, MoreVertical, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/atoms/StatusBadge";

interface Order {
  id: string;
  customer: string;
  style: string;
  quantity: string;
  status: "In Production" | "Quality Check" | "Completed" | "Pending";
  currentStage: string;
  priority: "High" | "Medium" | "Low";
  deliveryDate: string;
}

export const OrdersTable = () => {
  const orders: Order[] = [
    {
      id: "ORD-1024",
      customer: "Blue Denim Wholesale",
      style: "Slim Fit Blue",
      quantity: "500 units",
      status: "In Production",
      currentStage: "Sewing",
      priority: "High",
      deliveryDate: "11/3/2025"
    },
    {
      id: "ORD-1023",
      customer: "Fashion Plus Co.",
      style: "Regular Fit Black",
      quantity: "350 units",
      status: "In Production",
      currentStage: "Dyeing",
      priority: "Medium",
      deliveryDate: "11/8/2025"
    },
    {
      id: "ORD-1022",
      customer: "Metro Garments",
      style: "Bootcut Blue",
      quantity: "400 units",
      status: "Quality Check",
      currentStage: "QC",
      priority: "High",
      deliveryDate: "10/30/2025"
    },
    {
      id: "ORD-1021",
      customer: "Retail Hub Ltd.",
      style: "Straight Fit Indigo",
      quantity: "600 units",
      status: "Completed",
      currentStage: "Completed",
      priority: "Medium",
      deliveryDate: "10/25/2025"
    },
    {
      id: "ORD-1020",
      customer: "Urban Style Boutique",
      style: "Skinny Fit Dark Blue",
      quantity: "250 units",
      status: "Pending",
      currentStage: "Cutting",
      priority: "Low",
      deliveryDate: "11/10/2025"
    }
  ];

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "In Production":
        return "bg-blue-100 text-blue-800";
      case "Quality Check":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: Order["priority"]) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-orange-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-(--neutral-200) overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-(--neutral-50)">
            <tr className="text-left border-b border-(--neutral-200)">
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Order #</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Customer</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Style</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Quantity</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Status</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Current Stage</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Priority</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Delivery Date</th>
              <th className="px-6 py-4 text-sm font-medium text-(--neutral-500)">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-(--neutral-200) hover:bg-(--neutral-50)">
                <td className="px-6 py-4">
                  <span className="text-[var(--denim-600)] font-medium">{order.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span>{order.customer}</span>
                    <MapPin className="w-4 h-4 text-(--neutral-400)" />
                  </div>
                </td>
                <td className="px-6 py-4">{order.style}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.currentStage}</td>
                <td className="px-6 py-4">
                  <span className={`font-medium ${getPriorityColor(order.priority)}`}>
                    {order.priority}
                  </span>
                </td>
                <td className="px-6 py-4">{order.deliveryDate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-(--neutral-100) rounded">
                      <Eye className="w-4 h-4 text-(--neutral-500)" />
                    </button>
                    <button className="p-1 hover:bg-(--neutral-100) rounded">
                      <MoreVertical className="w-4 h-4 text-(--neutral-500)" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};