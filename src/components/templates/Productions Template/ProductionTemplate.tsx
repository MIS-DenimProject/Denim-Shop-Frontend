import { Factory } from "lucide-react";

export const ProductionTemplate = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--color-blue))] text-white">
          <Factory className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            Productions
          </h1>
          <p className="text-sm text-[hsl(var(--color-gray-500))]">
            Monitor production lines and schedules
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Active Lines
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            8
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Today's Output
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            2,456
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Efficiency
          </h3>
          <p className="text-3xl font-bold text-green-600">94%</p>
        </div>

        <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[hsl(var(--color-gray-500))] mb-2">
            Defect Rate
          </h3>
          <p className="text-3xl font-bold text-[hsl(var(--color-gray-900))]">
            2.3%
          </p>
        </div>
      </div>

      {/* Production Lines */}
      <div className="bg-white rounded-lg border border-[hsl(var(--color-gray-200))] shadow-sm">
        <div className="p-6 border-b border-[hsl(var(--color-gray-200))]">
          <h2 className="text-lg font-semibold text-[hsl(var(--color-gray-900))]">
            Production Lines Status
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              "Line A - Cutting",
              "Line B - Sewing",
              "Line C - Washing",
              "Line D - Finishing",
            ].map((line, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[hsl(var(--color-gray-50))] rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-[hsl(var(--color-gray-900))]">
                      {line}
                    </p>
                    <p className="text-sm text-[hsl(var(--color-gray-500))]">
                      Status: Running
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[hsl(var(--color-gray-900))]">
                    {Math.floor(Math.random() * 500 + 300)} units
                  </p>
                  <p className="text-sm text-[hsl(var(--color-gray-500))]">
                    Today
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
