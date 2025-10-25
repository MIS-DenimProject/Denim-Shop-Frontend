import { SidebarLogo } from '@/components/atoms';
import { SidebarNavigation, SidebarFooter } from '@/components/molecules';
import { cn } from '@/lib/utils';

export interface SidebarProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onNavigate?: (itemId: string) => void;
  onLogout?: () => void;
  activeItemId?: string;
  className?: string;
}

export const Sidebar = ({
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
        'flex flex-col h-screen w-64 bg-white border-r border-[hsl(var(--color-gray-200))] shadow-sm',
        className
      )}
    >
      {/* Logo Section */}
      <SidebarLogo />

      {/* Divider */}
      <div className="border-t border-[hsl(var(--color-gray-200))]" />

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <SidebarNavigation onNavigate={onNavigate} activeItemId={activeItemId} />
      </div>

      {/* Footer Section */}
      <SidebarFooter
        userName={userName}
        userRole={userRole}
        userAvatar={userAvatar}
        onLogout={onLogout}
      />
    </aside>
  );
};
