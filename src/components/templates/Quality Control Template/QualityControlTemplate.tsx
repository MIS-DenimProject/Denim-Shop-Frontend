import { ClipboardCheck } from "lucide-react";

export const QualityControlTemplate = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--color-blue))] text-white">
          <ClipboardCheck className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            Quality Control
          </h1>
          <p className="text-sm text-[hsl(var(--color-gray-500))]">
            Inspection reports and quality metrics
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Inspections Today
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            156
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Pass Rate
          </h3>
          <p className="text-3xl font-bold text-green-600">96.5%</p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Defects Found
          </h3>
          <p className="text-3xl font-bold text-red-600">23</p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Pending Review
          </h3>
          <p className="text-3xl font-bold text-yellow-600">12</p>
        </div>
      </div>

      {/* Inspection Reports */}
      <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm mb-6">
        <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">
            Recent Inspections
          </h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[hsl(var(--color-gray-200))]">
                  <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">
                    Batch ID
                  </th>
                  <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">
                    Product
                  </th>
                  <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">
                    Inspector
                  </th>
                  <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">
                    Result
                  </th>
                  <th className="pb-3 text-sm font-medium text-[hsl(var(--color-gray-500))]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[hsl(var(--color-gray-100))]">
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    BATCH-2345
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    Slim Fit Jeans
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Sarah Johnson
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Passed
                    </span>
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Today, 2:30 PM
                  </td>
                </tr>
                <tr className="border-b border-[hsl(var(--color-gray-100))]">
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    BATCH-2346
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    Bootcut Denim
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Mike Chen
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      Failed
                    </span>
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Today, 1:15 PM
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    BATCH-2347
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-900))]">
                    Straight Leg
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Emily Davis
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Under Review
                    </span>
                  </td>
                  <td className="py-3 text-sm text-[hsl(var(--color-gray-700))]">
                    Today, 11:45 AM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Defect Categories */}
      <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm">
        <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">
            Common Defects
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {[
              { name: "Stitching Issues", count: 8, percentage: 35 },
              { name: "Color Variation", count: 6, percentage: 26 },
              { name: "Fabric Defects", count: 5, percentage: 22 },
              { name: "Button/Zipper Issues", count: 4, percentage: 17 },
            ].map((defect, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-[hsl(var(--color-gray-700))]">
                  {defect.name}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-[hsl(var(--color-gray-200))] rounded-full h-2">
                    <div
                      className="bg-[hsl(var(--color-blue))] h-2 rounded-full"
                      style={{ width: `${defect.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-[hsl(var(--color-gray-900))] w-8">
                    {defect.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
