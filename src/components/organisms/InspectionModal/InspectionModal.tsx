import type { FC } from "react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { FormInput, FormSelect, FormTextarea, FormCheckbox } from "@/components";

interface InspectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InspectionModal: FC<InspectionModalProps> = ({ open, onOpenChange }) => {
  const [checklist, setChecklist] = useState({
    stitchingQuality: false,
    colorConsistency: false,
    buttonZipper: false,
    sizeMeasurements: false,
    fabricQuality: false,
    threadTrimming: false,
    labelPlacement: false,
    overallAppearance: false
  });

  const [defects, setDefects] = useState({
    stitchingIssue: false,
    fabricDefect: false,
    sizeInconsistency: false,
    threadingProblem: false,
    colorVariation: false,
    buttonZipperIssue: false,
    washingDefect: false,
    patternMismatch: false
  });

  const orderOptions = [
    { value: "", label: "Select order" },
    { value: "ORD-1024", label: "ORD-1024" },
    { value: "ORD-1023", label: "ORD-1023" },
    { value: "ORD-1025", label: "ORD-1025" },
    { value: "ORD-1026", label: "ORD-1026" }
  ];

  const handleChecklistChange = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDefectChange = (key: keyof typeof defects) => {
    setDefects(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Inspection saved");
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scaleIn">
          <div className="sticky top-0 bg-white border-b border-neutral-200 px-8 py-6 flex items-center justify-between z-10">
            <Dialog.Title className="text-2xl font-bold text-neutral-900">
              Quality Control Inspection
            </Dialog.Title>
            <Dialog.Close className="text-neutral-500 hover:text-neutral-900 transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>
          </div>

          <div className="px-8 py-6 space-y-6">
            {/* Batch and Order Info */}
            <div className="grid grid-cols-2 gap-6">
              <FormInput
                label="Batch Number"
                id="batchNumber"
                placeholder="BATCH-2025-XXX"
                defaultValue="BATCH-2025-XXX"
              />
              <FormSelect
                label="Order Number"
                id="orderNumber"
                options={orderOptions}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FormInput
                label="Total Quantity"
                id="totalQuantity"
                type="number"
                placeholder="500"
                defaultValue="500"
              />
              <FormInput
                label="Inspector"
                id="inspector"
                placeholder="Inspector name"
              />
            </div>

            {/* Quality Checklist */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-neutral-900">Quality Checklist</h3>
              <div className="space-y-3 p-4 bg-neutral-50 rounded-lg">
                <FormCheckbox
                  label="Stitching quality and strength"
                  id="stitchingQuality"
                  checked={checklist.stitchingQuality}
                  onChange={() => handleChecklistChange('stitchingQuality')}
                />
                <FormCheckbox
                  label="Color consistency and match"
                  id="colorConsistency"
                  checked={checklist.colorConsistency}
                  onChange={() => handleChecklistChange('colorConsistency')}
                />
                <FormCheckbox
                  label="Button and zipper functionality"
                  id="buttonZipper"
                  checked={checklist.buttonZipper}
                  onChange={() => handleChecklistChange('buttonZipper')}
                />
                <FormCheckbox
                  label="Size and measurements accuracy"
                  id="sizeMeasurements"
                  checked={checklist.sizeMeasurements}
                  onChange={() => handleChecklistChange('sizeMeasurements')}
                />
                <FormCheckbox
                  label="Fabric quality and finish"
                  id="fabricQuality"
                  checked={checklist.fabricQuality}
                  onChange={() => handleChecklistChange('fabricQuality')}
                />
                <FormCheckbox
                  label="Thread trimming and cleaning"
                  id="threadTrimming"
                  checked={checklist.threadTrimming}
                  onChange={() => handleChecklistChange('threadTrimming')}
                />
                <FormCheckbox
                  label="Label placement and quality"
                  id="labelPlacement"
                  checked={checklist.labelPlacement}
                  onChange={() => handleChecklistChange('labelPlacement')}
                />
                <FormCheckbox
                  label="Overall appearance and presentation"
                  id="overallAppearance"
                  checked={checklist.overallAppearance}
                  onChange={() => handleChecklistChange('overallAppearance')}
                />
              </div>
            </div>

            {/* Passed and Failed Quantities */}
            <div className="grid grid-cols-2 gap-6">
              <FormInput
                label="Passed Quantity"
                id="passedQuantity"
                type="number"
                placeholder="0"
                defaultValue="0"
              />
              <FormInput
                label="Failed Quantity"
                id="failedQuantity"
                type="number"
                placeholder="0"
                defaultValue="0"
              />
            </div>

            {/* Defect Categories */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-neutral-900">Defect Categories (if any)</h3>
              <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-lg">
                <FormCheckbox
                  label="Stitching Issue"
                  id="stitchingIssue"
                  checked={defects.stitchingIssue}
                  onChange={() => handleDefectChange('stitchingIssue')}
                />
                <FormCheckbox
                  label="Color Variation"
                  id="colorVariation"
                  checked={defects.colorVariation}
                  onChange={() => handleDefectChange('colorVariation')}
                />
                <FormCheckbox
                  label="Fabric Defect"
                  id="fabricDefect"
                  checked={defects.fabricDefect}
                  onChange={() => handleDefectChange('fabricDefect')}
                />
                <FormCheckbox
                  label="Button/Zipper Issue"
                  id="buttonZipperIssue"
                  checked={defects.buttonZipperIssue}
                  onChange={() => handleDefectChange('buttonZipperIssue')}
                />
                <FormCheckbox
                  label="Size Inconsistency"
                  id="sizeInconsistency"
                  checked={defects.sizeInconsistency}
                  onChange={() => handleDefectChange('sizeInconsistency')}
                />
                <FormCheckbox
                  label="Washing Defect"
                  id="washingDefect"
                  checked={defects.washingDefect}
                  onChange={() => handleDefectChange('washingDefect')}
                />
                <FormCheckbox
                  label="Threading Problem"
                  id="threadingProblem"
                  checked={defects.threadingProblem}
                  onChange={() => handleDefectChange('threadingProblem')}
                />
                <FormCheckbox
                  label="Pattern Mismatch"
                  id="patternMismatch"
                  checked={defects.patternMismatch}
                  onChange={() => handleDefectChange('patternMismatch')}
                />
              </div>
            </div>

            {/* Inspector Notes */}
            <FormTextarea
              label="Inspector Notes"
              id="inspectorNotes"
              placeholder="Any additional observations or comments..."
            />
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-8 py-6 flex items-center justify-end gap-4">
            <Dialog.Close asChild>
              <button className="px-6 py-2.5 border border-neutral-300 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-50 transition-colors">
                Cancel
              </button>
            </Dialog.Close>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
            >
              Save Inspection
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
