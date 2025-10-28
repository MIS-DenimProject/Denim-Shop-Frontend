import type { FC } from "react";
import { TrendingUp, Package, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

interface ProductionStatsProps {
  totalOrders: number;
  activeOrders: number;
  completedToday: number;
  pendingOrders: number;
  delayedOrders: number;
}

export const ProductionStats: FC<ProductionStatsProps> = ({
  totalOrders,
  activeOrders,
  completedToday,
  pendingOrders,
  delayedOrders
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Total Orders */}
      <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/40 shadow-inner">
            <Package className="w-6 h-6" />
          </div>
          <TrendingUp className="w-5 h-5 opacity-75" />
        </div>
        <p className="text-sm font-medium opacity-90 mb-1">Total Orders</p>
        <h3 className="text-3xl font-bold">{totalOrders}</h3>
        <p className="text-xs opacity-75 mt-2">In production</p>
      </div>

      {/* Active Orders */}
      <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/40 shadow-inner">
            <Clock className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm font-medium opacity-90 mb-1">Active Orders</p>
        <h3 className="text-3xl font-bold">{activeOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Currently processing</p>
      </div>

      {/* Completed Today */}
      <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/40 shadow-inner">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm font-medium opacity-90 mb-1">Completed Today</p>
        <h3 className="text-3xl font-bold">{completedToday}</h3>
        <p className="text-xs opacity-75 mt-2">Finished orders</p>
      </div>

      {/* Pending Orders */}
      <div className="bg-linear-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/40 shadow-inner">
            <Package className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm font-medium opacity-90 mb-1">Pending Start</p>
        <h3 className="text-3xl font-bold">{pendingOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Awaiting production</p>
      </div>

      {/* Delayed Orders */}
      <div className="bg-linear-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/40 shadow-inner">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm font-medium opacity-90 mb-1">Delayed</p>
        <h3 className="text-3xl font-bold">{delayedOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Behind schedule</p>
      </div>
    </div>
  );
};
