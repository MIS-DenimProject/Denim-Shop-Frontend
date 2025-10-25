import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  ShoppingCart,
  Factory,
  Package,
  ClipboardCheck,
  FileText,
} from 'lucide-react';
import { SidebarNavItem } from '@/components/atoms';
import { useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarNavigationProps {
  onNavigate?: (itemId: string) => void;
  activeItemId?: string;
  className?: string;
}

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'productions', label: 'Productions', icon: Factory },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'quality-control', label: 'Quality Control', icon: ClipboardCheck },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export const SidebarNavigation = ({
  onNavigate,
  activeItemId,
  className,
}: SidebarNavigationProps) => {
  const [activeItem, setActiveItem] = useState(activeItemId || 'dashboard');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  return (
    <nav className={className}>
      <div className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};
