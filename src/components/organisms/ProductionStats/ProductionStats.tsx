import type { FC } from "react";


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
      <div className="bg-linear-to-br from-denim-600 to-denim-700 rounded-xl p-6 text-black  border-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        
        <p className="text-sm font-medium opacity-90 mb-1">Total Orders</p>
        <h3 className="text-3xl font-bold">{totalOrders}</h3>
        <p className="text-xs opacity-75 mt-2">In production</p>
      </div>

      {/* Active Orders */}
      <div className="bg-linear-to-br from-denim-500 to-denim-600 rounded-xl p-6 text-black  border-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        
        <p className="text-sm font-medium opacity-90 mb-1">Active Orders</p>
        <h3 className="text-3xl font-bold">{activeOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Currently processing</p>
      </div>

      {/* Completed Today */}
      <div className="bg-linear-to-br from-denim-700 to-denim-800 rounded-xl p-6 text-black  border-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
       
        <p className="text-sm font-medium opacity-90 mb-1">Completed Today</p>
        <h3 className="text-3xl font-bold">{completedToday}</h3>
        <p className="text-xs opacity-75 mt-2">Finished orders</p>
      </div>

      {/* Pending Orders */}
      <div className="bg-linear-to-br from-denim-400 to-denim-500 rounded-xl p-6 text-black  border-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        
        <p className="text-sm font-medium opacity-90 mb-1">Pending Start</p>
        <h3 className="text-3xl font-bold">{pendingOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Awaiting production</p>
      </div>

      {/* Delayed Orders */}
      <div className="bg-linear-to-br rounded-xl p-6 text-black  border-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        
        <p className="text-sm font-medium opacity-90 mb-1">Delayed</p>
        <h3 className="text-3xl font-bold">{delayedOrders}</h3>
        <p className="text-xs opacity-75 mt-2">Behind schedule</p>
      </div>
    </div>
  );
};
