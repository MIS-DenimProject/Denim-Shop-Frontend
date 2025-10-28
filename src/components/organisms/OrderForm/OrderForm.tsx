// import { useState } from "react";
// import { X } from "lucide-react";

// interface OrderFormProps {
//   onClose: () => void;
//   isEdit?: boolean;
//   initialData?: {
//     id?: string;
//     customer: string;
//     style: string;
//     quantity: string;
//     priority: string;
//     deliveryDate: string;
//     notes?: string;
//   };
// }

// export const OrderForm = ({ onClose, isEdit, initialData }: OrderFormProps) => {
//   const [formData, setFormData] = useState(
//     initialData || {
//       customer: "",
//       style: "",
//       quantity: "",
//       priority: "Medium",
//       deliveryDate: "",
//       notes: "",
//     }
//   );

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg w-full max-w-2xl">
//         <div className="flex items-center justify-between p-6 border-b border-(--neutral-200)">
//           <h2 className="text-xl font-semibold text-(--neutral-900)">
//             {isEdit ? "Edit Order" : "Create New Order"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-(--neutral-100) rounded-full"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-6">
//           {/* Customer Information */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-(--neutral-900)">Customer Information</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-(--neutral-700) mb-1">
//                   Customer Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.customer}
//                   onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
//                   className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-(--neutral-700) mb-1">
//                   Style
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.style}
//                   onChange={(e) => setFormData({ ...formData, style: e.target.value })}
//                   className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Order Details */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-(--neutral-900)">Order Details</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-(--neutral-700) mb-1">
//                   Quantity
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.quantity}
//                   onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//                   className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-(--neutral-700) mb-1">
//                   Priority
//                 </label>
//                 <select
//                   value={formData.priority}
//                   onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                   className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
//                 >
//                   <option value="High">High</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-(--neutral-700) mb-1">
//                   Delivery Date
//                 </label>
//                 <input
//                   type="date"
//                   value={formData.deliveryDate}
//                   onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
//                   className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Additional Notes */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-(--neutral-900)">Additional Notes</h3>
//             <textarea
//               value={formData.notes}
//               onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//               className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600) h-32"
//               placeholder="Add any special instructions or notes..."
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="flex justify-end gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-(--neutral-200) rounded-md hover:bg-(--neutral-50)"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-(--denim-600) text-white rounded-md hover:bg-(--denim-700)"
//             >
//               {isEdit ? "Save Changes" : "Create Order"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { X } from "lucide-react";

interface OrderFormProps {
  onClose: () => void;
  isEdit?: boolean;
  initialData?: {
    id?: string;
    customer: string;
    style: string;
    quantity: string;
    priority: string;
    deliveryDate: string;
    notes?: string;
    color?: string;
    jeansStyle?: string;
  };
}

export const OrderForm = ({ onClose, isEdit, initialData }: OrderFormProps) => {
  const [formData, setFormData] = useState(
    initialData || {
      customer: "",
      style: "",
      quantity: "",
      priority: "Medium",
      deliveryDate: "",
      notes: "",
      color: "Light Blue",
      jeansStyle: "Slim Fit",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl border-2 border-black">
        <div className="flex items-center  justify-between p-6 border-b border-(--neutral-200)">
          <h2 className="text-xl font-bold text-(--neutral-900)">
            {isEdit ? "Edit Order" : "Create New Order"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-(--neutral-100) rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-(--neutral-900)">
              Customer Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={formData.customer}
                  onChange={(e) =>
                    setFormData({ ...formData, customer: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Style
                </label>
                <input
                  type="text"
                  value={formData.style}
                  onChange={(e) =>
                    setFormData({ ...formData, style: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-(--neutral-900)">
              Order Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Delivery Date
                </label>
                <input
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      deliveryDate: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                  required
                />
              </div>
            </div>

            {/* New Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Color / Wash
                </label>
                <select
                  value={formData.color}
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                >
                  <option value="Light Blue">Light Blue</option>
                  <option value="Dark Blue">Dark Blue</option>
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="White">White</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-(--neutral-700) mb-1">
                  Jeans Style
                </label>
                <select
                  value={formData.jeansStyle}
                  onChange={(e) =>
                    setFormData({ ...formData, jeansStyle: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600)"
                >
                  <option value="Skinny">Skinny</option>
                  <option value="Slim Fit">Slim Fit</option>
                  <option value="Straight">Straight</option>
                  <option value="Bootcut">Bootcut</option>
                  <option value="Relaxed">Relaxed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-(--neutral-900)">
              Additional Notes
            </h3>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full px-3 py-2 border border-(--neutral-200) rounded-md focus:outline-none focus:ring-2 focus:ring-(--denim-600) h-32"
              placeholder="Add any special instructions or notes..."
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-500 border border-(--neutral-200) rounded-md hover:bg-(--neutral-50)"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-(--denim-700)"
            >
              {isEdit ? "Save Changes" : "Create Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
