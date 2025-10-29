import type { FC } from "react";
import { Search, Filter, Calendar, Download } from "lucide-react";

interface ProductionFiltersProps {
  onSearch?: (query: string) => void;
  onStageFilter?: (stage: string) => void;
  onStatusFilter?: (status: string) => void;
}

export const ProductionFilters: FC<ProductionFiltersProps> = ({
  onSearch,
  onStageFilter,
  onStatusFilter
}) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 w-full lg:max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search orders by ID, style, or customer..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-500 focus:border-transparent transition-all duration-200"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-3">
          {/* Stage Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-10 pr-10 py-3 border-1 border-denim-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-500 focus:border-denim-500 font-semibold text-neutral-800 bg-white cursor-pointer hover:border-denim-400 hover:bg-denim-50 transition-all duration-200 shadow-sm"
              onChange={(e) => onStageFilter?.(e.target.value)}
            >
              <option value="">All Stages</option>
              <option value="Cutting">Cutting</option>
              <option value="Assembling">Assembling</option>
              <option value="Sewing">Sewing</option>
              <option value="Dyeing">Dyeing</option>
              <option value="Ironing/QC">Ironing/QC</option>
            </select>
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-denim-600 pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-10 pr-10 py-3 border-1 border-denim-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-500 focus:border-denim-500 font-semibold text-neutral-800 bg-white cursor-pointer hover:border-denim-400 hover:bg-denim-50 transition-all duration-200 shadow-sm"
              onChange={(e) => onStatusFilter?.(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="on-track">On Track</option>
              <option value="delayed">Delayed</option>
              <option value="completed">Completed</option>
            </select>
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-denim-600 pointer-events-none" />
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-5 py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};
