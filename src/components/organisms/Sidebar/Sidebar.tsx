import { SidebarLogo,SidebarNavigation, SidebarFooter } from '@/components';
import { cn } from '@/utils';
import { LayoutDashboard, ShoppingCart, Factory, Package, ClipboardCheck, FileText } from 'lucide-react';
import type { SidebarProps, NavItem } from '@/utils';
import type { FC } from 'react';

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'productions', label: 'Productions', icon: Factory },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'quality-control', label: 'Quality Control', icon: ClipboardCheck },
  { id: 'reports', label: 'Reports', icon: FileText },
];

const companyName = 'DenimTech';
const subtitle = 'Enterprise MIS';

export const Sidebar: FC<SidebarProps> = ({
  userName,
  userRole,
  userAvatar,
  onNavigate,
  onLogout,
  activeItemId,
  className,
}: SidebarProps) => {
  return (
    <aside
      className={cn(
        'flex flex-col h-screen w-64 bg-(--sidebar-bg) text-white shadow-2xl',
        className
      )}
    >
       <SidebarLogo companyName={companyName} subtitle={subtitle} />
      <SidebarNavigation 
        items={navigationItems}
        onNavigate={onNavigate} 
        activeItemId={activeItemId} 
      />
      <SidebarFooter
        userName={userName}
        userRole={userRole}
        userAvatar={userAvatar}
        onLogout={onLogout}
      />
    </aside>
  );
};
