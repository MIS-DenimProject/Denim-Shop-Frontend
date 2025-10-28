import { Search, Filter } from "lucide-react";
import { useState } from "react";

export const OrdersToolbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg border border-[var(--neutral-200)]">
      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--neutral-500)] w-4 h-4" />
        <input
          type="text"
          placeholder="Search orders or customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-[var(--neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--denim-600)]"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4 w-full md:w-auto">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-[var(--neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--denim-600)]"
        >
          <option value="all">All Status</option>
          <option value="cutting">Cutting</option>
          <option value="assembling">Assembling</option>
          <option value="sewing">Sewing</option>
          <option value="dyeing">Dyeing</option>
          <option value="qc">Quality Check</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="px-4 py-2 border border-[var(--neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--denim-600)]"
        >
          <option value="all">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button className="flex items-center gap-2 px-4 py-2 bg-(--neutral-900) text-white rounded-md hover:bg-(--neutral-800) transition-colors">
          <Filter className="w-4 h-4" />
          Apply Filters
        </button>
      </div>
    </div>
  );
};