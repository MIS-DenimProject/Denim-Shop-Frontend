import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate , useLocation } from "react-router-dom";
import {
  DashboardPage,
  Sidebar,
  OrdersPage,
  ProductionsPage,
  InventoryPage,
  QualityControlPage,
  ReportsPage,
} from "@/components";
import { LoginPage } from "@/components/pages/LoginPage";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function App() {
  const getInitialPage = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      if (page) return page;
      // also support hash like #inventory
      if (window.location.hash) return window.location.hash.replace('#', '');
    } catch (e) {
      // ignore in non-browser environments
    }
    return 'dashboard';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage());
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const handleNavigate = (itemId: string) => {
    setActivePage(itemId);
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
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <div className="flex h-screen bg-[hsl(var(--color-gray-50))] overflow-hidden">
                <Sidebar
                  userName="John Doe"
                  userRole="System Administrator"
                  onNavigate={handleNavigate}
                  onLogout={handleLogout}
                  activeItemId={activePage}
                />
                <main
                  className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 ${
                    sidebarHidden ? 'pl-0' : 'pl-0'
                  }`}
                >
                  {renderContent()}
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
