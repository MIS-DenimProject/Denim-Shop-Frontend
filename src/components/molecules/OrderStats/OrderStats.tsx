export const OrderStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Orders */}
      <div className="bg-gradient-to-br from-(--denim-800) to-(--denim-700) text-emerald-400 rounded-lg p-6 shadow-sm transition-all hover:bg-(--denim-700)">
        <h3 className="text-sm font-medium text-(--neutral-100) mb-2">
          Total Orders
        </h3>
        <p className="text-3xl font-bold">
          5
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-(--neutral-100)">
            All time
          </span>
          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full ">
            +12.5%
          </span>
        </div>
      </div>

      {/* Active Orders */}
      <div className="bg-gradient-to-br from-(--denim-800) to-(--denim-700) text-emerald-400 rounded-lg p-6 shadow-sm transition-all hover:bg-(--denim-800)">
        <h3 className="text-sm font-medium text-(--neutral-100) mb-2">
          In Production
        </h3>
        <p className="text-3xl font-bold">
          2
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-(--neutral-100)">
            Current active
          </span>
          <span className="text-xs  bg-red-500 text-white px-2 py-1 rounded-full">
            +5.4%
          </span>
        </div>
      </div>

      {/* Pending */}
      <div className="bg-gradient-to-br from-(--denim-800) to-(--denim-700) text-emerald-400 rounded-lg p-6 shadow-sm transition-all hover:bg-(--denim-900)">
        <h3 className="text-sm font-medium text-(--neutral-100) mb-2">
          Pending
        </h3>
        <p className="text-3xl font-bold">
          1
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-(--neutral-100)">
            Not started
          </span>
          <span className="text-xs  bg-red-500 text-white px-2 py-1 rounded-full">
            -2.1%
          </span>
        </div>
      </div>

      {/* Completed */}
      <div className="bg-gradient-to-br from-(--denim-800) to-(--denim-700) text-emerald-400 rounded-lg p-6 shadow-sm transition-all hover:brightness-95">
        <h3 className="text-sm font-medium text-(--neutral-100) mb-2">
          Completed
        </h3>
        <p className="text-3xl font-bold">
          1
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-(--neutral-100)">
            This month
          </span>
          <span className="text-xs bg-red-500 px-2 py-1 text-white rounded-full">
            +3.2%
          </span>
        </div>
      </div>
    </div>
  );
};