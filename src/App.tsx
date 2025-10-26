import { useState } from "react";
import {
  DashboardPage,
  Sidebar,
  OrdersPage,
  ProductionsPage,
  InventoryPage,
  QualityControlPage,
  ReportsPage,
} from "@/components";

function App() {
  const [activePage, setActivePage] = useState<string>("dashboard");

  const handleNavigate = (itemId: string) => {
    setActivePage(itemId);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

    const renderContent = () => {
    switch (activePage) {
      case "orders":
        return <OrdersPage />;
      case "productions":
        return <ProductionsPage />;
      case "inventory":
        return <InventoryPage />;
      case "quality-control":
        return <QualityControlPage />;
      case "reports":
        return <ReportsPage />;
      case "dashboard":
      default:
        return <DashboardPage />;
    }
  };
  return (
    <div className="flex h-screen bg-[hsl(var(--color-gray-50))]">
      <Sidebar
        userName="John Doe"
        userRole="System Administrator"
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        activeItemId={activePage}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  );
}

export default App;
