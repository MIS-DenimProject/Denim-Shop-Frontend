import { useState, useEffect } from "react";
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
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const handleNavigate = (itemId: string) => {
    setActivePage(itemId);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  // Listen to sidebar state changes
  useEffect(() => {
    const handleSidebarState = (event: CustomEvent) => {
      const { isCollapsed } = event.detail;
      setSidebarHidden(isCollapsed);
    };

    window.addEventListener('sidebar-state-change', handleSidebarState as EventListener);
    return () => {
      window.removeEventListener('sidebar-state-change', handleSidebarState as EventListener);
    };
  }, []);

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
    <div className="flex h-screen bg-[hsl(var(--color-gray-50))] overflow-hidden">
      <Sidebar
        userName="John Doe"
        userRole="System Administrator"
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        activeItemId={activePage}
      />

      {/* Main Content Area with conditional padding for hamburger menu */}
      <main 
        className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 ${
          sidebarHidden ? 'pl-0' : 'pl-0'
        }`}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
