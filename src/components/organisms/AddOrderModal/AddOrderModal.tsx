import type { FC } from "react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Plus } from "lucide-react";
import { FormInput, FormSelect, FormTextarea } from "@/components";

interface AddOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddOrderModal: FC<AddOrderModalProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    style: "",
    fabricType: "",
    quantity: "",
    priority: "medium",
    currentStage: "Cutting",
    progress: "0",
    assignedTeam: "",
    estCompletion: "",
    status: "info",
    specialInstructions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("New Order:", formData);
    onOpenChange(false);
    // Reset form
    setFormData({
      orderId: "",
      customerName: "",
      style: "",
      fabricType: "",
      quantity: "",
      priority: "medium",
      currentStage: "Cutting",
      progress: "0",
      assignedTeam: "",
      estCompletion: "",
      status: "info",
      specialInstructions: ""
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scaleIn z-50">
          <div className="sticky top-0 bg-white border-b border-neutral-200 px-8 py-6 flex items-center justify-between z-10">
            <div>
              <Dialog.Title className="text-2xl font-bold text-neutral-900">
                Add New Production Order
              </Dialog.Title>
              <Dialog.Description className="text-sm text-neutral-600 mt-1">
                Manually add a new order with style, quantity, stage, progress, assignment, completion date, and status
              </Dialog.Description>
            </div>
            <Dialog.Close className="w-10 h-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors duration-200">
              <X className="w-5 h-5 text-neutral-600" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> All fields marked with <strong className="text-red-600">*</strong> are required. 
                This form captures: Style, Quantity, Current Stage, Progress, Assigned To, Est. Completion, and Status.
              </p>
            </div>

            {/* Order Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-denim-500"></div>
                Order Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  id="orderId"
                  label="Order ID"
                  placeholder="ORD-1027"
                  value={formData.orderId}
                  onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                  required
                />
                <FormInput
                  id="customerName"
                  label="Customer Name"
                  placeholder="Enter customer name"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-denim-500"></div>
                Product Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  id="style"
                  label="Style *"
                  value={formData.style}
                  onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                  options={[
                    { value: "", label: "Select style" },
                    { value: "Slim Fit Blue", label: "Slim Fit Blue" },
                    { value: "Regular Fit Black", label: "Regular Fit Black" },
                    { value: "Bootcut Indigo", label: "Bootcut Indigo" },
                    { value: "Straight Fit Dark", label: "Straight Fit Dark" },
                    { value: "Relaxed Fit Light", label: "Relaxed Fit Light" },
                    { value: "Skinny Fit Black", label: "Skinny Fit Black" },
                    { value: "Bootcut Dark Wash", label: "Bootcut Dark Wash" },
                    { value: "Regular Fit Blue", label: "Regular Fit Blue" }
                  ]}
                  required
                />
                <FormSelect
                  id="fabricType"
                  label="Fabric Type"
                  value={formData.fabricType}
                  onChange={(e) => setFormData({ ...formData, fabricType: e.target.value })}
                  options={[
                    { value: "", label: "Select fabric" },
                    { value: "Blue Denim", label: "Blue Denim" },
                    { value: "Black Denim", label: "Black Denim" },
                    { value: "Indigo Denim", label: "Indigo Denim" },
                    { value: "Dark Wash", label: "Dark Wash" },
                    { value: "Light Wash", label: "Light Wash" },
                    { value: "Raw Denim", label: "Raw Denim" }
                  ]}
                  required
                />
                <FormInput
                  id="quantity"
                  label="Quantity (units) *"
                  type="number"
                  placeholder="500"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  required
                />
                <FormSelect
                  id="priority"
                  label="Priority Level"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  options={[
                    { value: "low", label: "Low Priority" },
                    { value: "medium", label: "Medium Priority" },
                    { value: "high", label: "High Priority" },
                    { value: "urgent", label: "Urgent" }
                  ]}
                  required
                />
              </div>
            </div>

            {/* Production Assignment Section */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-denim-500"></div>
                Production Assignment & Progress
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  id="currentStage"
                  label="Current Stage *"
                  value={formData.currentStage}
                  onChange={(e) => setFormData({ ...formData, currentStage: e.target.value })}
                  options={[
                    { value: "Cutting", label: "Cutting" },
                    { value: "Assembling", label: "Assembling" },
                    { value: "Sewing", label: "Sewing" },
                    { value: "Dyeing", label: "Dyeing" },
                    { value: "Ironing/QC", label: "Ironing/QC" }
                  ]}
                  required
                />
                <FormSelect
                  id="assignedTeam"
                  label="Assigned To *"
                  value={formData.assignedTeam}
                  onChange={(e) => setFormData({ ...formData, assignedTeam: e.target.value })}
                  options={[
                    { value: "", label: "Select team" },
                    { value: "Team A - Cutting", label: "Team A - Cutting" },
                    { value: "Team B - Assembly", label: "Team B - Assembly" },
                    { value: "Team C - Sewing", label: "Team C - Sewing" },
                    { value: "Team D - Dyeing", label: "Team D - Dyeing" },
                    { value: "Team E - QC", label: "Team E - QC" }
                  ]}
                  required
                />
                <FormInput
                  id="progress"
                  label="Progress (%)"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={formData.progress}
                  onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                  required
                />
                <FormInput
                  id="estCompletion"
                  label="Est. Completion Date *"
                  type="date"
                  value={formData.estCompletion}
                  onChange={(e) => setFormData({ ...formData, estCompletion: e.target.value })}
                  required
                />
                <FormSelect
                  id="status"
                  label="Status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  options={[
                    { value: "info", label: "On Track" },
                    { value: "warning", label: "Needs Attention" }
                  ]}
                  required
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-denim-500"></div>
                Additional Information
              </h3>
              <FormTextarea
                id="specialInstructions"
                label="Special Instructions"
                placeholder="Enter any special requirements, notes, or instructions for this order..."
                value={formData.specialInstructions}
                onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                rows={4}
              />
            </div>

            {/* Preview Summary */}
            {formData.style && formData.quantity && (
              <div className="bg-denim-50 border border-denim-200 rounded-lg p-4">
                <h4 className="font-semibold text-denim-900 mb-3">Order Preview:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-neutral-600 text-xs">Style</p>
                    <p className="font-semibold text-neutral-900">{formData.style}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 text-xs">Quantity</p>
                    <p className="font-semibold text-neutral-900">{formData.quantity} units</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 text-xs">Current Stage</p>
                    <p className="font-semibold text-neutral-900">{formData.currentStage}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 text-xs">Progress</p>
                    <p className="font-semibold text-neutral-900">{formData.progress}%</p>
                  </div>
                  {formData.assignedTeam && (
                    <div>
                      <p className="text-neutral-600 text-xs">Assigned To</p>
                      <p className="font-semibold text-neutral-900">{formData.assignedTeam}</p>
                    </div>
                  )}
                  {formData.estCompletion && (
                    <div>
                      <p className="text-neutral-600 text-xs">Est. Completion</p>
                      <p className="font-semibold text-neutral-900">{formData.estCompletion}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-neutral-600 text-xs">Status</p>
                    <p className="font-semibold text-neutral-900">
                      {formData.status === "info" ? "On Track" : "Needs Attention"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-6 py-2.5 border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-denim-600 text-white rounded-lg font-semibold hover:bg-denim-700 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Order
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
